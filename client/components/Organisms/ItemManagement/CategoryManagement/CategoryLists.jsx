// import { barTharYae } from "../../../data";
// import SelectTable, { TableCell, TableRow } from "../../Atoms/SelectTable";
import { useState } from "react";
import Modal, { ModalBody, ModalTitle } from "../../../Molecules/Modal";
import CreateCategory from "./CreateCategory";

const CategoryLists = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center w-full py-20 rounded-lg shadow-lg bg-slate-300">
      <div className="flex flex-col items-center justify-center space-y-10">
        <p className="text-xl text-slate-900">{`You don't have any record`}</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 tracking-wide bg-blue-600 rounded-md shadow-lg text-slate-200">
          Add Category
        </button>
      </div>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ModalTitle> Create Category</ModalTitle>
        <ModalBody>
          <CreateCategory
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </ModalBody>
      </Modal>
    </div>
    // <SelectTable>
    //   <thead className="text-xs font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200">
    //     <TableRow>
    //       <TableCell isHeader={true} className={` w-px`}>
    //         <div className="flex items-center">
    //           <label className="inline-flex">
    //             <span className="sr-only">Select all</span>
    //             <input
    //               className="form-checkbox"
    //               type="checkbox"
    //               // checked={selectAll}
    //               // onChange={handleSelectAll}
    //             />
    //           </label>
    //         </div>
    //       </TableCell>
    //       <TableCell isHeader={true}>Name</TableCell>
    //       {/* <TableCell isHeader={true}>Description</TableCell> */}
    //       <TableCell isHeader={true}>Era</TableCell>
    //       <TableCell isHeader={true}>Location</TableCell>
    //       <TableCell isHeader={true}>Type</TableCell>
    //       <TableCell isHeader={true}>Category</TableCell>
    //       <TableCell isHeader={true}>Images</TableCell>
    //       <TableCell isHeader={true} className="sr-only">
    //         Menu
    //       </TableCell>
    //     </TableRow>
    //   </thead>
    //   <tbody className="text-sm divide-y divide-slate-200">
    //     {barTharYae.map((tableData, i) => (
    //       <TableRow key={i}>
    //         <TableCell>
    //           <div className="flex items-center">
    //             <label className="inline-flex">
    //               <span className="sr-only">Select</span>
    //               <input
    //                 id={tableData.id}
    //                 className="form-checkbox"
    //                 type="checkbox"
    //                 // onChange={tableData.handleClick}
    //                 // checked={tableData.isChecked}
    //               />
    //             </label>
    //           </div>
    //         </TableCell>

    //         <TableCell>
    //           <div className="font-medium text-slate-800">{tableData.name}</div>
    //         </TableCell>

    //         {/* <TableCell>
    //           <div className="text-left max-w-md truncate ...">
    //             {tableData.description}
    //           </div>
    //         </TableCell> */}
    //         <TableCell>
    //           <div className="text-left max-w-md truncate ...">
    //             {tableData.era}
    //           </div>
    //         </TableCell>
    //         <TableCell>
    //           <div className="text-left max-w-md truncate ...">
    //             {tableData.location}
    //           </div>
    //         </TableCell>
    //         <TableCell>
    //           <div className="text-left max-w-md truncate ...">
    //             {`${tableData.type}` ? `${tableData.type}` : `-`}
    //           </div>
    //         </TableCell>
    //         <TableCell>
    //           <div className="text-left max-w-md truncate ...">
    //             {tableData.category}
    //           </div>
    //         </TableCell>
    //         <TableCell>
    //           <div className="text-left max-w-md truncate ...">
    //             {`${tableData.images}` ? `${tableData.images}` : `-`}
    //           </div>
    //         </TableCell>

    //         <TableCell>
    //           {/* Menu button */}
    //           <button className="rounded-full text-slate-400 hover:text-slate-500">
    //             <span className="sr-only">Menu</span>
    //             <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
    //               <circle cx="16" cy="16" r="2" />
    //               <circle cx="10" cy="16" r="2" />
    //               <circle cx="22" cy="16" r="2" />
    //             </svg>
    //           </button>
    //         </TableCell>
    //       </TableRow>
    //     ))}
    //   </tbody>
    // </SelectTable>
  );
};

export default CategoryLists;
