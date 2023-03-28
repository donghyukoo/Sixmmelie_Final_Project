import PrivacyPolicyCSS from './PrivacyPolicyCSS.module.css'
import React,{useState} from 'react';


function PrivacyPolicy() {

    const [isCheck1, setCheck1] = useState(true);
    const [isCheck2, setCheck2] = useState(false);
    const [isCheck3, setCheck3] = useState(false);
    const [isCheck4, setCheck4] = useState(false);
    const [isCheck5, setCheck5] = useState(false);
    const [isCheck6, setCheck6] = useState(false);
    const [isCheck7, setCheck7] = useState(false);
    const [isCheck8, setCheck8] = useState(false);
    const [isCheck9, setCheck9] = useState(false);

    return(
        <div className={PrivacyPolicyCSS.all}>
            <h1 className={PrivacyPolicyCSS.name} >개인정보처리방침</h1>
<br></br>
            <div className={PrivacyPolicyCSS.content1}>
                “육믈리에”는 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.<br></br>
                “육믈리에”는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며,<br></br>
                개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.<br></br>
                “육믈리에”는 개인정보취급방침을 개정하는 경우 웹 사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.<br></br><br></br>
                본 방침은 2023 년 1 월 31 일부터 시행됩니다.<br></br><br></br>
            </div>
<br></br>
            <li className={PrivacyPolicyCSS.list}>
                <div className={PrivacyPolicyCSS.Header}
                onClick={() => {
                    setCheck1((e) => !e);
                }}>
                    개인정보의 수집 및 이용 목적 
                    {isCheck1 ? "🍾" : "🍷" }

                </div>
                {isCheck1 && (

            <div className={PrivacyPolicyCSS.content}>
            개인정보는 생존하는 개인에 관한 정보로서 실명, 주민등록번호 등의 사항으로 당사 회원 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다. 당사가 수집한 개인정보는 다음의 목적을 위해 활용합니다.<br></br>
            &nbsp;① 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산콘텐츠 제공, 물품배송 또는 청구서 등 발송, 금융거래 본인 인증 및 금융 서비스, 구매 및 요금 결제, 요금추심<br></br>
            &nbsp;② 회원 관리 : 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 추후 법정 대리인 본인확인, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항 전달<br></br>
            &nbsp;③ 마케팅 및 광고에 활용 : 신규 서비스(제품) 개발 및 특화, 이벤트 등 광고성 정보 전달 (회원님의 개인정보는 광고를 의뢰한 개인이나 단체에는 제공되지 않으며 상품 발송, 행사 참여 등에 따른 추가 정보에 대해서는 별도의 동의 절차 수행 후 제공합니다.)<br></br>
            </div>
                        )}

            </li>
<br></br>
<br></br>
            <li className={PrivacyPolicyCSS.list}>
                <div className={PrivacyPolicyCSS.Header}
                onClick={() => {
                    setCheck2((e) => !e);
                }}>
                    수집하는 개인정보 항목 및 수집방법
                    {isCheck2? "🍾" : "🍷" }

                </div>
                {isCheck2 && (

                <div className={PrivacyPolicyCSS.content}>
                    가. 수집하는 개인정보 항목<br></br>
                    &nbsp; ① 최초 회원가입 시 회원식별 및 최적화된 서비스 제공을 위해 아래와 같은 정보를 수집합니다.<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 필수항목: 이름, 아이디, 비밀번호, 이메일주소, 연락처<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 수신동의선택항목: 주소, 성별, 생년월일, 거주지<br></br>
                    &nbsp; ② 서비스 이용과정이나 사업 처리과정에서 아래와 같은 정보들이 생성되어 수집될 수 있습니다.서비스 이용기록, 접속로그, 접속IP 정보<br></br>
                    <br></br>
                    나. 수집방법당사는 다음과 같은 방법으로 개인정보를 수집합니다.<br></br>
                    &nbsp; ① 홈페이지를 통한 회원가입, 게시판<br></br>
                </div>
                            )}

            </li>
<br></br>
<br></br>
            <li className={PrivacyPolicyCSS.list}>
                <div className={PrivacyPolicyCSS.Header}
                            onClick={() => {
                                setCheck3((e) => !e);
                            }}>
                    수집하는 개인정보의 보유 및 이용기간
                    {isCheck3? "🍾" : "🍷" }

                </div>
                {isCheck3 && (

                <div className={PrivacyPolicyCSS.content}>
                    원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.<br></br>
                    단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.<br></br>
                    &nbsp; ① 회원 탈퇴 시 보존  개인정보 <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보존항목: 아이디<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보존근거: 불량 이용자의 재가입 방지, 작성 게시물과 연계 정보 서비스<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보존기간: 서비스 종료시 까지<br></br>
                </div>
                                        )}

            </li>
<br></br>
<br></br>
            <li className={PrivacyPolicyCSS.list}>
                <div className={PrivacyPolicyCSS.Header}
                            onClick={() => {
                                setCheck4((e) => !e);
                            }}>
                    개인정보의 파기절차 및 방법
                    {isCheck4? "🍾" : "🍷" }

                </div>
                {isCheck4 && (
                <div className={PrivacyPolicyCSS.content}>
                    원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.<br></br>
                    단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.<br></br>
                    &nbsp; ① 파기 절차회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조)<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 일정 기간 저장된 후 파기 됩니다. 동 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.<br></br>
                    &nbsp; ② 파기방법 : 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기하고,<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.<br></br>
                </div>
                                        )}

            </li>
<br></br>
<br></br>
            <li className={PrivacyPolicyCSS.list}>
                <div className={PrivacyPolicyCSS.Header}
                            onClick={() => {
                                setCheck5((e) => !e);
                            }}>
                    개인정보의 제공 및 공유
                    {isCheck5? "🍾" : "🍷" }

                </div>
                {isCheck5 && (

                <div className={PrivacyPolicyCSS.content}>
                    원칙적으로 당사는 회원님의 개인정보를 수집 및 이용목적에 한해서만 이용하며 타인 또는 타 기업 및 기관에 공개하지 않습니다.<br></br>
                    다만, 아래의 경우에는 예외로 합니다.<br></br>
                    &nbsp;① 이용자들이 사전에 동의한 경우, 이벤트 참여 등으로 인해 정보수집 또는 정보제공이 되는 경우 이전에 회원님께 비즈니스 파트너가 누구인지,<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp; 어떤 정보가 왜 필요한지,그리고 언제까지 어떻게 보호/관리되는지 알려드리고 동의를 구하는 절차를 거치게 되며,<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp; 회원님께서 동의하지 않는 경우에는 추가적인 정보를 수집하거나 비즈니스파트너와 공유하지 않습니다.<br></br>
                    &nbsp;② 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
                </div>
                                        )}

            </li>
<br></br>
<br></br>
            <li className={PrivacyPolicyCSS.list}>
                <div className={PrivacyPolicyCSS.Header}
                            onClick={() => {
                                setCheck6((e) => !e);
                            }}>
                    개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항
                    {isCheck6? "🍾" : "🍷" }

                </div>
                {isCheck6 && (

                <div className={PrivacyPolicyCSS.content}>
                    회원님 개개인에게 개인화되고 맞춤화된 서비스를 제공하기 위해서 당사는 회원님의 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.<br></br>
                    쿠키는 웹 사이트를 운영하는데 이용되는 서버가 사용자의 브라우저에게 보내는 조그마한 데이터 꾸러미로 회원님 컴퓨터의 하드디스크에 저장됩니다.<br></br>
                    &nbsp;① 쿠키의 사용 목적회원과 비회원의 접속 구분, 빈도 및 방문 시간 기록<br></br>
                    &nbsp;② 쿠키 설정 거부 방법 : 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다.<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 설정방법 ex. (인터넷 익스플로러의 경우) : 웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보 및 보안<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 쿠키 설치를 거부하였을 경우 로그인이 필요한 일부 서비스의 이용이 어려울 수 있습니다.<br></br>
                </div>
                )}
            </li>
<br></br>
<br></br>
            <li className={PrivacyPolicyCSS.list}>
                <div className={PrivacyPolicyCSS.Header}
                            onClick={() => {
                                setCheck7((e) => !e);
                            }}>
                    개인정보보호를 위한 기술적/관리적 대책
                    {isCheck7? "🍾" : "🍷" }

                </div>
                {isCheck7 && (

                <div className={PrivacyPolicyCSS.content}>
                    ① 기술적인 대책 : 회원님의 개인정보는 비밀번호에 의해 보호되며, 파일 및 전송 데이터를 암호화하거나 파일 잠금기능(LOCK)을 사용하여,<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp; 중요한 데이터는 별도의 보안기능을 통해 보호되고 있습니다.<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp; 당사는 백신프로그램을 이용하여 컴퓨터바이러스에 의한 피해를 방지하기 위한 조치를 취하고 있습니다.<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp; 백신프로그램은 주기적으로 업데이트되며 갑작스런 바이러스가 출현될 경우 백신이 나오는 즉시 이를 적용함으로써 개인정보가 침해되는 것을 방지하고 있습니다.<br></br>
                    ② 관리적인 대책 : 위와 같은 노력 이외에 회원님 스스로도 제3자에게 비밀번호 등이 노출되지 않도록 주의하셔야 합니다.<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp; 특히 비밀번호 등이 공공장소에 설치한 PC를 통해 유출되지 않도록 항상 유의하시기 바랍니다.<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp; 회원님의 ID와 비밀번호는 반드시 본인만 사용하시고 비밀번호를 자주 바꿔주시는 것이 좋습니다.<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp; 당사는 개인정보 취급직원을 개인정보 관리업무를 수행하는 자 및 업무상 개인정보의 취급이 불가피 한 자로 엄격히 제한하고,<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp; 담당직원에 대한 수시 교육을 통하여 본 정책의 준수를 강조하고 있으며, 담당직원의 준수여부를 확인하여 문제가 발견될 경우 바로 시정조치하고 있습니다.
                </div>
                )}
            </li>
<br></br>
<br></br>
            <li className={PrivacyPolicyCSS.list}>
                <div className={PrivacyPolicyCSS.Header}
                            onClick={() => {
                                setCheck8((e) => !e);
                            }}>
                    이용자 및 법정대리인의 권리와 그 행사 방법
                    {isCheck8? "🍾" : "🍷" }

                </div>
                {isCheck8 && (

                <div className={PrivacyPolicyCSS.content}>
                    이용자 및 법정 대리인은 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입 해지를 요청할 수도 있습니다.<br></br>
                    이용자는 당사 홈페이지에 있는 '나의 정보' 메뉴를 통해, 정보수정 및 탈퇴 요청할 수 있습니다.<br></br>
                    혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.<br></br>
                    당사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 복구가 불가능하며 열람 역시 불가능하게 조치하고 있습니다.
                </div>
                )}
            </li>
<br></br>
<br></br>
            <li className={PrivacyPolicyCSS.list}>
                <div className={PrivacyPolicyCSS.Header}
                            onClick={() => {
                                setCheck9((e) => !e);
                            }}>
                    개인정보관리책임자 및 상담/신고
                    {isCheck9? "🍾" : "🍷" }

                </div>
                {isCheck9 && (

                <div className={PrivacyPolicyCSS.content}>
                    고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 당사는 개인정보관리책임자를 두고 있습니다.<br></br>
                    고객의 개인정보와 관련한 문의사항이 있으시면 아래의 개인정보관리책임자 또는 개인정보관리담당자에게 연락 주시기 바랍니다.
                    <br></br>
                    &nbsp;개인정보 관리자<br></br>
                    &nbsp;- 이름 : 김동혁<br></br>
                	&nbsp;- 소속 : 육믈리에 개인정보 및 고객응대s 팀<br></br>
                    &nbsp;- 전화 : 02-1234-5678 / 팩스 : 02-5678-4321<br></br>
                    &nbsp;- 이메일: kddh9405@sixxmele.com<br></br>
                </div>
                )}
            </li>
</div>
    )
}
export default PrivacyPolicy;