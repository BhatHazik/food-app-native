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
const Toprated = () => {
  const mapFunction = async () => {
    await axios({
      method: 'GET',
      url: `${BASE_URI}/api/restaurant/`,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(
      res => {
        console.log(res.data);
      },
      err => {
        console.log(err);
      },
    );
  };
  const render = ({item}) => (
    <View style={Styles.itemcover}>
      <Image
        source={require('../assets/cover.png')}
        style={Styles.coverimage}
      />
      <Text
        style={{
          color: 'black',
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
        <Text style={{fontSize: 11, fontWeight: '300'}}>10-25 mins</Text>
      </View>
      <View style={{marginTop: 15}}>
        <Text style={{fontSize: 11, fontWeight: '300'}}>
          Wazwan, Fast food, Indian...
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          marginTop: 20,
          marginLeft: 16,
          color: 'black',
        }}>
        Top Rated
      </Text>
      <View>
        <FlatList
          numColumns={2}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9]}
          renderItem={render}
          contentContainerStyle={Styles.listContent}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
export default Toprated;
const Styles = StyleSheet.create({
  itemcover: {
    height: 180,
    width: 157,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#D6D6D6',
    marginTop: 40,
    alignItems: 'center',
    position: 'relative',
    marginRight: 25,
    marginLeft: 16,
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
    paddingBottom: 60,
  },
});
