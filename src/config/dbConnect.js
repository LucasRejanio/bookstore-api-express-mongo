import mongoose from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect(process.env.MONGODG_CONNECTION_STRING);
  return mongoose.connection;
}

export default conectaNaDatabase;
