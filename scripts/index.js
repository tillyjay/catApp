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

// slection variables
	const criteria = [];
	const breed = [];

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

// DOM elements
// create rectangle one 
	const rectOne = document.createElement('div');
	rectOne.setAttribute('id', 'rectOne');
	document.body.appendChild(rectOne);
	rectOne.textContent = 'Are you feeling incatpacitated?';

// create div for rectangle one text
	const rectOneText = document.createElement('div');
	rectOneText.setAttribute('id', 'rectOneText');
	rectOne.appendChild(rectOneText);
	rectOneText.textContent = 'Are you feeling incatpacitated?';


// create rectangle two 
	const rectTwo = document.createElement('div');
	rectTwo.setAttribute('id', 'rectTwo');
	document.body.appendChild(rectTwo);

// add index image 
// add div image cropper 
	function indexCatImage() 
	{
		const indexImage = document.createElement("IMG");
			indexImage.setAttribute('src', '/Images/cat1.jpg');
			indexImage.setAttribute('id', 'catOne');
			indexImage.setAttribute('width', '80px');
			indexImage.setAttribute('height', '180px');
			indexImage.setAttribute('alt', 'Cat');
		document.body.appendChild(indexImage);

  	}
	indexCatImage();

// create form element 
	function createForm() 
	{
		const formDiv = document.createElement('div');
		formDiv.setAttribute('id', 'formDiv');
		document.body.appendChild(formDiv);

		const catForm = document.createElement('form');	
		catForm.setAttribute('method', 'get');
		catForm.setAttribute('id', 'catForm');
		catForm.setAttribute('action', '/HTML/catSelect.html');
		formDiv.appendChild(catForm);

	}
	createForm();

// create dropdown lists 
// create a dropdown element
// add the Options to the dropdown.
// set values in options
// add the option element to dropdown
// create div container 
// set div id attribute
// add div to body 
// add the dropdown list to div

// COAT dropdown list
	function dropdownCoat() 
	{
		let selectCoat = document.createElement('select');
		selectCoat.setAttribute('id', 'selectCoat');
		selectCoat.setAttribute('name', 'selectCoat');


		for (let i = 0; i < coatArr.length; i++) 
		{
			let optionCoat = document.createElement('option');
			optionCoat.innerHTML = coatArr[i];
			selectCoat.options.add(optionCoat);
		}

		let divCCoat = document.createElement('div');
		divCCoat.setAttribute('id', 'divContainerCoat');
		catForm.appendChild(divCCoat).appendChild(selectCoat);
	};
	dropdownCoat();

// PATTERN dropdown list
	function dropdownPattern() 
	{
		let selectPattern = document.createElement('select');
		selectPattern.setAttribute('id', 'selectPattern');
		selectPattern.setAttribute('name', 'selectPattern');
		selectPattern.innerHTML = `<option>Pattern</option>`;


		let divCPattern = document.createElement('div');
		divCPattern.setAttribute('id', 'divContainerPattern');
		catForm.appendChild(divCPattern);

		divCPattern.appendChild(selectPattern);
	};
	dropdownPattern();

// COUNTRY dropdown list
	function dropdownCountry() 
	{
		let selectCountry = document.createElement('select');
		selectCountry.setAttribute('id', 'selectCountry');
		selectCountry.setAttribute('name', 'selectCountry');
		selectCountry.innerHTML = `<option>Country</option>`;


		let divCCountry = document.createElement('div');
		divCCountry.setAttribute('id', 'divContainerCountry');
		catForm.appendChild(divCCountry);

		divCCountry.appendChild(selectCountry);

	};
	dropdownCountry();

// buttons container 
const buttonsC = document.createElement('div');
buttonsC.setAttribute('id', 'buttonsC');
catForm.appendChild(buttonsC);

// create refresh button
	function createRefresh()
	{
	let refreshBtn = document.createElement('button');
	refreshBtn.innerHTML = 'Refresh';
	refreshBtn.setAttribute('id', 'refreshBtn');
	refreshBtn.setAttribute('type', 'reset')
	buttonsC.appendChild(refreshBtn);
	
	}
	createRefresh();

	document.getElementById('refreshBtn').onclick = function () {
		window.location.reload();
    };

