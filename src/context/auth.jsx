import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { v1 as uuidv1 } from 'uuid';


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

    const [ verbToBeUpdated, setVerbToBeUpdated] = useState('')
    const handleGetVerbToBeUpdated = (updateVerb) => {
        setVerbToBeUpdated(updateVerb)
    }

    const handleUpdateVerb = (id, updateName, updateVerbName, updateMode, updateTense, updateFirst, updateSecond, updateThird, updateFourth, updateFifth, updateSixth) => {
        api.put(`/languages/${id}`, {
            id: id,
            name: updateName,
            verbName: updateVerbName,
            mode: updateMode,
            tense: updateTense,
            first: updateFirst,
            second: updateSecond,
            third: updateThird,
            fourth: updateFourth,
            fifth: updateFifth,
            sixth: updateSixth
        })
        alert("Verbo atualizado com sucesso")
        setVerbToBeUpdated('')
    }
    

    const handleSubmit = (newLanguage, newVerbName, newMode, newTense, newFirst, newSecond, newThird, newFourth, newFifth, newSixth) => {
        api.post(`/languages`, {
            id: uuidv1(),
            name: newLanguage,
            verbName: newVerbName,
            mode: newMode,
            tense: newTense,
            first: newFirst,
            second: newSecond,
            third: newThird,
            fourth: newFourth,
            fifth: newFifth,
            sixth: newSixth
        }) 
        alert("Cadastro realizado com sucesso")
    }


    const handleGetVerb = async () => {
        try {
            const { data } = await api.get(`/languages`);
            setVerb(data)
            getLanguages();
        } catch (e) {
            console.log("Erro")
        }
    }

    const getLanguages = () => {
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
    
    
    return <AuthContext.Provider value={{ handleGetVerb, handleSubmit, handleGetVerbToBeUpdated, handleUpdateVerb, select, verbToBeUpdated, verb, first, second, third, languages, firstMode, secondMode }}>
        {children}
    </AuthContext.Provider>
};