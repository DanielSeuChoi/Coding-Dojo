import React, { Component } from 'react'

export class Cards extends Component {
constructor(props){
  super(props);
  this.state ={
    age:this.props.age
  };
}
  render() {
    const {firstName,lastName, hairColor} = this.props;
    const {age} = this.state;
    const birthday = () => this.setState({age: this.state.age +1 });
    return (
      <div className='card'>
        <div className="card-body">
            <h1>{lastName}, {firstName}</h1>
            <p className='card-text'>Age: {age}</p>
            <p className='card-text'>Hair Color: {hairColor}</p>
            <button className="btn btn-info" onClick={birthday}>Birthday button for {firstName}</button>
        </div>
      </div>
    )
  }
}

export default Cards