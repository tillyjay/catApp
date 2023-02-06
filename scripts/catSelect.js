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
		  	breeds.push(el.selectedbreed)
	  });
	  
	  console.log(breeds);

// ----------------------------------------------------------------------------------------------------


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
// ----------------------------------------------------------------------------------------------------

// placeholder array values
const criteria = []; 
const breed = [];
console.log(window.location);

// extract criteria from http link and push to criteria array
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  criteria.push(params.selectCoat);
  criteria.push(params.selectPattern);
  criteria.push(params.selectCountry);


// match 3 criteria with breed from array of objects containing all cats
	// HAIRLESS BREEDS
	if(criteria[0] === coatArr[1] && criteria[1] === patternArr[1]
		&& criteria[2] === countryArr[2])
	{
		criteria.push(coatArr[1], patternArr[1], countryArr[2]);
		breed.push(hairless[1].breed);

	}
	else if(criteria[0] === coatArr[1] && criteria[1] === patternArr[4]
		&& criteria[2] === countryArr[14])
	{
		criteria.push(coatArr[1], patternArr[4], countryArr[14]);
		breed.push(hairless[0].breed);

	}
	else if(criteria[0] === coatArr[1] && criteria[1] === patternArr[9]
		&& criteria[2] === countryArr[16])
	{
		criteria.push(coatArr[1], patternArr[9], countryArr[16]);
		breed.push(hairless[2].breed);

	}
	// LONG BREEDS
	else if(criteria[0] === coatArr[2] && criteria[1] === patternArr[1]
		&& criteria[2] === countryArr[7])
	{
		criteria.push(coatArr[2], patternArr[1], countryArr[7]);
		breed.push(long[4].breed);

	}
	else if(criteria[0] === coatArr[2] && criteria[1] === patternArr[1]
		&& criteria[2] === countryArr[9])
	{
		criteria.push(coatArr[2], patternArr[1], countryArr[9]);
		breed.push(long[5].breed);

	}
	else if(criteria[0] === coatArr[2] && criteria[1] === patternArr[1]
		&& criteria[2] === countryArr[18])
	{
		criteria.push(coatArr[2], patternArr[1], countryArr[18]);
		breed.push(long[6].breed);

	}
	else if(criteria[0] === coatArr[2] && criteria[1] === patternArr[2]
		&& criteria[2] === countryArr[18])
	{
		criteria.push(coatArr[2], patternArr[2], countryArr[18]);
		breed.push(long[3].breed);

	}
	else if(criteria[0] === coatArr[2] && criteria[1] === patternArr[3]
		&& criteria[2] === countryArr[18])
	{
		criteria.push(coatArr[2], patternArr[3], countryArr[18]);
		breed.push(long[0].breed);

	}
	else if(criteria[0] === coatArr[2] && criteria[1] === patternArr[9]
		&& criteria[2] === countryArr[17])
	{
		criteria.push(coatArr[2], patternArr[9], countryArr[17]);
		breed.push(long[1].breed, long[2].breed);

	}
	// MED BREED
	else if(criteria[0] === coatArr[3] && criteria[1] === patternArr[1]
		&& criteria[2] === countryArr[17])
	{
		criteria.push(coatArr[3], patternArr[1], countryArr[17]);
		breed.push(med[0].breed);

	}
	// REX BREEDS 
	else if(criteria[0] === coatArr[4] && criteria[1] === patternArr[1]
		&& criteria[2] === countryArr[17])
	{
		criteria.push(coatArr[4], patternArr[1], countryArr[17]);
		breed.push(rex[0].breed);

	}
	else if(criteria[0] === coatArr[4] && criteria[1] === patternArr[1]
		&& criteria[2] === countryArr[18])
	{
		criteria.push(coatArr[4], patternArr[1], countryArr[18]);
		breed.push(rex[2].breed);

	}
	else if(criteria[0] === coatArr[4] && criteria[1] === patternArr[9]
		&& criteria[2] === countryArr[4])
	{
		criteria.push(coatArr[4], patternArr[9], countryArr[4]);
		breed.push(rex[1].breed);

	}
	else if(criteria[0] === coatArr[4] && criteria[1] === patternArr[9]
		&& criteria[2] === countryArr[18])
	{
		criteria.push(coatArr[4], patternArr[9], countryArr[18]);
		breed.push(rex[3].breed);

	}
	// SEMILONG BREEDS 
	else if(criteria[0] === coatArr[5] && criteria[1] === patternArr[2]
		&& criteria[2] === countryArr[15])
	{
		criteria.push(coatArr[5], patternArr[2], countryArr[15]);
		breed.push(semi[0].breed);

	}
	// SHORT 
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[1]
		&& criteria[2] === countryArr[18])
	{
		criteria.push(coatArr[6], patternArr[1], countryArr[18]);
		breed.push(short[10].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[2]
		&& criteria[2] === countryArr[18])
	{
		criteria.push(coatArr[6], patternArr[2], countryArr[18]);
		breed.push(short[1].breed);
	
	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[2]
		&& criteria[2] === countryArr[19])
	{
		criteria.push(coatArr[6], patternArr[2], countryArr[19]);
		breed.push(short[14].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[3]
		&& criteria[2] === countryArr[2])
	{
		criteria.push(coatArr[6], patternArr[3], countryArr[2]);
		breed.push(short[23].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[3]
		&& criteria[2] === countryArr[12])
	{
		criteria.push(coatArr[6], patternArr[3], countryArr[12]);
		breed.push(short[12].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[3]
		&& criteria[2] === countryArr[14])
	{
		criteria.push(coatArr[6], patternArr[3], countryArr[14]);
		breed.push(short[19].breed, short[22].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[3]
		&& criteria[2] === countryArr[19])
	{
		criteria.push(coatArr[6], patternArr[3], countryArr[19]);
		breed.push(short[7].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[3]
		&& criteria[2] === countryArr[19])
	{
		criteria.push(coatArr[6], patternArr[3], countryArr[19]);
		breed.push(short[7].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[4]
		&& criteria[2] === countryArr[12])
	{
		criteria.push(coatArr[6], patternArr[4], countryArr[12]);
		breed.push(short[16].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[4]
		&& criteria[2] === countryArr[14])
	{
		criteria.push(coatArr[6], patternArr[4], countryArr[14]);
		breed.push(short[11].breed, short[17]);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[4]
		&& criteria[2] === countryArr[17])
	{
		criteria.push(coatArr[6], patternArr[4], countryArr[17]);
		breed.push(short[3].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[4]
		&& criteria[2] === countryArr[18])
	{
		criteria.push(coatArr[6], patternArr[4], countryArr[18]);
		breed.push(short[5].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[5]
		&& criteria[2] === countryArr[5])
	{
		criteria.push(coatArr[6], patternArr[5], countryArr[5]);
		breed.push(short[9].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[5]
		&& criteria[2] === countryArr[18])
	{
		criteria.push(coatArr[6], patternArr[5], countryArr[18]);
		breed.push(short[13].breed, short[15].breed, short[18].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[6]
		&& criteria[2] === countryArr[18])
	{
		criteria.push(coatArr[6], patternArr[6], countryArr[18]);
		breed.push(short[4].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[7]
		&& criteria[2] === countryArr[3])
	{
		criteria.push(coatArr[6], patternArr[7], countryArr[3]);
		breed.push(short[8].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[7]
		&& criteria[2] === countryArr[11])
	{
		criteria.push(coatArr[6], patternArr[7], countryArr[11]);
		breed.push(short[21].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[8]
		&& criteria[2] === countryArr[6])
	{
		criteria.push(coatArr[6], patternArr[8], countryArr[6]);
		breed.push(short[0].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[8]
		&& criteria[2] === countryArr[13])
	{
		criteria.push(coatArr[6], patternArr[8], countryArr[13]);
		breed.push(short[20].breed);

	}
	else if(criteria[0] === coatArr[6] && criteria[1] === patternArr[9]
		&& criteria[2] === countryArr[1])
	{
		criteria.push(coatArr[6], patternArr[9], countryArr[1]);
		breed.push(short[2].breed);

	}
	// SHORTLONG BREEDS 
	else if(criteria[0] === coatArr[7] && criteria[1] === patternArr[1]
		&& criteria[2] === countryArr[17])
	{
		criteria.push(coatArr[7], patternArr[1], countryArr[17]);
		breed.push(shortLong[5].breed);

	}
	else if(criteria[0] === coatArr[7] && criteria[1] === patternArr[1]
		&& criteria[2] === countryArr[18])
	{
		criteria.push(coatArr[7], patternArr[1], countryArr[18]);
		breed.push(shortLong[0].breed, shortLong[2]);

	}
	else if(criteria[0] === coatArr[7] && criteria[1] === patternArr[2]
		&& criteria[2] === countryArr[10])
	{
		criteria.push(coatArr[7], patternArr[2], countryArr[10]);
		breed.push(shortLong[3].breed);

	}
	else if(criteria[0] === coatArr[7] && criteria[1] === patternArr[9]
		&& criteria[2] === countryArr[17])
	{
		criteria.push(coatArr[7], patternArr[9], countryArr[17]);
		breed.push(shortLong[1].breed);

	}
	else if(criteria[0] === coatArr[7] && criteria[1] === patternArr[10]
		&& criteria[2] === countryArr[18])
	{
		criteria.push(coatArr[7], patternArr[10], countryArr[18]);
		breed.push(shortLong[4].breed);

	}
	// UNKNOWN BREEDS
	else if(criteria[0] === coatArr[8] && criteria[1] === patternArr[1]
		&& criteria[2] === countryArr[12])
	{
		criteria.push(coatArr[8], patternArr[1], countryArr[12]);
		breed.push(noneCoat[1].breed);

	}
	else if(criteria[0] === coatArr[8] && criteria[1] === patternArr[4]
		&& criteria[2] === countryArr[18])
	{
		criteria.push(coatArr[8], patternArr[4], countryArr[18]);
		breed.push(noneCoat[0].breed);

	}
	else if(criteria[0] === coatArr[8] && criteria[1] === patternArr[10]
		&& criteria[2] === countryArr[18])
	{
		criteria.push(coatArr[8], patternArr[10], countryArr[18]);
		breed.push(noneCoat[2].breed);

	}

// display cat criteria 
// create div container 
const leftCol = document.createElement('div');
    leftCol.setAttribute('id', 'leftCol');
    document.body.appendChild(leftCol);

const criteriaC = document.createElement('div');
    criteriaC.setAttribute('id', 'criteriaC');
    leftCol.appendChild(criteriaC);

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

// inner cat selection container 

// create form element to capture breed value 
function createForm() 
{
    const formDiv = document.createElement('div');
    formDiv.setAttribute('id', 'formDiv');
    document.body.appendChild(formDiv);

    const catForm = document.createElement('form');	
    catForm.setAttribute('method', 'get');
    catForm.setAttribute('id', 'catForm');
    catForm.setAttribute('action', '/HTML/selected.html');
    formDiv.appendChild(catForm);

}
createForm();

// dropdown selection 
function dropdownSelection(breed) 
{
    // cat selection options 
    const catSelect = document.createElement('select');
    catSelect.setAttribute('id', 'catSelect');
    catSelect.setAttribute('name', 'catSelect');
    catSelect.innerHTML = `<option>Breeds</option>`


    for (let i = 0; i < breed.length; i++) 
    {
        let option = document.createElement('option');
        option.innerHTML = breed[i];
        catSelect.options.add(option);
    }

// create div containers
	const leftCol = document.createElement('div');
    leftCol.setAttribute('id', 'leftCol');
    catForm.appendChild(leftCol);

    const catSContainer = document.createElement('div');
    catSContainer.setAttribute('id', 'catSC');
    leftCol.appendChild(catSContainer);

    const catSInner = document.createElement('div');
    catSInner.setAttribute('id', 'catSInner');
    catSContainer.appendChild(catSInner);
    catSInner.appendChild(catSelect);
};

// select singular cat, change webpages 
dropdownSelection(breed);

document.getElementById('catSelect').onchange = function () {
    //location.href = '/HTML/selected.html';
    const catForm = document.getElementById('catForm')
    catForm.submit();
};

// display right column image
function imageTwo() 
{
    const imageTwo = document.createElement("IMG");
    imageTwo.setAttribute('src', '/Images/cat2.jpg');
    imageTwo.setAttribute('id', 'catTwo');
    imageTwo.setAttribute('width', '600px');
    imageTwo.setAttribute('height', '500px');
    imageTwo.setAttribute('alt', 'Orange Cat');
    document.body.appendChild(imageTwo);

  }
imageTwo();

// create rectangle two 
const rectYellow = document.createElement('div');
rectYellow.setAttribute('id', 'rectY');
document.body.appendChild(rectYellow);


// create home button 
function homeButton()
{
    let homeBtn = document.createElement('button');
    homeBtn.innerHTML = 'Home';
    homeBtn.setAttribute('id', 'homeBtn');
    document.body.appendChild(homeBtn);
}
homeButton();

document.getElementById('homeBtn').onclick = function () {
    window.location.href = '/HTML/index.html';
};

// add colour styling to home button with jquery 
$("#homeBtn").mouseenter(function(){
    $("#homeBtn").css("background-color", "#FF4181");
  });

$("#homeBtn").mouseleave(function(){
    $("#homeBtn").css("background-color", "#383838");
  });

}); 

})();