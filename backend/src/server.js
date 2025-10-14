const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { connectDB, User } = require('./models'); // importa o connectDB do index.js

const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const officesRoutes = require('./routes/offices');
const enrollmentsRoutes = require('./routes/enrollments');

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/offices', officesRoutes);
app.use('/api/enrollments', enrollmentsRoutes);

const PORT = process.env.PORT || 3001;

async function start() {
  try {
    // Conecta ao MongoDB
    await connectDB();

    console.log('Conexão com o MongoDB estabelecida.');

    // Criar um admin inicial se não existir
    const adminEmail = 'admin@exemplo.com';
    const admin = await User.findOne({ email: adminEmail });

    if (!admin) {
      await User.create({
        name: 'Admin',
        email: adminEmail,
        password: 'admin123',
        role: 'admin',
      });
      console.log('✅ Usuário admin criado: admin@exemplo.com / admin123');
    }

    // Inicia o servidor
    app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));

  } catch (err) {
    console.error('❌ Erro ao iniciar servidor:', err);
    process.exit(1);
  }
}

start();
