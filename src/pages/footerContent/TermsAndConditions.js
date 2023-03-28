import TermsAndConditionsCSS from './TermsAndConditionsCSS.module.css'
import React,{useState} from 'react';



function TermsAndConditions() {

    const [isCheck1, setCheck1] = useState(true);
    const [isCheck2, setCheck2] = useState(false);
    const [isCheck3, setCheck3] = useState(false);
    const [isCheck4, setCheck4] = useState(false);
    const [isCheck5, setCheck5] = useState(false);
    const [isCheck6, setCheck6] = useState(false);
    const [isCheck7, setCheck7] = useState(false);
    const [isCheck8, setCheck8] = useState(false);
    const [isCheck9, setCheck9] = useState(false);
    const [isCheck10, setCheck10] = useState(false);
    const [isCheck11, setCheck11] = useState(false);
    const [isCheck12, setCheck12] = useState(false);
    const [isCheck13, setCheck13] = useState(false);
    const [isCheck14, setCheck14] = useState(false);
    const [isCheck15, setCheck15] = useState(false);
    const [isCheck16, setCheck16] = useState(false);
    const [isCheck17, setCheck17] = useState(false);
    const [isCheck18, setCheck18] = useState(false);
    const [isCheck19, setCheck19] = useState(false);
    const [isCheck20, setCheck20] = useState(false);
    const [isCheck21, setCheck21] = useState(false);

    return(
    <div className={TermsAndConditionsCSS.all}>
        <div>
            <h1 className={TermsAndConditionsCSS.name}>이용약관</h1>
<br></br>
        <li className={TermsAndConditionsCSS.list}>
            <button className={TermsAndConditionsCSS.buttonHeader}
                onClick={() => {
                    setCheck1((e) => !e);
                }}>
                <span>제 1 조 (목적)</span> &nbsp;
                {isCheck1 ? "🍾" : "🍷" }
            </button>
            {isCheck1 && (
            <div>
                <div className={TermsAndConditionsCSS.content}>
                &nbsp; 이 약관은 ‘육믈리에‘가 제공하는 제반 서비스의 이용과 관련하여 육믈리에와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                    <br></br>
                </div>
            </div>
            )}
        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
            onClick={() => {
                        setCheck2((e) => !e);
                    }}>
                <span>제 2 조 (정의)</span>&nbsp;
                {isCheck2? "🍾" : "🍷" }
            </button>
            {isCheck2 && (

            <div>
            <div className={TermsAndConditionsCSS.content}>
                이 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br></br>
                &nbsp; ⑴ "서비스"라 함은 구현되는 단말기(PC, TV, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 "회원"이 이용할 수 있는 육믈리에 관련 제반 서비스를 의미합니다.<br></br>
                &nbsp; ⑵ "회원(개인회원)"이라 함은 육믈리에의 "서비스"에 접속하여 이 약관에 따라 "육믈리에"와 이용계약을 체결하고 "육믈리에"가 제공하는 "서비스"를 이용하는 고객을 말합니다.<br></br>
                &nbsp; ⑶ "아이디(ID)"라 함은 "회원"의 식별과 "서비스" 이용을 위하여 "회원"이 정하고 "육믈리에"가 승인하는 문자와 숫자의 조합을 의미합니다.<br></br>
                &nbsp; ⑷ '비회원'이라 함은 회원에 가입하지 않고 "sixxmelie.com"이 제공하는 서비스를 이용하는 자를 말합니다.<br></br>
                &nbsp; ⑸ "비밀번호"라 함은 "회원"이 부여 받은 "아이디와 일치되는 "회원"임을 확인하고 비밀보호를 위해 "회원" 자신이 정한 문자 또는 숫자의 조합을 의미합니다.<br></br>
                &nbsp; ⑹ "등급"이라 함은 서비스의 효율적 이용을 위해 육믈리에가 임의로 책정 또는 지급, 조정할 수 있는 재산적 가치가 없는 "서비스" 상의 가상 데이터를 의미합니다.<br></br>
                &nbsp; ⑺ "게시물"이라 함은 "회원"이 "서비스"를 이용함에 있어 "서비스상"에 게시한 부호ㆍ문자ㆍ음성ㆍ음향ㆍ화상ㆍ동영상 등의 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크 등을 의미합니다.<br></br>
                </div>
            </div>
            )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck3((e) => !e);
        }}>
                <span>제 3 조 (약관의 명시와 개정)</span>&nbsp;
                {isCheck3? "🍾" : "🍷" }

            </button>
            {isCheck3 && (

            <div>
            <div className={TermsAndConditionsCSS.content}>
            &nbsp; ⑴ "육믈리에"는 이 약관의 내용을 "회원"이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.<br></br>
            &nbsp; ⑵ "육믈리에"는 "약관의규제에관한법률", "정보통신망이용촉진및정보보호등에관한법률(이하 "정보통신망법")" 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.<br></br>
            &nbsp; ⑶ "육믈리에"가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 제1항의 방식에 따라 그 개정약관의 적용일자 30일 전부터 적용일자 전일까지 공지합니다.<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 다만, 회원에게 불리한 약관의 개정의 경우에는 공지 외에 일정기간 서비스내 전자우편, 전자쪽지, 로그인시 동의창 등의 전자적 수단을 통해 따로 명확히 통지하도록 합니다.<br></br>
            &nbsp; ⑷ 육믈리에가 전항에 따라 개정약관을 공지 또는 통지하면서 회원에게 30일 기간 내에 의사표시를 하지 않으면, 의사표시가 표명된 것으로 본다는 뜻을 명확하게<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 공지 또는 통지하였음에도 회원이 명시적으로 거부의 의사표시를 하지 아니한 경우 회원이 개정약관에 동의한 것으로 봅니다.<br></br>
            &nbsp; ⑸ 회원이 개정약관의 적용에 동의하지 않는 경우 육믈리에는 개정 약관의 내용을 적용할 수 없으며, 이 경우 회원은 이용계약을 해지할 수 있습니다.<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 다만, 기존 약관을 적용할 수 없는 특별한 사정이 있는 경우에는 육믈리에는 이용계약을 해지할 수 있습니다.<br></br>
                </div>
            </div>
                        )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck4((e) => !e);
        }}>
                <span>제 4 조 (약관의 해석)</span>&nbsp;
                {isCheck4? "🍾" : "🍷" }

            </button>
            {isCheck4 && (

            <div>
            <div className={TermsAndConditionsCSS.content}>
            &nbsp; ⑴ "육믈리에"는 "유료서비스" 및 개별 서비스에 대해서는 별도의 이용약관 및 정책(이하 "유료서비스약관 등")을 둘 수 있으며,<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 해당 내용이 이 약관과 상충할 경우에는 "유료서비스약관 등"이 우선하여 적용됩니다.<br></br>
            &nbsp; ⑵ 이 약관에서 정하지 아니한 사항이나 해석에 대해서는 "유료서비스약관 등" 및 관계법령 또는 상관례에 따릅니다.<br></br>
                </div>
            </div>
                        )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck5((e) => !e);
        }}>
                <span>제 5 조 (이용계약 체결)</span>&nbsp;
                {isCheck5? "🍾" : "🍷" }

            </button>
            {isCheck5 && (

            <div>
            <div className={TermsAndConditionsCSS.content}>
            &nbsp; ⑴ 이용계약은 "회원"이 되고자 하는 자(이하 "가입신청자")가 약관의 내용에 대하여 동의를 한 다음 회원가입신청을 하고 "육믈리에"가 이러한 신청에 대하여 승낙함으로써 체결됩니다.<br></br>
            &nbsp; ⑵ "육믈리에"는 "가입신청자"의 신청에 대하여 "서비스" 이용을 승낙함을 원칙으로 합니다.<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 다만, "육믈리에"는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.<br></br>
            &nbsp; ⑶ 가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 단 "육믈리에"의 회원 재가입 승낙을 얻은 경우에는 예외로 합니다.<br></br>
            &nbsp; ⑷ 실명이 아니거나 타인의 명의를 이용한 경우<br></br>
            &nbsp; ⑸ 허위의 정보를 기재하거나, "육믈리에"가 제시하는 내용을 기재하지 않은 경우<br></br>
            &nbsp; ⑹ 19세미만 청소년인 경우<br></br>
            &nbsp; ⑺ 이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우<br></br>
            &nbsp; ⑻ 제1항에 따른 신청에 있어 "육믈리에"는 "회원"의 종류에 따라 전문기관을 통한 실명확인 및 본인인증을 요청할 수 있습니다.<br></br>
            &nbsp; ⑼ "육믈리에"는 서비스관련설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다.<br></br>
            &nbsp; ⑽ 이용계약의 성립 시기는 "육믈리에"가 가입완료를 신청절차 상에서 표시한 시점으로 합니다.<br></br>
            &nbsp; ⑾ "육믈리에"는 "회원"에 대해 육믈리에 정책에 따라 등급별로 구분하여 이용시간, 이용횟수, 서비스 메뉴 등을 세분하여 이용에 차등을 둘 수 있습니다.<br></br>
            &nbsp; ⑿ "육믈리에"는 "회원"에 대하여 "영화및비디오물의진흥에관한법률" 및 "청소년보호법"등에 따른 등급 및 연령 준수를 위해 이용제한이나 등급별 제한을 할 수 있습니다.<br></br>
                </div>
            </div>
                        )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck6((e) => !e);
        }}>
                <span>제 6 조 (회원정보의 변경)</span>&nbsp;
                {isCheck6? "🍾" : "🍷" }

            </button>
            {isCheck6 && (

            <div>
            <div className={TermsAndConditionsCSS.content}>
            &nbsp; ⑴ "회원"은 개인정보관리화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다.<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 다만, 서비스 관리를 위해 필요한 실명, 아이디 등은 수정이 불가능합니다.<br></br>
            &nbsp; ⑵ "회원"은 회원가입신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 전자우편 기타 방법으로 "육믈리에"에 대하여 그 변경사항을 알려야 합니다.<br></br>
            &nbsp; ⑶ 제2항의 변경사항을 "육믈리에"에 알리지 않아 발생한 불이익에 대하여 "육믈리에"는 책임지지 않습니다.<br></br>
                </div>
            </div>
                        )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck7((e) => !e);
        }}>
                <span>제 7 조 (개인정보보호 의무)</span>&nbsp;
                {isCheck7? "🍾" : "🍷" }

            </button>
            {isCheck7 && (

            <div>
            <div className={TermsAndConditionsCSS.content}>
            &nbsp; ⑴ "육믈리에"는 "정보통신망법" 등 관계 법령이 정하는 바에 따라 "회원"의 개인정보를 보호하기 위해 노력합니다.<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 개인정보의 보호 및 사용에 대해서는 관련법 및 "육믈리에"의 개인정보처리방침이 적용됩니다.<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 다만, "육믈리에"의 공식 사이트 이외의 링크된 사이트에서는 "육믈리에"의 개인정보처리방침이 적용되지 않습니다.<br></br>
                </div>
            </div>
                        )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck8((e) => !e);
        }}>
                <span>제 8 조 ("회원"의 "아이디" 및 "비밀번호"의 관리에 대한 의무)</span>&nbsp;
                {isCheck8? "🍾" : "🍷" }

            </button>
            {isCheck8 && (

            <div>
            <div className={TermsAndConditionsCSS.content}>
            &nbsp; ⑴ "회원"의 "아이디"와 "비밀번호"에 관한 관리책임은 "회원"에게 있으며, 이를 제3자가 이용하도록 하여서는 안 됩니다.<br></br>
            &nbsp; ⑵ "육믈리에"는 "회원"의 "아이디"가 개인정보 유출 우려가 있거나, 반사회적 또는 미풍양속에 어긋나거나 "육믈리에" 및 "육믈리에"의 운영자로 오인한 우려가 있는 경우,<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 해당 "아이디"의 이용을 제한할 수 있습니다.<br></br>
            &nbsp; ⑶ "회원"은 "아이디" 및 "비밀번호"가 도용되거나 제3자가 사용하고 있음을 인지한 경우에는 이를 즉시 "육믈리에"에 통지하고 "육믈리에"의 안내에 따라야 합니다.<br></br>
            &nbsp; ⑷ 제3항의 경우에 해당 "회원"이 "육믈리에"에 그 사실을 통지하지 않거나, 통지한 경우에도 "육믈리에"의 안내에 따르지 않아 발생한 불이익에 대하여 "육믈리에"는 책임지지 않습니다.<br></br>
                </div>
            </div>
                        )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck9((e) => !e);
        }}>
                <span>제 9 조 ("회원"에 대한 통지)</span>&nbsp;
                {isCheck9? "🍾" : "🍷" }

             </button>
             {isCheck9 && (

             <div>
             <div className={TermsAndConditionsCSS.content}>
             &nbsp; ⑴ "육믈리에"가 "회원"에 대한 통지를 하는 경우 이 약관에 별도 규정이 없는 한 서비스 내 전자우편주소, 전자쪽지 등으로 할 수 있습니다.<br></br>
                </div>
            </div>
                        )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck10((e) => !e);
        }}>
                <span>제 10 조 ("육믈리에"의 의무)</span>&nbsp;
                {isCheck10? "🍾" : "🍷" }

            </button>
            {isCheck10 && (

            <div>
            <div className={TermsAndConditionsCSS.content}>
            &nbsp; ⑴ "육믈리에"는 관련법과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 "서비스"를 제공하기 위하여 최선을 다하여 노력합니다.<br></br>
            &nbsp; ⑵ "육믈리에"는 "회원"이 안전하게 "서비스"를 이용할 수 있도록 개인정보(신용정보 포함)보호를 위해 보안시스템을 갖추어야 하며 개인정보처리방침을 공시하고 준수합니다.<br></br>
            &nbsp; ⑶ "육믈리에"는 서비스이용과 관련하여 발생하는 이용자의 불만 또는 피해구제요청을 적절하게 처리할 수 있도록 필요한 인력 및 시스템을 구비합니다.<br></br>
            &nbsp; ⑷ "육믈리에"는 서비스이용과 관련하여 "회원"으로부터 제기된 의견이나 불만이 정당하다고 인정할 경우에는 이를 처리하여야 합니다.<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "회원"이 제기한 의견이나 불만사항에 대해서는 게시판을 활용하거나 전자우편 등을 통하여 "회원"에게 처리과정 및 결과를 전달합니다.<br></br>
                </div>
            </div>
                        )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck11((e) => !e);
        }}>
                <span>제 11 조 ("회원"의 의무)</span>&nbsp;
                {isCheck11? "🍾" : "🍷" }

            </button>
            {isCheck11 && (

            <div>
            <div className={TermsAndConditionsCSS.content}>
            &nbsp; ⑴ "회원"은 다음 행위를 하여서는 안 됩니다.<br></br>
            &nbsp; ⑵ 신청 또는 변경 시 허위내용의 등록<br></br>
            &nbsp; ⑶ 타인의 정보도용<br></br>
            &nbsp; ⑷ "육믈리에"가 게시한 정보의 변경<br></br>
            &nbsp; ⑸ "육믈리에"가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시<br></br>
            &nbsp; ⑹ "육믈리에"와 기타 제3자의 저작권 등 지적재산권에 대한 침해<br></br>
            &nbsp; ⑺ "육믈리에" 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위<br></br>
            &nbsp; ⑻ 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 "서비스"에 공개 또는 게시하는 행위<br></br>
            &nbsp; ⑼ 육믈리에의 동의 없이 영리를 목적으로 "서비스"를 사용하는 행위<br></br>
            &nbsp; ⑽ 기타 불법적이거나 부당한 행위<br></br>
            &nbsp; ⑾ "회원"은 관계법, 이 약관의 규정, 이용안내 및 "서비스"와 관련하여 공지한 주의사항, "육믈리에"가 통지하는 사항 등을 준수하여야 하며,기타 "육믈리에"의 업무에 방해되는 행위를 하여서는 안 됩니다.<br></br>
            &nbsp; ⑿ "회원"이 게시판을 이용하여 통신판매 또는 통신판매중개를 업으로 하는 경우 전자상거래등 에서의 소비자보호에 관한 법률에 따른 의무를 준수하여야 하며,<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 육믈리에는 개별 서비스 이용약관 및 정책에서 관련 내용을 규정할 수 있습니다.<br></br>
                </div>
            </div>
                        )}

        </li>                
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck12((e) => !e);
        }}>
                <span>제 12 조 ("서비스"의 제공 등)</span>&nbsp;
                {isCheck12? "🍾" : "🍷" }

            </button>
            {isCheck12 && (

            <div>
            <div className={TermsAndConditionsCSS.content}>
            &nbsp; ⑴ 육믈리에는 회원에게 아래와 같은 서비스를 제공합니다.<br></br>
            &nbsp; ⑵ 검색 서비스(와인정보 검색)<br></br>
            &nbsp; ⑶ 게시판형 서비스 (와인 인포메이션, 와인셀러)<br></br>
            &nbsp; ⑷ 기타 "육믈리에"가 추가 개발하거나 다른 육믈리에와의 제휴계약 등을 통해 "회원"에게 제공하는 일체의 서비스<br></br>
            &nbsp; ⑸ 육믈리에는 "서비스"를 일정범위로 분할하여 각 범위 별로 이용가능시간을 별도로 지정할 수 있습니다. 다만, 이러한 경우에는 그 내용을 사전에 공지합니다.<br></br>
            &nbsp; ⑹ "서비스"는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.<br></br>
            &nbsp; ⑺ "육믈리에"는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상 상당한 이유가 있는 경우 "서비스"의 제공을 일시적으로 중단할 수 있습니다.<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 이 경우 "육믈리에"는 제9조["회원"에 대한 통지]에 정한 방법으로 "회원"에게 통지합니다. 다만, "육믈리에"가 사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.<br></br>
            &nbsp; ⑻ "육믈리에"는 서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검시간은 서비스제공화면에 공지한 바에 따릅니다.<br></br>
                </div>
            </div>
                        )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck13((e) => !e);
        }}>
                <span>제 13 조 ("서비스"의 변경)</span>&nbsp;
                {isCheck13? "🍾" : "🍷" }

            </button>
            {isCheck13 && (

        <div>
        <div className={TermsAndConditionsCSS.content}>
        &nbsp; ⑴ "육믈리에"는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 "서비스"를 변경할 수 있습니다.<br></br>
        &nbsp; ⑵ "서비스"의 내용, 이용방법, 이용시간에 대하여 변경이 있는 경우에는 변경사유, 변경될 서비스의 내용 및 제공일자 등은 그 변경 전에 해당 서비스 초기화면에 게시하여야 합니다.<br></br>
        &nbsp; ⑶ "육믈리에"는 무료로 제공되는 서비스의 일부 또는 전부를 “육믈리에”의 정책 및 운영의 필요상 수정, 중단, 변경할 수 있으며,<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 이에 대하여 관련법에 특별한 규정이 없는 한"회원"에게 별도의 보상을 하지 않습니다.<br></br>
            </div>
        </div>
                    )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck14((e) => !e);
        }}>
                <span>제 14 조 (정보의 제공 및 광고의 게재)</span>&nbsp;
                {isCheck14? "🍾" : "🍷" }

            </button>
            {isCheck14 && (

        <div>
        <div className={TermsAndConditionsCSS.content}>
        &nbsp; ⑴ "육믈리에"는 "회원"이 "서비스" 이용 중 필요하다고 인정되는 다양한 정보를 공지사항이나 전자우편 등의 방법으로 "회원"에게 제공할 수 있습니다.<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 다만, "회원"은 관련법에 따른 거래관련 정보 및 고객문의 등에 대한 답변 등을 제외하고는 언제든지 전자우편에 대해서 수신 거절을 할 수 있습니다.<br></br>
        &nbsp; ⑵ 제1항의 정보를 전화 및 모사전송기기에 의하여 전송하려고 하는 경우에는 "회원"의 사전 동의를 받아서 전송합니다. 다만, "회원"의 거래관련 정보 및 고객문의 등에 대한 회신에 있어서는 제외됩니다.<br></br>
        &nbsp; ⑶ "육믈리에"는 "서비스"의 운영과 관련하여 서비스 화면, 홈페이지, 전자우편 등에 광고를 게재할 수 있습니다. 광고가 게재된 전자우편을 수신한 "회원"은 수신거절을 "육믈리에"에게 할 수 있습니다.<br></br>
        &nbsp; ⑷ "이용자(회원, 비회원 포함)"는 육믈리에가 제공하는 서비스와 관련하여 게시물 또는 기타 정보를 변경, 수정, 제한하는 등의 조치를 취하지 않습니다.<br></br>
            </div>
        </div>
                    )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck15((e) => !e);
        }}>
                <span>제 15 조 ("게시물"의 저작권)</span>&nbsp;
                {isCheck15? "🍾" : "🍷" }

            </button>
            {isCheck15 && (

        <div>
        <div className={TermsAndConditionsCSS.content}>
        &nbsp; ⑴ "회원"이 "서비스" 내에 게시한 "게시물"의 저작권은 해당 게시물의 저작자에게 귀속됩니다.<br></br>
        &nbsp; ⑵ "회원"이 "서비스" 내에 게시하는 "게시물"은 검색결과 내지 "서비스" 및 관련 프로모션 등에 노출될 수 있으며, 해당 노출을 위해 필요한 범위 내에서는 일부 수정, 복제, 편집되어 게시될 수 있습니다.<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  이 경우, “육믈리에”는 저작권법 규정을 준수하며, "회원"은 언제든지 고객센터 또는 "서비스" 내 관리기능을 통해 해당 게시물에 대해 삭제, 검색결과 제외, 비공개 등의 조치를 취할 수 있습니다.<br></br>
        &nbsp; ⑶ "육믈리에"는 제2항 이외의 방법으로 "회원"의 "게시물"을 이용하고자 하는 경우에는 전화, 팩스, 전자우편 등을 통해 사전에 "회원"의 동의를 얻어야 합니다.<br></br>
            </div>
        </div>
                    )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck16((e) => !e);
        }}>
                <span>제 16 조 ("게시물"의 관리)</span>&nbsp;
                {isCheck16? "🍾" : "🍷" }

            </button>
            {isCheck16 && (

            <div>
            <div className={TermsAndConditionsCSS.content}>
            &nbsp; ⑴ "회원"의 "게시물"이 "정보통신망법" 및 "저작권법"등 관련법에 위반되는 내용을 포함하는 경우,<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 권리자는 관련법이 정한 절차에 따라 해당 "게시물"의 게시중단 및 삭제 등을 요청할 수 있으며, "육믈리에"는 관련법에 따라 조치를 취하여야 합니다.<br></br>
            &nbsp; ⑵ "육믈리에"는 전항에 따른 권리자의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 기타 “육믈리에” 정책 및 관련법에 위반되는 경우에는 관련법에 따라 해당 "게시물"에 대해 임시조치 등을 취할 수 있습니다.<br></br>
            &nbsp; ⑶ 본 조항에 따른 세부절차는 "정보통신망법" 및 "저작권법"이 규정한 범위 내에서 진행됩니다.<br></br>
                </div>
            </div>
                        )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck17((e) => !e);
        }}>
                <span>제 17 조 (권리의 귀속)</span>&nbsp;
                {isCheck17? "🍾" : "🍷" }

            </button>
            {isCheck17 && (

            <div>
            <div className={TermsAndConditionsCSS.content}>
            &nbsp; ⑴ "서비스"에 대한 저작권 및 지적재산권은 "육믈리에"에 귀속됩니다. 단, "회원"의 "게시물(단, 시음노트 제외)" 및 제휴계약에 따라 제공된 저작물 등은 제외합니다.<br></br>
            &nbsp; ⑵ "육믈리에"는 서비스와 관련하여 "회원"에게 "육믈리에"가 정한 이용조건에 따라 계정, "아이디", 콘텐츠, 등을 이용할 수 있는 이용권만을 부여하며,<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "회원"은 이를 양도, 판매, 담보 제공 등의 처분행위를 할 수 없습니다.<br></br>
                </div>    
            </div>
                        )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck18((e) => !e);
        }}>
                <span>제 18 조 (계약해제, 해지 등)</span>&nbsp;
                {isCheck18? "🍾" : "🍷" }

            </button>
            {isCheck18 && (

        <div>
        <div className={TermsAndConditionsCSS.content}>
        &nbsp; ⑴ "회원"은 언제든지 서비스초기화면의 고객센터 또는 내 정보 관리 메뉴 등을 통하여 이용계약 해지 신청을 할 수 있으며, "육믈리에"는 관련법 등이 정하는 바에 따라 이를 즉시 처리하여야 합니다.<br></br>
        &nbsp; ⑵ "회원"이 계약을 해지할 경우, 관련법 및 개인정보처리방침에 따라 "육믈리에"가 회원정보를 보유하는 경우를 제외하고는 해지 즉시 "회원"의 모든 데이터는 소멸됩니다.<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 즉, 회원정보 이용기록은 모두 삭제되며, 삭제된 데이터는 복구되지 않습니다.<br></br>
        &nbsp; ⑶ "회원"이 계약을 해지하는 경우, "회원"이 작성한 "게시물" 중, 본인 계정에 등록된 게시물 일체는 삭제됩니다.<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 다만, 타인에 의해 담기, 스크랩 등이 되어 재 게시되거나, 공개형 게시판에 등록된 "게시물" 등은 삭제되지 않으니 사전에 삭제 후 탈퇴 하시기 바랍니다.<br></br>
        &nbsp; ⑷ 탈퇴 후에는 회원정보가 삭제되어 본인 여부를 확인 할 수 있는 방법이 없어, 게시글을 임의로 삭제해 드릴 수 없습니다<br></br>
        &nbsp; ⑸ 탈퇴 후 재가입 하여도 과거에 작성한 게시물에 대한 회원정보가 삭제되고 본인 여부를 확인 할 수 있는 방법이 없으므로 본 게시물의 소유권은 본인에게 귀속되지 않고 “육믈리에”에 귀속됩니다.<br></br>
            </div>
        </div>
                    )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck19((e) => !e);
        }}>
                <span>제 19 조 (이용제한 등)</span>&nbsp;
                {isCheck19? "🍾" : "🍷" }

            </button>
            {isCheck19 && (

            <div>
                <div className={TermsAndConditionsCSS.content}>
                &nbsp; ⑴ "육믈리에"는 "회원"이 해당 약관의 의무를 위반하거나 "서비스"의 정상적인 운영을 방해한 경우, "서비스" 이용을 제한할 수 있습니다.<br></br>
                &nbsp; ⑵ "육믈리에"는 전항에도 불구하고, "주민등록법"을 위반한 명의도용 및 결제도용, "저작권법" 및 "컴퓨터프로그램보호법"을 위반한 불법프로그램의 제공 및<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 운영방해,"정보통신망법"을 위반한 불법통신 및 해킹, 악성프로그램의 배포, 접속권한 초과행위 등과 같이 관련법을 위반한 경우에는 즉시 영구이용정지를 할 수 있습니다.<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 본 항에 따른 영구이용정지 시 "서비스" 이용을 통해 획득한 혜택 등도 모두 소멸되며, "육믈리에"는 이에 대해 별도로 보상하지 않습니다.<br></br>
                &nbsp; ⑶ "육믈리에"는 본 조의 이용제한 범위 내에서 제한의 조건 및 세부내용은 이용제한정책 및 개별 서비스상의 운영정책에서 정하는 바에 의합니다.<br></br>
                &nbsp; ⑷ 본 조에 따라 "서비스" 이용을 제한하거나 계약을 해지하는 경우에는 "육믈리에"는 제9조["회원"에 대한 통지]에 따라 통지합니다.<br></br>
                &nbsp; ⑸ "회원"은 본 조에 따른 이용제한 등에 대해 "육믈리에"가 정한 절차에 따라 이의신청을 할 수 있습니다.<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 이 때 이의가 정당하다고 "육믈리에"가 인정하는 경우 "육믈리에"는 즉시 "서비스"의 이용을 재개합니다.<br></br>
                </div>
            </div>
                        )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck20((e) => !e);
        }}>
                <span>제 20 조 (책임제한)</span>&nbsp;
                {isCheck20? "🍾" : "🍷" }

            </button>
            {isCheck20 && (

            <div>
            <div className={TermsAndConditionsCSS.content}>
            &nbsp; ⑴ "육믈리에"는 천재지변 또는 이에 준하는 불가항력으로 인하여 "서비스"를 제공할 수 없는 경우에는 "서비스" 제공에 관한 책임이 면제됩니다.<br></br>
            &nbsp; ⑵ "육믈리에"는 "회원"의 귀책사유로 인한 "서비스" 이용의 장애에 대하여는 책임을 지지 않습니다.<br></br>
            &nbsp; ⑶ "육믈리에"는 "회원"이 "서비스"와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.<br></br>
            &nbsp; ⑷ "육믈리에"는 "회원" 간 또는 "회원"과 제3자 상호간에 "서비스"를 매개로 하여 거래 등을 한 경우에는 책임이 면제됩니다.<br></br>
            &nbsp; ⑸ "육믈리에"는 무료로 제공되는 서비스 이용과 관련하여 관련법에 특별한 규정이 없는 한 책임을 지지 않습니다.<br></br>
                </div>
            </div>
                        )}

        </li>
