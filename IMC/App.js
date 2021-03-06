import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity,  } from 'react-native';



export default function App() {

  const [nome, setNome] = useState('');

  const [Altura, setAltura] = useState(0);

  const [Peso, setPeso] = useState(0);

  const [IMC, setIMC] = useState(0);

  const [showEmoji, setShowEmoji] = useState(false);

  const [showEmoji2, setShowEmoji2] = useState(false);

  const [showEmoji3, setShowEmoji3] = useState(false);

  const [showEmoji4, setShowEmoji4] = useState(false);

  const [showEmoji5, setShowEmoji5] = useState(false);


  function handleDescriptionChange(pnome) {

    setNome(pnome);
    
    
  }

  function handleAlturaChange(pAltura) {

    setAltura(pAltura)

  }


  function handlePesoChange(pPeso) {

    setPeso(pPeso);

  }


  function handleButtonPress() {

    let ValorIMC = Peso / (Altura * Altura)

    setIMC(ValorIMC)

    if (ValorIMC >= 40)

    setShowEmoji(true);

  else if ((ValorIMC < 40) && (ValorIMC >=30) )

  setShowEmoji2(true);

  else if ((ValorIMC < 30) && (ValorIMC >=25) )
  setShowEmoji3(true);

  else if ((ValorIMC < 25) && (ValorIMC >= 18.5) )
  setShowEmoji4(true);

  else if (ValorIMC < 18.5)

  setShowEmoji5(true);

  

  }



  return (

    <View style={styles.container}>

      <Text style={styles.title}>Calculadora de IMC</Text>

      <View style={styles.inputContainer}>

                <TextInput

          style={styles.input}

          placeholder="Digite seu nome"

          onChangeText={handleDescriptionChange}

        />

        <TextInput

          style={styles.input}

          placeholder="Digite sua altura. Ex: 1.75"

          onChangeText={handleAlturaChange}

        />

        <TextInput

          style={styles.input}

          placeholder="Digite seu Peso. Ex: 90.0"

          onChangeText={handlePesoChange}

        />

        <TouchableOpacity

          style={styles.button}

          onPress={handleButtonPress}

        >

          <Text style={styles.buttonText}>Enviar</Text>

        </TouchableOpacity>

        <Text style={styles.input}>{nome}</Text>
        <Text style={styles.input}>{IMC}</Text>
        {showEmoji ? <Text style={styles.input}>???? Obesidade Grave</Text> : ''}
        {showEmoji2 ? <Text style={styles.input}>???? Obesidade</Text> : ''}
        {showEmoji3 ? <Text style={styles.input}>???? SobrePeso</Text> : ''}
        {showEmoji4 ? <Text style={styles.input}>???? Normal</Text> : ''}
        {showEmoji5 ? <Text style={styles.input}>???? Abaixo Peso </Text> : ''}



      </View>

      <StatusBar style="auto" />

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

  title: {

    color: 'blue',

    fontSize: 40,

    fontWeight: 'bold',

    marginTop: 50,

  },

  inputContainer: {

    flex: 1,

    marginTop: 30,

    width: '90%',

    padding: 20,

    borderTopLeftRadius: 10,

    borderTopRightRadius: 10,

    alignItems: 'stretch',

    backgroundColor: '#fff'

  },

  input: {

    marginTop: 10,

    height: 60,

    backgroundColor: '#fff',

    borderRadius: 10,

    paddingHorizontal: 24,

    fontSize: 16,

    alignItems: 'stretch'

  },

  button: {

    marginTop: 10,

    height: 60,

    backgroundColor: '#ADFDD9',

    borderRadius: 10,

    paddingHorizontal: 24,

    fontSize: 16,

    alignItems: 'center',

    justifyContent: 'center',

    elevation: 20,

    shadowOpacity: 20,

    shadowColor: '#ccc',

  },

  buttonText: {

    color: '#fff',

    fontWeight: 'bold',

  }

});