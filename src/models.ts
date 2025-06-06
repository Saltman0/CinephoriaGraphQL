export type HallModel = {
  id: number;
  number: number;
  projectionQuality: string;
  cinemaId: number;
}

export type ShowtimeModel = {
  id: number;
  startTime: string;
  endTime: string;
  price: number;
  movieId: number;
  hallId: number;
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
  date: Date;
  solved: boolean;
  hallId: number;
}

export type BookingModel = {
  id: number;
  qrCode: string;
  userId: number;
  showtimeId: number;
}

export type BookingSeatModel = {
  id: number;
  bookingId: number;
  seatId: number;
}

export type SeatModel = {
  id: number;
  row: string;
  number: number;
  hallId: number;
}

export type UserModel = {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: string;
}