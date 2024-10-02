import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList,
  ScrollView,
  Animated,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {addtocart, RemoveFromcart} from '../redux/reducer';
import ItemPopup from '../components/popup';
import Styles from '../components/RestaurantStyles';
const {width, height} = Dimensions.get('window');

const Restaurant = () => {
  const headeritems = ['Veg', 'Non-Veg', 'Rating 4+', 'Best-sellers'];
  const [selectedItem, setSelectedItem] = useState();
  const [item, setItem] = useState([]);
  const [itemPopup, setItemPopup] = useState(false);
  const [expandedPopup, setExpandedPopup] = useState(false);
  const navigation = useNavigation();
  const food = [
    {id: '5', name: 'Chicken Zinger Meal', price: 200},
    {id: '6', name: 'Pizza', price: 350},
    {id: '7', name: 'Biryani', price: 150},
    {id: '8', name: 'pasta', price: 100},
    {id: '9', name: 'Rice', price: 100},
    {id: '10', name: 'Fried Rice', price: 200},
    {id: '11', name: 'Mattan Biryani', price: 250},
  ];
  const [selectedRadio, setSelectedRadio] = useState(1);
  const dispatch = useDispatch();

  const scrollY = useRef(new Animated.Value(0)).current;

  const handleItemClick = item => {
    setSelectedItem(item);
  };
  const handlepopup = () => {
    setItemPopup(!itemPopup);
  };
  const handleExpandPopup = () => {
    setExpandedPopup(!expandedPopup);
  };

  const handleitems = item => {
    dispatch(addtocart(item));

    console.log('Item added to cart:', item);
    navigation.navigate('CartScreen');
  };

  const renderitems = ({item}) => (
    <View style={Styles.itembox}>
      <View style={Styles.textbox}>
        <View style={Styles.itemnamebox}>
          <Text style={Styles.boldtext}>{item.name}</Text>
          <Image source={require('../assets/red.png')} style={Styles.icon} />
        </View>
        <View style={[Styles.rating, {marginTop: 10}]}>
          <Text style={Styles.ratingtext}>4.2</Text>
          <AntDesign name="staro" color={'white'} size={13} />
        </View>
        <View style={{position: 'absolute', right: 50, top: 70}}>
          <Text style={Styles.pricetext}>₹{item.price}</Text>
        </View>
        <Text style={Styles.text}>
          1 Zinger Burger + 2 Wings + 1 Fries + 400ml Pepsi
        </Text>
      </View>

      <View style={[Styles.textbox, {padding: 0}]}>
        <Image
          source={require('../assets/item1.png')}
          style={Styles.coverimage}
        />
        <View style={Styles.addbox}>
          <TouchableOpacity
            style={Styles.addbutton}
            onPress={() => handleitems(item)}>
            <Text style={Styles.addtext}>Add</Text>
          </TouchableOpacity>
          <Text style={Styles.smalltext}>customisable</Text>
        </View>
      </View>
    </View>
  );

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [height * 0.23, 0],
    extrapolate: 'clamp',
  });
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <AntDesign
              name="hearto"
              size={30}
              color="black"
              style={{marginRight: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="sharealt" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.boxcontainer}>
        <Text style={{color: 'white', fontSize: 32, fontWeight: '600'}}>
          KARIM
        </Text>
        <Text style={Styles.foodtext}>Fast Food, Wazwan</Text>
        <Text style={{color: 'white'}}>
          ..........................................
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={Styles.rating}>
            <Text style={{color: 'white'}}>4.0</Text>
            <AntDesign name="staro" color={'white'} size={13} />
          </View>
          <Text style={Styles.foodtext}>1K+ ratings</Text>
        </View>
        <View style={{flexDirection: 'row', margin: 15}}>
          <Image
            source={require('../assets/time.png')}
            style={{width: 16.5, height: 17, marginHorizontal: 15}}
          />
          <Text style={{color: 'white'}}>35-40 mins - Gogji Bagh</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 'auto',
          margin: 10,
        }}>
        <Image
          source={require('../assets/spones.png')}
          style={{width: 10, height: 10}}
        />
        <Text style={{color: 'black'}}>....Menu.....</Text>
        <Image
          source={require('../assets/spones.png')}
          style={{width: 10, height: 10}}
        />
      </View>
      <TextInput
        placeholder="Search Menu"
        placeholderTextColor="#FA4A0C"
        style={Styles.Menutext}
      />
      <View>
        <ItemPopup
          itemPopup={itemPopup}
          setItemPopup={setItemPopup}
          expandedPopup={expandedPopup}
          setExpandedPopup={setExpandedPopup}
          selectedRadio={selectedRadio}
          setSelectedRadio={setSelectedRadio}
          item={item}
          handleExpandPopup={handleExpandPopup}
          handleitems={handleitems}
        />
      </View>

      <View style={Styles.headerbox}>
        <TouchableOpacity
          style={[
            Styles.list1,
            selectedItem === 'Veg' && {backgroundColor: '#FA4A0C'},
          ]}
          onPress={() => handleItemClick('Veg')}>
          <Text
            style={[Styles.color, selectedItem === 'Veg' && {color: 'white'}]}>
            Veg
          </Text>
          <Image
            source={require('../assets/green.png')}
            style={{width: 10, height: 10, marginLeft: 7}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Styles.list3,
            selectedItem === 'Non-Veg' && {
              backgroundColor: '#FA4A0C',
            },
          ]}
          onPress={() => handleItemClick('Non-Veg')}>
          <Text
            style={[
              Styles.color,
              selectedItem === 'Non-Veg' && {color: 'white'},
            ]}>
            Non-Veg
          </Text>
          <Image
            source={require('../assets/red.png')}
            style={{width: 10, height: 10, marginLeft: 7}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Styles.list2,
            selectedItem === 'Rating 4+' && {
              backgroundColor: '#FA4A0C',
            },
          ]}
          onPress={() => handleItemClick('Rating 4+')}>
          <Text
            style={[
              Styles.color,
              selectedItem === 'Rating 4+' && {color: 'white'},
            ]}>
            Rating 4+
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Styles.list2,
            selectedItem === 'Best-sellers' && {
              backgroundColor: '#FA4A0C',
            },
          ]}
          onPress={() => handleItemClick('Best-sellers')}>
          <Text
            style={[
              Styles.color,
              selectedItem === 'Best-sellers' && {color: 'white'},
            ]}>
            Best-sellers
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: 10,
          marginRight: 15,
        }}>
        <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
          Top Sellers
        </Text>
        <Image
          source={require('../assets/arrowup.png')}
          style={{width: 15, height: 7}}
        />
      </View>

      <FlatList
        ListHeaderComponent={<></>}
        data={food}
        renderItem={renderitems}
        keyExtractor={items => items.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Restaurant;
