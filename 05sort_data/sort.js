function filterList() {
    const searchInput = document.querySelector('#searchInput');
    const filter = searchInput.value.toUpperCase();
    const myTable = document.getElementById("dataTable");
    let tr = myTable.getElementsByTagName('tr');


    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td');
        let rowMatched = false
        for (j = 0; j < td.length; j++) {
            textValue = td[j].textContent || td[j].innerText;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                rowMatched = true;
            }
        }
        if (rowMatched) {
            tr[i].style.display = ""; 
        } else {
            tr[i].style.display = "none";
        }

    }

}
let sortOrder = true; // true for ascending, false for descending

function sortTable(columnIndex) {
    const table = document.getElementById('dataTable');
    const rows = Array.from(table.rows).slice(1); // Get all rows except the header

    // Sort the rows based on the specified column
    rows.sort((a, b) => {
        const cellA = a.cells[columnIndex].innerText.toUpperCase().trim();
        const cellB = b.cells[columnIndex].innerText.toUpperCase().trim();

        // Compare based on the selected column's sort order
        if (cellA < cellB) {
            return sortOrder ? -1 : 1;//it is ternary oprator
            // if (sortOrder) { Or of ternary oprator
            //     return 1; // Ascending order
            // } else {
            //     return -1; // Descending order
            // }
        }
        if (cellA > cellB) {
            return sortOrder ? 1 : -1;
        }
        return 0; // If they are equal
    });

    // Clear existing rows and reattach sorted rows
    const tbody = table.tBodies[0];//tBodies 
    rows.forEach(row => tbody.appendChild(row));


    sortOrder = !sortOrder;


}