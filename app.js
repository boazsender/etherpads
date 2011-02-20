chrome.extension.onRequest.addListener(function( request, sender, sendResponse ){

    if ( request.message == "isEtherPad" ) {

        if( $('body').attr('id') == 'padbody' ) {
            
            sendResponse( true )
            
        }
    }
});