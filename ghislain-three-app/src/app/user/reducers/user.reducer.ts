import { AuthActions } from "../../auth/actions/auth.actions";
import { AuthState } from "../../auth/reducers/auth.state";
import { AuthStateRecord } from "./auth.staterecord";



export const initialState: AuthState = new AuthStateRecord() as AuthState;

export function reducer(state = initialState, { type, payload }: any): AuthState {
    switch (type) {
        case AuthActions.LOGIN_SUCCESS:
            return state.merge({ isAuthenticated: true }) as AuthState;

        case AuthActions.LOGOUT_SUCCESS:
            return state.merge({ isAuthenticated: false }) as AuthState;

        default:
            return state;
    }
};