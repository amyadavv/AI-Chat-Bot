import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (err) {
        console.log(err);
        throw new Error("Could not connect to MongoDB");
    }
}
async function disconnectFromDatabse() {
    try {
        await disconnect();
    }
    catch (err) {
        console.log(err);
        throw new Error("Could not disconnect from MongoDB");
    }
}
export { connectToDatabase, disconnectFromDatabse };
//# sourceMappingURL=connection.js.map