import { Text, View, FlatList, StyleSheet, Image, SafeAreaView } from "react-native";
import Header from './componentes/header.jsx'
import tarefas from './dados/tarefas.js'

function ItemTarefa({ item }) {
  return (
    <View style={estilos.card}>
      <Image source={{ uri: item.photo }} style={estilos.foto} />

      <View style={estilos.conteudo}>
        <View style={estilos.linha}>
          <Text style={estilos.titulo}>{item.title}</Text>
          <Text style={estilos.status}>{item.status}</Text>
        </View>

        <Text style={estilos.desc}>
          {item.description}
        </Text>
      </View>
    </View>
  );
}

export default function Index() {
  return (
    <SafeAreaView style={estilos.container}>
      <Header titulo="Senai Tasks" />

      <FlatList
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ItemTarefa item={item} />}
        contentContainerStyle={estilos.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
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