function saturdayFun(activity = 'roller-skate') {
    return `On Saturdays, I like to ${activity}!`;
  }

  function mondayWork(task = 'go to the office') {
    return `On Mondays, I need to ${task}.`;
  }

  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
