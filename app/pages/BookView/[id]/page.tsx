
// app/pages/BookView/[id]/page.tsx
import { books } from '@/app/lib/fetching-data';
import BookView from '../bookView';
import { Book } from '@/app/lib/definition';
import { fetchBookDetail } from '@/app/lib/fetching-data';
import { useQuery } from '@tanstack/react-query';
import { use } from "react"; 

interface Props {
  params: { id: string };
}


export default async function BookViewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const bookDetail = await fetchBookDetail({ bookId: id })
  if (!bookDetail) return <div>Book not found</div>;

  return (
    <div key={bookDetail.id} className="flex flex-col pb-18 border">
      <BookView key={bookDetail.id} bookDetail={bookDetail}
      
      /> 
    </div>
  );
}
