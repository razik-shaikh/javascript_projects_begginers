//Please Add Your JS Code Here...

let subject = document.getElementById('subject').value;

let remaining = document.getElementById('remaining').value

let assignedBudgets = {};
function select() {

    let budgetSelect = document.getElementById('budget');
    let selectedOption = budgetSelect.options[budgetSelect.selectedIndex];
    let budgetName = selectedOption.value;
    let budgetAmount = parseFloat(selectedOption.getAttribute('data-amount') || 0);

    if (assignedBudgets[budgetName] !== undefined) {
        document.getElementById('budgetamt').value = assignedBudgets[budgetName];
        document.getElementById('remaining').value = assignedBudgets[budgetName];
        document.getElementById('balance').value = assignedBudgets[budgetName];
        document.getElementById('budgetamt').classList.add('disabled');
    }
    else {
        document.getElementById('budgetamt').value = ''; // Allow user to input their own amount
        document.getElementById('remaining').value = ''; // Clear remaining
        document.getElementById('balance').value = ''; // Clear balance
        document.getElementById('budgetamt').classList.remove('disabled');
    }
}
function updateBalance() {
    let budgetamount = document.getElementById('budgetamt').value;
    let amount = document.getElementById('amount').value
    let remainingBalance = budgetamount - amount
    document.getElementById('balance').value = remainingBalance
    // budgetamount = remainingBalance -->for remove
}
function submitForm(event) {
    event.preventDefault();
    let budgetName = document.getElementById('budget').value
    let budgetAmount = document.getElementById('budgetamt').value;
    let amount = document.getElementById('amount').value
    if (!assignedBudgets[budgetName]) {
        assignedBudgets[budgetName] = budgetAmount;
    }

    assignedBudgets[budgetName] -= amount;
    document.getElementById('remaining').value = assignedBudgets[budgetName];

    addBudget()
    select()
    // updateBudget()
    alert("Form has been submitted")
    document.getElementById('budgetform').reset()

}
function addBudget() {
    let budgetamount = document.getElementById('budgetamt').value;
    let amount = document.getElementById('amount').value
    let subject = document.getElementById('subject').value;
    let balance = document.getElementById('balance').value
    let budgetname = document.getElementById('budget').value


    const row = document.createElement('tr')
    row.innerHTML = `<tr>
         <td>${subject}</td> 
         <td>${budgetname}</td> 
         <td>${amount}</td> 
         <td>${balance}</td> 
         <td><button class="btn btn-danger" onclick="removeRow(this)">remove</button><td> 
         </tr>`
    document.getElementById('viewtable').getElementsByTagName('tbody')[0].appendChild(row)
}
function removeRow(button) {
    let row = button.closest('tr');
    row.remove();
}
function updateBudget() {

}

function updateBalance() {
    let budgetAmount = parseFloat(document.getElementById('budgetamt').value) || 0;
    let amount = parseFloat(document.getElementById('amount').value) || 0;
    let remainingBudget = budgetAmount - amount;
    document.getElementById('balance').value = remainingBudget;
}