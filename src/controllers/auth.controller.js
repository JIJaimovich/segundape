import * as AuthService from "../services/auth.service.js"; 

export async function logout(req, res) {
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
}

export async function login(req, res) {
    try {
      const { email, password } = req.body;
      const logged = await AuthService.login(email, password);
      if (logged) {
        req.session.logged = true;
        res.send("User logged in.");
      } else {
        res.status(400).send("Incorrect username or password.");
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
 