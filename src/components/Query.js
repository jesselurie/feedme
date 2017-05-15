import React, { Component,PropTypes } from 'react';
import './Query.css';

class Query extends Component {
    constructor(props){
      super(props)
    }

    render(){
      return (
          <form className="query-form" onSubmit={ (e) => {
            e.preventDefault()
            this.props.onSubmit(this.refs.inputValue.value)
            var inputValue = this.refs.inputValue;
            inputValue.value = ""
          }}>
          <input type="text" className="query" ref="inputValue"/>
        </form>
      )
    }
}

Query.propTypes = {
  onSubmit:  PropTypes.func.isRequired
}

export default Query;
