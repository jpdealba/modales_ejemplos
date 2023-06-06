import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";

const BrekenTable = ({ data, fields }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200 rounded ">
        <thead className="bg-gray-400	">
          <tr className="">
            {fields.map((field, index) => (
              <th
                key={`${field.label}-${index}`}
                scope="col"
                className=" justify-around px-4 h-[5vh] border-b-2 border-gray-200 hover:bg-gray-500 transition-colors duration-500"
              >
                <HeaderButton title={field.label} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index}>
              {fields.map((field, fieldIndex) => (
                <Item
                  key={`${index}-${fieldIndex}`}
                  index={index}
                  field={field}
                  item={item}
                  fieldIndex={fieldIndex}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Item = ({ index, item, field, fieldIndex }) => {
  switch (field.type) {
    case "string":
      return (
        <td
          key={fieldIndex}
          className={`justify-around items-center py-2 px-4 border-b border-gray-200 ${
            index % 2 === 0 ? "bg-white " : "bg-gray-200"
          } hover:bg-orange-100 transition-colors duration-500`}
        >
          <h2 className="w-full text-center">{item[field.value]}</h2>
        </td>
      );
    case "date":
      return (
        <td
          key={fieldIndex}
          className={`justify-around items-center py-2 px-4 border-b border-gray-200 ${
            index % 2 === 0 ? "bg-white " : "bg-gray-200"
          } hover:bg-orange-100 transition-colors duration-500`}
        >
          <h2 className="w-full text-center">
            {new Date(item[field.value]).toDateString()}
          </h2>
        </td>
      );
    case "details":
      return (
        <td
          key={fieldIndex}
          className={`flex justify-center items-center py-2 px-4 border-b border-gray-200 ${
            index % 2 === 0 ? "bg-white " : "bg-gray-200"
          } `}
        >
          <button>
            <MoreVertIcon className="" />
          </button>
        </td>
      );

    default:
      return <></>;
  }
};

const HeaderButton = ({ title }) => {
  return (
    <button
      onClick={() => {}}
      className=" flex items-center justify-center w-full"
    >
      <h2 className="font-semibold text-white">{title}</h2>
    </button>
  );
};

export default BrekenTable;
