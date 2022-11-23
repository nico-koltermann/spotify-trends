import React from 'react';

// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

// Data
import { Artists } from '../data/artists';

export class FavoriteArtists extends React.Component<{ artists: Array<Artists> }, {}> {
  
  render() {
    return (
      <div>
        <>
          <ListGroup key={"artistsList"} horizontal={"artistsList"} className="artists-list">
              {this.props.artists.map((artist: Artists) => (
                <ListGroup.Item>
                  <div className="d-flex flex-row align-items-center">
                    <img 
                      className='m-1 cover-image'
                      src={artist.bandUrl} 
                      width="40" height="40"
                      alt="new"
                    />
                    <div className="ml-5">
                        {artist.name}
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </>
      </div>
  )};

}