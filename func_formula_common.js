/** 通用欄位統計公式分行建構器 */
function commonInnerLine(wordCell, column) {
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
      wordCell + ', ' +
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

/** 產生通用欄位統計公式 */
function generateCommonFormula(wordCell, isExpense = false) {
  const minusSign = isExpense ? '-' : '';
  const innerLines = MONEY_COLUMNS.map(column => commonInnerLine(wordCell, column));
  const inner = innerLines.join(',\n');
  return `= ${minusSign}sum(\n${inner}\n)`;
}

/** 產生信用卡通用欄位統計公式 */
function generateCommonCreditCardFormula(wordCell) {
  const innerLines = CREDIT_CARD_COLUMNS.map(column => commonInnerLine(wordCell, column));
  const inner = innerLines.join(',\n');
  return `= -sum(\n${inner}\n)`;
}
