console.log("4--- Cakes Controller Set");

const mongoose = require('mongoose');

const Cake = mongoose.model('Cake');

module.exports = {
    getAll: (req, res) => {
        Cake.find({}, (err, records) => {
            if (err) {
                res.json({ message: "Error", error: err });
            } else {
                res.json({ message: "Success", cakes: records });
            }
        });
    },
    getOne: (req, res) => {
        Cake.findOne({_id: req.params.id}, (err, record) => {
            if (err) {
                res.json({ message: "Error", error: err });
            } else {
                res.json({ message: "Success", cake: record });
            }
        });
    },
    create: (req, res) => {
        const cakeObj = new Cake();
        cakeObj.baker = req.body.baker;
        cakeObj.imageUrl = req.body.imageUrl;

        cakeObj.save((err, record) => {
            if (err) {
                res.json({ message: "Error", error: err });
            } else {
                res.json({ message: "Success", cake: record });
            }
        });
    },
    update: (req, res) => {
        Cake.findOne({ _id: req.params.id }, (err, cake) => {
            if (err) {
                res.json({ message: "Record not found!", error: err });
            } else {
                cake.baker = req.body.baker;
                cake.imageUrl = req.body.imageUrl;
                cake.comments = req.body.comments;

                cake.save((err) => {
                    if (err) {
                        res.json({ message: "Error", error: err });
                    } else {
                        res.json({ message: "Success" });
                    }
                });
            }
        });
    },
    delete: (req, res) => {
        Cake.findOneAndDelete({ _id: req.params.id }, (err) => {
            if (err) {
                res.json({ message: "Error", error: err });
            } else {
                res.json({ message: "Success" });
            }
        });
    }
}
