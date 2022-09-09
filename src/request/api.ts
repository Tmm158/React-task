import request from './request'

interface IRegisterLogin {
    username: string | number;
    password: string | number;
}

// 注册接口：向注册页发请求
export const RegisterApi = (params: IRegisterLogin) => request.post('/register', params)
// 登陆接口
export const LoginApi=(params: IRegisterLogin)=>request.post('/login',params)
