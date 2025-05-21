import { describe, test, expect, beforeEach, afterEach } from 'bun:test';
import { MapCache } from '../map';
import { writeFile, unlink } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';

describe('MapCache', () => {
    let mapCache: MapCache;
    let tempMapPath: string;

    beforeEach(async () => {
        // Create a unique temporary file path
        tempMapPath = join(tmpdir(), `map_test_${Date.now()}.json`);
        mapCache = new MapCache(tempMapPath);
        // Wait for initial load
        await new Promise(resolve => setTimeout(resolve, 100));
    });

    afterEach(async () => {
        // Clean up test file
        try {
            await unlink(tempMapPath);
        } catch {
            // Ignore if file doesn't exist
        }
    });

    test('should initialize with empty map', () => {
        expect(mapCache.get('non-existent')).toBeUndefined();
    });

    test('should set and get values', () => {
        mapCache.set('test1', 123, 'hash1');
        const result1 = mapCache.get('test1');
        expect(result1?.noteId).toBe(123);
        expect(result1?.contentHash).toBe('hash1');

        mapCache.set('test2', 456, 'hash2');
        const result2 = mapCache.get('test2');
        expect(result2?.noteId).toBe(456);
        expect(result2?.contentHash).toBe('hash2');
    });

    test('should handle multiple sets and gets', () => {
        mapCache.set('test1', 123, 'hash1');
        mapCache.set('test2', 456, 'hash2');
        mapCache.set('test1', 789, 'hash3');

        const result1 = mapCache.get('test1');
        expect(result1?.noteId).toBe(789);
        expect(result1?.contentHash).toBe('hash3');

        const result2 = mapCache.get('test2');
        expect(result2?.noteId).toBe(456);
        expect(result2?.contentHash).toBe('hash2');
    });

    test('should persist changes to file', async () => {
        mapCache.set('test1', 123, 'hash1');
        mapCache.set('test2', 456, 'hash2');

        // Wait for async save
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Create new instance to test persistence
        const newMapCache = new MapCache(tempMapPath);
        await new Promise(resolve => setTimeout(resolve, 100));

        const result1 = newMapCache.get('test1');
        expect(result1?.noteId).toBe(123);
        expect(result1?.contentHash).toBe('hash1');

        const result2 = newMapCache.get('test2');
        expect(result2?.noteId).toBe(456);
        expect(result2?.contentHash).toBe('hash2');
    });

    test('should handle flush operation', async () => {
        mapCache.set('test1', 123, 'hash1');
        mapCache.set('test2', 456, 'hash2');

        await mapCache.flush();

        // Create new instance to test persistence
        const newMapCache = new MapCache(tempMapPath);
        await new Promise(resolve => setTimeout(resolve, 100));

        const result1 = newMapCache.get('test1');
        expect(result1?.noteId).toBe(123);
        expect(result1?.contentHash).toBe('hash1');

        const result2 = newMapCache.get('test2');
        expect(result2?.noteId).toBe(456);
        expect(result2?.contentHash).toBe('hash2');
    });
}); 