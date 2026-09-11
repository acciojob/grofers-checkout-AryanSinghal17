const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    const price = document.querySelectorAll(".price");

    let total = 0;

    price.forEach((pric) => {
        total += Number(pric.textContent);
    });

    const table = document.querySelector("table");

    const row = document.createElement("tr");
    const cell = document.createElement("td");

    cell.textContent = total;

    row.appendChild(cell);

    table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);