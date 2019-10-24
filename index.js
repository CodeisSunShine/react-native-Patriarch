
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ParentSupervisionPage from './Pages/ParentSupervisionPage';
import SuperviseDetailPage from './Pages/SuperviseDetailPage';

const Stack = createStackNavigator({
  ParentSupervisionPage: {
    screen: ParentSupervisionPage,
  },
  SuperviseDetailPage: {
    screen: SuperviseDetailPage,
  },
});

export default createAppContainer(Stack);
