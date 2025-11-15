// store/shelfStore.ts
import { create } from 'zustand';
import {bookDetail} from '@/app/lib/definition';  
import {persist} from 'zustand/middleware';
import { get } from 'http';
type ShelfState = {
  shelf: bookDetail[];
  addToShelf: (book: bookDetail) => void;
  removeFromShelf: (book: bookDetail) => void;
};
console.log("Shelf store created");

export const useShelfStore = create(
  persist<ShelfState>(
    (set, get) => ({
      shelf: [],
      addToShelf: (book) => {
        const currentShelf = get().shelf;
        const alreadyExists = currentShelf.some((b) => b.id === book.id);
        if (!alreadyExists) {
          set({ shelf: [...currentShelf, book] });
        }
      },
      removeFromShelf: (book) =>
        set({ shelf: get().shelf.filter((b) => b.id !== book.id) }),
    }),
    {
      name: 'book-storage'
    }
  )
);
