const urls = require('../static/urls');


const findUrlsByYear = async (year) => {
    const matchingUrls = urls.filter(url => url.includes(`/${year}_`));
    console.log(matchingUrls)

    if (!matchingUrls) {
        return null;
    }
    const jsonDataArray = [];

    try {
        for (const url of matchingUrls) {
            const response = await fetch(url);
            const jsonData = await response.text();
            const regex1 = /<th scope="row" headers="subH-1">([^<]+)<\/th>\s*<td headers="H-1 subH-2">([^<]+)<\/td>/g;
            const regex2 = /<th headers="subH-1">([^<]+)<\/th>\s*<td headers="H-1 subH-2">([^<]+)<\/td>/g;

            const matches1 = [...jsonData.matchAll(regex1)];
            const matches2 = [...jsonData.matchAll(regex2)];
            const allMatches = [...matches1, ...matches2];

            // 提取的内容存入数组
            for (const match of allMatches) {
                jsonDataArray.push({
                    name: match[1],
                    value: match[2]
                });
            }
        }

        return jsonDataArray;
    
    } catch (error) {
        console.error(`錯誤：${error}`);
        return null; 
    }
}
module.exports = { findUrlsByYear }