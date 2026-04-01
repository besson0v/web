const STORAGE_KEY = 'medtrack-data-v1';

const seedData = {
  protocols: [
    {
      id: uid(),
      title: 'Голеностопы — 3 раза в неделю',
      schedule: '3 раза в неделю',
      note: 'Работа на стабильность, силу и переносимость нагрузки.',
      items: [
        'Удержание конца амплитуды стоя на 1 ноге — 4×20 сек, цель со временем 60 кг',
        'Вставания с тумбы 50 см на 1 ноге — 3×10',
        'Жим платформы 1 ногой — 3×10',
        'Румынская тяга на 1 ноге с гирей — 3×10',
        'Подъемы на носок на 1 ноге — 3×10, прогрессия до 20',
        'Ходьба на носках с палкой над головой — 4×15 сек',
        'Пого-прыжки на 2 ногах — 4×15 сек'
      ]
    },
    {
      id: uid(),
      title: 'Спина — ежедневный короткий блок',
      schedule: 'каждый день',
      note: 'Главная логика: если на следующее утро хуже — не наращивать нагрузку.',
      items: [
        'Шифт тазом в каждую сторону — 2×10, 5 раз в день',
        'Наклоны вперед',
        'Антиротация — 3×30 сек, 3 раза в день, интенсивность 3/10'
      ]
    },
    {
      id: uid(),
      title: 'Спина — силовой блок',
      schedule: '2 раза в неделю',
      note: 'Прогрессировать только если утром после упражнения не хуже.',
      items: [
        'Удержание поясницы в направлении разгибания — 4×20 сек, старт 10 кг, +5 кг',
        'Удержание себя в направлении разгибания — прогрессия по 2 кг'
      ]
    }
  ],
  workoutLogs: [],
  symptomLogs: [
    {
      id: uid(),
      date: '2026-03-30',
      zone: 'Поясница',
      pain: 4,
      moment: 'утро',
      note: 'Поднывает утром, после упражнений становится лучше.'
    },
    {
      id: uid(),
      date: '2026-03-30',
      zone: 'Грудной отдел',
      pain: 5,
      moment: 'день',
      note: 'При шифтах бывает прострел слева.'
    },
    {
      id: uid(),
      date: '2026-03-30',
      zone: 'Левый голеностоп',
      pain: 5,
      moment: 'после тренировки',
      note: 'При беге и при ударе по мячу появляется боль.'
    }
  ],
  labResults: [
    { id: uid(), date: '2025-08-14', panel: 'Щитовидка', marker: 'ТТГ', value: 9.81, unit: 'мкМЕ/мл', refMin: 0.27, refMax: 4.2, note: '' },
    { id: uid(), date: '2026-01-22', panel: 'Щитовидка', marker: 'ТТГ', value: 26.5, unit: 'мкМЕ/мл', refMin: 0.27, refMax: 4.2, note: 'Выраженно повышен' },
    { id: uid(), date: '2026-03-14', panel: 'Щитовидка', marker: 'ТТГ', value: 0.238, unit: 'мкМЕ/мл', refMin: 0.27, refMax: 4.2, note: 'На фоне Эутирокса' },
    { id: uid(), date: '2026-03-14', panel: 'Щитовидка', marker: 'Т4 свободный', value: 22.5, unit: 'пмоль/л', refMin: 12, refMax: 22, note: 'Слегка выше референса' },
    { id: uid(), date: '2026-01-22', panel: 'Гормоны', marker: 'Пролактин', value: 421, unit: 'мкМЕ/мл', refMin: 86, refMax: 324, note: 'Повышен' },
    { id: uid(), date: '2026-01-22', panel: 'Биохимия', marker: 'Кальций общий', value: 2.57, unit: 'ммоль/л', refMin: 2.15, refMax: 2.5, note: 'Слегка повышен' },
    { id: uid(), date: '2026-01-22', panel: 'Витамины', marker: 'Витамин D', value: 36.18, unit: 'нг/мл', refMin: 30, refMax: 100, note: 'Оптимальный диапазон' }
  ],
  visits: [
    {
      id: uid(),
      date: '2026-03-30',
      doctor: 'Темичев Г.В.',
      specialty: 'Врач ЛФК',
      clinic: 'Клиника Темичева Горковского',
      complaints: 'Голеностопы и спина болят; утром ноет поясница; грудной отдел стреляет эпизодами.',
      findings: 'Отек голеностопов, ограничение подошвенного сгибания; по МРТ — отеки Th5-Th8, спондилолистез L5-S1 ст. 2, двусторонние отеки голеностопов.',
      plan: 'Обновлен ЛФК-план для голеностопов и спины; стопы 3 раза в неделю, спина ежедневно + силовой блок 2 раза в неделю.'
    },
    {
      id: uid(),
      date: '2026-03-16',
      doctor: 'Темичев Г.В.',
      specialty: 'Врач ЛФК',
      clinic: 'Клиника Темичева Горковского',
      complaints: 'Боль в голеностопах и спине, утренняя скованность.',
      findings: 'Отеки 31/30 см, ограничение подошвенного сгибания.',
      plan: 'Старт реабилитационного плана, стабилизация суставов и контроль воспаления через движение.'
    },
    {
      id: uid(),
      date: '2026-03-13',
      doctor: 'Шорникова Л.А.',
      specialty: 'Ревматолог',
      clinic: '—',
      complaints: 'Обострение простреливающей боли в грудном отделе, боль в пояснице при движении и чихании, боли в голеностопах.',
      findings: 'Уточненный диагноз: аксиальный спондилоартрит; HLA-B27 отриц.',
      plan: 'Аэртал 100 мг 2 раза в день длительно; контроль анализов крови, МРТ грудного отдела и КПС через 3 месяца.'
    }
  ],
  documents: [
    {
      id: uid(),
      date: '2026-03-30',
      type: 'PDF',
      title: 'Приём Темичева 30.03.2026',
      area: 'Голеностопы, спина',
      source: 'Telegram PDF',
      summary: 'Подробный протокол ЛФК-визита: жалобы, МРТ-контекст, тестирование, обновлённый план упражнений.'
    },
    {
      id: uid(),
      date: '2026-03-14',
      type: 'Анализы',
      title: 'Кровь 14.03.2026',
      area: 'Щитовидка',
      source: 'Лаборатория',
      summary: 'ТТГ снижен, свободный Т4 слегка выше референса.'
    },
    {
      id: uid(),
      date: '2026-03-09',
      type: 'МРТ',
      title: 'МРТ голеностопов 09.03.2026',
      area: 'Левый и правый голеностоп',
      source: 'МЕДСИ',
      summary: 'Сохраняются отеки суставов и костных структур с двух сторон.'
    }
  ]
};

