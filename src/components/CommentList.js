import styled from "styled-components";
import Photo from "../pic/짱난.gif";

const CommentList = () => {
  return (
    <BOX>
      <button className="deleteBt">삭제</button>
      <div className="comment-box">
        <div className="child-box">
          <img className="photos" src={Photo} alt="프로필 사진"></img>
          <span className="comment-writer">아이스킹</span>
          <span className="comment-date">| 22.11.28</span>
        </div>
        <p className="comment-text">이건 회사 생각도 궁금하네요. 회사에 면담 해보시는게 좋아보여요. 이야기 해보고 아니다 싶으면 이직이죠.</p>
      </div>
      <div className="comment-box">
        <div className="child-box">
          <img className="photos" src={Photo} alt="프로필 사진"></img>
          <span className="comment-writer">손흥민</span>
          <span className="comment-date">| 22.11.29</span>
        </div>
        <p className="comment-text">아 아무리 신입이래도 프론트만 시킨다면... 이직 준비 시작하시는게 좋을 것 같네요 ㅜ,,</p>
      </div>
    </BOX>
  );
};
const BOX = styled.div`
    margin: 5px 20px;
  * {
    font-family: 'Song Myung', serif;
  }
  .comment-box{
    display: flex;
    flex-direction: column;
  }
  .child-box{
    display: flex;
    align-items: center;
  }
  .comment-writer {
    padding: 5px;
  }
  .comment-date {
    color: grey;
    padding: 5px;
    font-size: 0.9em;
  }
  .comment-text{
    padding: 0px 5px 20px;
    border-bottom: 1px dashed rgba(209, 209, 209, 0.8);
  }
`;

export default CommentList;
