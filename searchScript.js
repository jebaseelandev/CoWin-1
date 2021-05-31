 
 const api_url =
 "https://cdn-api.co-vin.in/api/v2/admin/location/states";

 // Calling that async function
getapi(api_url);

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		//hideloader();
	}
	loadSelect(data);
	//show(data);
}
function ShowHide(id) {
    let array = ['map', 'pin', 'district'];

    for (let item of array) {
        let map=document.getElementById(array[0]);
        let pin=document.getElementById(array[1]);
        let district=document.getElementById(array[2]);
        if(id==array[0]){
             
            pin.style.display = 'none'
            district.style.display = 'none'
              
            if(map.style.display=='block'){
                map.style.display ='none';            
            }else{
                map.style.display ='block';
            }
            break;
        } 
      else if(id==array[1]){
        var e = document.getElementById(id);
         
        map.style.display = 'none'
        district.style.display = 'none';
          
  
        if(pin.style.display=='block'){
            pin.style.display ='none';            
        }else{
            pin.style.display ='block';
        }
        break;
      }
      else if(id==array[2]){
        var e = document.getElementById(id);
        
        map.style.display = 'none'
        pin.style.display = 'none'

        if(district.style.display=='block'){
            district.style.display ='none';            
        }else{
            district.style.display ='block';
        }  
        break;
    }
      }
      
}


function loadSelectedState(value){  
	let selectedState=value;
	const url = 'https://cdn-api.co-vin.in/api/v2/admin/location/districts/'+selectedState;
	getdistrictapi(url); 
	
}
// Defining async function
async function getdistrictapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		//hideloader();
	}
	loadDistrict(data);
	//show(data);
}

function loadDistrict(data){
	let dropdown = $('#district-dropdown');
	dropdown.empty();
	dropdown.append('<option selected="true" disabled>Choose District/City</option>');
	dropdown.prop('selectedIndex', 0);

	for (let r of data.districts) {
		dropdown.append($('<option></option>').attr('value', r.district_id).text(r.district_name));
		//document.getElementById("locality-dropdown").innerHTML = r.state_name;
	}
}


function loadSelect(data){
	let dropdown = $('#locality-dropdown');
	dropdown.empty();
	dropdown.append('<option selected="true" disabled>Choose State/Province</option>');
	dropdown.prop('selectedIndex', 0);

	//const url = 'https://cdn-api.co-vin.in/api/v2/admin/location/states';

	// Populate dropdown with list of provinces
	 

	for (let r of data.states) {
		dropdown.append($('<option></option>').attr('value', r.state_id).text(r.state_name));
		//document.getElementById("locality-dropdown").innerHTML = r.state_name;
	}
}

function validateForm()
{
let droValue=document.getElementById("district-dropdown").value;
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
const disurl = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+droValue+'&'+'date'+'='+date;
getdistrictuapi(disurl);
}

// Defining async function
async function getdistrictuapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		//hideloader();
	}
	loadDistrictValues(data);
	//show(data);
}
function loadDistrictValues(data){
     
}



var dataSet = [
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sydney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sydney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];
 
$(document).ready(function() {
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "Position" },
            { title: "Office" },
            { title: "Extn." },
            { title: "Start date" },
            { title: "Salary" }
        ]
    } );
} );