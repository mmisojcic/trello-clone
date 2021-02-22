import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import './collect-info.scss';

interface ICollectInfo {
  buttonLabel: string;
  textPlaceHolder: string;
  className?: string;
  cancel: () => void;
  collect: (text: string) => void;
}
const CollectInfo: React.FC<ICollectInfo> = ({
  buttonLabel,
  textPlaceHolder,
  className,
  cancel,
  collect,
}) => {
  const textareaElement = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');

  const focusTextArea = () => {
    if (textareaElement && textareaElement.current) {
      textareaElement.current.focus();
    }
  };

  const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;
    const { value, type } = target;

    setText(value);
  };

  const noText = (): boolean => {
    return !text || text.trim() === '';
  };

  const onCollect = () => {
    if (noText()) {
      focusTextArea();
    } else {
      collect(text);
      cancel();
    }
  };

  useEffect(() => {
    focusTextArea();
  }, []);

  return (
    <div className={`collect-info ${className || ''}`}>
      <div className="collect-info-input">
        <textarea
          ref={textareaElement}
          placeholder={textPlaceHolder}
          value={text}
          onChange={onTextChange}
        />
      </div>
      <div className="collect-info-options">
        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={onCollect}
        >
          {buttonLabel}
        </button>
        <button
          type="button"
          className="collect-info-options-cancel"
          onClick={() => cancel()}
        >
          <i className="bi bi-x" />
        </button>
      </div>
    </div>
  );
};

export default CollectInfo;
