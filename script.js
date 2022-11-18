var SelectedRow = null;
//Show Alerts
function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Clear All Fields
function clearFields() {
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#rollNo").value = "";

}

//Add Data
document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();
    //Get Form Values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNo = document.querySelector("#rollNo").value;
    //validate
    if (firstName == "" || lastName == "" || rollNo == "") {
        showAlert("Please fill in all fields", "danger");
    }
    else {
        if (SelectedRow == null) {
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${rollNo}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;

            list.appendChild(row);
            SelectedRow = null;
            showAlert("Student Added", "success");
        } else {
            SelectedRow.children[0].textContent = firstName;
            SelectedRow.children[1].textContent = lastName;
            SelectedRow.children[2].textContent = rollNo;

        }
    }
});

//Delete Data  b

document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }
});