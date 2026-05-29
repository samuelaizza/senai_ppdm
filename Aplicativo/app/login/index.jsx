import React from 'react';
import { View, StyleSheet, TextInput, Pressable, Text, StatusBar } from 'react-native';
import { router } from "expo-router"; 

export default function Login() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      {/* Título do seu Aplicativo */}
      <Text style={styles.title}>BeatFlow</Text>

      <TextInput 
        style={styles.input} 
        placeholder="E-mail" 
        placeholderTextColor="#555" 
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        placeholderTextColor="#555" 
        secureTextEntry 
        autoCapitalize="none"
      />
      
      <Pressable style={styles.button} onPress={() => router.push("/home")}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
      
      <Pressable style={styles.linkContainer} onPress={() => router.push("/cadastro")}>
        <Text style={styles.linkText}>Criar conta</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    color: '#1DB954',           // Verde padrão do BeatFlow
    fontSize: 42,               // Tamanho grande de destaque
    fontWeight: 'bold',         // Texto em negrito
    textAlign: 'center',        // Centralizado na tela
    marginBottom: 48,           // Espaço até o primeiro campo de input
  },
  input: {
    backgroundColor: '#222222', 
    color: '#FFFFFF',           
    height: 56,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,           
  },
  button: {
    backgroundColor: '#1DB954', 
    height: 56,
    borderRadius: 28,           
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#000000',           
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkContainer: {
    marginTop: 24,
    alignSelf: 'center',
  },
  linkText: {
    color: '#1DB954',           
    fontSize: 14,
    fontWeight: '500',
  },
});