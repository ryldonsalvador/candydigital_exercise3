var tl = new TimelineLite();

function initThis(){
	setElements();
}

function setElements(){
	TweenMax.set('#main_content', {opacity:1, delay:.3});

	TweenMax.set('#headline', {opacity:0, scale:3});
	TweenMax.set('#img2, #img3', {opacity:0, scale:0});

	TweenMax.delayedCall(0.3, introFrame);
}

function introFrame() {
	// Frame1
	tl.to('#headline', 0.5, {z:"0.1px", rotation: 0.02, opacity:1, transformOrigin:'140px 50px', scale:1, force3D:false, ease:Power2.easeOut})
	.to('#img2', 0.5, {z:"0.1px", rotation: 0.02, opacity:1, transformOrigin:'200px 400px', scale:1, force3D:false, ease:Power4.easeOut})
	.to('#img3', 0.5, {z:"0.1px", rotation: 0.02, opacity:1, transformOrigin:'100px 300px', scale:1, force3D:false, ease:Power4.easeOut})
}

window.addEventListener('load', initThis);