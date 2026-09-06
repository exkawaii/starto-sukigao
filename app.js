const GROUPS = [
  {
    id: "king-prince", name: "King & Prince", count: 2, color: "#8bdbe8",
    image: "https://starto.jp/images/81/c5e/76430cedfbe04fb0da8d6b1818811.jpg",
    profile: "https://starto.jp/s/p/artist/41/profile",
    members: [
      { name: "永瀬廉", en: "Ren Nagase", image: "https://starto.jp/images/81/350/251bff5fe491af6e009a2ffb443ed.png" },
      { name: "髙橋海人", en: "Kaito Takahashi", image: "https://starto.jp/images/81/9d0/299d1d4f508046ad57b2bc8ca457a.png" }
    ]
  },
  {
    id: "snow-man", name: "Snow Man", count: 9, color: "#7bd9e9",
    image: "https://starto.jp/images/81/0ae/62dbea3ffa6eab7da5b96f2b1a4be.jpg",
    profile: "https://starto.jp/s/p/artist/43/profile",
    members: [
      { name: "岩本照", en: "Hikaru Iwamoto", image: "https://starto.jp/images/81/5ff/40710af153fa9f4515ab0b80fd444.png" },
      { name: "深澤辰哉", en: "Tatsuya Fukazawa", image: "https://starto.jp/images/81/7d6/5524437948680f71be127764dc36b.png" },
      { name: "ラウール", en: "Raul", image: "https://starto.jp/images/81/5e3/d642573f2cc80720fb45cc588b16e.png" },
      { name: "渡辺翔太", en: "Shota Watanabe", image: "https://starto.jp/images/81/2b7/fb2805ccd062ec8ecaf2a2b1c47a9.png" },
      { name: "向井康二", en: "Koji Mukai", image: "https://starto.jp/images/81/40c/b4b01ac52fb37283a2dd7bb7229a8.png" },
      { name: "阿部亮平", en: "Ryohei Abe", image: "https://starto.jp/images/81/9f2/f50c73296f103af19f5df925eb2d7.png" },
      { name: "目黒蓮", en: "Ren Meguro", image: "https://starto.jp/images/81/8ee/57770816936c45c3280cd0441ebfc.jpg" },
      { name: "宮舘涼太", en: "Ryota Miyadate", image: "https://starto.jp/images/81/b95/a4001397350ea613c97eb3406e240.png" },
      { name: "佐久間大介", en: "Daisuke Sakuma", image: "https://starto.jp/images/81/989/e5a6a3af68918b76d97479f8f2319.png" }
    ]
  },
  {
    id: "sixtones", name: "SixTONES", count: 6, color: "#a5a1ff",
    image: "https://starto.jp/images/81/d21/5219367e294de47983e32ea5784cf.jpg",
    profile: "https://starto.jp/s/p/artist/42/profile",
    members: [
      { name: "ジェシー", en: "Jesse", image: "https://starto.jp/images/81/44e/8ebc226045c0ead51d280d690c4c7.png" },
      { name: "京本大我", en: "Taiga Kyomoto", image: "https://starto.jp/images/81/bc4/97edbad1432b6982579eea76e1324.png" },
      { name: "松村北斗", en: "Hokuto Matsumura", image: "https://starto.jp/images/81/016/179da6384846883b02e4a6f9425d1.png" },
      { name: "髙地優吾", en: "Yugo Kochi", image: "https://starto.jp/images/81/c71/ee8e491e6827e5df10f569b18ed1a.png" },
      { name: "森本慎太郎", en: "Shintaro Morimoto", image: "https://starto.jp/images/81/758/d4d529eff602e69e9edaeae5b6e3e.png" },
      { name: "田中樹", en: "Juri Tanaka", image: "https://starto.jp/images/81/cbc/ce75ee5a9362fd93c5446729f01cc.png" }
    ]
  },
  {
    id: "naniwa", name: "なにわ男子", count: 7, color: "#ffb1ca",
    image: "https://starto.jp/images/81/01c/4edaf6d49aa39f9fbf73c225e302b.jpg",
    profile: "https://starto.jp/s/p/artist/56/profile",
    members: [
      { name: "西畑大吾", en: "Daigo Nishihata", image: "https://starto.jp/images/81/460/da267150e05c2179dfed043f20a2f.png" },
      { name: "大西流星", en: "Ryusei Onishi", image: "https://starto.jp/images/81/e9f/e847a5ace2bab2b4f4e235fb2bc50.png" },
      { name: "道枝駿佑", en: "Shunsuke Michieda", image: "https://starto.jp/images/81/390/3aa515128ff1d2d6deaf95a0dbe31.png" },
      { name: "高橋恭平", en: "Kyohei Takahashi", image: "https://starto.jp/images/81/76b/7c394a790fe1f5f6ff230d0c4019b.png" },
      { name: "長尾謙杜", en: "Kento Nagao", image: "https://starto.jp/images/81/23b/351224876ba0c5ddc50cae293b365.png" },
      { name: "藤原丈一郎", en: "Joichiro Fujiwara", image: "https://starto.jp/images/81/4ae/ecb72cd33edd0a27e90296129dfe1.png" },
      { name: "大橋和也", en: "Kazuya Ohashi", image: "https://starto.jp/images/81/3db/228f073fd243b71af80c31116c4ee.png" }
    ]
  },
  {
    id: "timelesz", name: "timelesz", count: 8, color: "#ffcf74",
    image: "https://starto.jp/images/81/1c7/b133fadf89c0b1cc5d16655c37395.jpg",
    profile: "https://starto.jp/s/p/artist/24/profile",
    members: [
      { name: "佐藤勝利", en: "Shori Sato", image: "https://starto.jp/images/81/022/3e466e6b883b3972724a279bf7f4c.png" },
      { name: "菊池風磨", en: "Fuma Kikuchi", image: "https://starto.jp/images/81/c1b/2785457ebc3c3cf6df2ed696fa5c1.png" },
      { name: "松島聡", en: "So Matsushima", image: "https://starto.jp/images/81/ee9/8f190623799c185a2fd3ae7c4baca.png" },
      { name: "橋本将生", en: "Masaki Hashimoto", image: "https://starto.jp/images/81/29c/7979c1aa4cf905a7f1ffc63e6744a.png" },
      { name: "猪俣周杜", en: "Shuto Inomata", image: "https://starto.jp/images/81/e2a/f0e6184a632c459f9ba4789de82e1.png" },
      { name: "篠塚大輝", en: "Taiki Shinozuka", image: "https://starto.jp/images/81/822/b3f35d3f232db50a3f53869fb3f1f.png" },
      { name: "寺西拓人", en: "Takuto Teranishi", image: "https://starto.jp/images/81/5ac/8b66048c0050109e1c89edee26292.png" },
      { name: "原嘉孝", en: "Yoshitaka Hara", image: "https://starto.jp/images/81/0d3/a129238b7df40e21d52b808ece961.png" }
    ]
  },
  {
    id: "west", name: "WEST.", count: 7, color: "#ff9b72",
    image: "https://starto.jp/images/81/4c5/9f246f7b801109182df3792421873.jpg",
    profile: "https://starto.jp/s/p/artist/29/profile",
    members: [
      { name: "重岡大毅", en: "Daiki Shigeoka", image: "https://starto.jp/images/81/acd/b4fb0f18780d9106549d010562d5c.jpg" },
      { name: "桐山照史", en: "Akito Kiriyama", image: "https://starto.jp/images/81/b9c/a1f62222a3f8741a9bf46944c787e.jpg" },
      { name: "中間淳太", en: "Junta Nakama", image: "https://starto.jp/images/81/ce4/d230d254aba8aa2f53324a2dd4011.jpg" },
      { name: "神山智洋", en: "Tomohiro Kamiyama", image: "https://starto.jp/images/81/e08/ab8beb0de7278a8d6b7e9e20d7252.jpg" },
      { name: "藤井流星", en: "Ryusei Fujii", image: "https://starto.jp/images/81/084/4bf0a65afa55bf370c0f7a29dd274.jpg" },
      { name: "濵田崇裕", en: "Takahiro Hamada", image: "https://starto.jp/images/81/f43/376f33923960a380c70625d21d1f9.jpg" },
      { name: "小瀧望", en: "Nozomu Kotaki", image: "https://starto.jp/images/81/c92/58f3a975db441b94af23467b38a7a.jpg" }
    ]
  }
];

