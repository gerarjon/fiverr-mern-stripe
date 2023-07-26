import express from 'express';

const router = express.router();

router.get('/test', (req, res) => {
    res.send('it works')
})

export default router;