class StorageManager {
    public setItem(key: string, value: string) {
        const encodedKey = btoa(key);
        const encodedValue = btoa(value);
        const formattedKey = this.formateBase64String(encodedKey);
        const formattedValue = this.formateBase64String(encodedValue);
        localStorage.setItem(formattedKey, formattedValue);
    }

    private formateBase64String(value: string){
        if(value.slice(-1) === "="){
            return value.slice(0, -1)
        }
        return value;
    }

    public getItem(key: string){
        const encodedKey = btoa(key).slice(0, -1);
        const encodedValue = localStorage.getItem(encodedKey);
        const decodedValue = encodedValue && atob(encodedValue);
        return decodedValue || '';
    }

    public removeItem(key: string){
        const encodedKey = btoa(key);
        const formattedKey = this.formateBase64String(encodedKey);
        localStorage.removeItem(formattedKey);
    }

    public clear(){
        localStorage.clear();
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new StorageManager();

