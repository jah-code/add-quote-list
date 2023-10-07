import { useState, Fragment } from 'react';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  function changeAuthorHandler(event) {
    setAuthor(event.target.value);
  }

  function changeTextHandler(event) {
    setText(event.target.value);
  }

  function submitFormHandler(event) {
    event.preventDefault();

    props.onAddQuote({ author: author, text: text });

    setAuthor('');
    setText('');
  }

  return (
    <Fragment>
      <Card>
        <form className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' value={author} onChange={changeAuthorHandler} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' value={text} onChange={changeTextHandler}></textarea>
          </div>
          <div className={classes.actions}>
            <button className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
