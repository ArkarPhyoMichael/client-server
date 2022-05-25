import React from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { API } from "../../services";
import { SelectTable, TableCell, TableRow } from "../atoms/table";
export interface iconProps {
  id: string;
  path: string;
  galleryId: string;
  updatedAt: string;
  createdAt: string;
}
export interface categoryProp {
  id: string;
  name: string;
  userId?: any;
  imageId?: string;
  updatedAt?: string;
  createdAt?: string;
  icon?: iconProps;
}

interface categoryLstPorps {
  categories: categoryProp[];
  getCategories: () => void;
}

export const CategoryListComponent: React.FC<categoryLstPorps> = ({
  categories,
  getCategories,
}) => {
  const { addToast } = useToasts();
  const onDeleteAction = (id: string) => {
    try {
      const formData = new FormData();
      formData.append("id", id);
      API.post("/category/delete", formData).then((res) => {
        if (res.data && res.data.statusCode === 200) {
          addToast(res.data.message, {
            appearance: "success",
            autoDismiss: true,
          });
          getCategories();
        } else {
          addToast(res.data.message, {
            appearance: "warning",
            autoDismiss: true,
          });
        }
      });
    } catch (error) {
      addToast(JSON.stringify(error), {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };
  return (
    <div>
      <Link
        to="/admin/categories/create"
        type="submit"
        className="group relative max-w-sm  mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
        အသစ်ထည့်ရန်
      </Link>
      <SelectTable>
        <>
          <thead className="text-xs font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200">
            <TableRow>
              <>
                <TableCell isHeader={true}>
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Select all</span>
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                  </div>
                </TableCell>
                <TableCell isHeader={true}>
                  <span>Name</span>
                </TableCell>
                <TableCell isHeader={true}>
                  <span>Icon</span>
                </TableCell>
                <TableCell isHeader={true}>
                  <span>Created At</span>
                </TableCell>
                <TableCell isHeader={true}>
                  <span>Updated At</span>
                </TableCell>
                <TableCell
                  isHeader={true}
                  className="flex justify-center items-center content-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-gear"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                  </svg>
                </TableCell>
              </>
            </TableRow>
          </thead>
          <tbody className="text-sm divide-y divide-slate-200">
            {categories.map((c, i) => (
              <TableRow key={i}>
                <>
                  <TableCell>
                    <div className="flex items-center">
                      <label className="inline-flex">
                        <span className="sr-only">Select</span>
                        <input
                          id={c.id}
                          className="form-checkbox"
                          type="checkbox"
                          // onChange={tableData.handleClick}
                          // checked={tableData.isChecked}
                        />
                      </label>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-slate-800">{c.name}</div>
                  </TableCell>
                  <TableCell>
                    <img
                      src={c.icon?.path}
                      alt="icon"
                      className="w-auto h-8 rounded-full"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-slate-800">
                      {c.createdAt && new Date(c.createdAt).toDateString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-slate-800">
                      {c.updatedAt && new Date(c.updatedAt).toDateString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="w-full flex justify-center items-center content-center space-x-4">
                      <Link
                        to={`/admin/categories/edit/${c.id}`}
                        type="button"
                        className="appearance-none focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </Link>
                      <button
                        onClick={() => onDeleteAction(c.id)}
                        type="button"
                        className="appearance-none focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-archive"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                      </button>
                    </div>
                  </TableCell>
                </>
              </TableRow>
            ))}
          </tbody>
        </>
      </SelectTable>
    </div>
  );
};
