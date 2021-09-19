import React from 'react';
import {View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { width,height } from '../constants/constant';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default function GoogleMapView({text}) {
    
      return (
        <View testID={"Map"} style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                initialRegion={region}
                onPress={e => onMapPress(e)}
            >
                <Marker
                    key={markers.key}
                    coordinate={markers.coordinate}
                    pinColor={markers.color}
                />
            </MapView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => getLatestVideos()}
                    style={styles.bubble}
                >
                    <Text>Find</Text>
                </TouchableOpacity>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: height/2.5,
        width: width,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(220,220,220,0.9)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
        width: width/3,
        alignItems:'center'
    },
  });