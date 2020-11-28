static List<int> compareTriplets(List<int> a, List<int> b) {
    List<int> compareScores = new List<int>() {
        0, 0
    };
    for(int i=0; i<a.Count; i++) {
        if(a[i] > b[i]) {
            compareScores[0]++;
        }
        else if(a[i] < b[i]) {
            compareScores[1]++;
        }
    }
    return compareScores;        
}