const state = loadState();
const elements = {};

document.addEventListener('DOMContentLoaded', init);

function init() {
  collectElements();
  initTelegram();
  bindTabs();
  bindForms();
  bindUtilities();
  setDefaultDates();
  renderAll();
}

function collectElements() {
  [
    'summaryCards', 'protocolList', 'timeline', 'symptomsList', 'workoutList', 'labChart', 'labTable',
    'visitList', 'documentList', 'insightsList', 'exerciseChart', 'exerciseStats', 'markerSelect',
    'exerciseSelect', 'workoutFilter', 'exportBtn', 'importInput'
  ].forEach((id) => elements[id] = document.getElementById(id));

  elements.forms = {
    symptom: document.getElementById('symptomForm'),
    workout: document.getElementById('workoutForm'),
    lab: document.getElementById('labForm'),
    visit: document.getElementById('visitForm'),
    document: document.getElementById('documentForm')
  };
}

function initTelegram() {
  const tg = window.Telegram?.WebApp;
  if (!tg) return;
  tg.ready();
  tg.expand();

  const theme = tg.themeParams || {};
  document.documentElement.dataset.tgScheme = tg.colorScheme || 'dark';

  // Держим собственную контрастную палитру, а из Telegram берём только акцентные цвета.
  // Иначе в iOS Mini App может приехать тёмный текст на тёмные карточки.
  if (theme.button_color) document.documentElement.style.setProperty('--accent', theme.button_color);
  if (theme.button_text_color) document.documentElement.style.setProperty('--accent-text', theme.button_text_color);
}

