( function( $ ) {
    setInterval( function(){
        let target = $(".wp-smush-all.sui-button.wp-smush-started");

        console.log( 'Check point.');

        if( target.not('[disabled]').length ) {
            target.click();
            console.log( 'Resuming.')
        }

    }, 5000);
})(jQuery);
