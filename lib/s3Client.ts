import { S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.S3_AWS_REGION,
  credentials: {
    accessKeyId: process.env.S3_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.S3_AWS_SECRET_ACCESS_KEY!,
  },
});

export default s3Client;