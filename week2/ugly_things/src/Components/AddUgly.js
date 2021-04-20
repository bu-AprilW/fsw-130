import React from "react"
import { UglyConsumer } from "./UglyContext"


function AddUgly() {
    return (
        <UglyConsumer>
            {context => (
                <form className="formContain">
                    <input
                        type="text"
                        name="UglyTitle"
                        placeholder="Name the Ugly"
                        value={context.UglyTitle}
                        onChange={context.handleChange}/>
                    <input
                        type="text"
                        name="UglyImgUrl"
                        placeholder="Image URL"
                        value={context.UglyImgUrl}
                        onChange={context.handleChange}/>
                    <input
                        type="text"
                        name="UglyDescription"
                        placeholder="Description"
                        value={context.UglyDescription}
                        onChange={context.handleChange}/>
                    <input
                        type="button"
                        value="Add Ugly"
                        onClick={context.handleSubmit}/>
                </form>
            )}
        </UglyConsumer>
    )
}

export default AddUgly