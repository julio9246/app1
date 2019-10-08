import React from 'react';
import { StyleSheet, Text, View, Button, ButtonProperties } from 'react-native';

const geraNumeroAleatorio = () => {

  numero_aleatorio = Math.random();
  
  numero_aleatorio = Math.floor(numero_aleatorio * 10 );
  alert( numero_aleatorio );
 

}

export default function App() { 
  return ( 
      
    <View style={styles.container}>
      <Text>Bom Negócio.com!</Text> 
      <Button
         title="Gerar um número randômico já alterado de novo"
         onPress={geraNumeroAleatorio}/>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 