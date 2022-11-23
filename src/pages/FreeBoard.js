import styled from "styled-components";
import Photo from "../pic/짱난.gif";
import InsertImg from "../pic/coffee.jpg";
const FreeBoard = () => {
  return (
    <ListBlock>
      <div className="LOGO">Dev's</div>
      <div className="subtitle">Dev' Social</div>
      <div className="inducer"> How To Use Social Board ~~ Tip... whatever</div>
      <div className="parentBox">
        <div className="childBox">
          <div className="flex-box1">
            <p className="title">
              You know I always wanna be Somewhere or anywhere that near by you
              I wanna make this love clearly Make it more longer, make it more
              stronger
            </p>
            <div className="name-date">
              <img className="photos" src={Photo} alt="프로필 사진"></img>
              <span className="nickName">NickName</span>
              <span className="date">2022/11/22</span>
            </div>
          </div>
          <div className="flex-box2">
            <img className="insertImg" src={InsertImg} alt="첨부사진"></img>
          </div>
        </div>
        <div className="childBox">
          <div className="flex-box1">
            <p className="title">
              Too many ups and downs We have been through together, above love
              You are more than my everything To me, oh, you are, hmm You're the
              poet in my heart The changes in my mind, pounding in my heart
              You're everything in my head You're the dreams I've always wished
              A chance to be better Flowers in my path, my love
            </p>
            <div className="name-date">
              <img className="photos" src={Photo} alt="프로필 사진"></img>
              <span className="nickName">NickName</span>
              <span className="date">2022/11/22</span>
              <span>📝</span>
            </div>
          </div>
          <div className="flex-box2">
            <img className="insertImg" src={InsertImg} alt="첨부사진"></img>
          </div>
        </div>
        <div className="childBox">
          <div className="flex-box1">
            <p className="title">Title</p>
            <div className="name-date">
              <img className="photos" src={Photo} alt="프로필 사진"></img>
              <span className="nickName">NickName</span>
              <span className="date">2022/11/22</span>
            </div>
          </div>
          <div className="flex-box2">
            <img className="insertImg" src={InsertImg} alt="첨부사진"></img>
          </div>
        </div>
      </div>
    </ListBlock>
  );
};

const ListBlock = styled.div`
  * {
    font-family: "Alfa Slab One", cursive;
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
    background-color: rgba(211, 188, 230, 0.25);
  }
  .childBox {
    display: flex;
    height: 100%;
    margin: 20px 10px;
    border: 2px solid grey;
    border-radius: 5px;
    background-color: white;
    box-shadow: 2px 3px 3px 1px rgba(0, 0, 0, 0.2);
    & > * {
      font-size: 15px;
    }
  }
  .flex-box1 {
    display: flex;
    flex-direction: column;
  }
  .flex-box2 {
    flex-grow: 1.5;
    overflow: hidden;
    position: relative;
  }
  .title {
    margin: 5px;
    border: 1px solid grey;
    width: 750px;
  }
  .name-date {
    display: flex;
    align-items: center;
  }
  .photos {
    margin: 5px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .nickName {
    margin: 0 5px;
  }
  .date {
    font-size: 10px;
    margin: 0 5px;
  }
  .insertImg {
    height: 100%;
    width: 100%;
    position: absolute; // = 부모 기준 배치
    /* right: 0; */
    /* top: 0; */
  }
`;

export default FreeBoard;
