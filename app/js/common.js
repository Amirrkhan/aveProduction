$(function() {

	var navItemsIndex = document.getElementsByClassName('sellNavLink');
	var sellItem = document.getElementsByClassName('sell-item');
	var arrayNav = Array.from(navItemsIndex);
	var arrayItems = Array.from(sellItem);

	var detailsNav = Array.from(document.getElementsByClassName('detailNavItem'));
	var detailsItem = Array.from(document.getElementsByClassName('details-item'));


	sortByClicking(arrayNav, arrayItems);

	sortByClicking(detailsNav, detailsItem);



	function sortByClicking(arrayOfNavElements, arrayOfItems){
		arrayOfNavElements.forEach(function(item){
			item.addEventListener('click', function(event){
				event.preventDefault();
				if(item.id === arrayOfNavElements[0].id){
					setActive(arrayOfNavElements, item);
					hiddenElements(arrayOfItems);
					displayElement(arrayOfItems[0]);
				}
				else if(item.id === arrayOfNavElements[1].id){
					setActive(arrayOfNavElements, item);
					hiddenElements(arrayOfItems);
					displayElement(arrayOfItems[1]);
				}
				else if(item.id === arrayOfNavElements[2].id){
					setActive(arrayOfNavElements, item);
					hiddenElements(arrayOfItems);
					displayElement(arrayOfItems[2]);
				}
				else if(item.id === arrayOfNavElements[3].id){
					setActive(arrayOfNavElements, item);
					hiddenElements(arrayOfItems);
					displayElement(arrayOfItems[3]);
				}
				else if(item.id === arrayOfNavElements[4].id){
					setActive(arrayOfNavElements, item);
					hiddenElements(arrayOfItems);
					displayElement(arrayOfItems[4]);
				}
			})
		});
	};

	var colorList = document.getElementById('color-list');
	var sizeList = document.getElementById('size-list');
	var arrows = Array.from(document.getElementsByClassName('arrow-alone'));
	//console.log(arrows);

	arrows.forEach(function(item){
		item.addEventListener('mouseover', function(event){
			event.preventDefault();
			if(item.id === 'color-arrow'){
				colorList.classList.remove('hidden');
				colorList.classList.add('display');
				setTimeout(function(){
					colorList.classList.remove('display');
					colorList.classList.add('hidden');
				}, 3000);
			}
			else if(item.id === 'size-arrow'){
				sizeList.classList.remove('hidden');
				sizeList.classList.add('display');
				setTimeout(function(){
					sizeList.classList.remove('display');
					sizeList.classList.add('hidden');
				}, 3000);
			}
		})
	})

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
