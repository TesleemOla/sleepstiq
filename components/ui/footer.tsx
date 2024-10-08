import Link from "next/link";
import { Logo, Facebook, Twitter, Gplus, LinkedIn } from "../icons";

export default function Footer(){
    return <footer className="bg-primary text-white w-screen sm:w-full px-4">
        <div className="flex justify-center py-5 scale-50 md:scale-100">
            <Logo loc="footer"/>
        </div>
        <div className="flex flex-col text-center items-center sm:flex-row gap-5 sm:flex-wrap justify-center">
        <div className="flex flex-col gap-7 basis-1/6">
            <p className="font-bold text-sm">COMPANY</p>
            <Link href="/about" className="sm:font-thin text-lg sm:text-xs">About</Link>
            <Link href="#" className="sm:font-thin text-lg sm:text-xs">Blog</Link>
            <Link href="#" className="sm:font-thin text-lg sm:text-xs">Contact</Link>
            <Link href="#" className="sm:font-thin text-lg sm:text-xs">Jobs</Link>
        
        </div>
        <div className="flex flex-col gap-7 flex-grow">
            <p className="font-bold text-sm">CONTACT</p>
            <p className="sm:font-thin text-lg sm:text-xs">Phone</p>
            <p className="text-xs font-extrabold">+234 708 507 3128</p>
            <p className="sm:font-thin text-lg sm:text-xs">Address</p>
            <p className="text-xs font-extrabold">16, Ogundipe Close, Upston Close</p>
        </div>
        <div className="flex flex-col gap-10 basis-2/6 flex-shrink w-1/2 sm:w-2/3">
            <p className="font-bold text-sm">CONSUMER ADVISORY</p>
            <p className="font-thin leading-loose text-xs sm:text-sm">
                    These statements have not been evaluated by the Food and Drug Administration.
                    This product is not intended to diagnose, treat, cure, or prevent any disease.
                    This product should be used only as directed on the label. 
                    All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. Results may vary.

                    By using our website or product, you agree to follow our <span className="text-blue-700">terms of service.</span>
            </p>
        </div>
            <div className="flex flex-col gap-7 basis-1/6">
            <p className="font-bold text-sm">GET IN TOUCH</p>
            <p className="sm:font-thin text-lg sm:text-xs">Feel free to get in touch with us via email</p>   
            <p className="text-sm font-extrabold">hello@sleepstiq.com</p>
            <span className="flex">
                <span className="rounded-round bg-blue-300 p-5 scale-50"><Facebook /></span>
                <span className="rounded-round bg-blue-300 p-5 scale-50"><Twitter /></span>
                <span className="rounded-round bg-blue-300 p-5 scale-50"><Gplus /></span>
                <span className="rounded-round bg-blue-300 p-5 scale-50"><LinkedIn /></span>
            </span>       
        </div>
        </div>
        
    </footer>
}

