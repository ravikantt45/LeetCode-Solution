function maximumImportance(n, roads) {
   
    const connectionCount = Array(n).fill(0);
    roads.forEach(road => {
        connectionCount[road[0]]++;
        connectionCount[road[1]]++;
    });

  
    const sortedCities = [...Array(n).keys()].sort((a, b) => connectionCount[b] - connectionCount[a]);

   
    const cityValues = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        cityValues[sortedCities[i]] = n - i;
    }

    let totalImportance = 0;
    roads.forEach(road => {
        totalImportance += cityValues[road[0]] + cityValues[road[1]];
    });

    return totalImportance;
}
