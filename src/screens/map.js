import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
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
});

export default function GoogleMapScreen({onAddressUpdate, model}) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address2, setAddress2] = useState(null);

  const getLocation = useCallback(() => {
    if (model.lat && model.lon) {
      setLatitude(parseFloat(model.lat));
      setLongitude(parseFloat(model.lon));
    } else {
      Geolocation.getCurrentPosition(
        async position => {
          const latitude = position.coords.latitude;
          setLatitude(latitude);
          const longitude = position.coords.longitude;
          setLongitude(longitude);
          getAddressFromCoordinates(latitude, longitude);
        },
        error => {
          console.error('Error getting location:', error);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );
    }
  }, [model]);

  const accessToken = `pk.ea008d8c047df0626596d547069f4861`;
  const getAddressFromCoordinates = useCallback(async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://us1.locationiq.com/v1/reverse?key=${accessToken}&lat=${latitude}&lon=${longitude}&format=json`,
      );
      setAddress2(response.data);
    } catch (error) {
      console.error(error);
      setAddress2('Error occurred');
    }
  }, []);

  const handleMapPress = useCallback(
    e => {
      const {latitude, longitude} = e.nativeEvent.coordinate;
      setLatitude(latitude);
      setLongitude(longitude);
      getAddressFromCoordinates(latitude, longitude);
    },
    [getAddressFromCoordinates],
  );

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  useEffect(() => {
    if (address2) {
      onAddressUpdate(address2);
    }
  }, [address2, onAddressUpdate]);

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
    </View>
  );
}
