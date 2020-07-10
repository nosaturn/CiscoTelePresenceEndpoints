# Cisco TelePresence Endpoints Join button for Zoom or BlueJeans; 
If you would like an Activity Button similer toeht Join Webex button, but for other meeting services, this is a good starting point.
I have used these in production but your results may vary. You are welcome to use them. There is a time out on the dialogs, which you can adjust by changing the Duration value.  

 NEW
  Zoom_Dial.js and Zoom_dialbutton.xml is an updated version of the BlueJeans button, but works for Zoom instead. It will ask for the Meeting Number  and the password, then from the dialstring based on https://support.zoom.us/hc/en-us/articles/202405539-H-323-SIP-Room-Connector-Dial-Strings. 
 
 ________________________________________________________
 bjn_dial.js and dialbutton.xml work together to put a BlueJeans button in the "Out of Call" panel. Press the button and you will be promted to enter the BlueJeans meeting ID to join the call. You will also be prompted for an optional passcode in case you are the moderator.
  
 customersatisfaction.js is a basic survey for the end of the call. It is incoomplete and I'm not using it at the moment
 customersatisfaction_with_input.js is a better survey that will ask for a problem descrition on bad calls and let the caller enter an email address.
  customersatisfaction_feedback_destination.js will hopefully pust the feedback entries as a JSON file to a server


I have borrowed ideas from:
  Cisco Dev Net 
    (https://github.com/CiscoDevNet/roomdevices-macros-samples  -- One Button to Dial and Customer Satisfaction) 
    
    
    Next Steps, an in-call panel for the Zoom DTMF menu!
