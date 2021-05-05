module.exports = mongoose => {
  const Device = mongoose.model(
    "device",
    mongoose.Schema(
      {
        company: String,
        imageurl: String,
        model: String,
        productid: String,
        warranty: String
      },
      { timestamps: true }
    )
  );

  return Device;
};