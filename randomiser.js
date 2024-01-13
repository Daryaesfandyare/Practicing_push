const randomQuotes = (sign) => {
    if (sign === 'Aries' || sign === 'aries'){
      return 'Don\'t wish for it, work for it.';
    } else if (sign === 'Taurus' || sign === 'taurus'){
      return 'Every saint has a past and every sinner has a future. Don\'t be so hard on yourself.';
    } else if (sign === 'Gemini' || sign === 'gemini'){
      return 'Do not take life too seriously. You will never get out of it alive.';
    } else if (sign === 'Cancer' || sign === 'cancer'){
      return 'Never tell your problems to anyone; 20% don\'t care and the other 80% are glad you have them.'
    } else if (sign === 'Leo' || sign === 'leo'){
      return 'By failing to prepare, you are preparing to fail. Get up and do something, it\'s still not too late.'
    } else if (sign === 'Virgo' || sign === 'virgo'){
      return 'It\'s better to regret the things you\'ve done than to regret the things you haven\'t done.'
    } else if (sign === 'Libra' || sign === 'libra'){
      return 'If you change the way you look at things, the things you look at change. Stop with the high expectations, you\'re only gonna end up disappointed.'
    } else if (sign === 'Scorpio' || sign === 'scorpio'){
      return 'Don\'t make a permanent decision for your temporary emotion.'
    } else if (sign === 'Sagittarius' || sign === 'sagittarius'){
      return 'You must be the person you wish to see in the world. Stop complaining about others and start focusing on yourself.'
    } else if (sign === 'Capricorn' || sign === 'capricorn'){
      return 'What is coming is better than what is gone. Be patient.'
    } else if (sign === 'Aquarius' || sign === 'aquarius'){
      return 'If you\'re the smartest person in the room, you\'re in the wrong room.'
    } else if (sign === 'Pisces' || sign === 'pisces'){
      return 'Don\'t set yourself on fire to keep others warm, you\'ve done more than enough.'
    } 
    }
    
    console.log(randomQuotes('cancer'))
    