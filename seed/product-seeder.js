var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/compras', { useNewUrlParser: true, useUnifiedTopology: true });

var products = [
    new Product({

        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpQLtPC9l9DcGyQpdlhWz2-Ttb84Y59Xk2gVDdYjhnALUTadN1',
        title: 'Mario',
        description: 'Para el Switch',
        price: 10

    }),

    new Product({

        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJ3KboCc3fqxecL7K8unGcMXwH0cZW5iw8Avq1tKefKyAK5sHw',
        title: 'Zelda',
        description: 'Link',
        price: 15

    }),

    new Product({

        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_Ucy_J1PbHy-SjoT2wMqNHfsOYHSbYANR6UQrcWkBmblBLJP7',
        title: 'Pokemon',
        description: '8va Generacion',
        price: 12

    }),


];
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }

    });
}

function exit() {
    mongoose.disconnect();
}