
import { createSelector } from 'reselect';

import { AppState } from '../../app-state';
import { AuthState } from '../../auth/reducers/auth.state';

// Base state function
function getAuthState(state: AppState): AuthState {
    return state.auth;
}

// ******************** Individual selectors ***************************
const fetchAuthStatus = function (state: AuthState): boolean {
    return state.isAuthenticated;
}

// *************************** PUBLIC API's ****************************
export const getAuthStatus = createSelector(getAuthState, fetchAuthStatus);