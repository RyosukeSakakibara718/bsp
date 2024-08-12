export type MemberData = {
    id: number;
    name: string;
    grade: number;
    cost: number;
    startDate: string;
  };
  
  export type MemberTableProps = {
    data: MemberData[]; // data は MemberData 型の配列
  };
  