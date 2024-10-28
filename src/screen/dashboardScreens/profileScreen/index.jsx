import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Images, Colors } from '../../../resources';
import { moderateScale, textScale, moderateScaleVertical } from '../../../helper';

const ProfileScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <Image
          style={styles.profileImage}
          source={Images.demoUser}
        />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>john.doe@example.com</Text>
      </View>

      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Edit Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Help & Support</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
          <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    padding: moderateScale(20),
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerTitle: {
    fontSize: textScale(24),
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    padding: moderateScale(20),
  },
  profileImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    marginBottom: moderateScaleVertical(10),
  },
  userName: {
    fontSize: textScale(20),
    fontWeight: 'bold',
    marginBottom: moderateScaleVertical(5),
  },
  userEmail: {
    fontSize: textScale(16),
    color: Colors.textGray,
  },
  menuSection: {
    padding: moderateScale(20),
  },
  menuItem: {
    paddingVertical: moderateScaleVertical(15),
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  menuText: {
    fontSize: textScale(16),
  },
  logoutButton: {
    marginTop: moderateScaleVertical(20),
    borderBottomWidth: 0,
  },
  logoutText: {
    color: Colors.error,
  },
});

export default ProfileScreen;
