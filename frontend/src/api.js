import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://10.0.2.2:8080"; // Para emulador Android. Troque pelo IP do seu PC ou ngrok se for celular físico.

export const apiFetch = async (rota, metodo = "GET", corpo = null) => {
  const token = await AsyncStorage.getItem("token");
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const opcoes = { method: metodo, headers };
  if (corpo) opcoes.body = JSON.stringify(corpo);

  const res = await fetch(`${BASE_URL}${rota}`, opcoes);
  if (!res.ok) throw new Error("Erro na requisição");
  if (res.status === 204) return null;
  return res.json();
};
