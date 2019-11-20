import React, { Component, PureComponent } from 'react';
import './Memoize.css';

// Always gets called
// class Memoize extends Component {
//   render() {
//     console.log("Render occurred")
//     return (
//       <div className="memoize">
//           <div className='memoized'>
//           </div>
//       </div>
//     );
//   }
// }

// 1. Only gets called ther first time by default when props and state do not change ever
// 2. It still only gets called once if passing in one function instance
// 3. It gets called every time parent rerenders when it is passed an arrow function because
// A new arrow function is a new first class object
// 4. Now, we hope that memoize will solve this problem, BUT IT DOESNT because now you are just
// Invoking the memoized function every time, which returns the cached function...
class Memoize extends PureComponent {
  render() {
    console.log("Render occurred")
    return (
      <div className="memoize">
          <div className='memoized'>
            <button onClick={this.props.myFunction}>Child Button</button>
          </div>
      </div>
    );
  }
}

export default Memoize;
