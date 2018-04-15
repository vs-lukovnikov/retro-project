(function(window){
    var showNav = document.querySelector('.show-nav-elem');
    var navMenu =  document.querySelector('.nav');
    var sliders = document.querySelectorAll('[data-slider]');
    var currentSlideNumber = 0;
    var prevSlideNumber;
    var nextSlideNumber;
    init(sliders);


    
    function init(arr) {
        renderStartPosition(arr);
    }



    document.addEventListener('click', function(e){        
        if (e.target == showNav ) {
            showingNavMenu();
        }
        if (e.target.closest('.sliders') || e.target.closest('.arrow-right')) {
            moveSlidersForward();
        }

        if ( e.target.closest('.arrow-left') ) {
            moveSlidersBack();
        }
    });

    // nav-menu 

    function showingNavMenu() {
        navMenu.classList.toggle('showing');
    }

    //slider

    function moveSlidersForward () {
        defineSlideNumbers(currentSlideNumber);
        renderForward(sliders);        
    }

    function moveSlidersBack () {
        defineSlideNumbers(currentSlideNumber);
        renderBack(sliders);
    }

    function renderStartPosition(elems) {
        defineSlideNumbers(currentSlideNumber);
        elems.forEach(function(elem, i) {
            if( i ===  currentSlideNumber){
                moveToCenter(elem);
            } else if ( i === nextSlideNumber) {
                moveToRight(elem);
            } else if (i === prevSlideNumber){
                moveToLeft(elem);
            } else {
                moveToBuffer(elem);
            }
        });
    }
    

    function renderForward (elems) {
        moveToLeft(elems[currentSlideNumber]);
        moveToCenter(elems[nextSlideNumber]);
        moveToBuffer(elems[prevSlideNumber]);
        moveToRight(elems[((prevSlideNumber-1)+sliders.length)%sliders.length]);

        currentSlideNumber = nextSlideNumber;
    }

    function renderBack (elems) {
        moveToRight(elems[currentSlideNumber]);
        moveToCenter(elems[prevSlideNumber]);
        setTimeout(moveToBuffer(elems[nextSlideNumber]), 300);
        moveToLeft(elems[((nextSlideNumber+1)+sliders.length)%sliders.length]);

        currentSlideNumber = prevSlideNumber;
    }



    function defineSlideNumbers (number) {
        prevSlideNumber = ((number-1)+sliders.length)%sliders.length;
        nextSlideNumber = ((number+1)+sliders.length)%sliders.length;
    }

    function moveToLeft (elem){
        elem.className = 'slides left-position';
    }

    function moveToCenter(elem){
        elem.className = 'slides center-position';
    }

    function moveToRight(elem){
        elem.className = 'slides right-position';
    }

    function moveToBuffer(elem) {
        elem.className = "slides buffer-position";
    }




})(window);