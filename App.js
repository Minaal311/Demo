import React, { useCallback, useEffect,useState } from "react";
import {View,Text} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
// import { Provider } from "react-redux";


const App = () => {
const [state, setState] = useState({
  
});

const {} = state;

const updateState = data => setState(state => ({...state, ...data}));


 
    return (
        <SafeAreaProvider>
          <HomeScreen/>
        </SafeAreaProvider>
    );
};

export default App;
