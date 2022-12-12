
const dropZoneHome = document.querySelector('#dropzoneHome');
dropZoneHome.addEventListener('dragover', (e)=> {
	e.preventDefault();
})
var uploadIndex=0
dropZoneHome.addEventListener('drop', (e)=> {
	e.preventDefault();
	console.log(e.dataTransfer.files);
	for (let file of e.dataTransfer.files) {
		if (file.type=='image/jpeg')
		{
			if(uploadIndex>3)
			{
				uploadIndex=0
			}
			src = '/static/NemoExample' + String(uploadIndex) + '.jpg';
			fileName=String(uploadIndex) + 'ImageUpload';
			showImageUploadedHome(src, 200, 200, fileName)
			// console.log(e.dataTransfer.files);
			// upload(file)
		}
		uploadIndex=uploadIndex+1;
	}
})
function showImageUploadedHome(src, width, height, alt)
{
	var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.getElementById('dropzoneHome').appendChild(img);
}