function uploadFiles(form) {
  
  try {
    
    /* Name of the Drive folder where the files should be saved */
    
    var dropbox = 'dropbox';
    var folder, folders = DriveApp.getFoldersByName(dropbox);
      
    if (folders.hasNext()) {
      folder = folders.next();
    } 
     else {
        folder = DriveApp.createFolder(dropbox);
    }
   
    var arrayURL=[];
    
    /* Get the file uploaded though the form as a blob */
    if (form.attach1.length!=0){
    var blob1 = form.attach1;    
    var file1 = folder.createFile(blob1);
    file1.setDescription("Uploaded by " + Session.getActiveUser().getEmail());
    arrayURL.push([file1.getUrl(),form.attach1.name]);
    }   
    
    if (form.attach2.length!=0){
    var blob2 = form.attach2;    
    var file2 = folder.createFile(blob2);
    file2.setDescription("Uploaded by " + Session.getActiveUser().getEmail());
    arrayURL.push([file2.getUrl(),form.attach2.name]);
    }
    
    if (form.attach3.length!=0){
    var blob3 = form.attach3;    
    var file3 = folder.createFile(blob3);
    file3.setDescription("Uploaded by " + Session.getActiveUser().getEmail());
    arrayURL.push([file3.getUrl(),form.attach3.name]);
    }
    
    if (form.attach4.length!=0){
    var blob4 = form.attach4;    
    var file4 = folder.createFile(blob4);
    file4.setDescription("Uploaded by " + Session.getActiveUser().getEmail());
    arrayURL.push([file4.getUrl(),form.attach4.name]);
    }
    
    if (form.attach5.length!=0){
    var blob5 = form.attach5;    
    var file5 = folder.createFile(blob5);
    file5.setDescription("Uploaded by " + Session.getActiveUser().getEmail());
    arrayURL.push([file5.getUrl(),form.attach5.name]);
    }

    var obj={conf:1,URLs:arrayURL};
     
     
    /* Return the download URL of the file once its on Google Drive */
    return obj;
    
  } catch (error) {
    var obj={conf:0,error:error.toString()};
    /* If there's an error, show the error message */
    return obj;
  }
  
}
 