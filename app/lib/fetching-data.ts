import postgres from 'postgres';
import {Book} from './definition';


const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchBooks() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    console.log('Fetching book data...');
    
    const data = await sql<Book[]>`SELECT * FROM books`;


    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch book data.');
  }
}
export async function getBooks(){
  return await fetchBooks()
}
const book = await getBooks()
const topRatedbook = await getBooks()

export const books = book
export const topRatedbooks = topRatedbook

