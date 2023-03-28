import ContactUsCSS from './ContactUsCSS.module.css'
import React, { useEffect } from 'react';

const { kakao } = window;


function ContactUs() {

    useEffect(()=>{
        const script = document.createElement('script');
        script.async = true;
        try{
          if (window.Kakao) {
            const kakao = window.Kakao;
            if (!kakao.isInitialized()) {
              kakao.init("1fd74f5f27aabf8fda7cde5ad3a6268e");
            }
          }
    
        window.Kakao.Channel.createChatButton({
          container: '#kakao-talk-channel-chat-button',
          channelPublicId: '_nVSFxj',
          title: 'consult',
          size: 'large',
          color: 'yellow',
          shape: 'pc',
          supportMultipleDensities: true,
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      } catch (err){}
      }, [])

    return(
        
        <div>
            <h1 className={ContactUsCSS.header}>어떻게 도와드릴까요?</h1>
    <br></br>
                <div className={ContactUsCSS.contents}>
                    <div className={ContactUsCSS.kakao}>
                        <div id="kakao-talk-channel-chat-button" style={{width:'100%', height:'60%', marginTop: '40px'}}></div>
                        <h4 style={{marginTop: '-10px'}}>
                            카카오톡 1:1 채널<br></br>
                            @sixmelie
                        </h4>
                    </div>
                    <div className={ContactUsCSS.email}>
                        <div>
                            <img src="../../images/email.png" style={{width:'60%'}}></img>
                        </div>
                        <h3>
                            contact@sixxmelie.com
                        </h3>
                    </div>
                    <div className={ContactUsCSS.call}>
                        <div>
                            <img src="../../images/call.png" style={{width:'60%'}}></img>
                        </div>
                        <h4>
                            02-1234-5678<br></br>
                            (평일 09:30 ~ 18:10)
                        </h4>
                    </div>
                </div>
        </div>

    )
}

export default ContactUs;