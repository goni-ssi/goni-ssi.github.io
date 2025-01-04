import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { ColorPreference } from "../models/color-preference";

type ColorPreferenceContext = {
  colorPreference: ColorPreference;
  setColorPreference: Dispatch<SetStateAction<ColorPreference>>;
};

const ColorPreferenceContext = createContext<ColorPreferenceContext | null>(
  null
);

export const ColorPreferenceProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [colorPreference, setColorPreference] =
    useState<ColorPreference>("light");

  const value = useMemo(() => {
    return {
      colorPreference,
      setColorPreference,
    };
  }, [colorPreference, setColorPreference]);

  return (
    <ColorPreferenceContext.Provider value={value}>
      {children}
    </ColorPreferenceContext.Provider>
  );
};

export const useColorPreference = () => {
  const context = useContext(ColorPreferenceContext);

  if (context == null) {
    throw new Error(
      "useColorPreference must be used within a ColorPreferenceProvider"
    );
  }

  return context;
};
