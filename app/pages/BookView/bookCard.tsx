"use client";
import { useShelfStore } from "@/store/shelfStore";
import { Book } from "@/app/lib/definition";

export default function BookCard({ book }: { book: Book }) {
  const addToShelf = useShelfStore((state) => state.addToShelf);
  return (
    <button
      className="fancyBorder w-full mb-4 py-1"
      onClick={() => addToShelf(book)}
    >
      Add to shelf
    </button>
  );
}
