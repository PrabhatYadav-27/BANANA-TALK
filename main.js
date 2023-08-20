var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv =document.querySelector("#output");



var serverURL ="	https://api.funtranslations.com/translate/minion.json"

  
function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured", error)
    alert("something wrong with server");  
}

//below is a call back function funcn gien to another funcn as a input
function ClickHandler(){
    
    var inputText = txtInput.value ;
//calling fetch for proceesing
    fetch(getTranslationURL(inputText))
        .then(response  => response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
            outputdiv.innerText =translatedText; // output
        })
        // handle error
        .catch(errorHandler )
    
};
//add event listener and call back funcn
btnTranslate.addEventListener("click",ClickHandler)
