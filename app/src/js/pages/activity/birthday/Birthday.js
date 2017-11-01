import React from 'react'
import 'scss/activity/birthday.component.scss'

export default class Birthday extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='transition-group'>
        <div className='birthday'>birthday</div>
      </div>
    )
  }
}
