import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiFetch } from "./api";

export default function Login({ navigation, setLogado }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

    const entrar = async () => {
      try {
        const dados = await apiFetch("/auth/login", "POST", { email, senha });
        await AsyncStorage.setItem("token", dados.token); // Pega o .token aqui
        setLogado(true);
      } catch (e) {
        alert("Login falhou: " + e.message);
      }
    };

  return (
    <View style={s.c}>
      <Text>Clarion</Text>
      <TextInput style={s.i} placeholder="Email" onChangeText={setEmail} />
      <TextInput
        style={s.i}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setSenha}
      />
      <Button title="Entrar" onPress={entrar} />
      <Button
        title="Cadastrar"
        onPress={() => navigation.navigate("Cadastro")}
      />
    </View>
  );
}
const s = StyleSheet.create({
  c: { flex: 1, justifyContent: "center", padding: 20 },
  i: { borderWidth: 1, marginBottom: 10, padding: 8 },
});
