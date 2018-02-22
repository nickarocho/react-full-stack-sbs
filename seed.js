const Bean = require('./models/Bean');

require('dotenv').config();
require('./config/db');

Bean.remove({})
.then(function() {
    return Bean.create([
        {
            name: "James Beand",
            description: "Smooth.",
            price: 3
        },
        {
            name: "Lima Beans",
            description: "#yummmm",
            price: 123
        },
        {
            name: "Coolbean",
            description: "suups chillz",
            price: 4
        }
    ])
})
.then(function(beans) {
    console.log(beans);
    process.exit();
})