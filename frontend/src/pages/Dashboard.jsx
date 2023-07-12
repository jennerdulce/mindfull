import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import Chart from '../components/Chart'
import { NavLink } from 'react-router-dom' // fix this to navigate? unless if it works.. then keep
import { AiOutlineArrowRight } from 'react-icons/ai'
import {
    Card,
    CardHeader,
    CardBody,
    CardText,
    CardTitle,
    Button,
    CardFooter
} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../features/posts/postSlice'


function Dashboard() {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post)
    const [moods, setMoods] = useState({
        good: 0,
        sad: 0,
        okay: 0,
        miserable: 0,
        happy: 0
    })
    const [quotes, setQuotes] = useState([])
    const [currentQuote, setCurrentQuote] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isHidden, setIsHidden] = useState(true)

    const generateChartInfo = useCallback((userPosts) => {
        if (userPosts.length > 0) {
            userPosts.forEach(post => {
                let currentPostMood = post.mood.toLowerCase()
                moods[currentPostMood] = moods[currentPostMood] + 1
            })
        }
    }, [moods])

    const getQuotes = async () => {
        const response = await axios.get('https://type.fit/api/quotes')
        console.log('REPSONSE: ', response)
        if (response.data) {
            try {
                let payload = response.data
                let happyQuotes = payload.filter(quote => {
                    return quote.text.includes('happy') || quote.text.includes('happiness')
                })
                setQuotes(happyQuotes)
                setIsLoading(false)

            } catch (error) {
                console.log(error)
                throw new Error('Unable to retrieve quotes...')
            }

        }

    }

    const randomQuote = useCallback(() => {
        let randomNum = Math.floor(Math.random() * (quotes.length - 1)) + 1;
        let quote = quotes[randomNum]
        setIsHidden(false)
        setCurrentQuote(quote)
    }, [quotes])

    useEffect(() => {
        if(posts && posts.length > 0){
            generateChartInfo(posts)
        }
        
    }, [dispatch, generateChartInfo, posts])

    useEffect(() => {
        randomQuote()
    }, [quotes, randomQuote])

    useEffect(() => {
        dispatch(getPosts())
        getQuotes()
    }, [dispatch])

    useEffect(() => {
        console.log("RANDOM QUOTE: ", currentQuote)
        
    }, [currentQuote])

    

    return (
        <div id='account-container'>
            <h3 className='title'>My Account</h3>

            <div id='account-group-1'>
                <Card style={{ width: '30rem', height: '25rem' }}
                    className='project-card'>
                    <NavLink to="/postindex">
                        <CardTitle className='project-card-content'>View Your Journal <AiOutlineArrowRight /></ CardTitle>
                    </NavLink>
                </Card>
                <Card
                    id="quotes"
                    style={{ width: '30rem', height: '25rem' }} >
                    <CardHeader><h2>Quote</h2></CardHeader>
                    {isLoading &&
                        <p>Loading...</p>
                    }
                    {!isLoading &&
                        <div>
                            <CardBody id='cq-body'>
                                <CardText
                                    className={isHidden ? 'cq-text' : 'cq-text-display'}>
                                    {currentQuote &&
                                    `"${currentQuote.text}"`
                                    }
                                    {currentQuote &&
                                    <h4>-{currentQuote.author}</h4>
                                    }
                                </CardText>
                            </CardBody>
                            <CardFooter id='cq-footer'>
                                <Button id='button-q' onClick={() => randomQuote()}>Generate Quote</Button>
                            </CardFooter>
                        </div>
                    }
                </Card>
            </div>
            <Card
                id='chart-card'
                style={{ width: '78%', height: '78%' }}>
                <Fade bottom>
                    <Chart moods={moods} />
                </Fade>
            </Card>
        </div>
    )
}

export default Dashboard