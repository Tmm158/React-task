import request from './request'

interface IRegisterLogin {
    username?: string | number;
    password?: string | number;
}

// 注册接口：向注册页发请求
export const RegisterApi = (params: IRegisterLogin) => request.post('/register', params)
// 登陆接口
export const LoginApi=(params: IRegisterLogin)=>request.post('/login',params)

// 请求用户信息接口
export const UserInfoApi=()=>request.get('/info')

// 修改用户接口
export const ChangeUserInfoApi=(params:IRegisterLogin)=>request.post('/info',params)
