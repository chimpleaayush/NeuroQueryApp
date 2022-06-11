import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const {children} = this.props;
    const {hasError} = this.state;
    return hasError ? (
      <View style={styles.container}>
        <Text>Something went wrong.</Text>
      </View>
    ) : (
      children
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

ErrorBoundary.defaultProps = {
  children: {},
};

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
