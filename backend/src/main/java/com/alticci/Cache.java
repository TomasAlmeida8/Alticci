package com.alticci;

import java.util.HashMap;
import java.util.Map;

public class Cache<K, V> {
    private final int maxSize;
    private final Map<K, V> cache;

    public Cache(int maxSize) {
        this.maxSize = maxSize;
        this.cache = new HashMap<>(maxSize);
    }

    public V get(K key) {
        return cache.get(key);
    }

    public void put(K key, V value) {
        if (cache.size() >= maxSize) {
            // Implement LRU eviction logic here
            // For simplicity, you can remove the first entry.
            K firstKey = cache.keySet().iterator().next();
            cache.remove(firstKey);
        }
        cache.put(key, value);
    }
}
