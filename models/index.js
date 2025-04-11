import sequelize from '../config/db.js';
import User from './user.js';
import Salon from './salon.js';
import Service from './service.js';
import Barber from './barber.js';
import Appointment from './appointment.js';

// Relationships
User.hasMany(Appointment);
Appointment.belongsTo(User);

Salon.hasMany(Barber);
Barber.belongsTo(Salon);

Salon.hasMany(Service);
Service.belongsTo(Salon);

Barber.hasMany(Appointment);
Appointment.belongsTo(Barber);

Service.hasMany(Appointment);
Appointment.belongsTo(Service);

export { sequelize, User, Salon, Service, Barber, Appointment };
