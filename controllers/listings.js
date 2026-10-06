// const { Query } = require("mongoose");
// const Listing = require("../models/listing");
// const maptilerClient = require("@maptiler/client");
// const mapToken = process.env.MAP_TOKEN;
// maptilerClient.config.apiKey = mapToken;

// module.exports.index = async (req, res) => {
//   const allListings = await Listing.find({});
//   res.render("./listings/index.ejs", { allListings });
// };

// module.exports.renderNewForm = (req, res) => {
//   res.render("listings/new.ejs");
// };

// module.exports.showListing = async (req, res) => {
//   let { id } = req.params;
//   const listing = await Listing.findById(id)
//     .populate({
//       path: "reviews",
//       populate: {
//         path: "author",
//       },
//     })
//     .populate("owner");
//   if (!listing) {
//     req.flash("error", "Listing you requested ror does not exist!");
//     return res.redirect("/listings");
//   }
//   return res.render("listings/show.ejs", { listing });
// };

// module.exports.createListing = async (req, res, next) => {
//   const result = await maptilerClient.geocoding.forward(
//     req.body.listing.location,
//     {
//       limit: 1,
//     }
//   );

//   let url = req.file.path;
//   let filename = req.file.filename;
//   const newListing = new Listing(req.body.listing);
//   newListing.owner = req.user._id;
//   newListing.image = { url, filename };
//   newListing.geometry = result.features[0].geometry;
//   let savedListings = await newListing.save();

//   // console.log(savedListings);

//   req.flash("success", "New Listing Created!");
//   res.redirect("/listings");
// };

// module.exports.renderEditForm = async (req, res) => {
//   let { id } = req.params;
//   const listing = await Listing.findById(id);
//   if (!listing) {
//     req.flash("error", "Listing your requested for does not exist!");
//     return res.redirect("/listings");
//   }
//   let originalImageUrl = listing.image.url;
//   originalImageUrl = originalImageUrl.replace(
//     "/uploads",
//     "/upload/h_300,w_250"
//   );
//   res.render("./listings/edit.ejs", { listing, originalImageUrl });
// };

// module.exports.updateListing = async (req, res) => {
//   let { id } = req.params;
//   let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//   if (typeof req.file !== "undefined") {
//     let url = req.file.path;
//     let filename = req.file.filename;
//     listing.image = { url, filename };
//     await listing.save();
//   }
//   req.flash("success", "Listing Updated!");
//   res.redirect("/listings");
// };

// module.exports.destroyListing = async (req, res) => {
//   let { id } = req.params;
//   let deleteListing = await Listing.findByIdAndDelete(id);
//   console.log(deleteListing);
//   req.flash("success", "Listing Deleted!");
//   res.redirect("/listings");
// };







const { Query } = require("mongoose");
const Listing = require("../models/listing");
const maptilerClient = require("@maptiler/client");
const mapToken = process.env.MAP_TOKEN;
maptilerClient.config.apiKey = mapToken;

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested ror does not exist!");
    return res.redirect("/listings");
  }
  return res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  try {
    // 1. Check if an image was actually uploaded
    if (!req.file) {
      req.flash("error", "You must provide an image for the listing.");
      return res.redirect("/listings/new");
    }

    // 2. Geocode the location
    const result = await maptilerClient.geocoding.forward(
      req.body.listing.location,
      { limit: 1 }
    );

    // 3. Create the new listing
    const newListing = new Listing(req.body.listing);

    // 4. Safely check if MapTiler found the location
    if (result.features && result.features.length > 0) {
      newListing.geometry = result.features[0].geometry;
    } else {
      req.flash("error", "Could not find that location. Please try a more specific address.");
      return res.redirect("/listings/new");
    }

    let url = req.file.path;
    let filename = req.file.filename;

    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    await newListing.save();

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");

  } catch (err) {
    // THIS is the magic part. If it fails, it prints the exact reason in your VS Code terminal!
    console.error("ERROR CREATING LISTING: ", err.message);
    console.error(err);

    req.flash("error", "Something went wrong. Check the terminal for details.");
    res.redirect("/listings/new");
  }
};


module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing Updated!");
  res.redirect("/listings");
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deleteListing = await Listing.findByIdAndDelete(id);
  console.log(deleteListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};

