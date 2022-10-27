const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const minTemp = document.getElementById('min_temp');
const maxTemp = document.getElementById('max_temp');
const day = document.getElementById('day');
const today_date = document.getElementById('today_date');
const tempInformation = document.getElementById('tempInformation');

const date = new Date();

const getInfo = async(e)=>{
    e.preventDefault();
    let cityVal = cityName.value; 
    if(cityVal === ""){
        day.innerText = ` `;
        today_date.innerText = ` `;
        temp_status.innerHTML = ``;
        temp.innerText = ` `;
        city_name.innerText = ` `;
        city_name.innerText = `The search field is empty. Enter a city name to see the weather report.`
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6193b44079814b346c784fae671e7241`
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            // console.log(arrdata);
            arrDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            arrMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            day.innerText = arrDay[date.getDay()];
            today_date.innerText = `${date.getDate()} ${arrMonth[date.getMonth()]}`;
            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp.innerText = `${arrdata[0].main.temp}\u00B0C`;
            minTemp.innerText = `MIN ${arrdata[0].main.temp_min}\u00B0C`;
            maxTemp.innerText = `MAX ${arrdata[0].main.temp_max}\u00B0C`;
            const tempMood = arrdata[0].weather[0].main;
            
            temp_status.innerText = tempMood;

            // if(tempMood == "Clear"){
            //     temp_status.innerHTML = `<i class="fa-solid fa-sun" style="color: #eccc68"></i>`;                
            // }
            // else if(tempMood == "Clouds"){
            //     temp_status.innerHTML = `<i class="fa-solid fa-cloud" style="color: #f1f2f6"></i>`;                
            // }
            // else if(tempMood == "Rain"){
            //     temp_status.innerHTML = `<i class="fa-solid fa-cloud-rain" style="color: #f1f2f6"></i>`;                
            // }
            // else{
            //     temp_status.innerHTML = `<i class="fa-solid fa-sun"></i>`;                
            // }
        }catch{
            // ADD data_hidden in html
            day.innerText = ` `;
            today_date.innerText = ` `;
            // city_name.innerText = ` `;
            // minTemp.innerText = ` `;
            temp_status.innerHTML = `No results`;
            // maxTemp.innerText = ` `;
            // temp.innerText = ` `;
            // city_name.innerText = ` `;
        }
    }
}
submitBtn.addEventListener("click", getInfo);