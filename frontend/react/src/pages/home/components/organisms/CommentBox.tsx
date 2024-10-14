import React, { useEffect, useState } from "react";
import TableCaptionRow from "../../../../../src/components/molecules/row/TableCaptionRow";
import { createHomeComment, deleteHomeComment, getHomeComment, updateHomeComment } from "../../../../api/homeComment";
import TextArea from "../../../../components/atoms/box/TextArea";
import Spacer from "../../../../components/atoms/Spacer";
import { HomeComment, HomeCommentProps } from "../../../../types/home";

const CommentBox = ({ projectId }: HomeCommentProps) => {
  /**
   * コメントを表示、追加・編集・削除を行うコンポーネント。
   * @component
   * @param {CommentBoxProps} props - コンポーネントに渡されるプロパティ。
   * @returns {JSX.Element} CommentBox コンポーネントを返します。
   */

  const [homeComment, setHomeComment] = useState<HomeComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [editStates, setEditStates] = useState<Record<number, boolean>>({});
  const [newComment, setNewComment] = useState<string>("");
  const [isAdding, setIsAdding] = useState(false);
  const [isNew] = useState(true)

  useEffect(() => {
    if (projectId) {
      const fetchData = async () => {
        const homeCommentData = await getHomeComment(projectId);
        setHomeComment(homeCommentData);
        setLoading(false);

        const initialEditStates: Record<number, boolean> = {};
        homeCommentData.forEach((comment: HomeComment) => {
          initialEditStates[comment.id] = false;
        });
        setEditStates(initialEditStates);
      };
      fetchData();
    }
  }, [projectId]);

  const handleCommentChange = (id: number, newComment: string) => {
    setHomeComment(prevComments =>
      prevComments.map(comment =>
        comment.id === id ? { ...comment, comment: newComment } : comment,
      ),
    );
  };

  const toggleEditState = (id: number) => {
    setEditStates(prevStates => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  const handleSaveComment = async (id: number) => {
    const commentToSave = homeComment.find(comment => comment.id === id);
    if (commentToSave && projectId) {
      await updateHomeComment(
        projectId,
        id,
        commentToSave.comment,
      );
    }
  };
  const handleNewCommentChange = (value: string) => {
    setNewComment(value);
  };

  const handleDeleteComment = async (projectId: number, commentId: number) => {
    try {
      await deleteHomeComment(projectId, commentId);
      const updatedComments = await getHomeComment(projectId);
      setHomeComment(updatedComments);
    } catch (error) {
      console.error("コメントの削除に失敗しました:", error);
      alert("コメントの削除に失敗しました");
    }
  };

  const handleAddComment = async (projectId: number) => {
    if (newComment.trim() && projectId) {
      const success = await createHomeComment(projectId, newComment);
      if (success) {
        alert("コメントが追加されました");
        setIsAdding(false);
        setNewComment("");
        const updatedComments = await getHomeComment(projectId);
        setHomeComment(updatedComments);
      } else {
        alert("コメントの追加に失敗しました");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md my-2"
        onClick={() => setIsAdding(true)}
      >
        新しいコメントを追加
      </button>
      {isAdding && (
        <div className="overflow-hidden rounded-lg border-2 my-2">
        <table className="min-w-full divide-y rounded-lg">
              <thead>
                <TableCaptionRow
                  value={`コメント`}
                  isHome={true}
                  projectId={projectId}
                  handleAddComment={handleAddComment}
                  isNew={isNew}
                />
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">
                    <TextArea
                      value={newComment}
                        onChange={(e) => handleNewCommentChange(e.target.value)}
                      isEdit={true}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      )}
      {homeComment.map(comment => (
        <React.Fragment key={comment.id}>
          <div className="overflow-hidden rounded-lg border-2 my-2">
            <table className="min-w-full divide-y rounded-lg">
              <thead>
                <TableCaptionRow
                  value={`コメント`}
                  isHome={true}
                  isEdit={editStates[comment.id]}
                  setIsEdit={() => toggleEditState(comment.id)}
                  commentId={comment.id}
                  projectId={projectId}
                  handleSaveComment={handleSaveComment}
                  handleDeleteComment={handleDeleteComment}
                />
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">
                    <TextArea
                      value={comment.comment}
                      onChange={e =>
                        handleCommentChange(comment.id, e.target.value)
                      }
                      isEdit={editStates[comment.id]}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Spacer height="20px" />
        </React.Fragment>
      ))}
    </>
  );
};
export default CommentBox;
