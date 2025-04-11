import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Service = sequelize.define('Service', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

export default Service;
