# Collaborative-Emails
Collaborate with your coworkers on writing an email and then send it directly from Google Docs

The goal is to be able to utilize real time Collaborative email methods to prepare and edit an email in Google Docs.
In an ideal world, anyone would love to be able to utilize everything that Gmail can do within Docs such as:
1. Assign the send to
2. Assign the CC
3. Assign the BCC
4. Assign the subject.
5. Attach documents
Right now, you create a google doc, you share it with your team to prepare and edit an email, and then cut and paste. Wouldn’t you really want to fully integrate collaborative editing within Gmail?

This script will draft, format and stylize your Google Document into an email body and send it directly through Google Docs to your intended recipient.

In order to use this addon, you will have to perform the following:
* Install the AddOn (if it does not do so automatically, click on Tools-> Script Editor and run the onInstall function)
* Append your mailchimp API key and server – http://kb.mailchimp.com/accounts/management/about-api-keys
* Switch back to your doc and use the Sidebar (if it does not show directly just click on Custom Scripts -> Show sidebar)


You can also just use the Document that we created by making a copy of it and start writing directly into it -> https://docs.google.com/document/d/1LHKLwn-P5WzN3NDLyBwKdBlOQ0KM4pXw2bilWe01jsA/edit?usp=drive_web
 
Notes:
* The script does not also add the signature
* Sends the email it through the Gmail of the account currently logged in
