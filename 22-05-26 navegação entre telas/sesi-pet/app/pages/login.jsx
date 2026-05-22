import {useState} from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Logo from '../../assets/logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function fazerLogin (){
    console.log('Dados do Login');
    console.log({email, senha});
  }

  return (
    <ScrollView style={estilos.container}>
      <Image
        source={Logo}
        style={estilos.logo}
        resizeMode='contain'
      />
      <Text style={estilos.titulo}>Login</Text>
      <Text style={estilos.sub}>Insira suas credenciais</Text>

      <View style={estilos.form}>
        <TextInput
          style={estilos.input}
          placeholder='Digite seu e-mail'
          keyboardType='email-address'
          autoCapitalize='none'
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={estilos.input}
          placeholder='Digite sua senha'
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={estilos.botao}>Login</TouchableOpacity>
      </View>

      </ScrollView>
      
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f7",
  },

  lista: {
    padding: 18,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 22,
    marginBottom: 22,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowOpacity: 0.12,
    shadowRadius: 8,

    elevation: 6,
  },

  foto: {
    width: "100%",
    height: 200,
  },

  conteudo: {
    padding: 18,
  },

  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1e293b",
    flex: 1,
  },

  status: {
    backgroundColor: "#2563eb",
    color: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    fontWeight: "bold",
    fontSize: 13,
  },

  desc: {
    fontSize: 16,
    color: "#475569",
    lineHeight: 24,
  },
});