import facebookIcon from '../assets/facebookIcon.png'
import youtubeIcon from '../assets/youtubeIcon.png';
import twitterIcon from '../assets/twitterIcon.png';
import instagramIcon from '../assets/instagramIcon.png';


const Footer = () => {
  return (
    <div className="py-8 px-[4%] max-w-[1000px] my-0 mx-auto text-white">
      <div className="flex gap-5 my-10 mx-0 footer-icons w-10 cursor-pointer">
        <img src={facebookIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={youtubeIcon} alt="" />
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-sm md:text-base mb-8">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="text-gray-300 text-sm">
        &copy; 1997-{new Date().getFullYear()} Netflix, Inc.
      </p>
    </div>
  );
}

export default Footer