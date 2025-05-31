const express = require('express');
const router = express.Router();
const Car = require('../models/Car.js');

router.get('/', async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
});

router.get('/:id', async (req, res) => {
    const cars = await Car.findOne();
    res.json(cars);
});

router.post('/', async (req, res) => {
    let car = new Car(req.body);
    await car.save();
    console.log(car)
    res.json({
        status: 'Car Saved'
    })
})

router.put('/:id', async (req, res) => {
    await Car.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status: 'Car Updated'
    });
});

router.delete('/:id', async (req, res) => {
    await Car.findByIdAndDelete(req.params.id);
    res.json({
        status: 'Car Deleted'
    });
});
module.exports = router;