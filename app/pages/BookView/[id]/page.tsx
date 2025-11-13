// app/pages/BookView/[id]/page.tsx
import { books } from '@/app/lib/fetching-data';
import BookView from '../bookView';
import { Book } from '@/app/lib/definition';

interface Props {
  params: { id: string };
}


export default async  function BookViewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = books.find((b: Book) => b.id === id) || books.find((b:Book) => b.id === id);
  console.log("Book ID:", id);
  if (!book) return <div>Book not found</div>;

  return (
    <div className="flex flex-col pb-18 border">
      <BookView book={book}
      key={book.id}
      /> 
    </div>
  );
}
