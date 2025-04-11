import { Barber } from '../models/index.js';

export const addBarber = async (req, res) => {
    try {
        const { name, experience, salonId } = req.body;
        const barber = await Barber.create({ name, experience, salonId });
        res.status(201).json(barber);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllBarbers = async (req, res) => {
    try {
        const barbers = await Barber.findAll();
        res.json(barbers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
