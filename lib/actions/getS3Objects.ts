'use server';

import { GetObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3Client from "@/lib/s3Client";

const BUCKET = process.env.S3_BUCKET_NAME;

console.log(BUCKET, 'bucket');

if (!BUCKET) {
  console.log('bucket is not defined');
  throw new Error('bucket is not defined');
}

export const getS3ObjectByUrl = async (url: string, type: 'md' | 'png' = 'md'): Promise<string | undefined> => {
  console.log(url, 'url');
  try {
    // List objects to find the key corresponding to the URL
    const listCommand = new ListObjectsV2Command({
      Bucket: BUCKET,
      Prefix: decodeURIComponent(url),
    });
    console.log(listCommand);

    const listResponse = await s3Client.send(listCommand);
    const matchingObject = listResponse.Contents?.find(obj => obj.Key?.endsWith(`${decodeURIComponent(url)}.${type}`));

    if (!matchingObject || !matchingObject.Key) {
      console.error(`Object not found for URL: ${url}`);
      return undefined;
    }

    if (type === 'png') {
      // For PNG files, return a presigned URL
      const getCommand = new GetObjectCommand({
        Bucket: BUCKET,
        Key: matchingObject.Key,
      });

      const presignedUrl = await getSignedUrl(s3Client, getCommand, { expiresIn: 3600 }); // URL expires in 1 hour
      return presignedUrl;
    } else {
      // For MD files, return the content as before
      const getCommand = new GetObjectCommand({
        Bucket: BUCKET,
        Key: matchingObject.Key,
      });

      const getResponse = await s3Client.send(getCommand);
      return await getResponse.Body?.transformToString();
    }
  } catch (error) {
    console.error("Error getting S3 object by URL:", error);
    return undefined;
  }
};
