import Image from "next/image"
import ButtonRed from "./button"
import PromoteBox from "./promoteBox"


const ShopNow = ({float=false}:{float?:boolean}) => {
  return (
    <section className="sm:flex gap-20 text-center my-5">
        <Image src="/images/product.jpg" width={400} height={700} alt="product" />
        <div className="my-3">
            <h1 className="text-primary font-bold sm:font-extrabold text-5xl my-3">About Product</h1>
              <p className="text-primary font-thin text-sm text-left">Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile.
                 A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
                </p>
              {!float && <PromoteBox/>}
                <div className="flex gap-20 my-5">
                    <p className="flex flex-col items-center">
                        <span>Price</span>
                        <span>USD 50</span>
                    </p>
                    <p className="flex flex-col items-center">
                        <span className="text-center">Unit</span>
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