import java.util.*;

class Program {

  public String tournamentWinner(
      ArrayList<ArrayList<String>> competitions, ArrayList<Integer> results) {
    // Write your code here.
    // Write your code here.
	String currentBestTeam ="";
	HashMap<String,Integer> scores = new HashMap<String,Integer>();
		scores.put(currentBestTeam,0);
	for( int i=0; i< results.size(); i++){
		ArrayList<String> competition =competitions.get(i);
		int result = results.get(i);
		String homeTeam = competition.get(0);
		String awayTeam = competition.get(1);
		
		String winningTeam = (result ==1)? homeTeam: awayTeam;
		
		updateScores(winningTeam, 3, scores);
		
		if(scores.get(winningTeam)> scores.get(currentBestTeam)){
			currentBestTeam = winningTeam;
		}
		
	}
  return currentBestTeam;
}

public void updateScores(String team, int points, HashMap<String,Integer> scores){
	if(!scores.containsKey(team)){
		scores.put(team,0);
	}
	scores.put(team, scores.get(team)+points);
}
}