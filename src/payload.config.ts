import { buildConfig } from 'payload/config';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import path from 'path';

import Users from './collections/Users';

export default buildConfig({
  // By default, Payload will boot up normally
  // and you will be provided with a base `User` collection.
  // But, here is where you define how you'd like Payload to work!
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    // components: {
    //   // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
    //   // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
    //   beforeLogin: [BeforeLogin],
    //   // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
    //   // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
    //   beforeDashboard: [BeforeDashboard],
    // }
  },
  rateLimit: { max: 2000 },
  editor: slateEditor({}),
  collections: [Users],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
