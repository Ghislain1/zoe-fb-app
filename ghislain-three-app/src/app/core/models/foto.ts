export class Foto {
  id: number;
  name: string;
  description: string;
  available_on: string;
  // meta_title: string;             // meta title is present in schema but it is not returned by the spree Api.
  is_favorited_by_current_user: boolean;
  meta_description: string;
  meta_keywords: string;



}
