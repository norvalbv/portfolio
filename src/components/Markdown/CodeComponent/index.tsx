import { ReactElement } from 'react';

type Props = {
  children: string;
  theme?: DefTheme;
};

const CodeComponent = ({ children, theme }: Props): ReactElement => {
  const showClipboard =
    theme?.overrides?.clipboard?.show === undefined || theme.overrides.clipboard.show;
  const showNumbers =
    theme?.overrides?.code?.showNumbers === undefined || theme.overrides.code?.showNumbers;

  const isMultiline = /\n/.test(children);

  const [copyToClipboard, setCopyToClipboard] = useState(false);
  const ref = useRef<HTMLPreElement | null>(null);

  useOutsideClick({ ref, onBlur: (): void => setCopyToClipboard(false) });

  const clipboardOverride = theme?.overrides?.clipboard;

  const copyToClipBoard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(children);
      setCopyToClipboard(true);
      if (clipboardOverride?.callback) {
        clipboardOverride?.callback();
      }
    } catch (err) {
      if (clipboardOverride?.callback) {
        clipboardOverride?.callback(err);
      }
    }
  };

  const { getClassName } = useGetClassName();

  const ClipboardOverrideComp = clipboardOverride?.component;
  const CodeOverrideComp = theme?.overrides?.code?.component;

  return CodeOverrideComp ? (
    <CodeOverrideComp className={getClassName({ tag: 'code' })}>{children}</CodeOverrideComp>
  ) : isMultiline ? (
    <Highlight
      theme={
        themes[
          theme?.overrides?.code?.theme || defaultTheme[theme?.theme || 'PLAIN_DARK'].prismTheme
        ]
      }
      language="tsx"
      code={children}
    >
      {({ style, tokens, getLineProps, getTokenProps }): ReactElement => (
        <pre
          style={{ ...style, position: 'relative' }}
          className={getClassName({ tag: 'code' })}
          ref={ref}
        >
          {showClipboard &&
            (ClipboardOverrideComp ? (
              <ClipboardOverrideComp />
            ) : (
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              <div className={getClassName({ tag: 'clipboard' })} onClick={copyToClipBoard}>
                {copyToClipboard ? <ClipboardCopyIcon /> : <ClipboardIcon />}
              </div>
            ))}
          {tokens.map((line, i) => (
            <div key={line.toString() + i.toString()} {...getLineProps({ line })}>
              {showNumbers && <span style={{ marginRight: '.5rem' }}>{i + 1}.</span>}
              {line.map((token) => (
                <span
                  key={token.content}
                  {...getTokenProps({ token })}
                  className={defaultTheme.PLAIN_DARK.nodes}
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  ) : (
    <Highlight
      theme={
        themes[
          theme?.overrides?.code?.theme || defaultTheme[theme?.theme || 'PLAIN_DARK'].prismTheme
        ]
      }
      language="tsx"
      code={children}
    >
      {({ style }): ReactElement => (
        <code style={style} className={styles.inlinecode}>
          {children}
        </code>
      )}
    </Highlight>
  );
};
