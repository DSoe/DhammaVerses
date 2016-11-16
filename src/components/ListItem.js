import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  // LayoutAnimation
} from 'react-native';
import FlipCard from 'react-native-flip-card';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  //
  // componentWillUpdate() {
  //   LayoutAnimation.spring();
  // }

  renderDescription() {
    const { descriptionStyle, cardStyle, detailStyle } = styles;
    const { library, expanded, unicode } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <FlipCard
             style={cardStyle}
             friction={18}
             perspective={1000}
          >
            <View>
             <Text style={descriptionStyle}>
               { unicode ?
                library.description
               : library.zgDescription }
             </Text>
            </View>
            <View>
             <Text style={detailStyle}>
                { unicode ?
                  library.detail
                : library.zgDetail }
             </Text>
            </View>
          </FlipCard>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle, buttonStyle } = styles;
    const { id, title, zgTitle } = this.props.library;
    const { unicode } = this.props;
    return (
    <TouchableWithoutFeedback
      // activeOpacity={1}
      onPress={() => this.props.selectLibrary(id)}
      style={buttonStyle}
    >
      <View>
        <CardSection>
           <View>
             <Text style={titleStyle}>
              { unicode ?
               title
               : zgTitle }
             </Text>
           </View>
        </CardSection>
        {this.renderDescription()}
      </View>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 18,
    alignSelf: 'center',
  },
  detailStyle: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 18,
    alignSelf: 'center',
  },
  cardStyle: {
    flex: 1,
    flexWrap: 'wrap',
    alignSelf: 'center',
    borderRadius: 5
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
