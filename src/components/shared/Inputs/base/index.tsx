import { FormControl, Input } from "native-base";
import { Style } from "./style";

type Props = {
    fullWidth?: boolean
    placeholder?: string;
    mb?: number;
    mt?: number;
    value?: string;
    label?: string
    iconLeft?: JSX.Element | JSX.Element[] | undefined
    iconRight?: JSX.Element | JSX.Element[] | undefined
    handleValue?: (newText: string) => void;
    size?: "xs" | "xl" | "sm" | "md" | "lg" | "2xl"
    height?: string | number
    width?: string | number
}

export function BaseInput(props: Props) {
  return (
    <>
      {props.label ? (
        <FormControl.Label fontWeight={'bold'} marginLeft={2}>{props.label}</FormControl.Label>
      ) : (<></>)}
      <Input
        isFullWidth={props.fullWidth}
        variant={"rounded"}
        placeholder={props.placeholder}
        size={props.size ? props.size : "md"}
        InputLeftElement={props.iconLeft}
        InputRightElement={props.iconRight}
        defaultValue={props.value}
        onChangeText={props.handleValue}
        marginBottom={props.mb}
        marginTop={props.mt}
        height={props.height}
        width={props.width}
    />
    </>
  );
}
