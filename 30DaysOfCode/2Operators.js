function solve(meal_cost, tip_percent, tax_percent) {
    let tip_cost = meal_cost * tip_percent / 100;
    let tax_cost = meal_cost * tax_percent / 100;
    let total_cost = Math.round(meal_cost + tip_cost + tax_cost);
    console.log(total_cost);
}