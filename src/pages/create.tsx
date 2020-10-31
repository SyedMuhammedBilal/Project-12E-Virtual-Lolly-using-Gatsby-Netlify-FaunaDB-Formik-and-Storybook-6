import { Field, Form, Formik, useFormik } from "formik"
import React, { useEffect, useRef, useState } from "react"
import Header from "../components/Header"
import { Lolly } from "../components/Lolly"
import "../styles/Create.css"
import * as Yup from "yup"
import { useMutation } from '@apollo/client'
import gql from "graphql-tag"
import Result from "../components/Result"

const ADD_LOLLY = gql`
    mutation addVCard(
        $c1: String!
        $c2: String!
        $c3: String!
        $rec: String!
        $sender: String!
        $msg: String!
    ) {
        addVCard(
            c1: $c1  
            c2: $c2
            c3: $c3
            rec: $rec
            sender: $sender
            msg: $msg
            ) {
            sender
            rec
            msg
            link
        }
    }
`;

const DisplayingErrorMessagesSchema = Yup.object().shape({
    rec: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    sender: Yup.string().required("Required").min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    msg: Yup.string().required('Required').min(2, 'Too Short')
});

const Create = () => {

    const [top, setTop] = useState("#d52358")
    const [middle, setMiddle] = useState("#e95946")
    const [bottom, setBottom] = useState("#deaa43")
    const [addVCard, { data }] = useMutation(ADD_LOLLY);

    const url = "https://api.netlify.com/build_hooks/5f9c62905d928d2b86c656cf"

    useEffect(() => {
        async function runHook() {
            const response = await fetch(url, {
                method: "POST",
            });
            console.log(response);
        }
        runHook();
    }, [data]);

    const recField:any = useRef();
    const senderField:any = useRef();
    const msgField:any = useRef();

    const formik = useFormik({
        initialValues: {
            rec: '',
            sender: '',
            msg: '',
        },
        validationSchema: DisplayingErrorMessagesSchema,
        onSubmit: (values) => {
            console.log(values.rec);
            console.log(values.sender);
            console.log(values.msg);
            addVCard({
                variables: {
                    c1:top, c2:middle, c3:bottom,
                    rec: values.rec,
                    sender: values.sender,
                    msg: values.msg
                }
            })
        }
    });
    
    console.log(data);

    return (
        <div className="create">
            <Header />
            <div className="lollyFormDiv">
                <div>
                    <Lolly top={top} middle={middle} bottom={bottom} />
                </div>
                {!data ? <> <div className="lollyFlavourDiv">
                    <label htmlFor="flavourTop" className="picker-label">
                        <input className='color-picker' type='color' value={ top } onChange={(e) => { setTop(e.target.value) }}/>
                    </label>

                    <label htmlFor="flavourTop" className="picker-label">
                        <input className='color-picker' type='color' value={ middle } onChange={(e) => { setMiddle(e.target.value) }}/>
                    </label>
                    <label htmlFor="flavourTop" className="picker-label">
                        <input className='color-picker' type='color' value={ bottom } onChange={(e) => { setBottom(e.target.value) }}/>
                    </label>
                </div>
                    <form className="form-container" onSubmit={formik.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="firstName">To</label>
                            <input
                                id="rec"
                                type="text"
                                placeholder="A lolly for..."
                                onChange={formik.handleChange}
                                value={formik.values.rec}
                            />
                        </div>
                        {formik.errors.rec ? <div className="error">{formik.errors.rec}</div> : null}
                        <div className='form-group'>
                            <label htmlFor="message">Say something nice</label>
                            <textarea
                                id="msg"
                                onChange={formik.handleChange}
                                value={formik.values.msg}
                            />
                        </div>
                        {formik.errors.msg ? <div className="error">{formik.errors.msg}</div> : null}
                        <div className='form-group'>
                            <label htmlFor="sender">From</label>
                            <input
                                id="sender"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.sender}
                                placeholder="From your friend.."
                            />
                        </div>
                        {formik.errors.sender ? <div className="error">{formik.errors.sender}</div> : null}
                        <div className="space-mob">

                        </div>
                        <button type="submit">Freeze this lolly and get a link</button>
                    </form></> :
                    <Result
                        link={data?.addVCard?.link}
                        rec={data?.addVCard?.rec}
                        sender={data?.addVCard?.sender}
                        msg={data?.addVCard?.msg}
                    />}
            </div>
        </div >
    )
}
export default Create
