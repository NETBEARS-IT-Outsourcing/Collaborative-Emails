function onOpen() {
  showSidebar();
  DocumentApp.getUi()
      .createMenu('Custom scripts')
      .addItem('Show sidebar', 'showSidebar')
      .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Index')
      .setSandboxMode(HtmlService.SandboxMode.NATIVE)
      .setTitle('Send mail script')
      .setWidth(500);
  
  DocumentApp.getUi()
      .showSidebar(html);
}

var mailChimpAPI = '<INSERT_API_KEY_HERE>';
var mailChimpServer = '<INSERT_MAIL_CHIMP_SERVER>'; //usually the last 4 characters in the mailChimpAPI (e.g. US10)