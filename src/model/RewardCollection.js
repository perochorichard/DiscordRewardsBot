const FileIOUtil = require("./FileIOUtil");
const Reward = require("./Reward");

/**
 * encapsulates rewards objects in a collection to iterate through
 */
class RewardCollection {
    constructor() {
        this.rewards = []; // array of rewards
    }

    /**
     * adds a reward object to the array of rewards
     */
    addReward(reward) {
        this.rewards.push(reward);
    }

    /**
     * removes a given reward from the array.
     * Does nothing if given reward does not exist in array.
     */
    removeReward(reward) {
        for (let i = 0; i < this.rewards.length; i++) {
            let temp = this.rewards[i];
            if (temp.card === reward.card) {
                this.rewards.splice(i, 1); // replaces 1 element at index i with nothing (delete)
                return;
            }
        }
    }

    /**
     * saves this collection of rewards to a file
     */
    saveToFile() {
        FileIOUtil.fileWrite(FileIOUtil.REWARDS_FILE_PATH, this.toString());
    }

    /**
     * parses this collection of rewards to string format
     */
    toString() {
        let string = '';
        for (let i = 0; i < this.rewards.length; i++) {
            let reward = this.rewards[i];
            let line = reward.card + " : " + reward.points;
            string += line + "\n";
        }
        return string;
    }
}

/**
 * parses rewards from file to the RewardCollection object
 */
exports.getRewards = () => {
    let data = FileIOUtil.fileRead(FileIOUtil.REWARDS_FILE_PATH).split("\n");
    let rewardCollection = new RewardCollection();
    for (let i = 0; i < data.length; i++) {
        let info = data[i].split(" : ");
        if (info.length === 2) {
            let cardNumber = info[0];
            let points = Number(info[1]);
            rewardCollection.addReward(new Reward(cardNumber, points));
        }
    }
    return rewardCollection;
}