import { Key } from "react";

// types/home/MemberInfoDataProps.ts
export type Member = {
  id: Key | null | undefined;
  achievement_total_cost: number;
  achievement_total_person_month: number;
  base_cost: number;
  estimate_total_person_month: number;
  member_id: number;
  name: string;
  position: number;
};

export type MemberInfoDataProps = {
  MembersData: Member[];
};

export type OrderInfo = {
  cost: number;
  estimate_cost: number;
  crude_rate: number;
  estimate_person_month: number;
};

export type OrderInfoDataProps = {
  OrderInfoData: OrderInfo[];
};
