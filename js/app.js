let flag = 0;

window.onload = main;
window.onresize = main;

function main() {
	const $container = document.querySelector(".carousel");
	const $ul = document.querySelector(".carousel__ul");
	const width = $ul.offsetWidth;
	const speed = 1;

	if (flag !== 1) {
		clone($ul, $container, width);
		flag = 1;
	} else {
		removeClone();
		clone($ul, $container, width);
	}

	carousel($ul, width, speed);
}

function clone($ul, $container, width) {
	const $ul2 = $ul.cloneNode(true);
	$container.appendChild($ul2);
	$ul2.style.left = `${width}px`;
	$ul2.classList.add("carousel__ul-clone");
}

function removeClone() {
	const $ulRemove = document.querySelector(".carousel__ul-clone");
	$ulRemove.parentNode.removeChild($ulRemove);
}

function carousel($ul, width, speed) {
	const $ul2 = document.querySelector(".carousel__ul-clone");

	let x = 0;
	let x2 = width;

	function moveFirst() {
		x -= speed;

		if (width >= Math.abs(x)) {
			$ul.style.left = `${x}px`;
		} else {
			x = width;
		}
	}

	function moveSecond() {
		x2 -= speed;

		if ($ul2.offsetWidth >= Math.abs(x2)) {
			$ul2.style.left = `${x2}px`;
		} else {
			x2 = width;
		}
	}

	setInterval(moveFirst, 10);
	setInterval(moveSecond, 10);
}
