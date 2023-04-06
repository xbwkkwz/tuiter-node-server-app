// import posts from "./tuits.js";
// let tuits = posts;
import * as tuitsDao from './tuits-dao.js';

// now it's asynchronous function
const createTuit = async (req, res) => {
  const newData = req.body;
  // newData._id = (new Date()).getTime() + '';
  newData.avatarIcon = "nasa-logo.jpg";
  newData.userName = "NASA";
  newData.handle = "NASA";
  newData.time = "0s";
  newData.topic = "Trending";
  newData.title = "News from NASA";
  newData.replies = 0;
  newData.retuits = 0;
  newData.likes = 0;
  newData.liked = false;
  newData.dislikes = 0;
  newData.disliked = false;
  // tuits.push(newData);
  // tuits.unshift(newData);
  const insertedTuit = await tuitsDao.createTuit(newData);
  res.json(insertedTuit);
}

// now it's asynchronous function
const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
}

const updateTuit = async (req, res) => {
  const tId = req.params['tid'];
  const updates = req.body;
  // tuits = tuits.map((t) => t._id === tId ? {...t, ...updates} : t);
  const status = await tuitsDao.updateTuit(tId, updates);
  // res.sendStatus(200);
  res.json(status);
}

const deleteTuit = async (req, res) => {
  const tId = req.params['tid'];
  // tuits = tuits.filter(t => t._id !== tId);
  const status = await tuitsDao.deleteTuit(tId);
  // res.sendStatus(200);
  res.json(status);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}
