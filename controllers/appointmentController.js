import { Appointment } from '../models/index.js';

export const bookAppointment = async (req, res) => {
    try {
        const { userId, barberId, serviceId, date } = req.body;
        const appointment = await Appointment.create({ userId, barberId, serviceId, date });
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
