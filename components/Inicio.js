import React, {Component} from 'react';
import {Text, 
        View,
        TouchableOpacity } from 'react-native';

import styles from './Estilos/Style.js';

export default function Inicio ({navigation, route}) {


    return (
  <View  style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
          onPress={() => navigation.openDrawer()}>
                 <Text style={styles.text2}>Menu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.vBody}>
       <Text style={styles.text}>Bienvenido</Text>
      </View>

   </View>
  );
  
}


