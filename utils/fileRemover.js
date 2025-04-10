import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const fileRemover = (filename) => {
    fs.unlink(path.join(__dirname, '../uploads', filename), function (err) {
        if(err && err.code == "ENOENT"){
            console.log(`File ${filename} does not exist`)
        } else if(err){
            console.log(`An error occured when trying to remove file ${filename}`)
        } else {
            console.log(`Successfully removed ${filename}`)
        }
    })
}