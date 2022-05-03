__NUXT_JSONP__("/cicd-2.0/chapter5", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao){return {data:[{document:{slug:"chapter5",description:B,title:B,position:100,category:"持續交付2.0：實務導向的DevOps",menuTitle:"Chapter 05",toc:[{id:y,depth:u,text:y},{id:C,depth:u,text:D},{id:E,depth:n,text:F},{id:G,depth:n,text:H},{id:I,depth:u,text:J},{id:K,depth:n,text:L},{id:M,depth:n,text:N},{id:O,depth:n,text:P},{id:Q,depth:u,text:R},{id:S,depth:n,text:T},{id:U,depth:n,text:V},{id:W,depth:n,text:X},{id:Y,depth:n,text:Z},{id:_,depth:u,text:$}],body:{type:"root",children:[{type:b,tag:v,props:{id:y},children:[{type:b,tag:g,props:{href:"#%E5%89%8D%E8%A8%80",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"在2000年，著名的電商網站AWS仍然是使用傳統的巨石應用開發，而不是今天大家看到的微服務架構。巨石應用每次部署的時，都需要將整個網站作為一整體並進行統一部署。在大型促銷活動時，網站的穩定性遇到了嚴峻挑戰，儘管團隊之前做了預估擴充，但在活動流量期間往往超出了團隊的預估。生產事件造成的問題，頻頻發生，經常修復一處問題卻引發另外一處問題。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"公司管理層內部開始查看原因，最主要的原因是因為系統耦合度太高且複雜。但由於時間比較緊迫，工程師忙於開發自己手上的功能，沒有時間進行溝通。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"後來將巨石架構改為服務導向架構 "},{type:b,tag:q,props:{},children:[{type:a,value:"(Service-Oriented Architecture, SOA)，並提出以下要求"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"所有團隊都要以服務介面的方式，提供資料和各種功能"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"團隊之間必須通過介面來通訊"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"不允許其他形式的互相操作、不允許直接存取其他團隊的資料庫、不允許共享記憶體、不允許任何形式的後門。唯一許可的通訊方式，就是通過網路來呼叫服務。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"具體的實現技術不做規定，HTTP、Corba、Pub\u002FSub方式，自定義協定即可。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"所有的服務介面，必須從一開始就是公開的設計介面。簡而言之，在設計介面的時候，就預設這個介面可以讓外部人員使用，沒有討價還價的餘地。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如果不遵循上面的規定，就會被解僱。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"AWS在2011年，其生產環境的部署頻率已經非常高。工作日的部署頻率高達平均每11.6秒一次，一小時內最高部署次數1079次。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:v,props:{id:C},children:[{type:b,tag:g,props:{href:"#51-%E5%A4%A7%E7%B3%BB%E7%B5%B1%E5%B0%8F%E5%81%9A%E5%8E%9F%E5%89%87",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:o,props:{id:E},children:[{type:b,tag:g,props:{href:"#511-%E6%8C%81%E7%BA%8C%E4%BA%A4%E4%BB%98%E6%9E%B6%E6%A7%8B%E8%A6%81%E6%B1%82",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"為了提升交付速度，獲得持續交付能力，系統架構在設計時，應考量下列因素。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"為測試而設計 (design for test)。每次撰寫好程式碼之後，都需要花大量的時間和精力來進行測試，這樣驗證花太多時間，就沒有辦法快速發佈。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"為部署而設計 (design for deployment)。開發完成新功能後，當部署發佈時，需要花費很長時間準備，甚至要停機才能部署，就沒有辦法快速發佈。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"為監控而設計 (design for monitor)。當功能上線後，無法即時監控，得等到出問題時，使用者回饋後才知道問題，這樣持續交付的優勢就大幅降低了。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"為擴展而設計 (design for scale)。有兩點，一是支持團隊成員的規模擴展; 二是支持系統自身的擴展"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"為失敗而設計(design for failure)。快速部署一定會遇到問題的。一但部署或發佈失敗，該如何優雅且快速地處理。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:G},children:[{type:b,tag:g,props:{href:"#512-%E7%B3%BB%E7%B5%B1%E6%8B%86%E5%88%86%E5%8E%9F%E5%89%87",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"大系統小做的方法由來已久，在1971年時，David Parnas發表了一篇論文\"On the Criteria To Be Used in Decomposing Systems into Modules”(將系統分解為模組的標準)。大系統應該由很多組件(component)或服務(service)組成。通常會以jar\u002Fwar\u002Fdll\u002Fgem等形式出現，其顆粒度要比一個類(class)大，但要比整個系統小很多。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:aa},{type:b,tag:g,props:{href:"https:\u002F\u002Fwww.win.tue.nl\u002F~wstomv\u002Fedu\u002F2ip30\u002Freferences\u002Fcriteria_for_modularization.pdf",rel:[ab,ac,ad],target:ae},children:[{type:a,value:"連結"}]}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"組件通常在編譯建置或部署時被集合在一起，而服務由多個組件組成，且能夠獨立運行，並在運行時與整個系統進行通訊，成為整個系統的一部份。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"目前軟體的發展趨勢，以持續交付的要求對系統進行拆分，有以下原則"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"做為系統的一部分，每個組件或服務有他自己的業務職責，可以被獨立修改，甚至可以被另外一種方案所替代。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"“高內聚，低耦合”，使整個系統比較易於維護，每個組件或服務地功能盡量單一化，不要太複雜。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"整個系統容易建置和測試。將系統拆分後，這些組件仍然需要組合在一起，為使用者提供服務。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"使團隊之間的溝通合作更加順暢。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"由於將系統進行拆分，因此產生了新問題。例如: 多個服務組成的系統來說，一個請求可能經過多次不同服務之間的相互呼叫才完成。這樣呼叫鏈過長，當有上百個上千個服務時，沒有服務發現機制是很難想像的，當你呼叫其他人的服務，並要查找問題時，就會發現Debug難度非常高。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"因此系統拆分後，我們需要建立對應的方法"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"建置"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"測試"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"部署"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"監控機制"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:v,props:{id:I},children:[{type:b,tag:g,props:{href:"#52-%E5%B8%B8%E8%A6%8B%E6%9E%B6%E6%A7%8B%E6%A8%A1%E5%BC%8F",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"這邊討論三種架構模式"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"微核架構：向使用者分發的Client端軟體"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"微服務架構：用於企業自身可控的後台Server端軟體"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"巨石應用：常見於創業公司的產品項目。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:K},children:[{type:b,tag:g,props:{href:"#521-%E5%BE%AE%E6%A0%B8%E6%9E%B6%E6%A7%8B",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"微核架構(microkernel architecture)，又稱為套件架構(plugin architecture)，只軟體核心框架相對較小，而主要業務功能和邏輯都通過套件實現。"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"核心(core)架構：通常只包含系統運行的基礎功能，例如: 基礎的通訊模組、基本渲染功能和介面整體框架。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"套件：套件之間是互相獨立的，套件之間的通訊只能通過核心框架進行，避免出現互相依賴的問題。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:af,props:{className:[ag,ah]},children:[{type:a,value:w},{type:b,tag:m,props:{src:"images\u002Fcicd-2.0\u002F05\u002F001.png",width:A},children:[]},{type:a,value:w},{type:b,tag:m,props:{src:"images\u002Fcicd-2.0\u002F05\u002F002.png",width:A},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"插件：外掛程式或擴充套件，通常跟UI有關係，例如: Chrome常用的Chrome Extension功能。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"這邊舉幾個例子"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"前端相關"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"將核心架構看作為Chrome瀏覽器，而套件看作為Chrome Extension工具。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"將核心架構看作為VSCode，而套件看作為VSCode Plug-in。"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"後端相關"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"API Getway，API Management kong，開箱即用的Gateway"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"驅動相關"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"印表機驅動程式"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"USB驅動程式"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:r}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"良好的功能延伸性(extensibility)：需要什麼功能，開發一個擴充套件即可。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"易發佈：套件可以獨立地加載和卸載，使他比較容易發佈。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"易測試：功能之間是隔離的，互相不干擾，因此可以獨立進行測試。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"可訂製性高：適應不同開發的需求。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"可以逐漸式地開發：逐步增加功能。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"擴展性(scalability)差，core通常是一個獨立單元，不容易做成分布式，但為Client端軟體來說，這不是一個嚴重的問題。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"開發難度相對較高，因為設計Plug-in與Core的通訊，以及內部的Plug-in登記機制。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"高度依賴框架，當框架的介面升級時，有可能影響所有Plug-in，導致大量的改造工作。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:M},children:[{type:b,tag:g,props:{href:"#522-%E5%BE%AE%E6%9C%8D%E5%8B%99%E6%9E%B6%E6%A7%8B",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"微服務架構(Microservice Architecture)是服務導向架構(service-oriented architecture)，縮寫SOA升級。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"每一個服務就是一個獨立的部署單元(separately deployed unit)。這些單元都是分佈式的互相解偶，通過通訊協定(REST、SOAP)來通訊。"}]},{type:a,value:c},{type:b,tag:af,props:{className:[ag,ah]},children:[{type:a,value:w},{type:b,tag:m,props:{src:"images\u002Fcicd-2.0\u002F05\u002F003.png",width:A},children:[]},{type:a,value:w},{type:b,tag:m,props:{src:"images\u002Fcicd-2.0\u002F05\u002F004.png",width:A},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"微服務架構分種三種模式"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"RESTful API模式：服務通過API提供，雲服務(Cloud Service)就屬於這一類型。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"RESTful應用模式：服務通過傳統網路協議或應用協議提供，背後通常是一個多功能的應用程式，常見於企業內部"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"集中消息模式：採用訊息代理(Message Broker)，可以實現消息柱列、負載均衡、統一日誌和異常處理。建議將Message Broker做成群集(Cluser)，來增加穩定度和可靠性。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:r}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"擴展性好，各個服務之間低耦合"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"易部署，每個服務都是可部署單元"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"易開發，每個組件都可以進行單獨開發，單獨部署，不間斷地升級"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"易於單獨測試，如果修改指涉及單一服務，只需要測試該服務即可"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"由於強調互相獨立和低耦合，服務可能被拆分很細。導致系統依賴大量的服務，變的凌亂和笨重，網路通訊消耗也會變很大"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"一次外部請求(Request)會涉及到多個內部服務之間的通訊，使得問題的除錯與診斷比較困難，需要更強大的工具支持。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"為原子性 (Atomicity)操作帶來困難，例如：需要事務交易操作的場景。"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"ACID為資料庫操作寫入或更新的過程"},{type:b,tag:t,props:{},children:[]},{type:a,value:"\nA：原子性 (Atomicity)"},{type:b,tag:t,props:{},children:[]},{type:a,value:"\nC：一致性 (Consistency)"},{type:b,tag:t,props:{},children:[]},{type:a,value:"\nI：事務隔離 (Isolation)"},{type:b,tag:t,props:{},children:[]},{type:a,value:"\nD：持久性 (Durability)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"會遇到常見的事務交易問題👉"},{type:b,tag:g,props:{href:"https:\u002F\u002Fithelp.ithome.com.tw\u002Farticles\u002F10194147",rel:[ab,ac,ad],target:ae},children:[{type:a,value:aa}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"跨服務的組合業務場景比較難測試，需要同時部署和啟動多個微服務"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"公共類別庫的升級和管理比較困難。在使用一些公共的工具性質的類別庫時，需要在建置每個微服務時，都將其打包到部署包中。"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"正是這些缺點，因此使用微服務架構模式下，需要確保每一個服務能夠獨立部署之外，還要確保服務升級之後不會影響到下游服務。"}]},{type:a,value:c},{type:b,tag:o,props:{id:O},children:[{type:b,tag:g,props:{href:"#523-%E5%B7%A8%E7%9F%B3%E6%87%89%E7%94%A8",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"巨石應用(monolithic application)，也稱為巨石架構，只單一結構組成的軟體應用，也有另一個稱呼為單體式應用。其用戶的介面和資料存取程式碼都綁定在同一個語言平台的同一個應用程式上。"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"巨石架構通常是一個完整的包，例如: 一個Jar、Exe或一個完整的目錄結構，只要有這個包，則所有功能皆有了。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{align:"center"},children:[{type:a,value:w},{type:b,tag:m,props:{src:"images\u002Fcicd-2.0\u002F05\u002F005.png",width:"50%"},children:[]},{type:a,value:" \n"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:r}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"利於開發和除錯：當前所有工具和IDE都很好地支援巨石應用程式開發。系統架構簡單，Debug方便。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"部署操作本身比較簡單：例如，只需要運行部署時內的WAR或Exe檔案等等。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"很容易擴展：只要在負載均衡器(nginx、IIS)後面放置多個應用的副本，就可以擴展應用程式。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"對整體應用程式不太熟悉的人來說，容易產生混淆的程式碼，汙染整個應用，給老舊程式碼的學習和理解帶來困難。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"很難與新技術共存。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"只能將整個應用作為一個整體進行擴展。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"持續部署非常困難，更新一個組件，必須重新部署整個應用程式。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"微服務場景相關"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"(a) 圖有兩個名為A服務，分別為新和舊版本，這樣的方式會讓主控服務，無法認識到底該使用哪一個服務進行運作。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"(b) 圖有兩個實體的測試環境，A測試環境用來測試新的A服務，B測試環境用來測試舊的B服務。這樣的測試方式，當如果多人都需要測試服務時，會需要大量的測試環境才能夠進行測試。"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"下方是沒有考慮除錯環境的微服務框架"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:m,props:{alt:"006",src:"images\u002Fcicd-2.0\u002F05\u002F006.png"},children:[]}]},{type:a,value:c},{type:b,tag:t,props:{},children:[]},{type:a,value:"\n💡 解決上述問題的方式，可以透過路由的機制，讓開發人員可以單獨部署和修改自己的微服務來進行測試。\n"},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"下方是通過路由機制建立共享的微服務測試環境"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:m,props:{alt:"007",src:"images\u002Fcicd-2.0\u002F05\u002F007.png"},children:[]}]},{type:a,value:c},{type:b,tag:v,props:{id:Q},children:[{type:b,tag:g,props:{href:"#53-%E6%9E%B6%E6%A7%8B%E6%94%B9%E9%80%A0%E5%AF%A6%E6%96%BD%E6%A8%A1%E5%BC%8F",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"對部署頻率較低的老舊系統來說，很少會仔細考慮到易測試、易部署和易擴展這三個因素。因此我們總會遇到架構改造的需求。通常改造有三種模式："}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:ai}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"絞殺者模式"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"修繕者模式"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:S},children:[{type:b,tag:g,props:{href:"#531-%E6%8B%86%E9%81%B7%E8%80%85%E6%A8%A1%E5%BC%8F",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:T}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"拆遷者模式就是根據當前的業務需求，對軟體架構重新設計，並組織單獨的團隊，重新發佈一個全新的版本，一次性的替代原有的老舊系統。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:m,props:{alt:"008",src:"images\u002Fcicd-2.0\u002F05\u002F008.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:r}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"與舊版本完全沒有瓜葛，沒有歷史包袱"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"業務需求遺漏。在軟體的歷史版本中，有很多不為人熟知的功能還在使用。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"市場環境變化。由於新版本架構花費時間較長，無法馬上修改完成，因此當市場發生變化時，就會錯失市場機會。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"人力資源消耗大。必須分出人力，一邊維護舊版本的功能或緊急需求，一邊要安排充分人力進行改造。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"閉門造車。新版本上線後，無法滿足業務需求。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"下面舉實際案例"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"✅ 成功案例"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"HP惠普印表機的韌體架構改造就是一個成功的案例。在2008年的時候，HP惠普團隊已經筋疲力盡，整個團隊只有5%在開發新特性，其餘人數皆在進行維護。經過三年的努力，HP惠普團隊將整個韌體架構改為"},{type:b,tag:q,props:{},children:[{type:a,value:"微核架構模式"}]},{type:a,value:"，在每台印表機上都有一個最小的韌體初始化版本。當印表機連上網後，就會根據韌體的版本，從網路上下載最新的功能模組，並自動安裝。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"❌ 失敗案例"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"網景通訊公司，主要是在做瀏覽器以Netscape Navigator而聞名。由於其老舊的軟體架構，讓使用者體驗越來越差，已經很難對抗主流的瀏覽器發展，於是公司高層決定使用"},{type:b,tag:q,props:{},children:[{type:a,value:ai}]},{type:a,value:"對軟體進行改造。在改造期間，微軟憑藉著IE瀏覽器和Windows的成功，直接躍升為瀏覽器市場第一名，而網景通訊公司後來則一蹶不振。"}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"網景通訊公司：網景通訊，舊稱網景通訊公司，通常簡稱為網景，是一家已倒閉的美國電腦服務公司，以其開發的同名網頁瀏覽器而聞名。當還是一家獨立公司時，其總部設在加利福尼亞州的山景城。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:U},children:[{type:b,tag:g,props:{href:"#532-%E7%B5%9E%E6%AE%BA%E8%80%85%E6%A8%A1%E5%BC%8F",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:V}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"絞殺者模式是只保留原來的老舊系統不變，當需要開發新的功能時，重新開發一個服務，來實現新的功能。通過不斷的建置新的服務，逐步讓老舊的系統失效，最終取代它。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:m,props:{alt:"009",src:"images\u002Fcicd-2.0\u002F05\u002F009.png"},children:[]},{type:a,value:c},{type:b,tag:m,props:{alt:"010",src:"images\u002Fcicd-2.0\u002F05\u002F010.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:r}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:aj}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"可以穩定地提供價值，頻繁地交付版本，可以更好的監控其改造發展"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:ak},{type:b,tag:q,props:{},children:[{type:a,value:al}]},{type:a,value:am}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:an}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"產生一定的跌代成本"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:W},children:[{type:b,tag:g,props:{href:"#533-%E4%BF%AE%E7%B9%95%E8%80%85%E6%A8%A1%E5%BC%8F",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"修繕者模式是指將老舊系統的部分功能與其餘部分隔離，以新的架構進行單獨改善。在改善的同時，需要保證與其他部分能協同工作。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:m,props:{alt:"011",src:"images\u002Fcicd-2.0\u002F05\u002F011.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:r}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"系統外部無感知"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:aj}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"可以隨時停下改造工作，響應高優先權的業務需求"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:ak},{type:b,tag:q,props:{},children:[{type:a,value:al}]},{type:a,value:am}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:an}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"會有更多額外的架構改造成本"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"巨石應用轉變為微服務的改造\n"},{type:b,tag:m,props:{alt:"012",src:"images\u002Fcicd-2.0\u002F05\u002F012.png"},children:[]}]},{type:a,value:c},{type:b,tag:o,props:{id:Y},children:[{type:b,tag:g,props:{href:"#534-%E8%B3%87%E6%96%99%E5%BA%AB%E7%9A%84%E6%8B%86%E5%88%86%E6%96%B9%E6%B3%95",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"關聯式資料庫很可能是巨石應用中最大的耦合點。對於有狀態的服務改造，我們需要非常小心地處理資料庫資料。做資料庫拆分時，應該遵循以下步驟："}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"詳細瞭解資料庫結構，包括外來鍵、共享的可變資料以及事務性的邊界等等。如(a)圖"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"先拆分資料庫，可以參考12.3.2節中介紹的資料庫遷移。如 (b)圖"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"當寫入兩邊的資料庫都無誤時，找到程式架構中的細縫，如 (c)圖"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"將拆分的程式模組和資料庫組合在一起，形成微服務。如 (d)圖"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:m,props:{alt:"013",src:"images\u002Fcicd-2.0\u002F05\u002F013.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"💡 應該圍繞業務目標進行架構改造"},{type:b,tag:t,props:{},children:[]},{type:a,value:"\n對巨石應用進行拆分時，可以先拆分顆粒度相對較大的服務。當拆分完成後，如果達到拆分的目標，那麼就可以停下來，不應該為了架構而架構，為了技術而技術。當拆成微服務架構時，你必須考慮要建立相應的基礎設施，例如：服務管理、服務監控、自動化測試與自動化部署。"}]},{type:a,value:c},{type:b,tag:v,props:{id:_},children:[{type:b,tag:g,props:{href:"#54-%E5%B0%8F%E7%B5%90",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:$}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"本章節主要討論”"},{type:b,tag:q,props:{},children:[{type:a,value:"持續交付2.0能力"}]},{type:a,value:"”對軟體系統架構的要求，在軟體開發時就考慮了下列項目👇，並且討論系統架構的拆分原則"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"可測試性"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"易部署性"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"易監控性"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"易擴展性"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"可能的失敗處理"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"常見的三種軟體架構模式在不同場景的分析和比較："}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"微核架構模式，通常是應於Client端軟體"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"微服務架構，通常適用於大型後台Server端系統"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"巨石應用架構，通常適用於創業公司或中小型專案"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"討論了三種系統架構改造的方式"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"拆遷者模式，一次性的重寫所有程式碼。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"絞殺者模式，就是不改變或少改變原有老舊系統，通過增加的新服務來不斷替代老舊的功能。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"修繕者模式，就是通過跌代的方式，將原本老舊系統逐步進行改造，同時開發新的功能。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"也介紹了解決絞殺者模式和修繕者模式中，可能會遇到資料庫中的資料表和資料的拆分以及拆遷問題。"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"為了持續交付，並且降低架構改造的風險，團隊需要根據情況，來採用絞殺者模式或修繕者模式對遺留系統的架構進行改造。"}]},{type:a,value:c}]}]},dir:"\u002Fzh\u002Fcicd-2.0",path:"\u002Fzh\u002Fcicd-2.0\u002Fchapter5",extension:".md",createdAt:ao,updatedAt:ao,to:"\u002Fcicd-2.0\u002Fchapter5"},prev:{title:"讀書目錄",path:"\u002Fzh\u002Findex",to:"\u002F"},next:{title:"Chapter 07",path:"\u002Fzh\u002Fcicd-2.0\u002Fchapter7.",to:"\u002Fcicd-2.0\u002Fchapter7."}}],fetch:{},mutations:[]}}("text","element","\n","li","p","ol","a","true",-1,"span","icon","icon-link","img",3,"h3","ul","strong","✅ 優點","❌ 缺點","br",2,"h2","\n  ","blockquote","前言","alert","49%","Chapter 05 持續交付的軟體系統架構","51-大系統小做原則","5.1 ”大系統小做”原則","511-持續交付架構要求","5.1.1 持續交付架構要求","512-系統拆分原則","5.1.2 系統拆分原則","52-常見架構模式","5.2 常見架構模式","521-微核架構","5.2.1 微核架構","522-微服務架構","5.2.2 微服務架構","523-巨石應用","5.2.3 巨石應用","53-架構改造實施模式","5.3 架構改造實施模式","531-拆遷者模式","5.3.1 拆遷者模式","532-絞殺者模式","5.3.2 絞殺者模式","533-修繕者模式","5.3.3 修繕者模式","534-資料庫的拆分方法","5.3.4 資料庫的拆分方法","54-小結","5.4 小結","參考","nofollow","noopener","noreferrer","_blank","div","flex","justify-between","拆遷者模式","不會遺漏原有需求","避免","閉門造車","的問題","架構改造的時間會大幅地變長","2022-05-03T13:03:56.203Z")));