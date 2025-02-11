const CommandUtil = require("../CommandUtil");
const KeyCollection = require("../KeyCollection");
const RewardCollection = require("../RewardCollection");
let rewardCollection = undefined;
let keyCollection = undefined;

exports.run = (recievedMessage) => {
    rewardCollection = RewardCollection.getRewards();
    keyCollection = KeyCollection.getKeyCollection();
    const args = CommandUtil.getArguments(recievedMessage);

    if (args.length !== 1) {
        recievedMessage.reply("Invalid number of arguments. TIP: type the key exactly as seen\n"
        + "example: !redeem E327-T45I-12IE-3RBR");
        return;
    }

    const id = args.pop();
    let key = keyCollection.getKey(id);
    if (key !== null) {
        let reward = redeem(key);
        rewardCollection.removeReward(reward);
        rewardCollection.saveToFile();
        keyCollection.removeKey(key);
        keyCollection.saveToFile();
        recievedMessage.reply(":gift: key successfully redeemed :gift:" + "\n"
        + "card: " + reward.card + "\n" + "points: " + reward.points);
    } else {
        recievedMessage.reply("The key you entered could not be redeemed.");
    }
}

/**
 * traverses rewards database and searches for the reward
 * with the closest points value to the target points of the given key.
 */
redeem = (key) => {
    let closestDifference = rewardCollection.rewards[0].points - key.targetPoints;
    let closestReward = rewardCollection.rewards[0];
    for (let i = 1; i < rewardCollection.rewards.length; i++) { // looks for the points value closest to the key's target points value.
        let reward = rewardCollection.rewards[i];
        let difference = reward.points - key.targetPoints;
        if (difference > 0 && difference < closestDifference) {
            closestDifference = difference;
            closestReward = reward;
        }
    }
    return closestReward;
}