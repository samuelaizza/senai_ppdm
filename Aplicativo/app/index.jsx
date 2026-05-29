import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text, StatusBar } from 'react-native';
import { router } from "expo-router"; 

export default function Login() {
  // Estado para capturar o e-mail digitado
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleEntrar = () => {
    if (email.trim() === "") {
      alert("Por favor, digite seu e-mail!");
      return;
    }

    // Envia o usuário para a Home levando o e-mail junto na rota
    router.push({
      pathname: "/home",
      params: { usuarioEmail: email }
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      <Text style={styles.title}>BeatFlow</Text>

      <TextInput 
        style={styles.input} 
        placeholder="E-mail" 
        placeholderTextColor="#555" 
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail} // Atualiza o estado com o que é digitado
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        placeholderTextColor="#555" 
        secureTextEntry 
        autoCapitalize="none"
        value={senha}
        onChangeText={setSenha}
      />
      
      <Pressable style={styles.button} onPress={handleEntrar}>
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
    color: '#1DB954',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 48,
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