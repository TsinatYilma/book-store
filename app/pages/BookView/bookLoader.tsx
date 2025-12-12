// app/pages/BookView/[id]/BookLoader.tsx
import { topRatedbooks } from "@/app/lib/fetching-data";
import BookView from "./bookView";
import { books } from "@/app/lib/placeholder-data";

export default function BookLoader({ id }: { id: string }) {
  const book = books.find((b) => b.id === id); // assuming slug-based ID
  if (!book) return <div>Book not found</div>;

  return <BookView book={book} />;
}
