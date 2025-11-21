// script.js
// Order processing logic with validation, loop total, discount, switch day-name and try-catch.

function processOrder() {
    debugger; // pause here to inspect variables in DevTools

    try {
        // Type conversion
        const priceInput = document.getElementById('price').value;
        const qtyInput = document.getElementById('qty').value;
        const dayInput = document.getElementById('day').value;

        const price = Number(priceInput);
        const qty = Number(qtyInput);
        const dayNum = Number(dayInput);

        // Validation
        if (priceInput.trim() === '' || qtyInput.trim() === '') {
            throw new Error('Price and quantity are required.');
        }
        if (isNaN(price) || isNaN(qty)) {
            throw new Error('Price and Quantity must be valid numbers.');
        }
        if (!Number.isInteger(qty) || qty < 1) {
            throw new Error('Quantity must be a positive integer.');
        }
        if (isNaN(dayNum) || dayNum < 1 || dayNum > 7) {
            throw new Error('Delivery day must be a number between 1 and 7.');
        }

        // Convert day number to name using switch
        let dayName;
        switch (dayNum) {
            case 1: 
            dayName = 'Monday';
             break;
            case 2: 
            dayName = 'Tuesday'; 
            break;
            case 3: 
            dayName = 'Wednesday'; 
            break;
            case 4: 
            dayName = 'Thursday'; 
            break;
            case 5: 
            dayName = 'Friday'; 
            break;
            case 6: 
            dayName = 'Saturday'; 
            break;
            case 7: 
            dayName = 'Sunday'; 
            break;
            default: 
            dayName = 'Unknown';
        }

        // Compute total price using a for loop (add price qty times)
        let total = 0;
        for (let i = 0; i < qty; i++) {
            total += price;
        }

        // Determine discount
        let discountRate = 0;
        if (total > 2000) discountRate = 0.15;
        else if (total >= 1000) discountRate = 0.10;

        const discountAmount = total * discountRate;
        const finalAmount = total - discountAmount;

        // Display final bill
        const output = document.getElementById('output');
        output.textContent =
            `Delivery Day: ${dayName}\n` +
            `Quantity: ${qty}\n` +
            `Unit Price: ${price}\n` +
            `Total Price: ${total}\n` +
            `Discount: ${discountRate * 100}% (₹${discountAmount.toFixed(2)})\n` +
            `Final Amount: ₹${finalAmount.toFixed(2)}`;

    } catch (err) {
        document.getElementById('output').textContent = 'Error: ' + err.message;
        // Optionally rethrow if you want the console to also show the stack
        // throw err;
    }
}
