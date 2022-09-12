window.onload = main;

function main() {
	const $container = document.querySelector(".carousel");
	const $ul = document.querySelector(".carousel__ul");
	const width = $ul.offsetWidth;
	const speed = 1;

	const $ulClone = cloneUl($ul, $container, width);
	carousel($ul, $ulClone, width, speed);
	burgerMenu();
}

function cloneUl($ul, $container, width) {
	const $ul2 = $ul.cloneNode(true);
	$container.appendChild($ul2);
	$ul2.style.left = `${width}px`;
	$ul2.classList.add("carousel__ul-clone");

	return $ul2;
}

function carousel($ul, $ulClone, width, speed) {
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

		if ($ulClone.offsetWidth >= Math.abs(x2)) {
			$ulClone.style.left = `${x2}px`;
		} else {
			x2 = width;
		}
	}

	setInterval(moveFirst, 10);
	setInterval(moveSecond, 10);
}

function burgerMenu() {
	const burger = document.querySelector(".burger");
	const container = document.querySelector(".mobile");

	burger.addEventListener("click", () => {
		burger.classList.toggle("active");
		container.classList.toggle("active");
	});
}
