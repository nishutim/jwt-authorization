import { $axiosAuth } from "../http";
import { IUser } from "../models";

class UsersService {
   static fetchUsers = async () => {
      const { data } = await $axiosAuth.get<IUser[]>('users');
      return data;
   }
}

export default UsersService;