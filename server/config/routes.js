var items = require('./../controllers/items.js');
// var path = require('path');

module.exports = function (app) {

    app.get('/items', items.index);
    app.post('/items', items.create);
    app.get('/items/:id', items.specific);
    app.put('/items/:id', items.update);
    app.delete('/items/:id', items.delete);

    // app.all("*", (req, res, next) => {
    //     res.sendFile(path.resolve("./public/dist/public/index.html"))
    // });

}