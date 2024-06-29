
var getAncestors = function(n, edges) {
  
    const graph = Array.from({ length: n }, () => []);
    const ancestors = Array.from({ length: n }, () => new Set());

    for (const [from, to] of edges) {
        graph[from].push(to);
    }

 
    const dfs = (node, start) => {
        for (const neighbor of graph[node]) {
            if (!ancestors[neighbor].has(start)) {
                ancestors[neighbor].add(start);
                dfs(neighbor, start);
            }
        }
    };

    for (let i = 0; i < n; i++) {
        dfs(i, i);
    }

   
    return ancestors.map(ancestorSet => Array.from(ancestorSet).sort((a, b) => a - b));
};


const n1 = 8;
const edges1 = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]];
console.log(getAncestors(n1, edges1)); 

const n2 = 5;
const edges2 = [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]];
console.log(getAncestors(n2, edges2)); 
