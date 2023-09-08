
    document.getElementById("searchButton").addEventListener("click", function () {
    var year = document.getElementById("year").value;
    console.log(year);
    fetch('http://localhost:3000/weather/year/' + year, {
        method: 'GET'
    })
        .then(Response => {
            if (Response.ok) {
                return Response.json();
            } else {
                throw new Error('Failed to fetch data from the backend');
            }
        })
        .then(data => {
            console.log(data)
            var block1 = document.getElementById('block1');
            block1.innerHTML = "";
            block1.appendChild(createTable(data));

        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error(error);
        });
})

document.getElementById("searchBt").addEventListener("click", function () {
    var region = document.getElementById("region").value;
    fetch('http://localhost:3000/weather/region/' + region, {
        method: 'GET'
    })
        .then(Response => {
            if (Response.ok) {
                return Response.json();
            } else {
                throw new Error('Failed to fetch data from the backend');
            }
        })
        .then(data => {
            console.log(data)
            var block2 = document.getElementById("block2");
            block2.innerHTML = " ";
            block2.appendChild(createTableRegion(data));
            createTemperatureChart(data);

        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error(error);
        });
})

