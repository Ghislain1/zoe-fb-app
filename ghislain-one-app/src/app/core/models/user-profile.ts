export interface IUserProfile {
    access_token: string;
    playlists: Go[];
    data?: {};
    nextPageToken?: string;
    profile: GoogleBasicProfile;
    viewedPlaylist?: string;
}