import Image from "next/image"
import ButtonRed from "./button"
import PromoteBox from "./promoteBox"


const ShopNow = () => {
  return (
    <section className="sm:flex gap-20 text-center">
        <Image src="/images/product.jpg" width={400} height={700} alt="product" />
        <div>
            <h1 className="text-primary font-bold sm:font-extrabold text-5xl">About Product</h1>
              <p className="text-primary font-thin text-sm text-left">Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile.
                 A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
                </p>
              <PromoteBox/>
                <div className="flex gap-20 mb-5">
                    <p className="flex flex-col items-center">
                        <span>Price</span>
                        <span>USD 50</span>
                    </p>
                    <p className="flex flex-col items-center">
                        <span>Unit</span>
                        <input defaultValue={2} type="number" className="w-10 sm:w-16 px-3 border border-primary" />
                    </p>
                    
                </div>
                <ButtonRed data={"Buy"} />
        </div>
        <hr />
    </section>
  )
}

export default ShopNow