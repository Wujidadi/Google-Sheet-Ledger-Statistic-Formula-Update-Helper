/** 「帳簿試算表」所在試算表名稱 */
const LEDGER_SHEET = "Ledger";

/** 「帳簿試算表」中「類別」欄位的數字編號 */
const COLUMN_CATEGORY = 7;  // G

/** 「帳簿試算表」中「現金」欄位的數字編號 */
const COLUMN_CASH = 8;  // H

/** 「帳簿試算表」中「郵局」欄位的數字編號 */
const COLUMN_POST = 9;  // I

/** 「帳簿試算表」中「合作金庫」欄位的數字編號 */
const COLUMN_TCB = 10;  // J

/** 「帳簿試算表」中「中國信託帳戶A」欄位的數字編號 */
const COLUMN_CTBC1 = 11;  // K

/** 「帳簿試算表」中「中國信託帳戶B」欄位的數字編號 */
const COLUMN_CTBC2 = 12;  // L

/** 「帳簿試算表」中「兆豐商銀台幣帳戶」欄位的數字編號 */
const COLUMN_MEGA = 13;  // M

/** 「帳簿試算表」中「上海商銀」欄位的數字編號 */
const COLUMN_SCSB = 14;  // N

/** 「帳簿試算表」中「國泰世華銀行」欄位的數字編號 */
const COLUMN_CUBE = 15;  // O

/** 「帳簿試算表」中「玉山銀行」欄位的數字編號 */
const COLUMN_ESUN = 16;  // P

/** 「帳簿試算表」中「彰化銀行」欄位的數字編號 */
const COLUMN_CHB = 17;  // Q

/** 「帳簿試算表」中「台新銀行」欄位的數字編號 */
const COLUMN_TSIB = 18;  // R

/** 「帳簿試算表」中「第一銀行」欄位的數字編號 */
const COLUMN_FCBK = 19;  // S

/** 「帳簿試算表」中「悠遊付」欄位的數字編號 */
const COLUMN_EASYPAY = 20;  // T

/** 「帳簿試算表」中「Line」欄位的數字編號 */
const COLUMN_LINEPAY = 21;  // U

/** 「帳簿試算表」中「街口支付」欄位的數字編號 */
const COLUMN_JKOPAY = 22;  // V

/** 「帳簿試算表」中「全支付」欄位的數字編號 */
const COLUMN_PXPAY = 23;  // W

/** 「帳簿試算表」中「中信卡」欄位的數字編號 */
const COLUMN_CTBC_CC = 24;  // X

/** 「帳簿試算表」中「台北富邦卡」欄位的數字編號 */
const COLUMN_TFC_CC = 25;  // Y

/** 「帳簿試算表」中「國泰世華卡」欄位的數字編號 */
const COLUMN_CUBE_CC = 26;  // Z

/** 「帳簿試算表」中「玉山卡」欄位的數字編號 */
const COLUMN_ESUN_CC = 27;  // AA

/** 「帳簿試算表」中「彰銀卡」欄位的數字編號 */
const COLUMN_CHB_CC = 28;  // AB

/** 「帳簿試算表」的金額欄位數字編號 */
const MONEY_COLUMNS = [
  COLUMN_CASH,
  COLUMN_POST,
  COLUMN_TCB,
  COLUMN_CTBC1,
  COLUMN_CTBC2,
  COLUMN_MEGA,
  COLUMN_SCSB,
  COLUMN_CUBE,
  COLUMN_ESUN,
  COLUMN_CHB,
  COLUMN_TSIB,
  COLUMN_FCBK,
  COLUMN_EASYPAY,
  COLUMN_LINEPAY,
  COLUMN_JKOPAY,
  COLUMN_PXPAY,
];

/** 「帳簿試算表」的信用卡欄位數字編號 */
const CREDIT_CARD_COLUMNS = [
  COLUMN_CTBC_CC,
  COLUMN_TFC_CC,
  COLUMN_CUBE_CC,
  COLUMN_ESUN_CC,
  COLUMN_CHB_CC,
];
