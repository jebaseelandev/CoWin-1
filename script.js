// api url
const api_url =
	"https://cdn-api.co-vin.in/api/v2/admin/location/states";

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
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
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

// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>State Id</th>
		<th>Name</th> 
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.states) {
		tab += `<tr>
	<td>${r.state_id} </td>
	<td>${r.state_name}</td> 	
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("states").innerHTML = tab;
}
