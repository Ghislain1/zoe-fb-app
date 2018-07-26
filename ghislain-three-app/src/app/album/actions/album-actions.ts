export class AlbumActions {
    static GET_ALL_AlbumS = 'GET_ALL_AlbumS';
    static GET_ALL_AlbumS_SUCCESS = 'GET_ALL_AlbumS_SUCCESS';
    static GET_Album_DETAIL = 'GET_Album_DETAIL';
    static GET_Album_DETAIL_SUCCESS = 'GET_Album_DETAIL_SUCCESS';
    static CLEAR_SELECTED_Album = 'CLEAR_SELECTED_Album';
    static GET_ALL_TAXONOMIES = 'GET_ALL_TAXONOMIES';
    static GET_ALL_TAXONOMIES_SUCCESS = 'GET_ALL_TAXONOMIES_SUCCESS';
    static GET_ALL_AlbumS_SEARCH_SUCCESS = 'GET_ALL_AlbumS_SEARCH_SUCCESS';
    static GET_RELATED_Album = 'GET_RELATED_Album';
    static GET_RELATED_Album_SUCCESS = 'GET_RELATED_Album_SUCCESS';
    static GET_REVIEWS = 'GET_REVIEWS';
    static GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS';

    getAllAlbums(pageNumber = 1) {
        return {
            type: AlbumActions.GET_ALL_AlbumS,
            payload: pageNumber
        };
    }

    getAlbumDetail(id: string) {
        return {
            type: AlbumActions.GET_Album_DETAIL,
            payload: id
        };
    }

    // change Albums type to Album[]
    getAllAlbumsSuccess(Albums: any) {
        return {
            type: AlbumActions.GET_ALL_AlbumS_SUCCESS,
            payload: Albums
        };
    }

    getAlbumDetailSuccess(data: { Album }) {
        return {
            type: AlbumActions.GET_Album_DETAIL_SUCCESS,
            payload: data
        };
    }

    clearSelectedAlbum() {
        return { type: AlbumActions.CLEAR_SELECTED_Album };
    }

    getAllTaxonomies() {
        return { type: AlbumActions.GET_ALL_TAXONOMIES };
    }

    getAllTaxonomiesSuccess(taxonomies: any) {
        return {
            type: AlbumActions.GET_ALL_TAXONOMIES_SUCCESS,
            payload: taxonomies
        };
    }

    getRelatedAlbum(Album_id: any) {
        return {
            type: AlbumActions.GET_RELATED_Album,
            payload: Album_id
        };
    }

    getRelatedAlbumSuccess(Albums: any) {
        return {
            type: AlbumActions.GET_RELATED_Album_SUCCESS,
            payload: Albums
        };
    }

    getAlbumReviews(Album_id: any) {
        return {
            type: AlbumActions.GET_REVIEWS,
            payload: Album_id
        };
    }

    getAlbumReviewsSuccess(reviews: any) {
        return {
            type: AlbumActions.GET_REVIEWS_SUCCESS,
            payload: reviews
        };
    }
}