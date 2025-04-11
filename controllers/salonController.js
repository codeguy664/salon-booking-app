import { Salon } from '../models/index.js';

export const createSalon = async (req, res) => {
    try {
        const { name, address, phone } = req.body;
        const salon = await Salon.create({ name, address, phone });
        res.status(201).json(salon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllSalons = async (req, res) => {
    try {
        const salons = await Salon.findAll();
        res.json(salons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
