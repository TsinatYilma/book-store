import postgres from 'postgres';
import { books } from '@/app/lib/placeholder-data'; 

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedBooks() {
  await sql`
    CREATE TABLE IF NOT EXISTS books (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      author TEXT NOT NULL,
      cover TEXT NOT NULL,
      rating FLOAT NOT NULL,
      category TEXT NOT NULL,
      published INTEGER NOT NULL
    );
  `;

  const insertedBooks = await Promise.all(
    books.map((book) =>
      sql`
        INSERT INTO books (name, author, cover, rating, category)
        VALUES (${book.name}, ${book.author}, ${book.cover}, ${book.rating}, ${book.category})
        ON CONFLICT DO NOTHING;
      `
    )
  );

  return insertedBooks;
}

export async function GET() {
  try {
    await seedBooks();
    return Response.json({ message: '📚 Book data seeded successfully!' });
  } catch (error) {
    console.error('❌ Book Seeding Error:', error);
    return Response.json({ error: 'Failed to seed books.' }, { status: 500 });
  }
}
