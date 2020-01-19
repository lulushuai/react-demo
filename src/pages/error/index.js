import React from 'react'
export default class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '张三'
        }
    }
    componentWillMount() {
        console.log('will mount')
    }
    componentDidMount() {
        console.log('did mount')
    }
    componentWillReceiveProps(newProps) {
        console.log('receive mount===>', newProps)
    }
    shouldComponentUpdate() {
        console.log('should update')
        return true
    }
    componentWillUpdate() {
        console.log('will update')
    }
    componentDidUpdate() {
        console.log('did update')
    }
    render() {
        return <div>
            <div>子组件</div>
            <div>{this.props.count}</div>
        </div>
    }
}