// create submit button
	function createSubmit()
	{
	let submitBtn = document.createElement('button');
	submitBtn.innerHTML = 'Submit';
	submitBtn.setAttribute('id', 'submitBtn');
	submitBtn.setAttribute('type', 'submit');
	submitBtn.setAttribute('name', 'submitBtn');

	buttonsC.appendChild(submitBtn);
	}
	createSubmit();

// jquery to add interactive colour to buttons 
	$("#refreshBtn").mouseenter(function(){
		$("#refreshBtn").css("background-color", "#2EF3E0");
	  });
	  $("#refreshBtn").mouseleave(function(){
		$("#refreshBtn").css("background-color", "#f5f5f5");
	  });
	
	  $("#submitBtn").mouseenter(function(){
		$("#submitBtn").css("background-color", "#F8D232");
	  });
	  $("#submitBtn").mouseleave(function(){
		$("#submitBtn").css("background-color", "#f5f5f5");
	  });

// ----------------------------------------------------------------------------------------------------

// COAT values 
// coat selections 

// hairless 
const hairlessCoat = [];
for (let i = 0; i < hairless.length; i++) 
{
	hairlessCoat.push(hairless[i].pattern);
}
hairlessCoat.sort();

// long 
const longCoatDup = [];
for (let i = 0; i < long.length; i++) 
{
	longCoatDup.push(long[i].pattern);
}
const longCoat = longCoatDup.filter((c, index) => {
    return longCoatDup.indexOf(c) === index;
});
longCoat.sort();

// medium
const mediumCoat = [];
for (let i = 0; i < med.length; i++) 
{
	mediumCoat.push(med[i].pattern);
}

// rex
const rexCoatDup = [];
for (let i = 0; i < rex.length; i++) 
{
	rexCoatDup.push(rex[i].pattern);
}
const rexCoat = rexCoatDup.filter((c, index) => {
    return rexCoatDup.indexOf(c) === index;
});

// semi-long
const semiCoat = [];
for (let i = 0; i < semi.length; i++) 
{
	semiCoat.push(semi[i].pattern);
}

// short
const shortCoatDup = [];
for (let i = 0; i < short.length; i++) 
{
	shortCoatDup.push(short[i].pattern);
}
const shortCoat = shortCoatDup.filter((c, index) => {
    return shortCoatDup.indexOf(c) === index;
});
shortCoat.sort();

// short/long 
const shortLongCoatDup = [];
for (let i = 0; i < shortLong.length; i++) 
{
	shortLongCoatDup.push(shortLong[i].pattern);
}
const shortLongCoat = shortLongCoatDup.filter((c, index) => {
    return shortLongCoatDup.indexOf(c) === index;
});
shortLongCoat.sort();

// unknown
const unknownCoatDup = [];
for (let i = 0; i < noneCoat.length; i++) 
{
	unknownCoatDup.push(noneCoat[i].pattern);
}
const unknownCoat = unknownCoatDup.filter((c, index) => {
    return unknownCoatDup.indexOf(c) === index;
});
unknownCoat.sort();

// varied
const variedCoat = [];
for (let i = 0; i < varied.length; i++) 
{
	variedCoat.push(varied[i].pattern);
}

