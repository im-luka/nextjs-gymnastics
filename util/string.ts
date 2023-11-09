import { Status } from "@/types/application";

export const trimStatusValue = (status: Status) => status.split(" ").join("");
