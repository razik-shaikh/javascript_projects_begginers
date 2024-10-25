let paginationContainer = document.getElementById('paginationContainer');
        let pageNumbersContainer = document.getElementById('pageNumbers');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        const itemsPerPage = 10;
        const totalItems = 100;
        let currentPage = 1;
        function renderItems() {
            const itemContainer = document.getElementById('itemList');
            itemContainer.innerHTML = '';
            // Calculate the starting index for the items to display
            const start = (currentPage - 1) * itemsPerPage;
            for (i = 0; i < itemsPerPage; i++) {
                const itemIndex = start + i;
                if (itemIndex < totalItems) {
                    const item = document.createElement('li')
                    item.innerText = `item ${itemIndex + 1}`;
                    itemContainer.appendChild(item);
                }
            }

        }
        function renderPagination() {
            pageNumbersContainer.innerHTML = '';

            // Calculate total pages
            // const totalPages = Math.ceil(totalItems / itemsPerPage);
            const totalPages = (totalItems / itemsPerPage);

            // Loop to create page buttons
            for (let i = 1; i <= totalPages; i++) {
                const button = document.createElement('button'); // Create button 
                button.innerText = i; // Set button text
                button.onclick = () => { // Add click event to each button
                    currentPage = i; // Update current page
                    renderItems(); // Render items for the selected page
                };
                pageNumbersContainer.appendChild(button); // Add button to the pagination
            }
        }
        function navigationButtons() {
            prevBtn.onclick = () => {
                if (currentPage > 1) {
                    currentPage--;
                    renderItems();
                }
            }
            nextBtn.onclick = () => {
                if (currentPage < 10) {
                    currentPage++;
                    renderItems();
                }
            }
        }

        renderItems();
        navigationButtons();
        renderPagination();
