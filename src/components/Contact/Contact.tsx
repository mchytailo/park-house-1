import React, {FC, RefObject, useEffect, useRef, useState} from 'react';
import {ContactHeader, ContactLine, ContactSection, ContactText} from "./Contact.styled";
import contactEmbed from './contactEmbed'

interface IProps {
    contactRef: RefObject<HTMLDivElement> | null,
    windowWidth: number
}

const Contact: FC<IProps> = ({contactRef, windowWidth}) => {
    const [form, setForm] = useState<HTMLElement | null>(null)
    const [counter, setCounter] = useState<number>(0)
    const contactFormRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const script = document.createElement("script");
        script.innerHTML = contactEmbed;
        script.type = 'text/javascript';
        script.id = 'aoform-script-65a7048d-2c63-41a9-86d3-c56af2931016:d-0004';
        contactFormRef && contactFormRef.current && contactFormRef.current.appendChild(script);
    }, [contactFormRef])

    const logSubmit = () => {
        const checkErrors = document.getElementsByClassName('ao-form-error').length;
        if (!checkErrors && contactRef && contactRef.current) {
            if(windowWidth < 992){
                window.scrollTo({
                    top: contactRef.current.offsetTop || 0,
                })
            }
            let contactText = contactRef.current.getElementsByClassName('contact-text')[0] as HTMLElement;
            let contactLine = contactRef.current.getElementsByClassName('contact-line')[0] as HTMLElement;
            let contactHeader = contactRef.current.getElementsByClassName('contact-header')[0] as HTMLElement;
            contactRef.current.removeChild(contactText);
            contactRef.current.removeChild(contactLine);
            contactRef.current.removeChild(contactHeader);
        }
    }

    useEffect(() => {
        if (!form && counter < 20) {
            const interval = setInterval(() => {
                setCounter(count => count + 1)
                const getForm = document.getElementById('ao-form-65a7048d-2c63-41a9-86d3-c56af2931016');
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