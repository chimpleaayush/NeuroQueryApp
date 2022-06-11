import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Font, Color} from '../asset';
import Queries from '../screens/postLogin/Queries';
import Tickets from '../screens/postLogin/Tickets';

const Tab = createBottomTabNavigator();

const iconConfig = {
  // home: require('../asset/Icons/homeTabInactive.png'),
  // schedule: require('../asset/Icons/scheduleInactive.png'),
  // content: require('../asset/Icons/contentInactive.png'),
  // profile: require('../asset/Icons/myProfileInactive.png'),
  // homeSelected: require('../asset/Icons/homeTabActive.png'),
  // contentSelected: require('../asset/Icons/contentActive.png'),
  // scheduleSelected: require('../asset/Icons/scheduleActive.png'),
  // profileSelected: require('../asset/Icons/myProfileActive.png'),
};

const {width} = Dimensions.get('window');

const renderTabIcon = ({focused}, screen) => {
  let tabIcon = iconConfig[screen];
  if (focused) {
    tabIcon = iconConfig[`${screen}Selected`];
  }
  return (
    <>
      {screen !== 'post' ? (
        <View style={styles.tabIconContainer}>
          <Image resizeMode="contain" style={styles.tabIcon} source={tabIcon} />
        </View>
      ) : (
        <View style={[styles.tabIconContainer, {width: 45, height: 45}]}>
          <Image resizeMode="contain" style={styles.tabIcon} source={tabIcon} />
        </View>
      )}
    </>
  );
};

const getTabScreen = (tabName, navigation) => {
  switch (tabName) {
    case 'Queries':
      return (
        <Tab.Screen
          key={tabName}
          name="Queries"
          component={Queries}
          options={{
            tabBarLabel: 'Queries',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="chat-question"
                size={21}
                color="#000"
              />
            ),
          }}
        />
      );

    case 'Tickets':
      return (
        <Tab.Screen
          key={tabName}
          name="Tickets"
          component={Tickets}
          options={{
            tabBarLabel: 'Tickets',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="ticket" size={21} color="#000" />
            ),
          }}
        />
      );

    default:
      return null;
  }
};

const studentTab = ['Queries', 'Tickets'];

const mentorTab = ['Queries', 'Tickets'];

export const StudentHomeTabs = ({navigation}) => (
  <Tab.Navigator
    tabBarOptions={{
      labelStyle: {
        fontSize: 8,
        lineHeight: 10,
        fontFamily: Font.SEMI_BOLD,
      },
      activeTintColor: Color.blue2,
      inactiveTintColor: Color.grey4,
      style: {
        elevation: 2,
        justifyContent: 'center',
        padding: 8,
      },
      tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 6,
      },
    }}>
    {studentTab.map(keys => getTabScreen(keys, navigation))}
  </Tab.Navigator>
);

export const MentorHomeTabs = ({navigation}) => (
  <Tab.Navigator
    tabBarOptions={{
      labelStyle: {
        fontSize: 8,
        lineHeight: 10,
        fontFamily: Font.SEMI_BOLD,
      },
      activeTintColor: Color.blue2,
      inactiveTintColor: Color.grey4,
      style: {
        elevation: 2,
        justifyContent: 'center',
        padding: 8,
      },
      tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 6,
      },
    }}>
    {mentorTab.map(keys => getTabScreen(keys, navigation))}
  </Tab.Navigator>
);

export const styles = StyleSheet.create({
  tabIcon: {
    flex: 1,
  },
  tabIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.07,
    height: width * 0.07,
  },
});
