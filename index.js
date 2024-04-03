function doesLongNameStealATon(steals, lengths) {
    let longestNameLength = Math.max(...Object.values(lengths));
    let longestNamePlayers = Object.keys(lengths).filter(player => lengths[player] === longestNameLength);

    let maxSteals = Math.max(...Object.values(steals));
    let maxStealPlayers = Object.keys(steals).filter(player => steals[player] === maxSteals);

    return longestNamePlayers.every(player => maxStealPlayers.includes(player));
}

let steals = {"Player1": 10, "Player2": 8, "Player3": 12};
let lengths = {"Player1": 7, "Player2": 8, "Player3": 6};

console.log(doesLongNameStealATon(steals, lengths));
