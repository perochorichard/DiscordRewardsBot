/**
 * processes a command from a recieved message.
 * calls the command's run method
 */
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

/**
 * returns the arguments given after the command
 */
exports.getArguments = (recievedMessage) => {
    return recievedMessage.content.substr(1).split(" ").slice(1);
}

/**
 * retrieves command module.
 * returns null if command does not exist.
 */
getCommand = (primaryCommand) => {
    try {
        let command = require("./commands/" + primaryCommand);
        return command;
    } catch (err) {
        console.log(err);
        return null;
    }
}