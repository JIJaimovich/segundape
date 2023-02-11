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

export async function updateUser(req, res) {
  try {
    const { email } = req.params;
    const { body } = req;
    const user = await UserService.updateUser(email, body);
    res.json({ user });
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updatePassword(req, res) {
  try {
    const { email } = req.params;
    const { body } = req;
    const user = await UserService.updateUser(email, { password: body.password }, true);
    res.json({ user });
  } catch (error) {
    throw new Error(error.message);
  }
}

export const renderSignUp =   async (req, res) => {
    res.render('users/signup');
};
export const renderSignIn = async (req, res) => {
  res.render('users/signin');
};
export const signIn = async (req, res) => {
    req.session.logged = true;
    req.session.user = req.user;
    res.render('products'); 
}
export const signUp = (req, res) => {
  res.redirect('signin');
};
export const logOut = async (req, res) => {
  //res.send('logout');
  try {
    req.session.destroy((err) => {
      if (err) {
        res.json(err);
      } else {
        res.send("User logged out.");
      }
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
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
