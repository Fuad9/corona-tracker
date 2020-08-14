window.addEventListener("load", () => {
    let newConfirmed = document.querySelector(".newConfirmed");
    let newDeaths = document.querySelector(".newDeaths");
    let newRecovered = document.querySelector(".newRecovered");
    let totalConfirmed = document.querySelector(".totalConfirmed");
    let totalDeaths = document.querySelector(".totalDeaths");
    let totalRecovered = document.querySelector(".totalRecovered");

    let newGlobConfirmed = document.querySelector(".newGlobConfirmed");
    let newGlobDeaths = document.querySelector(".newGlobDeaths");
    let newGlobRecovered = document.querySelector(".newGlobRecovered");
    let totalGlobConfirmed = document.querySelector(".totalGlobConfirmed");
    let totalGlobDeaths = document.querySelector(".totalGlobDeaths");
    let totalGlobRecovered = document.querySelector(".totalGlobRecovered");

    // const api = "http://api.coronatracker.com/v3/analytics/dailyNewStats";

    const api = "https://api.covid19api.com/summary";

    fetch(api)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            //Bangladesh
            newConfirmed.textContent = data.Countries[13].NewConfirmed;
            newDeaths.textContent = data.Countries[13].NewDeaths;
            newRecovered.textContent = data.Countries[13].NewRecovered;
            totalConfirmed.textContent = data.Countries[13].TotalConfirmed;
            totalDeaths.textContent = data.Countries[13].TotalDeaths;
            totalRecovered.textContent = data.Countries[13].TotalRecovered;

            // Global
            newGlobConfirmed.textContent = data.Global.NewConfirmed;
            newGlobDeaths.textContent = data.Global.NewDeaths;
            newGlobRecovered.textContent = data.Global.NewRecovered;
            totalGlobConfirmed.textContent = data.Global.TotalConfirmed;
            totalGlobDeaths.textContent = data.Global.TotalDeaths;
            totalGlobRecovered.textContent = data.Global.TotalRecovered;
        });
});