//Fetch Task todo data
fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
    res.json().then((data) => {
        objJson = data;
        changePage(1);
    })
})

//Create Elements and set properties classname , Id, name
function createDomElement(elem, elemClass = '', elemName = '', elemId = '') {
    let element = document.createElement(elem);
    (elemClass !== '') && element.setAttribute('class', elemClass);
    (elemName !== '') && element.setAttribute('name', elemName);
    (elemId !== '') && element.setAttribute('id', elemId);
    return element;
}

//Create prev button
let prevBtn = createDomElement('button', 'btn-navigate btn-prev pagination-col', 'btn-prev');
prevBtn.innerText = 'prev';
prevBtn.addEventListener('click', function () {
    prevPage();
})

//Create next btn
let nextBtn = createDomElement('button', 'btn-navigate btn-next pagination-col', 'btn-next');
nextBtn.innerText = 'next';
nextBtn.addEventListener('click', function () {
    nextPage();
})

//Create Pagination container
let paginationContainer = createDomElement('div', 'pagination-container');
function createPagination() {
    paginationContainer.append(getPaginationElements());
    return paginationContainer;
}

//Creating a grid container to show the values
let displayGridContainer = createDomElement('div', 'display-grid-table');


//Create a grid row and return
function getDisplayGridRow() {
    let displayGridRow = createDomElement('div', 'display-grid-row');
    return displayGridRow;
}

//Create a grid column and return
function getDisplayGridColumn() {
    let displayGridColumn = createDomElement('div', 'display-grid-column');
    return displayGridColumn;
}

//Create table with column title
addValuesToTheTable('First name', 'Last name', 'Address', 'Pincode');

//Creating and adding values to the table 
function addValuesToTheTable(col1, col2, col3, col4) {
    let row = getDisplayGridRow();
    let column1 = getDisplayGridColumn();
    column1.innerHTML = col1;
    let column2 = getDisplayGridColumn();
    column2.innerHTML = col2;
    let column3 = getDisplayGridColumn();
    column3.innerHTML = col3;
    let column4 = getDisplayGridColumn();
    column4.innerHTML = col4;
    row.append(column1, column2, column3, column4);
    displayGridContainer.append(row);
}

//Create pagination column
function getPaginationCol() {
    let paginationColumn = createDomElement('div', 'pagination-col');
    return paginationColumn;
}

//Create pagination row
function getPaginationRow() {
    let paginationRow = createDomElement('div', 'pagination-row');
    return paginationRow;
}

//Create pagination Element
function getPaginationElements() {
    let paginationRow = getPaginationRow();
    paginationRow.append(prevBtn);
    for (let i = 1; i < numPages(); i++) {
        let paginationCol = getPaginationCol();
        paginationCol.innerText = i;
        paginationCol.setAttribute('onclick', `changePage(${i})`);
        if (currentPage === i) {
            paginationCol.setAttribute('class', 'pagination-col active-page');
        }
        paginationRow.append(paginationCol);
    }
    paginationRow.append(nextBtn);
    return paginationRow;
}

//Set Default Values
var currentPage = 1;
var recordsPerPage = 10;

//Creating prev page action 
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        changePage(currentPage);
    }
}

//Creating next page action
function nextPage() {
    if (currentPage < numPages()) {
        currentPage++;
        changePage(currentPage);
    }
}

//Display data on page change
function changePage(page) {

    // Validate page
    if (page < 1) {
        page = 1;
    } else if (page > numPages()) {
        page = numPages();
    }

    currentPage = page;

    //Empty the table and set the column names
    displayGridContainer.innerHTML = '';
    paginationContainer.innerHTML = '';
    addValuesToTheTable('Id', 'Task Title', 'User Id', 'Task Completed');

    //Add data in the column
    for (var i = (page - 1) * recordsPerPage; i < (page * recordsPerPage); i++) {
        addValuesToTheTable(objJson[i].id, objJson[i].title, objJson[i].userId, objJson[i].completed);
    }

    // Show and hide prev/next button
    if (page == 1) {
        prevBtn.style.visibility = "hidden";
    } else {
        prevBtn.style.visibility = "visible";
    }
    if (page == numPages()) {
        nextBtn.style.visibility = "hidden";
    } else {
        nextBtn.style.visibility = "visible";
    }
    //Append table and pagination
    document.body.append(displayGridContainer, createPagination());
}

//Get total number of pages
function numPages() {
    return Math.ceil(objJson.length / recordsPerPage);
}