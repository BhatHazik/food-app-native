import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import CustomSwitch from '../components/switch';

import ModalPage from '../components/modal';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MyAccountScreen = () => {
  const [isSMSEnabled, setIsSMSEnabled] = useState(true);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headertext}>My Account</Text>
      </View>

      <View style={styles.section2}>
        <Text style={styles.header}>Order Related Messages</Text>
        <Text style={styles.description}>
          Order-related messages are essential to providing service, hence they
          cannot be disabled.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Reminders</Text>
        <Text style={styles.description}>
          Keep these on to receive offer recommendations & timely reminders
        </Text>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>WhatsApp</Text>
          <CustomSwitch value={isSMSEnabled} onValueChange={setIsSMSEnabled} />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>SMS</Text>
          <CustomSwitch value={isSMSEnabled} onValueChange={setIsSMSEnabled} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.header, {marginTop: 10}]}>Account Deletion</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.deleteText}>Delete Account?</Text>
        </TouchableOpacity>
      </View>
      <ModalPage
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  section: {
    marginBottom: 24,
    borderTopWidth: 0.5,
    paddingTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 8,
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
    fontWeight: '300',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  switchLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  deleteText: {
    fontSize: 20,
    color: '#FF0000',
    fontWeight: '400',
  },
  section2: {
    marginBottom: 24,
    borderTopWidth: 0.5,
    paddingTop: 20,
    borderStyle: 'dashed',
  },
  headertext: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 30,
  },
});

export default MyAccountScreen;
