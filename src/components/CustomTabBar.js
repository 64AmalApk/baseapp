import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Colors} from '../resources';
import {ICON_TYPE, moderateScale, ROUTE_NAME, textScale} from '../helper';
import {CustomIcon} from '../components';

const tabScreens = [
  {
    name: ROUTE_NAME.VERIFICATION,
    title: 'Under Verification',
    icon: 'check-outline',
    origin: ICON_TYPE.MATERIAL_COMMUNITY
  },
  {
    name: ROUTE_NAME.PENDING,
    title: 'Pending', 
    icon: 'alarm-check',
    origin: ICON_TYPE.MATERIAL_COMMUNITY
  },
  {
    name: ROUTE_NAME.DRAFT,
    title: 'Draft',
    icon: 'email-open',
    origin: ICON_TYPE.MATERIAL_COMMUNITY
  },
];

const CustomTabBar = ({state, descriptors, navigation}) => {
  const renderIcon = (icon, origin, isFocused) => (
    <CustomIcon
      name={icon}
      origin={origin}
      size={textScale(25)}
      color={isFocused ? Colors.primary : Colors.black}
    />
  );

  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const tabConfig = tabScreens.find(tab => tab.name === route.name);

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          if (!tabConfig) return null;

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              onPress={onPress}
              onLongPress={onLongPress}
              style={isFocused ? styles.tabActive : styles.tab}>
              <View style={isFocused ? styles.activeTab : styles.inactiveTab}>
                {renderIcon(tabConfig.icon, tabConfig.origin, isFocused)}
                <Text style={[styles.label, isFocused && styles.activeLabel]}>
                  {tabConfig?.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: Colors.white,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    height: moderateScale(70),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0,
    width: '95%',
    marginHorizontal: 'auto',
    paddingHorizontal: moderateScale(10),
  },
  tab: {},
  tabActive: {},
  inactiveTab: {
    height: moderateScale(50),
    width: moderateScale(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(50),
    width: moderateScale(60),
  },
  activeLabel: {
    // color: Colors.primary,
  },
  label: {
    fontSize: textScale(10),
    color: '#14213d',
    marginTop: moderateScale(4),
  },
});

export default CustomTabBar;
