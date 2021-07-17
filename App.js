import React, {useState} from 'react';
import MealsNavigator from "./navigation/MealsNavigator";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
}

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false)

    if (!fontLoaded) {
        return (<AppLoading
            startAsync={fetchFonts}
            onError={console.warn}
            onFinish={() => setFontLoaded(true)}/>)
    }
    return <MealsNavigator/>

}

