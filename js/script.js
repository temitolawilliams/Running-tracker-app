
let entries = [];
const entriesWrapper = document.querySelector('#entries')

function addNewEntry(newEntry) {
   entriesWrapper.removeChild(entriesWrapper.firstElementChild)
   const listItem = document.createElement('li');
   const listValue = document.createTextNode(newEntry.toFixed(1));
   listItem.appendChild(listValue);

   entriesWrapper.appendChild(listItem)
}

//reducer function to sum all entries and produce a single value
const reducer = (total, currentValue) => total + currentValue;

//function to get total Value
const calcTotal = () => {
    const totalValue = entries.reduce(reducer).toFixed(1)
    document.getElementById('total').innerText = totalValue + 'km';
    document.getElementById('progressTotal').innerText = totalValue 
}

//function to calculate Average value
const calcAverage = () => {
    const averageValue = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById('average').innerText = averageValue + 'km'
}

// function to calc weekly highest val

const calcHighestValue = () => {
    const highValue = Math.max(...entries)
    document.getElementById('high').innerText = highValue + 'km';
}

const progressBar = () => {
    const totalValue = entries.reduce(reducer).toFixed(1)
    const percentageValue = totalValue / (70 / 100)
    const progressCircle = document.querySelector('.progressCircle')
    if(percentageValue > 100) percentageValue === 100
    progressCircle.style.background = `conic-gradient(rgb(74, 179, 74) ${percentageValue}%,
    #2c242b ${percentageValue}% 100%)`
    
}

const progressCenter = () => {
    const totalValue = entries.reduce(reducer).toFixed(1);
    const percentageValue = totalValue / (70 / 100);
    document.querySelector('#totalPercentage').innerText = percentageValue.toFixed(1) + '%';
    
}

function handleSubmit(event) {
    event.preventDefault()
    const entry = Number(document.querySelector('#entry').value);
    if(!entry) return;
    document.querySelector('form').reset();

    entries.push(entry);
    addNewEntry(entry);
    calcTotal();
    calcAverage();
    calcHighestValue()
    progressBar()
    progressCenter()
}

const form = document.querySelector('form')
.addEventListener('submit', handleSubmit )
