import React from "react";
import connect from "../store/connect";
import {changeInterval} from "../store/actions";

class IntervalComponent extends React.Component {
  render() {
    return (
      <div>
        <span>Интервал обновления секундомера: {this.props.currentInterval} сек.</span>
        <span>
          <button onClick={() => this.props.changeInterval(-1)}>-</button>
          <button onClick={() => this.props.changeInterval(1)}>+</button>
        </span>
      </div>
    )
  }
}

// перепутаны местами mapStateToProps и mapDispatchToProps
const Interval = connect(state => ({
  currentInterval: state,
}), dispatch => ({
  changeInterval: value => dispatch(changeInterval(value)),
}),
)(IntervalComponent)

  export default Interval
