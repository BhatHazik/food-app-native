import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: width,
    height: height * 0.9,
    top: 0,
    position: 'absolute',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  addressContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
  },
});

export default function GoogleMapScreen() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState(null);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      async position => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => {
        console.error('Error getting location:', error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  const accessToken = `pk.ea008d8c047df0626596d547069f4861`;
  const getAddressFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://us1.locationiq.com/v1/reverse?key=${accessToken}&lat=${latitude}&lon=${longitude}&format=json`,
      );
      setAddress(
        response.data.address.road ||
          response.data.address.suburb + ' ' + response.data.address.postcode,
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setAddress('Error occured');
    }
  };

  const handleMapPress = e => {
    const {latitude, longitude} = e.nativeEvent.coordinate;
    console.log(latitude, longitude);
    setLatitude(latitude);
    setLongitude(longitude);
    getAddressFromCoordinates(latitude, longitude);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: latitude || 37.78825,
          longitude: longitude || -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapPress}>
        {latitude && longitude && (
          <Marker coordinate={{latitude, longitude}} title="Pinned Location" />
        )}
      </MapView>
      {address && (
        <View style={styles.addressContainer}>
          <Text>Fetched Pinned Location:</Text>
          <Text>{`Latitude: ${latitude}, Longitude: ${longitude}`}</Text>
          <Text>{address}</Text>
        </View>
      )}
    </View>
  );
}
