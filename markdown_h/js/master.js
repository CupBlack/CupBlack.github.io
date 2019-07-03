server = "http://localhost/pessoal/CubeBlack.github.io.git/";
eleNav = document.getElementById('menu');
eleContent = document.getElementById("conteudo");
menuArr = null;
//---------------
wfile = new wrequest();
converter = new showdown.Converter();
function view(url) {
  if (url[0] == "h") send = url;
  else  send  = server+url;
  wfile.postMessage(send);
  wfile.onmessage = function (event) {
    console.log(event.data);
    eleContent.innerHTML = converter.makeHtml(event.data);
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
    menu = document.createElement("ul");
    for (var i = 0; i < menuArr.length; i++) {
      //menuHTML += menuArr[i].label;
       link = document.createElement("li");
       inner = document.createTextNode(menuArr[i].label);
       link.setAttribute('onclick',"view('"+menuArr[i].label+"')");
       link.appendChild(inner);
       menu.appendChild(link);
    }
    //console.log(menuArr);
    eleNav.appendChild(menu);
  }
}
//caregar o menu
loadMenu();
view("README.md");
console.log("master.js");
