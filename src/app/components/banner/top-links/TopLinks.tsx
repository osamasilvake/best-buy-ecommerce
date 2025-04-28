const links = ["Orders Status", "Blog", "Buy Business", "Français"];

const TopLinks = () => {
  return (
    <ul className="flex gap-2 px-3 sm:px-0">
      {links.map((link) => (
        <li key={link} className="text-white font-[400] text-[12px]">
          {link}
        </li>
      ))}
    </ul>
  );
};

export default TopLinks;
