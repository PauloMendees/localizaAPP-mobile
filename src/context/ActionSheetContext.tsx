import { Actionsheet, Box, Text } from "native-base";
import React, {
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { colors } from "../theme/colors";

type ContextProviderProps = {
  children: ReactNode;
};

type Option = {
  label: string;
  onPress: () => void;
  icon?: JSX.Element;
};

type ContextProps = {
  toggleSheet: (title: string, options: Option[]) => void;
};

const Context = React.createContext<ContextProps>({} as ContextProps);

export const SheetContextProvider = ({ children }: ContextProviderProps) => {
  const [options, setOptions] = useState<Option[]>([]);
  const resetSheet = useCallback(() => setOptions([]), []);
  const [title, setTitle] = useState<string>("");

  const value = useMemo(
    () => ({
      toggleSheet: (title: string, newOptions: Option[]) => {
        setOptions(newOptions);
        setTitle(title);
      },
    }),
    []
  );

  return (
    <Context.Provider value={value}>
      {children}
      <Actionsheet isOpen={options.length > 0} onClose={resetSheet}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="18"
              color={colors.light.darkGrey}
              _dark={{
                color: "gray.300",
              }}
              style={{fontWeight: '800'}}
            >
              {title}
            </Text>
          </Box>
          {options.map((option) => (
            <Actionsheet.Item
              startIcon={option.icon}
              key={option.label}
              onPress={async () => {
                await option.onPress();
                resetSheet();
              }}
            >
                {option.label}
            </Actionsheet.Item>
          ))}
        </Actionsheet.Content>
      </Actionsheet>
    </Context.Provider>
  );
};

export const useSheet = () => useContext(Context);
