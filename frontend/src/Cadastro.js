import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
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
      alert("Erro ao criar conta: " + e.message);
    }
  };

  return (
    <View style={s.c}>
      <TextInput
        style={s.i}
        placeholder="Email"
        placeholderTextColor="#888"
        onChangeText={setEmail}
      />
      <TextInput
        style={s.i}
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
        onChangeText={setSenha}
      />
      <TouchableOpacity style={s.btn} onPress={salvar}>
        <Text style={s.btnTxt}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
const s = StyleSheet.create({
  c: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#000",
  },
  i: {
    borderWidth: 1,
    borderColor: "#fff",
    color: "#fff",
    marginBottom: 15,
    padding: 12,
    borderRadius: 4,
  },
  btn: {
    backgroundColor: "#fff",
    padding: 12,
    alignItems: "center",
    borderRadius: 4,
  },
  btnTxt: { color: "#000", fontWeight: "bold" },
});
