import {Book} from '../lib/definition';
import { fetchBooks } from '@/app/lib/fetching-data';
import {handlee} from "@/app/ui/fonts";

export default async function RecentlyPublishedBooks() {
    const books = await fetchBooks()
    return (
        <div className="flex flex-col  mt-14">
            <h2 className="text-2xl font-bold mb-4 text-[#238E8E]">Recently Published Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    books.map((book: Book) => (
                        <div key={book.name} className="border-4 rounded-lg shadow-md hover: hover:border-[#238E8E]">
                            <img src={book.cover} alt={book.name} className="w-full h-68 object-cover mb-2" />
                            <h3 className="text-lg">{book.name}</h3>
                            <p className={handlee.className + "text-[#238E8E]"}>by {book.author}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )}