import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Logo from '../../assets/logo.png';

export default function Ibge() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [pessoas, setPessoas] = useState('');

  function cadastrar() {
    console.log({
      nome,
      idade,
      localidade,
      pessoas
    });
  }

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      
      {/* Forma azul superior */}
      <View style={estilos.topoAzul} />

      {/* Forma azul inferior */}
      <View style={estilos.baixoAzul} />

      <View style={estilos.card}>

        <Image
          source={Logo}
          style={estilos.logo}
          resizeMode="contain"
        />

        <Text style={estilos.titulo}>Pesquisa</Text>

        {/* Nome */}
        <View style={estilos.campo}>
          <Text style={estilos.label}>Nome</Text>

          <TextInput
            style={estilos.input}
            placeholder="Seu nome"
            placeholderTextColor="#4b6b94"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        {/* Idade */}
        <View style={estilos.campo}>
          <Text style={estilos.label}>Idade</Text>

          <TextInput
            style={estilos.input}
            placeholder="30"
            placeholderTextColor="#4b6b94"
            keyboardType="numeric"
            value={idade}
            onChangeText={setIdade}
          />
        </View>

        {/* Localidade */}
        <View style={estilos.campo}>
          <Text style={estilos.label}>Localidade</Text>

          <TextInput
            style={estilos.input}
            placeholder="Mirandopolis"
            placeholderTextColor="#4b6b94"
            value={localidade}
            onChangeText={setLocalidade}
          />
        </View>

        {/* Pessoas */}
        <View style={estilos.campo}>
          <Text style={estilos.label}>
            Quantas pessoas vivem na sua casa?
          </Text>

          <TextInput
            style={estilos.input}
            placeholder="20"
            placeholderTextColor="#4b6b94"
            keyboardType="numeric"
            value={pessoas}
            onChangeText={setPessoas}
          />
        </View>

        <TouchableOpacity
          style={estilos.botao}
          onPress={cadastrar}
        >
          <Text style={estilos.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },

  topoAzul: {
    position: 'absolute',
    top: -40,
    left: -70,
    width: 220,
    height: 180,
    backgroundColor: '#8dc9ff',
    borderBottomRightRadius: 180,
  },

  baixoAzul: {
    position: 'absolute',
    bottom: -80,
    right: -80,
    width: 260,
    height: 220,
    backgroundColor: '#8dc9ff',
    borderTopLeftRadius: 220,
  },

  card: {
    width: '85%',
    alignItems: 'center',
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },

  titulo: {
    fontSize: 42,
    color: '#3b5f8c',
    fontWeight: '600',
    marginBottom: 25,
  },

  campo: {
    width: '100%',
    marginBottom: 20,
  },

  label: {
    fontSize: 18,
    color: '#3b5f8c',
    marginBottom: 8,
    marginLeft: 5,
  },

  input: {
    width: '100%',
    height: 58,
    borderWidth: 3,
    borderColor: '#4da3ff',
    borderRadius: 12,
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#3b5f8c',
    backgroundColor: '#fff',
  },

  botao: {
    width: '100%',
    height: 62,
    marginTop: 10,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#1d4ed8',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 8,
  },

  textoBotao: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});