import styled from "styled-components";
import JYApi from "../../api/JYApi";
import Api from "../../api/FbApi";

const WriteContent = ({ inputContent, setInputContent }) => {
  const isLogin = window.localStorage.getItem("isLogin"); // 로그인 상태가 아닐때는 글 작성할 수 없게
  if (isLogin === "FALSE") window.location.replace("/login"); // 로그인 페이지로 이동

  const getUserId = window.localStorage.getItem("userId"); // 유저 아이디 값 가져오기
  const getBoardId = window.localStorage.getItem("fb_id"); // 게시판 아이디 값 가져오기
  const onChangeContent = (e) => setInputContent(e.target.value);
  const onPressEnter = async (e) => {
    if (e.key === "Enter") {
      console.log("엔터 클릭");
      const res = await JYApi.insertComment(
        getUserId,
        inputContent,
        getBoardId
      );
      console.log(res.data.result);
      // 댓글수 업데이트 기능(HN추가)
      const res2 = await Api.fBoardComment(getBoardId);
      console.log(res2.data.result);
      // if (res.data.result === "OK") {
      //   setInputContent(inputContent);
      // }
    }
  };

  return (
    <WriteBlock>
      <textarea
        onChange={onChangeContent}
        onKeyPress={onPressEnter}
        name="writer"
        placeholder="👉 댓글을 입력하세요 !"
      />
    </WriteBlock>
  );
};
const WriteBlock = styled.div`
  width: 800px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  & > textarea {
    width: 800px;
    // height: 70px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 5px solid grey;
    resize: vertical;
  }
`;
export default WriteContent;
