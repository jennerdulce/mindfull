import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { GiSpellBook } from 'react-icons/gi'
import { BsDot } from 'react-icons/bs'
import Fade from 'react-reveal/Fade'
import { createPost } from '../features/posts/postSlice'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'

function NewPost() {
    const { isLoading, isSuccess, isError, message } = useSelector((state) => state.post)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (isError) {
    //       toast.error(message)
    //     }

    //     if (isSuccess && user) {
    //       navigate('/') 
    //     }

    //     dispatch(reset())

    //   }, [user, isError, isSuccess, message, navigate, dispatch])

    let [formData, setFormData] = useState({
        title: '',
        mood: 'Happy',
        body: '',
        color: 'teal',
    })
    const [submittedStatus, setSubmittedStatus] = useState(false)
    let { title, mood, body, color } = formData

    useEffect(() => {
        if (submittedStatus && isSuccess) {
            navigate('/myjournal')
        }

    }, [submittedStatus, isSuccess, navigate])

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

    }, [isError, message])

    const handleChange = (e) => {
        let targetValue = e.target.value
        let targetName = e.target.name
        let newColor = ''

        if (targetName === "mood") {
            if (targetValue === "Happy") {
                newColor = "teal"
            } else if (targetValue === "Good") {
                newColor = "green"
            } else if (targetValue === "Okay") {
                newColor = "blue"
            } else if (targetValue === "Sad") {
                newColor = "red"
            } else if (targetValue === "Miserable") {
                newColor = "purple"
            }

            setFormData((prevState) => ({
                ...prevState,
                'color': newColor,
            }))
        }

        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const postData = {
            title,
            mood,
            body,
            color
        }

        dispatch(createPost(postData))
        setSubmittedStatus(true)

        if (isLoading) {
            return <Spinner />
        }
    }


    return (
        <div id='form-container'>
            <Fade>
                <h3 className='title' id='form-title'>Create an Entry</h3>
            </Fade>
            <Form id='form-body'>
                <div id='top-group-c'>
                    <FormGroup className='top-group'>
                        <Fade left>
                            <Label for="title">
                                Title
                            </Label>
                            <Input
                                name="title"
                                placeholder="Title"
                                type="text"
                                onChange={(e) => handleChange(e)}
                                value={title}
                            />
                        </Fade>
                    </FormGroup>
                    <FormGroup className='top-group'>
                        <Fade right>
                            <Label for="mood">Mood  <BsDot style={{ color: color }} id='post-icon' /> </Label>
                            <Input onChange={(e) => handleChange(e)} type="select" name="mood" id="exampleSelect">
                                <option>Happy</option>
                                <option>Good</option>
                                <option>Okay</option>
                                <option>Sad</option>
                                <option>Miserable</option>
                            </Input>
                        </Fade>
                    </FormGroup>
                </div>
                <FormGroup>
                    <Fade>
                        <Label for="body">
                            Body
                        </Label>
                        <Input
                            className='form-text'
                            rows="10"
                            name="body"
                            placeholder="Body"
                            type="textarea"
                            onChange={(e) => handleChange(e)}
                            value={body}
                        />
                    </Fade>
                </FormGroup>
                <Button id="btn" onClick={(e) => handleSubmit(e)}>
                    <GiSpellBook className="send" aria-hidden="true" />
                    <GiSpellBook className="send2" aria-hidden="true" />
                    <p>publish</p>
                </Button>
            </Form>
        </div>

    )
}

export default NewPost