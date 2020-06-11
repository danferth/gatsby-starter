import React from "react"
import { useForm } from "react-hook-form"
import Layout from "../components/layout"

const Contact = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    let formEntry = new FormData()
    for (const entry in data) {
      formEntry.append(`${entry}`, `${data[entry]}`)
    }
    fetch("https://parse-file.php", {
      method: "POST",
      mode: "cors",
      body: formEntry,
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }
  return (
    <Layout
      title="contact"
      description="drop me a line, come down to the coast, we'll have a few beers...."
    >
      <h1>contact danferth.com</h1>

      <form id="contact" onSubmit={handleSubmit(onSubmit)} method="POST">
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          aria-label="name"
          placeholder="name"
          ref={register({ required: true })}
        />
        {errors.field && <p>error message</p>}
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          aria-label="email"
          placeholder="email"
          ref={register({ required: true })}
        />
        {errors.field && <p>error message</p>}
        <label htmlFor="message">message</label>
        <textarea
          name="message"
          id="message"
          aria-label="message"
          placeholder="What can I do for you?"
          ref={register({ required: true })}
        ></textarea>
        {errors.field && <p>error message</p>}
        <button type="submit" name="button">
          <i class="fa fa-paper-plane">submit</i>
        </button>
      </form>
    </Layout>
  )
}

export default Contact
