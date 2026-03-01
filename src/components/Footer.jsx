import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="mt-20 md:mt-30 mx-auto px-4 md:px-8 lg:px-15 max-w-[95%] md:max-w-[90%] lg:max-w-[70%] text-white">
            <div className="flex gap-4 text-2xl mb-4 md:mb-6">
                <FontAwesomeIcon
                    icon={faFacebook}
                    className="hover:text-gray-300 cursor-pointer transition-colors"
                />
                <FontAwesomeIcon
                    icon={faInstagram}
                    className="hover:text-gray-300 cursor-pointer transition-colors"
                />
                <FontAwesomeIcon
                    icon={faTwitter}
                    className="hover:text-gray-300 cursor-pointer transition-colors"
                />
                <FontAwesomeIcon
                    icon={faYoutube}
                    className="hover:text-gray-300 cursor-pointer transition-colors"
                />
            </div>
            <ul className="flex list-none flex-wrap gap-2 md:gap-4 text-[#808080] text-xs md:text-[11px]">
                <li className="w-[50%] md:w-[25%] mb-2 md:mb-4 hover:text-white cursor-pointer transition-colors">
                    Audio Description
                </li>
                <li className="w-[50%] md:w-[25%] mb-2 md:mb-4 hover:text-white cursor-pointer transition-colors">
                    Help Center
                </li>
                <li className="w-[50%] md:w-[25%] mb-2 md:mb-4 hover:text-white cursor-pointer transition-colors">
                    Gift Cards
                </li>
                <li className="w-[50%] md:w-[25%] mb-2 md:mb-4 hover:text-white cursor-pointer transition-colors">
                    Media Center
                </li>
                <li className="w-[50%] md:w-[25%] mb-2 md:mb-4 hover:text-white cursor-pointer transition-colors">
                    Investor Relations
                </li>
                <li className="w-[50%] md:w-[25%] mb-2 md:mb-4 hover:text-white cursor-pointer transition-colors">
                    Jobs
                </li>
                <li className="w-[50%] md:w-[25%] mb-2 md:mb-4 hover:text-white cursor-pointer transition-colors">
                    Terms of Use
                </li>
                <li className="w-[50%] md:w-[25%] mb-2 md:mb-4 hover:text-white cursor-pointer transition-colors">
                    Privacy
                </li>
                <li className="w-[50%] md:w-[25%] mb-2 md:mb-4 hover:text-white cursor-pointer transition-colors">
                    Legal Notices
                </li>
                <li className="w-[50%] md:w-[25%] mb-2 md:mb-4 hover:text-white cursor-pointer transition-colors">
                    Cookie Preferences
                </li>
                <li className="w-[50%] md:w-[25%] mb-2 md:mb-4 hover:text-white cursor-pointer transition-colors">
                    Corporate Information
                </li>
                <li className="w-[50%] md:w-[25%] mb-2 md:mb-4 hover:text-white cursor-pointer transition-colors">
                    Contact Us
                </li>
            </ul>
            <div className="my-4 md:my-5 text-xs text-[#808080]">
                &copy; 1997-2026 Netflix, Inc.
            </div>
        </div>
    );
};

export default Footer;
