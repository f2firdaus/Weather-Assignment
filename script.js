

let i = 0;
function fetchData() {
    if (i < 4) {
        let cities = document.getElementsByClassName("cname");
        let city = `${cities[i].innerHTML}`;
        const api = `https://python3-dot-parul-arena-2.uc.r.appspot.com/test?cityname=${city}`;
    
        fetch(api)
            .then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data);
                let table = document.getElementById('table');

                let dates = new Date()
                let row = document.createElement('tr');
                let tdata = document.createElement('td');
                // city.innerHTML = city;
              let dTime = new Date(data.date_and_time)
              let diff = dates.getTime() - dTime;
              let diff_in_hours=Math.floor(diff / 1000/ 60 /60)
              
              let datetime = document.createElement('td');
              datetime.innerHTML = diff_in_hours;
              // console.log(dTime);
              
              // console.log(diff);
                let description = document.createElement('td');
                let humidity = document.createElement('td')
                let button = document.createElement('button')
                button.classList.add("btnn")
                let temp = document.createElement('td')
                
                table.appendChild(row)
              row.appendChild(tdata).innerHTML = city;
             
              // console.log(dates);
              row.appendChild(description).innerHTML = data.description;
              row.appendChild(temp).innerHTML = data.temp_in_celsius;  
              row.appendChild(humidity).innerHTML = data.humidity_in_percent;
              row.appendChild(datetime)
                row.appendChild(button).innerText = "delete"
                button.addEventListener("click", () => {
                    removeData(row)
                });
                cities[i - 1].classList.add("g-color");
                let nodata = document.getElementById("nodata")
                nodata.classList.add("nd")
                
            })
    } else {
        
        return;
    }
    i++;
}
    function removeData(e) {
        e.remove()
    }
    
    // weatherInfo(data)


// fetchData()

function search() {
    let input1 = document.getElementById("input").value;
    let row = document.getElementsByTagName("tr");
    if (input1 === "London") {
        console.log(row[1]);
      row[1].classList.add("b-color");
    } else if (input1 === "New York") {
      row[2].classList.add("b-color");
    } else if (input1 === "Los Angeles") {
      row[3].classList.add("b-color");
    } else if (input1 === "Las Vegas") {
      row[4].classList.add("b-color");
    } else {
      return;
    }
  }