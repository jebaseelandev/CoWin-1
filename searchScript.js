 
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