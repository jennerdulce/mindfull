import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import {
  Card, 
  CardImg,
  CardText, 
  CardSubtitle, 
  CardBody,
  CardTitle
} from 'reactstrap';
// import Ivan from '../../../assets/images/Ivan.png'

function AboutUs() {
    return (
        <div id='abus-container'>
            <h3 className='title'>About Us</h3>
            <div className='cards-container'>
                <Card className='ab-cards'
                    style={{ width: '30rem' }}>
                    <CardImg className='ab-card-img' src={'https://media-exp1.licdn.com/dms/image/C5603AQGRNYITByS-XQ/profile-displayphoto-shrink_800_800/0/1656088665648?e=1663200000&v=beta&t=CRLkqXw1FqCPTTwvOchErmb8bhmiSVamvHS6bLvRg1U'} />
                    <CardBody>
                        <CardTitle className='ab-card-t'>Nic Last</CardTitle>
                        <CardSubtitle className='ab-card-s'>Design Lead</CardSubtitle>
                        <CardText>I am a Junior Full Stack Developer currently honing my skills in Ruby and React at LEARN Academy. Right out of high school I jumped into the tech industry by self-teaching myself HTML, CSS, and JS. I am driven by my love for building things from scratch and learning new subjects. I have great communication skills from working in the restaurant industry for 2 years and am quick to pick up new things. I am a team worker and a hard worker, doing every task to the best of my ability.
                            <a className='ab-icons'
                                href='https://github.com/niclast7611'><AiFillGithub />
                            </a>
                            <a className='ab-icons'
                                href='https://www.linkedin.com/in/nicolas-last-095099239/'><AiFillLinkedin />
                            </a>
                        </CardText>
                    </CardBody>
                </Card>

                <Card className='ab-cards'
                    style={{ width: '30rem' }}>
                    {/* <CardImg className='ab-card-img' src={Ivan} /> */}
                    <CardBody>
                        <CardTitle className='ab-card-t'>Ivan Ortega</CardTitle>
                        <CardSubtitle className='ab-card-s'>Tech Lead</CardSubtitle>
                        <CardText>I started as a young optimist of anything and everything I thought of. From self-teaching sports, gaming, music, and most anything I know, it’s a journey well learned and appreciated. If I want it, I go after it. Never give up because It’s better to have no regrets than any at all. I’m in the process of being a developer as well, which I see to marry with music and create something astounding and inspirational. Put me in any challenging position and I will always find a way. I am always looking on the bright side because there is always something to be appreciative about.
                            <a className='ab-icons'
                                href='https://mail.google.com/mail/u/0?ui=2&ik=ca153d4ae4&attid=0.1&permmsgid=msg-f:1738910347711445987&th=1821d9bf83977be3&view=att&disp=safe&realattid=f_l5u581tu0'><AiFillGithub />
                                </a>
                            <a className='ab-icons'
                                href='https://www.linkedin.com/in/ivanocreates/'><AiFillLinkedin />
                                </a>
                        </CardText>
                    </CardBody>
                </Card>

                <Card className='ab-cards'
                    style={{ width: '30rem' }}>
                    <CardImg className='ab-card-img' src={'https://avatars.githubusercontent.com/u/61197981?v=4'} />
                    <CardBody>
                        <CardTitle className='ab-card-t'>Jenner Dulce</CardTitle>
                        <CardSubtitle className='ab-card-s'>Product Manager</CardSubtitle>
                        <CardText>Fullstack JavaScript Developer and U.S. Navy Veteran with a background of adaptability in various industries. Transitioning from healthcare to the tech industry, I am looking to prove my worth as a software developer by combining previous experiences with new programming knowledge to develop applications that focus on efficiency, scalability, and creativity.
                            <a className='ab-icons'
                                href='https://github.com/jennerdulce'><AiFillGithub />
                            </a>
                            <a className='ab-icons'
                                href='https://www.linkedin.com/in/jennerdulce'><AiFillLinkedin />
                            </a>
                        </CardText>
                    </CardBody>
                </Card>

                <Card className='ab-cards'
                    style={{ width: '30rem' }}>
                    <CardImg className='ab-card-img' src={'https://media-exp1.licdn.com/dms/image/C4E03AQEsKyslkiOjtw/profile-displayphoto-shrink_800_800/0/1656088885702?e=1663200000&v=beta&t=lPa9nSu-K5wi7XPdW4TL7XEzGDkNpQulbr_adKAGylw'} />
                    <CardBody>
                        <CardTitle className='ab-card-t'>Davon Kennedy</CardTitle>
                        <CardSubtitle className='ab-card-s'>Project Manager</CardSubtitle>
                        <CardText>My name is Davon Kennedy. I'm from Detroit MI, I'm a student at Learn Academy and I'm excited to hop into the tech industry and gain more experience as I go. I possess many skills as a developer such as critical thinking, problem-solving, active listening, flexibility, and optimism. My name is Davon Kennedy. I'm from Detroit MI, I'm a student at Learn Academy and I'm excited to hop into the tech industry and gain more experience as I go. I possess many skills as a developer such as critical thinking, problem-solving, active listening, flexibility, and optimism.
                            <a className='ab-icons'
                                href='https://github.com/DavonKenn'><AiFillGithub />
                            </a>
                            <a className='ab-icons'
                                href='https://www.linkedin.com/in/davon-kennedy-893b1b242/'><AiFillLinkedin />
                            </a>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default AboutUs