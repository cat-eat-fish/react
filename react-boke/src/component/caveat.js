import React, { Component } from 'react';

class Caveat extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return (
        <div className="caveat">
            <span>备注：</span>很高兴你能来到这里，我有很多有趣的发现，希望和您交流！
        </div>
    );
  }
}
export default Caveat;