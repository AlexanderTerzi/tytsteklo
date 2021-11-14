$(function () {

	var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.delay(50).fadeOut('slow');
    $preloader.delay(250).fadeOut('slow');

	$('.form-radio_hide, #calculator-mirror, #calculator-door ,#calculator-skinali, #calculator-figure, #calculator-other, .calculator-order').hide();

	// ArcticModal
  		$('.contacts__btn').click(function(e) {
  			e.preventDefault();
  			$('#contacts-form').arcticmodal();
  		});

  		$('.modal-tooltip__type').click(function(e) {
  			e.preventDefault();
  			$('#modal-type').arcticmodal();
  		});

  		$('.modal-tooltip__type_raw').click(function(e) {
  			e.preventDefault();
  			$('#modal-type_raw').arcticmodal();
  		});

  		$('.modal-tooltip__type_tempered').click(function(e) {
  			e.preventDefault();
  			$('#modal-type_tempered').arcticmodal();
  		});

  		$('.modal-tooltip__type_color').click(function(e) {
  			e.preventDefault();
  			$('#modal-type_color').arcticmodal();
  		});

  		$('.modal-tooltip__edge_raw').click(function(e) {
  			e.preventDefault();
  			$('#modal-edge__raw').arcticmodal();
  		});

  		$('.modal-tooltip__edge_polished').click(function(e) {
  			e.preventDefault();
  			$('#modal-edge__polished').arcticmodal();
  		});
  		
  		$('.modal-tooltip__edge_bright').click(function(e) {
  			e.preventDefault();
  			$('#modal-edge__bright').arcticmodal();
  		});


	const radioItems = document.querySelectorAll('.form-radio__item input');
	const radioItemsHide = document.querySelectorAll('.form-radio__item_hide');

	//Переключение изделий
	function productsSwitch(clickItem, showItem, subtitleText){
		this.clickItem = clickItem;
		this.showItem = showItem;
		this.subtitleText = subtitleText;
		clickItem.on('click', function(){
			$('.form-radio__item_hide').prop('checked',false);
			showItem.prop('checked',true);
			$('.calculator-subtitle').html(subtitleText);
		});
	}

	productsSwitch($('#glass'), $('#glass_hide'), 'стекла');
	productsSwitch($('#mirror'), $('#mirror_hide'), 'зеркала');
	productsSwitch($('#door'), $('#door_hide'), 'перегородок');
	productsSwitch($('#skinali'), $('#skinali_hide'), 'скинали');
	productsSwitch($('#figure'), $('#figure_hide'), 'фигурных изделий');

 	for (radioItem of radioItems){
 		radioItem.onclick = function(){

 			labelActive();

 			for(var i = 0; i < radioItems.length; i++){
 				if(radioItems[i].checked == true) {
 					this.previousElementSibling.classList.add('active');
 				}
 			}
 		}
 	}

 	function labelActive(){
 		for(var i = 0; i < radioItems.length; i++){
 			if(radioItems[i].previousElementSibling.classList.contains('active')) {
 				radioItems[i].previousElementSibling.classList.remove('active')
 			}
 		}
 	}

 	$('#more-btn').on('click', function(){
 		$('.form-radio_hide').slideToggle('medium', function() {
    		if ($(this).is(':visible'))
       		$(this).css('display','flex');
		});
		// $('#more-btn span').html('Показать меньше');
		$('#more-btn span').html(function(i, text){
          return text === "Показать меньше" ? "Показать больше" : "Показать меньше";
      })
		$('#more-btn img').toggleClass('rotate');
 	});


 	// Скрытие/раскрытие контента по клику на заголовок
 	function subtitleSlide(clickItem, slideItem) {
 		this.clickItem = clickItem;
 		this.slideItem = slideItem;
 		clickItem.on('click', function(){
	 		slideItem.slideToggle();
	 	})
 	};

 	subtitleSlide($('.calculator-glass-types__subtitle_first'), $('.calculator-glass-types__content_first'));
 	subtitleSlide($('.calculator-glass-types__subtitle_second'), $('.calculator-glass-types__content_second'));
 	subtitleSlide($('.calculator-glass-types__subtitle_third'), $('.calculator-glass-types__content_third'));

 	subtitleSlide($('.calculator-skinali-types__subtitle_first'), $('.calculator-skinali-types__content_first'));
 	subtitleSlide($('.calculator-skinali-types__subtitle_second'), $('.calculator-skinali-types__content_second'));
 	subtitleSlide($('.calculator-skinali-types__subtitle_third'), $('.calculator-skinali-types__content_third'));

 	subtitleSlide($('.calculator-door-types__subtitle_first'), $('.calculator-door-types__content_first'));
 	subtitleSlide($('.calculator-door-types__subtitle_second'), $('.calculator-door-types__content_second'));
 	subtitleSlide($('.calculator-door-types__subtitle_third'), $('.calculator-door-types__content_third'));

 	subtitleSlide($('.calculator-glass-edge__subtitle_one'), $('.calculator-glass-edge__content_one'));
 	subtitleSlide($('.calculator-glass-edge__subtitle_two'), $('.calculator-glass-edge__content_two'));
 	subtitleSlide($('.calculator-glass-edge__subtitle_third'), $('.calculator-glass-edge__content_three'));

 	subtitleSlide($('.calculator-skinali-edge__subtitle_one'), $('.calculator-skinali-edge__content_one'));
 	subtitleSlide($('.calculator-skinali-edge__subtitle_two'), $('.calculator-skinali-edge__content_two'));
 	subtitleSlide($('.calculator-skinali-edge__subtitle_three'), $('.calculator-skinali-edge__content_three'));

 	subtitleSlide($('.calculator-door-edge__subtitle_one'), $('.calculator-door-edge__content_one'));
 	subtitleSlide($('.calculator-door-edge__subtitle_two'), $('.calculator-door-edge__content_two'));
 	subtitleSlide($('.calculator-door-edge__subtitle_three'), $('.calculator-door-edge__content_three'));

 	subtitleSlide($('.calculator-mirror-edge__subtitle_one'), $('.calculator-mirror-edge__content_one'));
 	subtitleSlide($('.calculator-mirror-edge__subtitle_two'), $('.calculator-mirror-edge__content_two'));
 	subtitleSlide($('.calculator-mirror-edge__subtitle_three'), $('.calculator-mirror-edge__content_three'));

 	function subtitleTextSwitch(clickItem, textItem){
 		this.clickItem = clickItem;
 		this.textItem = textItem;
 		clickItem.on('change', function(){
 		textItem.text($((this).nextElementSibling).text());
 		})
 	}

 	subtitleTextSwitch($('.calculator-glass-types__block_first_first input'), $('.calculator-glass-types__subtitle_first .first'));
 	subtitleTextSwitch($('.calculator-glass-types__block_second_first input'), $('.calculator-glass-types__subtitle_first .second'));
 	subtitleTextSwitch($('.calculator-glass-types__block_first_second input'), $('.calculator-glass-types__subtitle_second .first'));
 	subtitleTextSwitch($('.calculator-glass-types__block_second_second input'), $('.calculator-glass-types__subtitle_second .second'));
 	subtitleTextSwitch($('.calculator-glass-types__block_first_third input'), $('.calculator-glass-types__subtitle_third .first'));
 	subtitleTextSwitch($('.calculator-glass-types__block_second_third input'), $('.calculator-glass-types__subtitle_third .second'));

 	subtitleTextSwitch($('.calculator-glass-edge__content_one input'), $('.calculator-glass-edge__subtitle_one .first'));
 	subtitleTextSwitch($('.calculator-glass-edge__content_two input'), $('.calculator-glass-edge__subtitle_two .first'));
 	subtitleTextSwitch($('.calculator-glass-edge__content_three input'), $('.calculator-glass-edge__subtitle_third .first'));

 	subtitleTextSwitch($('.calculator-mirror-edge__content_one input'), $('.calculator-mirror-edge__subtitle_one .first'));
 	subtitleTextSwitch($('.calculator-mirror-edge__content_two input'), $('.calculator-mirror-edge__subtitle_two .first'));
 	subtitleTextSwitch($('.calculator-mirror-edge__content_three input'), $('.calculator-mirror-edge__subtitle_three .first'));

 	subtitleTextSwitch($('.calculator-skinali-types__block_first_first input'), $('.calculator-skinali-types__subtitle_first .first'));
 	subtitleTextSwitch($('.calculator-skinali-types__block_first_second input'), $('.calculator-skinali-types__subtitle_second .first'));
 	subtitleTextSwitch($('.calculator-skinali-types__block_first_third input'), $('.calculator-skinali-types__subtitle_third .first'));

 	subtitleTextSwitch($('.calculator-skinali-edge__content_one input'), $('.calculator-skinali-edge__subtitle_one .first'));
 	subtitleTextSwitch($('.calculator-skinali-edge__content_two input'), $('.calculator-skinali-edge__subtitle_two .first'));
 	subtitleTextSwitch($('.calculator-skinali-edge__content_three input'), $('.calculator-skinali-edge__subtitle_three .first'));

 	subtitleTextSwitch($('.calculator-door-types__block_first_first input'), $('.calculator-door-types__subtitle_first .first'));
 	subtitleTextSwitch($('.calculator-door-types__block_first_second input'), $('.calculator-door-types__subtitle_second .first'));
 	subtitleTextSwitch($('.calculator-door-types__block_first_third input'), $('.calculator-door-types__subtitle_third .first'));

 	subtitleTextSwitch($('.calculator-door-edge__content_one input'), $('.calculator-door-edge__subtitle_one .first'));
 	subtitleTextSwitch($('.calculator-door-edge__content_two input'), $('.calculator-door-edge__subtitle_two .first'));
 	subtitleTextSwitch($('.calculator-door-edge__content_three input'), $('.calculator-door-edge__subtitle_three .first'));

 	function productsSwitchLabel(clickItem, showItem){
 		this.clickItem = clickItem;
 		this.showItem = showItem;
 		clickItem.on('click', function(){
	 		$('.calculator-common').slideUp().fadeOut();
	 		showItem.slideDown().fadeIn();
	 	})
 	};

 	productsSwitchLabel($('#glass-label'), $('#calculator-glass'));
 	productsSwitchLabel($('#mirror-label'), $('#calculator-mirror'));
 	productsSwitchLabel($('#door-label'), $('#calculator-door'));
 	productsSwitchLabel($('#skinali-label'), $('#calculator-skinali'));
 	productsSwitchLabel($('#figure-label'), $('#calculator-figure'));
 	productsSwitchLabel($('#other-label'), $('#calculator-other'));

 	// Открытие формы заказа
 	subtitleSlide($('.calculator-glass-btn'), $('.calculator-glass-order'));
 	subtitleSlide($('.calculator-mirror-btn'), $('.calculator-mirror-order'));
 	subtitleSlide($('.calculator-skinali-btn'), $('.calculator-skinali-order'));
 	subtitleSlide($('.calculator-door-btn'), $('.calculator-door-order'));

 	$('.calculator-glass-message textarea').on('click', function(){
 		$(this).addClass('active');
 	})

	var sBrowser, sUsrAg = navigator.userAgent;
		if (sUsrAg.indexOf("Firefox") > -1) {
	     sBrowser = "Firefox";
	     console.log(sBrowser);
	     $('.calculator, .contacts').addClass('filter');
		     //"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
		} else if (sUsrAg.indexOf("Opera") > -1) {
		     sBrowser = "Opera";
		} else if (sUsrAg.indexOf("Trident") > -1) {
		     sBrowser = "Microsoft Internet Explorer";
		     $('.calculator').addClass('filter');
		     //"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
		} else if (sUsrAg.indexOf("Edge") > -1) {
		     sBrowser = "Microsoft Edge";
		     //"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
		} else if (sUsrAg.indexOf("Chrome") > -1) {
		    sBrowser = "Google Chrome or Chromium";
		    //"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
		} else if (sUsrAg.indexOf("Safari") > -1) {
		    sBrowser = "Apple Safari";
		    //"Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
		} else {
		    sBrowser = "unknown";
		}


		// КАЛЬКУЛЯТОРЫ

		//Reset max min
	    function minMaxReset(){
	      $('input[type="number"]').on('keyup', function(){
	      if ($(this).val() > $(this).attr('max')*1) { 
	        $(this).val($(this).attr('max'));
	        calculatorGlass();
	        calculatorMirror();
	        calculatorSkinali();
	    	calculatorDoor();
	      }   
	    });
	    $('input[type="number"]').on('change', function(){
	      if ($(this).val() < $(this).attr('min')*1) { 
	        $(this).val($(this).attr('min'));
	        calculatorGlass();
	        calculatorMirror();
	        calculatorSkinali();
	    	calculatorDoor();
	      }
	    });
	    }

	    calculatorGlass();
	    calculatorMirror();
	    calculatorSkinali();
	    calculatorDoor();

		// Калькулятор стекла

		$('.calculator-glass-hide__two, .calculator-glass-hide__three').hide();

		function moreGlass(clickGlass, activeGlass, widthGlass){
			this.clickGlass = clickGlass;
			this.activeGlass = activeGlass;
			this.widthGlass = widthGlass;
			clickGlass.on('change', function(e){
				if(clickGlass.prop('checked')){
					activeGlass.slideDown();
				} else {
					activeGlass.slideUp();
					widthGlass.val() == 0;
				}
				calculatorGlass();
		    });
		};

		moreGlass($('#calculator-glass-more__two'), $('.calculator-glass-hide__two'), $('#glass-width_two'));
		moreGlass($('#calculator-glass-more__three'), $('.calculator-glass-hide__three'), $('#glass-width_three'));

	    $('#calculator-glass-more__four').on('change', function(e){
			if($('#calculator-glass-more__four').prop('checked')){
				$('#more-modal').arcticmodal();
				$('.glass-textarea_three').addClass('active').focus();
			}
	    });
		
		var calculatorGlassTotal;
		var glassWidthOne = document.querySelector('#glass-width_one');
		var glassHeightOne = document.querySelector('#glass-height_one');
		var glassDepthOne = document.querySelector('#glass-depth_one');
		var glassBracingOne = document.querySelector('#glass-bracing_one');
		var calculatorGlassQuantityOne = document.querySelector('#glass-quantity_one');

		var glassWidthTwo = document.querySelector('#glass-width_two');
		var glassHeightTwo = document.querySelector('#glass-height_two');
		var glassDepthTwo = document.querySelector('#glass-depth_two');
		var glassBracingTwo = document.querySelector('#glass-bracing_two');
		var calculatorGlassQuantityTwo = document.querySelector('#glass-quantity_two');

		var glassWidthThree = document.querySelector('#glass-width_three');
		var glassHeightThree = document.querySelector('#glass-height_three');
		var glassDepthThree = document.querySelector('#glass-depth_three');
		var glassBracingThree = document.querySelector('#glass-bracing_three');
		var calculatorGlassQuantityThree = document.querySelector('#glass-quantity_three');
		
		function calculatorGlassInit(changeItem, checkedItem, edgeItem,){
			this.changeItem = changeItem;
			this.edgeItem = edgeItem;
			this.checkedItem = checkedItem;
			changeItem.on('change', function(e){
		      e.preventDefault();
		       edgeItem = ( checkedItem.val());
		       calculatorGlass();
		    });
		};

		var glassEdgeOne, glassEdgeTwo, glassEdgeThree, glassTypeOneFirst, glassTypeOneSecond, glassTypeTwoFirst, glassTypeTwoSecond, glassTypeThreeFirst, glassTypeThreeSecond;

		calculatorGlassInit($('.glass-edge_one'), $('.glass-edge_one:checked'), glassEdgeOne);
 		calculatorGlassInit($('.glass-edge_two'), $('.glass-edge_two:checked'), glassEdgeTwo)
 		calculatorGlassInit($('.glass-edge_three'), $('.glass-edge_three:checked'), glassEdgeThree);

 		calculatorGlassInit($('.glass-type-first_one'), $('.glass-type-first_one:checked'), glassTypeOneFirst);
 		calculatorGlassInit($('.glass-type-second_one'), $('.glass-type-second_one:checked'), glassTypeOneSecond);
 		calculatorGlassInit($('.glass-type-first_two'), $('.glass-type-first_two:checked'), glassTypeTwoFirst);
 		calculatorGlassInit($('.glass-type-second_two'), $('.glass-type-second_two:checked'), glassTypeTwoSecond);
 		calculatorGlassInit($('.glass-type-first_three'), $('.glass-type-first_three:checked'), glassTypeThreeFirst);
 		calculatorGlassInit($('.glass-type-second_three'), $('.glass-type-second_three:checked'), glassTypeThreeSecond);

	    $(glassBracingOne).add(glassBracingTwo).add(glassBracingThree).on('input', function(){
	      this.value = $(this).val().replace(/^0+/,'');
	    });

	    $(glassWidthOne).add(glassHeightOne).add(glassBracingOne).add(calculatorGlassQuantityOne).add(glassWidthTwo).add(glassHeightTwo).add(glassBracingTwo).add(calculatorGlassQuantityTwo).add(glassWidthThree).add(glassHeightThree).add(glassBracingThree).add(calculatorGlassQuantityThree).on('input', calculatorGlass);
	    $(glassDepthOne).add(glassDepthTwo).add(glassDepthThree).on('change', calculatorGlass)

		function calculatorGlass() {

			minMaxReset();
			
			var calculatorGlassAmount = document.querySelector('#calculator-price-glass-input');
			var calculatorGlassQuantityOne = document.querySelector('#glass-quantity_one');
			var calculatorGlassQuantityTwo = document.querySelector('#glass-quantity_two');
			var calculatorGlassQuantityThree = document.querySelector('#glass-quantity_three');

			var calculatorGlassSquareOne = (( parseInt($('#glass-width_one').val()) * parseInt($('#glass-height_one').val()) )/1000000);
			var calculatorGlassSquareTwo = (( parseInt($('#glass-width_two').val()) * parseInt($('#glass-height_two').val()) )/1000000);
			var calculatorGlassSquareThree = (( parseInt($('#glass-width_three').val()) * parseInt($('#glass-height_three').val()) )/1000000);

			var glassEdgeOne = $('.glass-edge_one:checked').val();
			var glassTypeOneFirst = $('.glass-type-first_one:checked').val();
			var glassTypeOneSecond = $('.glass-type-second_one:checked').val();

			var glassEdgeTwo = $('.glass-edge_two:checked').val();
			var glassTypeTwoFirst = $('.glass-type-first_two:checked').val();
			var glassTypeTwoSecond = $('.glass-type-second_two:checked').val();

			var glassEdgeThree = $('.glass-edge_three:checked').val();
			var glassTypeThreeFirst = $('.glass-type-first_three:checked').val();
			var glassTypeThreeSecond = $('.glass-type-second_three:checked').val();

			var glassTypeOne;
			var glassTypeTwo;
			var glassTypeThree;

			function checkboxChecked (itemCheck, itemInput){
	       		this.itemCheck = itemCheck;
	       		this.itemInput = itemInput;
		       	if(itemCheck.prop('checked')){
			       } else {
			       	itemInput.value = 1;
			       }
		       }

			if( ($('.glass-type-first_one:checked').val()) == 'regular' && ($('.glass-type-second_one:checked').val()) == 'raw' && (($('#glass-depth_one option:selected')).text()) == '4' ){
				glassTypeOne = 762;
			} else if (($('.glass-type-first_one:checked').val()) == 'regular' && ($('.glass-type-second_one:checked').val()) == 'raw' && (($('#glass-depth_one option:selected')).text()) == '5' ) {
				glassTypeOne = 889;
			} else if (($('.glass-type-first_one:checked').val()) == 'regular' && ($('.glass-type-second_one:checked').val()) == 'raw' && (($('#glass-depth_one option:selected')).text()) == '6' ) {
				glassTypeOne = 1016;
			} else if (($('.glass-type-first_one:checked').val()) == 'regular' && ($('.glass-type-second_one:checked').val()) == 'raw' && (($('#glass-depth_one option:selected')).text()) == '8' ) {
				glassTypeOne = 1270;
			} else if (($('.glass-type-first_one:checked').val()) == 'regular' && ($('.glass-type-second_one:checked').val()) == 'raw' && (($('#glass-depth_one option:selected')).text()) == '10' ) {
				glassTypeOne = 1778;
			} else if (($('.glass-type-first_one:checked').val()) == 'regular' && ($('.glass-type-second_one:checked').val()) == 'raw' && (($('#glass-depth_one option:selected')).text()) == '12' ) {
				glassTypeOne = 2921;
			} else if (($('.glass-type-first_one:checked').val()) == 'light' && ($('.glass-type-second_one:checked').val()) == 'raw' && (($('#glass-depth_one option:selected')).text()) == '4' ) {
				glassTypeOne = 1524;
			} else if (($('.glass-type-first_one:checked').val()) == 'light' && ($('.glass-type-second_one:checked').val()) == 'raw' && (($('#glass-depth_one option:selected')).text()) == '5' ) {
				glassTypeOne = 0;
				console.log('Такой толщины нет');
			} else if (($('.glass-type-first_one:checked').val()) == 'light' && ($('.glass-type-second_one:checked').val()) == 'raw' && (($('#glass-depth_one option:selected')).text()) == '6' ) {
				glassTypeOne = 2032;
			} else if (($('.glass-type-first_one:checked').val()) == 'light' && ($('.glass-type-second_one:checked').val()) == 'raw' && (($('#glass-depth_one option:selected')).text()) == '8' ) {
				glassTypeOne = 2858;
			} else if (($('.glass-type-first_one:checked').val()) == 'light' && ($('.glass-type-second_one:checked').val()) == 'raw' && (($('#glass-depth_one option:selected')).text()) == '10' ) {
				glassTypeOne = 3620;
			} else if (($('.glass-type-first_one:checked').val()) == 'light' && ($('.glass-type-second_one:checked').val()) == 'raw' && (($('#glass-depth_one option:selected')).text()) == '12' ) {
				glassTypeOne = 0;
				console.log('Такой толщины нет');
			} else if (($('.glass-type-first_one:checked').val()) == 'regular' && ($('.glass-type-second_one:checked').val()) == 'tempered' && (($('#glass-depth_one option:selected')).text()) == '4' ) {
				glassTypeOne = 1143;
			} else if (($('.glass-type-first_one:checked').val()) == 'regular' && ($('.glass-type-second_one:checked').val()) == 'tempered' && (($('#glass-depth_one option:selected')).text()) == '5' ) {
				glassTypeOne = 1270;
			} else if (($('.glass-type-first_one:checked').val()) == 'regular' && ($('.glass-type-second_one:checked').val()) == 'tempered' && (($('#glass-depth_one option:selected')).text()) == '6' ) {
				glassTypeOne = 1460;
			} else if (($('.glass-type-first_one:checked').val()) == 'regular' && ($('.glass-type-second_one:checked').val()) == 'tempered' && (($('#glass-depth_one option:selected')).text()) == '8' ) {
				glassTypeOne = 1715;
			} else if (($('.glass-type-first_one:checked').val()) == 'regular' && ($('.glass-type-second_one:checked').val()) == 'tempered' && (($('#glass-depth_one option:selected')).text()) == '10' ) {
				glassTypeOne = 2540;
			} else if (($('.glass-type-first_one:checked').val()) == 'regular' && ($('.glass-type-second_one:checked').val()) == 'tempered' && (($('#glass-depth_one option:selected')).text()) == '12' ) {
				glassTypeOne = 4064;
			} else if (($('.glass-type-first_one:checked').val()) == 'light' && ($('.glass-type-second_one:checked').val()) == 'tempered' && (($('#glass-depth_one option:selected')).text()) == '4' ) {
				glassTypeOne = 1905;
			} else if (($('.glass-type-first_one:checked').val()) == 'light' && ($('.glass-type-second_one:checked').val()) == 'tempered' && (($('#glass-depth_one option:selected')).text()) == '5' ) {
				glassTypeOne = 0;
				console.log('Такой толщины нет');
			} else if (($('.glass-type-first_one:checked').val()) == 'light' && ($('.glass-type-second_one:checked').val()) == 'tempered' && (($('#glass-depth_one option:selected')).text()) == '6' ) {
				glassTypeOne = 2477;
			}  else if (($('.glass-type-first_one:checked').val()) == 'light' && ($('.glass-type-second_one:checked').val()) == 'tempered' && (($('#glass-depth_one option:selected')).text()) == '8' ) {
				glassTypeOne = 3302;
			}  else if (($('.glass-type-first_one:checked').val()) == 'light' && ($('.glass-type-second_one:checked').val()) == 'tempered' && (($('#glass-depth_one option:selected')).text()) == '10' ) {
				glassTypeOne = 4255;
			}  else if (($('.glass-type-first_one:checked').val()) == 'light' && ($('.glass-type-second_one:checked').val()) == 'tempered' && (($('#glass-depth_one option:selected')).text()) == '12' ) {
				glassTypeOne = 0;
				console.log('Такой толщины нет');
			}

			if( ($('.glass-type-first_two:checked').val()) == 'regular' && ($('.glass-type-second_two:checked').val()) == 'raw' && (($('#glass-depth_two option:selected')).text()) == '4' ){
				glassTypeTwo = 762;
			} else if (($('.glass-type-first_two:checked').val()) == 'regular' && ($('.glass-type-second_two:checked').val()) == 'raw' && (($('#glass-depth_two option:selected')).text()) == '5' ) {
				glassTypeTwo = 889;
			} else if (($('.glass-type-first_two:checked').val()) == 'regular' && ($('.glass-type-second_two:checked').val()) == 'raw' && (($('#glass-depth_two option:selected')).text()) == '6' ) {
				glassTypeTwo = 1016;
			} else if (($('.glass-type-first_two:checked').val()) == 'regular' && ($('.glass-type-second_two:checked').val()) == 'raw' && (($('#glass-depth_two option:selected')).text()) == '8' ) {
				glassTypeTwo = 1270;
			} else if (($('.glass-type-first_two:checked').val()) == 'regular' && ($('.glass-type-second_two:checked').val()) == 'raw' && (($('#glass-depth_two option:selected')).text()) == '10' ) {
				glassTypeTwo = 1778;
			} else if (($('.glass-type-first_two:checked').val()) == 'regular' && ($('.glass-type-second_two:checked').val()) == 'raw' && (($('#glass-depth_two option:selected')).text()) == '12' ) {
				glassTypeTwo = 2921;
			} else if (($('.glass-type-first_two:checked').val()) == 'light' && ($('.glass-type-second_two:checked').val()) == 'raw' && (($('#glass-depth_two option:selected')).text()) == '4' ) {
				glassTypeTwo = 1524;
			} else if (($('.glass-type-first_two:checked').val()) == 'light' && ($('.glass-type-second_two:checked').val()) == 'raw' && (($('#glass-depth_two option:selected')).text()) == '5' ) {
				glassTypeTwo = 0;
				console.log('Такой толщины нет');
			} else if (($('.glass-type-first_two:checked').val()) == 'light' && ($('.glass-type-second_two:checked').val()) == 'raw' && (($('#glass-depth_two option:selected')).text()) == '6' ) {
				glassTypeTwo = 2032;
			} else if (($('.glass-type-first_two:checked').val()) == 'light' && ($('.glass-type-second_two:checked').val()) == 'raw' && (($('#glass-depth_two option:selected')).text()) == '8' ) {
				glassTypeTwo = 2858;
			} else if (($('.glass-type-first_two:checked').val()) == 'light' && ($('.glass-type-second_two:checked').val()) == 'raw' && (($('#glass-depth_two option:selected')).text()) == '10' ) {
				glassTypeTwo = 3620;
			} else if (($('.glass-type-first_two:checked').val()) == 'light' && ($('.glass-type-second_two:checked').val()) == 'raw' && (($('#glass-depth_two option:selected')).text()) == '12' ) {
				glassTypeTwo = 0;
				console.log('Такой толщины нет');
			} else if (($('.glass-type-first_two:checked').val()) == 'regular' && ($('.glass-type-second_two:checked').val()) == 'tempered' && (($('#glass-depth_two option:selected')).text()) == '4' ) {
				glassTypeTwo = 1143;
			} else if (($('.glass-type-first_two:checked').val()) == 'regular' && ($('.glass-type-second_two:checked').val()) == 'tempered' && (($('#glass-depth_two option:selected')).text()) == '5' ) {
				glassTypeTwo = 1270;
			} else if (($('.glass-type-first_two:checked').val()) == 'regular' && ($('.glass-type-second_two:checked').val()) == 'tempered' && (($('#glass-depth_two option:selected')).text()) == '6' ) {
				glassTypeTwo = 1460;
			} else if (($('.glass-type-first_two:checked').val()) == 'regular' && ($('.glass-type-second_two:checked').val()) == 'tempered' && (($('#glass-depth_two option:selected')).text()) == '8' ) {
				glassTypeTwo = 1715;
			} else if (($('.glass-type-first_two:checked').val()) == 'regular' && ($('.glass-type-second_two:checked').val()) == 'tempered' && (($('#glass-depth_two option:selected')).text()) == '10' ) {
				glassTypeTwo = 2540;
			} else if (($('.glass-type-first_two:checked').val()) == 'regular' && ($('.glass-type-second_two:checked').val()) == 'tempered' && (($('#glass-depth_two option:selected')).text()) == '12' ) {
				glassTypeTwo = 4064;
			} else if (($('.glass-type-first_two:checked').val()) == 'light' && ($('.glass-type-second_two:checked').val()) == 'tempered' && (($('#glass-depth_two option:selected')).text()) == '4' ) {
				glassTypeTwo = 1905;
			} else if (($('.glass-type-first_two:checked').val()) == 'light' && ($('.glass-type-second_two:checked').val()) == 'tempered' && (($('#glass-depth_two option:selected')).text()) == '5' ) {
				glassTypeTwo = 0;
				console.log('Такой толщины нет');
			} else if (($('.glass-type-first_two:checked').val()) == 'light' && ($('.glass-type-second_two:checked').val()) == 'tempered' && (($('#glass-depth_two option:selected')).text()) == '6' ) {
				glassTypeTwo = 2477;
			}  else if (($('.glass-type-first_two:checked').val()) == 'light' && ($('.glass-type-second_two:checked').val()) == 'tempered' && (($('#glass-depth_two option:selected')).text()) == '8' ) {
				glassTypeTwo = 3302;
			}  else if (($('.glass-type-first_two:checked').val()) == 'light' && ($('.glass-type-second_two:checked').val()) == 'tempered' && (($('#glass-depth_two option:selected')).text()) == '10' ) {
				glassTypeTwo = 4255;
			}  else if (($('.glass-type-first_two:checked').val()) == 'light' && ($('.glass-type-second_two:checked').val()) == 'tempered' && (($('#glass-depth_two option:selected')).text()) == '12' ) {
				glassTypeTwo = 0;
				console.log('Такой толщины нет');
			}

			if( ($('.glass-type-first_three:checked').val()) == 'regular' && ($('.glass-type-second_three:checked').val()) == 'raw' && (($('#glass-depth_three option:selected')).text()) == '4' ){
				glassTypeThree = 762;
			} else if (($('.glass-type-first_three:checked').val()) == 'regular' && ($('.glass-type-second_three:checked').val()) == 'raw' && (($('#glass-depth_three option:selected')).text()) == '5' ) {
				glassTypeThree = 889;
			} else if (($('.glass-type-first_three:checked').val()) == 'regular' && ($('.glass-type-second_three:checked').val()) == 'raw' && (($('#glass-depth_three option:selected')).text()) == '6' ) {
				glassTypeThree = 1016;
			} else if (($('.glass-type-first_three:checked').val()) == 'regular' && ($('.glass-type-second_three:checked').val()) == 'raw' && (($('#glass-depth_three option:selected')).text()) == '8' ) {
				glassTypeThree = 1270;
			} else if (($('.glass-type-first_three:checked').val()) == 'regular' && ($('.glass-type-second_three:checked').val()) == 'raw' && (($('#glass-depth_three option:selected')).text()) == '10' ) {
				glassTypeThree = 1778;
			} else if (($('.glass-type-first_three:checked').val()) == 'regular' && ($('.glass-type-second_three:checked').val()) == 'raw' && (($('#glass-depth_three option:selected')).text()) == '12' ) {
				glassTypeThree = 2921;
			} else if (($('.glass-type-first_three:checked').val()) == 'light' && ($('.glass-type-second_three:checked').val()) == 'raw' && (($('#glass-depth_three option:selected')).text()) == '4' ) {
				glassTypeThree = 1524;
			} else if (($('.glass-type-first_three:checked').val()) == 'light' && ($('.glass-type-second_three:checked').val()) == 'raw' && (($('#glass-depth_three option:selected')).text()) == '5' ) {
				glassTypeThree = 0;
				console.log('Такой толщины нет');
			} else if (($('.glass-type-first_three:checked').val()) == 'light' && ($('.glass-type-second_three:checked').val()) == 'raw' && (($('#glass-depth_three option:selected')).text()) == '6' ) {
				glassTypeThree = 2032;
			} else if (($('.glass-type-first_three:checked').val()) == 'light' && ($('.glass-type-second_three:checked').val()) == 'raw' && (($('#glass-depth_three option:selected')).text()) == '8' ) {
				glassTypeThree = 2858;
			} else if (($('.glass-type-first_three:checked').val()) == 'light' && ($('.glass-type-second_three:checked').val()) == 'raw' && (($('#glass-depth_three option:selected')).text()) == '10' ) {
				glassTypeThree = 3620;
			} else if (($('.glass-type-first_three:checked').val()) == 'light' && ($('.glass-type-second_three:checked').val()) == 'raw' && (($('#glass-depth_three option:selected')).text()) == '12' ) {
				glassTypeThree = 0;
				console.log('Такой толщины нет');
			} else if (($('.glass-type-first_three:checked').val()) == 'regular' && ($('.glass-type-second_three:checked').val()) == 'tempered' && (($('#glass-depth_three option:selected')).text()) == '4' ) {
				glassTypeThree = 1143;
			} else if (($('.glass-type-first_three:checked').val()) == 'regular' && ($('.glass-type-second_three:checked').val()) == 'tempered' && (($('#glass-depth_three option:selected')).text()) == '5' ) {
				glassTypeThree = 1270;
			} else if (($('.glass-type-first_three:checked').val()) == 'regular' && ($('.glass-type-second_three:checked').val()) == 'tempered' && (($('#glass-depth_three option:selected')).text()) == '6' ) {
				glassTypeThree = 1460;
			} else if (($('.glass-type-first_three:checked').val()) == 'regular' && ($('.glass-type-second_three:checked').val()) == 'tempered' && (($('#glass-depth_three option:selected')).text()) == '8' ) {
				glassTypeThree = 1715;
			} else if (($('.glass-type-first_three:checked').val()) == 'regular' && ($('.glass-type-second_three:checked').val()) == 'tempered' && (($('#glass-depth_three option:selected')).text()) == '10' ) {
				glassTypeThree = 2540;
			} else if (($('.glass-type-first_three:checked').val()) == 'regular' && ($('.glass-type-second_three:checked').val()) == 'tempered' && (($('#glass-depth_three option:selected')).text()) == '12' ) {
				glassTypeThree = 4064;
			} else if (($('.glass-type-first_three:checked').val()) == 'light' && ($('.glass-type-second_three:checked').val()) == 'tempered' && (($('#glass-depth_three option:selected')).text()) == '4' ) {
				glassTypeThree = 1905;
			} else if (($('.glass-type-first_three:checked').val()) == 'light' && ($('.glass-type-second_three:checked').val()) == 'tempered' && (($('#glass-depth_three option:selected')).text()) == '5' ) {
				glassTypeThree = 0;
				console.log('Такой толщины нет');
			} else if (($('.glass-type-first_three:checked').val()) == 'light' && ($('.glass-type-second_three:checked').val()) == 'tempered' && (($('#glass-depth_three option:selected')).text()) == '6' ) {
				glassTypeThree = 2477;
			}  else if (($('.glass-type-first_three:checked').val()) == 'light' && ($('.glass-type-second_three:checked').val()) == 'tempered' && (($('#glass-depth_three option:selected')).text()) == '8' ) {
				glassTypeThree = 3302;
			}  else if (($('.glass-type-first_three:checked').val()) == 'light' && ($('.glass-type-second_three:checked').val()) == 'tempered' && (($('#glass-depth_three option:selected')).text()) == '10' ) {
				glassTypeThree = 4255;
			}  else if (($('.glass-type-first_three:checked').val()) == 'light' && ($('.glass-type-second_three:checked').val()) == 'tempered' && (($('#glass-depth_three option:selected')).text()) == '12' ) {
				glassTypeThree = 0;
				console.log('Такой толщины нет');
			}


			if(glassTypeOne == 0 || glassTypeTwo == 0 || glassTypeThree == 0){
				$('#depth-modal_glass').arcticmodal();
			} 

			if((($('#glass-depth_one option:selected')).text()) == '10' && $('.glass-edge_one:checked').val() == '250'|| (($('#glass-depth_one option:selected')).text()) == '12' && $('.glass-edge_one:checked').val() == '250'){
				glassEdgeOne = 350;
			}

			if((($('#glass-depth_two option:selected')).text()) == '10' && $('.glass-edge_two:checked').val() == '250'|| (($('#glass-depth_two option:selected')).text()) == '12' && $('.glass-edge_two:checked').val() == '250'){
				glassEdgeTwo = 350;
			}

			if((($('#glass-depth_three option:selected')).text()) == '10' && $('.glass-edge_three:checked').val() == '250'|| (($('#glass-depth_three option:selected')).text()) == '12' && $('.glass-edge_three:checked').val() == '250'){
				glassEdgeThree = 350;
			}

			calculatorGlassItemOne = calculatorGlassQuantityOne.value * (((calculatorGlassSquareOne * glassTypeOne) + (calculatorGlassSquareOne * parseInt(glassEdgeOne))) + (parseInt($('#glass-bracing_one').val() * 250)));


			if($('#calculator-glass-more__two').prop('checked')){
				calculatorGlassItemTwo = calculatorGlassQuantityTwo.value * (((calculatorGlassSquareTwo * glassTypeTwo) + (calculatorGlassSquareTwo * parseInt(glassEdgeTwo))) + (parseInt($('#glass-bracing_two').val() * 250)));

			} else {
				calculatorGlassItemTwo  = 0;
			}

			if($('#calculator-glass-more__three').prop('checked')){
				calculatorGlassItemThree = calculatorGlassQuantityThree.value * (((calculatorGlassSquareThree * glassTypeThree) + (calculatorGlassSquareThree * parseInt(glassEdgeThree))) + (parseInt($('#glass-bracing_three').val() * 250)));
			} else {
				calculatorGlassItemThree  = 0;
			}

			var calculatorGlassTotal = (calculatorGlassItemOne + calculatorGlassItemTwo + calculatorGlassItemThree).toFixed(1);

			if(calculatorGlassTotal === "NaN"){
	          calculatorGlassTotal = 0;
	       }

	       calculatorGlassAmount.value = calculatorGlassTotal+ ' руб';

		   var calculatorGlassSummaryQuantity;
		   var calculatorGlassSummaryQuantitySpan  = document.querySelector('#calculator-glass-summary__quantity');
	       var calculatorGlassSummaryQuantityOne = document.querySelector('#glass-quantity_one');
	       var calculatorGlassSummaryQuantityTwo  = document.querySelector('#glass-quantity_two');
	       var calculatorGlassSummaryQuantityThree = document.querySelector('#glass-quantity_three');

	       var calculatorGlassSummarySquareSpan  = document.querySelector('#calculator-glass-summary__square');

	       var calculatorGlassSummaryWeightSpan  = document.querySelector('#calculator-glass-summary__weight');

	       checkboxChecked($('#calculator-glass-more__two'), calculatorGlassSummaryQuantityTwo);
	       checkboxChecked($('#calculator-glass-more__three'), calculatorGlassSummaryQuantityThree);

	       calculatorGlassSummaryQuantity = parseInt(calculatorGlassSummaryQuantityOne.value );
	       if($('#calculator-glass-more__two').prop('checked')){
	       	calculatorGlassSummaryQuantity = parseInt(calculatorGlassSummaryQuantityOne.value ) + parseInt(calculatorGlassSummaryQuantityTwo.value);
	       } 
	       if ($('#calculator-glass-more__three').prop('checked')) {
	       	calculatorGlassSummaryQuantity = parseInt(calculatorGlassSummaryQuantityOne.value ) + parseInt(calculatorGlassSummaryQuantityTwo.value) + parseInt(calculatorGlassSummaryQuantityThree.value);
	       }

	       calculatorGlassSummaryQuantitySpan.innerHTML = calculatorGlassSummaryQuantity || 0;

	       	if($('#calculator-glass-more__two').prop('checked')){
		       } else {
		       		calculatorGlassSquareTwo = 0;
		       }

		    if($('#calculator-glass-more__three').prop('checked')){
		       } else {
		       		calculatorGlassSquareThree = 0;
		       }

	       calculatorGlassSummarySquareSpan.innerHTML = (((parseInt(calculatorGlassSummaryQuantityOne.value )) * calculatorGlassSquareOne) + ((parseInt(calculatorGlassSummaryQuantityTwo.value )) * calculatorGlassSquareTwo) + ((parseInt(calculatorGlassSummaryQuantityThree.value )) * calculatorGlassSquareThree)).toFixed(2);

	       if ((($('#glass-depth_one option:selected')).text()) == '4') {
	       	calculatorGlassWeightOne = 10;
	       } else if ((($('#glass-depth_one option:selected')).text()) == '5') {
	       	calculatorGlassWeightOne = 12.5;
	       } else if ((($('#glass-depth_one option:selected')).text()) == '6') {
	       	calculatorGlassWeightOne = 15;
	       } else if ((($('#glass-depth_one option:selected')).text()) == '8') {
	       	calculatorGlassWeightOne = 20;
	       } else if ((($('#glass-depth_one option:selected')).text()) == '10') {
	       	calculatorGlassWeightOne = 25;
	       } else if ((($('#glass-depth_one option:selected')).text()) == '12') {
	       	calculatorGlassWeightOne = 30;
	       }

	       if ((($('#glass-depth_two option:selected')).text()) == '4') {
	       	calculatorGlassWeightTwo = 10;
	       } else if ((($('#glass-depth_two option:selected')).text()) == '5') {
	       	calculatorGlassWeightTwo = 12.5;
	       } else if ((($('#glass-depth_two option:selected')).text()) == '6') {
	       	calculatorGlassWeightTwo = 15;
	       } else if ((($('#glass-depth_two option:selected')).text()) == '8') {
	       	calculatorGlassWeightTwo = 20;
	       } else if ((($('#glass-depth_two option:selected')).text()) == '10') {
	       	calculatorGlassWeightTwo = 25;
	       } else if ((($('#glass-depth_two option:selected')).text()) == '12') {
	       	calculatorGlassWeightTwo = 30;
	       }

	       if ((($('#glass-depth_three option:selected')).text()) == '4') {
	       	calculatorGlassWeightThree = 10;
	       } else if ((($('#glass-depth_three option:selected')).text()) == '5') {
	       	calculatorGlassWeightThree = 12.5;
	       } else if ((($('#glass-depth_three option:selected')).text()) == '6') {
	       	calculatorGlassWeightThree = 15;
	       } else if ((($('#glass-depth_three option:selected')).text()) == '8') {
	       	calculatorGlassWeightThree = 20;
	       } else if ((($('#glass-depth_three option:selected')).text()) == '10') {
	       	calculatorGlassWeightThree = 25;
	       } else if ((($('#glass-depth_three option:selected')).text()) == '12') {
	       	calculatorGlassWeightThree = 30;
	       }


	       calculatorGlassSummaryWeightSpan.innerHTML = (((parseInt(calculatorGlassWeightOne )) * calculatorGlassSquareOne) + ((parseInt(calculatorGlassWeightTwo )) * calculatorGlassSquareTwo) + ((parseInt(calculatorGlassWeightThree )) * calculatorGlassSquareThree)).toFixed(2);
		}

		// Калькулятор зеркала

		$('.calculator-mirror-hide__two, .calculator-mirror-hide__three').hide();

		function moreMirror(clickMirror, activeMirror, widthMirror){
			this.clickMirror = clickMirror;
			this.activeMirror = activeMirror;
			this.widthMirror = widthMirror;
			clickMirror.on('change', function(e){
				if(clickMirror.prop('checked')){
					activeMirror.slideDown();
				} else {
					activeMirror.slideUp();
					widthMirror.val() == 0;
				}
				calculatorMirror();
		    });
		};

		moreMirror($('#calculator-mirror-more__two'), $('.calculator-mirror-hide__two'), $('#mirror-width_two'));
		moreMirror($('#calculator-mirror-more__three'), $('.calculator-mirror-hide__three'), $('#mirror-width_three'));


	    $('#calculator-mirror-more__four').on('change', function(e){
			if($('#calculator-mirror-more__four').prop('checked')){
				$('#more-modal').arcticmodal();
				$('.mirror-textarea_three').addClass('active').focus();
			}
	    });
		
		var calculatorMirrorTotal;
		var mirrorWidthOne = document.querySelector('#mirror-width_one');
		var mirrorHeightOne = document.querySelector('#mirror-height_one');
		var mirrorDepthOne = document.querySelector('#mirror-depth_one');
		var mirrorBracingOne = document.querySelector('#mirror-bracing_one');
		var mirrorCutOne = document.querySelector('#mirror-cut_one');
		var calculatorMirrorQuantityOne = document.querySelector('#mirror-quantity_one');

		var mirrorWidthTwo = document.querySelector('#mirror-width_two');
		var mirrorHeightTwo = document.querySelector('#mirror-height_two');
		var mirrorDepthTwo = document.querySelector('#mirror-depth_two');
		var mirrorBracingTwo = document.querySelector('#mirror-bracing_two');
		var mirrorCutTwo = document.querySelector('#mirror-cut_two');
		var calculatorMirrorQuantityTwo = document.querySelector('#mirror-quantity_two');

		var mirrorWidthThree = document.querySelector('#mirror-width_three');
		var mirrorHeightThree = document.querySelector('#mirror-height_three');
		var mirrorDepthThree = document.querySelector('#mirror-depth_three');
		var mirrorBracingThree = document.querySelector('#mirror-bracing_three');
		var mirrorCutThree = document.querySelector('#mirror-cut_three');
		var calculatorMirrorQuantityThree = document.querySelector('#mirror-quantity_three');

		function calculatorMirrorInit(changeItem, checkedItem, edgeItem,){
			this.changeItem = changeItem;
			this.edgeItem = edgeItem;
			this.checkedItem = checkedItem;
			changeItem.on('change', function(e){
		      e.preventDefault();
		       edgeItem = ( checkedItem.val());
		       calculatorMirror();
		    });
		};

		var mirrorEdgeOne, mirrorEdgeTwo, mirrorEdgeThree;

		calculatorMirrorInit($('.mirror-edge_one'), $('.mirror-edge_one:checked'), mirrorEdgeOne);
		calculatorMirrorInit($('.mirror-edge_two'), $('.mirror-edge_two:checked'), mirrorEdgeTwo);
		calculatorMirrorInit($('.mirror-edge_three'), $('.mirror-edge_three:checked'), mirrorEdgeThree);

	    $('.mirror-type_one').add($('.mirror-type_two')).add($('.mirror-type_three')).on('change',calculatorMirror);
	    

	    $(mirrorBracingOne).add(mirrorBracingTwo).add(mirrorBracingThree).on('input', function(){
	      this.value = $(this).val().replace(/^0+/,'');
	    });

	    $(mirrorWidthOne).add(mirrorHeightOne).add(mirrorBracingOne).add(mirrorCutOne).add(calculatorMirrorQuantityOne).add(mirrorWidthTwo).add(mirrorHeightTwo).add(mirrorBracingTwo).add(mirrorCutTwo).add(calculatorMirrorQuantityTwo).add(mirrorWidthThree).add(mirrorHeightThree).add(mirrorBracingThree).add(mirrorCutThree).add(calculatorMirrorQuantityThree).on('input', calculatorMirror);
	    $(mirrorDepthOne).add(mirrorDepthTwo).add(mirrorDepthThree).on('change', calculatorMirror)

		function calculatorMirror() {

			minMaxReset();
			
			var calculatorMirrorAmount = document.querySelector('#calculator-price-mirror-input');
			var calculatorMirrorQuantityOne = document.querySelector('#mirror-quantity_one');
			var calculatorMirrorQuantityTwo = document.querySelector('#mirror-quantity_two');
			var calculatorMirrorQuantityThree = document.querySelector('#mirror-quantity_three');

			var calculatorMirrorSquareOne = (( parseInt($('#mirror-width_one').val()) * parseInt($('#mirror-height_one').val()) )/1000000);
			var calculatorMirrorSquareTwo = (( parseInt($('#mirror-width_two').val()) * parseInt($('#mirror-height_two').val()) )/1000000);
			var calculatorMirrorSquareThree = (( parseInt($('#mirror-width_three').val()) * parseInt($('#mirror-height_three').val()) )/1000000);

			var mirrorEdgeOne = $('.mirror-edge_one:checked').val();
			var mirrorEdgeTwo = $('.mirror-edge_two:checked').val();
			var mirrorEdgeThree = $('.mirror-edge_three:checked').val();

			var mirrorTypeOne;
			var mirrorTypeTwo;
			var mirrorTypeThree;

			function checkboxCheckedMirror (itemCheckMirror, itemInputMirror){
	       		this.itemCheckMirror = itemCheckMirror;
	       		this.itemInputMirror = itemInputMirror;
		       	if(itemCheckMirror.prop('checked')){
			       } else {
			       	itemInputMirror.value = 1;
			       }
		       }

			if( ($('.mirror-type_one:checked').val()) == 'silver' && (($('#mirror-depth_one option:selected')).text()) == '4' ){
				mirrorTypeOne = 1333;
			} else if ( ($('.mirror-type_one:checked').val()) == 'silver' && (($('#mirror-depth_one option:selected')).text()) == '5' ) {
				mirrorTypeOne = 1780;
			} else if ( ($('.mirror-type_one:checked').val()) == 'silver' && (($('#mirror-depth_one option:selected')).text()) == '6' ) {
				mirrorTypeOne = 2030;
			} else if ( ($('.mirror-type_one:checked').val()) == 'bronze' && (($('#mirror-depth_one option:selected')).text()) == '4') {
				mirrorTypeOne = 1842;
			} else if ( ($('.mirror-type_one:checked').val()) == 'bronze' && (($('#mirror-depth_one option:selected')).text()) == '5') {
				mirrorTypeOne = 2603;
			} else if ( ($('.mirror-type_one:checked').val()) == 'bronze' && (($('#mirror-depth_one option:selected')).text()) == '6') {
				mirrorTypeOne = 3175;
			}

			if( ($('.mirror-type_two:checked').val()) == 'silver' && (($('#mirror-depth_two option:selected')).text()) == '4' ){
				mirrorTypeTwo = 1333;
			} else if ( ($('.mirror-type_two:checked').val()) == 'silver' && (($('#mirror-depth_two option:selected')).text()) == '5' ) {
				mirrorTypeTwo = 1780;
			} else if ( ($('.mirror-type_two:checked').val()) == 'silver' && (($('#mirror-depth_two option:selected')).text()) == '6' ) {
				mirrorTypeTwo = 2030;
			} else if ( ($('.mirror-type_two:checked').val()) == 'bronze' && (($('#mirror-depth_two option:selected')).text()) == '4') {
				mirrorTypeTwo = 1842;
			} else if ( ($('.mirror-type_two:checked').val()) == 'bronze' && (($('#mirror-depth_two option:selected')).text()) == '5') {
				mirrorTypeTwo = 2603;
			} else if ( ($('.mirror-type_two:checked').val()) == 'bronze' && (($('#mirror-depth_two option:selected')).text()) == '6') {
				mirrorTypeTwo = 3175;
			}

			if( ($('.mirror-type_three:checked').val()) == 'silver' && (($('#mirror-depth_three option:selected')).text()) == '4' ){
				mirrorTypeThree = 1333;
			} else if ( ($('.mirror-type_three:checked').val()) == 'silver' && (($('#mirror-depth_three option:selected')).text()) == '5' ) {
				mirrorTypeThree = 1780;
			} else if ( ($('.mirror-type_three:checked').val()) == 'silver' && (($('#mirror-depth_three option:selected')).text()) == '6' ) {
				mirrorTypeThree = 2030;
			} else if ( ($('.mirror-type_three:checked').val()) == 'bronze' && (($('#mirror-depth_three option:selected')).text()) == '4') {
				mirrorTypeThree = 1842;
			} else if ( ($('.mirror-type_three:checked').val()) == 'bronze' && (($('#mirror-depth_three option:selected')).text()) == '5') {
				mirrorTypeThree = 2603;
			} else if ( ($('.mirror-type_three:checked').val()) == 'bronze' && (($('#mirror-depth_three option:selected')).text()) == '6') {
				mirrorTypeThree = 3175;
			}

			calculatorMirrorItemOne = calculatorMirrorQuantityOne.value * (((calculatorMirrorSquareOne * mirrorTypeOne) + (calculatorMirrorSquareOne * parseInt(mirrorEdgeOne))) + (parseInt($('#mirror-bracing_one').val() * 250)) + (parseInt($('#mirror-cut_one').val() * 490)));

			if($('#calculator-mirror-more__two').prop('checked')){
				calculatorMirrorItemTwo = calculatorMirrorQuantityTwo.value * (((calculatorMirrorSquareTwo * mirrorTypeTwo) + (calculatorMirrorSquareTwo * parseInt(mirrorEdgeTwo))) + (parseInt($('#mirror-bracing_two').val() * 250)) + (parseInt($('#mirror-cut_two').val() * 490)));
			} else {
				calculatorMirrorItemTwo  = 0;
			}

			if($('#calculator-mirror-more__three').prop('checked')){
				calculatorMirrorItemThree = calculatorMirrorQuantityThree.value * (((calculatorMirrorSquareThree * mirrorTypeThree) + (calculatorMirrorSquareThree * parseInt(mirrorEdgeThree))) + (parseInt($('#mirror-bracing_three').val() * 250)) + (parseInt($('#mirror-cut_three').val() * 490)));
			} else {
				calculatorMirrorItemThree  = 0;
			}

			var calculatorMirrorTotal = (calculatorMirrorItemOne + calculatorMirrorItemTwo + calculatorMirrorItemThree).toFixed(1);

			if(calculatorMirrorTotal === "NaN"){
	          calculatorMirrorTotal = 0;
	       }

	       calculatorMirrorAmount.value = calculatorMirrorTotal+ ' руб';

		   var calculatorMirrorSummaryQuantity;
		   var calculatorMirrorSummaryQuantitySpan  = document.querySelector('#calculator-mirror-summary__quantity');
	       var calculatorMirrorSummaryQuantityOne = document.querySelector('#mirror-quantity_one');
	       var calculatorMirrorSummaryQuantityTwo  = document.querySelector('#mirror-quantity_two');
	       var calculatorMirrorSummaryQuantityThree = document.querySelector('#mirror-quantity_three');

	       var calculatorMirrorSummarySquareSpan  = document.querySelector('#calculator-mirror-summary__square');

	       var calculatorMirrorSummaryWeightSpan  = document.querySelector('#calculator-mirror-summary__weight');

	       checkboxCheckedMirror($('#calculator-mirror-more__two'), calculatorMirrorSummaryQuantityTwo);
	       checkboxCheckedMirror($('#calculator-mirror-more__three'), calculatorMirrorSummaryQuantityThree);

	       calculatorMirrorSummaryQuantity = parseInt(calculatorMirrorSummaryQuantityOne.value );
		       if($('#calculator-mirror-more__two').prop('checked')){
		       	calculatorMirrorSummaryQuantity = parseInt(calculatorMirrorSummaryQuantityOne.value ) + parseInt(calculatorMirrorSummaryQuantityTwo.value);
		       } 
		       if ($('#calculator-mirror-more__three').prop('checked')) {
		       	calculatorMirrorSummaryQuantity = parseInt(calculatorMirrorSummaryQuantityOne.value ) + parseInt(calculatorMirrorSummaryQuantityTwo.value) + parseInt(calculatorMirrorSummaryQuantityThree.value);
		       }


	       calculatorMirrorSummaryQuantitySpan.innerHTML = calculatorMirrorSummaryQuantity || 0;

	       	if($('#calculator-mirror-more__two').prop('checked')){
		       } else {
		       		calculatorMirrorSquareTwo = 0;
		       }

		    if($('#calculator-mirror-more__three').prop('checked')){
		       } else {
		       		calculatorMirrorSquareThree = 0;
		       }

	       calculatorMirrorSummarySquareSpan.innerHTML = (((parseInt(calculatorMirrorSummaryQuantityOne.value )) * calculatorMirrorSquareOne) + ((parseInt(calculatorMirrorSummaryQuantityTwo.value )) * calculatorMirrorSquareTwo) + ((parseInt(calculatorMirrorSummaryQuantityThree.value )) * calculatorMirrorSquareThree)).toFixed(2);

	       if ((($('#mirror-depth_one option:selected')).text()) == '4') {
	       	calculatorMirrorWeightOne = 10;
	       } else if ((($('#mirror-depth_one option:selected')).text()) == '5') {
	       	calculatorMirrorWeightOne = 12.5;
	       } else if ((($('#mirror-depth_one option:selected')).text()) == '6') {
	       	calculatorMirrorWeightOne = 15;
	       }

	       if ((($('#mirror-depth_two option:selected')).text()) == '4') {
	       	calculatorMirrorWeightTwo = 10;
	       } else if ((($('#mirror-depth_two option:selected')).text()) == '5') {
	       	calculatorMirrorWeightTwo = 12.5;
	       } else if ((($('#mirror-depth_two option:selected')).text()) == '6') {
	       	calculatorMirrorWeightTwo = 15;
	       }

	       if ((($('#mirror-depth_three option:selected')).text()) == '4') {
	       	calculatorMirrorWeightThree = 10;
	       } else if ((($('#mirror-depth_three option:selected')).text()) == '5') {
	       	calculatorMirrorWeightThree = 12.5;
	       } else if ((($('#mirror-depth_three option:selected')).text()) == '6') {
	       	calculatorMirrorWeightThree = 15;
	       }

	       calculatorMirrorSummaryWeightSpan.innerHTML = (((parseInt(calculatorMirrorWeightOne )) * calculatorMirrorSquareOne) + ((parseInt(calculatorMirrorWeightTwo )) * calculatorMirrorSquareTwo) + ((parseInt(calculatorMirrorWeightThree )) * calculatorMirrorSquareThree)).toFixed(2);
		}

		// Калькулятор скинали

		$('.calculator-skinali-hide__two, .calculator-skinali-hide__three').hide();

		function moreSkinali(clickSkinali, activeSkinali, widthSkinali){
			this.clickSkinali = clickSkinali;
			this.activeSkinali = activeSkinali;
			this.widthSkinali = widthSkinali;
			clickSkinali.on('change', function(e){
				if(clickSkinali.prop('checked')){
					activeSkinali.slideDown();
				} else {
					activeSkinali.slideUp();
					widthSkinali.val() == 0;
				}
				calculatorSkinali();
		    });
		};

		moreSkinali($('#calculator-skinali-more__two'), $('.calculator-skinali-hide__two'), $('#skinali-width_two'));
		moreSkinali($('#calculator-skinali-more__three'), $('.calculator-skinali-hide__three'), $('#skinali-width_three'));

	    $('#calculator-skinali-more__four').on('change', function(e){
			if($('#calculator-skinali-more__four').prop('checked')){
				$('#more-modal').arcticmodal();
				$('.skinali-textarea_three').addClass('active').focus();
			}
	    });
		
		var calculatorSkinaliTotal;
		var skinaliWidthOne = document.querySelector('#skinali-width_one');
		var skinaliHeightOne = document.querySelector('#skinali-height_one');
		var skinaliDepthOne = document.querySelector('#skinali-depth_one');
		var skinaliBracingOne = document.querySelector('#skinali-bracing_one');
		var calculatorSkinaliQuantityOne = document.querySelector('#skinali-quantity_one');

		var skinaliWidthTwo = document.querySelector('#skinali-width_two');
		var skinaliHeightTwo = document.querySelector('#skinali-height_two');
		var skinaliDepthTwo = document.querySelector('#skinali-depth_two');
		var skinaliBracingTwo = document.querySelector('#skinali-bracing_two');
		var calculatorSkinaliQuantityTwo = document.querySelector('#skinali-quantity_two');

		var skinaliWidthThree = document.querySelector('#skinali-width_three');
		var skinaliHeightThree = document.querySelector('#skinali-height_three');
		var skinaliDepthThree = document.querySelector('#skinali-depth_three');
		var skinaliBracingThree = document.querySelector('#skinali-bracing_three');
		var calculatorSkinaliQuantityThree = document.querySelector('#skinali-quantity_three');

		var skinaliCutOne = document.querySelector('#skinali-cut_one');
		var skinaliCutTwo = document.querySelector('#skinali-cut_two');
		var skinaliCutThree = document.querySelector('#skinali-cut_three');

		function calculatorSkinaliInit(changeItem, checkedItem, edgeItem,){
			this.changeItem = changeItem;
			this.edgeItem = edgeItem;
			this.checkedItem = checkedItem;
			changeItem.on('change', function(e){
		      e.preventDefault();
		       edgeItem = ( checkedItem.val());
		       calculatorSkinali();
		    });
		};

		var skinaliEdgeOne, skinaliEdgeTwo, skinaliEdgeThree, skinaliTypeOneFirst, skinaliTypeTwoFirst, skinaliTypeThreeFirst;

		calculatorSkinaliInit($('.skinali-edge_one'), $('.skinali-edge_one:checked'), skinaliEdgeOne);
		calculatorSkinaliInit($('.skinali-edge_two'), $('.skinali-edge_three:checked'), skinaliEdgeTwo);
		calculatorSkinaliInit($('.skinali-edge_three'), $('.mirror-edge_three:checked'), skinaliEdgeThree);
		calculatorSkinaliInit($('.skinali-type-first_one'), $('.skinali-type-first_one:checked'), skinaliTypeOneFirst);
		calculatorSkinaliInit($('.skinali-type-first_two'), $('.skinali-type-first_two:checked'), skinaliTypeTwoFirst);
		calculatorSkinaliInit($('.skinali-type-first_three'), $('.skinali-type-first_three:checked'), skinaliTypeThreeFirst);

	    $(skinaliBracingOne).add(skinaliBracingTwo).add(skinaliBracingThree).on('input', function(){
	      this.value = $(this).val().replace(/^0+/,'');
	    });

	    $(skinaliWidthOne).add(skinaliHeightOne).add(skinaliBracingOne).add(calculatorSkinaliQuantityOne).add(skinaliWidthTwo).add(skinaliHeightTwo).add(skinaliBracingTwo).add(calculatorSkinaliQuantityTwo).add(skinaliWidthThree).add(skinaliHeightThree).add(skinaliBracingThree).add(calculatorSkinaliQuantityThree).add(skinaliCutOne).add(skinaliCutTwo).add(skinaliCutThree).on('input', calculatorSkinali);
	    $(skinaliDepthOne).add(skinaliDepthTwo).add(skinaliDepthThree).add(skinaliTypeOneFirst).add(skinaliTypeTwoFirst).add(skinaliTypeThreeFirst).on('change', calculatorSkinali)

		function calculatorSkinali() {

			minMaxReset();
			
			var calculatorSkinaliAmount = document.querySelector('#calculator-price-skinali-input');
			var calculatorSkinaliQuantityOne = document.querySelector('#skinali-quantity_one');
			var calculatorSkinaliQuantityTwo = document.querySelector('#skinali-quantity_two');
			var calculatorSkinaliQuantityThree = document.querySelector('#skinali-quantity_three');

			var calculatorSkinaliSquareOne = (( parseInt($('#skinali-width_one').val()) * parseInt($('#skinali-height_one').val()) )/1000000);
			var calculatorSkinaliSquareTwo = (( parseInt($('#skinali-width_two').val()) * parseInt($('#skinali-height_two').val()) )/1000000);
			var calculatorSkinaliSquareThree = (( parseInt($('#skinali-width_three').val()) * parseInt($('#skinali-height_three').val()) )/1000000);

			var skinaliEdgeOne = $('.skinali-edge_one:checked').val();
			var skinaliTypeOneFirst = $('.skinali-type-first_one:checked').val();

			var skinaliEdgeTwo = $('.skinali-edge_two:checked').val();
			var skinaliTypeTwoFirst = $('.skinali-type-first_two:checked').val();

			var skinaliEdgeThree = $('.skinali-edge_three:checked').val();
			var skinaliTypeThreeFirst = $('.skinali-type-first_three:checked').val();

			var skinaliTypeOne;
			var skinaliTypeTwo;
			var skinaliTypeThree;

			function checkboxChecked (itemCheck, itemInput){
	       		this.itemCheck = itemCheck;
	       		this.itemInput = itemInput;
		       	if(itemCheck.prop('checked')){
			       } else {
			       	itemInput.value = 1;
			       }
		       }

			if( ($('.skinali-type-first_one:checked').val()) == 'regular' && (($('#skinali-depth_one option:selected')).text()) == '5' ){
				skinaliTypeOne = 1463;
			} else if ( ($('.skinali-type-first_one:checked').val()) == 'regular' && (($('#skinali-depth_one option:selected')).text()) == '6' ) {
				skinaliTypeOne = 1663;
			} else if ( ($('.skinali-type-first_one:checked').val()) == 'regular' && (($('#skinali-depth_one option:selected')).text()) == '8' ) {
				skinaliTypeOne = 1930;
			} else if ( ($('.skinali-type-first_one:checked').val()) == 'regular' && (($('#skinali-depth_one option:selected')).text()) == '10' ) {
				skinaliTypeOne = 2660;
			} else if ( ($('.skinali-type-first_one:checked').val()) == 'regular' && (($('#skinali-depth_one option:selected')).text()) == '12' ) {
				skinaliTypeOne = 4256;
			} else if ( ($('.skinali-type-first_one:checked').val()) == 'light' && (($('#skinali-depth_one option:selected')).text()) == '5' ) {
				skinaliTypeOne = 0;
				console.log('Такой толщины зеркала нет');
			} else if ( ($('.skinali-type-first_one:checked').val()) == 'light' && (($('#skinali-depth_one option:selected')).text()) == '6' ) {
				skinaliTypeOne = 2727;
			} else if ( ($('.skinali-type-first_one:checked').val()) == 'light' && (($('#skinali-depth_one option:selected')).text()) == '8' ) {
				skinaliTypeOne = 3591;
			} else if ( ($('.skinali-type-first_one:checked').val()) == 'light' && (($('#skinali-depth_one option:selected')).text()) == '10' ) {
				skinaliTypeOne = 4555;
			} else if ( ($('.skinali-type-first_one:checked').val()) == 'light' && (($('#skinali-depth_one option:selected')).text()) == '12' ) {
				skinaliTypeOne = 0;
				console.log('Такой толщины зеркала нет');
			} else if ( ($('.skinali-type-first_one:checked').val()) == 'mat' && (($('#skinali-depth_one option:selected')).text()) == '5' ) {
				skinaliTypeOne = 2563;
			} else if ( ($('.skinali-type-first_one:checked').val()) == 'mat' && (($('#skinali-depth_one option:selected')).text()) == '6' ) {
				skinaliTypeOne = 2763;
			} else if ( ($('.skinali-type-first_one:checked').val()) == 'mat' && (($('#skinali-depth_one option:selected')).text()) == '8' ) {
				skinaliTypeOne = 3030;
			} else if ( ($('.skinali-type-first_one:checked').val()) == 'mat' && (($('#skinali-depth_one option:selected')).text()) == '10' ) {
				skinaliTypeOne = 3960;
			} else if ( ($('.skinali-type-first_one:checked').val()) == 'mat' && (($('#skinali-depth_one option:selected')).text()) == '12' ) {
				skinaliTypeOne = 5955;
			}

			if( ($('.skinali-type-first_two:checked').val()) == 'regular' && (($('#skinali-depth_two option:selected')).text()) == '5' ){
				skinaliTypeTwo = 1463;
			} else if ( ($('.skinali-type-first_two:checked').val()) == 'regular' && (($('#skinali-depth_two option:selected')).text()) == '6' ) {
				skinaliTypeTwo = 1663;
			} else if ( ($('.skinali-type-first_two:checked').val()) == 'regular' && (($('#skinali-depth_two option:selected')).text()) == '8' ) {
				skinaliTypeTwo = 1930;
			} else if ( ($('.skinali-type-first_two:checked').val()) == 'regular' && (($('#skinali-depth_two option:selected')).text()) == '10' ) {
				skinaliTypeTwo = 2660;
			} else if ( ($('.skinali-type-first_two:checked').val()) == 'regular' && (($('#skinali-depth_two option:selected')).text()) == '12' ) {
				skinaliTypeTwo = 4256;
			} else if ( ($('.skinali-type-first_two:checked').val()) == 'light' && (($('#skinali-depth_two option:selected')).text()) == '5' ) {
				skinaliTypeTwo = 0;
				console.log('Такой толщины зеркала нет');
			} else if ( ($('.skinali-type-first_two:checked').val()) == 'light' && (($('#skinali-depth_two option:selected')).text()) == '6' ) {
				skinaliTypeTwo = 2727;
			} else if ( ($('.skinali-type-first_two:checked').val()) == 'light' && (($('#skinali-depth_two option:selected')).text()) == '8' ) {
				skinaliTypeTwo = 3591;
			} else if ( ($('.skinali-type-first_two:checked').val()) == 'light' && (($('#skinali-depth_two option:selected')).text()) == '10' ) {
				skinaliTypeTwo = 4555;
			} else if ( ($('.skinali-type-first_two:checked').val()) == 'light' && (($('#skinali-depth_two option:selected')).text()) == '12' ) {
				skinaliTypeTwo = 0;
				console.log('Такой толщины зеркала нет');
			} else if ( ($('.skinali-type-first_two:checked').val()) == 'mat' && (($('#skinali-depth_two option:selected')).text()) == '5' ) {
				skinaliTypeTwo = 2563;
			} else if ( ($('.skinali-type-first_two:checked').val()) == 'mat' && (($('#skinali-depth_two option:selected')).text()) == '6' ) {
				skinaliTypeTwo = 2763;
			} else if ( ($('.skinali-type-first_two:checked').val()) == 'mat' && (($('#skinali-depth_two option:selected')).text()) == '8' ) {
				skinaliTypeTwo = 3030;
			} else if ( ($('.skinali-type-first_two:checked').val()) == 'mat' && (($('#skinali-depth_two option:selected')).text()) == '10' ) {
				skinaliTypeTwo = 3960;
			} else if ( ($('.skinali-type-first_two:checked').val()) == 'mat' && (($('#skinali-depth_two option:selected')).text()) == '12' ) {
				skinaliTypeTwo = 5955;
			}

			if( ($('.skinali-type-first_three:checked').val()) == 'regular' && (($('#skinali-depth_three option:selected')).text()) == '5' ){
				skinaliTypeThree = 1463;
			} else if ( ($('.skinali-type-first_three:checked').val()) == 'regular' && (($('#skinali-depth_three option:selected')).text()) == '6' ) {
				skinaliTypeThree = 1663;
			} else if ( ($('.skinali-type-first_three:checked').val()) == 'regular' && (($('#skinali-depth_three option:selected')).text()) == '8' ) {
				skinaliTypeThree = 1930;
			} else if ( ($('.skinali-type-first_three:checked').val()) == 'regular' && (($('#skinali-depth_three option:selected')).text()) == '10' ) {
				skinaliTypeThree = 2660;
			} else if ( ($('.skinali-type-first_three:checked').val()) == 'regular' && (($('#skinali-depth_three option:selected')).text()) == '12' ) {
				skinaliTypeThree = 4256;
			} else if ( ($('.skinali-type-first_three:checked').val()) == 'light' && (($('#skinali-depth_three option:selected')).text()) == '5' ) {
				skinaliTypeThree = 0;
				console.log('Такой толщины зеркала нет');
			} else if ( ($('.skinali-type-first_three:checked').val()) == 'light' && (($('#skinali-depth_three option:selected')).text()) == '6' ) {
				skinaliTypeThree = 2727;
			} else if ( ($('.skinali-type-first_three:checked').val()) == 'light' && (($('#skinali-depth_three option:selected')).text()) == '8' ) {
				skinaliTypeThree = 3591;
			} else if ( ($('.skinali-type-first_three:checked').val()) == 'light' && (($('#skinali-depth_three option:selected')).text()) == '10' ) {
				skinaliTypeThree = 4555;
			} else if ( ($('.skinali-type-first_three:checked').val()) == 'light' && (($('#skinali-depth_three option:selected')).text()) == '12' ) {
				skinaliTypeThree = 0;
				console.log('Такой толщины зеркала нет');
			} else if ( ($('.skinali-type-first_three:checked').val()) == 'mat' && (($('#skinali-depth_three option:selected')).text()) == '5' ) {
				skinaliTypeThree = 2563;
			} else if ( ($('.skinali-type-first_three:checked').val()) == 'mat' && (($('#skinali-depth_three option:selected')).text()) == '6' ) {
				skinaliTypeThree = 2763;
			} else if ( ($('.skinali-type-first_three:checked').val()) == 'mat' && (($('#skinali-depth_three option:selected')).text()) == '8' ) {
				skinaliTypeThree = 3030;
			} else if ( ($('.skinali-type-first_three:checked').val()) == 'mat' && (($('#skinali-depth_three option:selected')).text()) == '10' ) {
				skinaliTypeThree = 3960;
			} else if ( ($('.skinali-type-first_three:checked').val()) == 'mat' && (($('#skinali-depth_three option:selected')).text()) == '12' ) {
				skinaliTypeThree = 5955;
			}


			if(skinaliTypeOne == 0 || skinaliTypeTwo == 0 || skinaliTypeThree == 0){
				$('#depth-modal_skinali').arcticmodal();
			} 

			if((($('#skinali-depth_one option:selected')).text()) == '10' && $('.skinali-edge_one:checked').val() == '250' || (($('#skinali-depth_one option:selected')).text()) == '12' && $('.skinali-edge_one:checked').val() == '250'){
				skinaliEdgeOne = 300;
			}

			if((($('#skinali-depth_two option:selected')).text()) == '10' && $('.skinali-edge_two:checked').val() == '250' || (($('#skinali-depth_two option:selected')).text()) == '12' && $('.skinali-edge_two:checked').val() == '250' ){
				skinaliEdgeTwo = 300;
			}

			if((($('#skinali-depth_three option:selected')).text()) == '10' && $('.skinali-edge_three:checked').val() == '250' || (($('#skinali-depth_three option:selected')).text()) == '12' && $('.skinali-edge_three:checked').val() == '250'){
				skinaliEdgeThree = 300;
			}

			var skinaliCutOne = document.querySelector('#skinali-cut_one');
			var skinaliCutTwo = document.querySelector('#skinali-cut_two');
			var skinaliCutThree = document.querySelector('#skinali-cut_three');

	       	var skinaliCutPriceOne = 599;
			var skinaliCutPriceTwo = 599;
			var skinaliCutPriceThree = 599;

			if((($('#skinali-depth_one option:selected')).text()) == '10' || (($('#skinali-depth_one option:selected')).text()) == '12'){
				skinaliCutPriceOne = 699;
			}

			if((($('#skinali-depth_two option:selected')).text()) == '10' || (($('#skinali-depth_two option:selected')).text()) == '12'){
				skinaliCutPriceTwo = 699;
			}

			if((($('#skinali-depth_three option:selected')).text()) == '10' || (($('#skinali-depth_three option:selected')).text()) == '12'){
				skinaliCutPriceThree = 699;
			}

			calculatorSkinaliItemOne = calculatorSkinaliQuantityOne.value * (((calculatorSkinaliSquareOne * skinaliTypeOne) + (calculatorSkinaliSquareOne * parseInt(skinaliEdgeOne))) + (parseInt($('#skinali-bracing_one').val() * 250)) + (parseInt(skinaliCutOne.value) * skinaliCutPriceOne));

			if($('#calculator-skinali-more__two').prop('checked')){
				calculatorSkinaliItemTwo = calculatorSkinaliQuantityTwo.value * (((calculatorSkinaliSquareTwo * skinaliTypeTwo) + (calculatorSkinaliSquareTwo * parseInt(skinaliEdgeTwo))) + (parseInt($('#skinali-bracing_two').val() * 250)) + (parseInt(skinaliCutTwo.value) * skinaliCutPriceTwo));
			} else {
				calculatorSkinaliItemTwo  = 0;
			}

			if($('#calculator-skinali-more__three').prop('checked')){
				calculatorSkinaliItemThree = calculatorSkinaliQuantityThree.value * (((calculatorSkinaliSquareThree * skinaliTypeThree) + (calculatorSkinaliSquareThree * parseInt(skinaliEdgeThree))) + (parseInt($('#skinali-bracing_three').val() * 250)) + (parseInt(skinaliCutThree.value) * skinaliCutPriceThree));
			} else {
				calculatorSkinaliItemThree  = 0;
			}


			var calculatorSkinaliTotal = (calculatorSkinaliItemOne + calculatorSkinaliItemTwo + calculatorSkinaliItemThree).toFixed(1);

			if(calculatorSkinaliTotal === "NaN"){
	          calculatorSkinaliTotal = 0;
	       }

	       calculatorSkinaliAmount.value = calculatorSkinaliTotal+ ' руб';

		   var calculatorSkinaliSummaryQuantity;
		   var calculatorSkinaliSummaryQuantitySpan  = document.querySelector('#calculator-skinali-summary__quantity');
	       var calculatorSkinaliSummaryQuantityOne = document.querySelector('#skinali-quantity_one');
	       var calculatorSkinaliSummaryQuantityTwo  = document.querySelector('#skinali-quantity_two');
	       var calculatorSkinaliSummaryQuantityThree = document.querySelector('#skinali-quantity_three');

	       var calculatorSkinaliSummarySquareSpan  = document.querySelector('#calculator-skinali-summary__square');

	       var calculatorSkinaliSummaryWeightSpan = document.querySelector('#calculator-skinali-summary__weight');

	       checkboxChecked($('#calculator-skinali-more__two'), calculatorSkinaliSummaryQuantityTwo);
	       checkboxChecked($('#calculator-skinali-more__three'), calculatorSkinaliSummaryQuantityThree);
	
	       calculatorSkinaliSummaryQuantity = parseInt(calculatorSkinaliSummaryQuantityOne.value );
		       if($('#calculator-skinali-more__two').prop('checked')){
		       	calculatorSkinaliSummaryQuantity = parseInt(calculatorSkinaliSummaryQuantityOne.value ) + parseInt(calculatorSkinaliSummaryQuantityTwo.value);
		       } 
		       if ($('#calculator-skinali-more__three').prop('checked')) {
		       	calculatorSkinaliSummaryQuantity = parseInt(calculatorSkinaliSummaryQuantityOne.value ) + parseInt(calculatorSkinaliSummaryQuantityTwo.value) + parseInt(calculatorSkinaliSummaryQuantityThree.value);
		       }

	       calculatorSkinaliSummaryQuantitySpan.innerHTML = calculatorSkinaliSummaryQuantity || 0;

	       	if($('#calculator-skinali-more__two').prop('checked')){
		       } else {
		       		calculatorSkinaliSquareTwo = 0;
		       }

		    if($('#calculator-skinali-more__three').prop('checked')){
		       } else {
		       		calculatorSkinaliSquareThree = 0;
		       }

		       console.log(1)

	       calculatorSkinaliSummarySquareSpan.innerHTML = (((parseInt(calculatorSkinaliSummaryQuantityOne.value )) * calculatorSkinaliSquareOne) + ((parseInt(calculatorSkinaliSummaryQuantityTwo.value )) * calculatorSkinaliSquareTwo) + ((parseInt(calculatorSkinaliSummaryQuantityThree.value )) * calculatorSkinaliSquareThree)).toFixed(2);

	       if ((($('#skinali-depth_one option:selected')).text()) == '5') {
	       	calculatorSkinaliWeightOne = 12.5;
	       } else if ((($('#skinali-depth_one option:selected')).text()) == '6') {
	       	calculatorSkinaliWeightOne = 15;
	       } else if ((($('#skinali-depth_one option:selected')).text()) == '8') {
	       	calculatorSkinaliWeightOne = 20;
	       } else if ((($('#skinali-depth_one option:selected')).text()) == '10') {
	       	calculatorSkinaliWeightOne = 25;
	       } else if ((($('#skinali-depth_one option:selected')).text()) == '12') {
	       	calculatorSkinaliWeightOne = 30;
	       }

	       if ((($('#skinali-depth_two option:selected')).text()) == '5') {
	       	calculatorSkinaliWeightTwo = 12.5;
	       } else if ((($('#skinali-depth_two option:selected')).text()) == '6') {
	       	calculatorSkinaliWeightTwo = 15;
	       } else if ((($('#skinali-depth_two option:selected')).text()) == '8') {
	       	calculatorSkinaliWeightTwo = 20;
	       } else if ((($('#skinali-depth_two option:selected')).text()) == '10') {
	       	calculatorSkinaliWeightTwo = 25;
	       } else if ((($('#skinali-depth_two option:selected')).text()) == '12') {
	       	calculatorSkinaliWeightTwo = 30;
	       }

	       if ((($('#skinali-depth_three option:selected')).text()) == '5') {
	       	calculatorSkinaliWeightThree = 12.5;
	       } else if ((($('#skinali-depth_three option:selected')).text()) == '6') {
	       	calculatorSkinaliWeightThree = 15;
	       } else if ((($('#skinali-depth_three option:selected')).text()) == '8') {
	       	calculatorSkinaliWeightThree = 20;
	       } else if ((($('#skinali-depth_three option:selected')).text()) == '10') {
	       	calculatorSkinaliWeightThree = 25;
	       } else if ((($('#skinali-depth_three option:selected')).text()) == '12') {
	       	calculatorSkinaliWeightThree = 30;
	       }


	       calculatorSkinaliSummaryWeightSpan.innerHTML = (((parseInt(calculatorSkinaliWeightOne )) * calculatorSkinaliSquareOne) + ((parseInt(calculatorSkinaliWeightTwo )) * calculatorSkinaliSquareTwo) + ((parseInt(calculatorSkinaliWeightThree )) * calculatorSkinaliSquareThree)).toFixed(2);
		}

		// Калькулятор дверей

		$('.calculator-door-hide__two, .calculator-door-hide__three').hide();

		function moreDoor(clickDoor, activeDoor, widthDoor){
			this.clickDoor = clickDoor;
			this.activeDoor = activeDoor;
			this.widthDoor = widthDoor;
			clickDoor.on('change', function(e){
				if(clickDoor.prop('checked')){
					activeDoor.slideDown();
				} else {
					activeDoor.slideUp();
					widthDoor.val() == 0;
				}
				calculatorDoor();
		    });
		};

		moreDoor($('#calculator-door-more__two'), $('.calculator-door-hide__two'), $('#door-width_two'));
		moreDoor($('#calculator-door-more__three'), $('.calculator-door-hide__three'), $('#door-width_three'));

	    $('#calculator-door-more__four').on('change', function(e){
			if($('#calculator-door-more__four').prop('checked')){
				$('#more-modal').arcticmodal();
				$('.door-textarea_three').addClass('active').focus();
			}
	    });
		
		var calculatorDoorTotal;
		var doorWidthOne = document.querySelector('#door-width_one');
		var doorHeightOne = document.querySelector('#door-height_one');
		var doorDepthOne = document.querySelector('#door-depth_one');
		var calculatorDoorQuantityOne = document.querySelector('#door-quantity_one');

		var doorWidthTwo = document.querySelector('#door-width_two');
		var doorHeightTwo = document.querySelector('#door-height_two');
		var doorDepthTwo = document.querySelector('#door-depth_two');
		var calculatorDoorQuantityTwo = document.querySelector('#door-quantity_two');

		var doorWidthThree = document.querySelector('#door-width_three');
		var doorHeightThree = document.querySelector('#door-height_three');
		var doorDepthThree = document.querySelector('#door-depth_three');
		var calculatorDoorQuantityThree = document.querySelector('#door-quantity_three');

		function calculatorDoorInit(changeItem, checkedItem, edgeItem,){
			this.changeItem = changeItem;
			this.edgeItem = edgeItem;
			this.checkedItem = checkedItem;
			changeItem.on('change', function(e){
		      e.preventDefault();
		       edgeItem = ( checkedItem.val());
		       calculatorDoor();
		    });
		};

		var doorEdgeOne, doorEdgeTwo, doorEdgeThree, doorTypeOneFirst, doorTypeTwoFirst, doorTypeThreeFirst;

		calculatorDoorInit($('.door-edge_one'), $('.door-edge_one:checked'), doorEdgeOne);
		calculatorDoorInit($('.door-edge_two'), $('.door-edge_two:checked'), doorEdgeTwo);
		calculatorDoorInit($('.door-edge_three'), $('.door-edge_three:checked'), doorEdgeThree);
		calculatorDoorInit($('.door-type-first_one'), $('.door-type-first_one:checked'), doorTypeOneFirst);
		calculatorDoorInit($('.door-type-first_two'), $('.door-type-first_two:checked'), doorTypeTwoFirst);
		calculatorDoorInit($('.door-type-first_three'), $('.door-type-first_three:checked'), doorTypeThreeFirst);

	    $(doorWidthOne).add(doorHeightOne).add(calculatorDoorQuantityOne).add(doorWidthTwo).add(doorHeightTwo).add(calculatorDoorQuantityTwo).add(doorWidthThree).add(doorHeightThree).add(calculatorDoorQuantityThree).on('input', calculatorDoor);
	    $(doorDepthOne).add(doorDepthTwo).add(doorDepthThree).add(doorTypeOneFirst).add(doorTypeTwoFirst).add(doorTypeThreeFirst).on('change', calculatorDoor)

		function calculatorDoor() {

			minMaxReset();
			
			var calculatorDoorAmount = document.querySelector('#calculator-price-door-input');
			var calculatorDoorQuantityOne = document.querySelector('#door-quantity_one');
			var calculatorDoorQuantityTwo = document.querySelector('#door-quantity_two');
			var calculatorDoorQuantityThree = document.querySelector('#door-quantity_three');

			var calculatorDoorSquareOne = (( parseInt($('#door-width_one').val()) * parseInt($('#door-height_one').val()) )/1000000);
			var calculatorDoorSquareTwo = (( parseInt($('#door-width_two').val()) * parseInt($('#door-height_two').val()) )/1000000);
			var calculatorDoorSquareThree = (( parseInt($('#door-width_three').val()) * parseInt($('#door-height_three').val()) )/1000000);

			var doorEdgeOne = $('.door-edge_one:checked').val();
			var doorTypeOneFirst = $('.door-type-first_one:checked').val();

			var doorEdgeTwo = $('.door-edge_two:checked').val();
			var doorTypeTwoFirst = $('.door-type-first_two:checked').val();

			var doorEdgeThree = $('.door-edge_three:checked').val();
			var doorTypeThreeFirst = $('.door-type-first_three:checked').val();

			var doorTypeOne;
			var doorTypeTwo;
			var doorTypeThree;

			function checkboxChecked (itemCheck, itemInput){
	       		this.itemCheck = itemCheck;
	       		this.itemInput = itemInput;
		       	if(itemCheck.prop('checked')){
			       } else {
			       	itemInput.value = 1;
			       }
		       }

			if( ($('.door-type-first_one:checked').val()) == 'regular' && (($('#door-depth_one option:selected')).text()) == '6' ){
				doorTypeOne = 1875;
			} else if ( ($('.door-type-first_one:checked').val()) == 'regular' && (($('#door-depth_one option:selected')).text()) == '8' ) {
				doorTypeOne = 2175;
			} else if ( ($('.door-type-first_one:checked').val()) == 'regular' && (($('#door-depth_one option:selected')).text()) == '10' ) {
				doorTypeOne = 3000;
			} else if ( ($('.door-type-first_one:checked').val()) == 'regular' && (($('#door-depth_one option:selected')).text()) == '12' ) {
				doorTypeOne = 4800;
			} else if ( ($('.door-type-first_one:checked').val()) == 'light' && (($('#door-depth_one option:selected')).text()) == '6' ) {
				doorTypeOne = 2925;
			} else if ( ($('.door-type-first_one:checked').val()) == 'light' && (($('#door-depth_one option:selected')).text()) == '8' ) {
				doorTypeOne = 3900;
			} else if ( ($('.door-type-first_one:checked').val()) == 'light' && (($('#door-depth_one option:selected')).text()) == '10' ) {
				doorTypeOne = 5025;
			} else if ( ($('.door-type-first_one:checked').val()) == 'light' && (($('#door-depth_one option:selected')).text()) == '12' ) {
				doorTypeOne = 0;
			} else if ( ($('.door-type-first_one:checked').val()) == 'mat' && (($('#door-depth_one option:selected')).text()) == '6' ) {
				doorTypeOne = 3125;
			} else if ( ($('.door-type-first_one:checked').val()) == 'mat' && (($('#door-depth_one option:selected')).text()) == '8' ) {
				doorTypeOne = 3375;
			} else if ( ($('.door-type-first_one:checked').val()) == 'mat' && (($('#door-depth_one option:selected')).text()) == '10' ) {
				doorTypeOne = 4500;
			} else if ( ($('.door-type-first_one:checked').val()) == 'mat' && (($('#door-depth_one option:selected')).text()) == '12' ) {
				doorTypeOne = 6200;
			}

			if( ($('.door-type-first_two:checked').val()) == 'regular' && (($('#door-depth_two option:selected')).text()) == '6' ){
				doorTypeTwo = 1875;
			} else if ( ($('.door-type-first_two:checked').val()) == 'regular' && (($('#door-depth_two option:selected')).text()) == '8' ) {
				doorTypeTwo = 2175;
			} else if ( ($('.door-type-first_two:checked').val()) == 'regular' && (($('#door-depth_two option:selected')).text()) == '10' ) {
				doorTypeTwo = 3000;
			} else if ( ($('.door-type-first_two:checked').val()) == 'regular' && (($('#door-depth_two option:selected')).text()) == '12' ) {
				doorTypeTwo = 4800;
			} else if ( ($('.door-type-first_two:checked').val()) == 'light' && (($('#door-depth_two option:selected')).text()) == '6' ) {
				doorTypeTwo = 2925;
			} else if ( ($('.door-type-first_two:checked').val()) == 'light' && (($('#door-depth_two option:selected')).text()) == '8' ) {
				doorTypeTwo = 3900;
			} else if ( ($('.door-type-first_two:checked').val()) == 'light' && (($('#door-depth_two option:selected')).text()) == '10' ) {
				doorTypeTwo = 5025;
			} else if ( ($('.door-type-first_two:checked').val()) == 'light' && (($('#door-depth_two option:selected')).text()) == '12' ) {
				doorTypeTwo = 0;
			} else if ( ($('.door-type-first_two:checked').val()) == 'mat' && (($('#door-depth_two option:selected')).text()) == '6' ) {
				doorTypeTwo = 3125;
			} else if ( ($('.door-type-first_two:checked').val()) == 'mat' && (($('#door-depth_two option:selected')).text()) == '8' ) {
				doorTypeTwo = 3375;
			} else if ( ($('.door-type-first_two:checked').val()) == 'mat' && (($('#door-depth_two option:selected')).text()) == '10' ) {
				doorTypeTwo = 4500;
			} else if ( ($('.door-type-first_two:checked').val()) == 'mat' && (($('#door-depth_two option:selected')).text()) == '12' ) {
				doorTypeTwo = 6200;
			}

			if( ($('.door-type-first_three:checked').val()) == 'regular' && (($('#door-depth_three option:selected')).text()) == '6' ){
				doorTypeThree = 1875;
			} else if ( ($('.door-type-first_three:checked').val()) == 'regular' && (($('#door-depth_three option:selected')).text()) == '8' ) {
				doorTypeThree = 2175;
			} else if ( ($('.door-type-first_three:checked').val()) == 'regular' && (($('#door-depth_three option:selected')).text()) == '10' ) {
				doorTypeThree = 3000;
			} else if ( ($('.door-type-first_three:checked').val()) == 'regular' && (($('#door-depth_three option:selected')).text()) == '12' ) {
				doorTypeThree = 4800;
			} else if ( ($('.door-type-first_three:checked').val()) == 'light' && (($('#door-depth_three option:selected')).text()) == '6' ) {
				doorTypeThree = 2925;
			} else if ( ($('.door-type-first_three:checked').val()) == 'light' && (($('#door-depth_three option:selected')).text()) == '8' ) {
				doorTypeThree = 3900;
			} else if ( ($('.door-type-first_three:checked').val()) == 'light' && (($('#door-depth_three option:selected')).text()) == '10' ) {
				doorTypeThree = 5025;
			} else if ( ($('.door-type-first_three:checked').val()) == 'light' && (($('#door-depth_three option:selected')).text()) == '12' ) {
				doorTypeThree = 0;
			} else if ( ($('.door-type-first_three:checked').val()) == 'mat' && (($('#door-depth_three option:selected')).text()) == '6' ) {
				doorTypeThree = 3125;
			} else if ( ($('.door-type-first_three:checked').val()) == 'mat' && (($('#door-depth_three option:selected')).text()) == '8' ) {
				doorTypeThree = 3375;
			} else if ( ($('.door-type-first_three:checked').val()) == 'mat' && (($('#door-depth_three option:selected')).text()) == '10' ) {
				doorTypeThree = 4500;
			} else if ( ($('.door-type-first_three:checked').val()) == 'mat' && (($('#door-depth_three option:selected')).text()) == '12' ) {
				doorTypeThree = 6200;
			}

			if(doorTypeOne == 0 || doorTypeTwo == 0 || doorTypeThree == 0){
				$('#depth-modal_door').arcticmodal();
			} 

			if( (($('#door-depth_one option:selected')).text()) == '10' && $('.door-edge_one:checked').val() == '300' || (($('#door-depth_one option:selected')).text()) == '12' && $('.door-edge_one:checked').val() == '300'){
				doorEdgeOne = 350;
			}

			if((($('#door-depth_two option:selected')).text()) == '10' && $('.door-edge_two:checked').val() == '300' || (($('#door-depth_two option:selected')).text()) == '12' && $('.door-edge_two:checked').val() == '300'){
				doorEdgeTwo = 350;
			}

			if((($('#door-depth_three option:selected')).text()) == '10' && $('.door-edge_three:checked').val() == '300' || (($('#door-depth_three option:selected')).text()) == '12' && $('.door-edge_three:checked').val() == '300'){
				doorEdgeThree = 350;
			}


			calculatorDoorItemOne = calculatorDoorQuantityOne.value * (((calculatorDoorSquareOne * doorTypeOne) + (calculatorDoorSquareOne * parseInt(doorEdgeOne))));

			if($('#calculator-door-more__two').prop('checked')){
				calculatorDoorItemTwo = calculatorDoorQuantityTwo.value * (((calculatorDoorSquareTwo * doorTypeTwo) + (calculatorDoorSquareTwo * parseInt(doorEdgeTwo))));
			} else {
				calculatorDoorItemTwo  = 0;
			}

			if($('#calculator-door-more__three').prop('checked')){
				calculatorDoorItemThree = calculatorDoorQuantityThree.value * (((calculatorDoorSquareThree * doorTypeThree) + (calculatorDoorSquareThree * parseInt(doorEdgeThree))));
			} else {
				calculatorDoorItemThree  = 0;
			}


			var calculatorDoorTotal = (calculatorDoorItemOne + calculatorDoorItemTwo + calculatorDoorItemThree).toFixed(1);

			if(calculatorDoorTotal === "NaN"){
	          calculatorDoorTotal = 0;
	       }

	       calculatorDoorAmount.value = calculatorDoorTotal+ ' руб';

		   var calculatorDoorSummaryQuantity;
		   var calculatorDoorSummaryQuantitySpan  = document.querySelector('#calculator-door-summary__quantity');
	       var calculatorDoorSummaryQuantityOne = document.querySelector('#door-quantity_one');
	       var calculatorDoorSummaryQuantityTwo  = document.querySelector('#door-quantity_two');
	       var calculatorDoorSummaryQuantityThree = document.querySelector('#door-quantity_three');

	       var calculatorDoorSummarySquareSpan  = document.querySelector('#calculator-door-summary__square');

	       var calculatorDoorSummaryWeightSpan = document.querySelector('#calculator-door-summary__weight');

	       checkboxChecked($('#calculator-door-more__two'), calculatorDoorSummaryQuantityTwo);
	       checkboxChecked($('#calculator-door-more__three'), calculatorDoorSummaryQuantityThree);
	
	       calculatorDoorSummaryQuantity = parseInt(calculatorDoorSummaryQuantityOne.value );
		       if($('#calculator-door-more__two').prop('checked')){
		       	calculatorDoorSummaryQuantity = parseInt(calculatorDoorSummaryQuantityOne.value ) + parseInt(calculatorDoorSummaryQuantityTwo.value);
		       } 
		       if ($('#calculator-door-more__three').prop('checked')) {
		       	calculatorDoorSummaryQuantity = parseInt(calculatorDoorSummaryQuantityOne.value ) + parseInt(calculatorDoorSummaryQuantityTwo.value) + parseInt(calculatorDoorSummaryQuantityThree.value);
		       }

	       calculatorDoorSummaryQuantitySpan.innerHTML = calculatorDoorSummaryQuantity || 0;

	       	if($('#calculator-door-more__two').prop('checked')){
		       } else {
		       		calculatorDoorSquareTwo = 0;
		       }

		    if($('#calculator-door-more__three').prop('checked')){
		       } else {
		       		calculatorDoorSquareThree = 0;
		       }

	       calculatorDoorSummarySquareSpan.innerHTML = (((parseInt(calculatorDoorSummaryQuantityOne.value )) * calculatorDoorSquareOne) + ((parseInt(calculatorDoorSummaryQuantityTwo.value )) * calculatorDoorSquareTwo) + ((parseInt(calculatorDoorSummaryQuantityThree.value )) * calculatorDoorSquareThree)).toFixed(2);

	       if ((($('#door-depth_one option:selected')).text()) == '6') {
	       	calculatorDoorWeightOne = 15;
	       } else if ((($('#door-depth_one option:selected')).text()) == '8') {
	       	calculatorDoorWeightOne = 20;
	       } else if ((($('#door-depth_one option:selected')).text()) == '10') {
	       	calculatorDoorWeightOne = 25;
	       } else if ((($('#door-depth_one option:selected')).text()) == '12') {
	       	calculatorDoorWeightOne = 30;
	       }

	       if ((($('#door-depth_two option:selected')).text()) == '6') {
	       	calculatorDoorWeightTwo = 15;
	       } else if ((($('#door-depth_two option:selected')).text()) == '8') {
	       	calculatorDoorWeightTwo = 20;
	       } else if ((($('#door-depth_two option:selected')).text()) == '10') {
	       	calculatorDoorWeightTwo = 25;
	       } else if ((($('#door-depth_two option:selected')).text()) == '12') {
	       	calculatorDoorWeightTwo = 30;
	       }

	       if ((($('#door-depth_three option:selected')).text()) == '6') {
	       	calculatorDoorWeightThree = 15;
	       } else if ((($('#door-depth_three option:selected')).text()) == '8') {
	       	calculatorDoorWeightThree = 20;
	       } else if ((($('#door-depth_three option:selected')).text()) == '10') {
	       	calculatorDoorWeightThree = 25;
	       } else if ((($('#door-depth_three option:selected')).text()) == '12') {
	       	calculatorDoorWeightThree = 30;
	       }

	       calculatorDoorSummaryWeightSpan.innerHTML = (((parseInt(calculatorDoorWeightOne )) * calculatorDoorSquareOne) + ((parseInt(calculatorDoorWeightTwo )) * calculatorDoorSquareTwo) + ((parseInt(calculatorDoorWeightThree )) * calculatorDoorSquareThree)).toFixed(2);
		}

});