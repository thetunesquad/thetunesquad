'use strict';

// $.oauthpopup = function(options)
// {
//     options.windowName = options.windowName ||  'ConnectWithOAuth'; // should not include space for IE
//     options.windowOptions = options.windowOptions || 'location=0,status=0,width=800,height=400';
//     options.callback = options.callback || function(){ window.location.reload(); };
//     var that = this;
//     log(options.path);
//     that._oauthWindow = window.open(options.path, options.windowName, options.windowOptions);
//     that._oauthInterval = window.setInterval(function(){
//         if (that._oauthWindow.closed) {
//             window.clearInterval(that._oauthInterval);
//             options.callback();
//         }
//     }, 1000);
// };
