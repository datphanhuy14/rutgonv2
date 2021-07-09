module.exports = function(sequelize, DataTypes) {
    let user = sequelize.define('User', {
        id : {
            type : DataTypes.BIGINT,
            autoIncrement : true,
            primaryKey : true
        },
        full_name : DataTypes.STRING,
        password: DataTypes.STRING,
        email : {
            type: DataTypes.STRING,
            unique: true
        },
        type : {
            type : DataTypes.INTEGER,
            defaultValue : 0, //0: quản trị viên, 1: nhân viên
            allowNull : false
        },
        strategies : {
            type : DataTypes.STRING
        }
    });
    // user.associate = function (models) {
    //     user.hasMany(models.link, {foreignKey: 'user_id'});
    // };

    return user;
};