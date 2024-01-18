import { authAPI } from './baseApi';


interface IGetTokenDataRequest {
    emailOrUsername: string;
    password: string;
}

interface IGetTokenResponse {
    accessToken: string;
    tokenType: String;
    refreshToken: string;
}

interface IRefreshTokenRequest {
    refreshToken: string;
}


export async function getToken(data: IGetTokenDataRequest){
    return authAPI.post<IGetTokenResponse>('', data);
}

export async function refreshToken(data: IRefreshTokenRequest){
    return authAPI.post<IGetTokenResponse>('/refresh', data);
}