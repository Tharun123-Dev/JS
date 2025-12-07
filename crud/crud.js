let data = [];
let editIndex = -1;

function createdata() {
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let email = document.getElementById("email").value.trim();
    let city = document.getElementById("city").value.trim();

    // 🔥 SIMPLE VALIDATION (Empty check)
    if (name === "" || age === "" || email === "" || city === "") {
        showError("All fields are required!");
        return;
    }

    clearError(); // remove error when valid

    if (editIndex === -1) {
        data.push({ name, age, email, city });
    } else {
        data[editIndex].name = name;
        data[editIndex].age = age;
        data[editIndex].email = email;
        data[editIndex].city = city;
        editIndex = -1;
    }

    // Reset fields
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("city").value = "";

    displayData();
}

function displayData() {
    let tabledata = "";
    data.forEach((element, index) => {
        tabledata += `
        <tr>
            <td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.email}</td>
            <td>${element.city}</td>
            <td>
                <button onclick="editData(${index})">Edit</button>
                <button onclick="deleteData(${index})">Delete</button>
            </td>
        </tr>`;
    });
    document.getElementById("tbody").innerHTML = tabledata;
}

function editData(index) {
    document.getElementById("name").value = data[index].name;
    document.getElementById("age").value = data[index].age;
    document.getElementById("email").value = data[index].email;
    document.getElementById("city").value = data[index].city;

    editIndex = index;
}

function deleteData(index) {
    data.splice(index, 1);
    displayData();
}

/* ---------- ERROR FUNCTIONS ---------- */
function showError(msg) {
    let box = document.getElementById("error-box");
    box.innerHTML = msg;
    box.style.display = "block";

    // Add shake animation
    box.classList.add("shake");
    setTimeout(() => {
        box.classList.remove("shake");
    }, 500);
}

function clearError() {
    let box = document.getElementById("error-box");
    box.style.display = "none";
}
