const xapi = require('xapi');

const bridgeAddress = "bjn.vc";
const signalingProtocol = "sip";
const panelId = "bjn_dial";

var meeting;

class Meeting {
    constructor(meetingId, passcode) {
        this.meetingId = meetingId;
        this.passcode = passcode;
    }
    
    get dialString() {
        var dialString = signalingProtocol + ":";
        dialString += this.meetingId;
        if (this.passcode) {
            dialString += "." + this.passcode;
        }
        dialString += "@" + bridgeAddress;
        return dialString;
    }
}

function init() {
    meeting = new Meeting();
    handlePanelButtonPress();
    handleMeetingIdEntry();
    handlePasscodeEntry();
}

function handlePanelButtonPress() {
    meeting = new Meeting();
    xapi.event.on('UserInterface Extensions Panel Clicked', (event) => {
        if (event.PanelId === panelId) {
            xapi.command("UserInterface Message TextInput Display", {
                FeedbackId: "bjn_dial_meetingId",
                Title: "Join BlueJeans Meeting",
                Text: "Meeting ID:",
                Duration: 60,
                InputType: "Numeric",
                SubmitText: "Next"
            });
        }
    });
}

function handleMeetingIdEntry() {
    xapi.event.on('UserInterface Message TextInput Response', (event) => {
        if (event.FeedbackId === "bjn_dial_meetingId") {
            meeting.meetingId = event.Text;
            
            xapi.command("UserInterface Message TextInput Display", {
                FeedbackId: "bjn_dial_passcode",
                Title: "Join BlueJeans Meeting",
                Text: "Passcode (if none, press Join):",
                Duration: 60,
                InputType: "PIN",
                SubmitText: "Join"
            });
        }
    });
}

function handlePasscodeEntry() {
    xapi.event.on('UserInterface Message TextInput Response', (event) => {
        if (event.FeedbackId === "bjn_dial_passcode") {
            meeting.Passcode = event.Text || null;
            
            dial(meeting);
        }
    });
}

function dial(meeting) {
    return xapi.command("Dial", { Number: meeting.dialString });
}

init();
