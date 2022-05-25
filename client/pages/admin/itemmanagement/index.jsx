import { useState } from "react";
import Iconx from "../../../components/Atoms/Icons/Iconx";
import Card, { CardBody, CardHeader } from "../../../components/Molecules/Card";
import Modal, {
  ModalBody,
  ModalTitle,
} from "../../../components/Molecules/Modal";
import CreateItem from "../../../components/Organisms/CreateItem";
import ItemLists from "../../../components/Organisms/ItemManagement/ItemList";
import AdminLayout from "../../../components/Templates/AdminLayout";

const ItemManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AdminLayout>
      <div className="flex flex-row items-center justify-between mb-8">
        {/* Left: Title */}
        <div className="">
          <h1 className="text-lg tracking-wider md:text-xl text-slate-800">
            Item Management
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-6 py-2 space-x-2 tracking-wide bg-blue-600 rounded-md shadow-lg text-slate-200">
            Add Item
          </button>

          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ModalTitle> Create Item</ModalTitle>
            <ModalBody>
              <CreateItem
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </ModalBody>
          </Modal>
        </div>
      </div>

      {/* Cards */}
      <ItemLists />
    </AdminLayout>
  );
};

export default ItemManagement;
