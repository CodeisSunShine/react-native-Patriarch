/* eslint-disable react/jsx-no-undef */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';

const {width, height, scale} = Dimensions.get('window');

export default class DayParentSupervisionPageOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [
        {
          title:
            '说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明',
          type: 'instructions',
        },
        {
          title: '第一组',
          type: 'header',
        },
        {
          title: '第一条',
          type: 'content',
          key: 'iOS',
        },
        {
          title: '第二组',
          type: 'header',
        },
        {
          title: '第一条',
          type: 'content',
          key: 'huawei',
        },
        {
          title: '第二条',
          type: 'content',
          key: 'vivo',
        },
      ],
    };
  }

  _instructions(item) {
    return (
      <View>
        <Text style={styles.headerTitleStyle}>
          说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说
          明/n说明说明说明说明说明
        </Text>
      </View>
    );
  }

  _headerTitle(item) {
    return (
      <View>
        <Text style={styles.headerTitleStyle}>{item.title}</Text>
      </View>
    );
  }

  _contentView(item) {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('SuperviseDetailPage')}>
        <View style={styles.contentViewStyle}>
          <Text style={styles.contentTitleStyle}>{item.title}</Text>
          <Text style={styles.contentArrowStyle}>></Text>
        </View>
      </TouchableOpacity>
    );
  }

  _listItemView(item) {
    if (item.type === 'instructions') {
      return this._instructions(item);
    } else if (item.type === 'header') {
      return this._headerTitle(item);
    } else if (item.type === 'content') {
      return this._contentView(item);
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.bgView}>
        <FlatList
          style={styles.flatListStyle}
          ref={this.onFlatListRef}
          data={this.state.dataList}
          renderItem={({item, index}) => this._listItemView(item)}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  bgView: {
    marginTop: 10,
  },
  instructions: {
    paddingLeft: 16,
    height: 44,
  },
  headerTitleStyle: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    fontSize: 16,
  },
  contentViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 44,
  },
  contentTitleStyle: {
    paddingLeft: 16,
    fontSize: 15,
  },
  contentArrowStyle: {
    paddingRight: 16,
    fontSize: 16,
  },
});
