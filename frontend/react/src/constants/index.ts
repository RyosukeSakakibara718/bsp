import { OptionList } from "../types/project";

export const PROJEÇT_MANAGEMENT_TABLE_HEADER = [
  "案件ID",
  "案件名",
  "期間",
  "PM",
  "操作",
];

export const PROJEÇT_MANAGEMENT_MODAL_COLUMNS = [
  "案件ID",
  "案件名",
  "期間",
  "PM",
];

export const MEMBER_MANAGEMENT_TABLE_HEADER = [
  "メンバー名",
  "等級",
  "原価",
  "開始日",
  "操作",
];

export const HOME_MEMBERINFO_TABLE_HEADER = [
  "氏名",
  "役割",
  "単価",
  "予定工数",
  "生産工数",
  "積算原価",
];

export const RANK = [
  { id: 1, name: "PM", label: "PM" },
  { id: 2, name: "PL", label: "PL" },
  { id: 3, name: "PG", label: "PG" },
];

export const PHASES = [
  { id: 1, label: "要件定義" },
  { id: 2, label: "基本設計" },
  { id: 3, label: "詳細設計" },
  { id: 4, label: "製造" },
  { id: 5, label: "単体試験" },
  { id: 6, label: "結合試験" },
  { id: 7, label: "総合試験" },
  { id: 8, label: "リリース" },
  { id: 9, label: "終了" },
];

export const CONTRACT_TYPE = [
  { id: 1, label: "準委任契約" },
  { id: 2, label: "請負契約" },
];

export const OPTIONS_ARRAY: OptionList[] = [
  { id: 1, name: "日毎", label: "日毎" },
  { id: 2, name: "週毎", label: "週毎" },
  { id: 3, name: "月毎", label: "月毎" },
];
