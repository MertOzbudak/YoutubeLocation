import React from 'react';
import {View, StyleSheet, Image } from 'react-native';
import { width, height } from '../constants/constant';
import Logo from '../../assets/youtube.png';

export default function YoutubeLogo({marginTop}) {
    
    const styles = StyleSheet.create({
        container:{
            alignItems:'center', 
            backgroundColor:'white', 
            width:width, 
            marginTop: marginTop,
            borderTopWidth:1, 
            borderBottomWidth:1,
            borderTopColor:'gray',
            borderBottomColor:'gray',
        },
        imageStyle:{
            width: 120, 
            height: 50
        }
      });
      return (
        <View testID={"Logo"} style={styles.container}>
            <Image
                source={Logo}
                style={styles.imageStyle}
            />
        </View>
      );
}

