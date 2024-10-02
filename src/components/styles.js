import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  smallcontainer: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
  },
  emptyCartText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
  },
  divitems: {
    flexDirection: 'row',

    alignItems: 'center',
    marginBottom: 20,
  },
  count: {
    width: 55,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    paddingHorizontal: 5,
    position: 'absolute',
    left: width * 0.3,
  },
  decrementText: {
    color: '#FA4A0C',
    fontSize: 24,
    fontWeight: '700',
  },
  incrementText: {
    color: '#FA4A0C',
    fontSize: 18,
    fontWeight: '600',
  },
  countText: {
    color: '#FA4A0C',
    fontSize: 13,
    fontWeight: '600',
  },
  itemPrice: {
    color: 'black',
    fontSize: 13,
    position: 'absolute',
  },
  div2: {
    width: width * 1,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 10,
    marginTop: 20,
    paddingRight: 30,
  },
  sectionTitle: {
    color: 'black',
    margin: 10,
    fontSize: 16,
    fontWeight: '400',
  },
  itembox: {
    width: width * 0.5,
    height: height * 0.15,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 10,
    margin: 10,
    paddingRight: 16,
  },
  plus: {
    width: 30,
    height: 30,
    backgroundColor: '#FA4A0C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    position: 'absolute',
    left: width * 0.4,
    bottom: 5,
  },
  offerTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: '400',
    margin: 15,
    marginLeft: 20,
  },
  dottedbox: {
    width: width * 0.9,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#D6D6D6',
    borderRadius: 10,
    marginHorizontal: 'auto',
  },
  offerDescription: {
    color: 'black',
    lineHeight: 25,
    fontSize: 16,
    fontWeight: '300',
  },
  applybutton: {
    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: '#FA4A0C',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coupon: {
    width: width * 0.9,
    height: height * 0.062,
    backgroundColor: '#202020',
    marginHorizontal: 'auto',
    marginTop: 30,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: width * 0.8,
  },
  billDetailsTitle: {
    fontSize: 24,
    fontWeight: '400',
    color: 'black',
    margin: 20,
  },
  pricebox: {
    width: width * 0.9,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    marginHorizontal: 'auto',
    borderRadius: 10,
    overflow: 'hidden',
  },
  billRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 20,
    borderTopWidth: 0.5,
    paddingTop: 10,
    borderStyle: 'dashed',
    borderColor: 'black',
  },
  amounttext: {
    color: 'black',
    fontSize: 16,
    fontWeight: '300',
  },
  paytext: {
    color: 'black',
    fontSize: 16,
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: '400',
  },
  paymentoption: {
    width: width * 1,
    height: height * 0.25,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 10,
    marginLeft: -16,
  },
  changePaymentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  tipInput: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#FA4A0C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  lines: {
    color: 'black',
    fontSize: 16,
    margin: 20,
    fontWeight: '400',
  },
  textlines: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  name: {
    fontSize: 13,
    color: 'black',
    position: 'absolute',
  },
  countbox: {
    width: 70,
    height: 25,
    paddingHorizontal: 1,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    position: 'absolute',
    left: width * 0.75,
  },
  countbtn: {
    width: 25,
    height: 25,

    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemimage: {
    width: 100,
    height: height * 0.15,
    borderRadius: 10,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  itemname: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
  },
  headerview: {
    marginHorizontal: 'auto',
  },
});
export default Styles;
