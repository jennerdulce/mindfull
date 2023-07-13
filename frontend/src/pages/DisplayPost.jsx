import React, { useEffect, useState } from 'react'
import { NavLink, Redirect, useNavigate } from 'react-router-dom'
import { BsDot } from 'react-icons/bs'
import { BsCalendar, BsClock } from 'react-icons/bs'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import { deletePost } from "../features/posts/postSlice" // Create functionality to get a single post

import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Modal,
    ModalHeader,
    ModalFooter
} from 'reactstrap';
import Zoom from 'react-reveal/Zoom'



function DisplayPost() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const { user } = useSelector((state) => state.auth)
    const { isLoading, isError, message, posts} = useSelector((state) => state.post)
    const post = posts.filter(post => { return post._id === id})[0]
    const [deleted, setDeleted] = useState('')
    const [modal, setToggleModal] = useState(false)

    const handleDelete = (postId) => {
        dispatch(deletePost(postId))
        setDeleted(true)
    }

    const toggleModal = () => {
        setToggleModal(!modal)
    }

    useEffect(() => {
      if(isError) {
        console.log('ERROR: ', message)
      }
  
      if (!user) {
        navigate('/login')
      }
  
    }, [user, isError, message, dispatch, navigate, id])

    useEffect(() => {
        if (deleted) {
            navigate('/myjournal')
        }
    }, [deleted, navigate])

    // ** SECOND MORE PREFERRED METHOD, COULD NOT GET IT WORKING **
    // ** WOULD RETRIEVE ONE POST FROM DB AND USE THE PAYLOAD **
    // ** I DO NOT THINK YOU CAN PASS QUERY PARAMETER IN GET REQUEST **
    // ** PROBLEM WITH CURRENT 
    // useEffect(() => {
    //     if (user) {
    //         dispatch(getPost(id))
    //     }
    // }, [dispatch, id, user])

    // useEffect(() => {
    //     console.log('POST: ', post)
    //     console.log('ID: ', id)
    //     console.log('POSTS: ', posts)
    // }, [dispatch, post, posts, id])

    if(isLoading) {
      return <Spinner />
    }

    return (
        <>
            <Modal isOpen={modal} toggle={() => toggleModal()}>
                <ModalHeader toggle={() => toggleModal()}>Are you sure you want to delete this journal?</ModalHeader>
                <ModalFooter>
                    <Button id='s-d-button' onClick={() => handleDelete(id)}>Forget</Button>{' '}
                    <Button id='s-c-button' onClick={() => toggleModal()}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <div id='show-body'>
                {(user && post) &&
                    <Card
                        id='show-card'
                        style={{ width: '100%', height: 'fit-content' }}>
                        <CardBody>
                            <Zoom>
                                <CardTitle className='title' id='show-title'>{post.title}</CardTitle>
                            </Zoom>
                            <CardSubtitle className='show-sub'>
                                <BsCalendar className='show-icons' />{` ${post.createdAt}`}</CardSubtitle>
                            <CardSubtitle className='show-sub'>
                                <BsClock className='show-icons' />{` ${post.createdAt}`}</CardSubtitle>
                            <CardSubtitle className='show-mood'>{post.mood} <BsDot className='show-icons' style={{ color: post.color }} /></CardSubtitle>
                            <CardText className='show-text'>{post.body}</CardText>
                            {/* <Button className='show-buttons'>
                                <NavLink className='navlink-show' to={'/postindex'}> Go Back </NavLink>
                            </Button> */}
                            {/* <Button className='show-buttons'>
                                <NavLink className='navlink-show' to={`/postedit/${this.props.post.id}`}> Edit Entry </NavLink>
                            </Button> */}
                            <Button className='show-buttons' onClick={() => toggleModal()}>
                                Forget Entry
                            </Button>
                        </CardBody>
                    </Card>
                }
            </div>
        </>
    )
}

export default DisplayPost