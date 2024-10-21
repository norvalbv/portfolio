'use server';

import { GetObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "@/lib/s3Client";

const BUCKET = process.env.S3_BUCKET_NAME;

if (!BUCKET) {
  throw new Error('bucket is not defined');
}

export const getS3Object = async (key: string): Promise<string | undefined> => {
  const command = new GetObjectCommand({
    Bucket: BUCKET,
    Key: key,
  });

  try {
    const response = await s3Client.send(command);
    return await response.Body?.transformToString();
  } catch (error) {
    console.error("Error getting S3 object:", error);
    throw error;
  }
};
