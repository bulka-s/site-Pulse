import React, { useState } from "react";
import "./styles/ContactForm.scss";
import { Textarea } from "./ui/textarea";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

function ContactForm() {
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState<boolean>(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitting(true);
        // Simulate submit
        setTimeout(() => {
            setSubmitting(false);
            alert("Сообщение отправлено (симуляция)");
            setForm({ name: "", email: "", phone: "", message: "" });
        }, 900);
    }

    return (
        <section id="form" className="contact-form">
            <h3 className="contact-form__title">Форма обратной связи</h3>

            <form className="contact-form__form" onSubmit={handleSubmit} noValidate>
                <div className="field">
                    <input
                        id="name"
                        name="name"
                        className="field__input"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <label className="field__label" htmlFor="name">
                        ФИО
                    </label>
                </div>

                <div className="field">
                    <input
                        id="email"
                        name="email"
                        className="field__input"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <label className="field__label" htmlFor="email">
                        E-mail
                    </label>
                </div>

                <div className="field">
                    <input
                        id="phone"
                        name="phone"
                        className="field__input"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                    />
                    <label className="field__label" htmlFor="phone">
                        Телефон
                    </label>
                </div>

                <div className="field field--textarea">
                    <label className="mb-2 text-sm" htmlFor="message">
                        Сообщение
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        className="field__input field__textarea"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                    />
                </div>

                <button className="btn-submit" type="submit" disabled={submitting}>
                    {submitting ? "Отправка..." : "Отправить"}
                </button>
            </form>
        </section>
    );
}

export default ContactForm;