  

$('.img-icon')
         .waypoint( function(dir) {
             if ( dir === 'down' ) {
                 $(this)
                 .addClass('fadeIn')
                 .removeClass('fadeOut');
             } else {
                 $(this)
                 .addClass('fadeOut')
                 .removeClass('fadeIn');
             }
         }, {
             offset: '70%'
         })
 
         .waypoint( function(dir) {
             if ( dir === 'down' ) {
                 $(this)
                 .removeClass('fadeIn')
                 .addClass('fadeOut');
             }  else {
                 $(this)
                 .removeClass('fadeOut')
                 .addClass('fadeIn');
             }
         }, {
             offset: '-50px'
         });