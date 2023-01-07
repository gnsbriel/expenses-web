document.getElementById('expenses').onclick = () => {

document.getElementById('add_new_expense').onclick = () => {
    const table = document.getElementById("expensesTable");
    const tableBody = document.getElementById('expensesTable:body');
    const tbodyRowCount = table.tBodies[0].rows.length;

    const row = document.createElement('tr');
    for (let j = 0; j < 3; j++) {
        const cell = document.createElement('td');
        if ( j == 0) {
            const input = document.createElement('input');
            cell.appendChild(input);
            input.id = (`__desc_${tbodyRowCount}`);
            input.placeholder = ('Description');
            input.type = ('text');
            input.setAttribute('class', '__desc_');
        } else if (j == 1) {
            const input = document.createElement('input');
            cell.appendChild(input);
            input.id = (`__value_${tbodyRowCount}`);
            input.placeholder = ('Amount');
            input.type = ('number');
            input.setAttribute('class', '__value_');
            input.id = (`${cellsId[j]}${tbodyRowCount}`);
            input.placeholder = (`${cellsPlaceholder[j]}`);
            input.type = (`${cellsType[j]}`);
        } else {
        } else if (j == 2) {
            const trash = document.createElement('button');
            cell.appendChild(trash);
            trash.textContent = "❌";
            trash.id = (`__trash_${tbodyRowCount}`);
            trash.setAttribute('class', '__trash_');
        };
        row.appendChild(cell);
        row.id = (`__row_${tbodyRowCount}`);
        row.setAttribute('class', '__row_');
    };
    tableBody.appendChild(row);
};
