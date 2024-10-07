import { Relax } from "@/components/icons";
import {ButtonRed, EndorsedBy, OurAmazingStory, OurMission, ProductReviews, PromoteBox, Reviews, ShopNow, VisitShop} from "@/components/ui";






export default function Home() {
  return (
    <section className="text-primary">
      <div className="bg-home-img bg-cover w-full h-screen text-primary flex flex-col gap-5 justify-center items-start p-5 md:p-40">
        <p>
          {"We're here to help you"}
          <span className="scale-50 md:scale-100">
            <Relax className="hidden md:block" />
            <span className="text-primary font-extrabold text-lg flex md:hidden ">Relax & Rest</span>
          </span>
        </p>
        <p>With the aid of our melatonin sleepstiq, we can assure you that
          you can get quality sleep
        </p>
        <ButtonRed data={"Visit Shop"} />
        
      </div>
      <EndorsedBy />
      <OurAmazingStory />
      <Reviews />
      <div className="relative scale-75">
        <ShopNow float={true}/>
        <span className="sm:absolute left-1/4 bottom-1 bg-white shadow-xl rounded-lg p-4 scale-125">
          <PromoteBox />
        </span>
      </div>
      <OurMission />
      <VisitShop />
      <ProductReviews />
    </section>
  );
}
