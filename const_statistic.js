/** 「統計試算表」中 1 月份統計結果所在列 */
const JANUARY_ROW = 4;

/** 「統計試算表」中 12 月份統計結果所在列 */
const DECEMBER_ROW = 15;

/** 記錄「帳簿試算表」中 1 月份第一筆帳目所在行數的「統計試算表」儲存格 */
const JANUARY_START_CELL = '$D' + JANUARY_ROW;

/** 記錄「帳簿試算表」中 1 月份第一筆帳目所在行數的「統計試算表」儲存格 */
const JANUARY_END_CELL = '$E' + JANUARY_ROW;

/** 「統計試算表」的「薪資」欄位 */
const COLUMN_STATISTIC_SALARY = {column: 'G', isExpense: false};

/** 「統計試算表」的「投資」欄位 */
const COLUMN_STATISTIC_INVEST = {column: 'H', isExpense: false};

/** 「統計試算表」的「利息」欄位 */
const COLUMN_STATISTIC_INTEREST = {column: 'I', isExpense: false};

/** 「統計試算表」的「轉帳」欄位 (信用卡儲值) */
const COLUMN_STATISTIC_TOP_UP = {column: 'J', isExpense: false};

/** 「統計試算表」的「其他收入」欄位 */
const COLUMN_STATISTIC_OTHER_INCOME = {column: 'K', isExpense: false};

/** 「統計試算表」的「收入調整」欄位 */
const COLUMN_STATISTIC_ADJUST_INCOME = {column: 'L', isExpense: false};

/** 「統計試算表」的「飲食」欄位 */
const COLUMN_STATISTIC_FOOD = {column: 'M', isExpense: true};

/** 「統計試算表」的「非飲食消費」欄位 */
const COLUMN_STATISTIC_NON_FOOD = {column: 'N', isExpense: true};

/** 「統計試算表」的「交通」欄位 */
const COLUMN_STATISTIC_TRAFFIC = {column: 'O', isExpense: true};

/** 「統計試算表」的「運動保健」欄位 */
const COLUMN_STATISTIC_SPORT = {column: 'P', isExpense: true};

/** 「統計試算表」的「勞健保」欄位 */
const COLUMN_STATISTIC_PUBLIC_INSURANCE = {column: 'Q', isExpense: true};

/** 「統計試算表」的「稅款」欄位 */
const COLUMN_STATISTIC_TAX = {column: 'R', isExpense: true};

/** 「統計試算表」的「罰款」欄位 */
const COLUMN_STATISTIC_FINE = {column: 'S', isExpense: true};

/** 「統計試算表」的「電信網路」欄位 */
const COLUMN_STATISTIC_COMM = {column: 'T', isExpense: true};

/** 「統計試算表」的「保險」欄位 */
const COLUMN_STATISTIC_INSURANCE = {column: 'U', isExpense: true};

/** 「統計試算表」的「房租」欄位 */
const COLUMN_STATISTIC_RENT = {column: 'V', isExpense: true};

/** 「統計試算表」的「電費」欄位 */
const COLUMN_STATISTIC_ELECTRICITY_BILL = {column: 'W', isExpense: true};

/** 「統計試算表」中的「手續費」欄位 */
const COLUMN_STATISTIC_FEE = {column: 'X', isExpense: true};

/** 「統計試算表」的「信用卡款」欄位 */
const COLUMN_STATISTIC_CREDIT_CARD_PAYMENT = {column: 'Y', isExpense: true};

/** 「統計試算表」的「貸款」欄位 */
const COLUMN_STATISTIC_LOAN = {column: 'Z', isExpense: true};

/** 「統計試算表」的「其他支出」欄位 */
const COLUMN_STATISTIC_OTHER_EXPENSE = {column: 'AA', isExpense: true};

/** 「統計試算表」的「調整支出」欄位 */
const COLUMN_STATISTIC_ADJUST_EXPENSE = {column: 'AB', isExpense: true};

/** 「統計試算表」的信用卡「飲食」欄位 */
const COLUMN_STATISTIC_CREDIT_CARD_FOOD = {column: 'AE', isExpense: true};

/** 「統計試算表」的信用卡「非飲食消費」欄位 */
const COLUMN_STATISTIC_CREDIT_CARD_NON_FOOD = {column: 'AF', isExpense: true};

/** 「統計試算表」的信用卡「交通」欄位 */
const COLUMN_STATISTIC_CREDIT_CARD_TRAFFIC = {column: 'AG', isExpense: true};

