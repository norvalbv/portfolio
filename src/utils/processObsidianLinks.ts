const regexWithBrackets = /\[\[(.*?)\]\]/g;

type Props = {
  content: string;
};

const processObsidianLinks = ({ content }: Props): string => {
  return content.replace(regexWithBrackets, (_, group) => {
    const [linkText, linkName] = group.split('|').map((s: string) => s.trim());
    return linkName || linkText;
  });
};

export default processObsidianLinks;
