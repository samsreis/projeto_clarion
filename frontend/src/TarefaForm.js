import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { apiFetch } from "./api";

export default function TarefaForm({ navigation, route }) {
  const [titulo, setTitulo] = useState("");

  const salvar = async () => {
    try {
      await apiFetch("/tarefas", "POST", { titulo, concluida: false });
      route.params.carregar();
      navigation.goBack();
    } catch (e) {
      alert("Erro");
    }
  };

  return (
    <View style={s.c}>
      <TextInput
        style={s.i}
        placeholder="Título da Tarefa"
        onChangeText={setTitulo}
      />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}
const s = StyleSheet.create({
  c: { flex: 1, padding: 20 },
  i: { borderWidth: 1, marginBottom: 10, padding: 8 },
});
