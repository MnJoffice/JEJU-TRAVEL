const questions = [
  { title: "제주에 도착한 첫날, 가장 먼저 하고 싶은 일은?", options: [
    ["해안도로를 달리며 바다부터 만난다", "wave"], ["동문시장으로 가서 제주 맛을 훑는다", "taste"], ["오름에 올라 섬의 윤곽을 눈에 담는다", "trail"], ["조용한 마을의 작은 책방에 머문다", "slow"] ] },
  { title: "여행 사진첩에 가장 많이 남을 장면은?", options: [
    ["햇빛이 부서지는 해변과 수평선", "wave"], ["처음 맛본 음식과 북적이는 골목", "taste"], ["흙 묻은 신발과 정상에서 본 풍경", "trail"], ["창가의 찻잔과 오래된 돌담", "slow"] ] },
  { title: "예상하지 못한 비가 내린다면?", options: [
    ["비 오는 해변을 짧게 걷는다", "wave"], ["비를 피할 맛집을 바로 찾는다", "taste"], ["숲길로 목적지를 바꿔 걷는다", "trail"], ["숙소 근처 카페에서 느긋하게 쉰다", "slow"] ] },
  { title: "제주에서 꼭 가져오고 싶은 기억은?", options: [
    ["파도 소리와 선명한 노을", "wave"], ["제철 식재료의 새로운 맛", "taste"], ["끝까지 걸어낸 뿌듯함", "trail"], ["아무것도 하지 않은 평온함", "slow"] ] },
  { title: "하루 일정을 짤 때 내 스타일은?", options: [
    ["좋은 해변 두세 곳을 이어 달린다", "wave"], ["먹고 싶은 메뉴를 중심으로 동선을 짠다", "taste"], ["난이도와 시간을 따져 걷는 코스를 정한다", "trail"], ["한 동네만 정하고 발길 닿는 대로 간다", "slow"] ] },
  { title: "이번 제주 여행에 가장 필요한 한 가지는?", options: [
    ["시원하게 트이는 해방감", "wave"], ["감각을 깨우는 즐거움", "taste"], ["몸을 움직이는 생동감", "trail"], ["속도를 낮추는 여유", "slow"] ] }
];

const results = {
  wave: { title: "바람을 좇는\n해안 드라이버", code: "TYPE 01", description: "탁 트인 풍경에서 에너지를 얻는 당신. 촘촘한 계획보다 좋은 음악과 해안선 하나면 충분합니다. 바다가 가장 가까운 길 위에서 제주의 리듬을 만나보세요.", tags: ["해안도로", "노을", "드라이브"], routes: [["신창풍차해안도로", "바람과 풍차가 만드는 서쪽 해안의 선명한 장면"], ["금능해수욕장", "비양도를 마주 보고 천천히 걷는 얕고 맑은 바다"], ["수월봉", "하루의 끝, 절벽 위에서 보는 넓은 수평선"]], tip: "일몰 1시간 전부터 이동은 짧게 잡으세요. 가장 좋은 장면 앞에서 오래 머물 수 있습니다." },
  taste: { title: "제주를 맛보는\n로컬 탐험가", code: "TYPE 02", description: "지역의 맛과 사람 사이에서 여행의 생생함을 발견하는 당신. 유명한 한 끼보다 제철 재료, 시장의 목소리, 작은 가게의 이야기가 더 오래 남습니다.", tags: ["전통시장", "제철음식", "골목산책"], routes: [["제주시 민속오일시장", "제주 사람들의 장바구니를 따라 만나는 생활의 맛"], ["보목포구", "자리돔과 제철 해산물을 만나는 작은 포구"], ["서귀포 매일올레시장", "저녁 산책과 간식을 한 번에 즐기는 활기찬 골목"]], tip: "한 끼는 예약하고, 한 끼는 시장에서 즉흥적으로 골라보세요. 맛의 대비가 여행을 더 풍성하게 만듭니다." },
  trail: { title: "오름을 오르는\n야생 트레커", code: "TYPE 03", description: "직접 걷고 발견할 때 가장 살아 있음을 느끼는 당신. 흙길의 감촉과 높아지는 시야, 계절마다 달라지는 숲의 표정이 최고의 여행 기념품입니다.", tags: ["오름", "숲길", "트레킹"], routes: [["아부오름", "부드러운 능선과 넓은 분화구를 만나는 가벼운 시작"], ["사려니숲길", "곧게 뻗은 삼나무 사이로 이어지는 깊은 호흡"], ["송악산 둘레길", "바다와 산을 함께 품고 걷는 장쾌한 마무리"]], tip: "제주 바람은 체감온도를 크게 낮춥니다. 얇은 겉옷과 물, 접지력 좋은 신발을 꼭 챙기세요." },
  slow: { title: "고요를 수집하는\n마을 산책자", code: "TYPE 04", description: "많이 보는 것보다 깊이 머무는 것을 좋아하는 당신. 돌담 너머의 생활, 오래된 집을 고친 공간, 조용한 창가에서 제주의 여백을 발견합니다.", tags: ["돌담마을", "독립서점", "느린오후"], routes: [["종달리", "낮은 돌담과 밭길 사이를 천천히 걷는 동쪽 마을"], ["세화리", "작은 책방과 바다가 자연스럽게 이어지는 동네"], ["저지리 예술인마을", "미술관과 숲을 오가며 보내는 조용한 오후"]], tip: "하루에 한 지역만 정하고 일정 사이를 비워두세요. 우연히 발견한 장소가 여행의 중심이 될 수 있습니다." }
};

