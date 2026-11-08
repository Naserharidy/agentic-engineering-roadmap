// email-validation.test.js
// Verification-first tests for validateEmail.
// These tests define the expected behavior before implementation logic is written.
// Run directly in a browser console or with Node.js (no dependencies required).

function assert(condition, message) {
  if (!condition) {
    throw new Error('FAIL: ' + message);
  }
  console.log('PASS: ' + message);
}

function runEmailValidationTests() {
  // Import the function under test (works in both browser and Node contexts)
  const validateEmail = (function () {
    // Inline the implementation so this file is self-contained and runnable alone.
    function validateEmail(email) {
      if (!email || email.trim() === '') {
        return { valid: false, error: 'Required field' };
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return { valid: false, error: 'Invalid email format' };
      }
      return { valid: true, error: null };
    }
    return validateEmail;
  })();

  // --- Criterion 1: Valid Email ---
  const validResult = validateEmail('test@example.com');
  assert(validResult.valid === true, 'Valid email (test@example.com) is accepted');
  assert(validResult.error === null, 'Valid email has no error message');

  // --- Criterion 2: Invalid Format ---
  const missingAt = validateEmail('abc123xyz');
  assert(missingAt.valid === false, 'Text without @ (abc123xyz) is rejected');
  assert(missingAt.error === 'Invalid email format', 'Missing @ shows format error');

  const missingDomain = validateEmail('user@');
  assert(missingDomain.valid === false, 'Email with missing domain (user@) is rejected');

  const missingLocal = validateEmail('@example.com');
  assert(missingLocal.valid === false, 'Email with missing local part (@example.com) is rejected');

  const noDot = validateEmail('user@example');
  assert(noDot.valid === false, 'Email without dot in domain (user@example) is rejected');

  // --- Criterion 3: Empty Field ---
  const emptyResult = validateEmail('');
  assert(emptyResult.valid === false, 'Empty email field is rejected');
  assert(emptyResult.error === 'Required field', 'Empty field shows "Required field" error');

  const whitespaceResult = validateEmail('   ');
  assert(whitespaceResult.valid === false, 'Whitespace-only field is rejected');
  assert(whitespaceResult.error === 'Required field', 'Whitespace-only shows "Required field" error');

  console.log('\nAll email validation tests passed.');
}

runEmailValidationTests();
