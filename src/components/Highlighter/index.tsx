import React, { ReactElement, useEffect, useRef } from 'react';
import hljs from 'highlight.js';

type HighlightProps = {
  children?: JSX.Element | JSX.Element[];
  className?: string;
};

const Highlight = ({ children, className }: HighlightProps): ReactElement => {
  const el = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    if (el.current) {
      hljs.highlightElement(el.current);
    }
  }, [children]);

  return (
    <pre ref={el}>
      <code className={className}>{children}</code>
    </pre>
  );
};

export default Highlight;
