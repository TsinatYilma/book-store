import { useSearchBooks } from '@/app/hooks/useSearchBooks';
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchResults({ query }: { query: string }, ) {

  const { data: books, isLoading, error } = useSearchBooks(query);



  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <ul>
      {books.map((book: any) => (
        <li key={book.id}>
          <h3>{book.name}</h3>
          <p>{book.summary}</p>
        </li>
      ))}
    </ul>
  );
}
