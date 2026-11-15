import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { apiFetch } from "./api";

export default function TarefaForm({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const salvar = async () => {
    if (!titulo.trim()) return alert("O título é obrigatório");
    try {
      await apiFetch("/tarefas", "POST", {
        titulo,
        descricao,
        concluida: false,
      });
      navigation.goBack();
    } catch (e) {
      alert("Erro ao salvar: " + e.message);
    }
  };

  return (
    <View style={s.c}>
      <TextInput
        style={s.i}
        placeholder="Título"
        placeholderTextColor="#888"
        onChangeText={setTitulo}
      />
      <TextInput
        style={[s.i, { height: 100 }]}
        multiline
        placeholder="Descrição (opcional)"
        placeholderTextColor="#888"
        onChangeText={setDescricao}
      />
      <TouchableOpacity style={s.btn} onPress={salvar}>
        <Text style={s.btnTxt}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
const s = StyleSheet.create({
  c: { flex: 1, padding: 20, backgroundColor: "#000" },
  i: {
    borderWidth: 1,
    borderColor: "#fff",
    color: "#fff",
    marginBottom: 15,
    padding: 12,
    borderRadius: 4,
    textAlignVertical: "top",
  },
  btn: {
    backgroundColor: "#fff",
    padding: 12,
    alignItems: "center",
    borderRadius: 4,
  },
  btnTxt: { color: "#000", fontWeight: "bold" },
});
