
function calculateCost() {
  const petType = document.getElementById("pet-type").value;
  const months = parseInt(document.getElementById("months").value);
  let monthlyCost;

  switch (petType) {
    case "dog": monthlyCost = 100; break;
    case "cat": monthlyCost = 70; break;
    case "rabbit": monthlyCost = 50; break;
    default: monthlyCost = 0;
  }

  const totalCost = monthlyCost * months;
  document.getElementById("result").innerText = `Estimated cost for ${months} month(s) of caring for a ${petType}: $${totalCost}`;
}
