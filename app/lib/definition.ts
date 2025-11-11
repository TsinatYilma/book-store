
export type Book = {
    id: string
    name: string;
    author: string;
    image: string;
    rating: number;
    category: string;
    published: number;
};

export type User = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image?: string | null;
    createdAt: Date; // or Date if parsed
    updatedAt: Date; // or Date if parsed
  };