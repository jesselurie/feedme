import React, { PropTypes,Component } from 'react';
import './Tweet.css';

class Tweet extends Component {
  constructor(props){
    super(props)
    this.props.onHide.bind(this);
  }

  render(){
    return (
      <div key={this.props.theKey} className="card">
        <span data-key={this.props.theKey} className="display-topright padding close" onClick={
            (e) => {
              e.preventDefault()
              this.props.onHide(String(this.props.theKey))
        }}>X</span>
        <p className="author"><b>{this.props.author}</b></p>
        <a href={this.props.link}>GO TO LINK</a>
        <p className="media"><img src={this.props.media}/></p>
        <p className="description">{this.props.description}</p>
        <p className="date">{this.props.date}</p>
        <p className="key">{this.props.theKey}</p>
      </div>
    )
  }
}

Tweet.propTypes = {
  title: PropTypes.string,
  media: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  theKey: PropTypes.string,
  onHide:  PropTypes.func.isRequired
}

export default Tweet;
