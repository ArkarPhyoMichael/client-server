import React, { useCallback, useEffect, useState } from "react";
import { DashboardWrapper } from "../../../components/modules/dashboardWrapper";
import {
  CategoryListComponent,
  categoryProp,
} from "../../../components/organisms/Categories";
import { API } from "../../../services";

export const CategoryList: React.FC = () => {
  const [categories, setcategories] = useState<categoryProp[]>();
  const getCategories = useCallback(() => {
    API.get("/category/all")
      .then((res) => {
        if (res.data && res.data.statusCode === 200) {
          const categoryData: categoryProp[] = res.data.data;
          setcategories(categoryData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <DashboardWrapper title="အမျိုးအစားများ">
      <div>
        {categories && <CategoryListComponent getCategories={getCategories} categories={categories} />}
      </div>
    </DashboardWrapper>
  );
};
