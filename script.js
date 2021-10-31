"use strict";

PetiteVue.createApp({
  job_choice: [
    "",
    "営業",
    "事務",
    "マーケティング",
    "販売",
    "Web",
    "テレビ制作",
    "経理",
    "金融",
    "不動産",
    "システム開発",
    "機械・電気電子",
    "化学",
    "医療",
    "介護",
    "建築",
    "運輸",
    "教育",
    "国家公務員",
    "農林水産",
  ],
  career_plan: "あなたのキャリアプランは…",
  job_pictures: [
    "img/road_sign.svg",
    "img/businesswoman.svg",
    "img/photocopy.svg",
    "img/marketing.svg",
    "img/empty_cart.svg",
    "img/web_development.svg",
    "img/videographer.svg",
    "img/calculator.svg",
    "img/financial_data.svg",
    "img/absorbed_in.svg",
    "img/software_engineer.svg",
    "img/developer_activity.svg",
    "img/science.svg",
    "img/medical_research.svg",
    "img/getting_coffee.svg",
    "img/under_construction.svg",
    "img/logistics.svg",
    "img/teaching.svg",
    "img/teacher.svg",
    "img/a_moment_to_relax.svg",
  ],
  Job_board: [
    "https://next.rikunabi.com/search/",
    "https://next.rikunabi.com/eigyo/lst_jb0101010000/",
    "https://next.rikunabi.com/jimu/lst_jb1001080131/",
    "https://next.rikunabi.com/kikaku/",
    "https://next.rikunabi.com/service/lst_jb0202010000/",
    "https://next.rikunabi.com/web/lst_jb1203040000/",
    "https://next.rikunabi.com/creative/lst_jb0303030000/",
    "https://next.rikunabi.com/jimu/lst_jb1001060000/",
    "https://next.rikunabi.com/senmon/lst_jb0404030000/",
    "https://next.rikunabi.com/senmon/lst_jb0404041028/",
    "https://next.rikunabi.com/tech_soft/",
    "https://next.rikunabi.com/tech_denki/",
    "https://next.rikunabi.com/tech_sozai/",
    "https://next.rikunabi.com/tech_medical/lst_jb1407050000/",
    "https://next.rikunabi.com/tech_sozai/lst_jb1410060748/",
    "https://next.rikunabi.com/tech_doboku/lst_jb0808020000/",
    "https://next.rikunabi.com/tech_doboku/lst_jb1302040214/",
    "https://next.rikunabi.com/sonota/lst_jb0909010902/",
    "https://next.rikunabi.com/sonota/lst_jb0909020909/",
    "https://next.rikunabi.com/sonota/lst_jb0909040000/",
  ],
  num: 0,

  sales(ev) {
    this.career_plan = "営業　→　主任・係長　→　課長・部長";
    this.num = 1;
  },

  office_work(ev) {
    this.career_plan = "一般事務　→　経理事務・営業事務・貿易事務";
    this.num = 2;
  },

  marketing(ev) {
    this.career_plan = "営業企画　→　事業企画　→　経営企画　→　CFO";
    this.num = 3;
  },

  sale(ev) {
    this.career_plan = "販売　→　エリアマネージャー　→　広報(本社勤務)";
    this.num = 4;
  },

  web(ev) {
    this.career_plan =
      "Webデザイナー　→　制作ディレクター　→　プロデューサー / マーケティング";
    this.num = 5;
  },

  tv_pd(ev) {
    this.career_plan = "AD　→　チーフAD　→　ディレクター　→　プロデューサー";
    this.num = 6;
  },

  accounting(ev) {
    this.career_plan =
      "経理　→　経営企画 / 税理士・公認会計士 / 外資系企業に転職";
    this.num = 7;
  },

  finance(ev) {
    this.career_plan =
      "アナリスト　→　アソシエイト　→　ヴァイスプレジデント　→　ディレクター　→　マネージング・ディレクター";
    this.num = 8;
  },

  real_estate(ev) {
    this.career_plan =
      "賃貸営業職・仲介営業職　→　主任　→　マネージャー　→　経営幹部";
    this.num = 9;
  },

  system(ev) {
    this.career_plan = `プログラマー/運用　→　システムエンジニア　→
    <スペシャリスト>　ITスペシャリスト・フルスタックエンジニア
    <ゼネラリスト>　ITコンサルタント・プロジェクトマネージャー・ITアーキテクト`;
    this.num = 10;
  },

  machine(ev) {
    this.career_plan =
      "設計補助　→　設計・開発　→　プロジェクトマネージャー / スペシャリスト";
    this.num = 11;
  },

  chemistry(ev) {
    this.career_plan =
      "研究員　→　プロジェクトリーダー　→　室長・マネージャー　→　所長";
    this.num = 12;
  },

  medical(ev) {
    this.career_plan = `医学部　→
    <臨床研修>　専門医　→　勤務医　→　開業医
		<大学院>　医学博士　→　教育者・研究者`;
    this.num = 13;
  },

  nursing(ev) {
    this.career_plan =
      "介護職員初任者研修　→　介護福祉士実務者研修　→　介護福祉士　→　認定介護福祉士・マネジメント職・ケアマネージャー職";
    this.num = 14;
  },

  architecture(ev) {
    this.career_plan =
      "技能者　→　職長　→　課長　→　部長　→　経営幹部　→　独立";
    this.num = 15;
  },

  transport(ev) {
    this.career_plan =
      "セールスドライバー(SD)　→　シニアSD　→　グループリーダー →　アシスタントAM　→　エリアマネージャー(AM)";
    this.num = 16;
  },

  education(ev) {
    this.career_plan =
      "教諭　→　主任教諭　→　主幹教諭・指導教諭　→　副校長　→　校長　→　統括校長";
    this.num = 17;
  },

  civil_officer(ev) {
    this.career_plan =
      "係員　→　係長・主査　→　課長補佐・専門官　→　課長・室長　→　局長・部長　→　審議官・官房長　→　事務次官";
    this.num = 18;
  },

  AFF(ev) {
    this.career_plan = `<農業>　農業生産法人就職 / 農系企業（アグリビジネス）就職 / 独立 / 経営継承
    <林業>　森林組合就職 / 民間の林業会社就職
    <漁業>　漁業協同組合就職 / 民間の漁業会社就職 / 独立`;
    this.num = 19;
  },
}).mount();
