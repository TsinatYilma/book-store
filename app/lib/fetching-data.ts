import postgres from 'postgres';
import {Book} from './definition';



export async function fetchBooks() {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)
    console.log('am i even trying')
    
      const res = await fetch('http://localhost:3000/api/books', {
        method: "GET",
        credentials: "include",
        cache: 'no-store', // always get fresh data
        
      });
    
      if (!res.ok) {
        console.error("Failed to fetch books", res.status, res.statusText);
        return [];
      }
    
      const data =  res.json();
      console.log("✅ Books fetched:", data);
      return data;
   
}

const book = await fetchBooks()
const topRatedbook = await fetchBooks()

export const books = book
export const topRatedbooks = topRatedbook

