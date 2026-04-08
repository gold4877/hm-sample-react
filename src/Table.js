// 이름 ㅁ전화번호 나이 직업으로 구성된 10개의 배열을 생성
// table 형태로 구성 해 출력
// map 사용
import "./App.css";

const members = [
  { name: "이강인", phone: "010-2222-3333", age: 26, job: "축구선수" },
  { name: "손흥민", phone: "010-1111-3333", age: 33, job: "축구선수" },
  { name: "김민재", phone: "010-2222-4567", age: 31, job: "축구선수" },
  { name: "박지성", phone: "010-8282-0000", age: 47, job: "축구선수" },
  { name: "이승우", phone: "010-1234-5678", age: 28, job: "축구선수" },
  { name: "벤투", phone: "010-0987-6543", age: 55, job: "감독" },
  { name: "히딩크", phone: "010-6666-4444", age: 62, job: "감독" },
  { name: "아이유", phone: "010-3412-5630", age: 30, job: "가수" },
  { name: "안유진", phone: "010-7070-7774", age: 20, job: "연예인" },
  { name: "강호동", phone: "010-7645-2139", age: 58, job: "연예인" },
];

function handleTableRowClick(member) {
  alert(`${member.name} 이 눌러졌습니다`);
}

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>전화번호</th>
          <th>나이</th>
          <th>직업</th>
        </tr>
      </thead>
      <tbody>
        {members.map((person) => (
          <tr key={person.id} onClick={() => handleTableRowClick(person)}>
            <td>{person.name}</td>
            <td>{person.phone}</td>
            <td>{person.age}</td>
            <td>{person.job}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
