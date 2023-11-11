import { api } from "../remote";
import { ApplicationData } from "../types/application-data";

export const applicationMutation = {
  fnc: (data: ApplicationData) => api.post("application", data),
};
