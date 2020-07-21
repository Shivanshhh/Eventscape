const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://strtiwari28:qwerty1@cluster0-8ac9j.mongodb.net/events?retryWrites=true&w=majority', { 
//   useNewUrlParser: true, 
//   useUnifiedTopology: true 
// }
// );

const dotenv = require('dotenv');
mongoose.connect(process.env.MONGO_URL, (err) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log('Mongo Connection Success');
    }
});

