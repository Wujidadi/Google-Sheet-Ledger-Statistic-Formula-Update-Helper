/** 將公式從 1 月份儲存格向下套用至全年各月份 */
function copyFormula(column, formula) {
  const statisticSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Statistic');
  const januaryCell = column + JANUARY_ROW;
  const decemberCell = column + DECEMBER_ROW;
  const source = statisticSheet.getRange(januaryCell);
  const target = statisticSheet.getRange(`${januaryCell}:${decemberCell}`);
  source.setFormula(formula);
  source.copyTo(target);
}
