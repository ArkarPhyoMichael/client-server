import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { HomePage } from "../pages";
import { AdminDashboardPage } from "../pages/admin";
import { CategoryList } from "../pages/admin/categories/all";
import { CategoryCreate } from "../pages/admin/categories/create";
import { CategoryEdit } from "../pages/admin/categories/edit";
import { GalleryList } from "../pages/admin/galleries/all";
import { GalleryCreate } from "../pages/admin/galleries/create";
import { GalleryEdit } from "../pages/admin/galleries/edit";
import { SignInPage } from "../pages/admin/slgnin";
import { QrPage } from "../pages/qrPage";

export const RootRouter: React.FC = () => {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery/:id" element={<QrPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="admin">
            <Route index element={<AdminDashboardPage />} />
            <Route path="categories">
              <Route index element={<CategoryList />} />
              <Route path="create" element={<CategoryCreate />} />
              <Route path="edit/:id" element={<CategoryEdit />} />
            </Route>
            <Route path="galleries">
              <Route index element={<GalleryList />} />
              <Route path="create" element={<GalleryCreate />} />
              <Route path="edit/:id" element={<GalleryEdit />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </ToastProvider>
  );
};
