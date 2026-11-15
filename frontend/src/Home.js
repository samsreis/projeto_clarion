import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { apiFetch } from "./api";

export default function Home({ navigation }) {
  const [tarefas, setTarefas] = useState([]);

  const carregar = async () => {
    try {
      const dados = await apiFetch("/tarefas");
      setTarefas(dados);
    } catch (e) {
      alert("Erro ao buscar");
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  const deletar = async (id) => {
    await apiFetch(`/tarefas/${id}`, "DELETE");
    carregar();
  };

  return (
    <View style={s.c}>
      <Button title="Perfil" onPress={() => navigation.navigate("Perfil")} />
      <Button
        title="Nova Tarefa"
        onPress={() => navigation.navigate("TarefaForm", { carregar })}
      />
      <FlatList
        data={tarefas}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <View style={s.item}>
            <Text>
              {item.titulo} {item.concluida ? "✅" : "❌"}
            </Text>
            <TouchableOpacity onPress={() => deletar(item.id)}>
              <Text>Apagar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
const s = StyleSheet.create({
  c: { flex: 1, padding: 20 },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    padding: 10,
  },
});
