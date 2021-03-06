import { useState } from "react";
import { PlusIcon } from "@heroicons/react/outline";
import Modal, {
  ModalBody,
  ModalTitle,
} from "../../../components/Molecules/Modal";
import AdminLayout from "../../../components/Templates/AdminLayout";
import CreateCompany from "../../../components/Organisms/CreateCompany";

const Companies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <AdminLayout>
      <div className="flex flex-row items-center justify-between mb-8">
        {/* <div className="mb-8 sm:flex sm:justify-between sm:items-center"> */}
        {/* Left: Title */}
        <div className="">
          <h1 className="text-lg font-bold tracking-wider md:text-3xl text-slate-800">
            အေးဂျင့်
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-3 py-2 space-x-2 bg-blue-900 rounded-md shadow-lg text-slate-200">
            <PlusIcon className="w-3 h-3 lg:w-4 lg:h-4" />
            <span className="text-sm ">အေးဂျင့်ဖန်တီးပါ</span>
          </button>

          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ModalTitle> အေးဂျင့်ဖန်တီးပါ</ModalTitle>
            <ModalBody>
              <CreateCompany />
              {/* <CreateAgentUsers
                twoDcomissions={TwoDComissions}
                threeDComissions={ThreeDComissions}
                fetchUsers={fetchUsers}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              /> */}
            </ModalBody>
          </Modal>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6 space-y-12">
        {/* <AgentUserLists customers={users} fetchUsers={fetchUsers} /> */}
      </div>
    </AdminLayout>
  );
};

export default Companies;
