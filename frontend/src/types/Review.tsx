export interface Review {
  id?: number;
  username: string;
  title: string;
  content: string;
  rating: number;
  liked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewListInterface {
  id: number;
  name: string;
  reviews: Review[];
}