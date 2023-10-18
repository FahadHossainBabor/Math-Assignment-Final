document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
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
    document.getElementById(
      "equationResult"
    ).textContent = `Equation: ${equation}`;
  });

document
  .getElementById("calculateAngleButton")
  .addEventListener("click", function () {
    // Get the coefficients and constants from the input fields
    const a1 = parseFloat(document.getElementById("eq1_a").value);
    const b1 = parseFloat(document.getElementById("eq1_b").value);
    const c1 = parseFloat(document.getElementById("eq1_c").value);
    const a2 = parseFloat(document.getElementById("eq2_a").value);
    const b2 = parseFloat(document.getElementById("eq2_b").value);
    const c2 = parseFloat(document.getElementById("eq2_c").value);

    // Calculate the angle between two lines
    const angle1 =
      (Math.atan((a2 * b1 - a1 * b2) / (a1 * a2 + b1 * b2)) * 180) / Math.PI;
    const angle2 =
      (Math.atan((-1 * (a2 * b1 - a1 * b2)) / (a1 * a2 + b1 * b2)) * 180) /
      Math.PI;

    // Ensure that the angles are between 0 and 180 degrees
    const validAngle1 = angle1 < 0 ? 180 + angle1 : angle1;
    const validAngle2 = angle2 < 0 ? 180 + angle2 : angle2;

    // Update the "angleResult" element with the result
    document.getElementById(
      "angleResult"
    ).textContent = `Angle: ${validAngle1}° or ${validAngle2}°`;
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
  const equationPositive = `${p !== 0 ? `${p}x ` : ""}${
    q !== 0 ? `${q > 0 ? "+ " : "- "}${Math.abs(q)}y ` : ""
  }${r !== 0 ? `${r > 0 ? "+ " : "- "}${Math.abs(r)}` : ""} = 0`;

  const p2 = a - a1;
  const q2 = b - b1;
  const r2 = c - c1;
  const equationNegative = `${p2 !== 0 ? `${p2}x ` : ""}${
    q2 !== 0 ? `${q2 > 0 ? "+ " : "- "}${Math.abs(q2)}y ` : ""
  }${r2 !== 0 ? `${r2 > 0 ? "+ " : "- "}${Math.abs(r2)}` : ""} = 0`;

  // Display the bisector equations with proper plus or minus signs
  document.getElementById(
    "bisectorResult"
  ).textContent = `Bisector Equation (Positive Sign): ${equationPositive}`;
  document.getElementById(
    "bisectorResultNegative"
  ).textContent = `Bisector Equation (Negative Sign): ${equationNegative}`;
}

// Attach event listener to the "Calculate Bisector" button
const calculateBisectorButton = document.getElementById(
  "calculateBisectorButton"
);
calculateBisectorButton.addEventListener("click", calculateBisector);

// Add an event listener to the "Calculate" button
document
  .getElementById("calculateLineEquationButton")
  .addEventListener("click", function () {
    // Get the value of perpendicular distance (p) from the input field
    const p = parseFloat(
      document.getElementById("perpendicularDistance").value
    );

    // Get the value of angle to the x-axis in degrees from the input field
    let x = parseFloat(document.getElementById("angleToXAxis").value);

    // Convert the angle from degrees to radians
    x = (x * Math.PI) / 180;

    // Initialize the equation string
    let equation = `(${Math.cos(x)})x`;

    // Check the sign of sin(x) to determine whether to use "+" or "-"
    if (Math.sin(x) >= 0) {
      equation += ` + (${Math.sin(x)})y`;
    } else {
      equation += `(${Math.sin(x)})y`;
    }

    // Add the perpendicular distance (p) to the equation
    equation += ` = ${p}`;

    // Display the calculated equation of the straight line
    document.getElementById(
      "lineEquationResult"
    ).textContent = `Equation of Line: ${equation}`;
  });

// Function to check if three points are collinear
function arePointsCollinear(x1, y1, x2, y2, x3, y3) {
  // Calculate the cross product of vectors (x1, y1) to (x2, y2) and (x1, y1) to (x3, y3)
  const crossProduct = (x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1);

  // If the cross product is 0, the points are collinear; otherwise, they are not
  return crossProduct === 0;
}

// Add an event listener to the button with the id "checkCollinearButton"
document
  .getElementById("checkCollinearButton")
  .addEventListener("click", function () {
    const x1 = document.getElementById("x1").value;
    const y1 = document.getElementById("y1").value;
    const x2 = document.getElementById("x2").value;
    const y2 = document.getElementById("y2").value;
    const x3 = document.getElementById("x3").value;
    const y3 = document.getElementById("y3").value;

    const collinear = arePointsCollinear(x1, y1, x2, y2, x3, y3);

    document.getElementById("collinearResult").textContent =
      "Collinear Points Result: " + collinear;
  });



  

  document.addEventListener("DOMContentLoaded", function () {
    const optionSelect = document.getElementById("optionSelect");
    const inputFieldsOption1 = document.getElementById("inputFieldsOption1");
    const inputFieldsOption2 = document.getElementById("inputFieldsOption2");
    const inputFieldsOption3 = document.getElementById("inputFieldsOption3");
    const calculateEquationButton = document.getElementById("calculateEquationButton");
    const equationResult = document.getElementById("equationResult");

    optionSelect.addEventListener("change", function () {
        const selectedOption = optionSelect.value;
        inputFieldsOption1.style.display = "none";
        inputFieldsOption2.style.display = "none";
        inputFieldsOption3.style.display = "none";

        if (selectedOption === "1") {
            inputFieldsOption1.style.display = "block";
        } else if (selectedOption === "2") {
            inputFieldsOption2.style.display = "block";
        } else if (selectedOption === "3") {
            inputFieldsOption3.style.display = "block";
        }
    });

    calculateEquationButton.addEventListener("click", function () {
        const selectedOption = optionSelect.value;
        let equation = "";

        if (selectedOption === "1") {
            const x1 = parseFloat(document.getElementById("x1").value);
            const y1 = parseFloat(document.getElementById("y1").value);
            equation = generateEquationThroughIntersection(x1, y1);
        } else if (selectedOption === "2") {
            const k3 = parseFloat(document.getElementById("k3").value);
            const l3 = parseFloat(document.getElementById("l3").value);
            const k4 = parseFloat(document.getElementById("k4").value);
            const l4 = parseFloat(document.getElementById("l4").value);
            equation = generateEquationParallelToLine(k3, l3, k4, l4);
        } else if (selectedOption === "3") {
            const originalLineSlope = parseFloat(document.getElementById("originalLineSlope").value);
            const pointX = parseFloat(document.getElementById("pointX").value);
            const pointY = parseFloat(document.getElementById("pointY").value);
            equation = generateEquationPerpendicularToLine(originalLineSlope, pointX, pointY);
        }

        equationResult.textContent = "Equation Result: " + equation;
    });
});

function generateEquationThroughIntersection(x1, y1, k3, l3, k4, l4) {
    // Generate an equation passing through the intersection of two given equations and a point (x1, y1)
    const a1 = k3;
    const b1 = l3;
    const a2 = k4;
    const b2 = l4;

    const m_fraction = (b2 - b1) / (a2 - a1);
    const b_fraction = b1 - m_fraction * a1;

    const equation = `y = ${m_fraction}x + ${b_fraction}`;
    return equation;
}

function generateEquationParallelToLine(slope, pointX, pointY) {
    // Generate an equation parallel to a straight line and passing through the intersection point of the given lines
    const original_m = -slope;
    const a1 = pointX;
    const b1 = pointY;

    const new_m = original_m;
    const new_b = b1 - new_m * a1;

    const equation = `y = ${new_m}x + ${new_b}`;
    return equation;
}

function generateEquationPerpendicularToLine(originalLineSlope, pointX, pointY) {
    // Generate an equation perpendicular to a straight line and passing through the intersection point of the given lines
    const original_m = -originalLineSlope;
    const a1 = pointX;
    const b1 = pointY;

    const new_m = -1 / original_m;
    const new_b = b1 - new_m * a1;

    const equation = `y = ${new_m}x + ${new_b}`;
    return equation;
}
