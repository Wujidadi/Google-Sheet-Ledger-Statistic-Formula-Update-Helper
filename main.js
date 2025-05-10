/** 開啟帳簿時建立 UI 選單 */
const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu('統計')
    .addItem('重整統計公式', 'refreshStatisticFormula')
    .addToUi();
};

/** 重整統計公式 */
function refreshStatisticFormula() {
  COMMON_COLUMNS.forEach(column => {
    const formula = generateCommonFormula(column.column + '$2', column.isExpense);
    copyFormula(column.column, formula);
  });
  FEE_COLUMNS.forEach(column => {
    const formula = generateFeeFormula(column.column + '$2', column.isExpense);
    copyFormula(column.column, formula);
  });
  OTHER_COLUMNS.forEach(column => {
    const formula = generateOtherFormula(column.column + '$2', column.isExpense);
    copyFormula(column.column, formula);
  });
  ADJUST_COLUMNS.forEach(column => {
    const formula = generateAdjustFormula(column.column + '$2', column.isExpense);
    copyFormula(column.column, formula);
  });
  COMMON_CREDIT_CARD_COLUMNS.forEach(column => {
    const formula = generateCommonCreditCardFormula(column.column + '$2');
    copyFormula(column.column, formula);
  });
  FEE_CREDIT_CARD_COLUMNS.forEach(column => {
    const formula = generateFeeCreditCardFormula(column.column + '$2');
    copyFormula(column.column, formula);
  });
  INTEREST_CREDIT_CARD_COLUMNS.forEach(column => {
    const formula = generateCreditCardInterestFormula(column.column + '$2');
    copyFormula(column.column, formula);
  });
  FEEDBACK_CREDIT_CARD_COLUMNS.forEach(column => {
    const formula = generateCreditCardFeedbackFormula(column.column + '$2');
    copyFormula(column.column, formula);
  });
  OTHER_CREDIT_CARD_COLUMNS.forEach(column => {
    const formula = generateOtherCreditCardFormula(column.column + '$2');
    copyFormula(column.column, formula);
  });
}
