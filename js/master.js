server = "http://localhost/pessoal/CubeBlack.github.io.git/";
eleNav = document.getElementById('menu');
menuArr = null;
//---------------
wfile = new wrequest();
function open(url) {
  send  = server+url;
  wfile.postMessage(send);
  wfile.onmessage = function (event) {
    converter = new showdown.Converter();
    //html = converter.makeHtml(text);
    //console.log(html);
  }
}
//------------
function link(url){

}
///--------------- ---------------
wmenu = new wrequest();
function loadMenu(id){
  send  = server+"nav.json";
  console.log(send);;
  wmenu.postMessage(send);
  wmenu.onmessage = function (event) {
    menuArr = JSON.parse(event.data);
    console.log(menuArr);
    eleNav.innerHTML = event.data;
  }
}
//caregar o menu
loadMenu();
open("README.md");
console.log("master.js");
