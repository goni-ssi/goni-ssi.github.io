import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"code">;

/**
 * - Markdown Syntax
 *
 * Some `backticks` for inline.
 * ```javascript
 * backtick.fences('for blocks')
 * ```
 *
 * - Equivalent JSX
 * <p>
 *   A backslash<br />
 *   before a line break…
 * </p>
 */
export const Code = ({ className, ...props }: Props) => {
  return <code className={clsx(className)} {...props} />;
};
