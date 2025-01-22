export type HallModel = {
  id: string;
  number: number;
  projectionQuality: string;
  cinemaId: string;
}

export type ShowtimeModel = {
  id: string;
  startTime: string;
  endTime: string;
  price: number;
  movieId: string;
  hallId: string;
}

export type MovieModel = {
  id: string;
  title: string;
  description: string;
  minimumAge: number;
  favorite: boolean;
  imageURL: string;
}

export type IncidentModel = {
  id: string;
  type: string;
  description: string;
  hallId: string;
}