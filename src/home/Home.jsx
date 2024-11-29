import wordmark from '/src/assets/images/my_wordmark.svg'
import my_wordmark from '/src/assets/images/my_wordmark.png'
import dark_theme_icon from '/src/assets/images/icons/brightness-high.svg'
import light_theme_icon from '/src/assets/images/icons/moon-stars.svg'
import my_picture from '/src/assets/images/my_picture-removebg-preview.png'
import arrow_next_icon from '/src/assets/images/icons/arrow-down-circle.svg'
import my_person_img from '/src/assets/images/my_person.jpg'
import competence_img from '/src/assets/images/competences/competence.png'
import icon_plus from '/src/assets/images/icons/plus.svg'
import'/src/home/Home.css'
import gsap from 'gsap'
import React,{useEffect,useRef} from 'react'
import ListC  from './ListCompetences'
import { ListP } from './Listprojects'
import { Link } from 'react-router-dom'
import { MyNet } from './MyNetwork'
export  function NavBar() {
    const myWordmark=useRef(null)
    useEffect(()=>{
        gsap.to(myWordmark.current,{
            repeat:'-1',
            scale:'0.8',
            ease:'power1.Out'
        })
        
    },[]);

    return(
       <nav className="bg-grey-500 nav_bar  ">
                <div className="relative flex  items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex shrink-0 items-center">
                    <img className="h-12 w-auto" src={my_wordmark} alt="my wordmark" id='my_wordmark' ref={myWordmark}/>
                    </div>
                    <div className="hidden sm:ml-6 sm:block pl-20">
                    <div className="flex space-x-2">
                        
                        <a href="#m_pn" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white navigation_button" aria-current="page">About</a>
                        <a href="#m_skls" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white navigation_button">Skills</a>
                        <a href="#m_pts" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white navigation_button">Projects</a>
                        <a href="#m_skls" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white navigation_button">Services</a>
                        <a href="#m_ct" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white navigation_button">Contact</a>
                    </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button" className="relative rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <img src={dark_theme_icon} alt="dark_theme" />
                    
                    </button>
        
                    <div className="relative ml-3">
                    <div>
                        <button type="button" className="relative flex rounded-full bg-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">

                        <img className="size-8 rounded-full my_profile" src={my_picture} alt="" />
                        </button>
                    </div>
    
                    </div>
                </div>
                </div>

       </nav>
    )
    
}
export  function AccrocheSection() {
    const callingAction=useRef(null);
    const myPicture=useRef(null);
    const accroche_word1=useRef(null)
    const accroche_word2=useRef(null)
    const accroche_word3=useRef(null)

    useEffect(()=>{
            gsap.to(callingAction.current,{
                repeat:'-1',
                y:'-5',
                ease:'bounce.inOut'
            });
            const accrocheWord1=document.getElementById('accroche_word1')
            const accrocheWord2=document.getElementById('accroche_word2')
            const accrocheWord3=document.getElementById('accroche_word3')

            let accroche_word1_content=accroche_word1.current.textContent
            let accroche_word2_content=accroche_word2.current.textContent
            let accroche_word3_content=accroche_word3.current.textContent
            const tl1=gsap.timeline()
    
        tl1.to(myPicture.current,{ease:'circ.inOut',scale:'1.2'})
        .to(myPicture.current,{ease:'circ.inOut',scale:'1'})

        accroche_word1.current.textContent=""
        const tl=gsap.timeline()
        const tl2=gsap.timeline()
        const tl3=gsap.timeline()
        let element,s
        var l1=accroche_word1_content.length;
        var l2=accroche_word2_content.length;
        var l3=accroche_word3_content.length;
        let i=0
        let j=0
        let k=0
        accrocheWord1.textContent=" "
        accrocheWord2.textContent=" "
        accrocheWord3.textContent=" "
        while (i<l1||j<l2||k<l3) {
            if (i<l1) {
                element=accroche_word1_content[i]
                s= document.createElement('span')
                s.textContent=element
                tl.to(s,{ease:'power1',y:'8'},'<0.1')
                accrocheWord1.appendChild(s)
                i=i+1   
            }
            if (j<l2) {
                element=accroche_word2_content[j]
                s= document.createElement('span')
                s.textContent=element
                tl2.to(s,{ease:'power1',y:'8'},'<0.1')
                accrocheWord2.appendChild(s)
                j=j+1   
            }
        
            if (k<l3) {
                element=accroche_word3_content[k]
                s= document.createElement('span')
                s.textContent=element
                tl3.to(s,{ease:'power1',y:'8'},'<0.1')
                accrocheWord3.appendChild(s)
                k=k+1   
            }
        }


      

    
    },[]);
    return(
        <div className='accroche_section_first relative flex items-center' id='as'>
            <div className='my_picture'>
                <img src={my_picture} alt="my_picture" ref={myPicture}/>
            </div>
            <div className='my_description' >
                     <div className='summary_description'>
                      <div id='accroche_word1' ref={accroche_word1}>Full Stack Develloper,</div>
                      <div id='accroche_word2'ref={accroche_word2}>Developper pour innover,</div>
                      <div id='accroche_word3' ref={accroche_word3}>Reste ma passion.</div>
                      </div>
                <div className='div_calling_action '>
                       <a href="/src/assets/Mon_cv.pdf"> <button><img src={arrow_next_icon} alt="icon_next" className='calling_action'ref={callingAction}/></button></a>
                </div>     

            </div>

           

     </div>
    )

    
}
export function MyPerson() {
    return(
        <>
        <div className='div_title_section'>
                <h1 className='title_section'>Vous avez un logiciel a implementer?</h1>
        </div>
        <div className='section_content'>
            <div className='section_img1'>
                <img src={my_person_img} alt="my_person" style={{height:"400px",width:"400px"}} />
            </div>
            <div className='section_description section_description1'>
            <h2> 
                <p>
                  
                        Alors vous etes au bon endroit, je suis la pour vous accompagner dans la digitalisation de vos projets.
                        
                        Je debute mon experience dans le developpement logiciel, a l’institut unniversitaire de technologie Fotso Victor de bandjoun(IUT-Fv) ou je me specialise en Genie informatique/Genie Logiciel.
                        Dans le cadre de ma formation je m’experimente dans plusieurs domaines tels que: Le developpement web et mobile, Le design graphique, L’implementation des systemes embarques et autres. 
                        De ce fait,je mene et participe a l’implementation de plusieurs projets telsque: une application mobile de livraison, des sites web vitrines,une application web de gestion de stock, une IA assiatante vocale...
                       Alors faites moi confiance des maintenant et soumettez moi vos projets.
              </p>
              </h2>
              <MyNet></MyNet>
            </div>
           
        </div>
        <div className='section_button'>
           <a href='src/assets/Mon_cv.pdf'><button style={{display:"flex",flexDirection:"row"}}><h2 style={{fontSize:"10"}}>En savoir plus </h2> <i><img src={icon_plus} alt="" style={{height:"30px",width:"30px"}} /></i></button></a>
        </div>
    
        </> 
    )
    
}
export function MyCompetence(){

  return( 
    <>
      <div className='div_title_section'>
                <h1 className='title_section'>Qu’es-ce que je sais faire?</h1>
        </div>
        <div className='section_content'>
            <div className='section_description list_competences section_description2'>
                <div className='item_list_competences'>
                    <ListC> </ListC>
                    
                </div>
            
            </div>
            <div className='section_img2'>
                <img src={competence_img} alt="my_competence" style={{height:"400px",width:"400px"}} />
            </div>
            
           
        </div>
        <div className='section_button'>
        <a href='src/assets/Mon_cv.pdf'><button style={{display:"flex",flexDirection:"row"}}><h2 style={{fontSize:"10"}}>En savoir plus </h2> <i><img src={icon_plus} alt="" style={{height:"30px",width:"30px"}} /></i></button></a>
        </div>
    
    </>)

}
export function Myprojects(){
    return(
        <>
            <div className='div_title_section'>
                    <h1 className='title_section'>Qu’es ce que j’ai deja eu a faire?</h1>
            </div>
            <div className='section_content'>
                    <ListP></ListP>
            </div>
        </>
    )
}

