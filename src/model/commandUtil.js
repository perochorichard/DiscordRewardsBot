exports.processCommand = (recievedMessage) => {
    const fullCommand = recievedMessage.content.substr(1); // remove command prefix
    const splitCommand = fullCommand.split(" "); // split message into a collection
    const primaryCommand = splitCommand[0]; // word immediately after command prefix
    const arguments = splitCommand.slice(1); // all parameters after primary command
    
    let command = getCommand(primaryCommand);
    if (command === null) {
        recievedMessage.reply("cannot find command: " + primaryCommand);
        return;
    }
    command.run(recievedMessage);
}

exports.getArguments = (recievedMessage) => {
    return recievedMessage.content.substr(1).split(" ").slice(1);
}

getCommand = (primaryCommand) => {
    try {
        let command = require("./commands/" + primaryCommand);
        return command;
    } catch {
        return null;
    }
}