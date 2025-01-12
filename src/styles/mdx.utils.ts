import { marginCss, paddingCss, whiteSpaceCss, wordBreakCss } from "./mdx.css";

type MdxCommonStyles = "padding" | "margin" | "whiteSpace" | "wordBreak";

export const mdxCss = (styles: MdxCommonStyles[]) => {
  return styles.map((style) => {
    switch (style) {
      case "padding":
        return paddingCss;
      case "margin":
        return marginCss;
      case "whiteSpace":
        return whiteSpaceCss;
      case "wordBreak":
        return wordBreakCss;
    }
  });
};
