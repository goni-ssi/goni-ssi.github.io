
import { preToCodeBlock } from '@lekoarts/themes-utils';
import { MDXProvider } from '@mdx-js/react';
import { ComponentProps } from 'react';

import { Anchor } from './anchor';
import { BlockQuote } from './block-quote';
import { CodeBlock } from './code-block';
import { Em } from './em';
import { Header1, Header2, Header3, Header4, Header5, Header6 } from './headers';
import { Hr } from './hr';
import { InlineCode } from './inline-code';
import { Input } from './input';
import { Kbd } from './kbd';
import { List } from './list';
import { OrderedList } from './ordered-list';
import { Paragraph } from './paragraph';
import { Strong } from './strong';
import { UnorderedList } from './unordered-list';

export const MdxComponents: ComponentProps<typeof MDXProvider>['components'] = {
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
