//current date in Unicode
var currentDate = Math.floor(Date.now() / 1000) - 31560000;

let dataAboutOrg = [];
$(document).ready(function() { 
    $.getJSON('https://frontend.camp.dev.unit6.ru/get-slides', function(data) {
        dataAboutOrg = data;
        let filteredOrgData = dataAboutOrg
            .filter(companyData => (companyData.active === true 
              && companyData.startDate <= currentDate 
              && companyData.endDate >= currentDate
            ))
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            ;

        console.log(filteredOrgData)
    });
});





  