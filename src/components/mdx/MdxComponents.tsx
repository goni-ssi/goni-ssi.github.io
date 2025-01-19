import { Em, Kbd, Strong } from '@radix-ui/themes';
import { Anchor } from './anchor';
import { BlockQuote } from './block-quote';
import { Header1, Header2, Header3, Header4, Header5, Header6 } from './headers';
import { InlineCode } from './inline-code';
import { Paragraph } from './paragraph';
import { UnorderedList } from './unordered-list';

export const MdxComponents = {
  h1: Header1,
  h2: Header2,
  h3: Header3,
  h4: Header4,
  h5: Header5,
  h6: Header6,
  blockquote: BlockQuote,
  p: Paragraph,
  a: Anchor,
  code: InlineCode,
  strong: Strong,
  Kbd: Kbd,
  em: Em,
  ul: UnorderedList,
  ol: OrderedList,
  li: List,
  input: Input,
  pre: (preProps) => {
    const props = preToCodeBlock(preProps as Parameters<typeof preToCodeBlock>[0]);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <CodeBlock {...props} />;
    }

    // it's possible to have a pre without a code in it
    return <pre {...preProps} />;
  },
  Image: (props) => {
    return <img {...props} />;
  },
  hr: Hr,
};
