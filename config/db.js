import mongoose from "mongoose";

const connectedDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected...');
    } catch(error) {
        console.log('Error: ' + error.message);
        process.exit(1);
    }
}
export default connectedDB