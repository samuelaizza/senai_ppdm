import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { musics as listaInicial } from "../data/musics";
import { router, useLocalSearchParams } from "expo-router"; 

export let musicasFavoritasGlobais = [];

export default function Home() {
  const { usuarioEmail } = useLocalSearchParams();
  const emailExibido = usuarioEmail || "usuario@beatflow.com";

  const [minhasMusicas, setMinhasMusicas] = useState(listaInicial);
  const [novoTitulo, setNovoTitulo] = useState("");
  const [novoArtista, setNovoArtista] = useState("");
  const [atualizarFav, setAtualizarFav] = useState(false);

  const adicionarMusica = () => {
    if (novoTitulo.trim() === "" || novoArtista.trim() === "") {
      alert("Por favor, preencha o nome da música e do artista!");
      return;
    }

    const novaMusica = {
      id: Date.now(),
      title: novoTitulo,
      artist: novoArtista,
    };

    setMinhasMusicas([novaMusica, ...minhasMusicas]);
    setNovoTitulo("");
    setNovoArtista("");
  };

  const alternarFavorito = (musica) => {
    const jaE_Favorito = musicasFavoritasGlobais.some(item => item.id === musica.id);

    if (jaE_Favorito) {
      musicasFavoritasGlobais = musicasFavoritasGlobais.filter(item => item.id !== musica.id);
    } else {
      musicasFavoritasGlobais.push(musica);
    }
    setAtualizarFav(!atualizarFav);
  };

  // --- FUNÇÃO PARA SAIR DO APLICATIVO ---
  const fazerLogout = () => {
    // Limpa os favoritos globais se quiser que o próximo usuário comece do zero
    musicasFavoritasGlobais = []; 
    
    // Redireciona para a raiz (sua tela de login) limpando o histórico
    router.replace("/");
  };
  // --------------------------------------

  return (
    <View style={styles.container}>
      
      {/* --- CARD DA CONTA LOGADA COM BOTÃO SAIR --- */}
      <View style={styles.perfilContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{emailExibido[0].toUpperCase()}</Text>
          </View>
          <View style={{ marginLeft: 12, flex: 1 }}>
            <Text style={styles.perfilSaudacao}>Conectado como</Text>
            <Text style={styles.perfilEmail} numberOfLines={1}>{emailExibido}</Text>
          </View>
        </View>

        {/* Botão Sair Vermelho */}
        <TouchableOpacity style={styles.logoutButton} onPress={fazerLogout}>
          <Text style={styles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
      {/* ---------------------------- */}

      <Text style={styles.appTitle}>BeatFlow</Text>

      {/* Formulário Para Adicionar Música */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Adicionar Nova Música</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome da música..."
          placeholderTextColor="#555"
          value={novoTitulo}
          onChangeText={setNovoTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome do artista/banda..."
          placeholderTextColor="#555"
          value={novoArtista}
          onChangeText={setNovoArtista}
        />
        <TouchableOpacity style={styles.addButton} onPress={adicionarMusica}>
          <Text style={styles.addButtonText}>+ Adicionar à Playlist</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push("/favoritos")}>
        <Text style={styles.favoritesLink}>
          ⭐ Ir para Favoritos ({musicasFavoritasGlobais.length})
        </Text>
      </TouchableOpacity>

      <FlatList
        data={minhasMusicas}
        keyExtractor={(item) => item.id.toString()}
        extraData={atualizarFav}
        renderItem={({ item }) => {
          const eFavorito = musicasFavoritasGlobais.some(fav => fav.id === item.id);

          return (
            <View style={styles.musicCard}>
              <TouchableOpacity onPress={() => router.push("/player")} style={{ flex: 1 }}>
                <Text style={styles.musicTitle}>{item.title}</Text>
                <Text style={styles.musicArtist}>{item.artist}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => alternarFavorito(item)} style={{ padding: 10 }}>
                <Text style={{ fontSize: 22, color: eFavorito ? "#1DB954" : "#666" }}>
                  {eFavorito ? "❤️" : "🤍"}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  perfilContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1E1E1E",
    padding: 10,
    borderRadius: 30,
    marginTop: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#282828",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#1DB954",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  perfilSaudacao: {
    color: "#b3b3b3",
    fontSize: 11,
  },
  perfilEmail: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
  // Estilo do botão de Sair
  logoutButton: {
    backgroundColor: "#FF4444",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 4,
  },
  logoutButtonText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  appTitle: {
    color: "#1DB954",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  formContainer: {
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#282828",
  },
  formTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#2A2A2A",
    color: "#FFF",
    height: 45,
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#1DB954",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  addButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 14,
  },
  favoritesLink: {
    color: "#1DB954",
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  musicCard: {
    backgroundColor: "#282828",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  musicTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  musicArtist: {
    color: "#b3b3b3",
    marginTop: 5,
  },
});