import { Button, Text } from "native-base";
import { useEffect } from "react";
import { colors } from "../../../theme/colors";

type Props = {
  style?: Object;
  endIcon?: JSX.Element | JSX.Element[] | undefined;
  startIcon?: JSX.Element | JSX.Element[] | undefined;
  label: string;
  textStyle?: Object;
  onPress?: () => void;
  rounded?: "xs" | "xl" | "sm" | "none" | "md" | "lg" | "full" | "2xl" | "3xl";
  ml?: number
  mr?: number
  isLoading?: boolean
  size?: "lg" | "md" | "sm" | "xs"
  width?: string | number
  variant?: "outline" | "ghost" | "link" | "solid" | "subtle"
};

export function ButtonBase(props: Props) {
  return (
      <Button
        isLoading={props.isLoading}
        style={props.style}
        rounded={props.rounded}
        endIcon={props.endIcon}
        startIcon={props.startIcon}
        onPress={props.onPress}
        ml={props.ml}
        mr={props.mr}
        size={props.size}
        width={props.width}
        variant={props.variant}
      >
        <Text style={props.textStyle}>{props.label}</Text>
      </Button>
  );
}
