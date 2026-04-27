import { siteData } from "../data/siteData";

export default function Ticker() {
    return(
        <div className="overflow-hidden bg-accent text-white py-2">
            <div className="flex animate-ticker whitespace-nowrap gap-10">
                <span>This is a preview website created for { siteData.brand.name } </span>
                <span>This is a preview website created for { siteData.brand.name } </span>

                <span>This is a preview website created for { siteData.brand.name } </span>
                <span>This is a preview website created for { siteData.brand.name } </span>
            </div>
        </div>
    )
}