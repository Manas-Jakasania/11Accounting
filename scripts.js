// Validate the Invoice Form
function validateInvoiceForm() {
    const clientName = document.getElementById("client-name").value;
    const invoiceAmount = document.getElementById("invoice-amount").value;
    const invoiceDate = document.getElementById("invoice-date").value;

    if (clientName === "") {
        alert("Client Name is required.");
        return false;
    }

    if (invoiceAmount === "" || isNaN(invoiceAmount) || invoiceAmount <= 0) {
        alert("Please enter a valid Invoice Amount.");
        return false;
    }

    if (invoiceDate === "") {
        alert("Invoice Date is required.");
        return false;
    }

    // Success message after form validation
    alert("Invoice successfully submitted!");
    document.getElementById("invoice-form").reset();
    return true; // Allow form to submit
}

// Validate the Transactions Form
function validateTransactionForm() {
    const transactionName = document.getElementById("transaction-name").value;
    const transactionAmount = document.getElementById("transaction-amount").value;
    const transactionDate = document.getElementById("transaction-date").value;

    if (transactionName === "") {
        alert("Transaction Name is required.");
        return false;
    }

    if (transactionAmount === "" || isNaN(transactionAmount) || transactionAmount <= 0) {
        alert("Please enter a valid Transaction Amount.");
        return false;
    }

    if (transactionDate === "") {
        alert("Transaction Date is required.");
        return false;
    }

    // Success message after form validation
    alert("Transaction successfully submitted!");
    document.getElementById("transaction-form").reset();
    return true; // Allow form to submit
}

// Validate the Contact Form
function validateContactForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "") {
        alert("Name is required.");
        return false;
    }

    if (email === "" || !validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message === "") {
        alert("Message is required.");
        return false;
    }

    // Success message after form validation
    alert("Your message has been sent successfully!");
    document.getElementById("contact-form").reset();
    return true; // Allow form to submit
}

// Email Validation Helper Function
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
S