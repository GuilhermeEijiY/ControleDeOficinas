const { Enrollment, Office, User } = require('../models');

exports.enroll = async (req, res) => {
    try {
        const userId = req.user.id; // aluno autenticado
        const { officeId } = req.body;

        const office = await Office.findById(officeId).populate('participants');
        if (!office) return res.status(404).json({ message: 'Oficina não encontrada' });

        // verificar capacidade
        if (office.capacity && office.participants?.length >= office.capacity) {
            return res.status(400).json({ message: 'Vagas esgotadas' });
        }

        // evitar duplicidade
        const existing = await Enrollment.findOne({ userId, officeId });
        if (existing) return res.status(400).json({ message: 'Usuário já inscrito' });

        const enrollment = await Enrollment.create({ userId, officeId });
        res.status(201).json(enrollment);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao inscrever' });
    }
};

exports.listEnrollmentsByOffice = async (req, res) => {
    try {
        const officeId = req.params.officeId;
        const enrollments = await Enrollment.find({ officeId }).populate('userId', 'id name email');
        if (!enrollments.length) return res.status(404).json({ message: 'Nenhum aluno inscrito ou oficina não encontrada' });

        const participants = enrollments.map(e => e.userId);
        res.json(participants);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao listar inscrições' });
    }
};

exports.listUserEnrollments = async (req, res) => {
    try {
        const userId = req.user.id;
        const enrollments = await Enrollment.find({ userId }).populate('officeId');
        const offices = enrollments.map(e => e.officeId);
        res.json(offices);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao listar oficinas do usuário' });
    }
};
