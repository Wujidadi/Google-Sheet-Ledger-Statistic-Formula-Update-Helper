/** 其他收入欄位統計公式分行建構器 */
function otherIncomeInnerLine(wordCell, column) {
  return getIndent() +
    'sumifs(' +
      'indirect(' +
        'address(' +
          `${JANUARY_START_CELL}, ${column}, ${ABSOLUTE_RELATIVE_MODE}, ${USE_A1_NOTATION}, "${LEDGER_SHEET}"` +
        ')' +
        ' & ":" & ' +
        'address(' +
          `${JANUARY_END_CELL}, ${column}` +
        ')' +
      '), ' +
      'indirect(' +
        'address(' +
          `${JANUARY_START_CELL}, ${COLUMN_CATEGORY}, ${ABSOLUTE_RELATIVE_MODE}, ${USE_A1_NOTATION}, "${LEDGER_SHEET}"` +
        ')' +
        ' & ":" & ' +
        'address(' +
          `${JANUARY_END_CELL}, ${COLUMN_CATEGORY}` +
        ')' +
      '), ' +
      `${wordCell} & "(收入)", ` +
      'indirect(' +
        'address(' +
          `${JANUARY_START_CELL}, ${column}, ${ABSOLUTE_RELATIVE_MODE}, ${USE_A1_NOTATION}, "${LEDGER_SHEET}"` +
        ')' +
        ' & ":" & ' +
        'address(' +
          `${JANUARY_END_CELL}, ${column}` +
        ')' +
      '), ' +
      '">0"' +
    ')';
}

/** 其他支出欄位統計公式分行建構器 */
function otherExpenseInnerLine(wordCell, column) {
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
      `${wordCell} & "(支出)", ` +
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

/** 產生其他收支欄位的統計公式 */
function generateOtherFormula(wordCell, isExpense = false) {
  if (isExpense) {
    return generateOtherExpenseFormula(wordCell);
  }
  return generateOtherIncomeFormula(wordCell);
}

/** 產生其他收入欄位的統計公式 */
function generateOtherIncomeFormula(wordCell) {
  const innerLines = MONEY_COLUMNS.map(column => otherIncomeInnerLine(wordCell, column));
  const inner = innerLines.join(',\n');
  return `= sum(\n${inner}\n)`;
}

/** 產生其他支出欄位的統計公式 */
function generateOtherExpenseFormula(wordCell) {
  const innerLines = MONEY_COLUMNS.map(column => otherExpenseInnerLine(wordCell, column));
  const inner = innerLines.join(',\n');
  return `= -sum(\n${inner}\n)`;
}

/** 產生信用卡其他支出欄位的統計公式 */
function generateOtherCreditCardFormula(wordCell) {
  const innerLines = CREDIT_CARD_COLUMNS.map(column => otherExpenseInnerLine(wordCell, column));
  const inner = innerLines.join(',\n');
  return `= -sum(\n${inner}\n)`;
}
