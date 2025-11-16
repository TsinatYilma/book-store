import postgres from 'postgres';
import {Book} from './definition';
import { Genre } from './definition';



export async function fetchBooks() {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)
    
      console.log('am i trying to fetch the book detail')
    
      const res = await fetch('http://localhost:3000/api/books', {
        method: "GET", // always get fresh data
        
      });
    
      if (!res.ok) {
        console.error("Failed to fetch books", res.status, res.statusText);
        return [];
      }
    
      const data = await res.json();
      console.log("✅ Books fetched:", data);
      return data;
   
}

const book = await fetchBooks()
const topRatedbook = await fetchBooks()

export const books = book
export const topRatedbooks = topRatedbook

//fetch book detail

export async function fetchBookDetail({bookId}: { bookId: string } ) {
  // Artificially delay a response for demo purposes.
  // Don't do this in production :)
  console.log('am i trying to fetch the BookDetail')
  
    const res = await fetch(`http://localhost:3000/api/books/${bookId}`, {
      method: "GET",
      
    });
  
    if (!res.ok) {
      console.error("Failed to fetch books", res.status, res.statusText);
      return [];
    }
  
    const data = await  res.json();
    console.log("✅ Books Detail fetched:", data);
    return data;
 
}

export async function fetchAllGenres( ) {
  // Artificially delay a response for demo purposes.
  // Don't do this in production :)
  console.log('am i trying to fetch the genres')
  
    const res = await fetch(`http://localhost:3000/api/genres/allgenres`, {
      method: "GET",
    });
  
    if (!res.ok) {
      console.error("Failed to fetch genres", res.status, res.statusText);
      return [];
    }
  
    const data = await res.json();
    console.log("✅ Genres fetched:", data);
    return data.genres;
 
}