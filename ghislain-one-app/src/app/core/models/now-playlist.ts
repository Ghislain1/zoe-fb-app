import { Go } from "../actions/go-action";

export interface INowPlaylist {
    videos: Go[];
    selectedId: string;
    filter: string;
    repeat: boolean;
}

const initialState: INowPlaylist = {
    videos: [],
    selectedId: '',
    filter: '',
    repeat: false
};

interface IYoutubeVideosInfo {
    items: Go[];
}