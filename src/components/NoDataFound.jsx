import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../resources';
import { moderateScale, textScale } from '../helper';
import { CustomIcon } from './';
import { ICON_TYPE } from '../helper';

const NoDataFound = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <CustomIcon
          name="file-excel-box"
          origin={ICON_TYPE.MATERIAL_COMMUNITY}
          size={textScale(100)}
          color={Colors.grey}
        />
      </View>
      <Text style={styles.text}>No Records Found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: moderateScale(20)
  },
  iconContainer: {
    borderRadius: moderateScale(100),
    padding: moderateScale(30),
    borderWidth: 1,
    backgroundColor: Colors.grey,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: moderateScale(16),
    fontSize: textScale(18),
    color: Colors.grey,
    textAlign: 'center'
  }
});

export default NoDataFound;
