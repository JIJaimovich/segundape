import * as UserService from "../services/users.service.js";

export async function createUser(req, res) {
  try {
    const data = req.body;
    const response = await UserService.createUser(data);
    res.status(201).json({ user: response });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getUser(req, res) {
  try {
    const { email } = req.params;
    const user = await UserService.getUser(email);
    if (user) {
      delete user.password;
      res.json({ user });
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export const renderSignUp = async (req, res) => {
    res.render('users/signup');
};
export const renderSignIn = async (req, res) => {
  res.render('users/signin');
};
export const signIn = async (req, res) => {
  res.send('signin');
}
export const signUp = async (req, res) => {
  res.send('signup');
};
export const logOut = async (req, res) => {
  res.send('logout');
};
// export const logOut = async (req, res) => {
//   try {
//     req.session.destroy(err => {
//       if (err) {
//         res.render(`../views/errors/base`, { error: "No se puedo logear, usuario y/o password incorrecta." })
//         return
//       } res.redirect(`http://localhost:5000/login?logout_status=success`)
//       return
//     })
//   } catch (error) {
//     res.render(`/errors/base`, { error: "Hubo un problema! Lo estamos solucionando." })
//     return
//   }
// }
