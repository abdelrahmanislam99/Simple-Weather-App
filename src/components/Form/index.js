import React from 'react';

const Form = (props) => {
    return(
      <form onSubmit={props.getInfo}>
        <input type='text' name='city' placeholder='City'/>
        <button>Get weather information</button>
      </form>

    )
}

export default Form;