// update pattern select list depending on coat selection
	document.querySelector('#selectCoat').addEventListener('change', function()
	{
		if(this.value === coatArr[1]) 
		{
			for (let i = 0; i < hairlessCoat.length; i++) 
				{
				let option = document.createElement('option');
				option.innerHTML = hairlessCoat[i];
				document.querySelector('#selectPattern').options.add(option);
				}
		}
		else if (this.value === coatArr[2])
		{
			for (let i = 0; i < longCoat.length; i++) 
				{
				let option = document.createElement('option');
				option.innerHTML = longCoat[i];
				document.querySelector('#selectPattern').options.add(option);
				}
		}
		else if (this.value === coatArr[3])
		{
			for (let i = 0; i < mediumCoat.length; i++) 
				{
				let option = document.createElement('option');
				option.innerHTML = mediumCoat[i];
				document.querySelector('#selectPattern').options.add(option);
				}
		}
		else if (this.value === coatArr[4])
		{
			for (let i = 0; i < rexCoat.length; i++) 
				{
				let option = document.createElement('option');
				option.innerHTML = rexCoat[i];
				document.querySelector('#selectPattern').options.add(option);
				}
		}
		else if (this.value === coatArr[5])
		{
			for (let i = 0; i < semiCoat.length; i++) 
				{
				let option = document.createElement('option');
				option.innerHTML = semiCoat[i];
				document.querySelector('#selectPattern').options.add(option);
				}
		}
		else if (this.value === coatArr[6])
		{
			for (let i = 0; i < shortCoat.length; i++) 
				{
				let option = document.createElement('option');
				option.innerHTML = shortCoat[i];
				document.querySelector('#selectPattern').options.add(option);
				}
		}
		else if (this.value === coatArr[7])
		{
			for (let i = 0; i < shortLongCoat.length; i++) 
				{
				let option = document.createElement('option');
				option.innerHTML = shortLongCoat[i];
				document.querySelector('#selectPattern').options.add(option);
				}
		}
		else if (this.value === coatArr[8])
		{
			for (let i = 0; i < unknownCoat.length; i++) 
				{
				let option = document.createElement('option');
				option.innerHTML = unknownCoat[i];
				document.querySelector('#selectPattern').options.add(option);
				}
		}
	});

// update country list depending on coat and pattern values
// hairless - countries 
	const hairlessCountry = [];
	for (let i = 0; i < hairless.length; i++) 
	{
		hairlessCountry.push(hairless[i].country);
	}

// long - countries 
	const longCountryDup = [];
	for (let i = 0; i < long.length; i++) 
	{
		longCountryDup.push(long[i].country);
	}
	const longCountry = longCountryDup.filter((c, index) => {
		return longCountryDup.indexOf(c) === index;
	});
	longCountry.sort();

// med - countries
	const medCountry = [];
	medCountry.push(med[0].country);

// rex - countries 
	const rexCountryDup = [];
	for (let i = 0; i < rex.length; i++) 
	{
		rexCountryDup.push(rex[i].country);
	}
	const rexCountry = rexCountryDup.filter((c, index) => {
		return rexCountryDup.indexOf(c) === index;
	});
	rexCountry.sort();

// semi-long - countries
	const semiCountry = [];
	semiCountry.push(semi[0].country);

// short - countries 
	const shortCountryDup = [];
	for (let i = 0; i < short.length; i++) 
	{
		shortCountryDup.push(short[i].country);
	}
	const shortCountry = shortCountryDup.filter((c, index) => {
		return shortCountryDup.indexOf(c) === index;
	});
	shortCountry.sort();

// short/long - countries 
	const shortLongCountryDup = [];
	for (let i = 0; i < shortLong.length; i++) 
	{
		shortLongCountryDup.push(shortLong[i].country);
	}
	const shortLongCountry = shortLongCountryDup.filter((c, index) => {
		return shortLongCountryDup.indexOf(c) === index;
	});
	shortLongCountry.sort();

// unkown - countries 
const unkownCountryDup = [];
for (let i = 0; i < noneCoat.length; i++) 
{
	unkownCountryDup.push(noneCoat[i].country);
}
const unkownCountry = unkownCountryDup.filter((c, index) => {
	return unkownCountryDup.indexOf(c) === index;
});
unkownCountry.sort();


