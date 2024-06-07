import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const Biryani = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={Styles.header}>
        <View style={Styles.arrow}>
          <Image
            source={require('../assets/Back.png')}
            style={{width: 22, height: 20}}
          />
        </View>
        <View>
          <Text style={Styles.text}>Biryani</Text>
        </View>
        <Image
          source={require('../assets/Dish.png')}
          style={{height: 114, width: 114}}
        />
        <View>
          <Text></Text>
        </View>
      </View>
    </View>
  );
};
export default Biryani;
const Styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 167,
    backgroundColor: 'black',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    flexDirection: 'row',
  },
  arrow: {
    margin: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    margin: 25,
    color: 'white',
    marginLeft: 65,
    marginRight: 65,
  },
  text2: {
    color: 'white',
  },
});
