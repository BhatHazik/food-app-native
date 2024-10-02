// ItemPopup.js
import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Styles from './RestaurantStyles';

const ItemPopup = ({
  itemPopup,
  setItemPopup,
  expandedPopup,
  setExpandedPopup,
  selectedRadio,
  setSelectedRadio,
  item,
  handleExpandPopup,
  handleitems,
  incrementCount,
  decrementCount,
}) => {
  //   console.log(item);
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <>
      {itemPopup && (
        <View>
          <TouchableOpacity
            style={Styles.topbox}
            onPress={() => {
              setItemPopup(!itemPopup);
            }}>
            <BlurView blurType="light" blurAmount={2} style={Styles.topbox} />
          </TouchableOpacity>
          <View style={[expandedPopup ? Styles.expandedPopup : Styles.popup]}>
            {expandedPopup ? (
              <>
                <View style={{padding: 16}}>
                  <View>
                    <Text
                      style={{color: 'white', fontSize: 16, fontWeight: '300'}}>
                      Zinger Burger - Rs.250
                    </Text>
                    <Text
                      style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
                      Customise as you Like!
                    </Text>
                    <TouchableOpacity
                      style={Styles.X}
                      onPress={() => setExpandedPopup(!expandedPopup)}>
                      <AntDesign name="close" color={'white'} size={20} />
                    </TouchableOpacity>
                  </View>

                  {/* Size selection */}
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
                    Size
                  </Text>
                  <Text
                    style={{color: 'white', fontSize: 16, fontWeight: '300'}}>
                    Select any 1
                  </Text>
                  <View style={Styles.custombox}>
                    {['Small', 'Medium', 'Large'].map((size, index) => (
                      <View
                        key={index}
                        style={{
                          flexDirection: 'row',
                          marginBottom: 10,
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../assets/red.png')}
                          style={{width: 15, height: 15}}
                        />
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: '400',
                            marginLeft: 10,
                          }}>
                          {size}
                        </Text>
                        <TouchableOpacity
                          style={Styles.radiocircle}
                          onPress={() => setSelectedRadio(index + 1)}>
                          {selectedRadio === index + 1 && (
                            <View style={Styles.radiobutton}></View>
                          )}
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>

                  {/* Extra Cheese Selection */}
                  <View style={Styles.custombox2}>
                    <View style={{margin: 30}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginBottom: 10,
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../assets/green.png')}
                          style={{width: 15, height: 15}}
                        />
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: '400',
                            marginLeft: 10,
                          }}>
                          Extra Cheese
                        </Text>
                        <TouchableOpacity
                          style={Styles.radiocircle}
                          onPress={() => setSelectedRadio(1)}>
                          {selectedRadio === 1 && (
                            <View style={Styles.radiobutton}></View>
                          )}
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                  {/* Quantity Control */}
                  <View
                    style={{
                      flexDirection: 'row',
                      borderTopWidth: 1,
                      borderColor: 'white',
                      padding: 20,
                      alignSelf: 'center',
                    }}>
                    <TouchableOpacity
                      style={Styles.Amount}
                      onPress={() => handleitems(item)}>
                      <Text
                        style={{
                          color: '#FA4A0C',
                          fontSize: 20,
                          fontWeight: '500',
                        }}>
                        Add
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            ) : (
              <>
                <Image
                  source={require('../assets/coverimage.png')}
                  style={{
                    width: width * 1,
                    height: height * 0.3,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                  }}
                />
                <View style={{padding: 20}}>
                  <View style={{width: 170}}>
                    <Text style={Styles.zingertext}>
                      Chicken Zinger Meal Box
                    </Text>

                    <View style={[Styles.rating, {marginTop: 10}]}>
                      <Text style={Styles.ratingtext}>4.2</Text>
                      <AntDesign name="star" color={'white'} size={13} />
                    </View>
                    <Text style={[Styles.text, {color: 'white'}]}>
                      1 Zinger Burger + 2 Wings + 1 Fries + 400ml Pepsi
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={Styles.addbtn}
                    onPress={handleExpandPopup}>
                    <Text style={Styles.addtext}>Add</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      )}
    </>
  );
};

export default ItemPopup;
