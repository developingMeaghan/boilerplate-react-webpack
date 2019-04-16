import React, { Component } from 'react';
import {getArtifacts} from '../api'
import { get } from 'http';

export default class App  extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count: null,
        fields: [],
        rows: [],
        loadingData: true
      }
    this.renderArtifacts = this.renderArtifacts.bind(this)
    
  }

  componentDidMount () {
    getArtifacts(this.renderArtifacts)
  }

  renderArtifacts (err, artifact) {
    this.setState(
      {
        count: artifact.table_rows.count,
        loadingData: false
      }
    )

    console.log(artifact)
    // this.setState({
    //   // rows: artifact || []
    // })
  }


  render() { 

    return (

      <div>
        {this.state.loadingData && "loading...."}
        Artifact count {this.state.count}
      </div>
      );
  }
}
 
