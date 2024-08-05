import { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { adminNavState } from "../../../shared/recoil/atom";
import { AdminNavEnum } from "../../../shared/types";
import AdminListItem from "../../molecules/adminListItem";
import AdminAddProduct from "../../organisms/adminAddProductForm";

const AdminPage = () => {
  const adminNav = useRecoilValue(adminNavState);

  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <div className="flex gap-x-8">
          <AdminListItem />
          {adminNav === AdminNavEnum.ADD_PRODUCT ? <AdminAddProduct /> : null}
        </div>
      </Suspense>
    </>
  );
};

export default AdminPage;
