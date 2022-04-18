import { Model } from '@nozbe/watermelondb';
import { text } from '@nozbe/watermelondb/decorators';

export class Pokemon extends Model {
  static table = 'pokemon';

  @text('name') name;
  @text('sprite_url') spriteUrl;
}
