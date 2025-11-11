import postgres from 'postgres';
import {Book} from './definition';



export async function fetchBooks() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)
    console.log('am i even trying')
    
      const res = await fetch('http://localhost:3000/api/books', {
        method: "POST",
        credentials: "include",
        cache: 'no-store', // always get fresh data
        
      });
    
      if (!res.ok) {
        console.error("Failed to fetch books", res.status, res.statusText);
        return [];
      }
    
      const data = await res.json();
      console.log("the books:", data)
      return data;
    
    
  } catch (error) {

    console.error('Database Error:', error);
    throw new Error('Failed to fetch book data.');
  }
}

const book = await fetchBooks()
const topRatedbook = await fetchBooks()

export const books = book
export const topRatedbooks = topRatedbook

