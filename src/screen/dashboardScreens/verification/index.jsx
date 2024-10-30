import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Colors } from '../../../resources';
import { Header, SubHeader, CardComponent, NoDataFound } from '../../../components';
import { moderateScale } from '../../../helper';
import { useFocusEffect } from '@react-navigation/native';
import { useTask } from '../../../_customContext/TaskContext';

const VerificationScreen = () => {
  const { fetchTasks, verificationTasks } = useTask();

  useFocusEffect(
    React.useCallback(() => {
      fetchTasks();
    }, [])
  );

  const renderTaskCard = ({ item }) => (
    <CardComponent item={item} />
  );

  if (verificationTasks.length === 0) {
    return (
      <View style={styles.container}>
        <Header title={'let start'}/>
        <SubHeader />
        <NoDataFound />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title={'let start'}/>
      <SubHeader />
      <FlatList
        data={verificationTasks}
        renderItem={renderTaskCard}
        keyExtractor={item => item._id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  listContainer: {
    padding: moderateScale(16)
  }
});

export default VerificationScreen;
