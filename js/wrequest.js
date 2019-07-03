function wrequest(theUrl) {
    function worker_function() {
      //
        function httpGet(theUrl) {

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", theUrl, false); // false for synchronous request
            xmlHttp.send(null);
            return xmlHttp.responseText;
        }
        onmessage = function (e) {
            resposta = httpGet(e.data);
            postMessage(resposta);
            //postMessage("mensagem retornada, " + e.data);
        }
    }
    // This is in case of normal worker start
    // "window" is not defined in web worker
    // so if you load this file directly using `new Worker`
    // the worker code will still execute properly
    if (window != self)
        worker_function();

    return new Worker(URL.createObjectURL(new Blob(["(" + worker_function.toString() + ")()"], {
        type: 'text/javascript'
    })));
}
console.log("wrequest.js");
