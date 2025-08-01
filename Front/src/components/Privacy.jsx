import React from 'react';
import '../css/AuthPage.css';

function Privacy({ setShowPrivacy }) {
  const handleClose = () => setShowPrivacy(false);

  return (
    <div className="privacy-overlay" onClick={handleClose}>
      <div className="privacy-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <div className="privacy-left">
          <h5>[개인정보 수집 및 이용 동의]</h5>
          <p>
            <strong style={{ fontFamily: 'monospace' }}>FairRoad</strong>는 다음과 같이 개인정보를 수집 및 이용하고 있습니다.
          </p>
          - 수집 및 이용 목적: 회원 가입, 서비스 제공, 이용자 식별, 부정이용 방지, 공지사항 전달 <br />
          - 항목: 닉네임, 비밀번호, 이메일주소 <br />
          - 수집 및 이용 목적: 본인확인, 이용자 식별, 부정이용 방지, 중복가입 방지, 공지사항 전달 <br />
          - 항목: 이름, 생년월일, 성별, 내외국인정보, 이동통신사정보, 휴대전화번호, 연계정보(CI), 중복가입정보(DI) <br />
          - 보유 및 이용기간: 회원탈퇴일로부터 30일 (법령에 특별한 규정이 있을 경우 관련 법령에 따라, 부정이용기록은 회원탈퇴일로부터 최대 5년) <br />
          <br />
          <p className="privacy-footer">
            동의를 거부할 권리가 있으나, 동의를 거부할 경우 회원가입이 불가능 합니다.<br />
            외부 계정을 이용하는 경우 이용자가 동의한 범위 내에서만 개인정보를 제공받고 처리합니다.
          </p>
          <p className="privacy-footer">
            ※ 그 외의 사항 및 자동 수집 정보와 관련된 사항은 개인정보처리방침을 따릅니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
