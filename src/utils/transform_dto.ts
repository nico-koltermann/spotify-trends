import { Artists } from '../data/artists';
import { Tracks } from '../data/tracks';

/**
 * Transform backend objedct into usable without
 * unncessacary infomation
 * @param dto Backend data -> lock into example of api in mocks/ folder 
 */
export function transformArtists(dto: any) {
    let result: Artists[] = [];

    dto.items.forEach( (x: any) => {
        var newArtist =  new Artists();        
        newArtist.genres = x.genres;
        newArtist.bandUrl =  x.images[1].url;
        newArtist.name = x.name;
        result.push(newArtist);
    });

    return result;
}

/**
 * Transform backend object into usable datatype without
 * unncessacary infomation
 * 
 * @param dto Backend data -> lock into example of api 
 * result in mocks/ folder 
 */
export function transformTracks(dto: any) {
    let result: Tracks[] = [];

    dto.items.forEach( (x: any) => {
        var newTrack =  new Tracks();        
        newTrack.name = x.name;
        newTrack.artist = x.album.artists[0].name;
        newTrack.coverUrl = x.album.images[1].url;
        result.push(newTrack);
    });

    return result;
}