const CATEGORIES = {
  face: { label: "好き顔9選", lead: "顔が好き。直感だけで選ぶランキング。" },
  date: { label: "付き合いたい人9選", lead: "もしも隣にいるなら？恋人目線で選ぶランキング。" },
  marry: { label: "結婚したい人9選", lead: "ずっと一緒にいたいのは？未来目線で選ぶランキング。" }
};

const state = {
  screen: "setup",
  category: "face",
  selectedGroups: new Set(["snow-man", "sixtones"]),
  mode: "easy",
  photo: "official",
  matches: [],
  matchIndex: 0,
  scores: new Map(),
  history: [],
  ranking: [],
  showAll: false
};

const app = document.querySelector("#app");
const toast = document.querySelector("#toast");
let toastTimer;

function esc(text) {
  return String(text).replace(/[&<>'"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[ch]));
}
function groupOf(member) { return GROUPS.find(group => group.id === member.groupId); }
function allSelectedMembers() {
  return GROUPS.filter(group => state.selectedGroups.has(group.id)).flatMap(group => group.members.map(member => ({ ...member, groupId: group.id, groupName: group.name })));
}
function initials(name) { return name.slice(0, 1); }
function shuffle(items) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function imageTag(member, className = "") {
  return `<img class="${className}" src="${member.image}" alt="${esc(member.name)}" loading="lazy" onerror="this.style.display='none'" />`;
}
function getMatches(members) {
  const pairs = [];
  const used = new Set();
  const addPair = (a, b) => {
    const key = [a.name, b.name].sort().join("|");
    if (a.name !== b.name && !used.has(key)) { used.add(key); pairs.push([a, b]); }
  };
  if (state.mode === "full") {
    for (let i = 0; i < members.length; i++) for (let j = i + 1; j < members.length; j++) addPair(members[i], members[j]);
    return shuffle(pairs);
  }
  const max = Math.min(14, Math.max(6, Math.round(members.length * 0.78)));
  const possible = members.length * (members.length - 1) / 2;
  const target = Math.min(max, possible);
  let attempts = 0;
  while (pairs.length < target && attempts < 500) {
    const [a, b] = shuffle(members).slice(0, 2);
    addPair(a, b); attempts++;
  }
  return pairs;
}
function render() {
  if (state.screen === "setup") renderSetup();
  if (state.screen === "match") renderMatch();
  if (state.screen === "result") renderResult();
  if (state.screen !== "setup") window.scrollTo({ top: document.querySelector(".content-card").offsetTop - 20, behavior: "smooth" });
}
function renderSetup() {
  const category = CATEGORIES[state.category];
  app.innerHTML = `
    <section class="setup-screen">
      <div class="panel-head">
        <div><p class="panel-kicker">01 / SELECT YOUR WORLD</p><h2 class="panel-title">まずはグループを選ぼう</h2><p class="panel-lead">気になるグループを2つ以上チェック。あとで変更もできます。</p></div>
        <span class="panel-index">01</span>
      </div>
      <nav class="category-tabs" aria-label="ランキングの種類">
        ${Object.entries(CATEGORIES).map(([key, item], index) => `<button class="tab-btn ${state.category === key ? "is-active" : ""}" data-category="${key}">${item.label}${index > 0 ? '<span class="new">NEW</span>' : ""}</button>`).join("")}
      </nav>
      <div class="section-label"><b>対象グループ</b><span>${state.selectedGroups.size} groups selected</span></div>
      <div class="group-grid">
        ${GROUPS.map(group => `<button class="group-option ${state.selectedGroups.has(group.id) ? "is-selected" : ""}" data-group="${group.id}" aria-pressed="${state.selectedGroups.has(group.id)}">
          <img src="${group.image}" alt="${esc(group.name)}" loading="lazy" onerror="this.style.display='none'" />
          <span class="group-count">${String(group.count).padStart(2, "0")} MEMBERS</span><span class="group-name">${esc(group.name)}</span><span class="group-check">✓</span>
        </button>`).join("")}
      </div>
      <div class="selection-note"><span class="note-dot"></span><b>${state.selectedGroups.size}グループ選択中</b> / ${state.selectedGroups.size < 2 ? "あと1グループ選ぶと診断できます" : "このまま診断をスタートできます"}</div>
      <div class="option-area">
        <div><div class="section-label"><b>対戦モード</b><span>QUESTION STYLE</span></div><div class="segmented">
          <button class="segment-btn ${state.mode === "easy" ? "is-selected" : ""}" data-mode="easy"><b>サクッと診断</b><small>目安の対戦数で気軽に</small></button>
          <button class="segment-btn ${state.mode === "full" ? "is-selected" : ""}" data-mode="full"><b>ガチ全部比較</b><small>全員を1対1で総当たり</small></button>
        </div></div>
        <div><div class="section-label"><b>写真タイプ</b><span>PHOTO TYPE</span></div><div class="segmented">
          <button class="segment-btn ${state.photo === "official" ? "is-selected" : ""}" data-photo="official"><b>公式アー写</b><small>プロフィール写真で選ぶ</small></button>
          <button class="segment-btn ${state.photo === "simple" ? "is-selected" : ""}" data-photo="simple"><b>シンプル表示</b><small>名前だけで直感勝負</small></button>
        </div></div>
      </div>
      <div class="start-row"><p class="start-copy"><b>${category.label} / ${state.mode === "easy" ? "EASY MODE" : "FULL COMPARISON"}</b>${category.lead}</p><button class="primary-btn" id="start-btn" ${state.selectedGroups.size < 2 ? "disabled" : ""}>診断をスタート</button></div>
    </section>`;
  bindSetup();
}
function bindSetup() {
  document.querySelectorAll("[data-category]").forEach(button => button.addEventListener("click", () => { state.category = button.dataset.category; renderSetup(); }));
  document.querySelectorAll("[data-group]").forEach(button => button.addEventListener("click", () => {
    const id = button.dataset.group;
    if (state.selectedGroups.has(id)) state.selectedGroups.delete(id); else state.selectedGroups.add(id);
    renderSetup();
  }));
  document.querySelectorAll("[data-mode]").forEach(button => button.addEventListener("click", () => { state.mode = button.dataset.mode; renderSetup(); }));
  document.querySelectorAll("[data-photo]").forEach(button => button.addEventListener("click", () => { state.photo = button.dataset.photo; renderSetup(); }));
  document.querySelector("#start-btn")?.addEventListener("click", startGame);
}
function startGame() {
  const members = allSelectedMembers();
  state.matches = getMatches(members);
  state.matchIndex = 0; state.scores = new Map(members.map(member => [member.name, 0])); state.history = []; state.screen = "match";
  render();
}
function renderMatch() {
  const pair = state.matches[state.matchIndex];
  const total = state.matches.length;
  if (!pair) return finishGame();
  app.innerHTML = `<section class="match-screen">
    <div class="panel-head"><div><p class="panel-kicker">02 / TRUST YOUR INSTINCT</p><h2 class="panel-title">直感で、どっちが好き？</h2><p class="panel-lead">考えすぎず、最初に目に入った方をタップ。</p></div><span class="panel-index">02</span></div>
    <div class="match-progress"><div class="match-progress-bar"><i style="width:${(state.matchIndex / total) * 100}%"></i></div><span class="match-progress-count">${String(state.matchIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}</span></div>
    <p class="match-label">MATCH UP / ${state.mode === "easy" ? "EASY" : "FULL COMPARISON"}</p>
    <div class="match-pair">
      ${pair.map((member, index) => `<button class="choice-card" data-choice="${index}" aria-label="${esc(member.name)}を選ぶ">${state.photo === "official" ? imageTag(member) : `<span class="simple-avatar">${initials(member.name)}</span>`}<span class="choice-card-copy"><small>${esc(member.groupName)}</small><b>${esc(member.name)}</b><span>${esc(member.en)}</span></span></button>${index === 0 ? '<span class="vs">VS</span>' : ""}`).join("")}
    </div>
    <p class="match-hint">← 左が好き　　<b>選ぶだけで次へ</b>　　右が好き →</p>
    <div class="match-actions"><button class="secondary-btn" data-draw>どっちも好き</button><button class="secondary-btn" data-unknown>わからない</button><button class="secondary-btn" data-undo ${state.history.length === 0 ? "disabled" : ""}>↩ ひとつ戻る</button></div>
  </section>`;
  document.querySelectorAll("[data-choice]").forEach(button => button.addEventListener("click", () => choose(Number(button.dataset.choice))));
  document.querySelector("[data-draw]").addEventListener("click", () => choose(null, true));
  document.querySelector("[data-unknown]").addEventListener("click", () => choose(null, false));
  document.querySelector("[data-undo]").addEventListener("click", undo);
}
function choose(index, draw = false) {
  const pair = state.matches[state.matchIndex];
  state.history.push({ matchIndex: state.matchIndex, scores: new Map(state.scores) });
  if (draw) { pair.forEach(member => state.scores.set(member.name, state.scores.get(member.name) + .5)); }
  else if (index !== null) state.scores.set(pair[index].name, state.scores.get(pair[index].name) + 1);
  state.matchIndex++;
  if (state.matchIndex >= state.matches.length) finishGame(); else renderMatch();
}
function undo() {
  const previous = state.history.pop();
  if (!previous) return;
  state.matchIndex = previous.matchIndex; state.scores = previous.scores; renderMatch();
}
function finishGame() {
  const members = allSelectedMembers();
  state.ranking = members.map(member => ({ ...member, score: state.scores.get(member.name) || 0 })).sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, "ja"));
  state.screen = "result"; state.showAll = false; renderResult();
}
function renderResult() {
  const category = CATEGORIES[state.category];
  const top = state.ranking.slice(0, 3);
  const shown = state.showAll ? state.ranking : state.ranking.slice(0, 9);
  const maxScore = Math.max(1, ...state.ranking.map(member => member.score));
  const phrase = state.ranking.length && state.ranking[0].score === 0 ? "全員尊すぎて、まだ決められなかった…！" : `${state.ranking[0]?.name || "あなたの推し"}の魅力に、心をつかまれました。`;
  app.innerHTML = `<section class="result-screen">
    <div class="panel-head"><span class="panel-index">03</span><div><span class="result-badge">YOUR RESULT IS READY</span><h2 class="panel-title">あなたの${category.label}</h2><p class="panel-lead">対決を勝ち抜いたメンバーたちです。</p></div></div>
    <div class="top-three">${top.map((member, index) => `<a class="top-result" href="${groupOf(member).profile}" target="_blank" rel="noreferrer" aria-label="${esc(member.name)}の公式プロフィールを開く">${imageTag(member)}<span class="top-rank">${index + 1}</span><span class="top-result-copy"><small>${esc(member.groupName)}</small><b>${esc(member.name)}</b><span>OFFICIAL PROFILE ↗</span></span></a>`).join("")}</div>
    <p class="result-insight"><strong>${esc(phrase)}</strong><br />あなたの直感から生まれた、世界にひとつのランキング。</p>
    <div class="result-list">${shown.map((member, index) => `<div class="rank-row"><span class="rank-number">${String(index + 1).padStart(2, "0")}</span><span class="rank-avatar">${imageTag(member)}</span><span class="rank-name"><b>${esc(member.name)}</b><small>${esc(member.groupName)} / ${esc(member.en)}</small></span><span class="rank-score">${member.score === 0 ? "—" : `${Math.round(member.score * 10) / 10} pt`}</span><a class="rank-link" href="${groupOf(member).profile}" target="_blank" rel="noreferrer" aria-label="${esc(member.name)}の公式プロフィール">↗</a></div>`).join("")}</div>
    ${state.ranking.length > 9 ? `<button class="show-more" id="show-more">${state.showAll ? "上位9人だけ表示" : `もっと見る（全${state.ranking.length}人）`}</button>` : ""}
    <div class="result-actions"><button class="secondary-btn" id="share-btn">↗ 結果をシェア</button><button class="secondary-btn" id="save-btn">▣ 画像で保存</button><button class="primary-btn" id="retry-btn">もう一度診断する</button></div>
  </section>`;
  document.querySelector("#show-more")?.addEventListener("click", () => { state.showAll = !state.showAll; renderResult(); });
  document.querySelector("#retry-btn").addEventListener("click", () => { state.screen = "setup"; render(); });
  document.querySelector("#share-btn").addEventListener("click", shareResult);
  document.querySelector("#save-btn").addEventListener("click", saveResultImage);
}
function showToast(message) {
  toast.textContent = message; toast.classList.add("is-visible"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}
async function shareResult() {
  const category = CATEGORIES[state.category].label;
  const text = `私の${category}は ${state.ranking.slice(0, 3).map(member => member.name).join("・")}！\nSTARTO 好き顔セレクション`;
  try {
    if (navigator.share) await navigator.share({ title: "STARTO 好き顔セレクション", text, url: location.href });
    else { await navigator.clipboard.writeText(`${text}\n${location.href}`); showToast("結果とURLをコピーしました"); }
  } catch (error) { if (error.name !== "AbortError") showToast("シェアの準備ができませんでした"); }
}
function saveResultImage() {
  const canvas = document.createElement("canvas"); canvas.width = 1000; canvas.height = 1400;
  const ctx = canvas.getContext("2d"); const gradient = ctx.createLinearGradient(0, 0, 1000, 1400); gradient.addColorStop(0, "#08182e"); gradient.addColorStop(1, "#183b61"); ctx.fillStyle = gradient; ctx.fillRect(0, 0, 1000, 1400);
  ctx.fillStyle = "#7bd9e9"; ctx.beginPath(); ctx.arc(845, 135, 100, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#ff8068"; ctx.beginPath(); ctx.arc(150, 1210, 76, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#ffffff"; ctx.font = "700 25px sans-serif"; ctx.fillText("STARTO 好き顔セレクション", 80, 92);
  ctx.fillStyle = "#7bd9e9"; ctx.font = "700 18px sans-serif"; ctx.fillText(CATEGORIES[state.category].label.toUpperCase(), 80, 145);
  ctx.fillStyle = "#ffffff"; ctx.font = "900 58px sans-serif"; ctx.fillText("MY TOP 9", 80, 228);
  state.ranking.slice(0, 9).forEach((member, index) => {
    const y = 300 + index * 103; ctx.fillStyle = index === 0 ? "#ff8068" : "#7bd9e9"; ctx.font = "italic 900 30px sans-serif"; ctx.fillText(String(index + 1).padStart(2, "0"), 80, y);
    ctx.fillStyle = "rgba(255,255,255,.15)"; ctx.fillRect(170, y - 32, 720, 1);
    ctx.fillStyle = "#ffffff"; ctx.font = "700 27px sans-serif"; ctx.fillText(member.name, 185, y); ctx.fillStyle = "rgba(255,255,255,.63)"; ctx.font = "500 14px sans-serif"; ctx.fillText(`${member.groupName}  /  ${member.en}`, 185, y + 26);
  });
  ctx.fillStyle = "rgba(255,255,255,.6)"; ctx.font = "500 14px sans-serif"; ctx.fillText("FAN-MADE PROJECT  •  starto-sukigao", 80, 1320);
  const link = document.createElement("a"); link.download = "starto-sukigao-result.png"; link.href = canvas.toDataURL("image/png"); link.click(); showToast("結果画像を保存しました");
}

render();
