export default class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    //Enviar um email
    res.json(user)
  }
}