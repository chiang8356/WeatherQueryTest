//建立地區及溫度的表格
function createTable(data) {
    var table = document.createElement("table");

    var headerRow = document.createElement("tr");
    var header1 = document.createElement("th");
    header1.textContent = "地區";
    var header2 = document.createElement("th");
    header2.textContent = "溫度";

    headerRow.appendChild(header1);
    headerRow.appendChild(header2);

    table.appendChild(headerRow);

    data.forEach(item => {
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        cell1.textContent = item.name;
        var cell2 = document.createElement("td");
        cell2.textContent = item.value;

        row.appendChild(cell1);
        row.appendChild(cell2);

        table.appendChild(row);
    });

    return table;
}

//建立year及溫度的表格
function createTableRegion(data) {
    var tableRegion = document.createElement("table");

    var headerRow = document.createElement("tr");

    var header1 = document.createElement("th");
    header1.textContent = "西元";
    var header2 = document.createElement("th");
    header2.textContent = "溫度";

    headerRow.appendChild(header1);
    headerRow.appendChild(header2);

    tableRegion.appendChild(headerRow);

    data.forEach(item => {
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        cell1.textContent = item.year;
        var cell2 = document.createElement("td");
        cell2.textContent = item.temperature;

        row.appendChild(cell1);
        row.appendChild(cell2);

        tableRegion.appendChild(row);
    });

    return tableRegion;
}
//製作圖表
function createTemperatureChart(data) {
    const ctx = document.getElementById('temperatureChart').getContext('2d');
    
    // 从数据中提取年份和温度
    const years = data.map(entry => entry.year);
    const temperatures = data.map(entry => parseFloat(entry.temperature));

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: '温度',
                data: temperatures,
                borderColor: 'blue',
                backgroundColor: 'lightblue',
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}