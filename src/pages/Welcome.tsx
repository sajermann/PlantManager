import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import wateringImg from '../assets/watering.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';

export function Welcome(){
    const [visible, setVisible] = useState(false);

    function handleVisibility(){
        setVisible(!visible);
    }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gerencie {'\n'} suas plantas {'\n'} de forma fácil.</Text>
      <Image source={wateringImg} style={styles.image} />
      <Text style={styles.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar</Text>
        <Button title=">" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title:{
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.heading,
      marginTop: 40
  },
  subtitle:{
      textAlign: 'center',
      fontSize: 18,
      paddingHorizontal: 20,
      color: colors.heading 
  },
  button: {
      backgroundColor: colors.green,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      marginBottom: 10,
      height: 56,
      paddingHorizontal: 10
  },
  image:{
      width: 292,
      height: 284
  },
  buttonText:{
      color: colors.white
  }
})