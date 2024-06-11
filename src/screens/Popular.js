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
const Popular = () => {
  const render1 = ({item}) => (
    <View style={Styles.itemcover}>
      <Image
        source={require('../assets/cover.png')}
        style={Styles.coverimage}
      />
      <Text
        style={{
          color: 'white',
          marginTop: 70,
          fontSize: 11,
          fontWeight: '400',
        }}>
        Karim's Restaurant
      </Text>
      <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#D6D6D6',
          marginTop: 15,
        }}></View>
      <View style={{flexDirection: 'row', marginTop: 10, left: -40}}>
        <View style={Styles.rating}>
          <Text style={{color: 'white', fontSize: 7}}>4.4</Text>
          <Image
            source={require('../assets/star.png')}
            style={{width: 7, height: 6}}
          />
        </View>
        <Text style={{fontSize: 11, fontWeight: '300', color: 'white'}}>
          10-25 mins
        </Text>
      </View>
      <View style={{marginTop: 15}}>
        <Text style={{fontSize: 11, fontWeight: '300', color: 'white'}}>
          Wazwan, Fast food, Indian...
        </Text>
      </View>
    </View>
  );
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginLeft: 16, marginTop: 10}}>
        <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
          Popular Brands
        </Text>
      </View>
      <View style={Styles.container}>
        <View>
          <FlatList
            numColumns={2}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9]}
            renderItem={render1}
            contentContainerStyle={Styles.listContent}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};
export default Popular;
const Styles = StyleSheet.create({
  container: {
    height: '100%',
    width: 360,
    backgroundColor: '#202020',
    margin: 'auto',
    marginTop: 20,
    borderRadius: 10,
  },
  itemcover: {
    height: 175,
    width: 157,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#D6D6D6',
    marginTop: 50,
    alignItems: 'center',
    position: 'relative',
    marginRight: 15,
    marginLeft: 10,
  },
  coverimage: {
    width: 114,
    height: 90,
    position: 'absolute',
    top: -30,
  },
  rating: {
    backgroundColor: '#60B246',
    width: 29,
    height: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 50,
    left: 40,
  },
  listContent: {
    paddingBottom: 70,
  },
});
