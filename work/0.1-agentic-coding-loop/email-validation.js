/**
 * email-validation.js
 * 
 * Unified module: core email validation logic + self-contained test suite.
 * 
 * Sections:
 *   1. Validation logic (validateEmail)
 *   2. Test assertions (assert)
 *   3. Test cases covering all acceptance criteria
 *   4. Test runner (executes when file is loaded standalone)
 * 
 * Run directly in Node.js (`node email-validation.js`) or open in a browser
 * console to see all test results.
 */

// ============================================================================
// 1. Core Validation Logic
// ============================================================================

/**
 * Validates an email address against strict criteria.
 *
 * Acceptance criteria:
 *   - Empty field (including whitespace-only)  -> { valid: false, error: 'Required field' }
 *   - Invalid format (missing @, missing domain,
 *     missing dot in domain)                   -> { valid: false, error: 'Invalid email format' }
 *   - Valid email                              -> { valid: true, error: null }
 *
 * @param {string} email - The email address to validate
 * @returns {{ valid: boolean, error: string | null }}
 */
function validateEmail(email) {
  // Criterion: Empty field (including whitespace-only)
  if (!email || email.trim() === '') {
    return { valid: false, error: 'Required field' };
  }

  // Criterion: Strict format — local@domain.tld
  //   - At least one non-space, non-@ char before @
  //   - At least one non-space, non-@ char after @
  //   - A dot in the domain part with at least one char on each side
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Invalid email format' };
  }

  return { valid: true, error: null };
}

// ============================================================================
// 2. Test Assertions
// ============================================================================

let passCount = 0;
let failCount = 0;

/**
 * Asserts that a condition is true, recording and logging the result.
 * @param {boolean} condition
 * @param {string} message - Human-readable description of the expectation
 */
function assert(condition, message) {
  if (condition) {
    passCount++;
    console.log('PASS: ' + message);
  } else {
    failCount++;
    console.error('FAIL: ' + message);
  }
}

// ============================================================================
// 3. Test Cases (grouped by Acceptance Criterion)
// ============================================================================

function runEmailValidationTests() {
  console.log('\n=== Email Validation Tests ===\n');

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

  // --- Summary ---
  console.log('\n=== Results: ' + passCount + ' passed, ' + failCount + ' failed ===');
  if (failCount === 0) {
    console.log('All email validation tests passed.\n');
  } else {
    console.error('Some tests failed.\n');
  }
}

// ============================================================================
// 4. Run tests when executed standalone
// ============================================================================

runEmailValidationTests();
