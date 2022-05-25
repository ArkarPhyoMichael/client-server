import { useState } from "react";
import Modal, {
  ModalBody,
  ModalTitle,
} from "../../../components/Molecules/Modal";
import CategoryLists from "../../../components/Organisms/ItemManagement/CategoryManagement/CategoryLists";
import CreateCategory from "../../../components/Organisms/ItemManagement/CategoryManagement/CreateCategory";
import AdminLayout from "../../../components/Templates/AdminLayout";

const ItemManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AdminLayout>
      <div className="flex flex-row items-center justify-between mb-8">
        {/* Left: Title */}
        <div className="">
          <h1 className="text-lg tracking-wider md:text-xl text-slate-800">
            Category Management
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-6 py-2 space-x-2 tracking-wide bg-blue-600 rounded-md shadow-lg text-slate-200">
            Add Category
          </button>

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
      </div>

      {/* Cards */}
      <CategoryLists />
    </AdminLayout>
  );
};

export default ItemManagement;
