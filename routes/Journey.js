"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET users listing.
 */
const express = require("express");
const router = express.Router();
const data = [
    {
        JourneyId: 1,
        From: 'Los Angeles',
        To: 'Madrid',
        Date: '18 Jun 2020 14:20',
        ClientName: 'Zorro'
    },
    {
        JourneyId: 2,
        From: 'Gotham',
        To: 'DarkWeb',
        Date: '18 Jun 2020 14:20',
        ClientName: 'Batman'
    },
    {
        JourneyId: 3,
        From: 'Earth',
        To: 'Moon',
        Date: '18 Jun 2020 14:20',
        ClientName: 'IronMan'
    }
];
router.get('/', (req, res) => {
    res.json(data);
});
router.get('/:id', (req, res) => {
    let journey = data.find(ele => ele.JourneyId.toString() === req.params.id);
    if (!journey) {
        const err = new Error('Not Found');
        err['status'] = 404;
        res.status(404).send(`Journey ${req.params.id} not found`);
        return;
    }
    res.json(journey);
});
exports.default = router;
//# sourceMappingURL=Journey.js.map