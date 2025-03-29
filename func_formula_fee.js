/** 手續費欄位統計公式分行建構器 */
function feeInnerLine(wordCell, column) {
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
      `"*" & ${wordCell}, ` +
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

/** 產生手續費欄位統計公式 */
function generateFeeFormula(wordCell, isExpense = false) {
  const minusSign = isExpense ? '-' : '';
  const innerLines = MONEY_COLUMNS.map(column => feeInnerLine(wordCell, column));
  const inner = innerLines.join(',\n');
  return `= ${minusSign}sum(\n${inner}\n)`;
}

/** 產生信用卡手續費欄位統計公式 */
function generateFeeCreditCardFormula(wordCell) {
  const innerLines = CREDIT_CARD_COLUMNS.map(column => feeInnerLine(wordCell, column));
  const inner = innerLines.join(',\n');
  return `= -sum(\n${inner}\n)`;
}
