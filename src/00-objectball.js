function gameObject() {
    const teamData = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: [
                'Black',
                'White',
            ],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'JAson Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: [
                'Turquoise',
                'Purple'
            ],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
                'Brandon Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    }
    return teamData;
}

function homeTeamName() {
    return gameObject()['home']['teamName']
}

function getPlayerStat(list, playerName, stat) {

    function searchObject(list) {
        if (typeof list !== 'object' || Array.isArray(list)) {
        return null;
        }
        
        for (const key in list) {
        if (key === playerName) {
            return list[key][stat] !== undefined ? list[key][stat] : `No ${stat} value for ${playerName}.`;
        } else {
            const result = searchObject(list[key]);
            if (result !== null) {
            return result;
            }
        }
        }
        return null;
    }

    const playerStat = searchObject(list);
    return playerStat !== null ? playerStat : `No record for ${playerName} in list.`;
}

function getTeamAttribute(list, teamName, attribute) {

function searchObject(list) {
    if (typeof list !== 'object' || Array.isArray(list)) {
    return null;
    }
    
    for (const key in list) {
        if (list[key] !== undefined && list[key].teamName === teamName) {
        return list[key][attribute] !== undefined ? list[key][attribute] : `No ${attribute} value for ${teamName}.`;
        } else {
        const result = searchObject(list[key]);
        if (result !== null) {
            return result;
        }
        }
    }
    return null;
}

const teamAttribute = searchObject(list);
return teamAttribute !== null ? teamAttribute : `No record for ${teamName} in list.`;
}

const teamColors = teamName => getTeamAttribute(gameObject(), teamName, 'colors');

const numPointsScored = playerName => getPlayerStat(gameObject(), playerName, 'points');

const shoeSize = playerName => getPlayerStat(gameObject(), playerName, 'shoe');

function teamNames(list) {
    const teamNames = [];
    for (const team in list) {
        teamNames.push(list[team].teamName);
    }
    return teamNames;
}

function playerNumbers(teamNameArg) {
    const roster = gameObject();
    const teamNumbers = [];
    for (const team in roster) {
      if (roster[team].teamName === teamNameArg) {
        for (const player in roster[team].players) {
          teamNumbers.push(roster[team].players[player].number);
        }
      }
    }
    return teamNumbers;
  }

  function playerStats(playerName) {
    const list = gameObject();
    for (const team in list) {
      if (playerName in list[team].players) {
        return list[team].players[playerName];
      }
    }
  }

  function bigShoeRebounds() {
    let whopper = 0;
    let king;
    const list = gameObject();
    
    for (const team in list) {
      for (const player in list[team].players) {
        if (getPlayerStat(list, player, 'shoe') > whopper) {
          whopper = getPlayerStat(list, player, 'shoe');
          king = player;
        }
      }
    }
    return getPlayerStat(list, king, 'rebounds')
  }

  function mostPointsScored() {
    let motherLode = 0;
    let king;
    const list = gameObject();
    
    for (const team in list) {
      for (const player in list[team].players) {
        if (getPlayerStat(list, player, 'points') > motherLode) {
          motherLode = getPlayerStat(list, player, 'points');
          king = player;
        }
      }
    }
    return king;
  }

  function winningTeam() {
    let compare = [];
    let winner;
    const list = gameObject();
    
    for (const team in list) {
      let subTotal = 0
      for (const player in list[team].players) {
        subTotal = subTotal + getPlayerStat(list, player, 'points');
      }
    compare.push([list[team].teamname, subTotal])
    }
    if (compare[0][1] = compare[1][1]) {
      winner = 'tie';
    } else if (compare[0][1] > compare[1][1]) {
      winner = compare[0][0];
    } else {
      winner = compare[1][0];
    }
    return winner;
  }

  function playerWithLongestName() {
    let mouthfull = 0;
    let king;
    const list = gameObject();
    
    for (const team in list) {
      for (const player in list[team].players) {
        if (player.length > mouthfull) {
            mouthfull = player.length;
          king = player;
        }
      }
    }
    return king;
  }

function doesLongNameStealATon() {
  let motherLode = 0;
  let king;
  const list = gameObject();

  for (const team in list) {
    for (const player in list[team].players) {
      if (player === playerWithLongestName() && getPlayerStat(list, player, 'steals') >= motherLode) {
        motherLode = getPlayerStat(list, player, 'steals');
        king = player;
      } else if (getPlayerStat(list, player, 'steals') > motherLode) {
        motherLode = getPlayerStat(list, player, 'steals');
        king = player;
      }
    }
  }
  return king === playerWithLongestName();
}
