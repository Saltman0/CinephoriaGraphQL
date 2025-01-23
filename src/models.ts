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

export type BookingModel = {
  id: string;
  qrCode: string;
  userId: string;
  showtimeId: string;
}

export type BookingSeatModel = {
  id: string;
  bookingId: string;
  seatId: string;
}

export type SeatModel = {
  id: string;
  row: string;
  number: number;
  hallId: string;
}