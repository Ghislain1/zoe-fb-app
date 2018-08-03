
import { ActionReducerMap, Store, Action } from '@ngrx/store'; //TODO: Why?
import { INowPlaylist } from '../models/now-playlist';

// The top level Echoes Player application interface
// each reducer is reponsible for manipulating a certain state
export interface EchoesState {
    player: IAppPlayer;
    nowPlaylist: INowPlaylist;
    user: IUserProfile;
    search: IPlayerSearch;
    appLayout: IAppSettings;
    // routerReducer: RouterReducerState;
}

export let EchoesReducers: ActionReducerMap<EchoesState> = {
    player,
    nowPlaylist,
    user,
    search,
    appLayout
    // routerReducer
};

export let EchoesActions = [
    ActionTypes,
    UserProfileActions,
    PlayerSearchActions
];

export interface IAppVersion {
    semver: string;
    isNewAvailable: boolean;
    checkingForVersion: boolean;
}
export interface IAppSettings {
    sidebarExpanded: boolean;
    requestInProcess: boolean;
    version: IAppVersion;
    theme: string;
    themes: string[];
}
const initialState: IAppSettings = {
    sidebarExpanded: true,
    requestInProcess: false,
    version: {
        semver: '',
        isNewAvailable: false,
        checkingForVersion: false
    },
    theme: DEFAULT_THEME,
    themes: Themes.sort()
};

export function appLayout(state: IAppSettings = initialState, action: Action): IAppSettings {
    switch (action.type) {
        case ActionTypes.SIDEBAR_EXPAND:
            return { ...state, sidebarExpanded: true };

        case ActionTypes.SIDEBAR_COLLAPSE:
            return { ...state, sidebarExpanded: false };

        case ActionTypes.SIDEBAR_TOGGLE:
            return { ...state, sidebarExpanded: !state.sidebarExpanded };

        case ActionTypes.APP_VERSION_RECIEVED: {
            const version = getVersion(state, action.payload);
            return { ...state, version };
        }

        case ActionTypes.APP_CHECK_VERSION: {
            const version = {
                ...state.version,
                checkingForVersion: true
            };
            return { ...state, version };
        }

        case ActionTypes.APP_THEME_CHANGE: {
            return { ...state, theme: action.payload };
        }

        default:
            return { ...initialState, ...state, themes: Themes.sort() };
    }
}

export function getSidebarExpanded($state: Store<IAppSettings>) {
    return $state.select(state => state.sidebarExpanded);
}

function getVersion(state: IAppSettings, packageJson: any): IAppVersion {
    const currentVersion = state.version.semver;
    const remoteVersion = packageJson.version;
    const version: IAppVersion = {
        semver: '',
        isNewAvailable: state.version.isNewAvailable,
        checkingForVersion: false
    };
    const isCurrentVersionEmpty = '' === currentVersion;
    const isCurrentDifferentFromRemote = !isCurrentVersionEmpty && currentVersion !== remoteVersion;
    if (isCurrentVersionEmpty) {
        version.semver = remoteVersion;
    }
    if (isCurrentDifferentFromRemote && !version.isNewAvailable) {
        version.semver = currentVersion;
        version.isNewAvailable = true;
    } else {
        // upgrade is completed
        version.semver = remoteVersion;
        version.isNewAvailable = false;
    }
    return version;
}

type GoogleApiYoutubeVideo = GoogleApiYouTubeVideoResource | GoogleApiYouTubeSearchResource | any;

export * from './app-player.actions';

export interface IAppPlayer {
    mediaId: { videoId: string };
    index: number;
    media?: GoogleApiYoutubeVideo | any;
    showPlayer: boolean;
    playerState: number;
    fullscreen: {
        on: boolean;
        height: number;
        width: number;
    };
    isFullscreen: boolean;
}
const initialPlayerState: IAppPlayer = {
    mediaId: { videoId: 'NONE' },
    index: 0,
    media: {
        snippet: { title: 'No Media Yet' }
    },
    showPlayer: true,
    playerState: 0,
    fullscreen: {
        on: false,
        height: 270,
        width: 367
    },
    isFullscreen: false
};
export function player(state: IAppPlayer = initialPlayerState, action: Actions): IAppPlayer {
    switch (action.type) {
        case ActionTypes.PLAY:
            return playVideo(state, action.payload);

        case ActionTypes.QUEUE:
            return state;

        case ActionTypes.TOGGLE_PLAYER:
            return toggleVisibility(state);

        case ActionTypes.UPDATE_STATE:
            return changePlayerState(state, action.payload);

        case ActionTypes.FULLSCREEN: {
            const on = !state.fullscreen.on;
            let { height, width } = initialPlayerState.fullscreen;
            if (on) {
                height = window.innerHeight;
                width = window.innerWidth;
            }
            const fullscreen = { on, height, width };
            return { ...state, fullscreen };
        }

        case ActionTypes.RESET:
            return {
                ...state,
                isFullscreen: false,
                playerState: 0
            };

        case ActionTypes.RESET_FULLSCREEN: {
            const fullscreen = initialPlayerState.fullscreen;
            return { ...initialPlayerState, ...state, fullscreen };
        }

        default:
            return { ...initialPlayerState, ...state };
    }
}

export function playVideo(state: IAppPlayer, media: GoogleApiYoutubeVideo) {
    return { ...state, mediaId: media.id, media };
}

export function toggleVisibility(state: IAppPlayer) {
    return { ...state, showPlayer: !state.showPlayer };
}

export function changePlayerState(state: IAppPlayer, playerState: YT.PlayerState | any) {
    return { ...state, playerState: playerState };
}

