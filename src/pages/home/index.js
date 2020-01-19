import React from  'react'
import Error from '../error/index'
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return <div style={{paddingLeft: 20}}>
      <p>开始</p>
      <div>{this.state.count}</div>
      <button onClick={this.handleClick}>点击</button>
      <Error count={this.state.count}></Error>
    </div>
  }
}