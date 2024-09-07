import useOutsideClick from 'hooks/useOutsideClick';
import { ClipboardCopyIcon, ClipboardIcon } from 'lucide-react';
import { Highlight } from 'prism-react-renderer';
import { ReactElement, useRef, useState } from 'react';
import { classNames } from 'utils';

type Props = {
  children: string;
};

const Code = ({ children }: Props): ReactElement => {
  const isMultiline = /\n/.test(children);

  const [copyToClipboard, setCopyToClipboard] = useState(false);
  const ref = useRef<HTMLPreElement | null>(null);

  useOutsideClick({ ref, onBlur: (): void => setCopyToClipboard(false) });

  const copyToClipBoard = async (): Promise<void> => {
    await navigator.clipboard.writeText(children);
    setCopyToClipboard(true);
  };

  return isMultiline ? (
    <Highlight language="tsx" code={children}>
      {({ style, tokens, getLineProps, getTokenProps }): ReactElement => (
        <pre
          style={{ ...style, position: 'relative' }}
          className={classNames({ tag: 'code' })}
          ref={ref}
        >
          <div className={classNames({ tag: 'clipboard' })} onClick={copyToClipBoard}>
            {copyToClipboard ? <ClipboardCopyIcon /> : <ClipboardIcon />}
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
  ) : (
    <Highlight language="tsx" code={children}>
      {({ style }): ReactElement => <code style={style}>{children}</code>}
    </Highlight>
  );
};

export default Code;
