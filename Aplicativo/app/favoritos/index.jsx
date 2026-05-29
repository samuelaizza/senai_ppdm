import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { router } from "expo-router";
// Importa a lista de favoritos que criamos na Home
import { musicasFavoritasGlobais } from "../home/index"; 

export default function Favoritos() {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212", padding: 20 }}>
      
      <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 40, marginBottom: 20 }}>
        <Text style={{ color: "#1DB954", fontSize: 16 }}>⬅️ Voltar para Home</Text>
      </TouchableOpacity>

      <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
        Meus Favoritos
      </Text>

      {musicasFavoritasGlobais.length === 0 ? (
        <Text style={{ color: "#b3b3b3", fontSize: 16, textAlign: "center", marginTop: 40 }}>
          Nenhuma música favoritada ainda.
        </Text>
      ) : (
        <FlatList
          data={musicasFavoritasGlobais}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push("/player")}
              style={{
                backgroundColor: "#282828",
                padding: 15,
                borderRadius: 10,
                marginBottom: 15,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
              <Text style={{ color: "#b3b3b3", marginTop: 5 }}>{item.artist}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}