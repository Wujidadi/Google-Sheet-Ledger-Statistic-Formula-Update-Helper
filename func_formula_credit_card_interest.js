/** 信用卡利息欄位統計公式分行建構器 */
function creditCardInterestInnerLine(wordCell, column) {
  return getIndent() +
    'sumif(' +
      'indirect(' +
        'address(' +
          `${JANUARY_START_CELL}, ${COLUMN_CATEGORY}, ${ABSOLUTE_RELATIVE_MODE}, ${USE_A1_NOTATION}, "${LEDGER_SHEET}"` +
        ')' +
        ' & ":" & ' +
        'address(' +
          `${JANUARY_END_CELL}, ${COLUMN_CATEGORY}` +
        ')' +
      '), ' +
      `"信用卡利息", ` +
      'indirect(' +
        'address(' +
          `${JANUARY_START_CELL}, ${column}, ${ABSOLUTE_RELATIVE_MODE}, ${USE_A1_NOTATION}, "${LEDGER_SHEET}"` +
        ')' +
        ' & ":" & ' +
        'address(' +
          `${JANUARY_END_CELL}, ${column}` +
        ')' +
      ')' +
    ')';
}

/** 產生信用卡利息欄位的統計公式 */
function generateCreditCardInterestFormula(wordCell) {
  const innerLines = CREDIT_CARD_COLUMNS.map(column => creditCardInterestInnerLine(wordCell, column));
  const inner = innerLines.join(',\n');
  return `= -sum(\n${inner}\n)`;
}
