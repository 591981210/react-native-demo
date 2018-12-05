/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/components/home/Home.js'
import MovieScreen from './src/components/movie/Movie.js'
import MineScreen from './src/components/mine/Mine.js'
import { createBottomTabNavigator } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Movie: MovieScreen,
    Mine: MineScreen,
});


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <TabNavigator/>
    );
  }
}