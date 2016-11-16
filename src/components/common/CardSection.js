import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
     {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    //borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
