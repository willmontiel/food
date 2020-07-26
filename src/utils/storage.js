
import { AsyncStorage } from "react-native"

export const set = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        // Error retrieving data
        console.log(error.message);
    }
}

export const get = async (key) => {
    let val = '';
    try {
        val = await AsyncStorage.getItem(key);
        if (val === "none")
            val = null
    } catch (error) {
        // Error retrieving data
        console.log(error.message);
    }
    return val;
}

export const remove = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        // Error retrieving data
        console.log(error.message);
    }
}