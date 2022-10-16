//Complete the Weather API Backend part using openweathermap api
document.querySelector(".search-box").addEventListener("input", async (e) => { 
    const today = new Date()
    const search_city = e.target.value
    console.log(search_city)
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    
    //OpenWeatherMap's API Key URL:
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search_city}&units=metric&appid=eb5de98bbce98647bb5ac29063fcba7b`
    
    //Using Fetch to fetch Data from OpenWeatherMap's API Key URL:
    
    try {
      const res = await fetch(url)
      const output = await res.json()
      console.log(output)
      document.querySelector(".city").innerHTML = output.name + " , " + output.sys.country
      document.querySelector(".date").innerHTML = days[today.getDay()] +
          " " + today.getDate() +
          " " + months[today.getMonth()] +
          " " + today.getFullYear()
      document.querySelector(".temp").innerHTML = output.main.temp + "°c"
      document.querySelector(".weather").innerHTML = output.weather[0].main
      document.querySelector(".hi-low").innerHTML = output.main.temp_min + "°c / " + output.main.temp_max + "°c"
    }
    
    catch (e) {
      console.log(e.message)
    }
    
  })
