(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{3435:function(e,o){!function(){function e(e){var o=document.cookie.indexOf(e);return o>-1?document.cookie.slice(o+e.length).split(";")[0]:""}function o(e){return function e(o,n){if(d[n]&&d[n][o])return d[n][o];var i=n.indexOf("-");return i>=0?e(o,n.substring(0,i)):"en"!==n?e(n,"en"):o}(e,void 0!==window.locale?window.locale:document.documentElement.hasAttribute("lang")?document.documentElement.getAttribute("lang"):void 0!==navigator.languages?navigator.languages[0]:void 0!==navigator.language?navigator.language:"en")}function n(){if(null===document.body.querySelector(".gdpr-cookie-consent-dialog")){var n="accepted"===e(s)&&""===e(t),i=document.createElement("div");i.className="gdpr-cookie-consent-dialog",i.innerHTML='\n        <div class="gdpr-bg-shroud"></div>\n        <div class="gdpr-dialog">\n          <div class="gdpr-header">\n            <span>'+o("cookie settings")+'</span>\n          </div>\n          <a href="#" id="close-dialog" class="gdpr-close-button" tabindex="0" title="'+o("close dialog")+'">&times;</a>\n          <div class="gdpr-cookie-options">\n            <span class="checkmark"><div class="checkmark_stem"></div><div class="checkmark_kick"></div></span>\n            <span class="gdpr-cookie-item-text">\n              '+o("necessary cookies")+'\n            </span>\n            <span class="gdpr-cookie-flavour-text">\n              '+o("necessary information")+'\n            </span>\n            <div class="gdpr-item-checkbox" tabindex="0">\n              <span class="checkmark '+(n?"":" hidden")+'"><div class="checkmark_stem"></div><div class="checkmark_kick"></div></span>\n            </div>\n            <span class="gdpr-cookie-item-text">\n              '+o("other cookies")+'\n            </span>\n            <span class="gdpr-cookie-flavour-text">\n              '+o("other information")+'\n            </span>\n            <button class="gdpr-cookie-consent-button" tabindex="0">'+o("save settings")+"</button>\n          </div>\n        </div>",i.querySelector(".gdpr-item-checkbox").addEventListener("click",u),i.querySelector(".gdpr-cookie-consent-button").addEventListener("click",f),i.querySelector(".gdpr-close-button").addEventListener("click",p),document.body.appendChild(i)}}function i(){var e=n,i=function(){h(),g()},t=function(){window.addEventListener("click",m),function(){var n=document.createElement("div");n.className="gdpr-cookie-consent-banner",n.innerHTML='\n        <div class="gdpr-cookie-consent-body">\n          <span class="gdpr-flavour-text">'+o("cookie information")+'</span>\n          <a href="#" class="gdpr-settings-link" href="#">'+o("cookie settings")+'</a>\n          <button class="gdpr-cookie-consent-button">'+o("accept cookies")+'</button>\n        </div>\n        <a href="#" class="gdpr-close-button" title="'+o("close banner")+'">&times;</a>',n.querySelector("button").addEventListener("click",i),n.querySelector(".gdpr-close-button").addEventListener("click",i),n.querySelector(".gdpr-settings-link").addEventListener("click",e),document.body.appendChild(n)}()},r=function(e,o){var n=new XMLHttpRequest;n.open("GET",e,!0),n.setRequestHeader("Accept","application/json,text/plain"),n.onreadystatechange=function(){4===n.readyState&&(200!==n.status?o([n.status,n.responseText]):o(null,function(e){try{return window.JSON.parse(e)}catch(e){return null}}(n.responseText)))},n.send(null)};!function(){!function(){var e=document.createElement("style");e.type="text/css",e.innerHTML=k,document.head.appendChild(e)}();for(var e=document.cookie.split(";"),o=0;o<e.length;o++)if(e[o].indexOf(s+"testing")>=0&&(document.cookie=a+"true"+c,t()),e[o].indexOf(s)>=0)return;r("https://trello.com/1/cookieConsent",function(e,o){e||o&&o.showBanner&&(document.cookie=a+"true"+c,t())})}()}var s="gdpr-cookie-consent=",t="opt-out=",a="gdpr-user=",r=new Date;r.setFullYear(r.getFullYear()+1);var c="; path=/ ; expires="+r.toUTCString(),l="; path=/ ; expires=Thu, 01 Jan 1970 00:00:01 GMT;",k='\n  \n.gdpr-cookie-consent-banner {\n  background-color: white;\n  position: fixed;\n  width: 100%;\n  min-height: 50px;\n  bottom: 0;\n  border: none;\n  z-index: 90001;\n\n  font-family: jaf-facitweb, "Helvetica Neue", Arial, sans-serif;\n  font-size: 15px;\n  font-weight: 300;\n}\n\n@media print {\n  .gdpr-cookie-consent-banner {\n    display: none;\n  }\n}\n\n.gdpr-cookie-consent-banner .gdpr-cookie-consent-body {\n  position: static;\n  padding-left: 15px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  text-align: center;\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.gdpr-cookie-consent-banner .gdpr-settings-link {\n  margin-left: 0px;\n  margin-right: 5px;\n  color: black;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\na.gdpr-close-button {\n  padding: 5px 10px 5px 4px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  font-size: 15pt;\n  font-weight: 350;\n  color: #838C91;\n  text-decoration: none;\n}\n\na.gdpr-close-button:visited {\n  color: #838C91;\n}\n\n.gdpr-cookie-consent-button {\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 700;\n  line-height: 22px;\n  margin: 0 4px 0 10px;\n  padding: 5px 16px;\n  text-align: center;\n\n  background: #5AAC44;\n  box-shadow: 0 1px 0 #519839;\n  color: #fff;\n  -webkit-transition: background .3s ease; /* Safari */\n  transition: background .3s ease;\n}\n\nbutton.gdpr-cookie-consent-button:hover, button.gdpr-cookie-consent-button:focus {\n  background: #519839 100%;\n  color: #fff;\n}\n\nbutton.gdpr-cookie-consent-button:active {\n  background: #49852E 100%;\n}\n\n.gdpr-cookie-consent-dialog {\n  font-family: jaf-facitweb, "Helvetica Neue", Arial, sans-serif;\n  font-size: 15px;\n  font-weight: 300;\n}\n\n.gdpr-cookie-consent-dialog .gdpr-bg-shroud {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0,0,0,0.7);\n  z-index: 90002;\n}\n\n.gdpr-cookie-consent-dialog .gdpr-dialog {\n  position: fixed;\n  top: 20%;\n  left: 50%;\n  margin-left: -150px;\n  background: white;\n  height: auto;\n  width: 430px;\n  z-index: 90003;\n  border-radius: 3px;\n  padding-top: 10px;\n}\n\n.gdpr-cookie-consent-dialog .gdpr-dialog .gdpr-header {\n  text-align: center;\n  border-bottom: 1px solid;\n  border-color: #d7dadc;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n  color: #838C91;\n}\n\n.gdpr-cookie-consent-dialog .gdpr-dialog .gdpr-cookie-options {\n  height: 100%;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.gdpr-cookie-options .gdpr-cookie-consent-button {\n  bottom: 0px;\n  margin-bottom: 20px;\n}\n\n.gdpr-cookie-item-text {\n  display: inline-block;\n  vertical-align: top;\n  font-weight: bold;\n}\n\n.gdpr-cookie-flavour-text {\n  display: block;\n  margin-left: 35px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 12px;\n}\n\n/* Checkmark */\n.checkmark {\n  display:inline-block;\n  width: 22px;\n  height:22px;\n  -ms-transform: rotate(45deg); /* IE 9 */\n  -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */\n  transform: rotate(45deg);\n  padding-left: 8px;\n}\n\n.checkmark.hidden {\n  display: none;\n}\n\n.checkmark_stem {\n  position: absolute;\n  width:2px;\n  height:12px;\n  background-color:#838C91;\n  left:11px;\n  top:6px;\n}\n\n.checkmark_kick {\n  position: absolute;\n  width:4px;\n  height:2px;\n  background-color:#838C91;\n  left:7px;\n  top:16px;\n}\n\n/* Checkboxes */\n\n.gdpr-item-checkbox {\n  display: inline-block;\n  background: #fff;\n  border-radius: 3px;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #D6DADC;\n  border-bottom-color: #C4C9CC;\n  font-weight: bold;\n  line-height: 18px;\n  overflow: hidden;\n  text-align: center;\n  height: 21px;\n  width: 21px;\n  white-space: nowrap;\n  margin-right: 7px;\n}\n\n.gdpr-item-checkbox:hover {\n  background-color: #F8F9F9;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n\n.gdpr-item-checkbox:active {\n  background-color: #E2E4E6;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);\n}\n  ',d={ru:{"other cookies":"Другие Cookie (необязательные)","cookie settings":"Настройки Cookie","accept cookies":"Принять Cookies","close banner":"Закрыть уведомление о принятии Cookie","necessary information":"Эти Cookie требуются для работы сайта, поэтому в наших системах их невозможно выключить. Эти Cookie не сохраняют персональные данные.","save settings":"Сохранить настройки","close dialog":"Закрыть диалоговое окно настроек Cookie.","other information":"Эти Cookie позволяют нам подсчитывать посетителей и ресурсы трафика, чтобы мы могли оценить и улучшить работу нашего сайта. Они помогают нам узнавать, какие страницы являются наиболее и наименее популярными, а также как пользователи перемещаются по сайту.","necessary cookies":"Необходимые Cookie (обязательные)","cookie information":"Файлы cookie нужны нам, чтобы персонализировать контент и рекламу, предоставлять функции социальных сетей и анализировать трафик. Нажав кнопку «Принять», закрыв это сообщение или продолжив использовать наш сайт, вы дадите согласие на использование файлов cookie. Чтобы изменить параметры, перейдите в"},fr:{"other cookies":"Autres cookies (en option)","cookie settings":"Paramètres de cookies","accept cookies":"Accepter les cookies","close banner":"Fermer l'avis de consentement pour les cookies.","necessary information":"Ces cookies sont indispensables au bon fonctionnement du site Web et ne peuvent pas être désactivés dans nos systèmes. Ils n'enregistrent pas les données personnelles. ","save settings":"Enregistrer les paramètres","close dialog":"Fermer la boîte de dialogue des paramètres de cookies.","other information":"Ces cookies nous permettent de compter le nombre de visites et les sources de trafic de manière à ce que nous puissions mesurer et améliorer les performances de notre site. Ils nous permettent de savoir quelles pages sont les plus et les moins populaires et de voir comment les visiteurs naviguent sur le site.","necessary cookies":"Cookies indispensables (requis)","cookie information":"Nous utilisons des cookies afin de personnaliser le contenu et les publicités, de fournir des fonctions relatives aux réseaux sociaux et d'analyser notre trafic. Vous acceptez notre utilisation des cookies si vous cliquez sur « Accepter les cookies », si vous quittez cette bannière ou si vous continuez d'utiliser notre site. Vous pouvez modifier vos préférences dans"},en:{"other cookies":"Other Cookies (Optional)","cookie settings":"Cookie Settings","accept cookies":"Accept Cookies","close banner":"Close the cookie consent notice.","necessary information":"These cookies are necessary for the website to function and cannot be switched off in our systems. These cookies do not store any personally identifiable information.","save settings":"Save Settings","close dialog":"Close the cookie settings dialog.","other information":"These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.","necessary cookies":"Necessary Cookies (Required)","cookie information":'We use cookies to personalize content and ads, to provide social media features and to analyze our traffic.  By clicking "Accept Cookies", exiting this banner or continuing to use our site you accept our use of cookies.  You can change your preferences in'},nl:{"other cookies":"Overige cookies (optioneel)","cookie settings":"Cookie-instellingen","accept cookies":"Cookies accepteren","close banner":"Venster met cookie-toestemming sluiten.","necessary information":"Deze cookies zijn noodzakelijk voor het functioneren van de website en kunnen niet uitgeschakeld worden in ons systeem. Deze cookies slaan geen persoonsgegevens op.","save settings":"Instellingen opslaan","close dialog":"Venster met cookie-instellingen sluiten.","other information":"Met deze cookies kunnen we de hoeveelheid bezoekers en de bronnen van traffic tellen, zodat we de prestatie van onze website kunnen meten en verbeteren. Deze cookies bieden ons inzicht in welke pagina's het minst en meest populair zijn en hoe gebruikers op onze site navigeren.","necessary cookies":"Benodigde cookies (verplicht)","cookie information":"Wij gebruiken cookies om content en advertenties te personaliseren, socialemediafuncties aan te bieden en ons verkeer te analyseren. Door op Cookies accepteren te klikken, deze banner te verlaten of door te gaan met het gebruik van onze site, ga je akkoord met ons gebruik van cookies. Je kunt je voorkeuren wijzigen in"},th:{"other cookies":"คุกกี้อื่น ๆ (เป็นตัวเลือก)","cookie settings":"การตั้งค่าคุกกี้","accept cookies":"ยอมรับคุกกี้","close banner":"ปิดการแจ้งเตือนเนื้อหาคุกกี้","necessary information":"คุกกี้เหล่านี้มีความจำเป็นสำหรับเว็บไซต์เพื่อให้ทำหน้าที่ได้และไม่สามารถปิดระบบของเราได้ คุกกี้เหล่านี้ไม่ได้จัดเก็บข้อมูลใดที่สามารถระบุถึงตัวบุคคลได้","save settings":"บันทึกการตั้งค่า","close dialog":"ปิดกล่องโต้ตอบการตั้งค่าคุกกี้","other information":"คุกกี้เหล่านี้ช่วยให้เราสามารถนับการเข้าชมและแหล่งที่มาของการเข้าชมเพื่อให้เราสามารถวัดและปรับปรุงผลการทำงานของไซต์ได้ คุกกี้เหล่านี้ช่วยให้เราทราบว่าหน้าใดที่ได้รับความนิยมมากที่สุดและเป็นที่นิยมน้อยที่สุด และดูว่าผู้เข้าชมเคลื่่อนไปทั่วไซต์อย่างไร","necessary cookies":"คุกกี้ต่าง ๆ ที่จำเป็น (จำเป็นต้องมี)","cookie information":'เราใช้คุกกี้เพื่อปรับแต่งเนื้อหาและโฆษณาให้เป็นส่วนตัว เพื่อให้บริการคุณลักษณะด้านโซเชียลมีเดียและวิเคราะห์การเข้าชมของเรา เมื่อคลิกที่ "ยอมรับคุกกี้" ออกจากแบนเนอร์ หรือใช้งานเว็บไซต์ของเราต่อจะถือว่าคุณยอมให้เราใช้งานคุกกี้ คุณสามารถปรับตั้งค่าได้ใน'},"zh-Hans":{"other cookies":"其他 Cookie（可选）","cookie settings":"Cookie 设置","accept cookies":"接受 Cookie","close banner":"关闭 cookie 同意通知。","necessary information":"这些 cookie 是网站运行所必须的，在我们的系统中无法关闭。这些 cookie 不会存储任何个人可识别信息。","save settings":"保存设置","close dialog":"关闭 cookie 设置对话框。","other information":"我们可通过这些 cookie 进行访问量和流量来源计数，以便我们衡量和改进我们网站的性能。它们有助于我们了解哪些页面最受欢迎、哪些最不受欢迎，并了解访问者在网站内的移动情况。","necessary cookies":"必要的 Cookie（必须使用）","cookie information":"我们通过 Cookies 个性化内容和广告，从而提供社交媒体功能并分析我们的流量。通过点击“接受 Cookies”、退出此横幅或继续使用我们的网站，即表示你允许我们使用 Cookies。你可以在下面的位置修改你的首选项："},vi:{"other cookies":"Các cookie khác (Không bắt buộc)","cookie settings":"Cài đặt Cookie","accept cookies":"Chấp nhận Cookie","close banner":"Đóng thông báo chấp nhận cookie.","necessary information":"Các cookie này là cần thiết để trang web hoạt động và không thể tắt trong hệ thống của chúng tôi. Các cookie này không lưu trữ bất kỳ thông tin nhận dạng cá nhân nào.","save settings":"Lưu Cài đặt","close dialog":"Đóng hộp thoại cài đặt cookie.","other information":"Những cookie này cho phép chúng tôi đếm số lần truy cập và nguồn lưu lượng truy cập để chúng tôi có thể đo lường và cải thiện hiệu suất của trang web của chúng tôi. Các cookie này giúp chúng tôi biết trang nào là phổ biến nhất và ít phổ biến nhất và xem cách khách truy cập di chuyển quanh trang web.","necessary cookies":"Cookie cần thiết (Bắt buộc)","cookie information":'Chúng tôi sử dụng cookie để cá nhân hóa nội dung và quảng cáo, để cung cấp các tính năng truyền thông xã hội và để phân tích lưu lượng truy cập của chúng tôi. Bằng cách nhấp vào "Chấp nhận cookie", thoát khỏi biểu ngữ này hoặc tiếp tục sử dụng trang web của chúng tôi, bạn chấp nhận việc sử dụng cookie của chúng tôi. Bạn có thể thay đổi tùy chọn của mình tại'},nb:{"other cookies":"Andre informasjonskapsler (Valgfrie)","cookie settings":"Innstillinger for informasjonskapsler","accept cookies":"Aksepter informasjonskapsler","close banner":"Lukk godkjenning av informasjonskapsler","necessary information":"Disse informasjonskapslene er nødvendige for at nettstedet skal fungere og kan ikke slås av i våre systemer. Informasjonskapslene lagrer ikke personlig identifiserbar informasjon.","save settings":"Lagre Innstillinger","close dialog":"Lukk dialogen for godkjenning av informasjonskapsler","other information":"Disse informasjonskapslene tillater oss å telle besøk og trafikkilder, slik at vi kan måle og forbedre ytelsen til nettstedet vårt. De hjelper oss å vite hvilke sider som er mest og minst populære, og se hvordan besøkende beveger seg rundt på nettstedet.","necessary cookies":"Nødvendige informasjonskapsler (Påkrevd)","cookie information":'Vi bruker informasjonskapsler for å personliggjøre innhold og annonser, for å tilby funksjoner for sosiale medier, og for analysere datatrafikken vår. Ved å klikke på "Tillat informasjonskapsler", forlate dette banneret eller fortsette å bruke nettstedet vårt aksepterer du bruken av informasjonskapsler. Du kan endre innstillingene dine i '},de:{"other cookies":"Sonstige Cookies (optional)","cookie settings":"Cookie-Einstellungen","accept cookies":"Cookies akzeptieren","close banner":"Hinweis zur Zustimmung zu Cookies schließen.","necessary information":"Diese Cookies sind für die Funktionalität der Website unerlässlich und können nicht deaktiviert werden. Mithilfe dieser Cookies werden keine personenbezogenen Daten gespeichert.","save settings":"Einstellungen speichern","close dialog":"Cookie-Einstellungen schließen.","other information":"Mithilfe dieser Cookies können wir Seitenaufrufe und Traffic-Ursprünge erfassen, um die Leistung unserer Website zu messen und zu verbessern. Außerdem erfahren wir so, welche Seiten am unbeliebtesten sind und wie die Besucher durch unsere Website navigieren.","necessary cookies":"Notwendige Cookies (erforderlich)","cookie information":"Mithilfe von Cookies personalisieren wir Inhalte und Werbeanzeigen, um Funktionen zu sozialen Netzwerken anzubieten und unseren Traffic analysieren zu können. Indem Sie auf „Cookies akzeptieren” klicken, dieses Banner schließen oder unsere Website weiterhin verwenden, akzeptieren Sie die Nutzung von Cookies auf unserer Seite. Sie können Ihre Präferenzen ändern in den"},tr:{"other cookies":"Diğer Çerezler (İsteğe Bağlı)","cookie settings":"Çerez Ayarları","accept cookies":"Çerezleri Kabul Et","close banner":"Çerez onay bildirimini kapatın.","necessary information":"Bu çerezler web sitesinin düzgün çalışması için gereklidir ve sistemlerimizde kapatılamaz. Bu çerezlerde kişisel olarak tanımlayıcı bilgi saklanmaz.","save settings":"Ayarları Kaydet","close dialog":"Çerez ayarları iletişim penceresini kapatın.","other information":"Bu çerezler ziyaretlerin ve trafik kaynaklarının sayımını yaparak sitemizin performansını ölçmemize ve geliştirmemize imkan verir. Hangi sayfaların en çok ve en az popüler olduğunu bilmemize ve ziyaretçilerin sitede nasıl dolaştığını görmemize yardımcı olur.","necessary cookies":"Gerekli Çerezler (Şart)","cookie information":'İçeriği ve reklamları kişiselleştirmek, sosyal medya özellikleri sunmak ve trafiğimizi analiz etmek için çerez kullanıyoruz. "Çerezleri Kabul Et" seçeneğine tıklayarak, bu başlıktan çıkarak veya sitemizi kullanmaya devam ederek çerez kullanımımızı kabul etmiş olursunuz. Tercihlerinizi şuradan değiştirebilirsiniz:'},it:{"other cookies":"Altri cookie (facoltativi)","cookie settings":"Impostazioni dei cookie","accept cookies":"Accetta cookie","close banner":"Chiudi l'informativa di consenso sui cookie.","necessary information":"Questi cookie sono necessari per il funzionamento del sito Web e non possono essere disattivati nei nostri sistemi. Questi cookie non memorizzano alcuna informazione personale identificativa.","save settings":"Salva impostazioni","close dialog":"Chiudi la finestra di dialogo delle impostazioni dei cookie.","other information":"Questi cookie ci consentono di contare le visite e le origini del traffico in modo da poter misurare e migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali sono le pagine più e meno popolari e vedere come i visitatori si muovono nel sito.","necessary cookies":"Cookie necessari (obbligatori)","cookie information":"Utilizziamo i cookie per personalizzare contenuti e annunci, offrire funzioni legate ai social media e analizzare il tuo traffico. Se fai clic su “Accetta cookie”, chiudi questo banner o continui a usare il nostro sito, ci autorizzi all’uso dei cookie. Puoi cambiare le tue preferenze in"},"zh-Hant":{"other cookies":"其他 Cookie (選用)","cookie settings":"Cookie 設定","accept cookies":"接受使用 Cookie","close banner":"關閉 Cookie 同意通知。","necessary information":"此類 Cookie 是網站順利運作的必備元件，無法從系統中關閉。這些 Cookie 不會儲存任何個人身分識別資料。","save settings":"儲存設定","close dialog":"關閉 Cookie 設定對話。","other information":"此類 Cookie 有助於我們計算訪客人數及流量來源，據此測量及改善網站效能。這能幫助我們瞭解各頁面的瀏覽人次，找出最多或最少人查看的頁面，並掌握訪客在網站上的瀏覽軌跡。","necessary cookies":"必要 Cookie (必備)","cookie information":"我們使用 Cookie 為你打造個人化內容和廣告、提供社群媒體功能，以及分析流量。按下「接受 Cookie」、關閉此橫幅或繼續使用網站，均表示你接受我們使用 Cookie 之行為。你可以到以下位置變更偏好設定："},hu:{"other cookies":"Egyéb cookie-k (nem kötelező)","cookie settings":"Cookie-k beállításai","accept cookies":"Cookie-k elfogadása","close banner":"A cookie-k elfogadásával kapcsolatos értesítés bezárása.","necessary information":"Ezek a cookie-k szükségesek a webhely megfelelő működéséhez, ezért nem kapcsolhatók ki a rendszereinkben. Ezek a cookie-k nem tartalmaznak semmilyen személyazonosításra alkalmas adatot.","save settings":"Beállítások mentése","close dialog":"A cookie-k beállításával kapcsolatos párbeszédablak bezárása.","other information":"Ezek a cookie-k lehetővé teszik a látogatók és a forgalomforrások számlálását, hogy mérhessük és javíthassuk a webhelyünk teljesítményét. Az ő segítségükkel tudjuk meghatározni, hogy melyek a legnépszerűbb és a legkevésbé látogatott aloldalaink, és azt is láthatjuk, hogyan navigálnak a látogatók az oldalainkon.","necessary cookies":"Szükséges cookie-k (kötelező)","cookie information":"Az oldalon sütiket használunk a személyre szabott tartalmak és hirdetések megjelenítésére, a közösségimédia-szolgáltatások biztosítására, illetve az adatforgalmunk elemzésére. Ha a „Cookie-k elfogadása” gombra kattintasz, ha bezárod ezt a szalaghirdetést, vagy ha továbbra is használod a webhelyünket, azzal jóváhagyod számunkra a cookie-k használatát. A beállításaid módosítása:"},"pt-BR":{"other cookies":"Outros cookies (opcionais)","cookie settings":"Configurações de cookies","accept cookies":"Aceitar cookies","close banner":"Fechar o aviso de consentimento de cookies.","necessary information":"Esses cookies são necessários para que o site funcione e não podem ser desligados em nossos sistemas. Esses cookies não armazenam informações pessoais identificáveis.","save settings":"Salvar configurações","close dialog":"Fechar a janela de configurações de cookies.","other information":"Esses cookies nos permitem contar visitas e origens do tráfego para que possamos mensurar e melhorar o desempenho do nosso site. Eles nos ajudam a saber quais páginas são mais ou menos populares e a ver como os visitantes navegam nos site.","necessary cookies":"Cookies necessários (obrigatórios)","cookie information":'Usamos cookies para personalizar conteúdo e anúncios, oferecer recursos para redes sociais e analisar nosso tráfego. Ao clicar em "Aceitar cookies", sair deste banner ou continuar usando nosso site, você aceita nosso uso de cookies. É possível alterar suas preferências em'},es:{"other cookies":"Otras cookies (opcional)","cookie settings":"Configuración de las cookies","accept cookies":"Aceptar cookies","close banner":"Cerrar el aviso de consentimiento de las cookies.","necessary information":"Estas cookies son necesarias para el correcto funcionamiento del sitio web y no es posible desactivarlas en nuestros sistemas. Estas cookies no almacenan ningún tipo de información personalmente identificable.","save settings":"Guardar configuración","close dialog":"Cerrar el diálogo de configuración de las cookies.","other information":"Estas cookies nos permiten contabilizar visitas y fuentes de tráfico, lo que nos ayuda a medir y mejorar el rendimiento de nuestro portal, así como conocer qué páginas son las más y las menos populares y cómo se mueven los visitantes por el mismo.","necessary cookies":"Cookies necesarias (obligatorio)","cookie information":'Utilizamos las cookies para personalizar el contenido y los anuncios, ofrecer funcionalidades de redes sociales y analizar su tráfico. Al hacer clic en "Aceptar cookies", salir de este banner o continuar utilizando nuestro sitio, acepta el uso que hacemos de las cookies. Puede modificar sus preferencias en'},uk:{"other cookies":"Інші cookie (не обов’язково)","cookie settings":"Налаштування файлів cookie","accept cookies":"Прийняти cookie","close banner":"Закрити сповіщення із запитом на приймання файлів cookie.","necessary information":"Ці файли cookie необхідні для роботи веб-сайту, їх використання неможливо вимкнути в нашій системі. У них не зберігається інформація, що дає можливість визначити особу.","save settings":"Зберегти налаштування","close dialog":"Закрити діалогове вікно з налаштуваннями файлів cookie.","other information":"Ці файли cookie дають нам можливість рахувати відвідування та джерела трафіку, щоб ми могли вимірювати й покращувати продуктивність нашого веб-сайту. Вони допомагають нам дізнатися, які сторінки є найбільш та найменш популярними, і побачити, як відвідувачі пересуваються веб-сайтом.","necessary cookies":"Необхідні cookie (обов’язкові)","cookie information":"Файли cookie використовуються для персоналізації контенту й реклами, інтеграції соціальних мереж та аналізу нашого трафіку. Натискаючи кнопку «Прийняти cookie», залишивши це вікно або продовжуючи користуватися нашим веб-сайтом, ви погоджуєтеся з умовами використання файлів cookie. Налаштування можна змінити в меню "},cs:{"other cookies":"Ostatní cookies (Volitelné)","cookie settings":"Nastavení cookies","accept cookies":"Přijmout cookies","close banner":"Zavřít poznámku o souhlasu s cookies.","necessary information":"Tyto cookies jsou nezbytné pro fungování webové stránky a nemohou být vypnuty v našich systémech. Tyto cookies neskladují žádná osobní data.","save settings":"Uložit nastavení","close dialog":"Zavřít dialog s nastavením cookies.","other information":"Tyto cookies nám umožňují počítat návštěvnost a vytíženost zdrojů, takže můžeme vylepšovat výkon naší aplikace. Pomáhají nám zjistit, které stránky jsou nejvíce a nejméně populární a jak se návštěvníci po stránce pohybují.","necessary cookies":"Nutné cookies (Požadované)","cookie information":"Soubory cookie používáme za účelem přizpůsobení obsahu a reklam, poskytování funkcí sociálních médií a analýzy provozu na našem webu. Kliknutím na možnost Přijmout cookies, odchodem z tohoto banneru nebo pokračováním v používání našich stránek vyjadřujete svůj souhlas s používáním souborů cookie. Své nastavení si můžete změnit v"},fi:{"other cookies":"Muut evästeet (Valinnaiset)","cookie settings":"Evästeasetukset","accept cookies":"Hyväksy evästeet","close banner":"Sulje evästeiden hyväksymisikkuna.","necessary information":"Nämä evästeet ovat välttämättömiä sivuston toiminnan kannalta, eikä niitä voi kytkeä pois päältä järjestelmässä. Nämä evästeet eivät varastoi henkilötietoja.","save settings":"Tallenna asetukset","close dialog":"Sulje evästeiden asetusikkuna.","other information":"Näiden evästeiden ansiosta voimme laskea vierailut ja analysoida niiden lähteitä, mikä puolestaan mahdollistaa sivuston suorituskyvyn arvioinnin ja parantelun.","necessary cookies":"Tarvittavat evästeet (välttämättömät)","cookie information":'Käytämme evästeitä mukauttaaksemme sisällön ja mainokset juuri sinulle sopiviksi, tarjotaksemme sosiaalisen median ominaisuuksia sekä analysoidaksemme sivuston käyttöä. Kun napsautat "Hyväksy evästeet" -painiketta, poistut tästä bannerista tai jatkat sivustomme käyttöä, hyväksyt evästeiden käyttömme. Voit muuttaa suosikkiasetuksiasi'},sv:{"other cookies":"Övriga cookies (valfria)","cookie settings":"Cookie-inställningar","accept cookies":"Acceptera cookies","close banner":"Stäng meddelandet om cookie-medgivande.","necessary information":"Dessa cookies är nödvändiga för att webbplatsen ska fungera och kan inte stängas av i våra system. Dessa cookies lagrar inte några uppgifter som kan identifiera en enskild person.","save settings":"Spara inställningar","close dialog":"Stäng dialogrutan för cooke-inställningar.","other information":"Dessa cookies ger oss möjlighet att räkna antal besök och mäta trafik så att vi kan förbättra vår webbplats. De hjälper oss att förstå vilka sidor som är mest och minst populära och hur besökare navigerar runt på webbplatsen.","necessary cookies":"Nödvändiga cookies (obligatoriska)","cookie information":'Vi använder cookies för att personifiera innehåll och annonser, för att tillhandahålla sociala mediafunktioner och för att analysera vår trafik. Genom att klicka på "Acceptera cookies" stänga denna banderoll eller fortsätter att använda vår webbplats accepterar du vår användning av cookies. Du kan ändra dina preferenser i'},ja:{"other cookies":"その他のCookie (任意)","cookie settings":"Cookie設定","accept cookies":"Cookieを受け入れる","close banner":"Cookie同意通知を閉じる。","necessary information":"これらのCookieはウェブサイトが機能するために必要であり、当社のシステムではオフにすることはできません。これらのCookieは個人を特定できる情報を一切保存しません。","save settings":"設定を保存","close dialog":"Cookie設定ダイアログを閉じる。","other information":"これらのCookieは、当社が訪問者やトラフィックを数え、サイトのパフォーマンスを計測して改善する役に立ちます。どのページが人気または不人気で、訪問者がサイト内でどのように移動しているかを知る助けになります。","necessary cookies":"必要なCookie (必須)","cookie information":"Trelloでは、コンテンツや広告のカスタマイズ表示、ソーシャルメディア機能の提供、そしてトラフィックの分析のためにクッキーを使用します。「クッキーの使用に同意する」をクリックすること、このバナーを終了すること、またはTrelloのサイトの使用を続行することにより、クッキーの使用に同意するものとします。この設定は、次のリンクから変更できます:"},pl:{"other cookies":"Inne pliki cookies (opcjonalne)","cookie settings":"Ustawienia plików cookies","accept cookies":"Zezwól na korzystanie z plików cookies","close banner":"Zamknij powiadomienie o plikach cookies.","necessary information":"Te pliki cookies są konieczne do prawidłowego działania strony internetowej i nie można wyłączyć korzystania z nich w naszych systemach. Nie przechowują one żadnych informacji umożliwiających identyfikację użytkownika.","save settings":"Zapisz ustawienia","close dialog":"Zamknij okno dialogowe dotyczące plików cookies.","other information":"Te pliki cookies pozwalają nam na zliczanie wizyt i źródeł ruchu, dzięki czemu możemy mierzyć i poprawiać wydajność naszej witryny. Pomagają nam dowiedzieć się, które strony są najbardziej i najmniej popularne oraz zobaczyć, jak odwiedzający poruszają się po stronie.","necessary cookies":"Wymagane pliki cookies (konieczne)","cookie information":"W celu personalizacji treści i reklam oraz przedstawiania funkcji mediów społecznościowych, a także analizy ruchu sieciowego korzystamy z plików cookie. Kliknięcie opcji „Akceptuję pliki cookie”, zamknięcie tego banera lub kontynuowanie używania strony oznacza akceptację naszych plików cookies. Możesz zmienić preferencje w"}},p=function(){var e=document.body.querySelector(".gdpr-cookie-consent-dialog");e.parentNode.removeChild(e)},u=function(){var e=this.querySelector(".checkmark");e.classList.contains("hidden")?e.classList.remove("hidden"):e.classList.add("hidden")},g=function(){document.cookie=s+"accepted"+c,document.cookie=t+"opt-out"+l},m=function(e){var o=document.getElementsByClassName("gdpr-cookie-consent-banner"),n=document.getElementsByClassName("gdpr-cookie-consent-dialog"),i="close-dialog"===e.target.id;o[0]&&o[0].contains(e.target)||n[0]&&n[0].contains(e.target)||i||g()},h=function(){window.removeEventListener("click",m);var e=document.body.querySelector(".gdpr-cookie-consent-banner");e&&e.parentNode.removeChild(e)},f=function(){document.body.querySelector(".gdpr-cookie-consent-dialog").querySelector(".gdpr-item-checkbox .checkmark.hidden")?(document.cookie=t+"opt-out"+c,document.cookie=s+"not-accepted"+c):(document.cookie=s+"accepted"+c,document.cookie=t+"opt-out"+l),p(),h()};window.preventTrelloCookieConsent||document.addEventListener("DOMContentLoaded",i),window.trelloCookieConsent=i,window.trelloCookieConsentDialog=n}()}},[[3435,0]]]);
//# sourceMappingURL=cookieConsent.b6e2cdcbf0dc89c514be.js.map