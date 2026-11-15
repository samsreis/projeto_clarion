import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { apiFetch } from "./api";

export default function Home({ navigation }) {
  const [tarefas, setTarefas] = useState([]);

  const carregar = async () => {
    try {
      const dados = await apiFetch("/tarefas");
      setTarefas(dados);
    } catch (e) {
      alert("Erro ao buscar: " + e.message);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      carregar();
    });
    return unsubscribe;
  }, [navigation]);

  const deletar = async (id) => {
    try {
      await apiFetch(`/tarefas/${id}`, "DELETE");
      carregar();
    } catch (e) {
      alert("Erro ao deletar: " + e.message);
    }
  };

  return (
    <View style={s.c}>
      <View style={s.header}>
        <TouchableOpacity
          style={s.btnHeader}
          onPress={() => navigation.navigate("TarefaForm")}
        >
          <Text style={s.btnTxt}>Nova Tarefa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.btnHeader}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Text style={s.btnTxt}>Perfil</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <View style={s.item}>
            <View style={{ flex: 1 }}>
              <Text style={s.itemTitle}>{item.titulo}</Text>
              {item.descricao ? (
                <Text style={s.itemDesc}>{item.descricao}</Text>
              ) : null}
            </View>
            <TouchableOpacity
              style={s.btnDelete}
              onPress={() => deletar(item.id)}
            >
              <Text style={s.btnTxtDelete}>Apagar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
const s = StyleSheet.create({
  c: { flex: 1, padding: 20, backgroundColor: "#000" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  btnHeader: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 4,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  btnTxt: { color: "#000", fontWeight: "bold" },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#fff",
    paddingVertical: 15,
    alignItems: "center",
  },
  itemTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  itemDesc: { color: "#ccc", fontSize: 14, marginTop: 4 },
  btnDelete: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 8,
    borderRadius: 4,
  },
  btnTxtDelete: { color: "#fff", fontSize: 12 },
});
