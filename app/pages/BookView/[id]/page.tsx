// app/pages/BookView/[id]/page.tsx
import { topRatedbooks } from '@/app/lib/fetching-data';
import BookView from '../bookView';
import { books, TopRatedbooks } from '@/app/lib/placeholder-data';

interface Props {
  params: { id: string };
}


export default function BookViewPage({ params }: Props) {
  const book = TopRatedbooks.find(b => b.id === params.id) || books.find(b => b.id === params.id) ;
  console.log("Book ID:", params.id);
  if (!book) return <div>Book not found</div>;

  return (
    <div className="flex flex-col pb-18">
      <BookView book={book}
      key={book.id}
      /> 
    </div>
  );
}
