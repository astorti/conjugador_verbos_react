import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [verb, setVerb] = useState({})

    let current = []
    let first = []
    let second = []
    let third = []
    const [ language, setLanguage ] = useState("")
    const [ nameVerb, setNameVerb ] = useState("")
    let firstMode = ''
    let secondMode = ''
    let languages = []
    let firstCount = 0
    let secondCount = 0

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
            if (!languages.includes(verb[item].name)) {
                languages.push(verb[item].name)
            }
        }
    }

    for (let item in verb) {
        if (verb[item].name === language && verb[item].verbName === nameVerb) {
            current.push(verb[item])
            if (firstMode === '') {
                firstMode = verb[item].mode
            }
            if (firstMode === verb[item].mode) {
                firstCount = firstCount + 1
            }
            if (firstMode !== verb[item].mode) {
                secondMode = verb[item].mode
                secondCount = secondCount + 1
            }
        }

    }

    if (secondCount > firstCount) {
        let temp = firstMode
        firstMode = secondMode
        secondMode = temp
    }    

    for (let i = 0; i < current.length; i++){
        if (current[i] !== undefined) {
            if (i < 6 && current[i].mode === firstMode) {
                first.push(current[i])
            } else if (i >= 6 && i < 12 && current[i].mode === firstMode) {
                second.push(current[i])
            } else {
                third.push(current[i])
            }
        }
    }

    const select = (selectedLanguage, selectedVerb) => {
        setLanguage(selectedLanguage)
        setNameVerb(selectedVerb)
    }
    
    
    return <AuthContext.Provider value={{ handleGetVerb, select, verb, first, second, third, languages, firstMode, secondMode }}>
        {children}
    </AuthContext.Provider>
};