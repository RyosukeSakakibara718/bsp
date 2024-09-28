import React from "react";

type FormRowProps = {
  children: React.ReactNode;
};

const ProjectInfoRow: React.FC<FormRowProps> = ({ children }) => {
  return (
    <tr className="flex w-full border-b border-[#e1cfff] text-gray-800 whitespace-nowrap">
      {React.Children.map(children, (child) => (
        <td className="w-1/2 px-2">
          {child}
        </td>
      ))}
    </tr>
  );
}

export default ProjectInfoRow;