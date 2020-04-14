import React, { Component } from 'react';
import './App.css';
import { Comp, processingData } from '../processingData/processingData'
import {SearchBlock} from '../search/search'

export default class App extends Component{
  state = {
    monster: [],
    inpSearch: ''
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(data => data.map(item => processingData(item)))
      .then(data => this.setState({
        monster: data
      }))
  }
  render(){
    const {monster, inpSearch} = this.state
    const available = monster.filter(item => item.name.toLowerCase().includes(inpSearch.toLowerCase()))
    return (
      <div>
        <Comp monster={available}/>
        <SearchBlock 
        placeholder='Search in list' 
        handler={e => this.setState({inpSearch: e.target.value})}/>
      </div>
    )
  }
}
