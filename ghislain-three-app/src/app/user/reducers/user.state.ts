import { User } from "../../core/models/user";
import { List, Record, Map } from "immutable";
import { Album } from "../../core/models/album";
import { Order } from "../../core/models/order";

/**
 *
 *
 * @export
 * @interface UserState
 * @extends {Map<string, any>}
 */
export interface UserState extends Map<string, any> {
    user: User;
    orders: List<Order[]>;
    favorite_Albums: List<Album>;
}

export const UserStateRecord = Record({
    user: Map({}),
    orders: List([]),
    favorite_Albums: List([])
});