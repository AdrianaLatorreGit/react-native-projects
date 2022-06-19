import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGitHub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/101880897?v=4';

const urlToMyGithub = 'https://AdrianaLatorreGit';

const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
        console.log('Link aprovado')
        console.log('Abrindo link..')
     await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Imagem de Adriana Latorre sorrindo em fundo cinza"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Nome: Adriana Latorre"
          style={[style.defaultText, style.name]}>
          Adriana Latorre
        </Text>
        <Text
          accessibilityLabel="Nickname: AdrianaLatorreGit"
          style={[style.defaultText, style.nickname]}>
          AdrianaLatorreGit
        </Text>
        <Text
          accessibilityLabel="Descrição: Progamming Student | Web Developer Full Stack | JavaScript | Node.js | Git e Github | HTML | CSS |  Ejs | React Native"
          style={[style.defaultText, style.description]}>
          Progamming Student | Web Developer Full Stack | JavaScript | Node.js |
          Git e Github | HTML | CSS | Ejs | React Native
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1, // Expandir para a tela inteira
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 50,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
