

clearContent();

function clearContent(){
    document.getElementById('add_student').style.display = "none";
    document.getElementById('all_students').style.display = "none";
}

$("#submitbtn").click(async function () {
  var id = $("#sid").val();
  var name = $("#sname").val();
  var address = $("#saddress").val();
  var salary = $("#ssalary").val();

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
  myHeaders.append(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );

  fetch("http://127.0.0.1:8080/student", {
    // mode: "no-cors",
    method: "POST",
    body: JSON.stringify({
      id: id,
      name: name,
      address: address,
      salary: salary,
    }),
    headers: { "Content-Type": "application/json" },
  }).then(function (response) {
    if (response.ok) {
      console.log("save successful");
      getAll();
    }
  });
});

function clearAll() {
  $("#sid").val("");
  $("#sname").val("");
  $("#saddress").val("");
  $("#ssalary").val("");
}

function addStudent(){

    clearContent();
    document.getElementById('add_student').style.display = "block";

}

async function getAll() {
    clearContent();
    
  const response = await fetch("http://127.0.0.1:8080/student", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);
  const data = await response.json();
  console.log(data);
  $("#tbl_student").DataTable({

    data: data,
    "columns": [
        {"data": "id"},
        {"data": "name"},
        {"data": "address"},
        {"data": "salary"}
    ],
    "bDestroy": true

})

document.getElementById('all_students').style.display = "block";


  //   length = data.drinks.length;
  //   console.log(data);
}
