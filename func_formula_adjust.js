/** 收支調整欄位統計公式分行建構器 */
function adjustInnerLine(wordCell, column, isExpense) {
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
      wordCell + ', ' +
      'indirect(' +
        'address(' +
          `${JANUARY_START_CELL}, ${column}, ${ABSOLUTE_RELATIVE_MODE}, ${USE_A1_NOTATION}, "${LEDGER_SHEET}"` +
        ')' +
        ' & ":" & ' +
        'address(' +
          `${JANUARY_END_CELL}, ${column}` +
        ')' +
      '), ' +
      '"' + (isExpense ? '<0' : '>0') + '"' +
    ')';
}

/** 產生收支調整欄位的統計公式 */
function generateAdjustFormula(wordCell, isExpense = false) {
  const minusSign = isExpense ? '-' : '';
  const innerLines = MONEY_COLUMNS.map(column => adjustInnerLine(wordCell, column, isExpense));
  const inner = innerLines.join(',\n');
  return `= ${minusSign}sum(\n${inner}\n)`;
}
