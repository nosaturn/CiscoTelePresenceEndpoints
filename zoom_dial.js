// Developed by Brianne Haley (nosaturn@gmail.com) on my own time and with my own devices and accounts.
// You are welcome to use this for free and without warranty.
// Version 1.6
// 
// dialog time out is controlled by "Duration"

const xapi = require('xapi');

const bridgeAddress = "zoomcrc.com";
const signalingProtocol = "sip";
const panelId = "Zoom_dial";

var meeting;

class Meeting {
    constructor(meetingId, password) {
        this.meetingId = meetingId;
        this.password = password;
    }
    
    get dialString() {
        var dialString = signalingProtocol + ":";
        dialString += this.meetingId;
        if (this.password) {
            dialString += "." + this.password;
        }
        dialString += "@" + bridgeAddress;
        return dialString;
    }
}

function init() {
    meeting = new Meeting();
    handlePanelButtonPress();
    handleMeetingIdEntry();
    handlepasswordEntry();
}

function handlePanelButtonPress() {
    meeting = new Meeting();
    xapi.event.on('UserInterface Extensions Panel Clicked', (event) => {
        if (event.PanelId === panelId) {
            xapi.command("UserInterface Message TextInput Display", {
                FeedbackId: "Zoom_dial_meetingId",
                InputType: "Numeric",
                Title: "Join Zoom Meeting",
                Text: "Please enter the Zoom Meeting ID:",
                Placeholder:"Meeting ID",
                SubmitText: "Next",
                Duration: 90,
            });
        }
    });
}

function handleMeetingIdEntry() {
    xapi.event.on('UserInterface Message TextInput Response', (event) => {
        if (event.FeedbackId === "Zoom_dial_meetingId") {
            meeting.meetingId = event.Text;
            
            xapi.command("UserInterface Message TextInput Display", {
                FeedbackId: "Zoom_dial_password",
                InputType: "Password",
                Title: "Join Zoom Meeting",
                Text: "Please enter the Password (or press Join):",
                Placeholder:"Password",
                SubmitText: "Join",
                Duration: 60,
            });
        }
    });
}

function handlepasswordEntry() {
    xapi.event.on('UserInterface Message TextInput Response', (event) => {
        if (event.FeedbackId === "Zoom_dial_password") {
            meeting.password = event.Text || null;
            
            dial(meeting);
        }
    });
}

function dial(meeting) {
    return xapi.command("Dial", { Number: meeting.dialString });
}

init();
