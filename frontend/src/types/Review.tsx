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
