'use client';

import useTheme from 'hooks/useTheme';
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
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      })
      .catch(() => {});
  }, [children]);

  if (!isMultiline) {
    return (
      <Highlight
        language="tsx"
        theme={isDarkMode ? themes.jettwaveDark : themes.jettwaveLight}
        code={children}
      >
        {({ style }): React.ReactElement => (
          <code style={style} className="rounded-lg px-2 py-1">
            {children}
          </code>
        )}
      </Highlight>
    );
  }

  return (
    <Highlight
      language="tsx"
      theme={isDarkMode ? themes.jettwaveDark : themes.jettwaveLight}
      code={children}
    >
      {({ style, tokens, getLineProps, getTokenProps }): React.ReactElement => (
        <pre
          style={{ ...style }}
          className="relative mb-2 rounded-lg p-4"
          ref={ref}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`absolute right-4 top-4 cursor-pointer transition-opacity ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={copyToClipBoard}
          >
            {isCopied ? <ClipboardCheckIcon /> : <ClipboardIcon />}
            <span
              className={`absolute right-0 top-6 rounded bg-gray-800 px-2 py-1 text-xs text-white ${
                isCopied ? 'opacity-100' : 'opacity-0'
              } transition-opacity`}
            >
              Copied!
            </span>
          </div>
          {tokens.map((line, i) => (
            <div key={line.toString() + i.toString()} {...getLineProps({ line })}>
              <span style={{ marginRight: '.5rem' }}>{i + 1}.</span>
              {line.map((token) => (
                <span key={token.content} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
