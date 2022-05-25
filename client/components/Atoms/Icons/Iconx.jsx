import * as HIcons from "@heroicons/react/outline";

const Iconx = ({ icon, className }) => {
  const { ...icons } = HIcons;
  const TheIcon = icons[icon];
  return (
    <>
      <TheIcon className={`${className}`} aria-hidden="true" />
    </>
  );
};

export default Iconx;
