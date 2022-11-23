import React from 'react';

import { FavoritePage }  from '../pages/favorite-page';

import { GetTopArtists, GetTopTracks } from '../api/favorite-api';

import Button from 'react-bootstrap/Button';

import '../css/pages.css';
import { Artists } from '../data/artists';
import { Tracks } from '../data/tracks';

import { Routes, Route } from 'react-router-dom';
import { AnalyticsPage } from './analytics-page';

interface FavesState {
  artists: Array<Artists>;
  tracks: Array<Tracks>;
  options: SearchOptions;
}

interface SearchOptions {
  limit: number,
  timespan: string
}

export class PageContent extends React.Component<{}, FavesState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      artists: [],
      tracks: [],
      options: {
        limit: 15,
        timespan: 'medium_term'
      }
    };
  }

  async componentDidMount() {
    this.getData();
  }

  getData = async () => { 
    const limit = this.state.options.limit;
    const timespan = this.state.options.timespan;
    const artists = await GetTopArtists(limit, timespan, 0);
    const tracks = await GetTopTracks(limit, timespan, 0);
    this.setState({ artists: artists });
    this.setState({ tracks: tracks });
  }

  short_term = () => {
    this.setState({ options: {
      limit: this.state.options.limit,
      timespan: 'short_term'
    }}, () => {                              
      this.getData();
    });
  }; 
  medium_term = () => {
    this.setState({ options: {
      limit: this.state.options.limit,
      timespan: 'medium_term'
    }}, () => {                              
      this.getData();
    });
  }; 
  long_term = () => {
    this.setState({ options: {
      limit: this.state.options.limit,
      timespan: 'long_term'
    }}, () => {                              
      this.getData();
    });
  }; 

  render() {
    return (
      <div className='d-flex flex-column p-3'>
        <div>
          <>
          </>
        </div>
        <div className='d-flex justify-content-around'>
          <div className={`p-1 ${this.state.options.timespan === 'short_term' ? "button-select" : ""}`}>
            <Button variant="outline-primary" className='spotify-button-outlier'
              onClick={this.short_term}>
                short_term
            </Button>{' '}
          </div>
          <div className={`p-1 ${this.state.options.timespan === 'medium_term' ? "button-select" : ""}`}>
            <Button variant="outline-primary" className='spotify-button-outlier' onClick={this.medium_term}>
                medium_term</Button>{' '}
          </div>
          <div className={`p-1 ${this.state.options.timespan === 'long_term' ? "button-select" : ""}`}>
          <Button variant="outline-primary" className='spotify-button-outlier' onClick={this.long_term}>
              long_term</Button>{' '}
          </div>
        </div>

        <Routes>
          <Route path='/trends' element={
            <FavoritePage tracks={this.state.tracks} artists={this.state.artists} />
          }></Route>
          <Route path='/analytics' element={
            <AnalyticsPage tracks={this.state.tracks} artists={this.state.artists} />
          }></Route>
        </Routes>

    </div>
  )}
}