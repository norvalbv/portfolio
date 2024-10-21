'use server';

import {  ListObjectsV2Command } from "@aws-sdk/client-s3";
import s3Client from "@/lib/s3Client";

const BUCKET = process.env.S3_BUCKET_NAME;

if (!BUCKET) {
  throw new Error('bucket is not defined');
}

export const listS3Objects = async (prefix: string = '') => {
  const command = new ListObjectsV2Command({
    Bucket: BUCKET,
    Prefix: prefix,
  });

  try {
    const response = await s3Client.send(command);
    return response.Contents;
  } catch (error) {
    throw error;
  }
};