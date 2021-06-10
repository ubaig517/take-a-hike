require('dotenv').config();

const trailsData = require('./data/trails');
const connectDB = require('./config/db');
const Trail = require('./models/Trail');

connectDB();

const importData = async () => {
  try {
    await Trail.deleteMany({});

    await Trail.insertMany(trailsData);

    console.log('Data Import Success');

    process.exit();
  } catch (error) {
    console.error('Error with data import');
    process.exit(1);
  }
}


importData();