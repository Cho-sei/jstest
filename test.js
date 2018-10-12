var fileinfo = "";

function fileListDirectory(files){
	for (i=0; i<files.length; i++){
		fileinfo += '<img src="./' + files[i].webkitRelativePath + '" width="100">';
	}
	document.getElementById('view').innerHTML = fileinfo;
}

fileListDirectory("C:/Users/Lab/Documents/HTML/jstest/image/")