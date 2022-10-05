import app from "./app.js";
import {DB_PORT} from "../config.js"

app.listen(DB_PORT, () => {
    console.log(`Server started on port ${DB_PORT}`);
});