/** 「統計試算表」的信用卡「運動保健」欄位 */
const COLUMN_STATISTIC_CREDIT_CARD_SPORT = {column: 'AH', isExpense: true};

/** 「統計試算表」的信用卡「保險」欄位 */
const COLUMN_STATISTIC_CREDIT_CARD_INSURANCE = {column: 'AI', isExpense: true};

/** 「統計試算表」的信用卡「轉帳」欄位 (信用卡儲值) */
const COLUMN_STATISTIC_CREDIT_CARD_TOP_UP = {column: 'AJ', isExpense: true};

/** 「統計試算表」的信用卡「手續費」欄位 */
const COLUMN_STATISTIC_CREDIT_CARD_FEE = {column: 'AK', isExpense: true};

/** 「統計試算表」的信用卡「回饋」欄位 */
const COLUMN_STATISTIC_CREDIT_CARD_FEEDBACK = {column: 'AL', isExpense: true};

/** 「統計試算表」的信用卡「其他」欄位 */
const COLUMN_STATISTIC_CREDIT_CARD_OTHER = {column: 'AM', isExpense: true};

/** 「統計試算表」的信用卡「調整」欄位 (收支相抵) */
const COLUMN_STATISTIC_CREDIT_CARD_ADJUST = {column: 'AN', isExpense: true};

/** 「統計試算表」中公式屬一般結構的欄位 */
const COMMON_COLUMNS = [
  COLUMN_STATISTIC_SALARY,
  COLUMN_STATISTIC_INVEST,
  COLUMN_STATISTIC_INTEREST,
  COLUMN_STATISTIC_TOP_UP,
  COLUMN_STATISTIC_FOOD,
  COLUMN_STATISTIC_NON_FOOD,
  COLUMN_STATISTIC_TRAFFIC,
  COLUMN_STATISTIC_SPORT,
  COLUMN_STATISTIC_PUBLIC_INSURANCE,
  COLUMN_STATISTIC_TAX,
  COLUMN_STATISTIC_FINE,
  COLUMN_STATISTIC_COMM,
  COLUMN_STATISTIC_INSURANCE,
  COLUMN_STATISTIC_RENT,
  COLUMN_STATISTIC_ELECTRICITY_BILL,
  COLUMN_STATISTIC_CREDIT_CARD_PAYMENT,
  COLUMN_STATISTIC_LOAN,
];

/** 「統計試算表」中的「手續費」相關欄位 */
const FEE_COLUMNS = [
  COLUMN_STATISTIC_FEE,
];

/** 「統計試算表」中的「其他」收支欄位 */
const OTHER_COLUMNS = [
  COLUMN_STATISTIC_OTHER_INCOME,
  COLUMN_STATISTIC_OTHER_EXPENSE,
];

/** 「統計試算表」中的收支「調整」欄位 */
const ADJUST_COLUMNS = [
  COLUMN_STATISTIC_ADJUST_INCOME,
  COLUMN_STATISTIC_ADJUST_EXPENSE,
];

/** 「統計試算表」中公式屬一般結構的信用卡欄位 */
const COMMON_CREDIT_CARD_COLUMNS = [
  COLUMN_STATISTIC_CREDIT_CARD_FOOD,
  COLUMN_STATISTIC_CREDIT_CARD_NON_FOOD,
  COLUMN_STATISTIC_CREDIT_CARD_TRAFFIC,
  COLUMN_STATISTIC_CREDIT_CARD_SPORT,
  COLUMN_STATISTIC_CREDIT_CARD_INSURANCE,
  COLUMN_STATISTIC_CREDIT_CARD_TOP_UP,
  COLUMN_STATISTIC_CREDIT_CARD_ADJUST,
];

/** 「統計試算表」中的信用卡「手續費」相關欄位 */
const FEE_CREDIT_CARD_COLUMNS = [
  COLUMN_STATISTIC_CREDIT_CARD_FEE,
];

/** 「統計試算表」中的信用卡「回饋」相關欄位 */
const FEEDBACK_CREDIT_CARD_COLUMNS = [
  COLUMN_STATISTIC_CREDIT_CARD_FEEDBACK,
];

/** 「統計試算表」中的信用卡「其他」收支欄位 */
const OTHER_CREDIT_CARD_COLUMNS = [
  COLUMN_STATISTIC_CREDIT_CARD_OTHER,
];
