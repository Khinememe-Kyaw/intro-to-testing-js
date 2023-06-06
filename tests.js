// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function(){
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, Jane!' when called", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return 'Hello, Alex!'  when called", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return 'Hello, Pat!'  when called", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return 'Hello, World!'  when called", function() {
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when called", function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when called", function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when called with null", () => {
        expect(sayHello(null)).toBe("Hello, World!");
    });

    it("should return 'Hello, World!' when called with an empty string", () => {
        expect(sayHello("")).toBe("Hello, World!");
    });

    it("should return 'Hello, World!' when called with a number (2.3)", () => {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });

    it("should return 'Hello, World!' when called with a number inside a string ('5')", () => {
        expect(sayHello("5")).toBe("Hello, World!");
    });

    it("should return 'Hello, World!' when called with an array", () => {
        expect(sayHello([1, 2, 3])).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when called with an object", () => {
        expect(sayHello({ name: "John" })).toBe("Hello, World!");
    });

    it("should return 'Hello, World!' when called with a function", () => {
        expect(sayHello(() => {})).toBe("Hello, World!");
    });
});




