
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
    }
}