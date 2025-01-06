import { paddingCss, whiteSpaceCss, wordBreakCss } from "./mdx.css";

type MdxCommonStyles = "padding" | "whiteSpace" | "wordBreak";

export const mdxCss = (styles: MdxCommonStyles[]) => {
  return styles.map((style) => {
    switch (style) {
      case "padding":
        return paddingCss;
      case "whiteSpace":
        return whiteSpaceCss;
      case "wordBreak":
        return wordBreakCss;
    }
  });
};
