var latestKnownScrollY = 0, ticking = false, $w = $(window), $navInner = $(".nav-inner");

function onScroll() {
	latestKnownScrollY = $w.scrollTop();
  console.log(latestKnownScrollY);
	requestTick();
}
$w.on('scroll', onScroll);

function requestTick() {
	if(!ticking) {
		requestAnimationFrame(update);
	}
	ticking = true;
}
function update() {
	ticking = false;
	var currentScrollY = latestKnownScrollY;
  $navInner.css({
    height: 300 - currentScrollY,
    opacity: (300 - currentScrollY) / 300
  });
}
requestTick();