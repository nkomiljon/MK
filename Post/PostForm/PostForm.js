import React, {useState} from 'react'

export default function PostForm({onSave}) {
    const [content, setContent] = useState('');

    const handleSubmit = (ev) => {
        ev.PreventDefault();

        onSave({
            content,
        });
    };
    const handleChange = (ev) => {
        const {value} = ev.target;
        setContent(value)
    }

    return (
      <form action="" onSubmit={handleSubmit}>
          <textarea value={content} onChange={handleChange} cols="30" rows="10">
              <button>OK</button>
          </textarea>
      </form>
    )
}
