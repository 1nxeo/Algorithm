function solution(cacheSize, cities) {
    let cache = new Map();
    let time = 0;

    if (cacheSize === 0) {
        return cities.length * 5; // 캐시 크기가 0일 경우 모든 도시를 캐시 미스로 처리하여 5초씩 걸림
    }

    cities.forEach(city => {
        city = city.toLowerCase();

        if (cache.has(city)) {
            cache.delete(city);
            cache.set(city, true);
            time += 1; // 캐시 히트 시간은 1초
        } else {
            if (cache.size >= cacheSize) {
                const leastRecentlyUsed = [...cache.keys()][0]; // LRU 캐시에서 가장 오래된 항목 추출
                cache.delete(leastRecentlyUsed);
            }
            cache.set(city, true);
            time += 5; // 캐시 미스 시간은 5초
        }
    });

    return time;
}