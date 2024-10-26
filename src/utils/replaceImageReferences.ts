import { getS3ObjectByUrl } from '@/lib/actions/getS3Objects';

export const replaceImageReferences = async (content: string): Promise<string> => {
  const localImageRegex = /!\[\[(.*?)\]\]/g;
  const matches = content.match(localImageRegex);

  if (!matches) return content;

  const replacements = await Promise.all(
    matches.map(async (match) => {
      const fileName = match.slice(3, -2).slice(0, -4);
      const imageUrl = `images/${fileName}`;

      const s3Url = await getS3ObjectByUrl(imageUrl, 'png');
      return { match, s3Url, fileName };
    })
  );

  let newContent = content;
  replacements.forEach(({ match, s3Url, fileName }) => {
    if (s3Url) {
      newContent = newContent.replace(match, `![${fileName}.png](${s3Url})`);
    }
  });

  return newContent;
};
