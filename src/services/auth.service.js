import * as UserService from "../services/users.service.js";

export async function login(email, password) {
    try {
      const user = await UserService.getUser(email);
      if (!user) {
        throw new Error("User already exists");
      } else {
        if (password === user.password) {
          return true;
        } else {
          return false;
        }
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }