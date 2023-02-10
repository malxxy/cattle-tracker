const router = require('express').Router();
const { Post, User } = require('../../models');

// New Post

router.post('/', async (req, res) => {
    console.log("New Post")
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
            username: req.session.username
        });
        console.log(newPost)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;
