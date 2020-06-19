/*
 * GET users listing.
 */
import express = require('express');
const router = express.Router();

const data = [
    {
        JourneyId: 1,
        StationIdFrom: 1,
        StationIdTo: 2,
        StartDate: '18 Jun 2020 14:20',
        TrainNumber: 'B682',
        ClientName: 'Zorro'
    },
    {
        JourneyId: 2,
        StationIdFrom: 3,
        StationIdTo: 4,
        StartDate: '31 Dec 2019 18:20',
        TrainNumber: 'C578',
        ClientName: 'Batman'
    },
    {
        JourneyId: 3,
        StationIdFrom: 5,
        StationIdTo: 6,
        StartDate: '24 Aug 2021 14:20',
        TrainNumber: 'A985',
        ClientName: 'IronMan'
    }
]

router.get('/', (req: express.Request, res: express.Response) => {
    res.json(data);
});

router.get('/:id', (req: express.Request, res: express.Response) => {
    let journey = data.find(ele => ele.JourneyId.toString() === req.params.id);
    if (!journey) {
        const err = new Error('Not Found');
        err['status'] = 404;
        res.status(404).send(`Journey ${req.params.id} not found`);
        return;
    }

    res.json(journey);
});

export default router;