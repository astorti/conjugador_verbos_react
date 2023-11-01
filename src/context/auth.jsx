import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [verb, setVerb] = useState({})

    let current = []
    let first = []
    let second = []
    let third = []
    let language = "Espanhol"
    let nameVerb = "ser"
    let firstMode = 'indicativo'
    let languages = []

    useEffect(() => {
        handleGetVerb();
    }, [verb])

    const handleGetVerb = async () => {
        try {
            const { data } = await api.get(`/languages`);
            setVerb(data)
        } catch (e) {
            console.log("Erro")
        }
        getLanguages()
    }

    const getLanguages = () => {
        languages.push(verb[0].name)
        for (let item in verb) {
            for (let l in languages) {
                if (verb[item].name !== languages[l]) {
                    languages.push(verb[item].name)
                }
            }
        }
    }

    for (let item in verb) {
        if (verb[item].name === language && verb[item].verbName === nameVerb) {
            current.push(verb[item])
            if (firstMode === '') {
                firstMode = verb[item].mode
            }
        }
    }

    for (let i = 0; i < current.length; i++){
        if (current[i] !== undefined) {
            if (i < 6 && current[i].mode === "indicativo") {
                first.push(current[i])
            } else if (i >= 6 && i < 12 && current[i].mode === "indicativo") {
                second.push(current[i])
            } else {
                third.push(current[i])
            }
        }
    }
    
    
    return <AuthContext.Provider value={{ handleGetVerb, verb, first, second, third, languages }}>
        {children}
    </AuthContext.Provider>
};