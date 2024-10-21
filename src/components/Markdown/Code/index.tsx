'use client';

import useTheme from '@/src/hooks/useTheme';
import { ClipboardCheckIcon, ClipboardIcon } from 'lucide-react';
import { Highlight, themes } from 'prism-react-renderer';
import { ReactElement, useCallback, useRef, useState } from 'react';

type Props = {
  children: string;
};

const Code = ({ children }: Props): ReactElement => {
  const { isDarkMode } = useTheme();

  const isMultiline = /\n/.test(children);
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLPreElement | null>(null);

  const copyToClipBoard = useCallback(() => {
    navigator.clipboard
      .writeText(children)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(() => {});
  }, [children]);

  if (!isMultiline) {
    return (
      <Highlight
        language="tsx"
        theme={isDarkMode ? themes.nightOwl : themes.nightOwlLight}
        code={children}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <code
            style={style}
            className="rounded-md bg-gray-100 px-2 py-1 font-mono text-sm dark:bg-gray-800"
          >
            {tokens.map((line, i) => (
              <span key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            ))}
          </code>
        )}
      </Highlight>
    );
  }

  return (
    <Highlight
      language="tsx"
      theme={isDarkMode ? themes.nightOwl : themes.nightOwlLight}
      code={children}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={style}
          className="relative mb-4 overflow-x-auto rounded-lg p-4 font-mono text-sm"
          ref={ref}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`absolute right-2 top-2 cursor-pointer transition-opacity ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={copyToClipBoard}
          >
            {isCopied ? (
              <ClipboardCheckIcon className="h-5 w-5 text-green-500" />
            ) : (
              <ClipboardIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })} className="table-row">
              <span className="table-cell pr-4 text-right opacity-50">{i + 1}</span>
              <span className="table-cell">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
