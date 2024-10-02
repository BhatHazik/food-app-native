// components/ModalPage.js
import React from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

const ModalPage = ({visible, onClose, onConfirm}) => {
  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <Animatable.View
          animation="fadeIn"
          duration={300}
          style={styles.modalContainer}>
          <Text style={styles.modalText}>Are you sure to delete account? </Text>
          <View style={styles.textbox}>
            <Text style={styles.modalText2}>
              {' '}
              Once deleted,this account will lose
            </Text>
            <Text style={styles.modalText2}> access to Food Kart</Text>
          </View>
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.modalButton} onPress={onClose}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton2}
              onPress={() => {
                onConfirm();
                onClose();
              }}>
              <Text style={styles.modalButtonText2}>Delete</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
  },
  modalText2: {
    fontSize: 12,

    fontWeight: '300',
    color: 'black',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  modalButton: {
    flex: 1,
    width: 110,
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D6D6D6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 20,
  },
  modalButtonText: {
    color: 'black',
  },
  modalButtonText2: {
    color: 'white',
  },
  textbox: {
    width: 200,
    height: 50,

    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton2: {
    flex: 1,
    width: 110,
    height: 40,
    backgroundColor: '#FA4A0C',

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default ModalPage;
