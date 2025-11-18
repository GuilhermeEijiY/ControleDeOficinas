const jwt = require("jsonwebtoken");
const { User } = require("../models");
require("dotenv").config();

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email já cadastrado" });

    const user = await User.create({ name, email, password, role });
    return res.status(201).json({
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao cadastrar usuário" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const user = await User.findOne({ email, role });

    if (!user)
      return res.status(400).json({ message: "Credenciais inválidas" });

    const valid = await user.validPassword(password);
    if (!valid)
      return res.status(400).json({ message: "Credenciais inválidas" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );

    return res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao autenticar" });
  }
};
