let dataAboutOrg = [];
$(document).ready(function() { 
    $.getJSON('https://frontend.camp.dev.unit6.ru/get-slides', function(data) {
        dataAboutOrg = data;
        let filteredOrgData = dataAboutOrg
            .filter(companyData => (companyData.active === true 
            // Уточнить насчет значений currentdate и enddate
            // && company.start <= currentdate &&
            //    company.end >= currentdate
            ))
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            ;

        console.log(filteredOrgData)
    });
});





  