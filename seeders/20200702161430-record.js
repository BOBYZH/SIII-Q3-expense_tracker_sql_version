'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Records', [{
      id: 1,
      name: '吃中東美食',
      category: 'diet',
      date: '2019-10-03',
      month: '10',
      amount: 375,
      merchant: '沙巴巴中東美食',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1
    }, {
      id: 2,
      name: '喝地中海葡萄酒',
      category: 'diet',
      date: '2019-11-11',
      month: '11',
      amount: 555,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1
    }, {
      id: 3,
      name: '繳信用卡費',
      category: 'others',
      date: '2019-12-01',
      month: '12',
      amount: 33333,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1
    }, {
      id: 4,
      name: '買新書桌',
      category: 'domestic',
      date: '2018-12-31',
      month: '12',
      amount: 4800,
      merchant: '宜家家居新店店',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2
    }, {
      id: 5,
      name: '高鐵從左營到台北',
      category: 'traffic',
      date: '2019-04-30',
      month: '04',
      amount: 1445,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2
    }, {
      id: 6,
      name: '看黑魔女2',
      category: 'recreation',
      date: '2019-10-17',
      month: '10',
      amount: 250,
      merchant: '京華城喜滿客影城',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Records', null, {})
  }
}
