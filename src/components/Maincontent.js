import React from 'react';

function MainContent() {
  return (
    <main>
      <div className = "select">
        <span className="gender-label">성별</span>
        <input type = "radio" id="select1" name="shop"/>
        <label htmlFor='select1'>남성</label>
        <input type = "radio" id="select2" name="shop"/>
        <label htmlFor='select2'>여성</label>
        
      </div>
    </main>
  );
}

export default MainContent;
