document.getElementById('expenses').onclick = () => {

    const table = document.getElementById("expensesTable");
    const tableBody = document.getElementById('expensesTable:body');
    const tbodyRowCount = table.tBodies[0].rows.length;

    const row = document.createElement('tr');

    for (let j = 0; j < 3; j++) {

        cellsId = [
            '__desc_',
            '__value_'
        ]

        cellsPlaceholder = [
            'Description',
            'Amount'
        ];

        cellsType = [
            'text',
            'number'
        ];

        const cell = document.createElement('td');
        if ( j != 2) {
            const input = document.createElement('input');
            cell.appendChild(input);
            input.id = (`${cellsId[j]}${tbodyRowCount}`);
            input.placeholder = (`${cellsPlaceholder[j]}`);
            input.type = (`${cellsType[j]}`);
        } else {
            const trash = document.createElement('button');
            cell.appendChild(trash).textContent = "🚮";
        }

        row.appendChild(cell);
    };
    tableBody.appendChild(row);
};
