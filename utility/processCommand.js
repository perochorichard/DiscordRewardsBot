exports.processCommand = (recievedMessage) => {
    const fullCommand = recievedMessage.content.substr(1); // remove command prefix
    const splitCommand = fullCommand.split(" "); // split message into a collection
    const primaryCommand = splitCommand[0]; // word immediately after command prefix
    const arguments = splitCommand.slice(1); // all parameters after primary command
    
    require("../commands/" + primaryCommand + ".js").run(recievedMessage); // TODO: change to global path instead of relative path
}