// update country select list depending on pattern selection
document.querySelector('#selectPattern').addEventListener('change', function()
{
	//HAIRLESS
	if(selectCoat.value === coatArr[1] && this.value === patternArr[1]) 
	{
		let option = document.createElement('option');
		option.innerHTML = hairlessCountry[1];
		selectCountry.options.add(option);		
	}
	else if (selectCoat.value === coatArr[1] && this.value === patternArr[4]) 
	{
		let option = document.createElement('option');
		option.innerHTML = hairlessCountry[0];
		selectCountry.options.add(option);		
	}
	else if (selectCoat.value === coatArr[1] && this.value === patternArr[9]) 
	{
		let option = document.createElement('option');
		option.innerHTML = hairlessCountry[2];			selectCountry.options.add(option);		
	}
	// LONG
	else if (selectCoat.value === coatArr[2] && this.value === patternArr[1]) 
	{
		let optCountry = [longCountry[0], longCountry[1], longCountry[3]];
		for (let i = 0; i < optCountry.length; i++) 
		{
			let option = document.createElement('option');
			option.innerHTML = optCountry[i];
			selectCountry.options.add(option);	
		}	
	}
	else if (selectCoat.value === coatArr[2] && this.value === patternArr[2]) 
	{
		let option = document.createElement('option');
		option.innerHTML = longCountry[3];
		selectCountry.options.add(option);		
	}
	else if (selectCoat.value === coatArr[2] && this.value === patternArr[3]) 
	{
		let option = document.createElement('option');
		option.innerHTML = longCountry[3];
		selectCountry.options.add(option);		
	}
	else if (selectCoat.value === coatArr[2] && this.value === patternArr[9]) 
	{
		let option = document.createElement('option');
		option.innerHTML = longCountry[2];
		selectCountry.options.add(option);		
	}
	// MEDIUM
	else if (selectCoat.value === coatArr[3] && this.value === patternArr[1]) 
	{
		let option = document.createElement('option');
		option.innerHTML = medCountry[0];
		selectCountry.options.add(option);		
	}
	// REX 
	else if (selectCoat.value === coatArr[4] && this.value === patternArr[1]) 
	{
		let optCountry = [rexCountry[1], rexCountry[2]];
		for (let i = 0; i < optCountry.length; i++) 
		{
			let option = document.createElement('option');
			option.innerHTML = optCountry[i];
			selectCountry.options.add(option);	
		}	
	}
	else if (selectCoat.value === coatArr[4] && this.value === patternArr[9]) 
	{
		let optCountry = [rexCountry[0], rexCountry[2]];
		for (let i = 0; i < optCountry.length; i++) 
		{
			let option = document.createElement('option');
			option.innerHTML = optCountry[i];
			selectCountry.options.add(option);	
		}	
	}
	// SEMI
	else if (selectCoat.value === coatArr[5] && this.value === patternArr[2]) 
	{
		let option = document.createElement('option');
		option.innerHTML = semiCountry[0];
		selectCountry.options.add(option);		
	}
	// SHORT 
	else if (selectCoat.value === coatArr[6] && this.value === patternArr[1]) 
	{
		let option = document.createElement('option');
		option.innerHTML = shortCountry[11];
		selectCountry.options.add(option);		
	}
	else if (selectCoat.value === coatArr[6] && this.value === patternArr[2]) 
	{
		let optCountry = [shortCountry[11], shortCountry[12]];
		for (let i = 0; i < optCountry.length; i++) 
		{
			let option = document.createElement('option');
			option.innerHTML = optCountry[i];
			selectCountry.options.add(option);	
		}	
	}
	else if (selectCoat.value === coatArr[6] && this.value === patternArr[3]) 
	{
		let optCountry = [shortCountry[1], shortCountry[7], shortCountry[9], shortCountry[12]];
		for (let i = 0; i < optCountry.length; i++) 
		{
			let option = document.createElement('option');
			option.innerHTML = optCountry[i];
			selectCountry.options.add(option);	
		}	
	}
	else if (selectCoat.value === coatArr[6] && this.value === patternArr[4]) 
	{
		let optCountry = [shortCountry[7], shortCountry[9], shortCountry[10], shortCountry[11]];
		for (let i = 0; i < optCountry.length; i++) 
		{
			let option = document.createElement('option');
			option.innerHTML = optCountry[i];
			selectCountry.options.add(option);	
		}	
	}
	else if (selectCoat.value === coatArr[6] && this.value === patternArr[5]) 
	{
		let optCountry = [shortCountry[3], shortCountry[11]];
		for (let i = 0; i < optCountry.length; i++) 
		{
			let option = document.createElement('option');
			option.innerHTML = optCountry[i];
			selectCountry.options.add(option);	
		}	
	}
	else if (selectCoat.value === coatArr[6] && this.value === patternArr[6]) 
	{
		let option = document.createElement('option');
		option.innerHTML = shortCountry[11];
		selectCountry.options.add(option);		
	}
	else if (selectCoat.value === coatArr[6] && this.value === patternArr[7]) 
	{
		let optCountry = [shortCountry[2], shortCountry[6]];
		for (let i = 0; i < optCountry.length; i++) 
		{
			let option = document.createElement('option');
			option.innerHTML = optCountry[i];
			selectCountry.options.add(option);	
		}	
	}
	else if (selectCoat.value === coatArr[6] && this.value === patternArr[8]) 
	{
		let optCountry = [shortCountry[4], shortCountry[5], shortCountry[8]];
		for (let i = 0; i < optCountry.length; i++) 
		{
			let option = document.createElement('option');
			option.innerHTML = optCountry[i];
			selectCountry.options.add(option);	
		}	
	}
	else if (selectCoat.value === coatArr[6] && this.value === patternArr[9]) 
	{
		let option = document.createElement('option');
		option.innerHTML = shortCountry[0];
		selectCountry.options.add(option);	
	}	
	// SHORT/LONG
	else if (selectCoat.value === coatArr[7] && this.value === patternArr[1]) 
	{
		let optCountry = [shortLongCountry[1], shortLongCountry[2]];
		for (let i = 0; i < optCountry.length; i++) 
		{
			let option = document.createElement('option');
			option.innerHTML = optCountry[i];
			selectCountry.options.add(option);	
		}	
	}
	else if (selectCoat.value === coatArr[7] && this.value === patternArr[2]) 
	{
		let option = document.createElement('option');
		option.innerHTML = shortLongCountry[0];
		selectCountry.options.add(option);	
	}
	else if (selectCoat.value === coatArr[7] && this.value === patternArr[9]) 
	{
		let option = document.createElement('option');
		option.innerHTML = shortLongCountry[1];
		selectCountry.options.add(option);	
	}
	else if (selectCoat.value === coatArr[7] && this.value === patternArr[10]) 
	{
		let option = document.createElement('option');
		option.innerHTML = shortLongCountry[2];
		selectCountry.options.add(option);	
	}
	//UNKNOWN 
	else if (selectCoat.value === coatArr[8] && this.value === patternArr[1]) 
	{
		let option = document.createElement('option');
		option.innerHTML = unkownCountry[0];
		selectCountry.options.add(option);	
	}
	else if (selectCoat.value === coatArr[8] && this.value === patternArr[4]) 
	{
		let option = document.createElement('option');
		option.innerHTML = unkownCountry[1];
		selectCountry.options.add(option);	
	}
	else if (selectCoat.value === coatArr[8] && this.value === patternArr[10]) 
	{
		let option = document.createElement('option');
		option.innerHTML = unkownCountry[1];
		selectCountry.options.add(option);	
	}
});	

