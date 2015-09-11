function saveDraft(TO,CC,BCC,subj,attachments) {
  var forScope2 = GmailApp.getSpamUnreadCount();
  var forScope = GmailApp.getInboxUnreadCount(); // needed for auth scope
  var boundary = (new Date()).getTime().toString();
  
  var raw = 'Subject: ' + subj+'\n' + 
            'To: '+TO+'\n' +
            'Cc: '+CC+'\n' +
            'Bcc: '+BCC+'\n' +
            'Content-Type: multipart/alternative; boundary=' + boundary + '\n' +
            '\n'+
            '--' + boundary + '\n'+
            'Content-Type: text/plain; charset=UTF-8; format=flowed; delsp=yes \n'+

            DocumentApp.getActiveDocument().getBody().getText()+'\n'+
            
            '--' + boundary + '--\n';

  
  Logger.log(raw);
  
  var draftBody = Utilities.base64Encode(raw);
  
  var params = {
    method      : "post",
    contentType : "application/json",
    headers     : {"Authorization": "Bearer " + ScriptApp.getOAuthToken()},
    muteHttpExceptions:true,
    payload:JSON.stringify({
      "message": {
        "raw": draftBody
      }
    })
  };
  
  var resp = UrlFetchApp.fetch("https://www.googleapis.com/gmail/v1/users/me/drafts", params);
  Logger.log(resp.getContentText());
}

function getBodyDraft(){
  var buildString="";
  var paragraphs = DocumentApp.getActiveDocument().getBody().getParagraphs();
  for (i in paragraphs)
  {
    buildString=buildString+paragraphs[i].getText()+'\n';
  }
  
  Logger.log(buildString);
  
}

function escape(str){
  return String(str)
  .replace(/padding:/g, '')
  .replace(/list-style-type: none;/g, '');
  
}
