import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail: React.FC<{ id?: string }> = () => {
  const { id } = useParams<{ id?: string }>();
  // TODO詳細ページ、idがあれば編集で、なければ、create
  console.log(id);

  return (
    <div>
      {/* 詳細ページのコンテンツ */}
      プロジェクトのcreate or edit を表示します。
    </div>
  );
};

export default ProjectDetail;
