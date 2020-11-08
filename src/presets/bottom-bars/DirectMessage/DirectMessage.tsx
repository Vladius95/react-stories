import * as React from "react";
import { ReactStoryTheme } from "src/@types/story";
import { Button } from "src/common-components/Button";
import { DirectMessageStyles } from "./DirectMessage.styles";

export interface DirectMessageProps {
  text: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  theme?: ReactStoryTheme;
  onSend?: (message: string) => void;
  containerClassName?: string;
}

export function DirectMessage({
  text,
  onChange,
  placeholder = "Type your message",
  theme = "white",
  onSend,
  containerClassName,
}: DirectMessageProps) {
  const _onSend = React.useCallback(() => {
    onSend(text);
  }, [onSend, text]);

  return (
    <div
      style={DirectMessageStyles["direct-message"]}
      className={containerClassName}
    >
      <input
        value={text}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        style={DirectMessageStyles["direct-message__input"]}
      />
      <MessageButton onClick={_onSend} />
    </div>
  );
}

export interface MessageButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function MessageButton({ onClick }: MessageButtonProps) {
  return (
    <Button onClick={onClick}>
      <svg
        id="Capa_1"
        enableBackground="new 0 0 512 512"
        height="32px"
        width="32px"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path d="m507.606 4.394c-4.478-4.477-11.284-5.66-17.008-2.959l-482 227.442c-5.193 2.451-8.532 7.652-8.598 13.395s3.154 11.019 8.291 13.587l165.233 82.616 82.617 165.234c2.542 5.086 7.738 8.292 13.415 8.292.057 0 .114 0 .172-.001 5.742-.065 10.943-3.404 13.395-8.598l227.441-482c2.704-5.726 1.519-12.532-2.958-17.008zm-238.438 458.284-66.211-132.422 98.421-98.422c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-98.421 98.421-132.422-66.21 416.273-196.426z" />
      </svg>
    </Button>
  );
}
