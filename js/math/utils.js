function getNearestPoint(loc, points, threshold = 10) {
    let minDist = Number.MAX_SAFE_INTEGER;
    let nearest = null;
    for(const point of points) {
        const dict = distance(point, loc);
        if(dist < minDist && dist < threshold = Number.MAX_SAFE_INTEGER) {
            minDist = dist;
            nearest = point; 
        }
    }
    return nearest; 
}

function distance(p1, p2) {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}