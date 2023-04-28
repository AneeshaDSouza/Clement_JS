//o(n) time O(k) space where n is no of competitions and k no of teams

function tournamentWinner(competitions, results) {
    // Write your code here.
      let currentBestTeam ='';
      const scores = {[currentBestTeam]:0};
      for( let i=0; i< results.length; i++){
          const [homeTeam, awayTeam ] =competitions[i];
          const winningTeam = (results[i]===1)? homeTeam: awayTeam;
          
          updateScores(winningTeam, 3, scores);
          
          if(scores[winningTeam]> scores[currentBestTeam]){
              currentBestTeam = winningTeam;
          }
          
      }
    return currentBestTeam;
  }
  
  function updateScores(team, points, scores){
      if(!(team in scores)) scores[team] =0;
      
      scores[team] += points;
  }
  
  // Do not edit the line below.
  exports.tournamentWinner = tournamentWinner;