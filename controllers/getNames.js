let allData = [];
let xmlhttp = new XMLHttpRequest();
let url = "js/data.json";
let unitinput = document.getElementById("unitinput");
let resultsWrapper = $("#results-wrapper");

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(this.responseText);
          for (var i = 0; i < data.length; i++) {
                var newUnit = {
                  name : data[i].name,
                  strongvs : data[i].strongvs,
                  weakvs : data[i].weakvs,
                  uniqueweakvs : data[i].uniqueweakvs
                };
                allData.push(newUnit);
              };
            };
    }

xmlhttp.open("GET", url, true);
xmlhttp.send();

function searcher(query) {
    resultsWrapper.empty();
    let siegeFlag = "";
    if (query < 2) { resultsWrapper.addClass("d-none"); } else {resultsWrapper.removeClass("d-none"); }
    let regex = new RegExp(query, "i");

    $.each(allData, function (key, val) {
        if (val.name.search(regex) != -1) {
            if (val.name === "Scorpion" || val.name === "Mangonel" || val.name === "Onager" || val.name === "Siege Onager") {
              siegeFlag = "Please note that by default, all siege units in the Scorpion and Mangonel line are weak in melee and strong in ranged!"
            }
            resultsWrapper.append(`
            <p id="unitName" class="unitname pt-3 my-0 font-weight-bold">${val.name}</p>
            <p id="unitStrong" class="strongvs  my-0 py-0"><span class="boldtitle strongvs">Strong vs:</span> ${val.strongvs}</p>
            <p id="unitWeak" class="weakvs  my-0 py-0"><span class="boldtitle weakvs">Weak vs:</span> ${val.weakvs}</p>
            <p id="unitWeakUnique" class="weakuniquevs  my-0 py-0"><span class="boldtitle weakuniquevs">Weak vs. unique units: </span> ${val.uniqueweakvs}</p>
            <small class="text-info my-0 py-0 font-weight-bold">${siegeFlag}</small>
            `);

        } 
    });

}

module.exports = {
    allData
}