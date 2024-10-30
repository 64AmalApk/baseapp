import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Header, NoDataFound, Spacer, SubHeader } from '../../../components';
import { moderateScale, textScale } from '../../../helper';
import { Colors } from '../../../resources';

const DraftScreen = () => {
  return (
    <View style={styles.container}>
      <Header title={'let start '}/>
      <SubHeader />
      <NoDataFound />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: textScale(24),
    color: Colors.black,
    textAlign: 'center'
  },
  description: {
    fontSize: textScale(16),
    color: Colors.grey,
    textAlign: 'center'
  }
});

export default DraftScreen;
