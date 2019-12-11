// Code DelayedButton Component Here
import React from 'react'


class DelayedButton extends React.Component {
// state ={
//     delay: 0
// }


// setTimeout
recordData = (e) => {
  e.persist();
  setTimeout(() => {
      this.props.onDelayedClick(e), 
      this.props.delay
  })
}

render(){
   console.log(this.props)
  return <button onClick ={this.recordData}> Delaaaaaaay</button>
}
}

export default DelayedButton;