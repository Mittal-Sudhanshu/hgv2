const express = require("express");
const app = express();
module.exports = app;
const PORT = 8000;
const {admin}=require('./admin/adminBro')
const {adminRouter}=require('./admin/adminBro')
const dotenv = require("dotenv");
const userRoutes = require("./routes/user_routes");
const announcementRoutes = require("./routes/announcement_routes");
const feedRoutes = require("./routes/feed_routes");
const wingRoutes = require("./routes/wing_routes");
const levelRoutes = require("./routes/level_routes");
const topicRoutes=require("./routes/topic_routes");
const subtopicRoutes=require("./routes/subtopic_routes");
const { connectDB } = require("./database/database");
const bodyParser = require('body-parser');
const cors = require("cors");
const options = {
  origin: ["*","http://localhost:3000", "https://hgv2.vercel.app"],
  useSuccessStatus: 200,
};
dotenv.config();
app.use(cors(options)); 

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
app.use(bodyParser.json());
app.use(admin.options.rootPath, adminRouter)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/feeds", feedRoutes);
app.use("/api/wings", wingRoutes);
app.use("/api/levels", levelRoutes);
app.use("/api/announcements", announcementRoutes);
app.use("/api/topics",topicRoutes);
app.use('/api/subtopics',subtopicRoutes);
