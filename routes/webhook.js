/**
 * Created by rober on 06/01/2017.
 */
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    console.log(req);
    res.send('It works!');
});

router.get('/facebook', function(req, res) {
    if (
        req.query['hub.mode'] == 'subscribe' &&
        req.query['hub.verify_token'] == 'tokenface'
    ) {
        res.send(req.query['hub.challenge']);
    } else {
        res.sendStatus(400);
    }
});

router.post('/facebook', function(req, res) {
    console.log('Facebook request body:');
    console.log(req.body);
    // Process the Facebook updates here
    res.sendStatus(200);
});

module.exports = router;
