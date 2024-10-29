import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Colors } from '../../../resources';
import { Header, SubHeader } from '../../../components';
import { moderateScale, textScale } from '../../../helper';
import authService from '../../../services/auth.service';
import { Card, Text, Surface } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

const PendingScreen = () => {
  const [tasks, setTasks] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      fetchTasks();
    }, [])
  );

  const fetchTasks = async () => {
    try {
      const response = await authService.getAllTask();
      const pendingTasks = response.data.data.filter(task => task.status === 'Pending');
      setTasks(pendingTasks);
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  };

  const renderTaskCard = ({ item }) => (
    <Card style={styles.card} mode="elevated">
      <Card.Content>
        <View style={styles.cardHeader}>
          <Text variant="titleLarge" style={styles.bankName}>{item.bankName.toUpperCase()}</Text>
          <Text variant="titleMedium" style={styles.product}>{item.product}</Text>
        </View>
        
        <Surface style={styles.cardBody}>
          <Text style={styles.label}>Applicant: <Text style={styles.value}>{item.applicantName}</Text></Text>
          <Text style={styles.label}>Contact: <Text style={styles.value}>{item.contactNumber}</Text></Text>
          <Text style={styles.label}>Address: <Text style={styles.value}>{item.address}</Text></Text>
          <Text style={styles.label}>Assign Date: <Text style={styles.value}>{item.assignDate}</Text></Text>
          <Text style={styles.label}>Trigger: <Text style={styles.value}>{item.trigger}</Text></Text>
          <Text style={styles.label}>Status: <Text style={styles.value}>{item.status}</Text></Text>
        </Surface>

        <View style={styles.cardFooter}>
          <Text style={styles.label}>Verifier: <Text style={styles.value}>{item.verifierNameOrId}</Text></Text>
          <Text style={styles.label}>Team Leader: <Text style={styles.value}>{item.teamLeaderOrId}</Text></Text>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Header title={'let start'}/>
      <SubHeader />
      <FlatList
        data={tasks}
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
  },
  card: {
    marginBottom: moderateScale(16),
    backgroundColor: Colors.primary,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(10),
  },
  bankName: {
    fontWeight: 'bold',
    color: Colors.white,
  },
  product: {
    color: Colors.white,
    fontWeight: '500',
  },
  cardBody: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Colors.white + '20',
    paddingVertical: moderateScale(10),
    backgroundColor: Colors.primary,
  },
  cardFooter: {
    marginTop: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: textScale(14),
    color: Colors.white,
    marginBottom: moderateScale(5),
  },
  value: {
    color: Colors.white,
    fontWeight: '500',
  }
});

export default PendingScreen;
