// function list(tabs) {
//   var contents = '';
//   for (var i = 0; i < tabs.length; i++) {
//       contents += tabs[i].url + '\n';
//   }
//   chrome.windows.create(contents,null);
// }
document.getElementById('joomla').addEventListener('click', function() {
    chrome.tabs.query({currentWindow:true},
    function(tabs) {
        var contents = [];
        var j = 0;
        for (var i = 0; i < tabs.length; i++) {
            // var patt = new RegExp("[joomla]");
            //var res = patt.test(tabs[i].url);
            var res = tabs[i].url;
            if (res.indexOf("joomla") >= 0) {
                contents.push(tabs[i].url);
                chrome.tabs.remove(tabs[i].id, function () {

                });
                j++;
            }
        }
        if (j){

            chrome.windows.create({url: contents[0]}, function (win) {
                for (var i = 1; i < contents.length; i++) {
                    array = contents[i];
                    chrome.tabs.create({
                        url: array,
                        windowId: win.id
                    });
                }
            });
        }
    });
  });
