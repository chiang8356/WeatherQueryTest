const { outputURLContents } = require('../service/outputURLContents');
const { findUrlsByYear }  = require('../service/findByYears')
exports.searchRegion = async (req,res) =>{
    var region = req.params.region;
    const data = await outputURLContents(region)
    if (Array.isArray(data) && data.length > 0) {
        res.json(data);
        console.log("ok")
    } else {
        res.status(404).json({ error: '未找到指定地區的資料' });
    }
}
exports.searchByYear = async (req,res) =>{
    var year =req.params.year ;
    const yearData = await findUrlsByYear(year)
    res.json(yearData);
    //console.log(yearData);
}