import { betterRandom } from "../better-random.js";

describe("Basic functionality", () => {
    test("Is a function", () => {
        expect(betterRandom).toBeInstanceOf(Function);
    });
    test("Returns an object", () => {
        expect(betterRandom()).toBeInstanceOf(Object);
    });
    test("Has a nextInt function", () => {
        expect(betterRandom().nextInt).toBeInstanceOf(Function);
    });
    test("Has a nextFloat function", () => {
        expect(betterRandom().nextFloat).toBeInstanceOf(Function);
    });
    test("Has a range function", () => {
        expect(betterRandom().range).toBeInstanceOf(Function);
    });
});

describe("Using nextInt without a seed", () => {
    test("Gets random integers", () => {
        const rand = betterRandom(),
              qty = 100,
              arr = Array(qty).fill().map(_ => rand.nextInt()),
              every = arr.every(i => i === Math.floor(i));
        expect(every).toBe(true);
    });
    test("Gets unique random integers", () => {
        const rand = betterRandom(),
              qty = 100,
              set = new Set(Array(qty).fill().map(_ => rand.nextInt()));
        expect(set.size).toBe(qty);
    });
});

describe("Using nextFloat without a seed", () => {
    test("Gets random floats", () => {
        const rand = betterRandom(),
              qty = 100,
              arr = Array(qty).fill().map(_ => rand.nextFloat()),
              every = arr.every(i => i !== Math.floor(i));
        expect(every).toBe(true);
    });
    test("Gets unique random floats", () => {
        const rand = betterRandom(),
              qty = 100,
              set = new Set(Array(qty).fill().map(_ => rand.nextFloat()));
        expect(set.size).toBe(qty);
    });
    test("Gets floats between zero (inclusive) and one (exclusive)", () => {
        const rand = betterRandom(),
              qty = 100,
              arr = Array(qty).fill().map(_ => rand.nextFloat()),
              every = arr.every(i => i >= 0 && i < 1);
        expect(every).toBe(true);
    });
});

describe("Using range with nextInt without a seed", () => {
    test("Gets random integers within a range", () => {
        const rand = betterRandom(),
              min = 1,
              max = 6,
              qty = 100;
        rand.range(min, max);
        const arr = Array(qty).fill().map(_ => rand.nextInt()),
              every = arr.every(i => i >= min && i <= max);
        expect(every).toBe(true);
    });
});

describe("Using range with nextFloat without a seed", () => {
    test("Gets random floats within a range", () => {
        const rand = betterRandom(),
              min = 1,
              max = 6,
              qty = 100;
        rand.range(min, max);
        const arr = Array(qty).fill().map(_ => rand.nextFloat()),
              every = arr.every(i => i >= min && i < max);
        expect(every).toBe(true);
    });
});

describe("Using nextInt with a seed", () => {
    test("Get same random integers when using same seed", () => {
        const seed = Math.random(),
              rand = betterRandom(seed),
              qty = 100,
              arr = Array(qty).fill().map(_ => rand.nextInt()),
              rand2 = betterRandom(seed),
              arr2 = Array(qty).fill().map(_ => rand2.nextInt());
        expect(arr).toEqual(arr2);
    });
});

describe("Using nextFloat with a seed", () => {
    test("Get same random floats when using same seed", () => {
        const seed = Math.random(),
              rand = betterRandom(seed),
              qty = 100,
              arr = Array(qty).fill().map(_ => rand.nextFloat()),
              rand2 = betterRandom(seed),
              arr2 = Array(qty).fill().map(_ => rand2.nextFloat());
        expect(arr).toEqual(arr2);
    });
});

describe("Using range with nextInt with a seed", () => {
    test("Gets same random integers within a range when using same seed", () => {
        const seed = Math.random(),
              rand = betterRandom(seed),
              min = 1,
              max = 6,
              qty = 100;
        rand.range(min, max);
        const arr = Array(qty).fill().map(_ => rand.nextInt()),
              rand2 = betterRandom(seed);
        rand2.range(min, max);
        const arr2 = Array(qty).fill().map(_ => rand2.nextInt());
        expect(arr).toEqual(arr2);
    });
});

describe("Using range with nextFloat with a seed", () => {
    test("Gets same random floats within a range when using same seed", () => {
        const seed = Math.random(),
              rand = betterRandom(seed),
              min = 1,
              max = 6,
              qty = 100;
        rand.range(min, max);
        const arr = Array(qty).fill().map(_ => rand.nextFloat()),
              rand2 = betterRandom(seed);
        rand2.range(min, max);
        const arr2 = Array(qty).fill().map(_ => rand2.nextFloat());
        expect(arr).toEqual(arr2);
    });
});
