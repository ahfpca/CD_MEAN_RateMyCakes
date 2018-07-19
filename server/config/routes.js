console.log("3--- Routes Set");

const cakesCtrl = require('./../controllers/cakes.ctrl');

module.exports = (app) => {
    // Retrieve an Cake
    app.get('/api/cakes/:id', (req, res) => {
        cakesCtrl.getOne(req, res);
    });

    // Retrieve all Cakes
    app.get('/api/cakes', (req, res) => {
        cakesCtrl.getAll(req, res);
    });

    // Create an Cake
    app.post('/api/cakes', (req, res) => {
        cakesCtrl.create(req, res);
    });

    // Update an Cake
    app.put('/api/cakes/:id', (req, res) => {
        cakesCtrl.update(req, res);
    });

    // Delete an Cake
    app.delete('/api/cakes/:id', (req, res) => {
        cakesCtrl.delete(req, res);
    });
}