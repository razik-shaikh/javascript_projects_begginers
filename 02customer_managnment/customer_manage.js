function submitForm() {
    if (validateForm()) {
        addCustomer()
        document.getElementById('customerForm').reset()
    }

}
function validateForm() {
    let username = document.getElementById("name")
    let useremail = document.getElementById("email")
    let custType = document.getElementById('csType').value


    if (username.value.trim() === "" || useremail.value.trim() === "") {
        alert("Ensure you input a value in both fields!");
        return false

    }
    if (custType === "existing") {
        let amount = document.getElementById('amount').value;

        if (amount.trim() === "") {
            alert("Please enter amount")
            return false
        }
    }
    // alert("This form has been successfully submitted!");
    return true

}

function changCT() {
    let amountField = document.getElementById("amt")
    let custType = document.getElementById('csType').value

    if (custType === "existing") {
        amountField.style.display = 'table-row'

    } else {
        amountField.style.display = 'none'

    }
}

function addCustomer() {

    let name = document.getElementById("name").value.trim()
    let email = document.getElementById("email").value.trim()
    let custType = document.getElementById('csType').value
    let amount = document.getElementById('amount').value;

    let row = document.createElement('tr')

    if (custType === "existing") {
        row.innerHTML = `<tr>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${amount}</td>
                    <td><button class="btn btn-danger" onclick="removeRow(this)">remove</button><td>
                </tr>`;
        document.getElementById('existingTable').getElementsByTagName("tbody")[0].appendChild(row)
    }
    else {
        row.innerHTML = `
                <tr>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td><button class="btn btn-primary" onclick="approveRow(this)">Approve</button><td>
                </tr>`;
        document.getElementById('newTable').getElementsByTagName("tbody")[0].appendChild(row)
    }

}

function approveRow(button) {
    let row = button.parentElement.parentElement;
    let name = row.cells[0].textContent
    let email = row.cells[1].textContent
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td></td>
        <td><button class="btn btn-danger" onclick="removeRow(this)">Remove</button></td>
    `;
    document.getElementById('existingTable').getElementsByTagName("tbody")[0].appendChild(newRow);

    // Remove the row from the New Customers table
    row.remove();
}
function removeRow(button) {
    // let row = button.parentNode
    // row.removeChild(row);
    let row = button.closest('tr')//new method
    row.remove()
}
document.getElementById('')
