const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');


async function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token ausente' });


    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(payload.id);
        if (!user) return res.status(401).json({ message: 'Usuário não encontrado' });
        req.user = user;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Token inválido' });
    }
}


function authorizeRoles(...roles) {
    return (req, res, next) => {
        if (!req.user) return res.status(401).json({ message: 'Não autenticado' });
        if (!roles.includes(req.user.role)) return res.status(403).json({ message: 'Acesso negado' });
        next();
    };
}


module.exports = { authenticateToken, authorizeRoles };