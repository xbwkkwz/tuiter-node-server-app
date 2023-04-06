import mongoose from 'mongoose';

const schema = mongoose.Schema(
  {
  avatarIcon: String,
  userName: String,
  handle: String,
  time: String,
  topic: String,
  title: String,
  tuit: String,
  replies: Number,
  retuits: Number,
  likes: Number,
  liked: Boolean,
  dislikes: Number,
  disliked: Boolean
  }, 
  {collection: 'tuits'}
);
export default schema;
