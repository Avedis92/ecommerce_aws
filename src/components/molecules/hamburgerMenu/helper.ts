export const getItemsStyles = (isNavSelected: boolean) => {
  const mainStyle = "hamburger-menuItem";
  const activeStyle = "hamburger-activeMenuItem";
  if (isNavSelected) {
    return `${mainStyle} ${activeStyle}`;
  }
  return `${mainStyle}`;
};
