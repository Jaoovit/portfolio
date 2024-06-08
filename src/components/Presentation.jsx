import '../presentation.css'
import Icon from '@mdi/react'
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
import { mdiNoteTextOutline } from '@mdi/js';

export default function Presentation() {
    return (
        <div>
            <h3>HI &#128075; MY NAME IS JOÃO</h3>
            <h1>FRONT-END DEVELOPER</h1>
            <p className="icon">
                <p className="icon1"><a href="https://linkedin.com/in/joão-vitor-oliveira-205498198" ><Icon path={mdiLinkedin} size={2} /></a></p>
                <p className="icon2"><a href="https://github.com/Jaoovit"><Icon path={mdiGithub} size={2} /></a></p>
                <p className="icon3"><a href=""><Icon path={mdiNoteTextOutline} size={2} /></a></p>
            </p>
            <p>I&apos;m 26 years old I&apos;m a frontend developer with knowledge of user interfaces and experience in orojects that use JavaScriot libraries and Css frameworks.</p>
        </div>
    )
}