import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';
import dotenv from 'dotenv';

dotenv.config(); // Ensures environment variables are loaded

export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if all required fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, email, and password are required' });
        }

        // Validate role (allow only 'customer', 'barber', or 'admin')
        const validRoles = ['customer', 'barber', 'admin'];
        const userRole = role && validRoles.includes(role) ? role : 'customer';

        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user with validated role
        const newUser = await User.create({ name, email, password: hashedPassword, role: userRole });

        // Remove password before sending response
        const { password: _, ...userWithoutPassword } = newUser.toJSON();

        res.status(201).json({ message: 'User registered successfully', user: userWithoutPassword });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if both fields are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Remove password before sending response
        const { password: _, ...userWithoutPassword } = user.toJSON();

        res.json({ token, user: userWithoutPassword });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
