import Navbar from './component/Navbar';
import News from './component/News';
import './App.css';
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 10;
  state={
    Progress: 0
  }
  setProgress=(Progress)=>{
    this.setState({Progress: Progress})
  }
  render() {
    return (
      <>

      <Navbar/>
      
            <LoadingBar
              color='#f11946'
              progress={this.state.Progress}       
            />
        <Routes>        
            <Route path="/home" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' key="home" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' key="business" category='business'/>} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' key="entertainment" category='entertainment'/>} />
            <Route path="/general" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' key="general" category='general'/>} />
            <Route path="/health" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' key="health" category='health'/>} />
            <Route path="/science" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' key="science" category='science'/>} />
            <Route path="/sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' key="sports" category='sports'/>} />
            <Route path="/technology" element={<News setProgress={this.setProgress} pageSize={this.pageSize} country='in' key="technology" category='technology'/>} />


           </Routes>
          
      
      </>

    )
  }
}

