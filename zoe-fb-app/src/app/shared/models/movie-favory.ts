import { MovieFavoryItem } from './movie-favory-item';
import { Movie } from './movie';

export class MovieFavory {
  items: MovieFavoryItem[] = [];

  constructor(private itemsMap: { [movieId: string]: MovieFavoryItem }) {
    this.itemsMap = itemsMap || {};

    // tslint:disable-next-line:forin
    for (const movieId in itemsMap) {
      const item = itemsMap[movieId];
      const movieF = new MovieFavoryItem({ ...item, $key: movieId });
      this.items.push(movieF);
    }
  }

  getQuantity(movie: Movie) {
    const item = this.itemsMap[movie.$key];
    return item ? item.quantity : 0;
  }



  get totalItemsCount() {
    let count = 0;
    // tslint:disable-next-line:forin
    for (const movieId in this.itemsMap) {
      count += this.itemsMap[movieId].quantity;
    }
    return count;
  }
  get totalPrice() {

    //TODO: GHislain why MovieFoavor gets a prices???
    return 0;
  }
}
