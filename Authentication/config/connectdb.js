import mongoose from "mongoose";

const dbConnect = async (DATABASE_URL) => {
	try {
		mongoose.set("strictQuery", false);
		const conn = await mongoose.connect(DATABASE_URL);
		console.log(`Database connected through host ${conn.connection.host}`);
	} catch (error) {
		console.log(`Error is: ${error}`);
	}
};

export default dbConnect;
