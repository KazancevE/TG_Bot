
const URL = "https://random-word-api.herokuapp.com/word" ;
let arr = document.querySelectorAll('img');
let result = [];

let inputAlt = document.createElement("input");
inputAlt.classList.add('inputHide');

function highLightingTags(){

    arr.forEach((node) => {
        result.push(node);
    });
    for (let i = 0; i < result.length; i++){
        result[i].classList.add("highLighting")

    }
    return result;
}

console.log( result);
function changeTag(){
    for (let i = 0; i < result.length; i++){
        result[i].addEventListener('click', function (){

            inputAlt.classList.add('inputVisible');
            console.log(result[i]);
            // console.log("Click");
        })
    }
}

async function  enumAlt(){
    let string = "";
    for (let i = 0; i < arr.length; i++){
        string = "?number=" + (i+1);
    }

    let value = await fetch(URL+string)
        .then(data => data.json());

    // console.log(value);
    for (let i = 0; i < arr.length; i++) {

        let tag = arr[i].hasAttribute('alt');
        if (tag === true){
            arr[i].setAttribute('alt', value[i]);

        } else {
            arr[i].getAttribute('alt');
            arr[i].setAttribute('alt', value[i]);
        }
        // console.log(tag);

    }
}

enumAlt();
highLightingTags();
changeTag();
