import { Switch, Text } from "@radix-ui/themes";
import { headerCss, homeLinkCss } from "./index.css";
import { useColorPreference } from "../../hooks/use-color-preference";

export const GlobalHeader = () => {
  const { colorPreference, setColorPreference } = useColorPreference();

  return (
    <header className={headerCss}>
      <a className={homeLinkCss}>
        Goni
        {/* <Text size="8" weight="bold">
        </Text> */}
      </a>

      <Switch
        checked={colorPreference === "dark"}
        onClick={() => {
          setColorPreference((prev) => (prev === "light" ? "dark" : "light"));
        }}
      />
    </header>
  );
};
