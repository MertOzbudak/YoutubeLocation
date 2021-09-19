import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { width, height } from '../constants/constant';

export default function EmptyView({text}) {
    
      return (
        <View testID={"EmptyView"} style={styles.container}>
            <Text style={{textAlign:'center'}}>{text}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white', 
        height:height/2,  
        width: width, 
        justifyContent:'center',
    }
  });