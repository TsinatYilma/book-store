
export type Book = {
    id: string
    name: string;
    author: string;
    image: string;
    rating: number;
    category: string;
    published: number;
};
type Author = {
    id: string;
    name: string;
  };
export type fetchBook = {
    id: string
    name: string;
    authors: Author[];
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

  export interface Authors {
    id: string;
    name: string;
  }
  
  export interface Genre {
    id: string;
    name: string;
  }
  
  export interface Translator {
    id: string;
    name: string;
  }
  
  export interface Publisher {
    id: string;
    name: string;
  }
  
  export interface Language {
    id: string;
    name: string;
  }
  
  export interface TOC {
    id: string;
    chapterName: string;
    chapterNum: number;
    sortOrder: number;
  }
  
  export interface ReviewAndRating {
    userId: string;
    userName: string;
    userRole?: string | null;
    rateValue: number;
    reviewText?: string | null;
  }
  export interface book {
    id: string;
    image: string;
    name: string;
    description: string;
    summary?: string | null;
    editionNumbers: number;
    isbn?: string | null;
    firstPublishedDate: string; // parse to Date if needed
    statusId: string;
  }


export interface bookDetail {
    id: string;
    image: string;
    name: string;
    description: string;
    summary?: string | null;
    editionNumbers: number;
    isbn?: string | null;
    firstPublishedDate: string; // parse to Date if needed
    statusId: string;
  
    authors: Authors[];
    genres: Genre[];
    translators: Translator[];
    publishers: Publisher[];
    languages: Language[];
    toc: TOC[];
    reviewsAndRatings: ReviewAndRating[];
    averageRating: number;
  }