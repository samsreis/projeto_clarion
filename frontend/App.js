import React, { useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Login";
import Cadastro from "./src/Cadastro";
import Home from "./src/Home";
import TarefaForm from "./src/TarefaForm";
import Perfil from "./src/Perfil";

const Stack = createNativeStackNavigator();

const BlackTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#000",
    card: "#000",
    text: "#fff",
    border: "#fff",
    primary: "#fff",
  },
};

export default function App() {
  const [logado, setLogado] = useState(false);
  return (
    <NavigationContainer theme={BlackTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#fff",
        }}
      >
        {!logado ? (
          <>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {(props) => <Login {...props} setLogado={setLogado} />}
            </Stack.Screen>
            <Stack.Screen name="Cadastro" component={Cadastro} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "Clarion" }}
            />
            <Stack.Screen
              name="TarefaForm"
              component={TarefaForm}
              options={{ title: "Nova Tarefa" }}
            />
            <Stack.Screen name="Perfil">
              {(props) => <Perfil {...props} setLogado={setLogado} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
