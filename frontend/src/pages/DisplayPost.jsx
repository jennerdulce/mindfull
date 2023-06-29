import React, { useEffect, useState } from 'react'
import { NavLink, Redirect, useNavigate } from 'react-router-dom'
import { GoPrimitiveDot } from 'react-icons/go'
import { BsCalendar, BsClock } from 'react-icons/bs'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import { getPost, deletePost } from "../features/posts/postSlice" // Create functionality to get a single post

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
    const { isLoading, isError, message } = useSelector((state) => state.post)
    const [post, setPost] = useState('')
    const [modal, setToggleModal] = useState(false)

    useEffect(() => {
      if(isError) {
        console.log('ERROR: ', message)
      }
  
      if (!user) {
        navigate('/login')
      }
  
      setPost(dispatch(getPost()))
  
    }, [post, user, isError, message, dispatch, navigate])

    useEffect(() => {
        setToggleModal(!modal)
    }, [modal])
  
    if(isLoading) {
      return <Spinner />
    }

    return (
        <>
            <Modal isOpen={modal} toggle={() => {setToggleModal()}}>
                <ModalHeader toggle={this.toggle}>Are you sure you want to delete this journal?</ModalHeader>
                <ModalFooter>
                    <Button id='s-d-button' onClick={() => dispatch(deletePost(id))}>Forget</Button>{' '}
                    <Button id='s-c-button' onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <div id='show-body'>
                {user &&
                    <Card
                        id='show-card'
                        style={{ width: '100%', height: 'fit-content' }}>
                        <CardBody>
                            <Zoom>
                                <CardTitle className='title' id='show-title'>{post.title}</CardTitle>
                            </Zoom>
                            <CardSubtitle className='show-sub'>
                                <BsCalendar className='show-icons' />{` ${post.created_at.slice(0, 10)}`}</CardSubtitle>
                            <CardSubtitle className='show-sub'>
                                <BsClock className='show-icons' />{` ${post.created_at.slice(11, 16)}`}</CardSubtitle>
                            <CardSubtitle className='show-mood'>{post.mood} <GoPrimitiveDot className='show-icons' style={{ color: post.color }} /></CardSubtitle>
                            <CardText className='show-text'>{post.body}</CardText>
                            {/* <Button className='show-buttons'>
                                <NavLink className='navlink-show' to={'/postindex'}> Go Back </NavLink>
                            </Button> */}
                            {/* <Button className='show-buttons'>
                                <NavLink className='navlink-show' to={`/postedit/${this.props.post.id}`}> Edit Entry </NavLink>
                            </Button> */}
                            <Button className='show-buttons' onClick={this.toggle}>
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