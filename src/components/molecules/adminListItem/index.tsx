import { Fragment } from "react/jsx-runtime";
import { useSetRecoilState } from "recoil";
import { adminNavState } from "../../../shared/recoil/atom";
import { AdminNavEnum } from "../../../shared/types";
import { listItems } from "./constant";

const AdminListItem = () => {
  const setAdminNavBar = useSetRecoilState(adminNavState);
  const handleListItem = (item: AdminNavEnum) => {
    setAdminNavBar(item);
  };
  return (
    <ul className="bg-white inline-block list-none p-0 max-w-fit rounded-xl">
      {listItems.map((l) => (
        <Fragment key={l.id}>
          <li className="flex justify-center items-center rounded-xl w-fit my-0 mx-8">
            {l.icon}{" "}
            <p
              className="text-xl ml-4 cursor-pointer font-semibold"
              onClick={() => handleListItem(l.id)}
            >
              {l.text}
            </p>
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

export default AdminListItem;
