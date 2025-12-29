export interface Chapter {
  title: string;
  description: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  chapters?: Chapter[];
  coverImage: string;
  publishDate: string;
  publisher: string;
  isbn?: string;
  buyLinks: {
    amazon?: string;
    bookshop?: string;
    barnes?: string;
    researchgate?: string;
    springer?: string;
    taylorfrancis?: string;
  };
  reviews?: Review[];
}

export interface Review {
  source: string;
  quote: string;
  reviewer?: string;
}

export interface Article {
  id: string;
  title: string;
  publication: string;
  publishDate: string;
  url: string;
  excerpt: string;
  type: 'op-ed' | 'article' | 'essay';
}

export interface MediaAppearance {
  id: string;
  title: string;
  type: 'podcast' | 'interview' | 'tv' | 'radio';
  outlet: string;
  date: string;
  url?: string;
  description: string;
  thumbnail?: string;
}

export interface CVSection {
  title: string;
  items: CVItem[];
}

export interface CVItem {
  title: string;
  organization?: string;
  location?: string;
  date: string;
  description?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal?: string;
  publisher?: string;
  year: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url?: string;
  type: 'journal' | 'book-chapter' | 'conference' | 'working-paper' | 'technical-report';
  abstract?: string;
  keywords?: string[];
  category?: string;
}