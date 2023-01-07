function updateSubTotal() {
    let arr = document.querySelectorAll('.__value_')
    var total = 0

    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i].value)) {
            total += parseInt(arr[i].value);
        }
    }
    document.getElementById('__value_total').value = `R$ ${total.toFixed(2)}`;
}

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
            trash.onclick = () => {
                trash.parentNode.parentNode.parentNode.removeChild(trash.parentNode.parentNode);
                cellsId = [
                    '__desc_',
                    '__value_',
                    '__trash_',
                    '__row_',
                ];
                for (let j = 0; j < 4; j++) {
                    var ele = document.getElementsByClassName(`${cellsId[j]}`)
                    Array.prototype.forEach.call(ele, function(element, idx) {
                        element.id = `${cellsId[j]}${idx}`;
                    });
                };
            };
        };
        row.appendChild(cell);
        row.id = (`__row_${tbodyRowCount}`);
        row.setAttribute('class', '__row_');
    };
    tableBody.appendChild(row);
};
