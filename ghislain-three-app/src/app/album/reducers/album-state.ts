import { Foto } from './../../core/models/Foto';
/**
 * Read more about Immutable Records here
 * 1. https://coderwall.com/p/vxk_tg/using-immutable-js-in-typescript
 * 2. http://untangled.io/immutable-js-the-foolproof-guide-to-creating-lists/
 * 3. https://blog.jscrambler.com/immutable-data-immutable-js/
 * 4. https://medium.com/azendoo-team/immutable-record-react-redux-99f389ed676#.91s1g124s
 */

import { Album } from './../../core/models/Album';
import { Map, Record, List } from 'immutable';

export interface AlbumState extends Map<string, any> {
    AlbumIds: List<number>;
    AlbumEntities: Map<number, Album>;
    selectedAlbumId: number;
    selectedAlbum: Album;
    taxonomies: List<Foto>;
    showAllAlbums: List<Album>;
    relatedAlbums: List<Album>;
    AlbumReviews: List<any>;
    rootFotoId: number;
}

export const AlbumStateRecord = Record({
    AlbumIds: List([]),
    AlbumEntities: Map({}),
    selectedAlbumId: null,
    selectedAlbum: Map({}),
    taxonomies: List([]),
    showAllAlbums: List([]),
    relatedAlbums: List([]),
    AlbumReviews: List([]),
    rootFotoId: 0
});