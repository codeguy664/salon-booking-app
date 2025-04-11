import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Barber = sequelize.define('Barber', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    experience: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default Barber;
