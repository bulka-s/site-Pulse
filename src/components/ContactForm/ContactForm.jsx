import React, { useState } from "react";
import "./ContactForm.scss";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
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
    <section className="contact-form">
      <h3 className="contact-form__title">Форма обратной связи</h3>

      <form className="contact-form__form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label className="field__label" htmlFor="name">
            ФИО
          </label>
          <input
            id="name"
            name="name"
            className="field__input"
            type="text"
            placeholder="Имя"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label className="field__label" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            className="field__input"
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label className="field__label" htmlFor="phone">
            Телефон
          </label>
          <input
            id="phone"
            name="phone"
            className="field__input"
            type="tel"
            placeholder="Телефон"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div className="field field--textarea">
          <label className="field__label" htmlFor="message">
            Сообщение
          </label>
          <textarea
            id="message"
            name="message"
            className="field__input field__textarea"
            placeholder="Сообщение"
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
