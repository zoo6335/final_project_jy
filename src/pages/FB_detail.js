import styled from "styled-components";
import Photo from "../pic/짱난.gif";
import InsertImg from "../pic/coffee.jpg";
import Comment from "../components/CommentList";

const FB_Detail = () => {
  return (
    <>
      <DetailBox>
        <div className="LOGO">Dev's</div>
        <div className="subtitle">Board Detail Page</div>
        <div className="parentBox">
          <div className="title">Title of the content</div>
          <div className="text">
            A lucky, lucky girl She got married to a boy like you She'd kick you
            out if she ever, ever knew 'Bout all the - you tell me that you do
            Dirty, dirty boy You know everyone is talking on the scene I hear
            them whispering 'bout the places that you've been And how you don't
            know how to keep your business clean Mummy don't know daddy's
            getting hot At the body shop, doing something unholy He's sat back
            while she's dropping it, she be popping it Yeah, she put it down
            slowly Oh-ee-oh-ee-oh, he left his kids at Ho-ee-oh-ee-ome, so he
            can get that Mummy don't know daddy's getting hot At the body shop,
            doing something unholy (woo) Mmm, daddy, daddy, if you want it, drop
            the add'y (yuh) Give me love, give me Fendi, my Balenciaga daddy You
            gon' need to bag it up, 'cause I'm spending on Rodeo (woo) You can
            watch me back it up, I'll be gone in the a.m And he, he get me
            Prada, get me Miu Miu like Rihanna (ah) He always call me 'cause I
            never cause no drama And when you want it, baby, I know I got you
            covered And when you need it, baby, just jump under the covers
          </div>
        </div>
      </DetailBox>
      <Comment />
    </>
  );
};

const DetailBox = styled.div`
  & > * {
    margin: 0;
    padding: 0;
    font-family: "Alfa Slab One", cursive;
  }
  margin: 0px auto;
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
  .parentBox {
    width: 1024px;
    margin: 0px auto;
    padding: 5px;
    border: 1px solid black;
    background-color: rgba(211, 188, 230, 0.25);
    border-radius: 5px;
  }
  .title {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    background-color: white;
    font-size: 25px;
  }
  .text {
    padding: 10px;
  }
`;
export default FB_Detail;
