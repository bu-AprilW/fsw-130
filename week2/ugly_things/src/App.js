import React, { useState } from 'react'
import { UglyConsumer } from "./Components/UglyContext"
import AddUgly from "./Components/AddUgly"


function App() {
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div>
            <div style={{backgroundColor: "black"}}>
                <h1 className="header">Ugly Things</h1>
            </div>
            <AddUgly />
            <h1 className="subHeader">The Ugly List</h1>
            <UglyConsumer>
                {context => (
                    <div>
                        { !editToggle ?
                        <>
                        {context.UglyThings.map((uglies, index) =>
                            <div className="container" key={uglies.title}>
                                <h1>{uglies.title}</h1>
                                <p>{uglies.description}</p>
                                <img src={uglies.imgUrl} alt=""/>
                                <ul className="comments">
                                    {uglies.comments.map((comment, index) => <div className="list" key={index}><li>{comment}</li> <input className="delete" type="button" value="Delete" onClick={() => context.handleDelete(index, uglies.title)}/></div>)}
                                </ul>
                                <button className="commentBtn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Add Comment</button>
                                <button className="commentBtn" onClick={() => context.deleteUgly(index, uglies.title)}>Delete Ugly</button>
                            </div>)}
                        </>
                        :
                        <>
                        {context.UglyThings.map(uglies =>
                          <div key={uglies.title}>
                              <div className="container">
                                  <h1>{uglies.title}</h1>
                                  <p>{uglies.description}</p>
                                  <img src={uglies.imgUrl} alt=""/>
                                  <ul className="comments">
                                      {uglies.comments.map((comment, index) => <div className="list" key={index}><li>{comment}</li> <input className="delete" type="button" value="Delete" onClick={() => context.handleDelete(index, uglies.title)}/></div>)}
                                  </ul>
                              </div>
                              <form className="container">
                                  <input
                                    type="text"
                                    name="UglyComment"
                                    value={context.UglyComment}
                                    onChange={context.handleChange}/>
                                <input
                                    type="button"
                                    value="Add Comment"
                                    onClick={() => {context.handleComment(uglies.title); setEditToggle(prevToggle => !prevToggle)}}/>
                              </form>
                              <div className="container">
                                  <button className="close" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                              </div>
                          </div>)}
                        </>}
                    </div>
                )}
            </UglyConsumer>
        </div>
    );
}

export default App;