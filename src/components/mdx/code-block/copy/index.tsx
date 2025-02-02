import { useState } from 'react';

import { visualHiddenCss } from '../../../../styles/commons.css';
import { copyToClipboard } from '../../../../utils/copy-to-clipboard';

import { buttonCss } from './index.css';

const delay = (duration: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, duration);
  });

type CopyProps = {
  content: string;
  duration?: number;
  fileName?: string;
  trim?: boolean;
};

const Copy = ({ content, duration = 5000, fileName = ``, trim = false }: CopyProps) => {
  const [copied, setCopied] = useState(false);

  const label = copied
    ? `${fileName ? `${fileName} ` : ``}copied to clipboard`
    : `${fileName ? `${fileName}: ` : ``}copy code to clipboard`;

  return (
    <button
      type="button"
      name={label}
      disabled={copied}
      className={buttonCss}
      onClick={async () => {
        await copyToClipboard(trim ? content.trim() : content);
        setCopied(true);
        await delay(duration);
        setCopied(false);
      }}
    >
      {copied ? `Copied` : `Copy`}
      <span className={visualHiddenCss} aria-roledescription="status">
        {label}
      </span>
    </button>
  );
};

export default Copy;
