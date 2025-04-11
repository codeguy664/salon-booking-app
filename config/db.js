import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: console.log, // Set to false to disable logs
    dialectOptions: {
        ssl: process.env.DB_SSL === 'true' ? { require: true, rejectUnauthorized: false } : false
    },
});

// Test database connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected successfully!');
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
    }
})();

export default sequelize;
