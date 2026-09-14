import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    aboutme: {
      type: String,
      required: true,
    },
    noofprojects: {
      type: String,
    },
    yearsofexperience: {
      type: String,
    },
    noofclients: {
      type: String,
    },
    skills: {
      type: String,
    },
  },
  { timestamps: true }
);

// Delete existing cached model to force Next.js to reload the new schema
if (mongoose.models.About) {
  delete mongoose.models.About;
}

const About = mongoose.model("About", AboutSchema);

export default About;