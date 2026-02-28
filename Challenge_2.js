
let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
let passCount = 0;
let failCount = 0;
let skipCount = 0;
for (let i = 0; i < testResults.length; i++) {
    let result = testResults[i];  
    if (result === "pass") {
        passCount = passCount + 1;
    } else if (result === "fail") {
        failCount = failCount + 1;
    } else if (result === "skip") {
        skipCount = skipCount + 1;
    }
}
let passRate = (passCount / testResults.length) * 100;

console.log("Total Tests : " + testResults.length + " Passed: " + passCount + " Failed: " + failCount + " Skipped: " + skipCount + " Pass Rate: " + passRate + " VERDICT: Minor failures. Review before release.")