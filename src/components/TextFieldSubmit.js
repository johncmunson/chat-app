import React from 'react'
import RagePower from 'rage-power'

const TextFieldSubmit = (props) => {
  let input;
  return (
    <div className='ui input'>
        <RagePower>
            <input
              ref={node => input = node}
              type='text'
              maxLength='24'
            >
            </input>
        </RagePower>
        <button
          onClick={() => {
            props.onSubmit(input.value);
            input.value = '';
          }}
          className='ui primary button'
          type='submit'
        >
        Submit
      </button>
    </div>
  );
};

export default TextFieldSubmit;
