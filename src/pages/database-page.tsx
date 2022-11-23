import React from 'react';

import '../css/pages.css';

import { GetHistory } from '../api/database-api';

interface DataState {
  data: Array<any>;
}


export class DatabasePage extends React.Component<{}, DataState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      data : []
    }
  }


  componentDidMount() {
    GetHistory().then( (value) => {
      this.setState({data : value});
    });
  }

  render() {
    return (
      <div className="svg">
        {this.state.data.map(data=>(
          <li>
            {data[1]}
          </li>
        ))}
      </div>
    );
  }

};