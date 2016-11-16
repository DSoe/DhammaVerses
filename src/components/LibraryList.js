import React, { Component } from 'react';
import { ListView, Image, ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import * as actions from '../actions';

class LibraryList extends Component {

  componentDidMount() {
    this.props.fetchAll();
  }

  renderRow(library, unicode) {
    return <ListItem library={library} unicode={unicode} />;
  }

  render() {
    if (this.props.libraries && this.props.libraries.length > 0) {
      return (
        <Image source={require('../../img/Andriod-Dhamma-App-Cover.jpg')} style={styles.bgImage} >
          <ListView
            dataSource={this.props.dataSource}
            renderRow={(library) => this.renderRow(library, this.props.unicode)}
            enableEmptySections
            automaticallyAdjustContentInsets={false}
            style={{ flex: 1 }}
          />
        </Image>
      );
    }
      return (
        <View style={styles.spinnerStyle}>
          <ActivityIndicator size={'large'} />
        </View>
      );
  }
}

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bgImage: {
    flex: 1,
    width: null,
    height: null,
  }
};

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

const mapStateToProps = state => {
  console.log('unicode ', state.unicode);
  return { dataSource: dataSource.cloneWithRows(state.libraries),
          libraries: state.libraries,
          unicode: state.unicode };
};

export default connect(mapStateToProps, actions)(LibraryList);
//connect returns the fuction and that function then calls(LibraryList)
