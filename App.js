import React from "react";
import { Text, StyleSheet, View, Image, FlatList} from "react-native";
import Header from "./components/header";
import Card from "./components/card";
import ROTINAS from './data';

export default function App() {
  return (
    <View style={estilo.container}>
      <Header></Header>
    <FlatList
    data = {ROTINAS}
    keyExtractor = {(item)=>item.id}
    renderItem = {({item}) => (
      <Card
      titulo = {item.titulo}
      imagem = {item.imagem}
      porcentagem = {item.porcentagem}
      texto = {item.texto}
      />

      
    )}
    
    
    />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE4B5",
    borderColor: "#90E0EF",
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
     marginTop: 15,
  },

  cardTarefa: {
    marginTop: 20,
    backgroundColor: "#A8DADC",
    width: "100%",
    height: 125,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
    flexDirection: "row",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },

  tituloCard: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1d3557",
  },

  textoCard: {
    fontSize: 10,
    marginTop: 5,
  },

  imagemCard: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
});
