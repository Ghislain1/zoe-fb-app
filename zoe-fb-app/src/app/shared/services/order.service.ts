import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MovieFavoryService } from './movie-favory.service';
@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase, private movieFavoryService: MovieFavoryService) { }

  async placeOrder(order) {
    let result = await this.db.list('/orders').push(order);
    this.movieFavoryService.clearFavory();
    return result;
  }

  getOrders() {
    return this.db.list('/orders');
  }

  getOrdersByUser(userId: string) {
    return this.db.list('/orders')
  }

  //TODO: GHislain why query inside  same mathe on top
  // getOrdersByUser(userId: string) {
  //   return this.db.list('/orders', {
  //     query: {
  //       orderByChild: 'userId',
  //       equalTo: userId
  //     }
  //   });
  // }
}