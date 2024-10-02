import { Relax } from "@/components/icons";
import {ButtonRed} from "@/components/ui";
import EndorsedBy from "@/components/ui/EndorsedBy";





export default function Home() {
  return (
    <>
      <div className="bg-home-img bg-cover w-full h-screen text-primary flex flex-col justify-center items-start p-5 md:p-40">
        <p>
          {"We're here to help you"}
          <span className="scale-50 md:scale-100">
            <Relax className="hidden md:block" />
            <span className="text-primary font-extrabold text-lg block md:hidden ">Relax & Rest</span>
          </span>
        </p>
        <p>With the aid of our melatonin sleepstiq, we can assure you that
          you can get quality sleep
        </p>
        <ButtonRed data={"Visit Shop"} />
        
      </div>
      <EndorsedBy />
    </>
  );
}
