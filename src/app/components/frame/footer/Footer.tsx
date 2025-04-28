import FooterLinks from "./footer-links/FooterLinks"
import socialIcons, { supportData } from "./Footer.list"

export const Footer = () => {
  return (
    <footer className="bg-[#F4F6F9] py-5">
        <div className="mx-auto container border-b-1 border-gray-200 flex flex-col lg:flex-row">
            <div className="grid grid-cols-2 sm:grid-cols-3 
            gap-x-13 gap-y-8 pb-5 lg:pb-0 mb-8 lg:w-[70%]">
            {supportData.map((section) => (
  <div key={section.heading}>
    <h3 className="text-[14px] font-[600] pb-5">{section.heading}</h3>
    <ul className="space-y-3">
      {section.links.map((link) => (
        <li className="text-[12px]" key={link}>{link}</li>
      ))}
    </ul>
  </div>
))}

            </div>
            <div className="lg:w-[30%] lg:pl-6 border-t-1 lg:border-t-0 lg:border-l-1 border-gray-200 pt-6 lg:pt-0">
                <h3 className="text-sm font-[600] pb-2">Be the first to know</h3>
                <p className="pb-5 text-[12px]">Sign up to stay in the loop about the hottest deals, coolest new products, 
                    and exclusive sales events.</p>
                    <span className="text-blue-500 text-sm">How does Best Buy use my email address?</span>
                    <div className="pt-5 pb-7 flex">
                        <input type="text" placeholder="Email Address"
                        className="bg-white py-3 px-3 border-2" />
                        <button className="bg-[#0046be] w-20
                         text-white py-2  px-3 text-sm font-[500]">Sign Up</button>
                    </div>
                    <div className="flex flex-wrap gap-11.5">
  {socialIcons.map((item, index) => (
    <div key={index} className="flex">
      <item.icon className="text-lg transition" />
    </div>
  ))}
</div>
            </div>
        </div>
        <div className="bg-[#F4F6F9]">
          <FooterLinks />
        </div>
    </footer>
  )
}
