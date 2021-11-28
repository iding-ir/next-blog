export interface ICard {
  excerpt: string;
  id: string;
  name: string;
}

export interface ICards {
  cards: ICard[];
}

export interface IPost {
  avatar: string;
  content: string;
  createdAt: string;
  excerpt: string;
  id: string;
  name: string;
}
