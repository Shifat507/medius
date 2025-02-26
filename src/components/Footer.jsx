import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
    return (
        <footer className=" text-gray-800 py-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className=" grid md:grid-cols-4 gap-8 ">
                    {/* Company Overview */}
                    <div>
                        <h2 className="text-xl font-bold text-green-700">Better</h2>
                        <p className="text-sm mt-2">
                            Better is a family of companies serving all your homeownership needs.
                        </p>
                        <div className="mt-4 space-y-2">
                            <div>
                                <p className="text-sm font-semibold text-green-700">
                                    Better <span className="text-gray-700">Mortgage</span>
                                </p>
                                <p className="text-[10px] text-gray-600">We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-green-700">
                                    Better <span className="text-gray-700">Real Estate</span>
                                </p>
                                <p className="text-[10px] text-gray-600">Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-green-700">
                                    Better <span className="text-gray-700">Cover</span>
                                </p>
                                <p className="text-[10px] text-gray-600">Shop, bundle, and save on insurance coverage for home, auto, life, and more.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-green-700">
                                    Better <span className="text-gray-700">Inspect</span>
                                </p>
                                <p className="text-[10px] text-gray-600">Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-green-700">
                                    Better <span className="text-gray-700">Settlement Services</span>
                                </p>
                                <p className="text-[10px] text-gray-600">Get transparent rates when you shop for title insurance all in one convenient place.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-bold text-lg">Resources</h3>
                        <ul className="mt-2 space-y-2 text-sm">
                            {[
                                "Home affordability calculator",
                                "Mortgage calculator",
                                "Free mortgage calculator",
                                "Mortgage calculator with taxes",
                                "Mortgage calculator with PMI",
                                "Rent vs buy calculator",
                                "HELOC payment calculator",
                                "HELOC vs cash-out refinance calculator",
                                "Buy a home",
                                "Sell a home",
                                "Get home inspection",
                            ].map((item) => (
                                <li key={item} className="hover:text-green-600 cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-bold text-lg">Company</h3>
                        <ul className="mt-2 space-y-2 text-sm">
                            {[
                                "About Us",
                                "Careers",
                                "Media",
                                "Partner With Us",
                                "Learning Center",
                                "FAQs",
                                "Investor Relations",
                            ].map((item) => (
                                <li key={item} className="hover:text-green-600 cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Legal */}
                    <div>
                        <h3 className="font-bold text-lg">Contact Us</h3>
                        <div className="mt-2 text-sm space-y-2">
                            <p className="flex items-center gap-2">
                                <MdEmail className="text-green-600" />
                                hello@better.com
                            </p>
                            <p className="flex items-center gap-2">
                                <FaPhone className="text-green-600" />
                                415-523-8837
                            </p>
                            <p className="hover:text-green-600 cursor-pointer">FAQ</p>
                            <p className="hover:text-green-600 cursor-pointer">Glossary</p>
                        </div>

                        <h3 className="font-bold text-lg mt-6">Legal</h3>
                        <ul className="mt-2 space-y-2 text-sm">
                            {[
                                "NMLS Consumer Access",
                                "Privacy Policy",
                                "Terms of Use",
                                "Disclosures & Licensing",
                                "Affiliated Business",
                                "Browser Disclaimer",
                            ].map((item) => (
                                <li key={item} className="hover:text-green-600 cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Links & Terms */}
                <div className="my-8">
                    <hr />
                </div>
                <div className="">
                    <div className="flex items-center gap-4 mb-8">
                        <FiFacebook size={25} />
                        <GrInstagram size={25} />
                        <SlSocialLinkedin size={25} />
                    </div>

                    <div>
                        <p className="text-[10px]">1 Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See One Day Mortgage™ Terms and Conditions.

                            2Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See One Day Heloc™ Terms and Conditions.

                            3Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value.</p>
                    </div>
                    <div className="my-8">
                        <hr />
                    </div>
                    <div>
                        <p className="text-[10px]">© 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.

                            Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access

                            Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.

                            New York State Housing and Anti-Discrimination Notice

                            New York Standard Operating Procedures

                            Texas Real Estate Commission: Information About Brokerage Services | Consumer Protection Notice

                            Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.

                            Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.

                            Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s license numbers.

                            Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.

                            Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.

                            Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
