console.log("2--- Cake Model Set");


const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    rate: {
        type: Number,
        required: [true,'Please enter a rate!'],
        min: [1, 'Rate should be between 1 to 5'],
        max: [5, 'Rate should be between 1 to 5']
    },
    comment: {
        type: String,
        required: [true, 'Please enter the comment!'],
        minlength: [5, 'Comment must be at least 5 characters!']
    }
});

const CakeSchema = new mongoose.Schema({
    baker: {
        type: String,
        required: [true, 'Please enter the name of the baker!'],
        minlength: [3, 'Baker‘s name must be at least 3 characters long!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Please enter the image‘s URL'],
        validate: [validateURL, 'URL is not valid!'],
    },
    comments: {
        type: [RatingSchema],
        required: false
    }
}, { timestamp: true });


function validateURL(value) {
    var RegExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return RegExp.test(value);
}

mongoose.model('Cake', CakeSchema);
mongoose.model('Rating', RatingSchema);
