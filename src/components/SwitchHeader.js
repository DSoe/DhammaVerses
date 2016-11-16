// import libraries for making a Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Switch } from 'react-native';
import * as actions from '../actions';


//Make a Component

class SwitchHeader extends Component {

  componentDidMount() {
    this.props.switchFont(true);
  }

  render() {
    const { textStyle, viewStyle } = styles;
    const { unicode } = this.props;
    return (
    <View style={viewStyle}>
     <View>
      <Text style={textStyle}>{this.props.headerText}</Text>
    </View>
      <View>
        <Switch
          onValueChange={(value) => this.props.switchFont(value)}
          style={{ marginBottom: 10 }}
          value={unicode}
        />
        </View>
    </View>
  );
  }
}

const styles = {
  viewStyle: {
    //flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 60,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to the other parts of the app
const mapStateToProps = (state) => { //eslint-disable-line
  return { unicode: state.unicode };
};

export default connect(mapStateToProps, actions)(SwitchHeader);
