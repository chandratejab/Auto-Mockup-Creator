import React from 'react';
import { connect } from 'react-redux';
import { incr } from '../actions';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        Home
        <div>
          <input type="button" onClick={this.props.incr} value="Increment" />
        </div>
        <div>
          Value: {this.props.count}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ global: { count } }) => {
  return {
    count
  }
}

export default connect(mapStateToProps, {
  incr
})(HomePage);
