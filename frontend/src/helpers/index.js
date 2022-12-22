import { constants } from "../constants";

export const helper = {
    fileToBase64: (file)=>{
        return new Promise((resolve, reject)=>{
            try {
                var reader = new FileReader();
                reader.onload = function(e) {
                    resolve(e.target.result)
                };
                reader.readAsDataURL(file);
            } catch (error) {
                reject(error)
            }
        })
    },

    urlToFile : (url, filename)=> {
        return new Promise(async(resolve, reject)=>{
            try {
                const response = await fetch(url);
                const blob = await response.blob();
                const file = new File([blob], filename, {type: blob.type});
                resolve(file);
            } catch (error) {
                reject(null)
            }
        })
    },

    groupBy: (list, key) => {
        return list.reduce((a, e) => {
            let estKey = (e[key].id); 
            (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
            return a;
            }, {});
    },

    isAllowed : (session, prompt)=>{
        if(!session?.id) { prompt && alert("please login first !"); return false;}
        if(session?.idAdmin) { prompt && alert("only members have permition, action not allowed for admin !"); return false;}
        if(session?.etat===constants.etat[1]) { prompt && alert("only activated members have permission, please contact the admin to reactivate your account !"); return false;}
        return true
    }
}