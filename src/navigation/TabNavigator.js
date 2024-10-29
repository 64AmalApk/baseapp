import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTE_NAME } from '../helper';
import { Draft, Pending, Verification } from '../screen';
// import { CustomTabBar } from '../components';

const Tab = createBottomTabNavigator();
export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#41484e',
      }}
    tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name={ROUTE_NAME.VERIFICATION}
        component={Verification}
      />
      <Tab.Screen
        name={ROUTE_NAME.PENDING}
        component={Pending}
      />
      <Tab.Screen
        name={ROUTE_NAME.DRAFT}
        component={Draft}
      />

      {/* <Tab.Screen
        name={RouteName.MORE}
        component={DrawerNavigator}
        options={{
          tabBarIcon: ({focused, size, color}) => {
            return (
              <CustomIcon
                name={'reorder-three'}
                origin={ICON_TYPE.ICONICONS}
                color={color}
              />
            );
          },
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            NavigationService.openDrawer();
          },
        })}
      /> */}
    </Tab.Navigator>
  );
}
