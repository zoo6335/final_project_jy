import styled from "styled-components";
import Photo from "../pic/짱난.gif";
import InsertImg from "../pic/mysql.png";
const FreeBoard = () => {
  return (
    <ListBlock>
      <div className="LOGO">Dev's</div>
      <div className="subtitle">Dev' Social</div>
      <div className="inducer"> How To Use Social Board ~~ Tip... whatever</div>
      <div className="parentBox">
        <div className="childBox">
          <p className="title">Title</p>
          <img className="photos" src={Photo} alt="프로필 사진"></img>
          <span className="nickName">NickName</span>
          <span className="date">2022/11/22</span>
          <img className="insersImg" src={InsertImg} alt="첨부사진"></img>
        </div>
        <div className="childBox">
          <p className="title">Title is title blah~~~</p>
          <img className="photos" src={Photo} alt="프로필 사진"></img>
          <span className="nickName">NickName</span>
          <span className="date">2022/11/22</span>
        </div>
        <div className="childBox">
          <p className="title">Title will be here...</p>
          <img className="photos" src={Photo} alt="프로필 사진"></img>
          <span className="nickName">NickName</span>
          <span className="date">2022/11/22</span>
        </div>
        <div className="childBox">
          <p className="title">Title come here,,!!!</p>
          <img className="photos" src={Photo} alt="프로필 사진"></img>
          <span className="nickName">NickName</span>
          <span className="date">2022/11/22</span>
        </div>
        <div className="childBox">
          <p className="title">Title english only zzzzz</p>
          <img className="photos" src={Photo} alt="프로필 사진"></img>
          <span className="nickName">NickName</span>
          <span className="date">2022/11/22</span>
        </div>
      </div>
    </ListBlock>
  );
};

const ListBlock = styled.div`
  * {
    font-family: "Alfa Slab One", cursive;
    /* border: 1px solid black; */
    margin: 0;
    padding: 0;
  }
  .LOGO {
    // 메인 로고
    text-align: center;
    padding: 20px;
    font-size: 40px;
    border: 3px solid black;
  }
  .subtitle {
    // 부제목
    text-align: center;
    font-size: 25px;
    padding: 10px;
  }
  .inducer {
    padding: 10px;
    text-align: center;
  }
  .mainBox {
    // 본문 박스
    display: flex;
  }
  .parentBox {
    width: 1024px;
    padding: 5px;
    border: 1px solid black;
    margin: 0px auto;
  }
  .childBox {
    height: 100%;
    & > * {
      font-size: 15px;
    }
    margin: 20px 10px;
    padding: 5px;
    border: 1px solid grey;
    & > .title {
      border: 1px solid grey;
      width: 500px;
    }
    & > .photos {
      margin: 10px 5px;
      border-radius: 50%;
      width: 50px;
    }
    & > .nickName {
      border: 1px solid grey;
      margin: 5px;
    }
    & > .date {
      font-size: 10px;
      margin: 5px;
    }
    & > .insersImg {
      float: right;
      /* width: 50px; */
      display: block;
      height: auto;
      width: 300px;
      height: 150px;
      object-fit: f;
    }
  }
`;

export default FreeBoard;
