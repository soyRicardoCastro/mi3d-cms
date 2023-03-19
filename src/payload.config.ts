import { buildConfig } from 'payload/config';
import path from 'path';
import { Categories, Items, Media, Posts, Tags, Users } from './collections'

export default buildConfig({
  serverURL: 'http://localhost:3000',
  cors: '*',
  admin: {
    user: Users.slug,
  },
  collections: [
    Categories,
    Posts,
    Tags,
    Users,
    Media,
    Items
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
