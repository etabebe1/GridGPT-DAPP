const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "Pease Provide your username"],
      unique: true,
    },
    email: {
      type: String,
      require: [true, "Pease Provide your email"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Please provide your password!"],
    },
    avatar: {
      type: String,
      default: "data:image/png;base64,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"
    },
  },
  { timestamps: true }
);

//*:::::: used by the register route to encrypt password automatically ::::::*//
userSchema.pre("save", async function (next) {
  //Check if the password has been modified
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = bcrypt.hashSync(this.password, salt);
  } catch (error) {
    next(error);
  }
});

//*:::::: used by the login route to compare password after password is provided ::::::*//
userSchema.methods.comparePassword = async function (candidatePassword) {
  const matchTrue = await bcrypt.compare(candidatePassword, this.password);
  return matchTrue;
};

module.exports = mongoose.model("user", userSchema);
