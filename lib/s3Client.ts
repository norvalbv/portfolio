import { S3Client } from "@aws-sdk/client-s3";

const { S3_AWS_REGION, S3_AWS_ACCESS_KEY_ID, S3_AWS_SECRET_ACCESS_KEY, NEXT_PUBLIC_S3_BUCKET_NAME, EMAILJS_SERVICE_ID } = process.env;

console.log(S3_AWS_REGION, S3_AWS_ACCESS_KEY_ID, S3_AWS_SECRET_ACCESS_KEY, NEXT_PUBLIC_S3_BUCKET_NAME, EMAILJS_SERVICE_ID, 's3 credentials');

if (!S3_AWS_REGION || !S3_AWS_ACCESS_KEY_ID || !S3_AWS_SECRET_ACCESS_KEY) {
  throw new Error('S3 credentials are not defined');
}

const s3Client = new S3Client({
  region: S3_AWS_REGION,
  credentials: {
    accessKeyId: S3_AWS_ACCESS_KEY_ID,
    secretAccessKey: S3_AWS_SECRET_ACCESS_KEY,
  },
});

export default s3Client;