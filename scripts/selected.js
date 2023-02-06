(function () 
{

// 4 API call for each page of cat breed json data (alpha ordered)
	let firstAPICall = fetch("https://catfact.ninja/breeds?page=1");
	let secondAPICall = fetch("https://catfact.ninja/breeds?page=2");
	let thirdAPICall = fetch("https://catfact.ninja/breeds?page=3");
	let fourthAPICall = fetch("https://catfact.ninja/breeds?page=4");
	Promise.all([firstAPICall, secondAPICall, thirdAPICall, fourthAPICall])
  		.then(values => Promise.all(values.map(value => value.json())))
  		.then(allCatPages => {

// targeted mapped cat breed data
	const allCats =  allCatPages.map(x => x.data);

// combined cat breed data pages to singluar coatArr of 98 objects 
	const largeNumcats = allCats[0].concat(allCats[1], allCats[2], allCats[3]);
	
// reduced number of cat breeds by half to 48 objects				
	function nthNum(arr, nth) 
	{
		const smallNumCats = [];
	  
		for (let i = 0; i < arr.length; i += nth) 
		{
		  smallNumCats.push(arr[i]);
		}
	
		return smallNumCats;
	  }
// logs data for all 48 cat objects
	  const cats = nthNum(largeNumcats, 2);
	  console.log(cats);

// coatArr of breeds 
	const breeds = [];
	cats.forEach(function(el){
		  	breeds.push(el.breed)
	  });
	  
	  console.log(breeds);
//-----------------------------------------------------------------------------

// amalgamating COAT 
// long/short: short/long
let longShort = cats.filter(x => x.coat === 'Long/short');
for (let i = 0; i < longShort.length; i++) 
{
    longShort[i].coat = 'Short/Long';
}
//  
let shortHairless = cats.filter(x => x.coat === 'Short/Hairless');
for (let i = 0; i < shortHairless.length; i++) 
{
    shortHairless[i].coat = 'Hairless';
}

// creating filters for COAT 
// DEFAULT SELECT
const defaultCoat = 'Coat';

// SHORT COAT 
const short = cats.filter(x => x.coat === 'Short');

// SHORT/LONG COAT
const shortLong = cats.filter(x => x.coat === 'Short/Long');

// MEDIUM COAT
const med = cats.filter(x => x.coat === 'Medium');

// LONG COAT
const long = cats.filter(x => x.coat === 'Long');

// SEMI-LONG COAT
const semi = cats.filter(x => x.coat === 'Semi-long');

// REX COAT
const rex = cats.filter(x => x.coat === 'Rex');

// HAIRLESS COAT
const hairless = cats.filter(x => x.coat === 'Hairless');

// NO COAT DATA
let noneCoat = cats.filter(x => x.coat === '');
    for (let i = 0; i < noneCoat.length; i++) 
    {
        noneCoat[i].coat = 'Unknown';
    } 

// COAT values 
 const coatArrUnsorted = [ short[0].coat, shortLong[0].coat,
                  med[0].coat, long[0].coat, semi[0].coat, rex[0].coat, 
                 hairless[0].coat, noneCoat[0].coat];
const coatArr = coatArrUnsorted.sort();
      coatArr.unshift(defaultCoat);
// ----------------------------------------------------------------------------------------------------

// amalgamating PATTERN
// colorpoint/mink/solid: colorpoint	
let colorMS = cats.filter(x => x.pattern === 'Colorpoint/Mink/Solid');
for (let i = 0; i < colorMS.length; i++) 
{
    colorMS[i].pattern = 'Colorpoint';
}

// evenly solid: solid
let evenSolid = cats.filter(x => x.pattern === 'Evenly solid');
for (let i = 0; i < evenSolid.length; i++) 
{
    evenSolid[i].pattern = 'Solid';
}

// all but colorpoint/ticked: colorpoint
let allBCT = cats.filter(x => x.pattern === 'All but colorpoint and ticked');
for (let i = 0; i < allBCT.length; i++) 
{
    allBCT[i].pattern = 'All but colorpoint';
}

// tabby with ticked: tabby	
let classicT = cats.filter(x => x.pattern === 'Classic tabby with ticking');
for (let i = 0; i < classicT.length; i++) 	
{
    classicT[i].pattern = 'Tabby';
}

// tabby with ticked: tabby	
let stripeTab = cats.filter(x => x.pattern === 'Striped tabby');
for (let i = 0; i < stripeTab.length; i++) 	
{
    stripeTab[i].pattern = 'Tabby';
}

// colorpoint(unknown): colorpoint 
let colorPoint = cats[13];
colorPoint.pattern = 'Colorpoint';

// chantilly : solid 
let chanPat = cats[11];
chanPat.pattern = 'Solid';

// karelian Bob : All 
let kBob = cats[22];
kBob.pattern = 'All';

// munchkin : Varied 
let munch = cats[28];
munch.pattern = 'Varied';

// creating filters for PATTERN 
// DEFAULT SELECT
const defaultPattern = 'Pattern';

// ALL PATTERN	
const all = cats.filter(x => x.pattern === 'All');

//  TICKED PATTERN
const ticked = cats.filter(x => x.pattern === 'Ticked');

// COLORPOINT PATTERN
const colorpoint = cats.filter(x => x.pattern === 'Colorpoint');

// ALL BUT COLORPOINT PATTERN
const allBColorpoint = cats.filter(x => x.pattern === 'All but colorpoint');

// SOLID PATTERN		
const solid = cats.filter(x => x.pattern === 'Solid');

// SPOTTED MARBLE PATTERN	
const spotMar = cats.filter(x => x.pattern === 'Spotted/Marbled');

// SPOTTED PATTERN	
const spotted = cats.filter(x => x.pattern === 'Spotted');

// TABBY PATTERN	
const tabby = cats.filter(x => x.pattern === 'Tabby');

// NO PATTERN DATA
let nonePattern = cats.filter(x => x.pattern === '');
    for (let i = 0; i < nonePattern.length; i++) 
    {
        nonePattern[i].pattern = 'Unknown';
    } 

// VARIED PATTERN 
const varied = cats.filter(x => x.pattern === 'Varied');

// PATTERN values
const patternArrUnsorted = [ all[0].pattern, ticked[0].pattern, colorpoint[0].pattern, 
                    allBColorpoint[0].pattern, solid[0].pattern, spotMar[0].pattern,
                    spotted[0].pattern, tabby[0].pattern, nonePattern[0].pattern, varied[0].pattern];
const patternArr = patternArrUnsorted.sort();
      patternArr.unshift(defaultPattern);	
// ----------------------------------------------------------------------------------------------------


// amalgamating COUNTRIES
// Asia dev UK: United Kingdom 
let devUKAsia = cats.filter(x => x.country === 'developed in the United Kingdom (founding stock from Asia)');
for (let i = 0; i < devUKAsia.length; i++) 
{
    devUKAsia[i].country = 'United Kingdom';
} 

// Isle of Man: United Kingdom 
let isleOfMan = cats.filter(x => x.country === 'United Kingdom (Isle of Man)');
for (let i = 0; i < isleOfMan.length; i++) 
{
    isleOfMan[i].country = 'United Kingdom';
} 

// England: United Kingdom 
let UKE = cats.filter(x => x.country === 'United Kingdom (England)');
for (let i = 0; i < UKE.length; i++) 
{
    UKE[i].country = 'United Kingdom';
} 

// Scotland: United Kingdom 
let UKScotland = cats.filter(x => x.country === 'United Kingdom (Scotland)');
for (let i = 0; i < UKScotland.length; i++) 
{
    UKScotland[i].country = 'United Kingdom';
} 

//  Thailand dev USA: United States
let devUSAThai = cats.filter(x => x.country === 'developed in the United States (founding stock from Thailand)');
for (let i = 0; i < devUSAThai.length; i++) 
{
    devUSAThai[i].country = 'United States';
}	 

// Asia dev USA: United States
let devUSAAsia = cats.filter(x => x.country === 'developed in the United States (founding stock from Asia)');
for (let i = 0; i < devUSAAsia.length; i++) 
{
    devUSAAsia[i].country = 'United States';
}	

// Western Russia: Russia 
let wrussia = cats.filter(x => x.country === 'Western Russia');
for (let i = 0; i < wrussia.length; i++) 
{
    wrussia[i].country = 'Russia';
} 

// Napoleon unknown: USA 
let napUnknown = cats.filter(x => x.breed === 'Napoleon');
napUnknown[0].country = 'United States';

// creating filters for COUNTRY 
// DEFAULT SELECT
const defaultCountry = 'Country';

// ETHIOPIA COUNTRY
const ethiopia = cats.filter(x => x.country === 'Ethiopia');

// ARABIAN PENISULA COUNTRY
const arabPen = cats.filter(x => x.country === 'Arabian Peninsula');

// UK COUNTRY 
const UK = cats.filter(x => x.country === 'United Kingdom');

// DEV UK COUNTRY 
const devUK = cats.filter(x => x.country === 'developed in the United Kingdom (founding stock from Asia)');

// UNITED STATES COUNTRY
const USA = cats.filter(x => x.country === 'United States');

// FRANCE COUNTRY 
const france = cats.filter(x => x.country === 'France');

// CHINA COUNTRY 
const china = cats.filter(x => x.country === 'China');

// EGYPT COUNTRY 	
const egypt = cats.filter(x => x.country === 'Egypt');

// EAST GERMANY COUNTRY 
const eastGermany = cats.filter(x => x.country === 'East Germany');

// JAPAN COUNTRY 
const japan = cats.filter(x => x.country === 'Japan');

// RUSSIA COUNTRY 
const russia = cats.filter(x => x.country === 'Russia');

// EUROPE COUNTRY 
const europe = cats.filter(x => x.country === 'Europe');

// GREATER IRAN COUNTRY 
const gIran = cats.filter(x => x.country === 'Greater Iran');

// THAILAND COUNTRY 
const thainland = cats.filter(x => x.country === 'Thailand');

// SINGAPORE COUNTRY 
const singapore = cats.filter(x => x.country === 'Singapore');

// KENYA COUNTRY
const kenya = cats.filter(x => x.country === 'Kenya');

// CANADA COUNTRY
const canada = cats.filter(x => x.country === 'Canada');

// TURKEY COUNTRY
const turkey = cats.filter(x => x.country === 'Turkey');

// UKRAINE COUNTRY
const ukraine = cats.filter(x => x.country === 'Ukraine');

// NO COUNTRY DATA
let noneCountry = cats.filter(x => x.country === '');
    for (let i = 0; i < noneCountry.length; i++) 
    {
        noneCountry[i].country = 'Unknown';
    } 

// COUNTRY values
const countryArrUnsorted = [ ethiopia[0].country, arabPen[0].country, UK[0].country, USA[0].country, 
                    france[0].country, china[0].country, egypt[0].country, eastGermany[0].country, 
                    japan[0].country, russia[0].country, europe[0].country, gIran[0].country, thainland[0].country, 
                    singapore[0].country, kenya[0].country, canada[0].country, turkey[0].country, 
                    ukraine[0].country, noneCountry[0].country];
const countryArr = countryArrUnsorted.sort();
countryArr.unshift(defaultCountry);
//-------------------------------------------------------------

// placeholder value arrays
const criteria = [];
const breed = [];

// extract breed value from form submission 
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  breed.push(params.catSelect);

// determine characteristics of breed and push to criteria array
// determine correct matching photo to breed
let breedI = [];
    if (breed[0] === cats[0].breed)
    {
        breedI.push('/Images/specificCats/0.jpg');
        criteria.push(cats[0].coat, cats[0].pattern, cats[0].country);
    } 
    else if (breed[0] === cats[1].breed)
    {
        breedI.push('/Images/specificCats/1.jpg');
        criteria.push(cats[1].coat, cats[1].pattern, cats[1].country);
    }    
    else if (breed[0] === cats[2].breed)
    {
        breedI.push('/Images/specificCats/2.jpg');
        criteria.push(cats[2].coat, cats[2].pattern, cats[2].country);
    }
    else if (breed[0] === cats[3].breed)
    {
        breedI.push('/Images/specificCats/3.jpg');
        criteria.push(cats[3].coat, cats[3].pattern, cats[3].country);
    }
    else if (breed[0] === cats[4].breed)
    {
        breedI.push('/Images/specificCats/4.jpg');
        criteria.push(cats[4].coat, cats[4].pattern, cats[4].country);
    }
    else if (breed[0] === cats[5].breed)
    {
        breedI.push('/Images/specificCats/5.jpg');
        criteria.push(cats[5].coat, cats[5].pattern, cats[5].country);
    }
    else if (breed[0] === cats[6].breed)
    {
        breedI.push('/Images/specificCats/6.jpg');
        criteria.push(cats[6].coat, cats[6].pattern, cats[6].country);
    }
    else if (breed[0] === cats[7].breed)
    {
        breedI.push('/Images/specificCats/7.jpg');
        criteria.push(cats[7].coat, cats[7].pattern, cats[7].country);
    }
    else if (breed[0] === cats[8].breed)
    {
        breedI.push('/Images/specificCats/8.jpg');
        criteria.push(cats[8].coat, cats[8].pattern, cats[8].country);
    }
    else if (breed[0] === cats[9].breed)
    {
        breedI.push('/Images/specificCats/9.jpg');
        criteria.push(cats[9].coat, cats[9].pattern, cats[9].country);
    }
    else if (breed[0] === cats[10].breed)
    {
        breedI.push('/Images/specificCats/10.jpg');
        criteria.push(cats[10].coat, cats[10].pattern, cats[10].country);
    }
    else if (breed[0] === cats[11].breed)
    {
        breedI.push('/Images/specificCats/11.jpg');
        criteria.push(cats[11].coat, cats[11].pattern, cats[11].country);
    }
    else if (breed[0] === cats[12].breed)
    {
        breedI.push('/Images/specificCats/12.jpg');
        criteria.push(cats[12].coat, cats[12].pattern, cats[12].country);
    }
    else if (breed[0] === cats[13].breed)
    {
        breedI.push('/Images/specificCats/13.jpg');
        criteria.push(cats[13].coat, cats[13].pattern, cats[13].country);
    }
    else if (breed[0] === cats[14].breed)
    {
        breedI.push('/Images/specificCats/14.jpg');
        criteria.push(cats[14].coat, cats[14].pattern, cats[14].country);
    }
    else if (breed[0] === cats[15].breed)
    {
        breedI.push('/Images/specificCats/15.jpg');
        criteria.push(cats[15].coat, cats[15].pattern, cats[15].country);
    }
    else if (breed[0] === cats[16].breed)
    {
        breedI.push('/Images/specificCats/16.jpg');
        criteria.push(cats[16].coat, cats[16].pattern, cats[16].country);
    }
    else if (breed[0] === cats[17].breed)
    {
        breedI.push('/Images/specificCats/17.jpg');
        criteria.push(cats[17].coat, cats[17].pattern, cats[17].country);
    }
    else if (breed[0] === cats[18].breed)
    {
        breedI.push('/Images/specificCats/18.jpg');
        criteria.push(cats[18].coat, cats[18].pattern, cats[18].country);
    }
    else if (breed[0] === cats[19].breed)
    {
        breedI.push('/Images/specificCats/19.jpg');
        criteria.push(cats[19].coat, cats[19].pattern, cats[19].country);
    }
    else if (breed[0] === cats[20].breed)
    {
        breedI.push('/Images/specificCats/20.jpg');
        criteria.push(cats[20].coat, cats[20].pattern, cats[20].country);
    }
    else if (breed[0] === cats[21].breed)
    {
        breedI.push('/Images/specificCats/21.jpg');
        criteria.push(cats[21].coat, cats[21].pattern, cats[21].country);
    }
    else if (breed[0] === cats[22].breed)
    {
        breedI.push('/Images/specificCats/22.jpg');
        criteria.push(cats[22].coat, cats[22].pattern, cats[22].country);
    }
    else if (breed[0] === cats[23].breed)
    {
        breedI.push('/Images/specificCats/23.jpg');
        criteria.push(cats[23].coat, cats[23].pattern, cats[23].country);
    }
    else if (breed[0] === cats[24].breed)
    {
        breedI.push('/Images/specificCats/24.jpg');
        criteria.push(cats[24].coat, cats[24].pattern, cats[24].country);
    }
    else if (breed[0] === cats[25].breed)
    {
        breedI.push('/Images/specificCats/25.jpg');
        criteria.push(cats[25].coat, cats[25].pattern, cats[25].country);
    }
    else if (breed[0] === cats[26].breed)
    {
        breedI.push('/Images/specificCats/26.jpg');
        criteria.push(cats[26].coat, cats[26].pattern, cats[26].country);
    }
    else if (breed[0] === cats[27].breed)
    {
        breedI.push('/Images/specificCats/27.jpg');
        criteria.push(cats[27].coat, cats[27].pattern, cats[27].country);
    }
    else if (breed[0] === cats[28].breed)
    {
        breedI.push('/Images/specificCats/28.jpg');
        criteria.push(cats[28].coat, cats[28].pattern, cats[28].country);
    }
    else if (breed[0] === cats[29].breed)
    {
        breedI.push('/Images/specificCats/29.jpg');
        criteria.push(cats[29].coat, cats[29].pattern, cats[29].country);
    }
    else if (breed[0] === cats[30].breed)
    {
        breedI.push('/Images/specificCats/30.jpg');
        criteria.push(cats[30].coat, cats[30].pattern, cats[30].country);
    }
    else if (breed[0] === cats[31].breed)
    {
        breedI.push('/Images/specificCats/31.jpg');
        criteria.push(cats[31].coat, cats[31].pattern, cats[31].country);
    }
    else if (breed[0] === cats[32].breed)
    {
        breedI.push('/Images/specificCats/32.jpg');
        criteria.push(cats[32].coat, cats[32].pattern, cats[32].country);
    }
    else if (breed[0] === cats[33].breed)
    {
        breedI.push('/Images/specificCats/33.jpg');
        criteria.push(cats[33].coat, cats[33].pattern, cats[33].country);
    }
    else if (breed[0] === cats[34].breed)
    {
        breedI.push('/Images/specificCats/34.jpg');
        criteria.push(cats[34].coat, cats[34].pattern, cats[34].country);
    }
    else if (breed[0] === cats[35].breed)
    {
        breedI.push('/Images/specificCats/35.jpg');
        criteria.push(cats[35].coat, cats[35].pattern, cats[35].country);
    }
    else if (breed[0] === cats[36].breed)
    {
        breedI.push('/Images/specificCats/36.jpg');
        criteria.push(cats[36].coat, cats[36].pattern, cats[36].country);
    }
    else if (breed[0] === cats[37].breed)
    {
        breedI.push('/Images/specificCats/37.jpg');
        criteria.push(cats[37].coat, cats[37].pattern, cats[37].country);
    }
    else if (breed[0] === cats[38].breed)
    {
        breedI.push('/Images/specificCats/38.jpg');
        criteria.push(cats[38].coat, cats[38].pattern, cats[38].country);
    }
    else if (breed[0] === cats[39].breed)
    {
        breedI.push('/Images/specificCats/39.jpg');
        criteria.push(cats[39].coat, cats[39].pattern, cats[39].country);
    }
    else if (breed[0] === cats[40].breed)
    {
        breedI.push('/Images/specificCats/40.jpg');
        criteria.push(cats[40].coat, cats[40].pattern, cats[40].country);
    }
    else if (breed[0] === cats[41].breed)
    {
        breedI.push('/Images/specificCats/41.jpg');
        criteria.push(cats[41].coat, cats[41].pattern, cats[41].country);
    }
    else if (breed[0] === cats[42].breed)
    {
        breedI.push('/Images/specificCats/42.jpg');
        criteria.push(cats[42].coat, cats[42].pattern, cats[42].country);    
    }
    else if (breed[0] === cats[43].breed)
    {
        breedI.push('/Images/specificCats/43.jpg');
        criteria.push(cats[43].coat, cats[43].pattern, cats[43].country);
    }
    else if (breed[0] === cats[44].breed)
    {
        breedI.push('/Images/specificCats/44.jpg');
        criteria.push(cats[44].coat, cats[44].pattern, cats[44].country);
    }
    else if (breed[0] === cats[45].breed)
    {
        breedI.push('/Images/specificCats/45.jpg');
        criteria.push(cats[45].coat, cats[45].pattern, cats[45].country);
    }
    else if (breed[0] === cats[46].breed)
    {
        breedI.push('/Images/specificCats/46.jpg');
        criteria.push(cats[46].coat, cats[46].pattern, cats[46].country);
    }
    else if (breed[0] === cats[47].breed)
    {
        breedI.push('/Images/specificCats/47.jpg');
        criteria.push(cats[47].coat, cats[47].pattern, cats[47].country);
    }
    else if (breed[0] === cats[48].breed)
    {
        breedI.push('/Images/specificCats/48.jpg');
        criteria.push(cats[48].coat, cats[48].pattern, cats[48].country);
    }
    else 
    {
        breedI.push('/Images/specificCats/default.jpg');
        criteria.push(cats[49].coat, cats[49].pattern, cats[49].country);
    }

//-----------------------------------------------------------------------------

// create pop up notification using SWAL library
swal("Daily dose of cat dispensed!", "Incatpacitated no more.", "success");

// create DOM elements 
// display cat criteria 
// create div container 
const criteriaC = document.createElement('div');
    criteriaC.setAttribute('id', 'criteriaC');
    document.body.appendChild(criteriaC);

// create criteria container COAT outer 
const divCoatOuter = document.createElement('div');
    divCoatOuter.setAttribute('id', 'divCoatO');
    criteriaC.appendChild(divCoatOuter);

// create criteria container COAT inner 
const divCoatInner = document.createElement('div');
    divCoatInner.setAttribute('id', 'divCoatI');
    divCoatOuter.appendChild(divCoatInner);
    divCoatInner.innerText = 'Coat: ' + criteria[0];

// create criteria container PATTERN outer
const divPatternOuter = document.createElement('div');
    divPatternOuter.setAttribute('id', 'divPatternO');
    criteriaC.appendChild(divPatternOuter);

// create criteria container PATTERN inner 
const divPatternInner = document.createElement('div');
    divPatternInner.setAttribute('id', 'divPatternI');
    divPatternOuter.appendChild(divPatternInner);
    divPatternInner.innerText = 'Pattern: ' + criteria[1];

// create criteria container PATTERN outer
const divCountryOuter = document.createElement('div');
    divCountryOuter.setAttribute('id', 'divCountryO');
    criteriaC.appendChild(divCountryOuter);

// create criteria container PATTERN inner 
const divCountryInner = document.createElement('div');
    divCountryInner.setAttribute('id', 'divCountryI');
    divCountryOuter.appendChild(divCountryInner);
    divCountryInner.innerText = 'Country: ' + criteria[2];


// img div container 
    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('id', 'imgDiv');
    document.body.appendChild(imgDiv);


// img applied to div 
 function breedImage(breedI) 
{
    const breedImage = document.createElement("IMG");
    breedImage.setAttribute('src', breedI);
    breedImage.setAttribute('id', 'breedImg');
    breedImage.setAttribute('alt', 'Cat Breed');
    imgDiv.appendChild(breedImage);
}
breedImage(breedI);

// create pink rectangle 
  const rectP = document.createElement('div');
  rectP.setAttribute('id', 'rectP');
  document.body.appendChild(rectP);

// create div title containers
const titleContainer = document.createElement('div');
titleContainer.setAttribute('id', 'titleC');
document.body.appendChild(titleContainer);

// update breed variable 
const titleInner = document.createElement('div');
titleInner.setAttribute('id', 'titleI');
titleInner.innerText = 'Breed: ' + breed;
titleContainer.appendChild(titleInner);


// create home button 
function homeButton()
{
    let homeBtn = document.createElement('button');
    homeBtn.innerHTML = 'Home';
    homeBtn.setAttribute('id', 'homeBtn');
    document.body.appendChild(homeBtn);
}
homeButton();

// home button on click link
document.getElementById('homeBtn').onclick = function () {
    location.href = '/HTML/index.html';
};

// add home button colour styling with jquery
  $("#homeBtn").mouseenter(function(){
    $("#homeBtn").css("background-color", "#FF4181");
  });
  $("#homeBtn").mouseleave(function(){
    $("#homeBtn").css("background-color", "#383838");
  });

// add image styling (enlarge)/(reduce) with jquery
  $("#imgDiv").mouseenter(function(){
    $(this).css("width", "75%");
    $(this).css("magin", "auto");
    $(this).css("z-index", "200");
    $('#criteriaC').css("display", "none");
    $('#homeBtn').css('display', 'none');
    $('#titleC').css('display', 'none');
    $('#rectP').css('left', '0%');
    $('#rectP').css('top', '40%');
    $('#rectP').css('width', '100%');
 });

 $("#imgDiv").mouseleave(function(){
    $(this).css("width", "33%");
    $(this).css("magin", "auto");
    $('#criteriaC').css("display", "block");
    $('#homeBtn').css('display', 'block');
    $('#titleC').css('display', 'block');
    $('#rectP').css('left', '800px');
    $('#rectP').css('top', '40%');
    $('#rectP').css('width', '750px');
});

}); 

})();