function bindTabs() {
  document.getElementById('tabs').addEventListener('click', (event) => {
    const tab = event.target.closest('.tab');
    if (!tab) return;
    document.querySelectorAll('.tab').forEach((item) => item.classList.remove('active'));
    document.querySelectorAll('.panel').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`.panel[data-panel="${tab.dataset.tab}"]`)?.classList.add('active');
  });
}

function bindForms() {
  elements.forms.symptom.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = formToObject(event.target);
    state.symptomLogs.unshift({ id: uid(), ...data, pain: Number(data.pain) });
    saveState();
    event.target.reset();
    setDefaultDates();
    renderAll();
    toast('Симптом сохранён');
  });

  elements.forms.workout.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = formToObject(event.target);
    state.workoutLogs.unshift({
      id: uid(),
      ...data,
      weightKg: toNullableNumber(data.weightKg),
      durationSec: toNullableNumber(data.durationSec),
      painBefore: toNullableNumber(data.painBefore),
      painAfter: toNullableNumber(data.painAfter)
    });
    saveState();
    event.target.reset();
    setDefaultDates();
    renderAll();
    toast('Тренировка сохранена');
  });

  elements.forms.lab.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = formToObject(event.target);
    state.labResults.unshift({
      id: uid(),
      ...data,
      value: Number(data.value),
      refMin: toNullableNumber(data.refMin),
      refMax: toNullableNumber(data.refMax)
    });
    saveState();
    event.target.reset();
    setDefaultDates();
    renderAll();
    toast('Анализ сохранён');
  });

  elements.forms.visit.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = formToObject(event.target);
    state.visits.unshift({ id: uid(), ...data });
    saveState();
    event.target.reset();
    setDefaultDates();
    renderAll();
    toast('Приём сохранён');
  });

  elements.forms.document.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = formToObject(event.target);
    state.documents.unshift({ id: uid(), ...data });
    saveState();
    event.target.reset();
    setDefaultDates();
    renderAll();
    toast('Документ сохранён');
  });
}

function bindUtilities() {
  elements.exportBtn.addEventListener('click', exportJson);
  elements.importInput.addEventListener('change', importJson);
  elements.markerSelect.addEventListener('change', renderLabs);
  elements.exerciseSelect.addEventListener('change', renderExerciseInsights);
  elements.workoutFilter.addEventListener('change', renderWorkouts);
}

function setDefaultDates() {
  const today = new Date().toISOString().slice(0, 10);
  Object.values(elements.forms).forEach((form) => {
    const dateInput = form.querySelector('input[type="date"]');
    if (dateInput && !dateInput.value) dateInput.value = today;
  });
}

function renderAll() {
  renderSummary();
  renderProtocols();
  renderTimeline();
  renderSymptoms();
  renderWorkouts();
  renderLabs();
  renderVisits();
  renderDocuments();
  renderExerciseInsights();
  renderInsights();
}

function renderSummary() {
  const latestTsh = state.labResults
    .filter((item) => item.marker === 'ТТГ')
    .sort(byDateDesc)[0];
  const averagePain = average(state.symptomLogs.map((item) => item.pain));
  const latestVisit = state.visits.slice().sort(byDateDesc)[0];
  const metrics = [
    {
      label: 'Тренировок записано',
      value: state.workoutLogs.length,
      note: state.workoutLogs.length ? 'Журнал уже живёт' : 'Пока пусто — начни с первой выполненной ЛФК'
    },
    {
      label: 'Последний ТТГ',
      value: latestTsh ? `${latestTsh.value} ${latestTsh.unit || ''}`.trim() : '—',
      note: latestTsh ? `${formatDate(latestTsh.date)} · референс ${valueOrDash(latestTsh.refMin)}–${valueOrDash(latestTsh.refMax)}` : 'Добавь результаты лаборатории'
    },
    {
      label: 'Средняя боль',
      value: Number.isFinite(averagePain) ? averagePain.toFixed(1) + '/10' : '—',
      note: state.symptomLogs.length ? 'По последним записям симптомов' : 'Логи симптомов пока пустые'
    },
    {
      label: 'Последний приём',
      value: latestVisit ? latestVisit.doctor : '—',
      note: latestVisit ? formatDate(latestVisit.date) : 'Нет записанных визитов'
    }
  ];

  elements.summaryCards.innerHTML = metrics.map((item) => `
    <article class="metric">
      <div class="metric-label">${escapeHtml(item.label)}</div>
      <div class="metric-value">${escapeHtml(String(item.value))}</div>
      <div class="metric-note">${escapeHtml(item.note)}</div>
    </article>
  `).join('');
}

function renderProtocols() {
  if (!state.protocols.length) {
    elements.protocolList.innerHTML = empty('Нет активных протоколов');
    return;
  }

  elements.protocolList.innerHTML = state.protocols.map((protocol) => `
    <article class="item">
      <div class="meta">
        <span class="chip">${escapeHtml(protocol.schedule)}</span>
      </div>
      <h3>${escapeHtml(protocol.title)}</h3>
      <p>${escapeHtml(protocol.note)}</p>
      <ul>
        ${protocol.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>
    </article>
  `).join('');
}

function renderTimeline() {
  const events = [
    ...state.visits.map((item) => ({ type: 'Приём', title: `${item.doctor} · ${item.specialty || 'врач'}`, date: item.date, note: item.plan || item.findings })),
    ...state.documents.map((item) => ({ type: item.type, title: item.title, date: item.date, note: item.summary })),
    ...state.labResults.map((item) => ({ type: 'Анализ', title: `${item.marker}: ${item.value} ${item.unit || ''}`.trim(), date: item.date, note: item.note || item.panel })),
    ...state.workoutLogs.map((item) => ({ type: 'Тренировка', title: item.exercise, date: item.date, note: `${item.setsReps || ''} ${item.weightKg ? `· ${item.weightKg} кг` : ''}`.trim() })),
    ...state.symptomLogs.map((item) => ({ type: 'Симптом', title: `${item.zone}: ${item.pain}/10`, date: item.date, note: `${item.moment}${item.note ? ` · ${item.note}` : ''}` }))
  ].sort(byDateDesc).slice(0, 8);

  elements.timeline.innerHTML = events.length ? events.map((item) => `
    <article class="item">
      <div class="meta">
        <span class="chip">${escapeHtml(formatDate(item.date))}</span>
        <span class="chip">${escapeHtml(item.type)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.note || '—')}</p>
    </article>
  `).join('') : empty('Пока нет событий');
}

function renderSymptoms() {
  const list = state.symptomLogs.slice().sort(byDateDesc).slice(0, 8);
  elements.symptomsList.innerHTML = list.length ? list.map((item) => `
    <article class="item">
      <div class="meta">
        <span class="chip">${escapeHtml(formatDate(item.date))}</span>
        <span class="chip">${escapeHtml(item.zone)}</span>
        <span class="chip">${escapeHtml(item.moment)}</span>
      </div>
      <h3>Боль ${escapeHtml(String(item.pain))}/10</h3>
      <p>${escapeHtml(item.note || 'Без комментария')}</p>
    </article>
  `).join('') : empty('Симптомов пока нет');
}

function renderWorkouts() {
  const filter = elements.workoutFilter.value;
  const items = state.workoutLogs
    .slice()
    .sort(byDateDesc)
    .filter((item) => filter === 'all' || item.category === filter)
    .slice(0, 12);

  elements.workoutList.innerHTML = items.length ? items.map((item) => `
    <article class="item">
      <div class="meta">
        <span class="chip">${escapeHtml(formatDate(item.date))}</span>
        <span class="chip">${escapeHtml(item.category)}</span>
        ${item.side && item.side !== '-' ? `<span class="chip">${escapeHtml(item.side)}</span>` : ''}
      </div>
      <h3>${escapeHtml(item.exercise)}</h3>
      <p>${escapeHtml([
        item.setsReps,
        item.weightKg ? `${item.weightKg} кг` : '',
        item.durationSec ? `${item.durationSec} сек` : '',
        item.painBefore !== null ? `боль до ${item.painBefore}` : '',
        item.painAfter !== null ? `боль после ${item.painAfter}` : ''
      ].filter(Boolean).join(' · ') || 'Без подробностей')}</p>
      ${item.note ? `<p>${escapeHtml(item.note)}</p>` : ''}
    </article>
  `).join('') : empty('Пока нет записанных тренировок');

  const exercises = unique(state.workoutLogs.map((item) => item.exercise).filter(Boolean));
  const current = elements.exerciseSelect.value;
  elements.exerciseSelect.innerHTML = exercises.length
    ? exercises.map((exercise) => `<option value="${escapeAttr(exercise)}">${escapeHtml(exercise)}</option>`).join('')
    : '<option value="">Сначала добавь тренировки</option>';
  if (exercises.includes(current)) elements.exerciseSelect.value = current;
}

function renderLabs() {
  const markers = unique(state.labResults.map((item) => item.marker).filter(Boolean));
  const selected = markers.includes(elements.markerSelect.value) ? elements.markerSelect.value : markers[0];
  elements.markerSelect.innerHTML = markers.length
    ? markers.map((marker) => `<option value="${escapeAttr(marker)}">${escapeHtml(marker)}</option>`).join('')
    : '<option value="">Нет анализов</option>';
  if (selected) elements.markerSelect.value = selected;

  const series = state.labResults
    .filter((item) => item.marker === elements.markerSelect.value)
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date));

  elements.labChart.innerHTML = series.length ? drawLineChart(series) : empty('Добавь минимум один показатель');
  elements.labTable.innerHTML = series.length ? series.slice().reverse().map((item) => {
    const status = getLabStatus(item);
    return `
      <article class="item">
        <div class="meta">
          <span class="chip">${escapeHtml(formatDate(item.date))}</span>
          <span class="chip">${escapeHtml(item.panel || 'Анализ')}</span>
          ${status ? `<span class="chip">${escapeHtml(status)}</span>` : ''}
        </div>
        <h3>${escapeHtml(item.marker)}: ${escapeHtml(String(item.value))} ${escapeHtml(item.unit || '')}</h3>
        <p>${escapeHtml(item.note || `Референс: ${valueOrDash(item.refMin)}–${valueOrDash(item.refMax)}`)}</p>
      </article>
    `;
  }).join('') : '';
}

function renderVisits() {
  const items = state.visits.slice().sort(byDateDesc);
  elements.visitList.innerHTML = items.length ? items.map((item) => `
    <article class="item">
      <div class="meta">
        <span class="chip">${escapeHtml(formatDate(item.date))}</span>
        <span class="chip">${escapeHtml(item.specialty || 'Врач')}</span>
      </div>
      <h3>${escapeHtml(item.doctor)}</h3>
      <p>${escapeHtml(item.clinic || '—')}</p>
      <p><strong>Жалобы:</strong> ${escapeHtml(item.complaints || '—')}</p>
      <p><strong>Выводы:</strong> ${escapeHtml(item.findings || '—')}</p>
      <p><strong>План:</strong> ${escapeHtml(item.plan || '—')}</p>
    </article>
  `).join('') : empty('История приёмов пока пустая');
}

function renderDocuments() {
  const items = state.documents.slice().sort(byDateDesc);
  elements.documentList.innerHTML = items.length ? items.map((item) => `
    <article class="item">
      <div class="meta">
        <span class="chip">${escapeHtml(formatDate(item.date))}</span>
        <span class="chip">${escapeHtml(item.type)}</span>
        ${item.area ? `<span class="chip">${escapeHtml(item.area)}</span>` : ''}
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary || '—')}</p>
      <p>${escapeHtml(item.source || '—')}</p>
    </article>
  `).join('') : empty('Документы пока не занесены');
}

function renderExerciseInsights() {
  const exercise = elements.exerciseSelect.value;
  const series = state.workoutLogs
    .filter((item) => item.exercise === exercise)
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date));

  if (!series.length) {
    elements.exerciseChart.innerHTML = empty('Запиши несколько тренировок одного упражнения — здесь появится график.');
    elements.exerciseStats.innerHTML = empty('Пока нет данных для сравнения.');
    return;
  }

  const chartData = series.map((item) => ({
    date: item.date,
    value: item.weightKg ?? item.durationSec ?? parseSets(item.setsReps) ?? 0
  }));
  elements.exerciseChart.innerHTML = drawBarChart(chartData);

  const best = Math.max(...chartData.map((item) => item.value));
  const latest = chartData[chartData.length - 1]?.value;
  const painAfter = average(series.map((item) => item.painAfter).filter((v) => v !== null));
  const stats = [
    `Лучшая зафиксированная метрика: ${best}`,
    `Последняя зафиксированная метрика: ${latest}`,
    Number.isFinite(painAfter) ? `Средняя боль после упражнения: ${painAfter.toFixed(1)}/10` : 'Нет данных по боли после упражнения'
  ];
  elements.exerciseStats.innerHTML = stats.map((line) => `<article class="item"><p>${escapeHtml(line)}</p></article>`).join('');
}

function renderInsights() {
  const items = [];
  const labsOut = state.labResults.filter((item) => isOutOfRange(item)).sort(byDateDesc).slice(0, 4);
  const latestVisit = state.visits.slice().sort(byDateDesc)[0];
  const latestWorkout = state.workoutLogs.slice().sort(byDateDesc)[0];
  const avgMorningBack = average(state.symptomLogs.filter((item) => item.zone === 'Поясница' && item.moment === 'утро').map((item) => item.pain));

  if (latestVisit) items.push(`Последний опорный план сейчас идёт от ${latestVisit.doctor} (${formatDate(latestVisit.date)}).`);
  if (labsOut.length) items.push(`Есть показатели вне референса: ${labsOut.map((item) => `${item.marker} (${item.value})`).join(', ')}.`);
  if (Number.isFinite(avgMorningBack)) items.push(`Средняя утренняя боль в пояснице по журналу: ${avgMorningBack.toFixed(1)}/10.`);
  if (latestWorkout) items.push(`Последняя тренировка записана ${formatDate(latestWorkout.date)} — ${latestWorkout.exercise}.`);
  if (!latestWorkout) items.push('Чтобы увидеть реальную динамику по упражнениям, начни заносить выполненные ЛФК-подходы.');
  if (!labsOut.length) items.push('По текущим внесённым анализам критичных выбросов пока не подсвечено.');

  elements.insightsList.innerHTML = items.map((text) => `<article class="item"><p>${escapeHtml(text)}</p></article>`).join('');
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `medtrack-export-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  toast('Экспорт готов');
}

function importJson(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      ['protocols', 'workoutLogs', 'symptomLogs', 'labResults', 'visits', 'documents'].forEach((key) => {
        state[key] = Array.isArray(parsed[key]) ? parsed[key] : [];
      });
      saveState();
      renderAll();
      toast('Импорт выполнен');
    } catch (error) {
      console.error(error);
      toast('Не удалось импортировать JSON');
    } finally {
      event.target.value = '';
    }
  };
  reader.readAsText(file);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(seedData);
    return { ...structuredClone(seedData), ...JSON.parse(raw) };
  } catch (error) {
    console.error(error);
    return structuredClone(seedData);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function drawLineChart(series) {
  const width = 760;
  const height = 260;
  const padding = 32;
  const values = series.map((item) => item.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const safeRange = max - min || 1;

  const points = series.map((item, index) => {
    const x = padding + (index * (width - padding * 2)) / Math.max(series.length - 1, 1);
    const y = height - padding - ((item.value - min) / safeRange) * (height - padding * 2);
    return { ...item, x, y };
  });

  const path = points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');

  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="График динамики">
      <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="rgba(148,163,184,0.2)" />
      <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" stroke="rgba(148,163,184,0.2)" />
      <path class="line-path" d="${path}" />
      ${points.map((point) => `
        <circle class="line-point" cx="${point.x}" cy="${point.y}" r="5"></circle>
        <text class="axis-label" x="${point.x}" y="${height - 10}" text-anchor="middle">${shortDate(point.date)}</text>
        <text class="axis-label" x="${point.x}" y="${point.y - 12}" text-anchor="middle">${point.value}</text>
      `).join('')}
      <text class="axis-label" x="${padding}" y="${padding - 8}">max ${max}</text>
      <text class="axis-label" x="${padding}" y="${height - padding + 16}">min ${min}</text>
    </svg>
  `;
}

function drawBarChart(series) {
  const width = 760;
  const height = 260;
  const padding = 28;
  const max = Math.max(...series.map((item) => item.value), 1);
  const barWidth = (width - padding * 2) / series.length - 12;

  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="График прогресса">
      <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="rgba(148,163,184,0.2)" />
      ${series.map((item, index) => {
        const h = (item.value / max) * (height - padding * 2);
        const x = padding + index * ((width - padding * 2) / series.length) + 6;
        const y = height - padding - h;
        return `
          <rect class="bar" x="${x}" y="${y}" width="${Math.max(barWidth, 18)}" height="${h}" rx="10"></rect>
          <text class="bar-label" x="${x + Math.max(barWidth, 18) / 2}" y="${y - 8}" text-anchor="middle">${item.value}</text>
          <text class="axis-label" x="${x + Math.max(barWidth, 18) / 2}" y="${height - 8}" text-anchor="middle">${shortDate(item.date)}</text>
        `;
      }).join('')}
    </svg>
  `;
}

function getLabStatus(item) {
  if (item.refMin !== null && item.value < item.refMin) return 'ниже нормы';
  if (item.refMax !== null && item.value > item.refMax) return 'выше нормы';
  return '';
}

function isOutOfRange(item) {
  return Boolean(getLabStatus(item));
}

function parseSets(value) {
  if (!value) return null;
  const match = String(value).match(/(\d+)\s*x\s*(\d+)/i);
  if (!match) return null;
  return Number(match[1]) * Number(match[2]);
}

function formToObject(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function unique(items) {
  return [...new Set(items)];
}

function average(values) {
  if (!values.length) return NaN;
  const valid = values.filter((value) => Number.isFinite(value));
  if (!valid.length) return NaN;
  return valid.reduce((sum, value) => sum + value, 0) / valid.length;
}

function byDateDesc(a, b) {
  return b.date.localeCompare(a.date);
}

function toNullableNumber(value) {
  if (value === '' || value === undefined || value === null) return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function valueOrDash(value) {
  return value === null || value === undefined || value === '' ? '—' : value;
}

function formatDate(dateString) {
  if (!dateString) return '—';
  return new Date(`${dateString}T00:00:00`).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function shortDate(dateString) {
  if (!dateString) return '—';
  return new Date(`${dateString}T00:00:00`).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('`', '&#096;');
}

function empty(text) {
  return `<div class="empty">${escapeHtml(text)}</div>`;
}

function toast(text) {
  const node = document.createElement('div');
  node.className = 'toast';
  node.textContent = text;
  document.body.appendChild(node);
  setTimeout(() => node.remove(), 2200);
}

function uid() {
  return Math.random().toString(36).slice(2, 10);
}
