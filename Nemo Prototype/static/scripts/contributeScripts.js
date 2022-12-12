
const dropZoneContribute = document.querySelector('#dropzoneContribute');
dropZoneContribute.addEventListener('dragover', (e)=> {
	e.preventDefault();
})
var uploadIndex=0
dropZoneContribute.addEventListener('drop', (e)=> {
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
			showImageUploadedContribute(src, 200, 200, fileName)
			// console.log(e.dataTransfer.files);
			// upload(file)
		}
		uploadIndex=uploadIndex+1;
	}
})
function showImageUploadedContribute(src, width, height, alt)
{
	var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
	img.id = alt;

    // This next line will just add it to the <body> tag
    document.getElementById('dropzoneContribute').appendChild(img);
}
function removeImagesContribute()
{
	while(document.getElementById('0ImageUpload') != null ||
	document.getElementById('1ImageUpload') != null ||
	document.getElementById('2ImageUpload') != null ||
	document.getElementById('3ImageUpload'))
	{
		document.getElementById('0ImageUpload').remove()
		document.getElementById('1ImageUpload').remove()
		document.getElementById('2ImageUpload').remove()
		document.getElementById('3ImageUpload').remove()
	}

	uploadIndex=0
}