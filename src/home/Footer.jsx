import icon_github from "/src/assets/images/icons/Github.svg";
import icon_gitlab from "/src/assets/images/icons/Gitlab.svg";
import icon_linkdn from "/src/assets/images/icons/Linkedin.svg";
import icon_facebook from "/src/assets/images/icons/Facebook.svg";
import icon_gmail from "/src/assets/images/icons/Icon.svg";
import my_wordmark from '/src/assets/images/my_wordmark.png'
import { MyNet } from "./MyNetwork";
export function MyFooter() {
    return (
        <>
            <div className='footer'>
                <div className="first_section_footer section_footer">
                    <div className="word_mark_footer" >
                        <img src={my_wordmark} alt="" />
                    </div>
                    <span className="key_sentence_footer">Prennez contact avec moi des aujourd’hui</span>
                </div>
                <div className="my_network section_footer">
                  
                    <MyNet></MyNet>
                </div>

            </div>

        </>
    )
}