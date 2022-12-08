const API_LINK = 'http://localhost:8080'


const getOne = async (model, id) => {
    return await fetch(`${API_LINK}/${model}/${id}`,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })
        .then((results) => results)
        .catch((err) => {
            throw new Error("catch throw " + err);
        });
}


const getMultiple = async (model, page)=>{
    return await fetch(`${API_LINK}/${model}${page? '?page='+page:'' }`,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })
        .then(data => data)
        .catch((err) => {
            throw new Error("catch throw " + err);
        });
}


const add = async(model, data)=>{
    return await fetch(`${API_LINK}/${model}`,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })
        .then(data => data)
        .catch((err) => {
            throw new Error("catch throw " + err);
        });
}


const update = async(model, id, data)=>{
    return await fetch(`${API_LINK}/${model}/${id}`,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })
        .then(data => data)
        .catch((err) => {
            throw new Error("catch throw " + err);
        });
}


const remove = async(model, id)=>{
    return await fetch(`${API_LINK}/${model}/${id}`,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })
        .then(data => data)
        .catch((err) => {
            throw new Error("catch throw " + err);
        });
}

export { getOne, getMultiple, add, update, remove }