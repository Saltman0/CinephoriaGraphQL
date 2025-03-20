export type HallModel = {
  id: number;
  number: number;
  projectionQuality: string;
  cinemaId: string;
}

export type ShowtimeModel = {
  id: number;
  startTime: string;
  endTime: string;
  price: number;
  movieId: string;
  hallId: string;
}

export type MovieModel = {
  id: number;
  title: string;
  description: string;
  minimumAge: number;
  favorite: boolean;
  imageURL: string;
}

export type IncidentModel = {
  id: number;
  type: string;
  description: string;
  hallId: string;
}

export type BookingModel = {
  id: number;
  qrCode: string;
  userId: string;
  showtimeId: string;
}

export type BookingSeatModel = {
  id: number;
  bookingId: string;
  seatId: string;
}

export type SeatModel = {
  id: number;
  row: string;
  number: number;
  hallId: string;
}