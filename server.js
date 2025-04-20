import express from "express";
import dotenv from "dotenv";
import path from "path"
import connectedDB from "./config/db.js";
import routes from "./routes/userRoutes.js";
import { errorResponseHandler, invalidURLHandler } from "./middleware/errorHandler.js";
import { fileURLToPath } from "url";

dotenv.config();
connectedDB()
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Server is running!!")
})
app.use('/api/users', routes)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(invalidURLHandler)
app.use(errorResponseHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Listening on port ' + PORT + '!!!'))