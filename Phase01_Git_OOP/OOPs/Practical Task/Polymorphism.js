// CREATING NOTIFICATIONCHANNEL CLASS
class NotificationChannel {
    constructor(message) {
        this.message = message;
    }

    send(message) {
        console.log(`Message from main NotificationChannel class: ${message}`);

    }
}

// CREATING CONSOLECHANNEL CLASS
class ConsoleChannel extends NotificationChannel {
    send(message) {
        console.log(`Message from main ConsoleChannel class: ${message}`);

    }
}

// CREATING ENAILCHANNEL CLASS
class EmailChannel extends NotificationChannel {
    send(message) {
        console.log(`Message from main Emailchannel class: ${message}`);

    }
}

// CREATING SMSCHANNEL CLASS
class SMSChannel extends NotificationChannel {
    send(message) {
        console.log(`Message from main SMSChannel class: ${message}`);

    }
}

// CREATING OBJECT FOR EACH CLASS
const notificationChannelMessage = new NotificationChannel();
const consoleMessage = new ConsoleChannel();
const emailMessage = new EmailChannel();
const smsMessage = new SMSChannel();

// SEINDING MESSAGE FROM EACH OBJECT [JAVASCRIPT DETERMINES AT RUNTIME WHICH METHOD TO CALL BASES ON THE OBJECT'S TYPE]
notificationChannelMessage.send("Hello here is NotificationChannel")
consoleMessage.send("Hello here is ConsoleChannel")
emailMessage.send("Hello here is EmailChannel")
smsMessage.send("Hello here is SMSChannel")