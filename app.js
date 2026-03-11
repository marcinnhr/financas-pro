// app.js

// Finances Tracker Application

// Transaction Management
let transactions = [];

function addTransaction(amount, description) {
    const transaction = { amount, description, date: new Date() };
    transactions.push(transaction);
    updateTransactionList();
}

function updateTransactionList() {
    // Update UI to display transactions
}

// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Export to Excel
function exportToExcel() {
    const worksheet = XLSX.utils.json_to_sheet(transactions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');
    XLSX.writeFile(workbook, 'transactions.xlsx');
}

// Share via WhatsApp
function shareOnWhatsApp() {
    const message = `Check out my transactions: ${JSON.stringify(transactions)}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}