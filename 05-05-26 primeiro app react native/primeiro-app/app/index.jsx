import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Foto from "../assets/images/tecnologia.jpg";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>My First App XD</Text>

      <Image source={Foto} style={estilos.imagem} />

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>Sobre o App</Text>
        <Text style={estilos.texto}>
          Aplicativo desenvolvido por pessoas totalmente inexperientes e que não
          tem a menor ideia do que estão fazendo, por favor, já pedimos desculpa
          por qualquer estrago feito.
        </Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>O que aprenderemos</Text>
        <Text style={estilos.lista}>• Layout Responsivo</Text>
        <Text style={estilos.lista}>• Push Notifications</Text>
        <Text style={estilos.lista}>• Acesso a APIs</Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>Do que precisamos</Text>
        <Text style={estilos.lista}>• Node.js</Text>
        <Text style={estilos.lista}>• VS Code</Text>
        <Text style={estilos.lista}>• Foco, força e fé</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
  },

  imagem: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3, // sombra Android
    shadowColor: "#000", // sombra iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  texto: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },

  lista: {
    fontSize: 14,
    marginBottom: 5,
  },
});
