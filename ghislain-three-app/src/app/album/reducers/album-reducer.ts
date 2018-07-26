import { Foto } from './../../core/models/foto';
import { Album } from './../../core/models/Album';
import { AlbumActions } from './../actions/album-actions';
import { AlbumState, AlbumStateRecord } from './album-state';

export const initialState: AlbumState = new AlbumStateRecord() as AlbumState;

export function reducer(state = initialState, { type, payload }: any): AlbumState {
    switch (type) {

        case AlbumActions.GET_Album_DETAIL_SUCCESS:
            return state.merge({
                selectedAlbum: payload
            }) as AlbumState;

        case AlbumActions.GET_ALL_AlbumS_SUCCESS:
            const _Albums: Album[] = payload.Albums;
            const _showAllAlbums: Album[] = payload.Albums;
            const AlbumIds: number[] = _Albums.map(Album => Album.id);
            const AlbumEntities = _Albums.reduce((Albums: { [id: number]: Album }, Album: Album) => {
                return Object.assign(Albums, {
                    [Album.id]: Album
                });
            }, {});

            return state.merge({
                AlbumIds: AlbumIds,
                AlbumEntities: AlbumEntities,
                showAllAlbums: _showAllAlbums
            }) as AlbumState;

        case AlbumActions.GET_ALL_TAXONOMIES_SUCCESS:
            const _taxonomies: Foto[] = payload.taxonomies.taxonomies;
            return state.merge({
                taxonomies: _taxonomies,
                rootFotoId: payload.taxonomies.taxonomies[0].id,

            }) as AlbumState;

        case AlbumActions.GET_RELATED_Album_SUCCESS:
            const relatedAlbums: Album[] = payload.Albums

            return state.merge({
                relatedAlbums: relatedAlbums
            }) as AlbumState;

        case AlbumActions.GET_REVIEWS_SUCCESS:
            const _AlbumReviews = payload.reviews
            return state.merge({
                AlbumReviews: _AlbumReviews
            }) as AlbumState;

        default:
            return state;
    }
};