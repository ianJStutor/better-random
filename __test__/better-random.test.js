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
