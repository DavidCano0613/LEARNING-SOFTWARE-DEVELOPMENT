import mongoose from 'mongoose'

// Ayuda a crear el schema del usuario

const userSchema = mongoose.Schema({
  _id: String,
  name: String
});

const userModel = mongoose.model('User',userSchema);

export default userModel; 