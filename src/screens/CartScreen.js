import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  SafeAreaView,
  Modal,
  TextInput,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomSlider from '../components/Slider';
import {useDispatch, useSelector} from 'react-redux';
import {addtocart, RemoveFromcart} from '../redux/reducer';
import Styles from '../components/styles';

const {width, height} = Dimensions.get('window');

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  console.log(cartItems);

  const gstAmount = 0.18;
  const deliveryFee = 50;
  const [showModal, setShowModal] = useState(false);
  const [tipAmount, setTipAmount] = useState(0);

  const data = [
    {id: '1', name: 'Mango', price: 99},
    {id: '2', name: 'Apple', price: 99},
    {id: '3', name: 'Orange', price: 150},
    {id: '4', name: 'Cherry', price: 100},
  ];

  const navigation = useNavigation();

  const incrementCount = item => {
    dispatch(addtocart(item));
  };

  const decrementCount = item => {
    dispatch(RemoveFromcart(item.id));
  };

  const renderFoodItem = ({item}) => (
    <View style={Styles.divitems}>
      <View>
        <Text style={Styles.itemname}>{item.name}</Text>
        <Text style={[Styles.itemname, {fontWeight: '300'}]}>
          ₹{item.price * item.quantity}
        </Text>
      </View>
      <View style={Styles.countbox}>
        <TouchableOpacity
          style={Styles.countbtn}
          onPress={() => decrementCount(item)}>
          <Icon name="minus" size={15} color={'black'} />
        </TouchableOpacity>
        <Text style={{color: 'black', size: 10, marginVertical: 'auto'}}>
          {item.quantity}
        </Text>
        <TouchableOpacity
          style={Styles.countbtn}
          onPress={() => incrementCount(item)}>
          <Icon name="plus" size={15} color={'red'} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderRecommendedItem = ({item}) => (
    <View style={Styles.itembox}>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <Image
          source={require('../assets/green.png')}
          style={{width: 11, height: 10, margin: 10}}
        />
        <Text style={{color: 'black', fontSize: 12}}>{item.name}</Text>
      </View>
      <Text style={{color: 'black', fontSize: 12, left: width * 0.08}}>
        Rs.{item.price}
      </Text>

      <Image source={require('../assets/cover.png')} style={Styles.itemimage} />
      <TouchableOpacity
        style={Styles.plus}
        onPress={() => incrementCount({...item, quantity: 1})}>
        <AntDesign name="plus" size={15} color={'white'} />
      </TouchableOpacity>
    </View>
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalToPay =
    totalPrice +
    totalPrice * gstAmount +
    (totalPrice > 0 ? deliveryFee : 0) +
    tipAmount;

  return (
    <View style={Styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderFoodItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={Styles.smallcontainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={30} color={'black'} />
              </TouchableOpacity>
              <View style={Styles.headerview}>
                <Text style={Styles.headerText}>Cart</Text>
              </View>
            </View>
            {cartItems.length === 0 && (
              <Text style={Styles.emptyCartText}>Your cart is empty</Text>
            )}
          </>
        }
        ListFooterComponent={
          <>
            <View style={Styles.div2}>
              <Text style={Styles.sectionTitle}>You May Also Like!</Text>
              <FlatList
                data={data}
                renderItem={renderRecommendedItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
              />
            </View>

            <Text style={Styles.offerTitle}>Offers for you</Text>
            <View style={Styles.dottedbox}>
              <View style={{margin: 20}}>
                <Text style={{color: 'black', fontSize: 24, fontWeight: '500'}}>
                  WELCOME100
                </Text>
                <Text style={Styles.offerDescription}>save another Rs.75</Text>
              </View>
              <TouchableOpacity style={Styles.applybutton}>
                <Text style={Styles.text}>Apply</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={Styles.coupon}>
              <Text style={Styles.text}>View all coupons</Text>
              <AntDesign
                name="right"
                color={'white'}
                size={15}
                style={Styles.icon}
              />
            </TouchableOpacity>

            <Text style={Styles.billDetailsTitle}>Bill Details</Text>
            <View style={Styles.pricebox}>
              <View style={Styles.billRow}>
                <Text style={[Styles.amounttext, {fontWeight: '600'}]}>
                  Item Total
                </Text>

                <Text style={[Styles.amounttext, {fontWeight: '600'}]}>
                  Rs.{totalPrice.toFixed(2)}
                </Text>
              </View>

              <View style={Styles.billRow}>
                <Text style={Styles.paytext}>Deliver Fee</Text>
                <Text style={Styles.paytext}>
                  {totalPrice > 0 ? `Rs.${deliveryFee.toFixed(2)}` : 'Rs.0.00'}
                </Text>
              </View>

              <View style={Styles.billRow}>
                <Text style={Styles.paytext}>Delivery Tip</Text>
                <TouchableOpacity onPress={() => setShowModal(true)}>
                  <Text style={[Styles.paytext, {color: 'red'}]}>
                    {tipAmount > 0 ? `Rs.${tipAmount.toFixed(2)}` : 'Add Tip'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.billRow}>
                <Text style={Styles.paytext}>GST & Restaurant Charges</Text>
                <Text style={Styles.paytext}>
                  {`Rs.${(totalPrice * gstAmount).toFixed(2)}`}
                </Text>
              </View>

              <View style={Styles.billRow}>
                <Text style={[Styles.amounttext, {fontWeight: '600'}]}>
                  To Pay
                </Text>
                <Text style={[Styles.amounttext, {fontWeight: '600'}]}>
                  Rs.{totalToPay.toFixed(2)}
                </Text>
              </View>
            </View>
            <Text style={Styles.lines}>
              To prevent cancellations, please check your order and address
              information.
            </Text>
            <View style={[Styles.pricebox, {padding: 16}]}>
              <Text style={Styles.textlines}>
                <Text style={[Styles.textlines, {color: 'red'}]}>Note:</Text>A
                complete refund will be provided if you cancel your order within
                60 seconds of placing it. After sixty seconds, there will be
                norefunds for cancellations.
              </Text>
            </View>
          </>
        }
      />
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={Styles.modalContainer}>
          <View style={Styles.modalContent}>
            <Text style={Styles.modalTitle}>Enter Tip Amount</Text>
            <TextInput
              style={Styles.tipInput}
              keyboardType="numeric"
              value={tipAmount.toString()}
              onChangeText={text => setTipAmount(parseFloat(text) || 0)}
            />
            <View style={Styles.modalButtons}>
              <TouchableOpacity
                style={Styles.modalButton}
                onPress={() => setShowModal(false)}>
                <Text style={Styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.modalButton}
                onPress={() => setShowModal(false)}>
                <Text style={Styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={Styles.paymentoption}>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 20}}>
          <Image
            source={require('../assets/googlepay.png')}
            style={{width: 32, height: 16, marginRight: 10}}
          />
          <View style={{alignItems: 'center', top: 5}}>
            <Text style={Styles.amounttext}>Pay using</Text>
            <Text style={[Styles.paytext, {fontSize: 15}]}>Google Pay</Text>
          </View>
          <TouchableOpacity
            style={Styles.changePaymentButton}
            onPress={() => navigation.navigate('PaymentScreen')}>
            <Text style={{color: '#FA4A0C', paddingRight: 15}}>Change</Text>
            <AntDesign name="right" color={'#FA4A0C'} size={12} />
          </TouchableOpacity>
        </View>
        <SafeAreaView style={{flex: 1}}>
          <CustomSlider totalToPay={totalToPay} />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default CartScreen;
