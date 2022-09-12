export const User = sequelize.define('Products', {
    Id: {
        type: DataTypes.UUIDV4,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING
    }
});