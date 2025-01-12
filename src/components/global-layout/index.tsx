import { MDXProvider } from '@mdx-js/react';
import { PageProps } from 'gatsby';
import { ReactNode } from 'react';
import { GlobalFooter } from '../global-footer';
import { GlobalHeader } from '../global-header';
import { Anchor } from '../mdx/anchor';
import { BlockQuote } from '../mdx/block-quote';
import { InlineCode } from '../mdx/code';
import { Header1, Header2, Header3, Header4, Header5, Header6 } from '../mdx/headers';
import { Kbd } from '../mdx/kbd';
import { Paragraph } from '../mdx/paragraph';
import { Strong } from '../mdx/strong';
import { containerCss, contentCss } from './index.css';
import { Em } from '../mdx/em';

type Props = Omit<PageProps, 'children'> & {
  children: ReactNode;
};

export const GlobalLayout = ({ children }: Props) => {
  return (
    <div className={containerCss}>
      <GlobalHeader />
      <section className={contentCss}>
        <MDXProvider
          components={{
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
            Image: (props) => {
              return <img {...props} />;
            },
          }}
        >
          {children}
        </MDXProvider>
      </section>

      <GlobalFooter />
    </div>
  );
};