let current = 0;
let answers = [];
const intro = document.querySelector("#intro");
const quiz = document.querySelector("#quiz");
const result = document.querySelector("#result");

function showScreen(name) {
  [intro, quiz, result].forEach(el => { el.hidden = el.id !== name; });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const q = questions[current];
  const step = current + 1;
  const percent = Math.round(step / questions.length * 100);
  document.querySelector("#question-number").textContent = `Q. ${String(step).padStart(2, "0")}`;
  document.querySelector("#question-title").textContent = q.title;
  document.querySelector("#progress-text").textContent = `QUESTION ${String(step).padStart(2, "0")} / 06`;
  document.querySelector("#progress-percent").textContent = `${percent}%`;
  document.querySelector("#progress-bar").style.width = `${percent}%`;
  document.querySelector("#back-btn").style.visibility = current === 0 ? "hidden" : "visible";
  const options = document.querySelector("#options");
  options.innerHTML = "";
  q.options.forEach(([label, type], index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", answers[current] === type ? "true" : "false");
    button.innerHTML = `<span class="option-index">${String.fromCharCode(65 + index)}</span><span class="option-label">${label}</span><span class="option-arrow" aria-hidden="true">→</span>`;
    button.addEventListener("click", () => selectAnswer(type));
    options.appendChild(button);
  });
}

function selectAnswer(type) {
  answers[current] = type;
  if (current < questions.length - 1) {
    current += 1;
    renderQuestion();
    document.querySelector("#question-title").focus({ preventScroll: true });
  } else {
    showResult();
  }
}

function showResult() {
  const score = answers.reduce((acc, type) => ({ ...acc, [type]: (acc[type] || 0) + 1 }), {});
  const type = Object.keys(results).reduce((best, key) => (score[key] || 0) > (score[best] || 0) ? key : best, answers[0]);
  const data = results[type];
  document.querySelector("#result-title").textContent = data.title;
  document.querySelector("#result-description").textContent = data.description;
  document.querySelector("#result-code").textContent = data.code;
  document.querySelector("#result-tip").textContent = data.tip;
  document.querySelector("#result-tags").innerHTML = data.tags.map(tag => `<span># ${tag}</span>`).join("");
  document.querySelector("#result-route").innerHTML = data.routes.map((item, i) => `<li><span class="num">0${i + 1}</span><div><strong>${item[0]}</strong><p>${item[1]}</p></div></li>`).join("");
  result.dataset.type = type;
  showScreen("result");
  document.querySelector("#result-title").focus({ preventScroll: true });
}

document.querySelector("#start-btn").addEventListener("click", () => { current = 0; answers = []; renderQuestion(); showScreen("quiz"); });
document.querySelector("#back-btn").addEventListener("click", () => { if (current > 0) { current -= 1; renderQuestion(); } });
document.querySelector("#restart-btn").addEventListener("click", () => { current = 0; answers = []; renderQuestion(); showScreen("quiz"); });
document.querySelector("#copy-btn").addEventListener("click", async () => {
  const data = results[result.dataset.type];
  const text = `나의 제주 여행 타입은 '${data.title.replace("\n", " ")}'! ${data.tags.map(tag => `#${tag}`).join(" ")}`;
  try {
    await navigator.clipboard.writeText(text);
    document.querySelector("#copy-status").textContent = "결과가 클립보드에 복사되었습니다.";
  } catch {
    document.querySelector("#copy-status").textContent = "복사할 수 없어요. 브라우저 권한을 확인해주세요.";
  }
});
