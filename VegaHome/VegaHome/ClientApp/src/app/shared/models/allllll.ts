

export interface AppUser {
  name: string;
  email: string;
  isAdmin: boolean;
}

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
    this.itemsMap = itemsMap || {};

    //   for (let productId in itemsMap) {
    //     let item = itemsMap[productId];
    //     this.items.push(new ShoppingCartItem({ ...item, $key: productId }));
    //   }
  }

  // getQuantity(product: Product) {
  //   let item = this.itemsMap[product.$key];
  //   return item ? item.quantity : 0;
  // }

  // get totalPrice() {
  //   let sum = 0;
  //   for (let productId in this.items)
  //     sum += this.items[productId].totalPrice;
  //   return sum;
  // }

  // get totalItemsCount() {
  //   let count = 0;
  //   for (let productId in this.itemsMap)
  //     count += this.itemsMap[productId].quantity;
  //   return count;
  // }
}

export class ShoppingCartItem {
  $key: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;

  constructor(init?: Partial<ShoppingCartItem>) {
    Object.assign(this, init);
  }

  get totalPrice() { return this.price * this.quantity; }
}

export class Order {
  datePlaced: number;
  items: any[];

  constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart) {
    this.datePlaced = new Date().getTime();

    this.items = shoppingCart.items.map(i => {
      return {
        product: {
          title: i.title,
          imageUrl: i.imageUrl,
          price: i.price
        },
        quantity: i.quantity,
        totalPrice: i.totalPrice
      };
    });
  }
}


export interface Product {
  $key: string;
  title: string;
  price: number;
  category: string;
  imageUrl: string;
}
