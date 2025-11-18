const { User } = require('../models');

exports.listUsers = async (req, res) => {
    try {
        const users = await User.find({}, 'id name email role');
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao listar usuários' });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const user = req.user;
        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao obter perfil' });
    }
};
