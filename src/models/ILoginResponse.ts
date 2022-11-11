import IAuthUser from "./IAuthUser";

interface ILoginResponse {
   accessToken: string
   refreshToken: string
   user: IAuthUser
   message: string
   errors: string[]
}

export default ILoginResponse;