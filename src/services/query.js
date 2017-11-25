import React from 'react';
import { connect } from 'react-redux';
import { getRequestInfo } from 'redux-bees';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { omit } from 'lodash';

import { deserialize } from './config';

const defaultDispatcher = call => call();

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function query(propName, apiCall, dispatcher = defaultDispatcher) {
  return InnerComponent => {
    class Wrapper extends React.Component {
      constructor(props) {
        super(props);
        this.fetch = this.fetch.bind(this);
        this.state = {
          deserializedResult: null,
          previousData: null,
        };
      }

      componentDidMount() {
        this.fetch();
      }

      componentWillReceiveProps(nextProps) {
        if (!nextProps.request.isLoading && !nextProps.request.hasStarted) {
          this.fetch(nextProps);
        }
      }

      fetch(props = this.props) {
        const { dispatch } = props;
        return dispatch(dispatcher(apiCall, props));
      }

      deserialize(data) {
        deserialize({ data }).then(deserializedResult =>
          this.setState({
            deserializedResult,
            previousData: data,
          })
        );
      }

      render() {
        const data = this.props.request.result;
        const { deserializedResult, previousData } = this.state || {};

        if (data !== previousData) {
          this.deserialize(data);
        }

        const props = {
          ...omit(this.props, ['request']),
          [propName]: deserializedResult,
          status: {
            ...this.props.status,
            [propName]: {
              ...this.props.request,
              refetch: this.fetch,
            },
          },
        };

        return <InnerComponent {...props} />;
      }
    }

    Wrapper.displayName = `query(${getDisplayName(InnerComponent)}, ${propName})`;

    Wrapper.loadData = function(dispatch, props) {
      return dispatch(dispatcher(apiCall, props));
    };

    hoistNonReactStatic(Wrapper, InnerComponent);

    const mapStateToProps = (state, props) => {
      const argumentsAbsorber = (...args) => args;

      return {
        request: getRequestInfo(state, apiCall, dispatcher(argumentsAbsorber, props)),
      };
    };

    return connect(mapStateToProps)(Wrapper);
  };
}
