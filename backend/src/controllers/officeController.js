const { Office, Enrollment, User } = require('../models');

exports.createOffice = async (req, res) => {
    try {
        const { title, description, date, capacity } = req.body;
        const office = await Office.create({ title, description, date, capacity });
        res.status(201).json(office);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao criar oficina' });
    }
};

exports.listOffices = async (req, res) => {
    try {
        const offices = await Office.find().populate('responsibleId', 'id name email');
        res.json(offices);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao listar oficinas' });
    }
};

exports.getOffice = async (req, res) => {
    try {
        const id = req.params.id;
        const office = await Office.findById(id)
            .populate('responsibleId', 'id name email');
        if (!office) return res.status(404).json({ message: 'Oficina não encontrada' });

        const enrollments = await Enrollment.find({ officeId: id }).populate('userId', 'id name email');
        const participants = enrollments.map(e => e.userId);

        res.json({ ...office.toObject(), participants });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao buscar oficina' });
    }
};

exports.deleteOffice = async (req, res) => {
    try {
        const id = req.params.id;
        const office = await Office.findById(id);
        if (!office) return res.status(404).json({ message: 'Oficina não encontrada' });

        await Office.deleteOne({ _id: id });
        res.json({ message: 'Oficina removida' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao remover oficina' });
    }
};
