import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [numero, setNumero] = useState(0);

  function handleNumero() {
    const novo_numero = Math.floor(Math.random() * 10);

    setNumero(novo_numero);
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.botao}>
        <Text style={style.gerar}>Gerar Número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#fff',
    width: '80%',
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  gerar: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
