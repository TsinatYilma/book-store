

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
export interface topRatedbook {
  id: string;
  name: string;
  author: string;
  image: string;
  rating: number;
  category: string;
  published: number;
}

export type BetterAuthSession = {
  user: {
    id: string;
    email: string;
    emailVerified: boolean;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null;
  };
  session: {
    id: string;
    userId: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    token: string;
    ipAddress?: string | null;
    userAgent?: string | null;
  };
};

export type UserType = {
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
    reviewTextCreatedTime: string;
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


export interface bookDetailSchema {
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

  
export type Book = {
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
export interface Genre {
  id: string;           
  name: string;              
  description?: string;      
  books: Book[];             
}

export interface Review {
  id: string;          // UUID of the review
  bookId: string;      // UUID of the book being reviewed
  userId: string;      // ID of the user who wrote the review
  reviewText: string;  // The actual review content
  createdAt: string;   // ISO date string
  updatedAt: string;   // ISO date string

}