import {Book} from '../lib/definition';
import { fetchBooks } from '@/app/lib/fetching-data';

export default async function RecentlyPublishedBooks() {
    const books = await fetchBooks()
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Recently Published Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    books.map((book: Book) => (
                        <div key={book.name} className="border p-4 rounded-lg shadow-md">
                            <img src={book.cover} alt={book.name} className="w-full h-48 object-cover mb-2" />
                            <h3 className="text-lg font-semibold">{book.name}</h3>
                            <p className="text-gray-600">by {book.author}</p>
                            <p className="text-yellow-500">Rating: {book.rating}</p>
                            <p className="text-gray-500">Category: {book.category}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )}