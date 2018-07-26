import { AppState } from "../../app-state";
import { AlbumState } from "./album-state";
import { createSelector } from "@ngrx/store";



// Base Album state selector function
export function getAlbumState(state: AppState): AlbumState {
    return state.albums;
}

// ******************** Individual selectors ***************************
export function fetchAlbums(state: AlbumState) {
    const ids = state.AlbumIds.toJS();
    const AlbumEntities = state.AlbumEntities.toJS();
    return ids.map(id => AlbumEntities[id]);
}

export function fetchAllTaxonomies(state: AlbumState) {
    return state.taxonomies.toJS();
}

const fetchSelectedAlbum = function (state: AlbumState) {
    return state.selectedAlbum;
};

const fetchAllAlbumSearch = function (state: AlbumState) {
    return state.showAllAlbums.toJS();
};

const fetchReletedAlbums = function (state: AlbumState) {
    return state.relatedAlbums.toJS();
};
const fetchAlbumReviews = function (state: AlbumState) {
    return state.AlbumReviews.toJS();
};

/* const fetchRootTaxonId = function (state: AlbumState) {
    return state.rootTaxonomyId;
}; */

// *************************** PUBLIC API's ****************************
export const getSelectedAlbum = createSelector(getAlbumState, fetchSelectedAlbum);
export const getAlbums = createSelector(getAlbumState, fetchAlbums);
export const getTaxonomies = createSelector(getAlbumState, fetchAllTaxonomies);
export const showAllAlbums = createSelector(getAlbumState, fetchAllAlbumSearch);
export const relatedAlbums = createSelector(getAlbumState, fetchReletedAlbums);
export const AlbumReviews = createSelector(getAlbumState, fetchAlbumReviews);
//export const rootTaxonomyId = createSelector(getAlbumState, fetchRootTaxonId);
