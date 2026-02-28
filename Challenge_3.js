
let random_math = Math.round(Math.random() * 100);
console.log("Random number generated: " + random_math);
const MAX_ATTEMPTS = 5;

for(let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    if(random_math < 40) {
        console.log("Attempt " + attempt + " ❌ FAILED (Timeout/Error)");
    } else if(random_math >= 40) {
        console.log("Attempt " + attempt + " ✅ SUCCESS (Response 200 OK) API call PASSED after " + attempt + " attempt(s).");
        break;
    }
}