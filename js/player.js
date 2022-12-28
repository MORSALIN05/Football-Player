const eachPlayer1 = document.querySelectorAll('.each-player1 h5');
//console.log(eachPlayer1.);
let targetEvent;
function playerEntry() {
    const parentNode = targetEvent.parentNode;
    const children = parentNode.children;
    const children1 = children[0].innerText;

    const li = document.createElement('li');
    li.innerText = children1;
    return li;
}
document.getElementById('calculate-button').addEventListener('click', function () {
    const perPlayerValue = document.getElementById('single-player-expense').value;
    //console.log(perPlayerValue);
    const playerValueTotal = perPlayerValue * 5;
    const perPlayerExpense = document.getElementById('player-expense');
    perPlayerExpense.innerText = playerValueTotal;
    //console.log(perPlayerExpense);
})
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerValue = document.getElementById('manager-value').value;
    const coachValue = document.getElementById('coach-value').value;
    const totalPlayerExpense = document.getElementById('player-expense').innerText;
    const totalExpenseElement = document.getElementById('total-expense');
    const totalExpenseValue = parseInt(totalPlayerExpense) + parseInt(managerValue) + parseInt(coachValue);
    totalExpenseElement.innerText = totalExpenseValue;
})
const selectButton = document.getElementsByClassName('select-button');
console.log(selectButton)

for (var i = 0; i < selectButton.length; i++) {
    selectButton[i].addEventListener('click', function (event) {
        targetEvent = event.target;
        console.log(targetEvent);

        targetEvent.disabled = true;

        let colorAsString1 = 'rgb(158, 65, 65)';
        targetEvent.style.backgroundColor = colorAsString1;
        const liChildAll = playerEntry();
        // let colorAsString1 = 'rgba(42, 121, 211, 0.884)';
        // targetEvent.style.backgroundColor = colorAsString1;
        const ol = document.getElementById('ordered-list');
        ol.appendChild(liChildAll);
        var liList = document.querySelectorAll('li');

        if (liList.length > 5) {
            ol.removeChild(ol.lastElementChild);
            targetEvent.disabled = false;
            alert('Already You have bought Five Player');
            //selectButton.enabled = true;
            let colorAsString1 = 'rgba(42, 121, 211, 0.884)';
            targetEvent.style.backgroundColor = colorAsString1;
        }

    });

}



