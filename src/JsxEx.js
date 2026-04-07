const member = {
  name: "곰돌이사육사",
  job: "Developer",
  addr: "경기도 수원시",
  gender: "남성",
};

// 1. 멤버 객체의 정보를 표시하기
// 2. 조건부 렌더링: 로그인 상태면 const isLoggin = true / false
// 환영합니다 name님
// 오늘도 좋은 하루 되세요!
// 3. 인라인 스타일링으로 member 정보 스타일링 하기
const isLoggin = true;
const cardStyle = {
  color: "royalBlue",
};
const JsxEx = () => {
  return (
    <>
      <p>실습 예제</p>
      {isLoggin ? (
        <h4>
          환영합니다 {member.name}님 <br />
          오늘도 좋은 하루 되세요
        </h4>
      ) : (
        <h4>로그인 실패</h4>
      )}
      <div style={cardStyle}>
        <h4 className="name">이름 : {member.name}</h4>
        <h4 className="job">직업 : {member.job}</h4>
        <h4 className="addr">주소 : {member.addr}</h4>
        <h4 className="gender">성별 : {member.gender}</h4>
      </div>
    </>
  );
};

export default JsxEx;
