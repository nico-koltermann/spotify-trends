import { Component } from 'react';

// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

import { Tracks } from '../data/tracks';

export class FavoriteTracks extends Component< { tracks: Array<Tracks> }, {}> {
  
  render() {
    return (
      <div>
        <>
          <ListGroup key={"artistsList"} horizontal={"artistsList"} className="artists-list">
              {this.props.tracks.map((track: Tracks) => (
                <ListGroup.Item className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <img 
                      className='m-1 cover-image'
                      src={track.coverUrl} 
                      width="40" height="40"
                      alt="new"
                      />
                    <div className="ml-5">
                      {track.name} 
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    {track.artist}
                  </div>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </>
      </div>
  )};
}