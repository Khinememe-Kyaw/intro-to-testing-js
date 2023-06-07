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

describe ('isFive', function(){
    it("should be a defined function", function(){
        expect(typeof isFive).toBe('function');
    });
    it("should be return true when input is Number 5",()=>{
        expect(isFive(5)).toBe(true);
    });
    it("should be return true when input is String 5", function(){
        expect(isFive("5")).toBe(true);
    });
    it("should return false when input is not string or number 5", function(){
        expect(isFive(10)).toBe(false);
        expect(isFive(0)).toBe(false);
        expect(isFive(-5)).toBe(false);
        expect(isFive(5.5)).toBe(false);
        expect(isFive(6)).toBe(false);
    })
});
describe ("isEven",function(){
    it("should be a defined function", function(){
        expect(typeof isEven).toBe('function');
    })
    it("should return true if even", function(){
        expect(isEven(2)).toBe(true );
    })
    it("should return true if negative even", function(){
        expect( isEven(-4)).toBe(true );
    })
    it("should return false if odd", function(){
        expect(isEven(3)).toBe(false );
    })
    it("should return false if string", function(){
        expect(isEven("banana")).toBe(false );
    })
    it("should return true if 8", function(){
        expect(isEven(8)).toBe(true );
    })
    it("should return false if infinity", function(){
        expect( isEven(Infinity)).toBe(false);
    })
    it("should return false if true", function(){
        expect(isEven(true)).toBe(false);
    })
    it("should return false if false", function(){
        expect(isEven(false)).toBe(false);
    })
    it("should return false if no argument", function(){
        expect(isEven()).toBe(false);
    })
})

describe("isVowel", function(){
    it("should be a defined function",function(){
        expect(typeof isVowel). toBe("function");
    })
    it("should return true if input is 'a'", function(){
        expect(isVowel("a")).toBe(true);
    })
    it("should return true if input is 'A'", function(){
        expect(isVowel("A")).toBe(true);
    })
    it("should return false if input is 'y'", function(){
        expect(isVowel("y")).toBe(false);
    })
    it("should return false if input is 4", function(){
        expect(isVowel(4)).toBe(false);
    })
    it("should return false if input is true", function(){
        expect(isVowel(true)).toBe(false);
    })
    it("should return false if input is false", function(){
        expect(isVowel(false)).toBe(false);
    })
    it("should return false if input is 'banana'", function(){
        expect(isVowel("banana")).toBe(false);
    })
    it("should return false if function has no argument", function(){
        expect(isVowel()).toBe(false);
    })
})
