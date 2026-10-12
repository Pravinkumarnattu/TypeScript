function printStatus(id) {
    // 2. Type Narrowing (Checking the type before using specific methods)
    if (typeof id === "string") {
        // TypeScript knows 'id' is a string here
        console.log(`User ID (String): ${id.toUpperCase()}`);
    }
    else if (typeof id === "number") {
        // TypeScript knows 'id' is a number here
        console.log(`User ID (Number): ${id.toFixed(0)}`);
    }
}
// ✅ Valid usages
printStatus("usr_99a8");
printStatus(404);
function orderShirt(size) {
    console.log(`Ordering a ${size} shirt.`);
}
// ✅ Valid usages
orderShirt("small");
orderShirt("large");
export {};
// ❌ Compile-time error: "extra-large" is not part of Size
//orderShirt("extra-large"); // Argument of type '"extra-large"' is not assignable to parameter of type 'Size'.
