// app/pages/BookView/[id]/page.tsx
import { topRatedbooks } from '@/app/lib/fetching-data';
import BookView from '../bookView';
import { books, TopRatedbooks } from '@/app/lib/placeholder-data';

interface Props {
  params: { id: string };
}


export default async  function BookViewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = TopRatedbooks.find(b => b.id === id) || books.find(b => b.id === id);
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
