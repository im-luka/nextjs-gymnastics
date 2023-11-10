import { Application } from "@/types/application";

export const filterWithParams =
  (filters: { [k: string]: string }) => (data: Application[]) =>
    data.filter((application) =>
      Object.entries(filters).every(
        ([key, value]) => application[key] === value
      )
    );
