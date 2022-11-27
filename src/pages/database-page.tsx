import React from 'react';

import '../css/pages.css';

import { GetHistory } from '../api/database-api';

interface DataState {
  artists: { [id: string]: number };
  tracks: { [id: string]: number  };
}


export class DatabasePage extends React.Component<{}, DataState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      artists : {},
      tracks : {},
    }
  }


  componentDidMount() {
    GetHistory().then( (value) => {

      let values: {[id: string]: number } = {};
      let tracks: {[id: string]: number } = {};
      value.forEach((x: any[]) => {
        if ( values[x[1].toString()] === undefined) {
          values[x[1].toString()] = 1;
          console.log(x[1].toString());
          console.log(x[1]);
        } else {
          values[x[1].toString()] += 1;
        }
        if ( tracks[x[2].toString()] === undefined) {
          tracks[x[2].toString()] = 1;
        } else {
          tracks[x[2] ] += 1;
        }
      });

    var sortableArray = Object.entries(values);
    var sortedArray = sortableArray.sort(([, a], [, b]) => b - a);
    var sortedObject = Object.fromEntries(sortedArray);

    var sortableTracks = Object.entries(tracks);
    var sortedTracks = sortableTracks.sort(([, a], [, b]) => b - a);
    var finalTracks = Object.fromEntries(sortedTracks);

      this.setState({ artists : sortedObject, tracks: finalTracks});
    });
  }

  render() {
    return (
      <div className='d-flex flex-row'>
        <div className="svg">
          {Object.keys(this.state.artists).map(key=>(
            <li>
              {key} - {this.state.artists[key]}
            </li>
          ))}
        </div>
        <div className="svg">
        {Object.keys(this.state.tracks).map(key=>(
          <li>
            {key} - {this.state.tracks[key]}
          </li>
        ))}
        </div>
      </div>
    );
  }

};