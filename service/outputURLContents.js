const urls = require('../static/urls');

// 查詢每一個地區的溫度來的溫度
const outputURLContents = async (region) => {
    const regionData = [];
    let dataCount = 0; // 用於追蹤每個地區的數據數量

    for (const url of urls) {
        try {
            const response = await fetch(url);
            const data = await response.text();
            //console.log(data)


            // 使用正則表達式提取資料
            const regex = new RegExp(`<th\\s*(?:scope="row"\\s*)?headers="subH-1">${region}</th>\\s*<td headers="H-1 subH-2">([^<]+)</td>`, 'g');

            const matches = [...data.matchAll(regex)];

            // 如果有數據，則增加數據計數
            if (matches.length > 0) {
                dataCount++;
            }

            // 提取的内容存入物件，然後添加到陣列中
            for (const match of matches) {
                const temperature = match[1];
                regionData.push({ year: 2009 + dataCount - 1, temperature});
            }
        } catch (error) {
            console.error(`錯誤：${error}`);
        }
    }

    return regionData;
};

module.exports = { outputURLContents };
