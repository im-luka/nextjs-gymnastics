import { Application } from "./application";

export const SEARCH_FILTER = "search";

export type Filters =
  | keyof Pick<
      Application,
      "discipline" | "programName" | "categoryName" | "status"
    >
  | typeof SEARCH_FILTER;
