import { DataTypes } from "sequelize";
import db from '../db/conn.js';

//User
import User from "./User.js";

const Tought = db.define('Tought', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
})

Tought.belongsTo(User);
User.hasMany(Tought);


export default Tought;