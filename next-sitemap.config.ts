import { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: `https://${process.env.VERCEL_BRANCH_URL ?? 'localhost:3000'}`,
  generateRobotsTxt: true,
  // Optional: Add more config options here
  // https://github.com/iamvishnusankar/next-sitemap#configuration-options
};

export default config;
