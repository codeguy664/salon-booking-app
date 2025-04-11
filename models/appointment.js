import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Appointment = sequelize.define('Appointment', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('pending', 'confirmed', 'completed', 'cancelled'),
        defaultValue: 'pending'
    }
});

export default Appointment;
