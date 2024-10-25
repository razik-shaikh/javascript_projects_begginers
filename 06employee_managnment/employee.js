const form = document.querySelector('form')//select form tag and add submit event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (currentRow) {
        updateEmployee(); // Update existing employee
    } else {
        addEmployee(); // Add new employee
    }
    form.reset();
});
// function addEmployee(){   
// } OR
const addEmployee = () => {
    const name = document.getElementById('name').value;
    const age = document.querySelector('#age').value;
    // const email = document.getElementsByClassName('email')[0].value;//OR
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    console.log(name, age, email, department)

    const row = document.createElement('tr');
    row.innerHTML = `<tr>
                <td>${name}</td>
                <td>${age}</td>
                <td>${email}</td>
                <td>${department}</td>
                <td><button onclick="editEmployee(this)">Edit</button></td>
                <td><button onclick="deleteRow(this)">Delete</button></td>
                </tr>`
    document.getElementsByTagName('tbody')[0].appendChild(row);

}
const deleteRow = (button1) => {
    /* Jab aap deleteRow(this) ko button ke onclick se call karte hain, tab this us specific button ko refer karta hai jo click kiya gaya. Ye button button parameter ke roop mein deleteRow function ko pass hota hai.*/
    let row = button1.closest('tr');
    console.log(button1)
    row.remove();

}

let currentRow = null;
const editEmployee = (button) => {
    currentRow = button.closest('tr'); // Get the row to edit
    const inputFieldCells = currentRow.getElementsByTagName('td');

    // Populate the form with existing values
    document.getElementById('name').value = inputFieldCells[0].innerText;
    document.getElementById('age').value = inputFieldCells[1].innerText;
    document.getElementById('email').value = inputFieldCells[2].innerText;
    document.getElementById('department').value = inputFieldCells[3].innerText;
}

const updateEmployee = () => {
    const cells = currentRow.getElementsByTagName('td');
    cells[0].innerText = document.getElementById('name').value;
    cells[1].innerText = document.getElementById('age').value;
    cells[2].innerText = document.getElementById('email').value;
    cells[3].innerText = document.getElementById('department').value;

    currentRow = null; // Reset currentRow after update
}

//for search
document.getElementById('searchInput').addEventListener('keyup', (event) => {

    let filter = event.target.value.toLowerCase();
    console.log(event.target.value.toLowerCase());
    let rows = document.querySelectorAll('#employeeTableBody tr');

    rows.forEach(row => {
        let cells = row.getElementsByTagName('td');
        let name = cells[0].innerHTML.toLowerCase();
        let department = cells[3].innerHTML.toLowerCase();
        let age = cells[1].innerHTML.toLowerCase();

        if (name.includes(filter) || department.includes(filter) || age.includes(filter)) {
            //.includes(): This method returns true if the name string contains the filter substring, and false otherwise.
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });


});
