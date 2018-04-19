// ===============================================================================
// DATA
// ===============================================================================

var FriendsData = function () {
    this.friendsArray = [{
            name: "Barack Obama",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/440px-President_Barack_Obama.jpg",
            scores: [5, 4, 4, 1, 3, 2, 2, 3, 4, 5]
        },
        {
            name: "Hillary Clinton",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Hillary_Clinton_official_Secretary_of_State_portrait_crop.jpg/1920px-Hillary_Clinton_official_Secretary_of_State_portrait_crop.jpg",
            scores: [3, 1, 2, 4, 5, 5, 2, 5, 4, 2]
        },
        {
            name: "Dalai Lama",
            photo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Dalailama1_20121014_4639.jpg",
            scores: [1, 1, 4, 1, 5, 4, 4, 3, 2, 5]
        },
        {
            name: "Bill Gates",
            photo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Bill_Gates_June_2015.jpg",
            scores: [1, 1, 4, 1, 3, 1, 2, 2, 5, 2]
        },
        {
            name: "Warren Buffett",
            photo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit.jpg",
            scores: [4, 3, 4, 4, 5, 5, 2, 5, 4, 3]
        }
    ];

    this.findWith = function (newFriend) {
        var found = {};

        function diffWith(myScores, scores) {
            console.log("Passed Scores: ")
            console.log(scores);
            var diffs = [];
            for (let i = 0; i < scores.length; i++) {
                diffs.push(Math.abs(myScores[i] - parseInt(scores[i])));
            };
            console.log(diffs);
            return diffs;
        }

        this.friendsArray.forEach(function (each) {
            var totalDiff = diffWith(each.scores, newFriend.scores).reduce((x, e) => x + e, 0);
            console.log("TotalDiff: " + totalDiff);
            console.log(each.name);
            if (!found.diff || totalDiff < found.diff) {
                found.friend = each;
                found.diff = totalDiff;
            }
        });
        return found;
    }

    this.add = function (newFriend) {
        newFriend.scores = newFriend.scores.map(e => parseInt(e));
        this.friendsArray.push(newFriend);
    }
};

module.exports = FriendsData;