import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Perfil({ setLogado }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("email").then((val) => {
      if (val) setEmail(val);
    });
  }, []);

  const sair = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("email");
    setLogado(false);
  };

  return (
    <View style={s.c}>
      <Text style={s.title}>Perfil</Text>
      <Text style={s.label}>Email da conta:</Text>
      <Text style={s.value}>{email}</Text>

      <TouchableOpacity style={s.btn} onPress={sair}>
        <Text style={s.btnTxt}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
const s = StyleSheet.create({
  c: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  label: { color: "#888", fontSize: 16, marginBottom: 5 },
  value: { color: "#fff", fontSize: 20, marginBottom: 40 },
  btn: {
    backgroundColor: "#fff",
    padding: 12,
    alignItems: "center",
    borderRadius: 4,
  },
  btnTxt: { color: "#000", fontWeight: "bold" },
});
