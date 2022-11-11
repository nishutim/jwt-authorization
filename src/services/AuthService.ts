import { $axios } from "../http";
import { ILoginResponse } from "../models";

class AuthService {
   static login = async (email: string, password: string) => {
      const { data } = await $axios.post<ILoginResponse>('/login', { email, password });
      return data;
   }

   static registration = async (email: string, password: string) => {
      const { data } = await $axios.post<ILoginResponse>('/registration', { email, password });
      return data;
   }

   static logout = async () => {
      const { data } = await $axios.post('/logout');
      return data;
   }

   static refresh = async () => {
      const { data } = await $axios.get<ILoginResponse>('/refresh');
      return data;
   }
}

export default AuthService;