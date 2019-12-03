import React from "react";
import connect from "../store/connect";
import Interval from "./IntervalComponent";


class TimerComponent extends React.Component {
    state = {
      currentTime: 0,
      timerId: null
    }
  
    render() {
      return (
        <div>
          <Interval />
          <div>
            Секундомер: {this.state.currentTime} сек.
          </div>
          <div>
            <button onClick={this.handleStart}>Старт</button>
            <button onClick={this.handleStop}>Стоп</button>
          </div>
        </div>
      )
    }
  
    // теряем контекст, поэтому использую стрелочную функцию
    handleStart = () => {
        //используем setInterval вместо setTimeout, чтобы счетчик работал
        this.setState({
            // записываем идентификатор таймера для отмены дальнейшего выполнения
            timerId: setInterval(() => this.setState({
                currentTime: this.state.currentTime + this.props.currentInterval,
              }), this.props.currentInterval * 1000)
        })
        
    }
    
    handleStop = () => {
        // очищаем счетчик
        clearInterval(this.state.timerId)
        this.setState({ currentTime: 0 })
    }

  }
  
  const Timer = connect(state => ({
    currentInterval: state,
  }), () => {})(TimerComponent)

export default Timer