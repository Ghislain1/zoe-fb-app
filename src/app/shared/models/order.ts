import { MovieFavory } from "./movie-favory";

export class Order {
  datePlaced: number;
  items: any[];

  constructor(public userId: string, public shipping: any, movieFavory: MovieFavory) {
    this.datePlaced = new Date().getTime();

    this.items = movieFavory.items.map(i => {
      return {
        product: {
          title: i.title,
          imageUrl: i.imageUrl,
          price: i.price
        },
        quantity: i.quantity,
        totalPrice: i.totalPrice
      }
    })
  }
}