let galleryModal;
let imageModal;
let previousButton;
let nextButton;

let currentGallery;
let currentImageIndex;
let maxImage;

$(document).ready(function () {
	galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'), {
			keyboard: false
		});
		
	var modal = $("#galleryModal");
		
	imageModal = modal.find('#imageModal');
	previousButton = modal.find('#previousButton');
	nextButton = modal.find('#nextButton');
	
	$('.gallery img').click(function() {
		showModal(this);
	});
	
	previousButton.click(function() {
		let img = $(currentGallery).find('img[data-index='+ (currentImageIndex - 1) +']');
		updateImageModal(img);
	});
	
	nextButton.click(function() {
		let img = $(currentGallery).find('img[data-index='+ (currentImageIndex + 1) +']');
		updateImageModal(img);
	});
});

function showModal(img) {
	currentGallery = $(img).closest('.gallery');
	maxImage = $(currentGallery).find('img').length;
	galleryModal.show();
	updateImageModal(img);
}

function updateImageModal(img)
{	selectedImage = img;
	imageModal.attr("src",$(selectedImage).attr("src"));
	imageModal.attr("alt",$(selectedImage).attr("alt"));
	
	currentImageIndex = $(img).data('index');
	if(currentImageIndex > 1) {
		previousButton.show();
	} else {
		previousButton.hide();
	}
	if(currentImageIndex < maxImage) {
		nextButton.show();
	} else {
		nextButton.hide();
	}
}