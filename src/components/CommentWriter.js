import { useRef } from "react";
import styled from "styled-components";

const ContentWriter = ({ inputContent, setInputContent }) => {
  return (
    <WriteBlock>
      <div className="parentBox">
        <div className="childBox">
          <textarea className="name" placeholder="name"></textarea>
          <textarea className="password" placeholder="password"></textarea>
        </div>
        <textarea className="content" placeholder="write your comment here" />
      </div>
    </WriteBlock>
  );
};
const WriteBlock = styled.div`
  * {
    font-family: "Alfa Slab One", cursive;
    font-size: 20px;
  }
  display: flex;
  justify-content: center;

  .parentBox {
    background-color: rgba(245, 245, 245, 255);
    width: 500px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    padding: 10px;
    align-items: stretch;
    box-shadow: 10px 10px 10px rgba(0, 0, 255, 0.2);

    textarea {
      padding: 10px;
      box-sizing: border-box;
      border: none;
      resize: none;
    }

    & > .childBox {
      display: flex;
      justify-content: space-evenly;
      & > textarea {
        width: 200px;
        height: 50px;
        border-radius: 20px;
        background-color: rgb(98, 98, 112);
        &::placeholder {
          color: white;
          text-align: center;
        }
      }
    }
  }
  .content {
    width: 100%;
    height: 120px;
    margin-top: 20px;
    background-color: rgba(245, 245, 245, 255);
    color: rgb(98, 98, 112);
    &::placeholder {
      color: rgb(98, 98, 112);
      /* text-align: center; */
    }
  }
`;
export default ContentWriter;
