import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="mt-30 mx-auto max-w-[70%] text-white">
      <div className="flex gap-4 text-2xl">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faYoutube} />
      </div>
      <ul className="flex list-none flex-wrap mt-4 text-[#808080] text-[11px]">
        <li className="w-[25%] mb-4">Audio Description</li>
        <li className="w-[25%]">Help Center</li>
        <li className="w-[25%]">Gift Cards</li>
        <li className="w-[25%]">Media Center</li>
        <li className="w-[25%] mb-4">Investor Relations</li>
        <li className="w-[25%]">Jobs</li>
        <li className="w-[25%]">Terms of Use</li>
        <li className="w-[25%]">Privacy</li>
        <li className="w-[25%]">Legal Notices</li>
        <li className="w-[25%]">Cookie Preferences</li>
        <li className="w-[25%]">Corporate Information</li>
        <li className="w-[25%]">Contact Us</li>
      </ul>
      <div className="my-5 text-xs text-[#808080]">&copy; 1997-2026 Netflix, Inc.</div>
    </div>
  )
}

export default Footer
