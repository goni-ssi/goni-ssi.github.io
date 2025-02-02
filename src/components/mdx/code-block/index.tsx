
import { calculateLinesToHighlight, getLanguage, GetLanguageInput } from '@lekoarts/themes-utils';
import { Highlight, themes } from 'prism-react-renderer';
import * as React from 'react';

import Copy from './copy';
import { codeTitleCss } from './index.css';

type CodeProps = {
  codeString: string;
  withLineNumbers?: boolean;
  highlight?: string;
  title?: string;
  className: GetLanguageInput;
};

export const CodeBlock = ({
  codeString,
  withLineNumbers = true,
  title = ``,
  className: blockClassName,
  highlight = ``,
}: CodeProps) => {
  const language = getLanguage(blockClassName);
  const shouldHighlightLine = calculateLinesToHighlight(highlight);
  const shouldShowLineNumbers = withLineNumbers;

  return (
    <Highlight code={codeString} language={language} theme={themes.oneDark}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <React.Fragment>
          <div className="gatsby-highlight" data-language={language}>
            {title && (
              <div className={codeTitleCss}>
                <div>{title}</div>
              </div>
            )}
            <pre className={className} data-linenumber={shouldShowLineNumbers}>
              <Copy content={codeString} fileName={title} />
              <code className={`code-content language-${language}`}>
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ line, key: i });

                  if (shouldHighlightLine(i)) {
                    lineProps.className = `${lineProps.className} highlight-line`;
                    lineProps.style = {
                      ...lineProps.style,
                      backgroundColor: 'rgba(184, 184, 214, 0.12)',
                    };
                  }

                  return (
                    <div key={i} {...lineProps}>
                      {shouldShowLineNumbers && <span className="line-number-style">{i + 1}</span>}
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  );
                })}
              </code>
            </pre>
          </div>
        </React.Fragment>
      )}
    </Highlight>
  );
};
