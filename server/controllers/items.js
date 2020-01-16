var mongoose = require('mongoose');
var Item = mongoose.model('Item');

module.exports = {

    index: (req, res) => {
        Item.find()
            .sort({ date: -1 })
            .then(items => res.json(items))
    },

    create: (req, res) => {
        const newItem = new Item({
            name: req.body.name
        });

        newItem.save()
            .then(item => res.json(item)) // item = res.data from client>itemAction>addItem payload
            .catch(err => res.status(404).json({ success: false }));
    },

    specific: (req, res) => {
        Item.findById(req.params.id)
            .then(item => res.json(item))
            .catch(err => res.status(404).json({ success: false }));
    },

    update: (req, res) => {
        Item.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { name: req.body.name } },
            { new: true })
            .then(item => res.json(item))
            .catch(err => res.status(404).json({ success: false }));

    },

    delete: (req, res) => {
        Item.findById(req.params.id)
            .then(item => item.remove().then(() => res.json({ success: true })))
            .catch(err => res.status(404).json({ success: false }));
    }

}