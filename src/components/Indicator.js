import React, { PropTypes,Component } from 'react';
import './Indicator.css';

class Indicator extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <div className={this.props.loader}></div>
    )
  }
}

Indicator.propTypes = {
  loader: PropTypes.string
}


export default Indicator;
