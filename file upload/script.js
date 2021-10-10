function loadFile(event) {
	let image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
  document.getElementById('down').href = image.src;
}



      
