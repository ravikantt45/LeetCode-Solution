class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, (_, index) => index);
        this.rank = Array(size).fill(1);
        this.components = size;
    }
    
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX] += 1;
            }
            this.components -= 1;
            return true;
        }
        return false;
    }
}

var maxNumEdgesToRemove = function(n, edges) {
    const ufAlice = new UnionFind(n);
    const ufBob = new UnionFind(n);
    
    let removedEdges = 0;
    for (let [type, u, v] of edges) {
        if (type === 3) {
            const aliceConnected = ufAlice.union(u - 1, v - 1);
            const bobConnected = ufBob.union(u - 1, v - 1);
            if (!aliceConnected && !bobConnected) {
                removedEdges++;
            }
        }
    }
    for (let [type, u, v] of edges) {
        if (type === 1) {
            if (!ufAlice.union(u - 1, v - 1)) {
                removedEdges++;
            }
        }
    }
    for (let [type, u, v] of edges) {
        if (type === 2) {
            if (!ufBob.union(u - 1, v - 1)) {
                removedEdges++;
            }
        }
    }
    
   
    if (ufAlice.components !== 1 || ufBob.components !== 1) {
        return -1;
    }
    
    return removedEdges;
};

