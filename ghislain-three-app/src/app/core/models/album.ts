import { Foto } from "./foto";

export class Album {
  id: number;
  name: string; //short name for the Album
  description: string;// The most elegant, poetic turn of phrase for describing your album’s benefits and features to your site visitors
  available_on: string;
  // meta_title: string;             // meta title is present in schema but it is not returned by the spree Api.
  is_favorited_by_current_user: boolean;
  meta_description: string;
  meta_keywords: string;
  total_on_foto: number;
  has_variants: boolean;
  //option_types: OptionType[];
  fotos: Foto[];
  reviews_count: number;
  album_url?: string;
}
