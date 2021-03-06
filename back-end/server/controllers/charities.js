const Charity = require('../models').Charity;
const Item = require('../models').Item;

module.exports = {
  create(req, res) {
    return Charity
      .create({
        name: req.body.name,
        justGivingCharityId: req.body.justGivingCharityId,
      })
      .then(charity => res.status(201).send(charity))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Charity
      .findAll({
        include:[{
          model: Item,
        }],
      })
      .then(charities => res.status(200).send(charities))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Charity
      .findById(req.params.justGivingCharityId, {
        include: [{
          model: Item,
        }],
      })
      .then(charity => {
        if (!charity) {
          return res.status(404).send({
            message: 'charity not found',
          });
        }
        let dataStructure = charity.dataValues.Items.map(item => item.dataValues)
        res.status(200).send(dataStructure);
      })
      .catch(error => res.status(400).send(error));
  }
};
