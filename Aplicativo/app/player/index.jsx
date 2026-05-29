import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { useState } from "react";

export default function Player() {

  const musicas = [
    {
      title: "Mal Feito",
      artist: "Hugo e Guilherme",
    },

    {
      title: "Erro Gostoso",
      artist: "Simone Mendes",
    },

    {
      title: "Leão",
      artist: "Marília Mendonça",
    },
  ];

  const [musicaAtual, setMusicaAtual] = useState(0);

  const [tocando, setTocando] = useState(true);

  function proximaMusica() {

    if (musicaAtual < musicas.length - 1) {
      setMusicaAtual(musicaAtual + 1);
    }
  }

  function musicaAnterior() {

    if (musicaAtual > 0) {
      setMusicaAtual(musicaAtual - 1);
    }
  }

  function pausar() {
    setTocando(!tocando);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#121212",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >

      <Text
        style={{
          fontSize: 100,
        }}
      >
        🎵
      </Text>

      <Text
        style={{
          color: "#fff",
          fontSize: 28,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        {musicas[musicaAtual].title}
      </Text>

      <Text
        style={{
          color: "#b3b3b3",
          fontSize: 18,
          marginTop: 10,
        }}
      >
        {musicas[musicaAtual].artist}
      </Text>

      <Text
        style={{
          color: "#1DB954",
          marginTop: 20,
          fontSize: 18,
        }}
      >
        {tocando ? "Tocando..." : "Pausado"}
      </Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          gap: 30,
        }}
      >

        <TouchableOpacity
          onPress={musicaAnterior}
        >
          <Text
            style={{
              color: "#1DB954",
              fontSize: 40,
            }}
          >
            ⏮
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={pausar}
        >
          <Text
            style={{
              color: "#1DB954",
              fontSize: 40,
            }}
          >
            {tocando ? "⏸" : "▶"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={proximaMusica}
        >
          <Text
            style={{
              color: "#1DB954",
              fontSize: 40,
            }}
          >
            ⏭
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}