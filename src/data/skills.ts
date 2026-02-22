export type Skill = { name: string; weight: number };

export const languages: Skill[] = [
  { name: 'Golang', weight: 5 },
  { name: 'Python', weight: 2 },
  { name: 'R', weight: 2 },
];

export const aws: Skill[] = [
  { name: 'DynamoDB', weight: 3 },
  { name: 'Lambda', weight: 3 },
  { name: 'API Gateway', weight: 3 },
  { name: 'S3', weight: 3 },
  { name: 'CloudWatch', weight: 3 },
  { name: 'CloudFormation', weight: 3 },
  { name: 'AWS Private CA', weight: 3 },
  { name: 'SQS', weight: 2 },
  { name: 'AWS Batch', weight: 2 },
  { name: 'SNS', weight: 1 },
  { name: 'Cognito', weight: 1 },
  { name: 'CloudFront', weight: 1 },
  { name: 'ECS', weight: 1 },
  { name: 'WAF', weight: 1 },
  { name: 'IoT Core', weight: 1 },
  { name: 'Kinesis Firehose', weight: 1 },
  { name: 'AWS Glue', weight: 1 },
  { name: 'Global Accelerator', weight: 1 },
  { name: 'SAR', weight: 1 },
  { name: 'SAM', weight: 1 },
  { name: 'Athena', weight: 1 },
  { name: 'TimeStreamDB', weight: 1 },
];

export const tools: Skill[] = [
  { name: 'Claude Code', weight: 3 },
  { name: 'Cursor', weight: 3 },
  { name: 'Git', weight: 3 },
  { name: 'Product Management', weight: 3 },
  { name: 'Docker', weight: 2 },
  { name: 'Kubernetes', weight: 2 },
  { name: 'Postman', weight: 2 },
  { name: 'JIRA', weight: 2 },
  { name: 'AWS CLI', weight: 2 },
  { name: 'GitLab CI', weight: 2 },
  { name: 'Jenkins', weight: 1 },
  { name: 'Bash', weight: 1 },
];
