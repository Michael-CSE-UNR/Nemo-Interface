
const dropZoneHome = document.querySelector('#dropzoneHome');
dropZoneHome.addEventListener('dragover', (e)=> {
	e.preventDefault();
})
var uploadIndex=0
var totalUploads=0
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
			showImageUploadedHome(src, 600, 300, fileName, 'dropzoneHome')
			// console.log(e.dataTransfer.files);
			// upload(file)
			uploadIndex=uploadIndex+1;
			totalUploads=totalUploads+1;
		}
	}
})
function showImageUploadedHome(src, width, height, alt, locID)
{
	var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
	img.id = alt;

    // This next line will just add it to the <body> tag
    document.getElementById(locID).appendChild(img);
}
function removeImagesHome()
{
	while(document.getElementById('0ImageUpload') != null ||
	document.getElementById('1ImageUpload') != null ||
	document.getElementById('2ImageUpload') != null ||
	document.getElementById('3ImageUpload'))
	{
		if (document.getElementById('0ImageUpload') != null)
		{
			document.getElementById('0ImageUpload').remove();
		}
		if (document.getElementById('1ImageUpload') != null)
		{
			document.getElementById('1ImageUpload').remove();
		}
		if (document.getElementById('2ImageUpload') != null)
		{
			document.getElementById('2ImageUpload').remove();
		}
		if (document.getElementById('3ImageUpload') != null)
		{
			document.getElementById('3ImageUpload').remove();
		}
	}

	uploadIndex=0;
	totalUploads=0;
}

// Get the modal
var resultModal = document.getElementById("resultModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModalResult")[0];

// When the user clicks on the button, open the modal
function runNemo(){
	uploadsLeft=totalUploads;
	if(document.getElementById('0ImageUpload') != null ||
	document.getElementById('1ImageUpload') != null ||
	document.getElementById('2ImageUpload') != null ||
	document.getElementById('3ImageUpload'))
	{
		while(document.getElementById('0ImageUploadResult') != null ||
		document.getElementById('1ImageUploadResult') != null ||
		document.getElementById('2ImageUploadResult') != null ||
		document.getElementById('3ImageUploadResult'))
		{
			if (document.getElementById('0ImageUploadResult') != null)
			{
				document.getElementById('0ImageUploadResult').remove();
			}
			if (document.getElementById('1ImageUploadResult') != null)
			{
				document.getElementById('1ImageUploadResult').remove();
			}
			if (document.getElementById('2ImageUploadResult') != null)
			{
				document.getElementById('2ImageUploadResult').remove();
			}
			if (document.getElementById('3ImageUploadResult') != null)
			{
				document.getElementById('3ImageUploadResult').remove();
			}
		}
		resultModal.style.display = "block";
		showImageUploadedHome('/static/NemoExampleResults.jpg', 600, 600, '0ImageUploadResult', 'resultsImgArea')
		while(uploadsLeft>0)
		{
			if (document.getElementById('0ImageUpload') != null)
			{
				showImageUploadedHome('/static/NemoExample0.jpg', 600, 300, '0ImageUploadResult', 'resultsImgArea')
				uploadsLeft=uploadsLeft-1;
			}
			if (document.getElementById('1ImageUpload') != null)
			{
				showImageUploadedHome('/static/NemoExample1.jpg', 600, 300, '1ImageUploadResult', 'resultsImgArea')
				uploadsLeft=uploadsLeft-1;
			}
			if (document.getElementById('2ImageUpload') != null)
			{
				showImageUploadedHome('/static/NemoExample2.jpg', 600, 300, '2ImageUploadResult', 'resultsImgArea')
				uploadsLeft=uploadsLeft-1;
			}
			if (document.getElementById('3ImageUpload') != null)
			{
				showImageUploadedHome('/static/NemoExample3.jpg', 600, 300, '3ImageUploadResult', 'resultsImgArea')
				uploadsLeft=uploadsLeft-1;
			}
			
		}
	}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	resultModal.style.display = "none";
	if (document.getElementById('0ImageUploadExample') != null)
	{
		document.getElementById('0ImageUploadExample').remove();
	}
	if (document.getElementById('0ImageUploadExample') != null)
	{
		document.getElementById('0ImageUploadExample').remove();
	}
	if (document.getElementById('1ImageUploadExample') != null)
	{
		document.getElementById('1ImageUploadExample').remove();
	}
	if (document.getElementById('2ImageUploadExample') != null)
	{
		document.getElementById('2ImageUploadExample').remove();
	}
	if (document.getElementById('3ImageUploadExample') != null)
	{
		document.getElementById('3ImageUploadExample').remove();
	}
}
function runExample(){
	removeImagesHome();
	resultModal.style.display = "block";
	showImageUploadedHome('/static/NemoExampleResults.jpg', 600, 600, '0ImageUploadExample', 'resultsImgArea')
	showImageUploadedHome('/static/NemoExample0.jpg', 600, 300, '0ImageUploadExample', 'resultsImgArea')
	showImageUploadedHome('/static/NemoExample1.jpg', 600, 300, '1ImageUploadExample', 'resultsImgArea')
	showImageUploadedHome('/static/NemoExample2.jpg', 600, 300, '2ImageUploadExample', 'resultsImgArea')
	showImageUploadedHome('/static/NemoExample3.jpg', 600, 300, '3ImageUploadExample', 'resultsImgArea')
	
}