<br></br>
        <li>
        <button className={TermsAndConditionsCSS.buttonHeader}
        onClick={() => {
            setCheck21((e) => !e);
        }}>
                <span>제 21 조 (준거법 및 재판관할)</span>&nbsp;
                {isCheck21? "🍾" : "🍷" }

            </button>
            {isCheck21 && (

        <div>
        <div className={TermsAndConditionsCSS.content}>
        &nbsp; ⑴ "육믈리에"와 "회원" 간 제기된 소송은 대한민국법을 준거법으로 합니다.<br></br>
        &nbsp; ⑵ "육믈리에"와 "회원"간 발생한 분쟁에 관한 소송은 제소 당시의 "회원"의 주소에 의하고, 주소가 없는 경우 거소를 관할하는 지방법원의 전속관할로 합니다.<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 단, 제소 당시 "회원"의 주소 또는 거소가 명확하지 아니한 경우의 관할법원은 민사소송법에 따라 정합니다.<br></br>
        &nbsp; ⑶ 해외에 주소나 거소가 있는 "회원"의 경우 "육믈리에"와 "회원"간 발생한 분쟁에 관한 소송은 전항에도 불구하고 대한민국 서울중앙지방법원을 관할법원으로 합니다.<br></br>
            </div>
        </div>        
                    )}

    </li>
<br></br>
        <li>
                <span>이 약관은 2023년 1월 31일부터 적용됩니다.</span>
        </li>
    </div>
</div>
    )
}
export default TermsAndConditions;