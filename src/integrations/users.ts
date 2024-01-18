import { authAPI } from './baseApi';


interface ICreateUser {
    username: string;
    email: string;
    password: string;
}

interface ICreateUserResponse {
    id: number;
}

export async function createUser(user: ICreateUser){
    return authAPI.post<ICreateUserResponse>('users', user)
}