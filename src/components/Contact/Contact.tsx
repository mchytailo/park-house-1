import React, {FC, useEffect, useRef, useState} from 'react';
import {ContactHeader, ContactLine, ContactSection, ContactText} from "./Contact.styled";
import contactEmbed from './contactEmbed'

interface IProps {
    windowWidth: number
}

const Contact: FC<IProps> = ({windowWidth}) => {
    const [form, setForm] = useState<HTMLElement | null>(null)
    const [counter, setCounter] = useState<number>(0)
    const contactFormRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const script = document.createElement("script");
        script.innerHTML = contactEmbed;
        script.type = 'text/javascript';
        script.id = 'aoform-script-3412f86b-f457-4477-bd83-d4369fffda7f:d-0001';
        contactFormRef && contactFormRef.current && contactFormRef.current.appendChild(script);
    }, [contactFormRef])

    const logSubmit = () => {
        const checkErrors = document.getElementsByClassName('ao-form-error').length;
        if (!checkErrors && contactFormRef && contactFormRef.current) {
            if(windowWidth < 992){
                window.scrollTo({
                    top: contactFormRef.current.offsetTop || 0,
                })
            }
            let contactText = contactFormRef.current.getElementsByClassName('contact-text')[0] as HTMLElement;
            let contactLine = contactFormRef.current.getElementsByClassName('contact-line')[0] as HTMLElement;
            let contactHeader = contactFormRef.current.getElementsByClassName('contact-header')[0] as HTMLElement;
            contactFormRef.current.removeChild(contactText);
            contactFormRef.current.removeChild(contactLine);
            contactFormRef.current.removeChild(contactHeader);
        }
    }

    useEffect(() => {
        if (!form && counter < 20) {
            const interval = setInterval(() => {
                setCounter(count => count + 1)
                const getForm = document.getElementById('ao-form-3412f86b-f457-4477-bd83-d4369fffda7f');
                setForm(getForm);
                if (getForm)
                    getForm.addEventListener('submit', logSubmit)
            }, 1000);
            return () => clearInterval(interval);
        } else return;
    }, [form, counter]);

    return (
        <ContactSection ref={contactFormRef}>
            <ContactText className={'contact-text'}>
                To stay updated about Parkhouse please register below and we will keep you informed. Thank you.
            </ContactText>
            <ContactLine className={'contact-line'}/>
            <ContactHeader className={'contact-header'}>
                REGISTER
            </ContactHeader>
        </ContactSection>
    )
}

export default Contact;