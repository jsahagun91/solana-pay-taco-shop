import Products from "../../components/Products";
import SiteHeading from "../../components/SiteHeading";

export default function ShopPage() {
    return (
        <div className="flex flex-col gap-8 max-w-4xl items-stretch m-auto pt-22">
            <SiteHeading>Asu Madre Tacos!</SiteHeading>
            <Products submitTarget="/shop/checkout" enabled={true} />
        </div>
    )
}