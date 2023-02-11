export function auth(req, res, next) {
    if (req.session.logged) {
      req.session.touch();
      next();
    } else {
      res.status(403).send("User not found.");
    }
  }