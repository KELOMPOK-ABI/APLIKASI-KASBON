'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kasbons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nomorkasbon: {
        type: Sequelize.INTEGER
      },
      Bagian: {
        type: Sequelize.STRING
      },
      Penerima: {
        type: Sequelize.STRING
      },
      TanggalPersekot: {
        type: Sequelize.INTEGER
      },
      Jumlah: {
        type: Sequelize.INTEGER
      },
      Jumlahdibayar: {
        type: Sequelize.INTEGER
      },
      Uraian: {
        type: Sequelize.STRING
      },
      UserID: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('kasbons');
  }
};