export class MovieFavoryItem {
  $key: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;

  //Todo: Why gets a total price
  totalPrice: number;

  // TODO: why PARTIAL?
  constructor(init?: Partial<MovieFavoryItem>) {
    Object.assign(this, init);
  }

  /// get totalFavory() { return this.price * this.quantity; }
}
