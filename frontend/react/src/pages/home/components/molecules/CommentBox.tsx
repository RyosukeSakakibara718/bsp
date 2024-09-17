import { useState } from "react";
import TableCaptionRow from "../../../../../src/components/molecules/row/TableCaptionRow";
import TextArea from "../../../../components/atoms/box/TextArea";

const CommentBox =()=>{

/**
 * コメントを表示、追加・編集・削除を行うコンポーネント。
 *
 * @component
 * @param {CommentBoxProps} props - コンポーネントに渡されるプロパティ。
 * @returns {JSX.Element} CommentBox コンポーネントを返します。
 */
    const [isEdit,setIsEdit] =useState<boolean>(false)

    return(
         <div className="overflow-hidden rounded-lg border-2">
         <table className=" min-w-full divide-y rounded-lg">
            <thead>
             <TableCaptionRow value={"コメント"} isHome={true} isEdit={isEdit} setIsEdit={setIsEdit}/>
            </thead>
            <tbody>
             <tr>
                <td>
                 <TextArea />
                </td>
             </tr>
            </tbody>
         </table>
        </div>
    );
}
export default CommentBox;