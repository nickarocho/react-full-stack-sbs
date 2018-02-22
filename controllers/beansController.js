const Bean = require('./../models/Bean');

function create(req, res) {
    Bean.create(req.body)
        .then(bean => res.json(bean).status(200))
        .catch(err => console.log(err));
}

function index(req, res) {
    Bean.find({})
        .then((beans) => res.json(beans).status(200))
        .catch(err => console.log(err));
}

module.exports = {
    create,
    index
}