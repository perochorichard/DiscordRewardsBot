const FileIOUtil = require("./FileIOUtil");
const Reward = require("./Reward");

class RewardCollection {
    constructor() {
        this.rewards = [];
    }

    addReward(reward) {
        this.rewards.push(reward);
    }

    removeReward(reward) {
        for (let i = 0; i < this.rewards.length; i++) {
            let temp = this.rewards[i];
            if (temp.card === reward.card) {
                this.rewards.splice(i, 1); // replaces 1 element at index i with nothing (delete)
                return;
            }
        }
    }

    saveToFile() {
        FileIOUtil.fileWrite(FileIOUtil.REWARDS_FILE_PATH, this.toString());
    }

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