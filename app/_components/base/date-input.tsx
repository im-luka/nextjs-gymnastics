import { FC } from "react";
import { useController } from "react-hook-form";
import { DateInput, DateInputProps } from "@mantine/dates";

type Props = DateInputProps & {
  name: string;
};

export const FormDateInput: FC<Props> = (props) => {
  const { field, error, restProps } = useFormDateInput(props);

  return <DateInput {...field} error={error?.message} {...restProps} />;
};

function useFormDateInput({ name, ...restProps }: Props) {
  const { field, fieldState } = useController({ name });
  const error = fieldState.error;

  return { field, error, restProps };
}
