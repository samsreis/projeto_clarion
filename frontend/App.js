import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Login";
import Cadastro from "./src/Cadastro";
import Home from "./src/Home";
import TarefaForm from "./src/TarefaForm";
import Perfil from "./src/Perfil";

const Stack = createNativeStackNavigator();

export default function App() {
  const [logado, setLogado] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!logado ? (
          <>
            <Stack.Screen name="Login">
              {(props) => <Login {...props} setLogado={setLogado} />}
            </Stack.Screen>
            <Stack.Screen name="Cadastro" component={Cadastro} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="TarefaForm" component={TarefaForm} />
            <Stack.Screen name="Perfil">
              {(props) => <Perfil {...props} setLogado={setLogado} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