// final selection of breed. pushes breed and 3 cat criteria to arrays
// to use on next html page
document.querySelector('#selectCountry').addEventListener('change', function()
{
	// HAIRLESS BREEDS
	if(selectCoat.value === coatArr[1] && selectPattern.value === patternArr[1]
		&& this.value === countryArr[2])
	{
		criteria.push(coatArr[1], patternArr[1], countryArr[2]);
		breed.push(hairless[1].breed);

	}
	else if(selectCoat.value === coatArr[1] && selectPattern.value === patternArr[4]
		&& this.value === countryArr[14])
	{
		criteria.push(coatArr[1], patternArr[4], countryArr[14]);
		breed.push(hairless[0].breed);

	}
	else if(selectCoat.value === coatArr[1] && selectPattern.value === patternArr[9]
		&& this.value === countryArr[16])
	{
		criteria.push(coatArr[1], patternArr[9], countryArr[16]);
		breed.push(hairless[2].breed);

	}
	// LONG BREEDS
	else if(selectCoat.value === coatArr[2] && selectPattern.value === patternArr[1]
		&& this.value === countryArr[7])
	{
		criteria.push(coatArr[2], patternArr[1], countryArr[7]);
		breed.push(long[4].breed);

	}
	else if(selectCoat.value === coatArr[2] && selectPattern.value === patternArr[1]
		&& this.value === countryArr[9])
	{
		criteria.push(coatArr[2], patternArr[1], countryArr[9]);
		breed.push(long[5].breed);

	}
	else if(selectCoat.value === coatArr[2] && selectPattern.value === patternArr[1]
		&& this.value === countryArr[18])
	{
		criteria.push(coatArr[2], patternArr[1], countryArr[18]);
		breed.push(long[6].breed);

	}
	else if(selectCoat.value === coatArr[2] && selectPattern.value === patternArr[2]
		&& this.value === countryArr[18])
	{
		criteria.push(coatArr[2], patternArr[2], countryArr[18]);
		breed.push(long[3].breed);

	}
	else if(selectCoat.value === coatArr[2] && selectPattern.value === patternArr[3]
		&& this.value === countryArr[18])
	{
		criteria.push(coatArr[2], patternArr[3], countryArr[18]);
		breed.push(long[0].breed);

	}
	else if(selectCoat.value === coatArr[2] && selectPattern.value === patternArr[9]
		&& this.value === countryArr[17])
	{
		criteria.push(coatArr[2], patternArr[9], countryArr[17]);
		breed.push(long[1].breed, long[2].breed);

	}
	// MED BREED
	else if(selectCoat.value === coatArr[3] && selectPattern.value === patternArr[1]
		&& this.value === countryArr[17])
	{
		criteria.push(coatArr[3], patternArr[1], countryArr[17]);
		breed.push(med[0].breed);

	}
	// REX BREEDS 
	else if(selectCoat.value === coatArr[4] && selectPattern.value === patternArr[1]
		&& this.value === countryArr[17])
	{
		criteria.push(coatArr[4], patternArr[1], countryArr[17]);
		breed.push(rex[0].breed);

	}
	else if(selectCoat.value === coatArr[4] && selectPattern.value === patternArr[1]
		&& this.value === countryArr[18])
	{
		criteria.push(coatArr[4], patternArr[1], countryArr[18]);
		breed.push(rex[2].breed);

	}
	else if(selectCoat.value === coatArr[4] && selectPattern.value === patternArr[9]
		&& this.value === countryArr[4])
	{
		criteria.push(coatArr[4], patternArr[9], countryArr[4]);
		breed.push(rex[1].breed);

	}
	else if(selectCoat.value === coatArr[4] && selectPattern.value === patternArr[9]
		&& this.value === countryArr[18])
	{
		criteria.push(coatArr[4], patternArr[9], countryArr[18]);
		breed.push(rex[3].breed);

	}
	// SEMILONG BREEDS 
	else if(selectCoat.value === coatArr[5] && selectPattern.value === patternArr[2]
		&& this.value === countryArr[15])
	{
		criteria.push(coatArr[5], patternArr[2], countryArr[15]);
		breed.push(semi[0].breed);

	}
	// SHORT 
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[1]
		&& this.value === countryArr[18])
	{
		criteria.push(coatArr[6], patternArr[1], countryArr[18]);
		breed.push(short[10].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[2]
		&& this.value === countryArr[18])
	{
		criteria.push(coatArr[6], patternArr[2], countryArr[18]);
		breed.push(short[1].breed);
	
	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[2]
		&& this.value === countryArr[19])
	{
		criteria.push(coatArr[6], patternArr[2], countryArr[19]);
		breed.push(short[14].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[3]
		&& this.value === countryArr[2])
	{
		criteria.push(coatArr[6], patternArr[3], countryArr[2]);
		breed.push(short[23].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[3]
		&& this.value === countryArr[12])
	{
		criteria.push(coatArr[6], patternArr[3], countryArr[12]);
		breed.push(short[12].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[3]
		&& this.value === countryArr[14])
	{
		criteria.push(coatArr[6], patternArr[3], countryArr[14]);
		breed.push(short[19].breed, short[22].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[3]
		&& this.value === countryArr[19])
	{
		criteria.push(coatArr[6], patternArr[3], countryArr[19]);
		breed.push(short[7].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[3]
		&& this.value === countryArr[19])
	{
		criteria.push(coatArr[6], patternArr[3], countryArr[19]);
		breed.push(short[7].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[4]
		&& this.value === countryArr[12])
	{
		criteria.push(coatArr[6], patternArr[4], countryArr[12]);
		breed.push(short[16].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[4]
		&& this.value === countryArr[14])
	{
		criteria.push(coatArr[6], patternArr[4], countryArr[14]);
		breed.push(short[11].breed, short[17]);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[4]
		&& this.value === countryArr[17])
	{
		criteria.push(coatArr[6], patternArr[4], countryArr[17]);
		breed.push(short[3].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[4]
		&& this.value === countryArr[18])
	{
		criteria.push(coatArr[6], patternArr[4], countryArr[18]);
		breed.push(short[5].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[5]
		&& this.value === countryArr[5])
	{
		criteria.push(coatArr[6], patternArr[5], countryArr[5]);
		breed.push(short[9].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[5]
		&& this.value === countryArr[18])
	{
		criteria.push(coatArr[6], patternArr[5], countryArr[18]);
		breed.push(short[13].breed, short[15].breed, short[18].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[6]
		&& this.value === countryArr[18])
	{
		criteria.push(coatArr[6], patternArr[6], countryArr[18]);
		breed.push(short[4].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[7]
		&& this.value === countryArr[3])
	{
		criteria.push(coatArr[6], patternArr[7], countryArr[3]);
		breed.push(short[8].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[7]
		&& this.value === countryArr[11])
	{
		criteria.push(coatArr[6], patternArr[7], countryArr[11]);
		breed.push(short[21].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[8]
		&& this.value === countryArr[6])
	{
		criteria.push(coatArr[6], patternArr[8], countryArr[6]);
		breed.push(short[0].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[8]
		&& this.value === countryArr[13])
	{
		criteria.push(coatArr[6], patternArr[8], countryArr[13]);
		breed.push(short[20].breed);

	}
	else if(selectCoat.value === coatArr[6] && selectPattern.value === patternArr[9]
		&& this.value === countryArr[1])
	{
		criteria.push(coatArr[6], patternArr[9], countryArr[1]);
		breed.push(short[2].breed);

	}
	// SHORTLONG BREEDS 
	else if(selectCoat.value === coatArr[7] && selectPattern.value === patternArr[1]
		&& this.value === countryArr[17])
	{
		criteria.push(coatArr[7], patternArr[1], countryArr[17]);
		breed.push(shortLong[5].breed);

	}
	else if(selectCoat.value === coatArr[7] && selectPattern.value === patternArr[1]
		&& this.value === countryArr[18])
	{
		criteria.push(coatArr[7], patternArr[1], countryArr[18]);
		breed.push(shortLong[0].breed, shortLong[2]);

	}
	else if(selectCoat.value === coatArr[7] && selectPattern.value === patternArr[2]
		&& this.value === countryArr[10])
	{
		criteria.push(coatArr[7], patternArr[2], countryArr[10]);
		breed.push(shortLong[3].breed);

	}
	else if(selectCoat.value === coatArr[7] && selectPattern.value === patternArr[9]
		&& this.value === countryArr[17])
	{
		criteria.push(coatArr[7], patternArr[9], countryArr[17]);
		breed.push(shortLong[1].breed);

	}
	else if(selectCoat.value === coatArr[7] && selectPattern.value === patternArr[10]
		&& this.value === countryArr[18])
	{
		criteria.push(coatArr[7], patternArr[10], countryArr[18]);
		breed.push(shortLong[4].breed);

	}
	// UNKNOWN BREEDS
	else if(selectCoat.value === coatArr[8] && selectPattern.value === patternArr[1]
		&& this.value === countryArr[12])
	{
		criteria.push(coatArr[8], patternArr[1], countryArr[12]);
		breed.push(noneCoat[1].breed);

	}
	else if(selectCoat.value === coatArr[8] && selectPattern.value === patternArr[4]
		&& this.value === countryArr[18])
	{
		criteria.push(coatArr[8], patternArr[4], countryArr[18]);
		breed.push(noneCoat[0].breed);

	}
	else if(selectCoat.value === coatArr[8] && selectPattern.value === patternArr[10]
		&& this.value === countryArr[18])
	{
		criteria.push(coatArr[8], patternArr[10], countryArr[18]);
		breed.push(noneCoat[2].breed);

	}

// log and check data is correct, matching dropdown selections and returning breed
	console.log(criteria);
	console.log(breed);

// form submit button linking to next html page
	document.getElementById('submitBtn').onclick = function () {
		window.location.href = '/HTML/catSelect.html';
    };



});














  }); 

})();