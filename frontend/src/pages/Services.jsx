import React from 'react'
import {
    Card, 
    CardText,
    CardTitle, 
    CardSubtitle, 
    Button
  } from 'reactstrap'

import Fade from 'react-reveal/Fade'

function Services() {
          return (
            <div id='services-container'>
                <h1 className='title'>Services</h1>
                <Fade bottom>
                    <Card className='services-c'>
                        <CardTitle className='sc-title'>Mind & Body</CardTitle>
                        <CardText>
                            Stressed and isolated? Try expressing your thoughts and feelings in writing.
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://greatergood.berkeley.edu/article/item/how_journaling_can_help_you_in_hard_times</CardSubtitle>
                        <a href='https://greatergood.berkeley.edu/article/item/how_journaling_can_help_you_in_hard_times' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className='services-c'>
                        <CardTitle className='sc-title'>Anxiety & Depression Association of America</CardTitle>
                        <CardText>
                        Anxiety is as common among older adults as among the young. Generalized anxiety disorder (GAD) is the most common anxiety disorder among older adults, though anxiety disorders in this population are frequently associated with traumatic events such as a fall or acute illness. Read the best way to treat anxiety disorders in older adults.
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://adaa.org/understanding-anxiety/facts-statistics</CardSubtitle>
                        <a href='https://adaa.org/understanding-anxiety/facts-statistics' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className='services-c'>
                        <CardTitle className='sc-title'>Web MD</CardTitle>
                        <CardText>
                            It’s common for people to have other medical or mental health problems along with depression, such as anxiety, obsessive compulsive disorder, panic disorder, phobias, substance use disorders, and eating disorders. If you or a loved one has symptoms of depression or another mental illness, talk to your doctor. Treatments can help.
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://www.webmd.com/depression/guide/what-is-depression</CardSubtitle>
                        <a href='https://www.webmd.com/depression/guide/what-is-depression' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className='services-c'>
                        <CardTitle className='sc-title'>The Tribe</CardTitle>
                        <CardText>
                            At TherapyTribe,they believe that individuals become
                            empowered to help themselves and others when they feel a
                            part of something larger. Their free online support
                            community offers members a convenient and safe place to
                            connect. They’ve combined members from five
                            long-standing support websites to create one fantastic
                            wellness community.
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://support.therapytribe.com/</CardSubtitle>
                        <a href='https://support.therapytribe.com/' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className='services-c'> 
                        <CardTitle className='sc-title'>Nami (National alliance in mental health)</CardTitle>
                        <CardText>
                            NAMI, the National Alliance on Mental Illness, is the
                            nation’s largest grassroots mental health organization
                            dedicated to building better lives for the millions of
                            Americans affected by mental illness.
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://www.nami.org/Home</CardSubtitle>
                        <a href='https://www.nami.org/Home' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className='services-c'>
                        <CardTitle className='sc-title'>Better Help</CardTitle>
                        <CardText>
                            Makes professional therapy accessible, affordable, and
                            convenient — so anyone who struggles with life’s
                            challenges can get help, anytime and anywhere.
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://www.betterhelp.com/</CardSubtitle>
                        <a href='https://www.betterhelp.com/' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className='services-c'>
                        <CardTitle className='sc-title'>PostpartumProgress</CardTitle>
                        <CardText>
                            Postpartum is the world’s most widely-read blog
                            dedicated to maternal mental illness.
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://postpartumprogress.com/about</CardSubtitle>
                        <a href='https://postpartumprogress.com/about' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className='services-c'>
                        <CardTitle className='sc-title'>DBSA(Depression and Bipolar Support Alliance)</CardTitle>
                        <CardText>
                            DBSA provides hope, help, support, and education to
                            improve the lives of people who have mood disorders.
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://www.dbsalliance.org/education/</CardSubtitle>
                        <a href='https://www.dbsalliance.org/education/' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className='services-c'>
                        <CardTitle className='sc-title'>988Suicide&crisisLifeline</CardTitle>
                        <CardText>
                            The Lifeline provides 24/7, free and confidential
                            support for people in distress, prevention and crisis
                            resources for you or your loved ones, and best practices
                            for professionals in the United States.
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://988lifeline.org/</CardSubtitle>
                        <a href='https://988lifeline.org/' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className='services-c'>
                        <CardTitle className='sc-title'>Healthunlocked</CardTitle>
                        <CardText>
                            Imagine a world where you can tap into the health
                            experiences of millions of people – and translate these
                            into an action plan with the support of peers and
                            patient organisations.
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://healthunlocked.com/</CardSubtitle>
                        <a href='https://healthunlocked.com/' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className='services-c'>
                        <CardTitle className='sc-title'>Greater Good</CardTitle>
                        <CardText>
                        Greater Good magazine is published by the Greater Good Science Center (GGSC) at the University of California, Berkeley. Since 2001, the GGSC has been at the fore of a new scientific movement to explore the roots of happy and compassionate individuals, strong social bonds, and altruistic behavior—the science of a meaningful life.
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://greatergood.berkeley.edu/</CardSubtitle>
                        <a href='https://greatergood.berkeley.edu/' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className='services-c'>
                        <CardTitle className='sc-title'>ADAA (Anxiety & Depression Association of America)</CardTitle>
                        <CardText>
                        ADAA is an international nonprofit organization dedicated to the prevention, treatment, and cure of anxiety, depression, OCD, PTSD, and co-occurring disorders through the alignment of science, treatment, and education.
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://adaa.org/about-adaa</CardSubtitle>
                        <a href='https://adaa.org/about-adaa' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className='services-c'>
                        <CardTitle className='sc-title'>WHO (World Health Organization)</CardTitle>
                        <CardText>
                        WHO is the United Nations agency that connects nations, partners and people to promote health, keep the world safe and serve the vulnerable – so everyone, everywhere can attain the highest level of health. 
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://www.who.int/</CardSubtitle>
                        <a href='https://www.who.int/' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className='services-c'>
                        <CardTitle className='sc-title'>URMC (University of Rochester Medical Center)</CardTitle>
                        <CardText>
                        The University of Rochester Medical Center (URMC) is one of the nation’s leading academic medical centers. It forms the centerpiece of the University of Rochester’s health research, teaching and patient care missions.
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://www.urmc.rochester.edu/encyclopedia.aspx</CardSubtitle>
                        <a href='https://www.urmc.rochester.edu/encyclopedia.aspx' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className='services-c'>
                        <CardTitle className='sc-title'>Everyday Health</CardTitle>
                        <CardText>
                        Do you sometimes worry so much that it interferes with your everyday activities? Or feel so blue that it completely clouds your outlook? Do you often experience these or similar feelings together? You’re not the only one.
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://www.everydayhealth.com/anxiety/anxiety-and-depression.aspx</CardSubtitle>
                        <a href='https://www.everydayhealth.com/anxiety/anxiety-and-depression.aspx' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card className='services-c'>
                        <CardTitle className='sc-title'>American Psychological Association</CardTitle>
                        <CardText>
                        APA is the leading scientific and professional organization representing psychology in the United States, with more than 133,000 researchers, educators, clinicians, consultants, and students as its members.
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://www.apa.org/</CardSubtitle>
                        <a href='https://www.apa.org/' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card>
                </Fade>
                <Fade bottom>
                    <Card id='last-card'>
                        <CardTitle className='sc-title'>Zencare</CardTitle>
                        <CardText>
                            Zencare started as a solution to a common problem: it's
                            difficult to find a great-fitting therapist through an
                            online search.Founder Yuri Tomikawa began Zencare after
                            spending weeks looking for the right therapist. Our goal is
                            to remove the guesswork and logistical hassle from the
                            therapist search, providing a smooth and empowering
                            experience.
                        </CardText>
                        <CardSubtitle className='sc-subtitle'>https://zencare.co/</CardSubtitle>
                        <a href='https://zencare.co/' target='_blank'>
                            <Button className='button-serv'>Learn More</Button>
                        </a>
                    </Card> 
                </Fade>
            </div>
        )

}

export default Services