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
    }
}