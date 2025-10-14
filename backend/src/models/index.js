const mongoose = require('mongoose');
const User = require('./user');
const Office = require('./office');
const Enrollment = require('./enrollment');

// Função para conectar ao MongoDB
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/seu_banco', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Conectado ao MongoDB com sucesso!');
    } catch (error) {
        console.error('❌ Erro ao conectar ao MongoDB:', error);
        process.exit(1);
    }
}

// Exporta conexão e modelos
module.exports = {
    connectDB,
    User,
    Office,
    Enrollment,
};