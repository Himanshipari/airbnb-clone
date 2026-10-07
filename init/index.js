// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");

// const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect(mongo_url);
// }

// const initDB = async () => {
//   await Listing.deleteMany({});
//   initData.data = initData.data.map((obj) => ({
//     ...obj,
//     owner: "68c7e457725dda7c4a67fdea",
//   }));
//   await Listing.insertMany(initData.data);
//   console.log("data was intialized");
// };

// initDB();




require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongo_url = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongo_url);
}

const initDB = async () => {
  await Listing.deleteMany({});

  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68c7e457725dda7c4a67fdea",

    // 1. Add a default category to pass validation
    category: "Trending", 

    // 2. Add default GeoJSON map coordinates to pass validation
    geometry: {
      type: "Point",
      coordinates: [77.2090, 28.6139], // Defaulting to New Delhi coordinates
    }
  }));

  await Listing.insertMany(initData.data);
  console.log("data was intialized");
};

initDB();