import postgres from 'postgres';
import {Book} from './definition';
import { Genre } from './definition';
import { includes } from 'zod';



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
    console.log("bookDetail:", data)
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
    return data.genres;
 
}
export async function fetchAllReviews({bookID}:{bookID: string}) {
  // Artificially delay a response for demo purposes.
  // Don't do this in production :)
  console.log('am i trying to fetch the reviews')
  
    const res = await fetch(`http://localhost:3000/api/reviews/${bookID}`, {
      method: "GET",
    });
  
    if (!res.ok) {
      console.error("Failed to fetch reviews", res.status, res.statusText);
      return [];
    }
  
    const data = await res.json();

    return data;
 
}

export async function addtoShelf(bookId: string) {
  const res = await fetch("http://localhost:3000/api/books/addtoShelf", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ bookId }),
  });

  const data = await res.json();
  console.log(data); // { message: "Book added to shelf successfully" }
}

export async function fetchShelfBooks( ) {
  // Artificially delay a response for demo purposes.
  // Don't do this in production :)
  console.log('am i trying to fetch the genres')
  
    const res = await fetch(`http://localhost:3000/api/books/getShelf`, {
      method: "GET",
    });
  
    if (!res.ok) {
      console.error("Failed to fetch genres", res.status, res.statusText);
      return [];
    }
  
    const data = await res.json();
    return data.genres;
 
}