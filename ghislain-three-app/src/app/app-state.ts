import { AlbumState } from "./album/reducers/album-state";
import { AuthState } from "./auth/reducers/auth.state";
import { UserState } from "./user/reducers/user.state";

/**
 *
 *
 * @export
 * @interface AppState
 */
export interface AppState {
    albums: AlbumState;
    auth: AuthState;
    users: UserState;
}