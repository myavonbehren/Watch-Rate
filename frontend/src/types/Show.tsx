export interface Show {
  id?: number;
  username: string;
  title: string;
  isWatched: boolean;
}

export interface WatchListInterface {
  id: number;
  name: string;
  shows: Show[];
}