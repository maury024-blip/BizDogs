/**
 * MISBA Website Main JavaScript
 * Handles resource filtering, form validation, and dynamic elements.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Resources Filter Logic
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const resourceItems = document.querySelectorAll('.resource-item');

    if (filterBtns.length > 0 && resourceItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                resourceItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        // Small animation delay
                        setTimeout(() => { item.style.opacity = '1'; }, 50);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => { item.style.display = 'none'; }, 300);
                    }
                });
            });
        });
    }

    // ==========================================
    // 2. Event Registration Form Validation
    // ==========================================
    const regForm = document.getElementById('eventRegistrationForm');
    const formError = document.getElementById('formError');

    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent standard submission

            const email = document.getElementById('regEmail').value;
            const year = document.getElementById('regYear').value;
            
            // Basic University Email Validation (Optional, requires .edu)
            if (!email.includes('.edu')) {
                showError('Please use your valid university (.edu) email address.');
                return;
            }

            // Basic Year Validation
            const currentYear = new Date().getFullYear();
            if (year < currentYear || year > currentYear + 6) {
                showError('Please enter a valid graduation year.');
                return;
            }

            // Clear errors and simulate success
            formError.style.display = 'none';
            regForm.innerHTML = `<div class="success-message">
                                    <h3 class="accent-text">Registration Confirmed!</h3>
                                    <p>Check your email for event details.</p>
                                 </div>`;
        });
    }

    function showError(message) {
        formError.textContent = message;
        formError.style.display = 'block';
    }
});
