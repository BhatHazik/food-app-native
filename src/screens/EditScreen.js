import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {updateName, updateNumber} from '../redux/reducer';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const EditScreen = () => {
  const dispatch = useDispatch();
  const {name, phone} = useSelector(state => state.cart);
  const navigation = useNavigation();
  const [newName, setNewName] = useState(name);
  const [newPhone, setNewPhone] = useState(phone);

  const [profileImage, setProfileImage] = useState('Img.jpg');
  const [email, setEmail] = useState('waseem321@gmail.com');
  const [nameFocused, setNameFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const handleSave = () => {
    dispatch(updateName(newName));
    dispatch(updateNumber(newPhone));

    navigation.goBack();
  };

  const handleImageUpload = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const source = {uri: response.assets[0].uri};

        if (source.uri) {
          setProfileImage(source.uri);
        } else {
          console.warn('Image URI is empty.');
        }
      } else {
        console.warn('No assets found in response.');
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>

      <View style={[styles.fieldContainer, nameFocused && styles.focusedInput]}>
        <Text style={styles.label}>NAME</Text>
        <View style={styles.editContainer}>
          <TextInput
            style={styles.input}
            value={newName}
            onChangeText={setNewName}
            onFocus={() => setNameFocused(true)}
            onBlur={() => setNameFocused(false)}
          />
          <TouchableOpacity>
            <Text style={styles.editText}>EDIT</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[styles.fieldContainer, phoneFocused && styles.focusedInput]}>
        <Text style={styles.label}>PHONE NUMBER</Text>
        <View style={styles.editContainer}>
          <TextInput
            style={styles.input}
            value={newPhone}
            onChangeText={setNewPhone}
            onFocus={() => setPhoneFocused(true)}
            onBlur={() => setPhoneFocused(false)}
          />
          <TouchableOpacity>
            <Text style={styles.editText}>EDIT</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>PROFILE IMAGE</Text>
        <View style={styles.editContainer}>
          <Text style={styles.input}>{profileImage}</Text>
          <TouchableOpacity onPress={handleImageUpload}>
            <Text style={styles.editText}>Upload</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>EMAIL ADDRESS</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          editable={false}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.updateButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText2}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    height: 20,
    width: 24,
    marginRight: 30,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 30,
  },
  fieldContainer: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
    fontWeight: '300',
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 8,
  },
  editText: {
    color: '#FA4A0C',
    marginLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  updateButton: {
    backgroundColor: '#FA4A0C',
    borderRadius: 10,
    width: 140,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    borderColor: '#D6D6D6',
    borderRadius: 10,
    width: 140,
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
  focusedInput: {
    borderBottomColor: '#FA4A0C',
  },
  buttonText2: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
  },
});

export default EditScreen;
