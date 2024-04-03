const router = require("express").Router();
const Game = require("../models/Game");

// create a new game
router.route("/add").post((req, res) => {
    const { GameTitle, GameGenre, RAM, GPU, ROM } = req.body;

    const newGame = new Game({
        GameTitle,
        GameGenre,
        RAM,
        GPU,
        ROM
    });

    newGame.save()
        .then(() => {
            res.json("Game Created");
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ error: "Error creating the game" });
        });
});

// Get all games
router.route("/").get((req, res) => {
    Game.find()
        .then((games) => {
            res.json(games);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ error: "Error fetching games" });
        });
});

// Update a game by ID
router.route("/update/:id").put(async (req, res) => {
    try {
        const gameId = req.params.id;
        const { GameTitle, GameGenre, RAM, GPU, ROM } = req.body;

        const updatedGame = {
            GameTitle,
            GameGenre,
            RAM,
            GPU,
            ROM
        };

        const result = await Game.findByIdAndUpdate(gameId, updatedGame, { new: true });

        if (!result) {
            return res.status(404).json({ error: "Game not found" });
        }

        return res.status(200).json({ status: "Game Updated", game: result });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Error with updating game", error: err.message });
    }
});

// Delete a game by ID
router.route("/delete/:id").delete(async (req, res) => {
    const gameId = req.params.id;
    await Game.findByIdAndDelete(gameId)
        .then(() => {
            res.status(200).send({ status: "Game deleted" });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with deleting game", error: err.message });
        });
});

// Get a game by ID
router.route("/get/:id").get(async (req, res) => {
    const gameId = req.params.id;
    const game = await Game.findById(gameId)
        .then((game) => {
            res.status(200).send({ status: "Game fetched", game });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with getting game", error: err.message });
        });
});

// Search games by title
router.get('/search', async (req, res) => {
  const { GameTitle } = req.query;

  try {
    const regex = new RegExp(GameTitle, 'i'); // Case-insensitive regex pattern for search
    const games = await Game.find({ GameTitle: regex }); // Find games with matching title

    res.status(200).json(games);
  } catch (error) {
    console.error('Error during search:', error);
    res.status(500).json({ error: 'Error with search' });
  }
});

module.exports = router;


module.exports = router;
