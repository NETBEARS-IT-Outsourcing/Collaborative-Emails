function sendMail(form) {
  var html = convertToHtml(DocumentApp.getActiveDocument().getId());
  Logger.log('inside sendMail');
  html = inlineCss(html);
  
  MailApp.sendEmail({
    to: form.emailRecipient,
    replyTo: Session.getActiveUser().getEmail(),
    subject: form.emailSubject,
    bcc:form.emailBCC,
    cc:form.emailCC,
    attachments:getBlobsArray(form),
    htmlBody: html,
                    
     });
  
  
}

function addGoogleCSS()
  { 
    return "<script>"+"<link rel='stylesheet' href='https://ssl.gstatic.com/docs/script/css/add-ons.css'>"+"</script>";
  }

function getBlobsArray(form){
 var blobArray=[];
  Logger.log('got to blobs');
 if (form.attach1.length!=0){
    var blob1 = form.attach1;
    blobArray.push(blob1);
 }
  
 if (form.attach2.length!=0){
    var blob2 = form.attach2;
    blobArray.push(blob2);
 }
  
  if (form.attach3.length!=0){
    var blob3 = form.attach3;
    blobArray.push(blob3);
 }
  
  if (form.attach4.length!=0){
    var blob4 = form.attach4;
    blobArray.push(blob4);
 }
  
  if (form.attach5.length!=0){
    var blob5 = form.attach5;
    blobArray.push(blob5);
 }
    
    
  
  /*
  var blobPDF = getDocAsPDF();
  
  blobArray.push(blobPDF);
  */
  return blobArray;
}

function openPDF(){
  return '<h3 style="color:blue"> In case you are not able to view this email correctly, please open the attached PDF.</h3>';
}

function getDocAsPDF(){
  var getFileAsJson=Drive.Files.get(DocumentApp.getActiveDocument().getId());
  
  var htmlFileUrl=getFileAsJson.exportLinks['application/pdf'];
  
  var forDriveScope = DriveApp.getStorageUsed();
  
  var param = {
    method      : "get",
    headers     : {"Authorization": "Bearer " + ScriptApp.getOAuthToken()},
    muteHttpExceptions:true,
  };
  
  var html = UrlFetchApp.fetch(htmlFileUrl, param).getBlob();
  
  return html;
}

function convertToHtml(fileId) {
  var file = Drive.Files.get(fileId);
  var htmlExportLink = file.exportLinks['text/html'];
  if (!htmlExportLink) {
    throw 'File cannot be converted to HTML.';
  }
  var oAuthToken = ScriptApp.getOAuthToken();
  var response = UrlFetchApp.fetch(htmlExportLink, {
    headers:{
      'Authorization': 'Bearer ' + oAuthToken
    },
    muteHttpExceptions: true
  });
  if (!response.getResponseCode() == 200) {
    throw 'Error converting to HTML: ' + response.getContentText();
  }
  return response.getContentText();
}


function inlineCss(html) {

  var apikey = mailChimpAPI;
  
  var url = Utilities.formatString('https://%s.api.mailchimp.com/2.0/helper/inline-css', mailChimpAPI);
  var response = UrlFetchApp.fetch(url, {
    method: 'post',
    payload: {
      apikey: apikey,
      html: html,
      strip_css: true
    }
  });
  var output = JSON.parse(response.getContentText());
  if (!response.getResponseCode() == 200) {
    throw 'Error inlining CSS: ' + output['error'];
  }
  
  var newHTML = escape(output['html']);
  Logger.log(output['html']);
  return newHTML;
  
}