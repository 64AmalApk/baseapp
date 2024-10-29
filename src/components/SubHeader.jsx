import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../resources';
import { moderateScale, textScale, ICON_TYPE, moderateScaleVertical } from '../helper';
import { CustomIcon } from '../components';

const SubHeader = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric', 
    year: 'numeric'
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.searchCircle}>
          <CustomIcon
            name="search"
            origin={ICON_TYPE.FEATHER}
            size={textScale(20)}
            color={Colors.primary}
          />
        </View>
        
        <Text style={styles.dateText}>{currentDate}</Text>
        
        <CustomIcon
          name="calendar"
          origin={ICON_TYPE.FEATHER} 
          size={textScale(24)}
          color={Colors.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(35),
    marginHorizontal: moderateScale(16),
    marginVertical: moderateScaleVertical(10)
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchCircle: {
    backgroundColor: Colors.white,
    width: moderateScale(36),
    height: moderateScale(36),
    borderRadius: moderateScale(18),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: textScale(16),
    color: Colors.white,
    fontWeight: '500',
  }
});

export default SubHeader;
