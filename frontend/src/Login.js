import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiFetch } from "./api";

export default function Login({ navigation, setLogado }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const entrar = async () => {
    try {
      const dados = await apiFetch("/auth/login", "POST", { email, senha });
      await AsyncStorage.setItem("token", dados.token);
      await AsyncStorage.setItem("email", email);
      setLogado(true);
    } catch (e) {
      alert("Login falhou: " + e.message);
    }
  };

  return (
    <View style={s.c}>
      <Text style={s.title}>Clarion</Text>
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
      <TouchableOpacity style={s.btn} onPress={entrar}>
        <Text style={s.btnTxt}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={s.link}>Criar conta</Text>
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
  title: {
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
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
    marginBottom: 15,
  },
  btnTxt: { color: "#000", fontWeight: "bold" },
  link: { color: "#fff", textAlign: "center", marginTop: 10 },
});
