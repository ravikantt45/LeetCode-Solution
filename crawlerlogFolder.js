function minOperations(logs) {
    let depth = 0;
    
    for (let log of logs) {
        if (log === "../") {
            if (depth > 0) {
                depth--;
            }
        } else if (log !== "./") {
            depth++;
        }
    }
    
    return depth;
}
