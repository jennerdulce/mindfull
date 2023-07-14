import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from 'reactstrap';
import { BsDot } from 'react-icons/bs'
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../features/posts/postSlice'
import Spinner from '../components/Spinner'

function MyJournal() {
    const dispatch = useDispatch()
    const { posts, isLoading } = useSelector((state) => state.post)
    const [filteredPosts, setFilteredPosts] = useState([])

    const filterChoice = (e) => {
        if (e.target.value === "All") {
            setFilteredPosts(posts)
        } else if (e.target.value !== "Date" || e.target.value !== "All") {
            let filteredPosts = posts.filter(post => {
                return post.mood === e.target.value
            })
            setFilteredPosts(filteredPosts)
        }
    }

    useEffect(() => {
        if(posts.length > 0){
            setFilteredPosts(posts)
        }

        if(posts.length === 0){
            setFilteredPosts([])
        }
    }, [dispatch, posts])

    useEffect(() => {
        getPosts()
    }, [])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            {/* {isLoading &&
                <Spinner />
            } */}
            <div id='index-page'>
                <h3 className='title'>My Entries</h3>
                <select onChange={(e) => filterChoice(e)} id='select'>
                    <option value="All">All</option>
                    <option value="Happy">Happy</option>
                    <option value="Good">Good</option>
                    <option value="Okay">Okay</option>
                    <option value="Sad">Sad</option>
                    <option value="Miserable">Miserable</option>
                </select>
                <div id='index-container'>
                    {filteredPosts &&
                        filteredPosts.map((currentPost, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    to={`/post/${currentPost._id}`}
                                    className='index-cards'>
                                    <Card
                                        style={{ width: '20rem', height: '18rem' }}
                                        key={index}>
                                        <CardBody>
                                            <CardTitle className='post-title'>{currentPost.title}</CardTitle>
                                            <div className='mood-div-c'>
                                                <CardSubtitle
                                                    className='post-mood'>
                                                    {currentPost.mood}</CardSubtitle>
                                                <BsDot style={{ color: currentPost.color }} className='post-icon' />
                                            </div>
                                            <CardText className='post-text'>{`${currentPost.body.slice(0, 150)} ...`}</CardText>
                                        </CardBody>
                                    </Card>
                                </NavLink>
                            )
                        })
                    }
                    {(filteredPosts.length < 1) &&
                        <div>
                            <h1>Begin your journey!</h1>
                            <NavItem className='nav-links'>
                                <NavLink to="/newpost" className='new-entry-button'>
                                    Add New Entry
                                </NavLink>
                            </NavItem>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default MyJournal