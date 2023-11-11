import { Application } from "@/types/application";

export type ApplicationData = Omit<Application, "id">;
