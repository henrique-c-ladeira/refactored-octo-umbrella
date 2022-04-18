import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'pokemon',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'sprite_url', type: 'string' },
      ],
    }),
  ],
});
