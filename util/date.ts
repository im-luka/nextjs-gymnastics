import dayjs from "dayjs";

const DATE_FORMAT = {
  default: "",
  withLongMonth: "MMMM DD, YYYY",
};

export const formatDate = (
  date: Date | string,
  format: keyof typeof DATE_FORMAT
) => dayjs(date).format(DATE_FORMAT[format]);
