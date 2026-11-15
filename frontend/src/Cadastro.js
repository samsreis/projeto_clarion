import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { apiFetch } from "./api";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const salvar = async () => {
    try {
      await apiFetch("/auth/register", "POST", { email, senha });
      alert("Criado! Faça login.");
      navigation.goBack();
    } catch (e) {
      alert("Erro");
    }
  };

  return (
    <View style={s.c}>
      <TextInput style={s.i} placeholder="Email" onChangeText={setEmail} />
      <TextInput
        style={s.i}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setSenha}
      />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}
const s = StyleSheet.create({
  c: { flex: 1, justifyContent: "center", padding: 20 },
  i: { borderWidth: 1, marginBottom: 10, padding: 8 },
});
