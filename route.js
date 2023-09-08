const express = require('express');
const router = express.Router();
const search = require('./controllers/searchRegion')

router.get('/weather/region/:region', [
    search.searchRegion
]);
router.get('/weather/year/:year' ,[
    search.searchByYear
])

module.exports = router;
