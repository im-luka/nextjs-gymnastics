export enum Status {
  Applied = "applied",
  Declined = "declined",
  Canceled = "canceled",
  AwaitingResponse = "awaiting response",
}

export type Application = {
  id: string;
  categoryName: string;
  club: string;
  country: string;
  date: Date | string;
  dateOfBirth: Date | string;
  discipline: string;
  firstName: string;
  lastName: string;
  phone: string;
  programName: string;
  status: Status;
  teamName: string;
};
