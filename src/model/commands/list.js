const CommandUtil = require("../CommandUtil");

exports.run = (recievedMessage) => {
    let args = CommandUtil.getArguments(recievedMessage);
    if (args.length !== 1) {
        recievedMessage.reply("argument must be keys or rewards");
        return;
    }

    let response = '';
    let arg = args.pop();
    console.log(arg);
    if (arg === "keys") {
        const KeyCollection = require("../KeyCollection");
        let keyCollection = KeyCollection.getKeyCollection();
        if (keyCollection.keys.length < 1) {
            response = "There are no keys to be displayed!";
        } else {
            response = '```Here are your keys: \n';
            for (let i = 0; i < keyCollection.keys.length; i++) {
                let tempKey = keyCollection.keys[i];
                response += "amount: " + tempKey.targetPoints + "\n" +
                    "id: " + tempKey.id + "\n\n";
            }
            response += "```";
        }
    } else if (arg === "rewards") {
        const RewardCollection = require("../RewardCollection");
        let rewardCollection = RewardCollection.getRewards();
        if (rewardCollection.rewards.length < 1) {
            response = "there are no rewards in the database!";
        } else {
            response = "```rewards database\n";
            for (let i = 0; i < rewardCollection.rewards.length; i++) {
                let reward = rewardCollection.rewards[i];
                response += "card: " + reward.card + "-----points: " + reward.points + "\n";
            }
            response += "```";
        }
    }
    recievedMessage.reply(response);
}