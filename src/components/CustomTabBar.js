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
      color={isFocused ? Colors.warning : '#a57e0b'}
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
              style={[styles.tab, isFocused && styles.tabActive]}>
              <View style={[styles.tabContent, isFocused && styles.activeTab]}>
                {renderIcon(tabConfig.icon, tabConfig.origin, isFocused)}
                <Text style={[styles.label, isFocused && styles.activeLabel]}>
                  {tabConfig?.title}
                </Text>
                {isFocused && <View style={styles.activeLine} />}
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
    backgroundColor: Colors.primary,
    height: moderateScale(70),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0,
    width: '100%',
    marginHorizontal: 'auto',
    // paddingHorizontal: moderateScale(10),
  },
  tab: {
    flex: 1,
    height: moderateScale(70),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  tabActive: {
    backgroundColor: Colors.primary,
  },
  inactiveTab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeLine: {
    position: 'absolute',
    bottom: moderateScale(-10),
    width: moderateScale(70),
    height: 3,
    backgroundColor: Colors.white,
    borderRadius: 2,
    marginBottom: 4
  },
  activeLabel: {
    color: Colors.warning,
  },
  label: {
    fontSize: textScale(12),
    color: Colors.white,
    marginTop: moderateScale(4),
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default CustomTabBar;
