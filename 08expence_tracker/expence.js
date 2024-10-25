function submitData(event) {
    event.preventDefault()
    addExpence();
    totalExpenses();
    form.reset();
}
const form = document.querySelector('form');
form.addEventListener('submit', submitData);

const addExpence = () => {
    let amount = document.getElementById('amount').value;
    let category = document.getElementById('category').value;
    let description = document.getElementById('description').value

    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${amount}</td>
        <td>${category}</td>
        <td>${description}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
        `//NOTE:no need to write tr because we are created it
    document.querySelector('tbody').appendChild(row);
}
let totalAmount = 0;
const totalExpenses = () => {
    let amount = parseFloat(document.getElementById('amount').value);
    totalAmount += amount;
    // let totalAmount = document.getElementById('totalExpenses')
    document.getElementById('totalExpenses').innerText = totalAmount.toFixed(2)
}
const deleteRow = (button) => {
    let row = button.closest('tr')
    let amountCell = row.cells[0]; // Get the first cell (Amount column)
    let amount = parseFloat(amountCell.innerText)
    totalAmount -= amount;
    console.log(amount)
    document.getElementById('totalExpenses').innerText = totalAmount.toFixed(2);
    row.remove();

}
