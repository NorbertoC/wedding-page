const { db } = require('@vercel/postgres');

async function seedGuestGroups(client) {
  try {
    // Create the "guest_groups" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS guest_groups (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT
      );
    `;
    
    console.log(`Created "guest_groups" table`);
    
    // Insert data into the "guest_groups" table
    const insertedGuestGroups = await Promise.all([
      client.sql`
        INSERT INTO guest_groups (name, description)
        VALUES ('Family', NULL)
        ON CONFLICT (name) DO NOTHING;
      `,
      client.sql`
        INSERT INTO guest_groups (name, description)
        VALUES ('Friends', NULL)
        ON CONFLICT (name) DO NOTHING;
      `,
      client.sql`
        INSERT INTO guest_groups (name, description)
        VALUES ('Coworkers', NULL)
        ON CONFLICT (name) DO NOTHING;
      `,
    ]);
    
    console.log(`Seeded ${insertedGuestGroups.length} guest groups`);
    
    return {
      createTable,
      guestGroups: insertedGuestGroups,
    };
  } catch (error) {
    console.error('Error seeding guest groups:', error);
    throw error;
  }
}

async function seedGuests(client) {
  try {
    // Create the "guests" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS guests (
        id SERIAL PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phone_number TEXT,
        rsvp BOOLEAN DEFAULT FALSE,
        wedding_location TEXT NOT NULL CHECK (wedding_location IN ('Auckland', 'Japan', 'Argentina')),
        guest_group_id INTEGER REFERENCES guest_groups(id)
      );
    `;
    
    console.log(`Created "guests" table`);
    
    // Insert data into the "guests" table
    const insertedGuests = await Promise.all([
      client.sql`
        INSERT INTO guests (first_name, last_name, email, phone_number, wedding_location, guest_group_id)
        VALUES ('John', 'Doe', 'john@example.com', '1234567890', 'Auckland', 1)
        ON CONFLICT (email) DO NOTHING;
      `,
      client.sql`
        INSERT INTO guests (first_name, last_name, email, phone_number, wedding_location, guest_group_id)
        VALUES ('Jane', 'Smith', 'jane@example.com', '0987654321', 'Japan', 2)
        ON CONFLICT (email) DO NOTHING;
      `,
      client.sql`
        INSERT INTO guests (first_name, last_name, email, wedding_location, guest_group_id)
        VALUES ('Bob', 'Johnson', 'bob@example.com', 'Argentina', 3)
        ON CONFLICT (email) DO NOTHING;
      `,
    ]);
    
    console.log(`Seeded ${insertedGuests.length} guests`);
    
    return {
      createTable,
      guests: insertedGuests,
    };
  } catch (error) {
    console.error('Error seeding guests:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  
  await seedGuestGroups(client);
  await seedGuests(client);
  
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});