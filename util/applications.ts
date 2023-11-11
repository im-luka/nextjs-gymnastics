import { Application } from "@/types/application";
import { Filters, SEARCH_FILTER } from "@/types/filters";
import { uniq, unzip } from "lodash";

export const filterWithParams =
  (filters: Partial<Record<Filters, string>>) => (data: Application[]) =>
    data.filter((application) =>
      Object.entries(filters).every(([key, value]) => {
        if (key === SEARCH_FILTER) {
          return (
            application.firstName.toLowerCase().includes(value) ||
            application.lastName.toLowerCase().includes(value)
          );
        }
        return application[key].toString().includes(value);
      })
    );

export const extractProgramsAndCategories = (applications: Application[]) => {
  const [programs, categories] = unzip(
    applications?.map((application) => [
      application.programName,
      application.categoryName,
    ])
  );
  return [uniq(programs), uniq(categories)];
};
