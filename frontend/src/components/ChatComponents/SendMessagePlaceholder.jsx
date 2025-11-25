import { TextComponent } from "../index";

function SendMessagePlaceholder({ loading, messageLength }) {
  return (
    <>
      {!loading && messageLength === 0 && (
        <TextComponent
          styling={"text-center"}
          textType="p"
          text={"Send a Message to Start the Conversion"}
        />
      )}
    </>
  );
}

export default SendMessagePlaceholder;
