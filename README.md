# Cisco TelePresence Endpoints; easy dial button and post call survey
I'm pulling together code I've seen to try and make a simplified Cisco 
endpoint experience and get Customer Satisfaction results, then push 
the results someplace so they can be analized. 

I have borrowed samples from:
  Cisco Dev Net 
    (https://github.com/CiscoDevNet/roomdevices-macros-samples  -- One Button to Dial and Customer Satisfaction)
  
  ObjectIsAdvantag
    (https://github.com/ObjectIsAdvantag/xapi-samples  -- the macros section) 
    (but also look at https://github.com/ObjectIsAdvantag/xapi-samples/tree/master/jsxapi/httpfeedback)
    
 Someday I'll learn to properly attribute.
  
 bjn_dial.js and dialbutton.xml work together to put a BlueJeans button in the "Out of Call" panel. Press the button and you will be promted to enter the BlueJeans meeting ID to join the call. You will also be prompted for an optional passcode in case you are the moderator.
 
 Zoom_Dial.js and Zoom_dialbutton.xml is an updated version of the BlueJeans button, but works for Zoom instead. It will ask for the Meeting Number  and the password, then form the dialstring based on https://support.zoom.us/hc/en-us/articles/202405539-H-323-SIP-Room-Connector-Dial-Strings. 
 
 
 
 
 customersatisfaction.js is a basic survey for the end of the call. I'm not using it at the moment
 
 customersatisfaction_with_input.js is a better survey that will ask for a problem descrition on bad calls and let the caller enter an email address.
 
 customersatisfaction_feedback_destination.js will hopefully pust the feedback entries as a JSON file to a server
