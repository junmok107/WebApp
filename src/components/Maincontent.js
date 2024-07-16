import React, { useState } from 'react';

function MainContent() {
  const [gender, setGender] = useState('');
  const [nickname, setNickname] = useState('');
  const [appeal, setAppeal] = useState('');
  const [contact, setContact] = useState('');
  const [contactDetail, setContactDetail] = useState('');

  return (
    <main>
      <div className="select">
        <span className="class_n">성별</span>
        <input type="radio" id="gender1" name="gender" value="남성" checked={gender === '남성'} onChange={() => setGender('남성')} />
        <label htmlFor="gender1">남성</label>
        <input type="radio" id="gender2" name="gender" value="여성" checked={gender === '여성'} onChange={() => setGender('여성')} />
        <label htmlFor="gender2">여성</label>
      </div>
      <div className="select">
        <label htmlFor="name" className="class_n">닉네임</label>
        <input type="text" id="name" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="ex) 노래하는 김형준" />
      </div>
      <div className="select">
        <label htmlFor="appeal" className="class_n">매력어필</label>
        <textarea id="appeal" value={appeal} onChange={(e) => setAppeal(e.target.value)} placeholder="김형준 멍청이"></textarea>
      </div>
      <div className="select">
        <span className="class_n">연락수단</span>
        <div className="radio-group">
          <input type="radio" id="all" name="contact" value="모두선택" checked={contact === '모두선택'} onChange={() => setContact('모두선택')} />
          <label htmlFor="all">모두선택</label>
          <input type="radio" id="insta" name="contact" value="인스타" checked={contact === '인스타'} onChange={() => setContact('인스타')} />
          <label htmlFor="insta">인스타</label>
          <input type="radio" id="phone" name="contact" value="전화번호" checked={contact === '전화번호'} onChange={() => setContact('전화번호')} />
          <label htmlFor="phone">전화번호</label>
        </div>
        <textarea value={contactDetail} onChange={(e) => setContactDetail(e.target.value)}></textarea>
      </div>
      <button type="submit">확인</button>
    </main>
  );
}

export default MainContent;
