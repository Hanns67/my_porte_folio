import  icon_analysis  from "/src/assets/images/competences/code_analysis.svg";
import  icon_database  from "/src/assets/images/competences/Database.svg";
import  icon_github  from "/src/assets/images/competences/Github.svg";
import  icon_server  from "/src/assets/images/competences/Server.svg";
import icon_smartphone  from "/src/assets/images/competences/Smartphone.svg";
import icon_trello from "/src/assets/images/competences/Trello.svg";
import icon_laptop from "/src/assets/images/competences/Laptop.svg";
export function ItemC({description,icon}) {
    return(
        <>
         <div className="item_list_competences">
               <div><img src={icon} alt="" style={{height:'24px',width:'24px'}}/></div> 
                <div><span >{description}</span></div>
         </div>
        </>
    )
    
}

export default function ListC() {
    return(
        <>
         <ItemC description={"Developpement mobile avec kotlin et Java natif,ainsi qu’avec flutter." } icon={icon_smartphone}></ItemC>
         <ItemC description={"Developpement web avec Html, css, javaScript, Bootsrap, React..."} icon={icon_laptop}></ItemC>
         <ItemC description={"Developpement backend avec SpringBoot, Firebase, Django, php..."} icon={icon_server}></ItemC>
         <ItemC description={"Gestion des bases de donnees avec SQL."} icon={icon_database}></ItemC>
         <ItemC description={"Versionning avec Git/Github/Gitlab."} icon={icon_github}></ItemC>
         <ItemC description={"Gestion des projets avec trello."} icon={icon_trello}></ItemC>
         <ItemC description={"Machin Learning avec python."} icon={icon_analysis}></ItemC>
        
        </>
    )
    
}