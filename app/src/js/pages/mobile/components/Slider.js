import React from 'react'
import ReactSlider from 'react-slider'

export default class Slider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.defaultValue
    }
  }
  onChange (value) {
    this.setState({'value': value})
    this.props.onChange(value)
  }
  render () {
    return (
      <ReactSlider withBars={this.props.withBars} step={this.props.step} min={this.props.min} max={this.props.max} className={this.props.orientation + '-slider'} pearling={true} onChange={this.onChange.bind(this)} value={this.state.value}>
        <div>{this.state.value}元</div>
      </ReactSlider>
    )
  }
}
