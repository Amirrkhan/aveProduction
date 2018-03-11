$(function() {

	var navItems = document.getElementsByClassName('sellNavLink');
	var popularItem = document.getElementById('popular');
	var newArrivalsItem = document.getElementById('new-arrivals');
	var bestSellersItem = document.getElementById('best-sellers');
	var specialOffersItem = document.getElementById('special-offers');
	var comingSoonItem = document.getElementById('comming-soon');
	var sellItem = document.getElementsByClassName('sell-item');
	var arrayNav = Array.from(navItems);
	var arrayItems = Array.from(sellItem);

	arrayNav.forEach(function(item){
		item.addEventListener('click', function(event){
			event.preventDefault();
			if(item.id === "popularNav"){
					setActive(arrayNav, item);
					hiddenElements(arrayItems);
					displayElement(popularItem);
			}
			else if(item.id === 'newArrivalsNav'){
				setActive(arrayNav, item);
				hiddenElements(arrayItems);
				displayElement(newArrivalsItem);
			}
			else if(item.id === 'bestSellersNav'){
				setActive(arrayNav, item);
				hiddenElements(arrayItems);
				displayElement(bestSellersItem);
			}
			else if(item.id === 'specialOffersNav'){
				setActive(arrayNav, item);
				hiddenElements(arrayItems);
				displayElement(specialOffersItem);
			}
			else if(item.id === 'comingSoonNav'){
				setActive(arrayNav, item);
				hiddenElements(arrayItems);
				displayElement(comingSoonItem);
			}
		});
	});

	function hiddenElements(array){
		return array.forEach(function(element){
			element.classList.add('hidden');
			element.classList.remove('display');
		})
	};

	function displayElement(item){
		item.classList.remove('hidden');
		item.classList.add('display');
	};

	function setActive(array, element){
		array.forEach(function(el){
			el.classList.remove('active');
			element.classList.add('active');
		})
	};


});
