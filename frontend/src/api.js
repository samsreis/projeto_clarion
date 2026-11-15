import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = " https://polite-garlics-cover.loca.lt"; // Link novo

export const apiFetch = async (rota, metodo = "GET", corpo = null) => {
  const token = await AsyncStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    "Bypass-Tunnel-Reminder": "true",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const opcoes = { method: metodo, headers };
  if (corpo) opcoes.body = JSON.stringify(corpo);

  const res = await fetch(`${BASE_URL}${rota}`, opcoes);

  if (!res.ok) {
    const textoErro = await res.text();
    throw new Error(`Erro ${res.status}: ${textoErro}`);
  }

  if (res.status === 204) return null;

  const text = await res.text();
  return text ? JSON.parse(text) : null;
};
