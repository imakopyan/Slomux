import React from "react";
import PropTypes from "prop-types";

const connect = (mapStateToProps, mapDispatchToProps) =>
  Component => {
    class WrappedComponent extends React.Component {
      render() {
        return (
          <Component
            {...this.props}
            {...mapStateToProps(this.context.store.getState(), this.props)}
            {...mapDispatchToProps(this.context.store.dispatch, this.props)}
          />
        )
      }

      // изменил жизненный цикл
      componentDidMount() {
        this.context.store.subscribe(this.handleChange);
        this.unsubscribe = this.context.store.subscribe(this.handleChange);
    }

    // нужно отписаться
    componentWillUnmount() {
        this.unsubscribe()
    }

      handleChange = () => {
        this.forceUpdate()
      }
    }

    WrappedComponent.contextTypes = {
      store: PropTypes.object,
    }

    return WrappedComponent
  }

export default connect