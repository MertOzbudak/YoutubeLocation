import React from 'react';
import {View, ImageBackground, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { width } from '../constants/constant';

export default function VideoItem({setImageLoading, imageloading, item}) {
    
      return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: item.thumbnails.medium.url}} 
                style={styles.imageStyle}
                imageStyle={styles.imageStyle}
                onLoadEnd={() =>  setImageLoading(false)}
                >
                {imageloading && <ActivityIndicator size="small" color={"orange"} style={styles.activityIndicatorStyle}/>}
            </ImageBackground>
            <Text style={{padding:10}}>{item.title}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderWidth:0.5, 
        borderColor:'gray', 
        width:width, 
        alignItems:'center', 
        padding:20
    },
    imageStyle: {
        width: 150, height: 100
    },
    activityIndicatorStyle:{
        width: 50, height: 50
    }
});
