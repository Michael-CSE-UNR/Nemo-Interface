
const dropZoneContribute = document.querySelector('#dropzoneContribute');
dropZoneContribute.addEventListener('dragover', (e)=> {
	e.preventDefault();
})
var uploadIndexContribute=0
var totalUploadsContribute=0
dropZoneContribute.addEventListener('drop', (e)=> {
	e.preventDefault();
	console.log(e.dataTransfer.files);
	for (let file of e.dataTransfer.files) {
		if (file.type=='image/jpeg')
		{
			if(uploadIndexContribute>3)
			{
				uploadIndexContribute=0
			}
			src = '/static/NemoExample' + String(uploadIndexContribute) + '.jpg';
			fileName=String(uploadIndexContribute) + 'ImageUpload';
			showImageUploadedHome(src, 800, 300, fileName, 'dropzoneContribute')
			// console.log(e.dataTransfer.files);
			// upload(file)
		}
		uploadIndexContribute=uploadIndexContribute+1;
		totalUploadsContribute=totalUploadsContribute+1;
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
function removeImagesContribute()
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

	uploadIndexContribute=0;
	totalUploadsContribute=0;
}

// Get the modal
var contributeModal = document.getElementById("contributeModal");

// Get the <span> element that closes the modal
var spanContribute = document.getElementsByClassName("closeModalContribute")[0];

// When the user clicks on the button, open the modal
function submitContribute(){
	uploadsLeft=totalUploadsContribute;
	if(document.getElementById('0ImageUpload') != null ||
	document.getElementById('1ImageUpload') != null ||
	document.getElementById('2ImageUpload') != null ||
	document.getElementById('3ImageUpload'))
	{
		while(document.getElementById('0ImageUploadContribute') != null ||
		document.getElementById('1ImageUploadContribute') != null ||
		document.getElementById('2ImageUploadContribute') != null ||
		document.getElementById('3ImageUploadContribute'))
		{
			if (document.getElementById('0ImageUploadContribute') != null)
			{
				document.getElementById('0ImageUploadContribute').remove();
			}
			if (document.getElementById('1ImageUploadContribute') != null)
			{
				document.getElementById('1ImageUploadContribute').remove();
			}
			if (document.getElementById('2ImageUploadContribute') != null)
			{
				document.getElementById('2ImageUploadContribute').remove();
			}
			if (document.getElementById('3ImageUploadContribute') != null)
			{
				document.getElementById('3ImageUploadContribute').remove();
			}
		}
		contributeModal.style.display = "block";

		while(uploadsLeft>0)
		{
			if (document.getElementById('0ImageUpload') != null)
			{
				showImageUploadedHome('/static/NemoExample0.jpg', 800, 300, '0ImageUploadContribute', 'contributesImgArea')
				uploadsLeft=uploadsLeft-1;
			}
			if (document.getElementById('1ImageUpload') != null)
			{
				showImageUploadedHome('/static/NemoExample1.jpg', 800, 300, '1ImageUploadContribute', 'contributesImgArea')
				uploadsLeft=uploadsLeft-1;
			}
			if (document.getElementById('2ImageUpload') != null)
			{
				showImageUploadedHome('/static/NemoExample2.jpg', 800, 300, '2ImageUploadContribute', 'contributesImgArea')
				uploadsLeft=uploadsLeft-1;
			}
			if (document.getElementById('3ImageUpload') != null)
			{
				showImageUploadedHome('/static/NemoExample3.jpg', 800, 300, '3ImageUploadContribute', 'contributesImgArea')
				uploadsLeft=uploadsLeft-1;
			}
			
		}
	}
}

// When the user clicks on <span> (x), close the modal
spanContribute.onclick = function() {
	contributeModal.style.display = "none";
}

function NEMORepositoryButton()
{
	window.location = 'https://github.com/SayBender/Nemo'
}
function NEMOPaperButton()
{
	window.location = 'https://www.mdpi.com/2072-4292/14/16/3979'
}