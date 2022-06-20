import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/perfil.jpeg';

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'facebook':
        Alert.alert('Meu Facebook', 'https://facebook.com/adriana.latorre.503');
        break;
      case 'github':
        Alert.alert('Meu Github', 'https://github.com/AdrianaLatorreGit');
        break;
      case 'linkedin':
        Alert.alert('Meu Linkedin', 'https://linkedin.com/in/adriana-latorre');
        break;
    }
  }

  return (
    <View style={style.page}>
      <View style={style.containerCabecalho}>
        <Image source={foto} style={style.foto} />
        <Text style={style.nome}>ADRIANA LATORRE</Text>
        <Text style={style.funcao}>Desenvolvedora Mobile</Text>
        <View style={style.redes_sociais}>
          <TouchableOpacity onPress={() => handleRedeSocial('github')}>
            <Icon name="github" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
            <Icon name="facebook" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
            <Icon name="linkedin" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.card_container}>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text>OBJETIVOS</Text>
          </View>

          <View style={style.card_content}>
            <Text style={style.card_content_text}>
              Trabalhar com desenvolvimento Full Stack
            </Text>
            <Text style={style.card_content1}>
             COMPETÊNCIAS
            </Text>
            <Text style={style.card_content_text}>
              Trabalho em equipe, Oratória, Autodidata, Persistente
            </Text>
          </View>
        </View>
      </View>

      <View style={style.card_container}>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text>HABILIDADES</Text>
          </View>

          <View style={style.card_content}>
            <Text style={style.card_content_text}>
              JavaScript | Node.js
            </Text>
            <Text style={style.card_content_text}>
              Html | Css
            </Text>
            <Text style={style.card_content_text}>
              Express.js | Ejs
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },

  containerCabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },

  funcao: {
    color: '#939393',
    marginBottom: 10,
  },

  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },

  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#fff',
  },

  card_content: {
    marginTop: 10,
  },

  card_content1:{
    marginBottom: 10,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;
