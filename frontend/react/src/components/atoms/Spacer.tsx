import React from "react";

type SpacerProps = {
  height: string | number; // 高さを指定できるように
};

/**
 * 高さを指定するためのスペーサーコンポーネント。
 * 指定された高さ分のスペースを空けます。
 *
 * @param {SpacerProps} props - スペーサーコンポーネントのプロパティ。
 * @param {number} props.height - 空白として設定する高さの値。
 * @returns {JSX.Element} 指定された高さ分のスペースを空けるためのdiv要素を返します。
 */
const Spacer: React.FC<SpacerProps> = ({ height }) => {
  return <div style={{ height: height }} />;
};

export default Spacer;
