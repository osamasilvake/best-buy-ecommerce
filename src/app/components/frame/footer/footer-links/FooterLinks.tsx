import Link from "next/link";
import { footerLinks } from "./FooterLinks.list";

const FooterLinks = () => {
  return (
    <div className="mx-auto container">
<p className="text-[12px] py-5 text-gray-600">© Best Buy Canada Ltd. Suite #102, 425 West 6th Avenue, Vancouver, BC V5Y 1L3

</p>
    <div className="flex flex-wrap">
      {footerLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-[12px] text-gray-600 border-l-2 px-2
           hover:underline"
        >
          {link.label}
        </Link>
      ))}
    </div>
    </div>
  );
};

export default FooterLinks;
