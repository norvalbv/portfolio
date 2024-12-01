'use client';

import useTheme from '@/src/hooks/useTheme';
import { ClipboardCheckIcon, ClipboardIcon } from 'lucide-react';
import { Highlight, themes, type Language } from 'prism-react-renderer';
import { ReactElement, useCallback, useRef, useState } from 'react';

type Props = {
  children: string;
  language?: Language;
};

const Code = ({ children, language = 'tsx' }: Props): ReactElement => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? themes.vsDark : themes.vsLight;

  const isMultiline = children.includes('\n');
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLPreElement>(null);

  const copyToClipBoard = useCallback(() => {
    navigator.clipboard
      .writeText(children)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(console.error);
  }, [children]);

  return (
    <Highlight theme={theme} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) =>
        isMultiline ? (
          <pre
            className={`${className} relative mb-4 overflow-x-auto rounded-lg p-4 font-mono text-sm`}
            style={style}
            ref={ref}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              className={`absolute right-2 top-2 cursor-pointer transition-opacity ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={copyToClipBoard}
              aria-label={isCopied ? 'Copied' : 'Copy to clipboard'}
            >
              {isCopied ? (
                <ClipboardCheckIcon className="h-5 w-5 text-green-500" />
              ) : (
                <ClipboardIcon className="h-5 w-5 text-gray-400" />
              )}
            </button>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                <span className="pr-4 text-right opacity-50">{i + 1}</span>
                <span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        ) : (
          <code
            className={`${className} rounded-md bg-gray-100 px-2 py-1 font-mono text-sm dark:bg-gray-800`}
            style={style}
          >
            {tokens.map((line, i) => (
              <span key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            ))}
          </code>
        )
      }
    </Highlight>
  );
};

export default Code;
