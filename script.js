
document.getElementById("calculateButton").addEventListener("click", function () {
    const x1 = parseFloat(document.getElementById("x1").value);
    const y1 = parseFloat(document.getElementById("y1").value);
    const x2 = parseFloat(document.getElementById("x2").value);
    const y2 = parseFloat(document.getElementById("y2").value);

    // Calculate the equation of the straight line
    let equation = "";
    if (x1 === x2) {
        equation = `x = ${x1}`;
    } else if (y1 === y2) {
        equation = `y = ${y1}`;
    } else {
        const xConst = y1 - y2;
        const yConst = x2 - x1;
        const c = y1 * (x2 - x1) - x1 * (y2 - y1);
        if (xConst === 0) {
            equation = `${yConst}y = ${c}`;
        } else if (yConst === 0) {
            equation = `${xConst}x = ${c}`;
        } else if (yConst < 0) {
            equation = `${xConst}x - ${-yConst}y = ${c}`;
        } else {
            equation = `${xConst}x + ${yConst}y = ${c}`;
        }
    }

    // Update the "equationResult" element with the result
    document.getElementById("equationResult").textContent = `Equation: ${equation}`;
});

document.getElementById("calculateAngleButton").addEventListener("click", function () {
    const eq1_a = parseFloat(document.getElementById("eq1_a").value);
    const eq1_b = parseFloat(document.getElementById("eq1_b").value);
    const eq1_c = parseFloat(document.getElementById("eq1_c").value);
    const eq2_a = parseFloat(document.getElementById("eq2_a").value);
    const eq2_b = parseFloat(document.getElementById("eq2_b").value);
    const eq2_c = parseFloat(document.getElementById("eq2_c").value);

    // Calculate the angle between two lines
    const a1 = eq1_a;
    const b1 = eq1_b;
    const a2 = eq2_a;
    const b2 = eq2_b;

    const angle1 = (Math.atan((b2 - b1) / (a1 - a2)) * 180) / Math.PI;
    const angle2 = (Math.atan(-1 * (b2 - b1) / (a1 - a2)) * 180) / Math.PI;

    // Ensure that the angles are between 0 and 180 degrees
    const validAngle1 = angle1 < 0 ? 180 + angle1 : angle1;
    const validAngle2 = angle2 < 0 ? 180 + angle2 : angle2;

    // Update the "angleResult" element with the result
    document.getElementById("angleResult").textContent = `Angle: ${validAngle1}° or ${validAngle2}°`;
});




// Function to calculate the bisector equation
function calculateBisector() {
const a = parseFloat(document.getElementById("bisector_a").value);
const b = parseFloat(document.getElementById("bisector_b").value);
const c = parseFloat(document.getElementById("bisector_c").value);
const a1 = parseFloat(document.getElementById("bisector_a1").value);
const b1 = parseFloat(document.getElementById("bisector_b1").value);
const c1 = parseFloat(document.getElementById("bisector_c1").value);

// Calculate the bisector equations
const p = a + a1;
const q = b + b1;
const r = c + c1;
const equationPositive = `${p !== 0 ? `${p}x ` : ''}${q !== 0 ? `${q > 0 ? '+ ' : '- '}${Math.abs(q)}y ` : ''}${r !== 0 ? `${r > 0 ? '+ ' : '- '}${Math.abs(r)}` : ''} = 0`;

const p2 = a - a1;
const q2 = b - b1;
const r2 = c - c1;
const equationNegative = `${p2 !== 0 ? `${p2}x ` : ''}${q2 !== 0 ? `${q2 > 0 ? '+ ' : '- '}${Math.abs(q2)}y ` : ''}${r2 !== 0 ? `${r2 > 0 ? '+ ' : '- '}${Math.abs(r2)}` : ''} = 0`;

// Display the bisector equations with proper plus or minus signs
document.getElementById("bisectorResult").textContent = `Bisector Equation: ${equationPositive}`;
document.getElementById("bisectorResultNegative").textContent = `Bisector Equation: ${equationNegative}`;
}

// Attach event listener to the "Calculate Bisector" button
const calculateBisectorButton = document.getElementById("calculateBisectorButton");
calculateBisectorButton.addEventListener("click", calculateBisector);

