function play(){
	document.getElementById("bkg").style.visibility = "hidden"
	document.getElementById("frame").src = ("https://bobzgz-iliillilllillliliilliiil.github.io/gz/"+window.location.hash.replace("#",""))
}

function getStorage(){
	console.log("getting storage")
	return (JSON.stringify(localStorage))
}

function loadStorage(str) {
	if (str==null || str==""){return}
	for (const[i,v] of Object.entries(JSON.parse(str))){
  localStorage.setItem(i,v);
	}
}

window.addEventListener(
  "message",
  (event) => {
	  console.log("got request")
			if (event.data[0] == "getData"){
				//document.getElementById("p").innerText = ("getting")
				console.log("posting message")
				window.parent.postMessage("data+"+getStorage());
			} else if (event.data[0] == "loadData"){
				//document.getElementById("p").innerText = ("loading")
				//console.log(event.data[1])
				loadStorage(event.data[1])
				window.location.reload()
				//reload game
			}
  },
  false,
);
