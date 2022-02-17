function sortByPopulation(property){  
    return function(a,b){
       if(a[property] > b[property])  
          return -1;  
       else if(a[property] < b[property])  
          return 1;  
   
       return 0;  
    }  
}
function sortByValue(jsObj){
    var sortedArray = [];
    for(var i in jsObj)
    {
        console.log(i)
        // Push each JSON Object entry in array by [value, key]
        sortedArray.push([jsObj[i], i]);
    }
    return sortedArray.sort();
}

function dataVisualization(country,width,data){
    var row = document.createElement("div")
    row.className = "row my-2 mx-0 p-0"
    var col1 = document.createElement("div")
    col1.className = "col-md-2"
    col1.innerHTML = country
    var col2 = document.createElement("div")
    col2.className = "col-md-7"
    var progress = document.createElement("div")
    progress.className = "progress bg-white"
    var bar = document.createElement("div")
    bar.className = "progress-bar bg-warning"
    bar.role = "progressbar"
    bar.style = width
    var col3 = document.createElement("div")
    col3.className = "col-md-3"
    col3.innerHTML = data

    row.appendChild(col1)
    progress.appendChild(bar)
    col2.appendChild(progress)
    row.appendChild(col2)
    row.appendChild(col3)
    section.appendChild(row)
}
function widthCal(value,max){
    var data = (value/max) * 100
    return "width : " + data + "%"
    
}
let languages = [{}]
countries.forEach(function(data,index){
    languages.map(function(langs){
        data["languages"].map(function(countryLangs){
            if(langs[countryLangs] == undefined){
                langs[countryLangs] = 1
            }
            else if(typeof(langs[countryLangs]) == "number"){
                langs[countryLangs] += 1
            }
        })
    })
})
console.log(languages)
var population = countries.sort(sortByPopulation("population"))
var language = Object.keys(languages[0]).sort(function(a,b){return languages[0][b]-languages[0][a]})
var section = document.getElementById("sectionGraph")
var populationBtn = document.getElementById("population")
var txt = document.getElementById("info-text")
var languageBtn = document.getElementById("languages")
let amount = 10

populationBtn.addEventListener("click",function(){
    section.innerHTML = ""
    txt.innerHTML = amount + " Most populated countries in the world"

    for (let i = 0; i < amount; i++) {
        dataVisualization(population[i]["name"],widthCal(population[i]["population"],population[0]["population"]),population[i]["population"])
    }
})
languageBtn.addEventListener("click",function(){
    section.innerHTML = ""
    txt.innerHTML = amount + " Most spoken languages in the world"

    for (let i = 0; i < amount; i++) {
        dataVisualization(language[i],widthCal(languages[0][language[i]],languages[0][language[0]]),languages[0][language[i]])
    }
})
console.log(language[0])
console.log(languages[0][language[0]])
//languages[0][language[0]]
