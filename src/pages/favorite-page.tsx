import React from 'react';

import { FavoriteArtists }  from '../components/favorite-artists';
import { FavoriteTracks }  from '../components/favorite-tracks';

import '../css/pages.css';
import { Artists } from '../data/artists';
import { Tracks } from '../data/tracks';

interface FavesProps {
  artists: Array<Artists>;
  tracks: Array<Tracks>;
}

export class FavoritePage extends React.Component<FavesProps, {}> {

  render() {
    return (
      <div className='fav-page-layout'>
        <div className='half-page'>
            <FavoriteArtists artists={this.props.artists} />
        </div>
        <div className='half-page'>
            <FavoriteTracks tracks={this.props.tracks} />
        </div>
      </div>
  )}
}