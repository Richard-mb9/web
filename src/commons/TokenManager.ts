import { jwtDecode } from "jwt-decode";
import StorageManager from "./StorageManager";

interface IJwtPayload {
    uid: number;
    roles: string[];
    email: string;
    username: string;
}


class TokenManager{
    private accessToken: string | undefined;
    private refreshToken: string | undefined;

    constructor(){
        this.accessToken = StorageManager.getItem("accessToken");
        this.refreshToken = StorageManager.getItem("refreshToken");

    }

    private getExpireDateAccessToken(){
        const currentTime = new Date();
        currentTime.setHours(currentTime.getHours() + 1);
        return this.formatDate(currentTime);
    }

    private getExpireDateRefreshToken(){
        const currentTime = new Date();
        currentTime.setHours(currentTime.getHours() + 24);
        return this.formatDate(currentTime);
    }

    private formatDate(date: Date){
        const day = date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate();
        const month = date.getMonth() < 10 ? '0' + (date.getMonth().toString() + 1) : (date.getMonth() + 1);
        const hours = date.getHours() < 10 ? '0' + (date.getHours().toString()) : (date.getHours());
        const minute = date.getMinutes() < 10 ? '0' + (date.getMinutes().toString() ) : (date.getMinutes());
        const second = date.getSeconds() < 10 ? '0' + (date.getSeconds().toString()) : (date.getSeconds());
        return `${date.getFullYear()}-${month}-${day}:${hours}:${minute}:${second}`;
    }

    setAccessToken(accessToken: string, refreshToken: string){
        const expireAccessToken = this.getExpireDateAccessToken();
        const expireRefreshToken = this.getExpireDateRefreshToken();
        StorageManager.setItem("accessToken", accessToken);
        StorageManager.setItem("expireAccessToken", expireAccessToken);
        StorageManager.setItem("refreshToken", refreshToken);
        StorageManager.setItem("expireRefreshToken", expireRefreshToken);
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }
    
    getAccessToken(){
        return this.accessToken
    }

    getRefreshToken(){
        return this.refreshToken;
    }

    clear(){
        this.accessToken = "";
        StorageManager.clear();
    }

    isAuthenticated(){
        return !!StorageManager.getItem("accessToken");
    }

    getTokenData(): IJwtPayload {
        if(this.accessToken){
            return jwtDecode(this.accessToken) as IJwtPayload;
        }
        return {} as IJwtPayload;
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new TokenManager();