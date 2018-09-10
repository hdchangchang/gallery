import React, { Component } from 'react';

class ImgFigure extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return(
      <figure className=''>
        <img src={this.props.imgSrc} alt={this.props.imgAlt} />
        <figcaption>{this.props.imgDesc}</figcaption>
      </figure>
    )
  }
}

export default ImgFigure