import { Country } from "@/types/country";

const formatOptionValue = (value: string = "") => value.split(" ")[0];

export const getCountryCode = (countries: Country[] = [], label: string = "") =>
  countries.find((c) => c.flag === formatOptionValue(label))?.code ?? "";

export const getCountryPhoneCode = (
  countries: Country[] = [],
  label: string = ""
) =>
  countries.find((c) => c.flag === formatOptionValue(label))?.phoneCode ?? "";
