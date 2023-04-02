import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
  const newData = req.body;
  newData._id = (new Date()).getTime() + '';
  newData.avatarIcon = "nasa-logo.jpg";
  newData.userName = "NASA";
  newData.handle = "NASA";
  newData.time = "0s";
  newData.topic = "Trending";
  newData.title = "";
  newData.replies = 0;
  newData.retuits = 0;
  newData.likes = 0;
  newData.liked = false;
  newData.dislikes = 0;
  newData.disliked = false;
  // tuits.push(newData);
  tuits.unshift(newData);
  res.json(newData);
}

const findTuits = (req, res) => {
  res.json(tuits);
}

const updateTuit = (req, res) => {
  const tId = req.params['tid'];
  const updates = req.body;
  tuits = tuits.map((t) => t._id === tId ? {...t, ...updates} : t);
  res.sendStatus(200);
}

const deleteTuit = (req, res) => {
  const tId = req.params['tid'];
  tuits = tuits.filter(t => t._id !== tId);
  res.sendStatus(200);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}
