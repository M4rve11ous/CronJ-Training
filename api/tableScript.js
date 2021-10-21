const api_url = 
      "https://jsonplaceholder.typicode.com/users";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>ID</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r.id} </td>
    <td>${r.name}</td>
    <td>${r.username}</td> 
    <td>${r.email}</td>
    <td>${r.phone}</td>
    <td>${r.website}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}

function logout(){
    localStorage.clear();
    sessionStorage.clear();
    window.open("main.html");
}

function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("employees");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }