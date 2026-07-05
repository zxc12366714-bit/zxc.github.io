const officialHeroPage = "https://pvp.qq.com/web201605/herodetail/537.shtml";

const skills = [
  {
    key: "passive",
    glyph: "P",
    name: "天雷引",
    type: "被动",
    summary:
      "普攻积累天雷之力，满层后获得额外释放基础技能的机会；释放基础技能后进入强化普攻节奏，是司空震连续压制和拉扯的核心。",
    notes: [
      "公开调整显示，2024 年后普攻收益更强调 AD 与强化普攻额外法术伤害。",
      "2025-04-16 公告将强化普攻射程从 675 下调到 650。"
    ]
  },
  {
    key: "skill1",
    glyph: "1",
    name: "奔雷疾",
    type: "一技能",
    summary:
      "向前疾行并对路径目标造成伤害，同时获得护盾。它既是贴近和追击手段，也是变身前后维持输出位置的关键技能。",
    notes: [
      "2023-10-19 公告为一技能加入 0.05 秒前摇，降低无前摇位移带来的对抗压力。",
      "2025-01-22 公告提升一技能护盾数值，并把护盾持续时间提升到 2.5 秒。"
    ]
  },
  {
    key: "skill2",
    glyph: "2",
    name: "狂雷击",
    type: "二技能",
    summary:
      "向前释放雷电力量，命中或到达终点后爆发并击退目标。它承担控制、打断和保护距离的功能。",
    notes: [
      "2024-12-04 公告将二技能冷却调整为 10(-0.4/Lv)。",
      "同次公告把控制时间从距离浮动改为固定 0.5 秒。"
    ]
  },
  {
    key: "skill3",
    glyph: "3",
    name: "雷霆万钧",
    type: "三技能",
    summary:
      "进入雷霆形态，获得更高频的天雷之力获取、雷电链普攻和变身期护盾。大招窗口决定司空震团战里的进退节奏。",
    notes: [
      "2024-12-04 公告将大招持续时间调整为 8 秒，并重排雷击、落地、雷电链与护盾收益。",
      "2025-01-08 公告将三技能冷却从 65~50 调整为 60~48。"
    ]
  }
];

const timeline = [
  {
    date: "2020-12-11",
    title: "新英雄爆料与设计思路",
    type: "官方内容",
    text:
      "官方公开司空震的世界观与玩法设计：战士/法师、雷霆之力、变身后更高频技能释放和更强 AOE。",
    url: "https://pvp.qq.com/web201706/newsdetail.shtml?tid=493552"
  },
  {
    date: "2021-01-14",
    title: "正式服上线窗口",
    type: "官网内容",
    text:
      "官网搜索结果在 2021-01-14 集中出现“新英雄司空震上线”相关内容，可作为上线资料发布窗口。",
    url: "https://pvp.qq.com/web201706/newsdetail.shtml?tid=498380"
  },
  {
    date: "2022-07-29",
    title: "前期补强，后期降温",
    type: "官方公告",
    text:
      "官方认为司空震装备依赖较强，前期弱、成型后掌控力过高，因此提高前期普攻/强化普攻基础表现并回收成长收益。",
    url: "https://pvp.qq.com/web201706/newsdetail.shtml?tid=575320"
  },
  {
    date: "2023-10-19",
    title: "位移对抗性修正",
    type: "官方公告",
    text:
      "一技能前摇从 0 调整为 0.05 秒，降低无前摇位移让对手难以反制的问题。",
    url: "https://pvp.qq.com/web201706/newsdetail.shtml?tid=609358"
  },
  {
    date: "2024-12-04",
    title: "大规模平衡调整",
    type: "官方公告",
    text:
      "被动、普攻、强化普攻、一二三技能均有数值或机制调整；收益结构转向 AD、额外生命护盾与 AP 混合。",
    url: "https://pvp.qq.com/web201706/newsdetail.shtml?tid=638456"
  },
  {
    date: "2024-12-05",
    title: "物理装误判说明",
    type: "官方说明",
    text:
      "官方确认版本更新后司空震购买物理装偶现局后被误判乱出装的问题，说明当时物理装玩法已进入实际使用场景。",
    url: "https://pvp.qq.com/web201706/newsdetail.shtml?tid=638502"
  },
  {
    date: "2025-01-08",
    title: "三技能冷却增强",
    type: "官方公告",
    text:
      "三技能冷却从 65~50 调整为 60~48，提升大招窗口可用频率。",
    url: "https://pvp.qq.com/web201706/newsdetail.shtml?tid=640921"
  },
  {
    date: "2025-01-22",
    title: "护盾能力增强",
    type: "官方公告",
    text:
      "一技能护盾持续时间和数值提升，三技能护盾持续时间提升，增强持续对抗稳定性。",
    url: "https://pvp.qq.com/web201706/newsdetail.shtml?tid=641975"
  },
  {
    date: "2025-04-16",
    title: "强化普攻射程降温",
    type: "官方公告",
    text:
      "强化普攻射程从 675 下调至 650，是截至本页核对日期找到的最近一次司空震相关平衡公告。",
    url: "https://pvp.qq.com/web201706/newsdetail.shtml?tid=648134"
  }
];

const dataPoints = [
  {
    date: "2021-01-22",
    label: "上线一周",
    text:
      "官网内容作者记录：所有段位胜率相较首日上升 7.28%，Ban 率下降 14.44%。该点来自社区数据文章，不等同于官方平衡公告。",
    url: "https://pvp.qq.com/web201706/newsdetail.shtml?tid=499738"
  },
  {
    date: "2022-07-29",
    label: "成型后过强",
    text:
      "官方公告明确描述：前期无装备较难对线，装备成型后对战局掌控力过高。",
    url: "https://pvp.qq.com/web201706/newsdetail.shtml?tid=575320"
  },
  {
    date: "2024-12-05",
    label: "物理装分支",
    text:
      "官方说明出现物理装误判问题，反映 2024 年底调整后出装方向已不再局限于早期法术攻速体系。",
    url: "https://pvp.qq.com/web201706/newsdetail.shtml?tid=638502"
  }
];

const buildPhases = [
  {
    title: "2021 上线初期：法术攻速探索",
    text:
      "围绕普攻触发、金色圣剑、法术吸血和巫术法杖等收益搭建输出循环。"
  },
  {
    title: "2022 降温后：压缩后期曲线",
    text:
      "官方降低成长收益，强调前期体验与后期压制力之间的平衡。"
  },
  {
    title: "2024 机制重排：AD / 额外生命进入核心收益",
    text:
      "被动、普攻、护盾和大招收益被重排，出装开始出现物理方向和更重视生存收益的尝试。"
  },
  {
    title: "2025 微调：冷却、护盾、射程校准",
    text:
      "先增强大招频率与护盾稳定性，再下调强化普攻射程，控制持续压迫范围。"
  }
];

const skins = [
  {
    name: "雷霆之王",
    note: "默认形象",
    art: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/537/537-bigskin-1.jpg"
  },
  {
    name: "启蛰",
    note: "官方皮肤",
    art: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/537/537-bigskin-2.jpg"
  },
  {
    name: "地狱燃心",
    note: "官方皮肤",
    art: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/537/537-bigskin-3.jpg"
  },
  {
    name: "愿照·山河定",
    note: "官方英雄列表接口已收录",
    art: "https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/537/537-bigskin-4.jpg"
  }
];

const skillTabs = document.querySelector(".skill-tabs");
const skillDetail = document.querySelector(".skill-detail");

function renderSkillTabs() {
  skillTabs.innerHTML = skills
    .map(
      (skill, index) => `
        <button
          class="skill-tab"
          id="tab-${skill.key}"
          type="button"
          role="tab"
          aria-selected="${index === 0}"
          aria-controls="panel-${skill.key}"
          data-skill="${skill.key}"
        >
          <span class="skill-glyph" aria-hidden="true">${skill.glyph}</span>
          <span>
            <strong>${skill.name}</strong>
            <span>${skill.type}</span>
          </span>
        </button>
      `
    )
    .join("");

  skillTabs.addEventListener("click", (event) => {
    const button = event.target.closest(".skill-tab");
    if (!button) return;
    setActiveSkill(button.dataset.skill);
  });
}

function setActiveSkill(key) {
  const skill = skills.find((item) => item.key === key) || skills[0];
  document.querySelectorAll(".skill-tab").forEach((button) => {
    button.setAttribute("aria-selected", String(button.dataset.skill === skill.key));
  });

  skillDetail.id = `panel-${skill.key}`;
  skillDetail.setAttribute("role", "tabpanel");
  skillDetail.setAttribute("aria-labelledby", `tab-${skill.key}`);
  skillDetail.innerHTML = `
    <header>
      <div>
        <p class="section-kicker">${skill.type}</p>
        <h3>${skill.name}</h3>
      </div>
      <span class="tag">${skill.glyph}</span>
    </header>
    <p>${skill.summary}</p>
    <ul class="skill-notes">
      ${skill.notes.map((note) => `<li>${note}</li>`).join("")}
    </ul>
  `;
}

function renderTimeline() {
  document.querySelector("#timeline").innerHTML = timeline
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-date">${item.date}</div>
          <div class="timeline-card">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <div class="source-row">
              <span class="source-type">${item.type}</span>
              <a href="${item.url}" target="_blank" rel="noopener noreferrer">查看来源</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderDataPoints() {
  document.querySelector("#data-points").innerHTML = dataPoints
    .map(
      (point) => `
        <div class="data-point">
          <strong>${point.date}</strong>
          <div>
            <h4>${point.label}</h4>
            <p>${point.text}</p>
            <a class="text-link" href="${point.url}" target="_blank" rel="noopener noreferrer">来源</a>
          </div>
        </div>
      `
    )
    .join("");
}

function renderBuildPhases() {
  document.querySelector("#build-phases").innerHTML = buildPhases
    .map(
      (phase) => `
        <div class="build-phase">
          <h4>${phase.title}</h4>
          <p>${phase.text}</p>
        </div>
      `
    )
    .join("");
}

function renderSkins() {
  document.querySelector("#skin-grid").innerHTML = skins
    .map(
      (skin) => `
        <article class="skin-card">
          <div class="skin-art">
            <img src="${skin.art}" alt="王者荣耀司空震皮肤插画：${skin.name}" loading="lazy">
            <span class="skin-source">腾讯官方 CDN</span>
          </div>
          <div class="skin-info">
            <h3>${skin.name}</h3>
            <p>${skin.note}</p>
          </div>
          <div class="skin-links">
            <a href="${officialHeroPage}" target="_blank" rel="noopener noreferrer">官方图鉴</a>
            <a href="${skin.art}" target="_blank" rel="noopener noreferrer">官方原图</a>
          </div>
        </article>
      `
    )
    .join("");
}

renderSkillTabs();
setActiveSkill(skills[0].key);
renderTimeline();
renderDataPoints();
renderBuildPhases();
renderSkins();
