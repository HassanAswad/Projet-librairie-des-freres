
import { helper } from "../helpers";

export const api = {

    fetchCategories: ()=>{
        return new Promise((resolve, reject)=>{
            fetch(`/categorieAnnonce/all`,{
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(async (response) => {
                try {
                    let data = await response.json()
                    resolve(data)
                } catch (error) {
                    reject(error)
                }
            })
            .catch((err) => {
                reject(err)
            });
        })
    },

    fetchAnnonces : (url)=>{
        return new Promise((resolve, reject)=>{
            fetch(`/annonce/${url}`,{
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(async (response) => {
                try {
                    let data = await response.json()
                    resolve(data)
                } catch (error) {
                    reject(error)
                }
            })
            .catch((err) => {
                reject(err)
            });
        })
    },

    uploadImage : (file)=>{
        return new Promise((resolve, reject)=>{
            helper.fileToBase64(file).then((base64)=>{
                const data = { "base64": base64.replace('data:', '').replace(/^.+,/, ''), "name": file.name }
                fetch(`/annonce/upload`,{
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' },
                })
                .then(async (response) => {
                    resolve(response.ok)
                })
                .catch((err) => {
                    reject(false)
                });
            })
        })     
    },

    getExpiditeurs: (membreId)=>{
        return new Promise((resolve, reject)=>{
            fetch(`/message/find/${membreId}`,{
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(async (response) => {
                try {
                    let data = await response.json()
                    const grouped = helper.groupBy(data, 'expediteur') // expediteur, receveur
                    const expediteurs = []
                    Object.keys(grouped).map((MessagesByExpediteur, i) =>{
                        const msg = grouped[`${MessagesByExpediteur}`][0]
                        // msg.expediteur!==membreId && 
                        expediteurs.push(msg)
                    })
                    resolve(expediteurs)
                } catch (error) {
                    reject(error)
                }
            })
            .catch((err) => {
                reject(err)
            });
        })
    },

    syncMessages: (membreId)=>{
        return new Promise((resolve, reject)=>{
            fetch(`/message/sync/${membreId}`,{
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(async (response) => {
                try {
                    let data = await response.json()
                    resolve(data.length)
                } catch (error) {
                    reject(error)
                }
            })
            .catch((err) => {
                reject(err)
            });
        })
    },

    getMessages: (expediteur, receveur)=>{
        return new Promise((resolve, reject)=>{
            fetch(`/message/find/${expediteur}/${receveur}`,{ // findByExpediteur     findByReceveur
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(async (response) => {
                try {
                    let messages = await response.json()
                    messages.sort((a, b)=>{
                        // return new Date(b.date).getTime() - new Date(a.date).getTime();
                        return a.id - b.id;
                    })
                    resolve(messages)
                } catch (error) {
                    reject(error)
                }
            })
            .catch((err) => {
                reject(err)
            });
        })
    },

    sendMessage: (expediteur, receveur, formMessage)=>{
        return new Promise((resolve, reject)=>{
            fetch(`/message/send/${expediteur}/${receveur}`,{
                method: 'POST',
                body: JSON.stringify(formMessage),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(async (response) => {
                try {
                    let message = await response.json()
                    resolve(message)
                } catch (error) {
                    reject(error)
                }
            })
            .catch((err) => {
                reject(err)
            });
        })
    },

    evaluateAnnonce: (membre, annonce, formEvaluation)=>{
        return new Promise((resolve, reject)=>{
            fetch(`/evaluation/add/${membre}/${annonce}`,{
                method: 'POST',
                body: JSON.stringify(formEvaluation),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(async (response) => {
                try {
                    let evaluation = await response.json()
                    resolve(evaluation)
                } catch (error) {
                    reject(error)
                }
            })
            .catch((err) => {
                reject(err)
            });
        })
    },

    findEvaluation: (membre, annonce)=>{
        return new Promise((resolve, reject)=>{
            fetch(`/evaluation/find/${membre}/${annonce}`,{
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(async (response) => {
                try {
                    let evaluation = await response.json()
                    resolve(evaluation)
                } catch (error) {
                    reject(error)
                }
            })
            .catch((err) => {
                reject(err)
            });
        })
    },

    reportAnnonce: (membre, annonce, formEvaluation)=>{
        return new Promise((resolve, reject)=>{
            fetch(`/signalisation/add/${membre}/${annonce}`,{
                method: 'POST',
                body: JSON.stringify(formEvaluation),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(async (response) => {
                try {
                    let evaluation = await response.json()
                    resolve(evaluation)
                } catch (error) {
                    reject(error)
                }
            })
            .catch((err) => {
                reject(err)
            });
        })
    },

    findSignalisation: (membre, annonce)=>{
        return new Promise((resolve, reject)=>{
            fetch(`/signalisation/find/${membre}/${annonce}`,{
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(async (response) => {
                try {
                    let signalisation = await response.json()
                    resolve(signalisation)
                } catch (error) {
                    reject(error)
                }
            })
            .catch((err) => {
                reject(err)
            });
        })
    },

    getSignalisations: (admin)=>{
        return new Promise((resolve, reject)=>{
            fetch(`/signalisation/find/${admin}`,{
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(async (response) => {
                try {
                    let signalisations = await response.json()
                    resolve(signalisations)
                } catch (error) {
                    reject(error)
                }
            })
            .catch((err) => {
                reject(err)
            });
        })
    },
    

    addWishList: (membre, annonce, formFavorisation)=>{
        return new Promise((resolve, reject)=>{
            fetch(`/favorisation/add/${membre}/${annonce}`,{
                method: 'POST',
                body: JSON.stringify(formFavorisation),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(async (response) => {
                try {
                    let favorisation = await response.json()
                    resolve(favorisation)
                } catch (error) {
                    reject(error)
                }
            })
            .catch((err) => {
                reject(err)
            });
        })
    },

    getFavorisation: (membre, annonce)=>{
        return new Promise((resolve, reject)=>{
            fetch(`/favorisation/find/${membre}/${annonce}`,{
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(async (response) => {
                try {
                    let favorisation = await response.json()
                    resolve(favorisation)
                } catch (error) {
                    reject(error)
                }
            })
            .catch((err) => {
                reject(err)
            });
        })
    },

    getFavorisations: (membre)=>{
        return new Promise((resolve, reject)=>{
            fetch(`/favorisation/find/${membre}`,{
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(async (response) => {
                try {
                    let favorisation = await response.json()
                    resolve(favorisation)
                } catch (error) {
                    reject(error)
                }
            })
            .catch((err) => {
                reject(err)
            });
        })
    },
    
}