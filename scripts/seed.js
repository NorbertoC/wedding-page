const { db } = require('@vercel/postgres');

async function seedGuests(client) {
  try {
    // Create the "guests" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS guests (
        id SERIAL PRIMARY KEY,
        first_name TEXT NOT NULL,
        middle_name TEXT DEFAULT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        rsvp BOOLEAN DEFAULT FALSE,
        wedding_location TEXT NOT NULL CHECK (wedding_location IN ('New Zealand', '日本', 'Argentina'))
      );
    `;
    
    // Insert data into the "guests" table
    const insertedGuests = await Promise.all([
      client.sql`
        INSERT INTO guests (first_name, middle_name, last_name, email, rsvp, wedding_location)
        VALUES ('John', 'Roberto', 'Doe', 'john@example.com', true, 'New Zealand')
        ON CONFLICT (email) DO NOTHING;
      `,
          client.sql`
        INSERT INTO guests (first_name, last_name, email, rsvp, wedding_location)
        VALUES ('Jane', 'Smith', 'jane@example.com', true, '日本')
        ON CONFLICT (email) DO NOTHING;
      `,
          client.sql`
        INSERT INTO guests (first_name, middle_name, last_name, email, rsvp, wedding_location)
        VALUES ('Bob', '', 'Johnson', 'bob@example.com', false, 'Argentina')
        ON CONFLICT (email) DO NOTHING;
      `,
    ]);
    
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
  
  await seedGuests(client);
  
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});