import icon_extend from "/src/assets/images/icons/Arrow Down Contained 2.svg";
import img_dbs from "/src/assets/images/projects/dbs.png";
import img_camfaas from "/src/assets/images/projects/camfaas.png";
import img_gestion_stock from "/src/assets/images/projects/gestion_stock.png";
import img_ai_assitant_vocal from "/src/assets/images/projects/ai_assistant_vocal.jpg";
import img_java_app_message from "/src/assets/images/projects/application_messagerie.webp";
import { TECarousel, TECarouselItem, TERipple } from "tw-elements-react";
export function ItemP({ description, icon, image }) {
    return (
        <>
            <div className="item_list_projects">
                <div><img src={image} alt="" style={{ height: '100px', width: '100px' }} /></div>
                <div style={{width: '130px' }}><span >{description}</span></div>
                <div className="icon_item_project"><img src={icon} alt="" style={{ height: '30px', width: '30px', marginLeft: '50px' }} /></div>
            </div>
        </>
    )

}
export function ListP() {
    return (
        <>
            <div className="list_projects">
                {/*  <TECarousel showControls showIndicators ride="carousel">
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                <TECarouselItem
                        itemID={1}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[60ms] ease-in-out motion-reduce:transition-none"
                    >
                    <ItemP description={"Application mobile de livraison(DBS)"} icon={icon_extend} image={img_dbs}></ItemP>
                </TECarouselItem>

                <TECarouselItem
                        itemID={2}
                        className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <ItemP description={"Application web de gestion de stock"} icon={icon_extend} image={img_gestion_stock}></ItemP>
                
                </TECarouselItem>

                <TECarouselItem
                        itemID={3}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                    <ItemP description={"Site web de l’organisation camfaas(camfaasweb)"} icon={icon_extend} image={img_camfaas}></ItemP>
                </TECarouselItem>

                <TECarouselItem
                        itemID={4}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <ItemP description={"Mini application de messagerie "} icon={icon_extend} image={img_java_app_message} ></ItemP>  
                </TECarouselItem>
                </div>
            </TECarousel> */}
                <ItemP description={"Application mobile de livraison(DBS)"} icon={icon_extend} image={img_dbs}></ItemP>
                <ItemP description={"Application web de gestion de stock"} icon={icon_extend} image={img_gestion_stock}></ItemP>
                {/* <ItemP description={"Site web de l’organisation camfaas(camfaasweb)"} icon={icon_extend} image={img_camfaas}></ItemP> */}
                <ItemP description={"Ai assistant vocal"} icon={icon_extend} image={img_ai_assitant_vocal}></ItemP>
                <ItemP description={"Mini application de messagerie "} icon={icon_extend} image={img_java_app_message}></ItemP>
            </div>


        </>
    )

}