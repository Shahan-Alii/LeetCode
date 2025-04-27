var countCoveredBuildings = function (n, buildings) {
    const rowMap = new Map();
    const colMap = new Map();
    
    for (const [x, y] of buildings) {
        if (!rowMap.has(x)) rowMap.set(x, []);
        if (!colMap.has(y)) colMap.set(y, []);
        rowMap.get(x).push(y);
        colMap.get(y).push(x);
    }
    
    let count = 0;
    
    for (const [x, y] of buildings) {
        const rows = colMap.get(y);
        const cols = rowMap.get(x);

        const hasUp = rows.some(r => r < x);
        const hasDown = rows.some(r => r > x);
        const hasLeft = cols.some(c => c < y);
        const hasRight = cols.some(c => c > y);

        if (hasUp && hasDown && hasLeft && hasRight) {
            count++;
        }
    }
    
    return count;
};
