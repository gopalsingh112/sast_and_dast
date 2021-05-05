module.exports = mongoose => {
  const Support = mongoose.model(
    "support",
    mongoose.Schema(
      {
          problem: String,
          warranty: String
      },
      { timestamps: true }
    )
  );

  return Support;
};
