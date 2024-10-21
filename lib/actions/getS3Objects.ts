'use server';

import { GetObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import s3Client from "@/lib/s3Client";

const BUCKET = process.env.S3_BUCKET_NAME;

if (!BUCKET) {
  throw new Error('bucket is not defined');
}

export const getS3ObjectByUrl = async (url: string): Promise<string | undefined> => {
  // List objects to find the key corresponding to the URL
  const listCommand = new ListObjectsV2Command({
    Bucket: BUCKET,
    Prefix: decodeURIComponent(url),
  });

  try {
    const listResponse = await s3Client.send(listCommand);
    const matchingObject = listResponse.Contents?.find(obj => obj.Key?.endsWith(`${decodeURIComponent(url)}.md`));

    if (!matchingObject || !matchingObject.Key) {
      console.error(`Object not found for URL: ${url}`);
      return undefined;
    }

    const getCommand = new GetObjectCommand({
      Bucket: BUCKET,
      Key: matchingObject.Key,
    });

    const getResponse = await s3Client.send(getCommand);
    return await getResponse.Body?.transformToString();
  } catch (error) {
    console.error("Error getting S3 object by URL:", error);
    return undefined;
  }
};
