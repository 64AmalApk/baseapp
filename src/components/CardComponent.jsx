import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Surface } from 'react-native-paper';
import { Colors } from '../resources';
import { moderateScale, ROUTE_NAME, textScale } from '../helper';
import { useNavigation } from '@react-navigation/native';

const CardComponent = ({ item }) => {
  const navigation = useNavigation();

  const navigateToForm = () => {
    console.log("test")
    navigation.navigate(ROUTE_NAME.PROFILE_FORM, { taskId: item._id });
    if (item.trigger === 'Office') {
      navigation.navigate('OfficeProfile', { taskId: item });
    } else if (item.trigger === 'Residence') {
      navigation.navigate('ResidentProfile', { taskId: item });
    }
  };

  return (
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

          <Text style={styles.label}>Verifier: <Text style={styles.value}>{item.verifierNameOrId}</Text></Text>
          <Text style={styles.label}>Team Leader: <Text style={styles.value}>{item.teamLeaderOrId}</Text></Text>
        </Surface>

        <View style={styles.cardFooter}>
        <Text style={styles.label}>Status: <Text style={styles.value}>{item.status}</Text></Text>
        {item.status === 'Draft' ? (
          <Text style={styles.actionlabel}>Under Verification</Text>
        ) : (
          <Text 
            style={[styles.actionlabel]}
            onPress={navigateToForm}
          >
            Start Now
          </Text>
        )}
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: moderateScale(16),
    backgroundColor: Colors.primaryBg,
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
    backgroundColor: Colors.primaryBg,
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
  },
  actionlabel:{
    fontSize: textScale(16),
    color: Colors.secondaryBg,
    fontWeight: '700',
  }
});

export default CardComponent;
