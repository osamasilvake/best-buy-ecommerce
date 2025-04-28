import { items } from "./IconMenu.list";
const IconMenu = () => {
  return (
    <ul className="flex gap-8 py-8 lg:py-4">
      {items.map(({ label, icon }) => (
        <li key={label} className="flex place-items-center gap-2.5">
          {icon}
          <p className="text-white font-[600]">{label}</p>
        </li>
      ))}
    </ul>
  );
};

export default IconMenu;
