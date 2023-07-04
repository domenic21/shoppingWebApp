//imports 
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, remove } from 'firebase/database'

// 

//firebase settings 
//URL OF OUR database
const appSettings = {
    databaseURL: ""
}

//import after is install
//this is how we set up firebase database communication
//functions 
const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListDb = ref(database, "shoppingList");


///// 


//commands to select data from input  on the html

const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');
const shoppingList = document.getElementById('list-display')
addButtonEl.addEventListener("click", function () {
    let inputValue = inputFieldEl.value
    push(shoppingListDb, inputValue);

    fieldReset();


});

//to fetch data 
//use object method to transform data to the array 
onValue(shoppingListDb, function (snapshot) {

    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
        clearListEl();
        //create for looop per iteration 
        for (let i = 0; i < itemsArray.length; i++) {

            let currentItem = itemsArray[i];


            let currentItemId = currentItem[0];
            let currentValue = currentItem[1];
            listItems(currentItem);
            //delete database element with id 

        }
    }else {
            shoppingList.innerHTML = 'No items added yet..'
        }

    })



//
function clearListEl() {
    shoppingList.innerHTML = ''
}

function fieldReset() {
    inputFieldEl.value = '';
}

function listItems(item) {
    //shoppingList.innerHTML += `<li>${itemValue} </li>`;
    let itemID = item[0];
    let itemValue = item[1];

    let newEl = document.createElement('li')

    newEl.textContent = itemValue;

    newEl.addEventListener("click", function () {
        let locationEl = ref(database, `shoppingList/${itemID}`);
        remove(locationEl);


    });
    shoppingList.append(newEl);

}



