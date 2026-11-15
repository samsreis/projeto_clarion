import React from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Perfil({ setLogado }) {
  const sair = async () => {
    await AsyncStorage.removeItem("token");
    setLogado(false);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Nome: Samuel Silva dos Reis</Text>
      <Text>RM: 1143174579</Text>
      <Button title="Sair" onPress={sair} />
    </View>
  );
}
