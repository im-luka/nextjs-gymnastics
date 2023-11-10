import { FC } from "react";
import { useController } from "react-hook-form";
import { TextInput, TextInputProps } from "@mantine/core";

type Props = TextInputProps & {
  name: string;
};

export const FormTextInput: FC<Props> = (props) => {
  const { field, error, restProps } = useFormTextInput(props);

  return <TextInput {...field} error={error?.message} {...restProps} />;
};

function useFormTextInput({ name, ...restProps }: Props) {
  const { field, fieldState } = useController({ name });
  const error = fieldState.error;

  return { field, error, restProps };
}
