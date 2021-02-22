import React, { ChangeEvent, useRef, useState } from 'react';
import './title-textarea.scss';

interface ITitleTextareaProps {
  textInput: string;
  onBlur: (textInput: string) => void;
}
const TitleTextarea: React.FC<ITitleTextareaProps> = ({
  textInput,
  onBlur,
}) => {
  const textareaElement = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState(textInput);
  const [edit, setEdit] = useState(false);

  const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;
    const { value, type } = target;

    setText(value);
  };

  const onEdit = () => {
    setEdit(true);
    if (textareaElement && textareaElement.current) {
      textareaElement.current.focus();
      textareaElement.current.select();
    }
  };

  return (
    <div className="title-textarea">
      <div className="title-textarea-title">
        <span style={{ opacity: edit ? '0' : '1' }}>{text}</span>
      </div>
      <textarea
        ref={textareaElement}
        className="title-textarea-text"
        maxLength={512}
        value={text}
        onChange={onTextChange}
        onBlur={() => {
          setEdit(false);
          onBlur(text);
        }}
        style={{ opacity: edit ? '1' : '0' }}
      />

      {!edit && (
        <div
          className="title-textarea-trigger-edit"
          onClick={onEdit}
          onKeyDown={() => {
            return false;
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default TitleTextarea;
