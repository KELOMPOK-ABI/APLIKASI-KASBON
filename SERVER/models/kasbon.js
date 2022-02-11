'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kasbon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kasbon.init({
    Nomorkasbon: DataTypes.INTEGER,
    Bagian: DataTypes.STRING,
    Penerima: DataTypes.STRING,
    TanggalPersekot: DataTypes.INTEGER,
    Jumlah: DataTypes.INTEGER,
    Jumlahdibayar: DataTypes.INTEGER,
    Uraian: DataTypes.STRING,
    UserID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kasbon',
  });
  return kasbon;
};