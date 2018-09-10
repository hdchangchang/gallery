import React, { Component } from 'react';
import logo from './media/svg/logo.svg';
import './css/App.scss';

import ImgFigure from './component/ImgFigure.js'
import imgDatas from './data/imgDatas.json'


// 管理所有数据
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      controllerUnits: [],
      imgFigures: [],
      imgDatas
    }
  }
  // 渲染DOM之前
  componentWillMount(){
    this.genImgUrl()
    this.genImgFigures()
  }
  // 渲染DOM之后
  componentDidMount(){

  }
  // 转换图片路径
  genImgUrl(){
    let imgDatas = this.state.imgDatas
    imgDatas.forEach((data)=>{
      data.imgSrc = require('./media/img/'+data.imgSrc)
    })
  }
  // 初始化imgFigures 数组
  genImgFigures(){
    let imgDatas = this.state.imgDatas
    let imgFigures = this.state.imgFigures

    imgDatas.forEach((data,index)=>{

      imgFigures.push(
        <ImgFigure imgSrc={data.imgSrc} 
                  imgAlt={data.imgTit} 
                  imgDesc={data.imgDesc}>
        </ImgFigure>
        )
    })
    this.imgFigures=imgFigures;
  }

  render() {
    return (

      <section className='stage'>
        <section className='img-sec'>
          {this.state.imgFigures}
        </section>
        <nav className='controller-nav'>
          {this.state.controllerUnits}
        </nav>
      </section>

    );
  }


}

export default App;




