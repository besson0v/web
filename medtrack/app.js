const STORAGE_KEY = 'medtrack-data-v2';

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
        'Румынская тяга на 1 ногой с гирей — 3×10',
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
  workoutLogs: [
    {
      id: uid(),
      date: '2026-03-31',
      category: 'Плавание',
      durationMin: 45,
      note: 'Спокойная работа, без перегруза.',
      blocks: [
        { id: uid(), type: 'distance', title: 'Разминка вольный стиль', distanceM: 200, durationMin: 5, note: '' },
        { id: uid(), type: 'interval', title: 'Вольный стиль', repeats: 4, distanceM: 200, note: 'ровный темп' },
        { id: uid(), type: 'interval', title: 'Вольный стиль', repeats: 6, distanceM: 100, note: 'короче, но интенсивнее' }
      ]
    },
    {
      id: uid(),
      date: '2026-03-30',
      category: 'Голеностопы',
      durationMin: 30,
      note: 'Оставил рабочий вес 30 кг из-за реакции спины.',
      blocks: [
        { id: uid(), type: 'strength', title: 'Жим платформы 1 ногой', side: 'левая', sets: 3, reps: 10, weightKg: 30, note: '' },
        { id: uid(), type: 'strength', title: 'Жим платформы 1 ногой', side: 'правая', sets: 3, reps: 10, weightKg: 30, note: '' },
        { id: uid(), type: 'strength', title: 'Подъёмы на носок на 1 ноге', side: 'обе', sets: 3, reps: 10, note: '' }
      ]
    }
  ],
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
const workoutEditor = {
  editingSessionId: null
};

document.addEventListener('DOMContentLoaded', init);

function init() {
  normalizeState();
  collectElements();
  initTelegram();
  bindTabs();
  bindForms();
  bindUtilities();
  setDefaultDates();
  ensureWorkoutBlockRows();
  updateWorkoutFormMode();
  renderAll();
}

function collectElements() {
  [
    'summaryCards', 'protocolList', 'timeline', 'symptomsList', 'workoutList', 'labChart', 'labTable',
    'visitList', 'documentList', 'insightsList', 'exerciseChart', 'exerciseStats', 'markerSelect',
    'exerciseSelect', 'workoutFilter', 'exportBtn', 'importInput', 'addWorkoutBlockBtn',
    'workoutBlocks', 'workoutCategoryList', 'workoutSubmitBtn', 'workoutCancelEditBtn'
  ].forEach((id) => elements[id] = document.getElementById(id));

  elements.forms = {
    symptom: document.getElementById('symptomForm'),
    workout: document.getElementById('workoutForm'),
    lab: document.getElementById('labForm'),
    visit: document.getElementById('visitForm'),
    document: document.getElementById('documentForm')
  };
}

function normalizeState() {
  state.workoutLogs = (state.workoutLogs || []).map(normalizeWorkoutSession);
}

function initTelegram() {
  const tg = window.Telegram?.WebApp;
  if (!tg) return;
  tg.ready();
  tg.expand();

  const theme = tg.themeParams || {};
  document.documentElement.dataset.tgScheme = tg.colorScheme || 'dark';
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
    const session = buildWorkoutSessionFromForm(data);
    if (!session.blocks.length) {
      toast('Добавь хотя бы один блок');
      return;
    }

    if (workoutEditor.editingSessionId) {
      const index = state.workoutLogs.findIndex((item) => item.id === workoutEditor.editingSessionId);
      if (index >= 0) {
        state.workoutLogs[index] = { ...session, id: workoutEditor.editingSessionId };
      }
      saveState();
      resetWorkoutForm();
      renderAll();
      toast('Тренировка обновлена');
      return;
    }

    state.workoutLogs.unshift(session);
    saveState();
    resetWorkoutForm();
    renderAll();
    toast('Тренировка-сессия сохранена');
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
  elements.addWorkoutBlockBtn?.addEventListener('click', () => addWorkoutBlockRow());
  elements.workoutBlocks?.addEventListener('click', handleWorkoutBlockClick);
  elements.workoutBlocks?.addEventListener('change', handleWorkoutBlockTypeChange);
  elements.workoutList?.addEventListener('click', handleWorkoutListClick);
  elements.forms.workout.querySelector('[name="category"]')?.addEventListener('input', renderWorkoutLibrary);
  elements.workoutCancelEditBtn?.addEventListener('click', resetWorkoutForm);
}

function setDefaultDates() {
  const today = new Date().toISOString().slice(0, 10);
  Object.values(elements.forms).forEach((form) => {
    const dateInput = form.querySelector('input[type="date"]');
    if (dateInput && !dateInput.value) dateInput.value = today;
  });
}

function ensureWorkoutBlockRows() {
  if (!elements.workoutBlocks?.children.length) {
    addWorkoutBlockRow('strength');
    addWorkoutBlockRow('distance');
  }
}

function resetWorkoutBlocks() {
  elements.workoutBlocks.innerHTML = '';
  ensureWorkoutBlockRows();
}

function resetWorkoutForm() {
  workoutEditor.editingSessionId = null;
  elements.forms.workout.reset();
  setDefaultDates();
  resetWorkoutBlocks();
  updateWorkoutFormMode();
  renderWorkoutLibrary();
}

function updateWorkoutFormMode() {
  const isEditing = Boolean(workoutEditor.editingSessionId);
  if (elements.workoutSubmitBtn) {
    elements.workoutSubmitBtn.textContent = isEditing ? 'Сохранить изменения' : 'Сохранить тренировку';
  }
  if (elements.workoutCancelEditBtn) {
    elements.workoutCancelEditBtn.hidden = !isEditing;
  }
}

function addWorkoutBlockRow(type = 'strength', values = {}) {
  if (!elements.workoutBlocks) return;
  const row = document.createElement('article');
  row.className = 'workout-block';
  row.dataset.blockId = values.id || uid();
  row.innerHTML = `
    <div class="workout-block-head">
      <strong>Блок</strong>
      <button type="button" class="ghost danger-ghost" data-action="remove-block">Удалить</button>
    </div>

    <div class="grid two">
      <label>
        <span>Тип блока</span>
        <select name="blockType">
          <option value="strength" ${type === 'strength' ? 'selected' : ''}>Силовой / упражнение</option>
          <option value="interval" ${type === 'interval' ? 'selected' : ''}>Интервал / отрезок</option>
          <option value="distance" ${type === 'distance' ? 'selected' : ''}>Свободный временной / дистанционный</option>
        </select>
      </label>
      <label>
        <span>Название</span>
        <input name="blockTitle" type="text" list="exerciseLibrary" value="${escapeAttr(values.title || '')}" placeholder="Например: жим платформы / вольный стиль / разминка" />
      </label>
    </div>

    <div class="block-fields"></div>
  `;
  elements.workoutBlocks.appendChild(row);
  renderWorkoutBlockFields(row, type, values);
}

function renderWorkoutBlockFields(row, type, values = {}) {
  const fields = row.querySelector('.block-fields');
  if (!fields) return;

  if (type === 'strength') {
    fields.innerHTML = `
      <div class="grid four">
        <label>
          <span>Подходы</span>
          <input name="sets" type="number" min="0" step="1" value="${escapeAttr(values.sets ?? '')}" placeholder="3" />
        </label>
        <label>
          <span>Количество / повторы</span>
          <input name="reps" type="number" min="0" step="1" value="${escapeAttr(values.reps ?? '')}" placeholder="10" />
        </label>
        <label>
          <span>Вес, кг</span>
          <input name="weightKg" type="number" min="0" step="0.5" value="${escapeAttr(values.weightKg ?? '')}" placeholder="30" />
        </label>
        <label>
          <span>Сторона</span>
          <select name="side">
            <option value="-" ${(values.side || '-') === '-' ? 'selected' : ''}>—</option>
            <option value="левая" ${values.side === 'левая' ? 'selected' : ''}>левая</option>
            <option value="правая" ${values.side === 'правая' ? 'selected' : ''}>правая</option>
            <option value="обе" ${values.side === 'обе' ? 'selected' : ''}>обе</option>
          </select>
        </label>
      </div>
      <label>
        <span>Заметка блока</span>
        <textarea name="blockNote" rows="2" placeholder="Например: на 40 кг чувствуется спина, оставил 30 кг">${escapeHtml(values.note || '')}</textarea>
      </label>
    `;
    return;
  }

  if (type === 'interval') {
    fields.innerHTML = `
      <div class="grid four">
        <label>
          <span>Повторов</span>
          <input name="repeats" type="number" min="0" step="1" value="${escapeAttr(values.repeats ?? '')}" placeholder="4" />
        </label>
        <label>
          <span>Время, сек</span>
          <input name="durationSec" type="number" min="0" step="1" value="${escapeAttr(values.durationSec ?? '')}" placeholder="20" />
        </label>
        <label>
          <span>Дистанция, м</span>
          <input name="distanceM" type="number" min="0" step="1" value="${escapeAttr(values.distanceM ?? '')}" placeholder="200" />
        </label>
        <label>
          <span>Отдых / пауза, сек</span>
          <input name="restSec" type="number" min="0" step="1" value="${escapeAttr(values.restSec ?? '')}" placeholder="40" />
        </label>
      </div>
      <label>
        <span>Заметка блока</span>
        <textarea name="blockNote" rows="2" placeholder="Например: 20 сек максимум + 40 сек расслабленно">${escapeHtml(values.note || '')}</textarea>
      </label>
    `;
    return;
  }

  fields.innerHTML = `
    <div class="grid three">
      <label>
        <span>Длительность, мин</span>
        <input name="durationMin" type="number" min="0" step="1" value="${escapeAttr(values.durationMin ?? '')}" placeholder="10" />
      </label>
      <label>
        <span>Дистанция, м</span>
        <input name="distanceM" type="number" min="0" step="1" value="${escapeAttr(values.distanceM ?? '')}" placeholder="200" />
      </label>
      <label>
        <span>Интенсивность / темп</span>
        <input name="intensity" type="text" value="${escapeAttr(values.intensity || '')}" placeholder="лёгкий / средний / максимум" />
      </label>
    </div>
    <label>
      <span>Заметка блока</span>
      <textarea name="blockNote" rows="2" placeholder="Например: 5 минут лёгкий бег">${escapeHtml(values.note || '')}</textarea>
    </label>
  `;
}

function handleWorkoutBlockClick(event) {
  const button = event.target.closest('[data-action="remove-block"]');
  if (!button) return;
  const block = button.closest('.workout-block');
  if (!block) return;
  if (elements.workoutBlocks.children.length <= 1) {
    toast('Нужен хотя бы один блок');
    return;
  }
  block.remove();
}

function handleWorkoutListClick(event) {
  const action = event.target.closest('[data-action]');
  if (!action) return;

  const sessionId = action.dataset.sessionId;
  const blockId = action.dataset.blockId;

  if (action.dataset.action === 'edit-session') {
    startWorkoutEdit(sessionId);
    return;
  }

  if (action.dataset.action === 'delete-session') {
    deleteWorkoutSession(sessionId);
    return;
  }

  if (action.dataset.action === 'edit-block') {
    startWorkoutBlockEdit(sessionId, blockId);
    return;
  }

  if (action.dataset.action === 'delete-block') {
    deleteWorkoutBlock(sessionId, blockId);
  }
}

function handleWorkoutBlockTypeChange(event) {
  if (event.target.name !== 'blockType') return;
  const block = event.target.closest('.workout-block');
  renderWorkoutBlockFields(block, event.target.value);
}

function buildWorkoutSessionFromForm(data) {
  const blocks = [...elements.workoutBlocks.querySelectorAll('.workout-block')]
    .map(extractWorkoutBlock)
    .filter(Boolean);

  return normalizeWorkoutSession({
    id: uid(),
    date: data.date,
    category: (data.category || '').trim() || 'Без категории',
    durationMin: toNullableNumber(data.durationMin),
    note: (data.note || '').trim(),
    painBefore: toNullableNumber(data.painBefore),
    painAfter: toNullableNumber(data.painAfter),
    blocks
  });
}

function extractWorkoutBlock(row) {
  const type = row.querySelector('[name="blockType"]')?.value || 'strength';
  const title = (row.querySelector('[name="blockTitle"]')?.value || '').trim();
  const note = (row.querySelector('[name="blockNote"]')?.value || '').trim();
  const hasFilledFields = [...row.querySelectorAll('input, textarea, select')].some((field) => {
    if (field.name === 'blockType' || field.name === 'side') return false;
    return String(field.value || '').trim() !== '';
  });

  if (!title && !note && !hasFilledFields) return null;

  const base = {
    id: row.dataset.blockId || uid(),
    type,
    title: title || fallbackBlockTitle(type),
    note
  };

  if (type === 'strength') {
    const sets = toNullableNumber(row.querySelector('[name="sets"]')?.value);
    const reps = toNullableNumber(row.querySelector('[name="reps"]')?.value);
    const weightKg = toNullableNumber(row.querySelector('[name="weightKg"]')?.value);
    const side = row.querySelector('[name="side"]')?.value || '-';
    return {
      ...base,
      sets,
      reps,
      weightKg,
      side,
      tonnageKg: calcTonnage({ sets, reps, weightKg })
    };
  }

  if (type === 'interval') {
    return {
      ...base,
      repeats: toNullableNumber(row.querySelector('[name="repeats"]')?.value),
      durationSec: toNullableNumber(row.querySelector('[name="durationSec"]')?.value),
      distanceM: toNullableNumber(row.querySelector('[name="distanceM"]')?.value),
      restSec: toNullableNumber(row.querySelector('[name="restSec"]')?.value)
    };
  }

  return {
    ...base,
    durationMin: toNullableNumber(row.querySelector('[name="durationMin"]')?.value),
    distanceM: toNullableNumber(row.querySelector('[name="distanceM"]')?.value),
    intensity: (row.querySelector('[name="intensity"]')?.value || '').trim()
  };
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
  renderWorkoutLibrary();
}

function renderSummary() {
  const latestTsh = state.labResults.filter((item) => item.marker === 'ТТГ').sort(byDateDesc)[0];
  const averagePain = average(state.symptomLogs.map((item) => item.pain));
  const latestVisit = state.visits.slice().sort(byDateDesc)[0];
  const totalBlocks = state.workoutLogs.reduce((sum, item) => sum + (item.blocks?.length || 0), 0);
  const metrics = [
    {
      label: 'Тренировок-сессий',
      value: state.workoutLogs.length,
      note: totalBlocks ? `Внутри уже ${totalBlocks} блоков` : 'Пока пусто — начни с первой сессии'
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
    ...state.workoutLogs.map((item) => ({ type: 'Тренировка', title: `${item.category} · ${item.blocks.length} блок(а)`, date: item.date, note: workoutSessionSubtitle(item) })),
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
  const categories = unique(state.workoutLogs.map((item) => item.category).filter(Boolean)).sort(localeSort);
  const currentFilter = categories.includes(elements.workoutFilter.value) ? elements.workoutFilter.value : 'all';
  elements.workoutFilter.innerHTML = `<option value="all">Все</option>${categories.map((item) => `<option value="${escapeAttr(item)}">${escapeHtml(item)}</option>`).join('')}`;
  elements.workoutFilter.value = currentFilter;

  const items = state.workoutLogs
    .slice()
    .sort(byDateDesc)
    .filter((item) => currentFilter === 'all' || item.category === currentFilter)
    .slice(0, 12);

  elements.workoutList.innerHTML = items.length ? items.map(renderWorkoutSessionCard).join('') : empty('Пока нет записанных тренировок');

  const exerciseNames = unique(state.workoutLogs.flatMap((item) => item.blocks.map((block) => block.title)).filter(Boolean)).sort(localeSort);
  const currentExercise = exerciseNames.includes(elements.exerciseSelect.value) ? elements.exerciseSelect.value : exerciseNames[0] || '';
  elements.exerciseSelect.innerHTML = exerciseNames.length
    ? exerciseNames.map((exercise) => `<option value="${escapeAttr(exercise)}">${escapeHtml(exercise)}</option>`).join('')
    : '<option value="">Сначала добавь тренировки</option>';
  if (currentExercise) elements.exerciseSelect.value = currentExercise;
}

function renderWorkoutSessionCard(item) {
  const totals = getWorkoutTotals(item);
  return `
    <article class="item">
      <div class="meta">
        <span class="chip">${escapeHtml(formatDate(item.date))}</span>
        <span class="chip">${escapeHtml(item.category)}</span>
        <span class="chip">${item.blocks.length} блок(а)</span>
        ${item.durationMin ? `<span class="chip">${item.durationMin} мин</span>` : ''}
        ${totals.totalTonnageKg ? `<span class="chip">тоннаж ${formatNumber(totals.totalTonnageKg)} кг</span>` : ''}
      </div>
      <h3>${escapeHtml(workoutSessionTitle(item))}</h3>
      <p>${escapeHtml(workoutSessionSubtitle(item))}</p>
      ${item.note ? `<p>${escapeHtml(item.note)}</p>` : ''}
      <div class="item-actions">
        <button type="button" class="ghost small" data-action="edit-session" data-session-id="${escapeAttr(item.id)}">Редактировать тренировку</button>
        <button type="button" class="ghost small danger-ghost" data-action="delete-session" data-session-id="${escapeAttr(item.id)}">Удалить тренировку</button>
      </div>
      <div class="stack compact-list">
        ${item.blocks.map((block, index) => `
          <article class="subitem">
            <div class="meta">
              <span class="chip">${index + 1}</span>
              <span class="chip">${escapeHtml(blockTypeLabel(block.type))}</span>
              ${block.side && block.side !== '-' ? `<span class="chip">${escapeHtml(block.side)}</span>` : ''}
            </div>
            <strong>${escapeHtml(block.title)}</strong>
            <p>${escapeHtml(blockSummary(block))}</p>
            ${block.note ? `<p>${escapeHtml(block.note)}</p>` : ''}
            <div class="item-actions">
              <button type="button" class="ghost small" data-action="edit-block" data-session-id="${escapeAttr(item.id)}" data-block-id="${escapeAttr(block.id)}">Редактировать упражнение</button>
              <button type="button" class="ghost small danger-ghost" data-action="delete-block" data-session-id="${escapeAttr(item.id)}" data-block-id="${escapeAttr(block.id)}">Удалить упражнение</button>
            </div>
          </article>
        `).join('')}
      </div>
    </article>
  `;
}

function renderWorkoutLibrary() {
  const categories = unique(state.workoutLogs.map((item) => item.category).filter(Boolean)).sort(localeSort);
  if (elements.workoutCategoryList) {
    elements.workoutCategoryList.innerHTML = categories.map((item) => `<option value="${escapeAttr(item)}"></option>`).join('');
  }

  let datalist = document.getElementById('exerciseLibrary');
  if (!datalist) {
    datalist = document.createElement('datalist');
    datalist.id = 'exerciseLibrary';
    document.body.appendChild(datalist);
  }

  const currentCategory = (elements.forms.workout.querySelector('[name="category"]')?.value || '').trim();
  const library = unique(
    state.workoutLogs
      .filter((item) => !currentCategory || item.category === currentCategory)
      .flatMap((item) => item.blocks.map((block) => block.title))
      .filter(Boolean)
  ).sort(localeSort);

  datalist.innerHTML = library.map((item) => `<option value="${escapeAttr(item)}"></option>`).join('');
}

function startWorkoutEdit(sessionId) {
  const session = state.workoutLogs.find((item) => item.id === sessionId);
  if (!session) return;

  workoutEditor.editingSessionId = session.id;
  elements.forms.workout.querySelector('[name="date"]').value = session.date || '';
  elements.forms.workout.querySelector('[name="category"]').value = session.category || '';
  elements.forms.workout.querySelector('[name="durationMin"]').value = session.durationMin ?? '';
  elements.forms.workout.querySelector('[name="painBefore"]').value = session.painBefore ?? '';
  elements.forms.workout.querySelector('[name="painAfter"]').value = session.painAfter ?? '';
  elements.forms.workout.querySelector('[name="note"]').value = session.note || '';

  elements.workoutBlocks.innerHTML = '';
  session.blocks.forEach((block) => addWorkoutBlockRow(block.type, block));
  updateWorkoutFormMode();
  renderWorkoutLibrary();
  elements.forms.workout.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function startWorkoutBlockEdit(sessionId, blockId) {
  const session = state.workoutLogs.find((item) => item.id === sessionId);
  const block = session?.blocks.find((item) => item.id === blockId);
  if (!session || !block) return;

  workoutEditor.editingSessionId = session.id;
  elements.forms.workout.querySelector('[name="date"]').value = session.date || '';
  elements.forms.workout.querySelector('[name="category"]').value = session.category || '';
  elements.forms.workout.querySelector('[name="durationMin"]').value = session.durationMin ?? '';
  elements.forms.workout.querySelector('[name="painBefore"]').value = session.painBefore ?? '';
  elements.forms.workout.querySelector('[name="painAfter"]').value = session.painAfter ?? '';
  elements.forms.workout.querySelector('[name="note"]').value = session.note || '';

  elements.workoutBlocks.innerHTML = '';
  addWorkoutBlockRow(block.type, block);
  session.blocks
    .filter((item) => item.id !== blockId)
    .forEach((item) => addWorkoutBlockRow(item.type, item));

  updateWorkoutFormMode();
  renderWorkoutLibrary();
  elements.forms.workout.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteWorkoutSession(sessionId) {
  const session = state.workoutLogs.find((item) => item.id === sessionId);
  if (!session) return;
  if (!window.confirm(`Удалить тренировку ${formatDate(session.date)} · ${session.category}?`)) return;

  state.workoutLogs = state.workoutLogs.filter((item) => item.id !== sessionId);
  if (workoutEditor.editingSessionId === sessionId) {
    resetWorkoutForm();
  }
  saveState();
  renderAll();
  toast('Тренировка удалена');
}

function deleteWorkoutBlock(sessionId, blockId) {
  const session = state.workoutLogs.find((item) => item.id === sessionId);
  if (!session) return;
  const block = session.blocks.find((item) => item.id === blockId);
  if (!block) return;
  if (!window.confirm(`Удалить упражнение «${block.title}» из тренировки?`)) return;

  session.blocks = session.blocks.filter((item) => item.id !== blockId);
  if (!session.blocks.length) {
    state.workoutLogs = state.workoutLogs.filter((item) => item.id !== sessionId);
    if (workoutEditor.editingSessionId === sessionId) resetWorkoutForm();
    saveState();
    renderAll();
    toast('Последний блок удалён, тренировка тоже удалена');
    return;
  }

  saveState();
  if (workoutEditor.editingSessionId === sessionId) {
    startWorkoutEdit(sessionId);
  }
  renderAll();
  toast('Упражнение удалено');
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
    .flatMap((session) => session.blocks.map((block) => ({ ...block, workoutDate: session.date, category: session.category })))
    .filter((item) => item.title === exercise)
    .slice()
    .sort((a, b) => a.workoutDate.localeCompare(b.workoutDate));

  if (!series.length) {
    elements.exerciseChart.innerHTML = empty('Запиши несколько блоков одного упражнения — здесь появится график.');
    elements.exerciseStats.innerHTML = empty('Пока нет данных для сравнения.');
    return;
  }

  const chartData = series.map((item) => ({ date: item.workoutDate, value: blockMetricValue(item) }));
  elements.exerciseChart.innerHTML = drawBarChart(chartData);

  const best = Math.max(...chartData.map((item) => item.value), 0);
  const latest = chartData[chartData.length - 1]?.value;
  const stats = [
    `Лучшая зафиксированная метрика: ${best}`,
    `Последняя зафиксированная метрика: ${latest}`,
    `Тип блока: ${blockTypeLabel(series[0].type)}`
  ];
  elements.exerciseStats.innerHTML = stats.map((line) => `<article class="item"><p>${escapeHtml(line)}</p></article>`).join('');
}

function renderInsights() {
  const items = [];
  const labsOut = state.labResults.filter((item) => isOutOfRange(item)).sort(byDateDesc).slice(0, 4);
  const latestVisit = state.visits.slice().sort(byDateDesc)[0];
  const latestWorkout = state.workoutLogs.slice().sort(byDateDesc)[0];
  const avgMorningBack = average(state.symptomLogs.filter((item) => item.zone === 'Поясница' && item.moment === 'утро').map((item) => item.pain));
  const lastWorkoutTonnage = latestWorkout ? getWorkoutTotals(latestWorkout).totalTonnageKg : null;

  if (latestVisit) items.push(`Последний опорный план сейчас идёт от ${latestVisit.doctor} (${formatDate(latestVisit.date)}).`);
  if (labsOut.length) items.push(`Есть показатели вне референса: ${labsOut.map((item) => `${item.marker} (${item.value})`).join(', ')}.`);
  if (Number.isFinite(avgMorningBack)) items.push(`Средняя утренняя боль в пояснице по журналу: ${avgMorningBack.toFixed(1)}/10.`);
  if (latestWorkout) items.push(`Последняя тренировка: ${formatDate(latestWorkout.date)} · ${latestWorkout.category} · ${latestWorkout.blocks.length} блок(а).`);
  if (lastWorkoutTonnage) items.push(`В последней силовой сессии расчётный тоннаж: ${formatNumber(lastWorkoutTonnage)} кг.`);
  if (!latestWorkout) items.push('Чтобы увидеть реальную динамику, начни заносить тренировки как сессии с блоками.');
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
      normalizeState();
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

function normalizeWorkoutSession(session) {
  if (session.blocks?.length) {
    const blocks = session.blocks.map((block) => normalizeWorkoutBlock(block));
    return {
      id: session.id || uid(),
      date: session.date || new Date().toISOString().slice(0, 10),
      category: session.category || 'Без категории',
      durationMin: toNullableNumber(session.durationMin),
      note: session.note || '',
      painBefore: toNullableNumber(session.painBefore),
      painAfter: toNullableNumber(session.painAfter),
      blocks
    };
  }

  const legacyBlock = normalizeLegacyWorkoutBlock(session);
  return {
    id: session.id || uid(),
    date: session.date || new Date().toISOString().slice(0, 10),
    category: session.category || 'Без категории',
    durationMin: secondsToMinutes(session.durationSec),
    note: session.note || '',
    painBefore: toNullableNumber(session.painBefore),
    painAfter: toNullableNumber(session.painAfter),
    blocks: legacyBlock ? [legacyBlock] : []
  };
}

function normalizeLegacyWorkoutBlock(item) {
  if (!item.exercise && !item.note) return null;
  const parsed = parseSetsReps(item.setsReps);
  return normalizeWorkoutBlock({
    id: uid(),
    type: parsed || item.weightKg ? 'strength' : item.durationSec ? 'distance' : 'distance',
    title: item.exercise || 'Блок',
    sets: parsed?.sets ?? null,
    reps: parsed?.reps ?? null,
    weightKg: toNullableNumber(item.weightKg),
    side: item.side || '-',
    durationMin: secondsToMinutes(item.durationSec),
    note: item.note || ''
  });
}

function normalizeWorkoutBlock(block) {
  const type = block.type || 'strength';
  const normalized = {
    id: block.id || uid(),
    type,
    title: block.title || fallbackBlockTitle(type),
    note: block.note || ''
  };

  if (type === 'strength') {
    normalized.sets = toNullableNumber(block.sets);
    normalized.reps = toNullableNumber(block.reps);
    normalized.weightKg = toNullableNumber(block.weightKg);
    normalized.side = block.side || '-';
    normalized.tonnageKg = calcTonnage(normalized);
    return normalized;
  }

  if (type === 'interval') {
    normalized.repeats = toNullableNumber(block.repeats);
    normalized.durationSec = toNullableNumber(block.durationSec);
    normalized.distanceM = toNullableNumber(block.distanceM);
    normalized.restSec = toNullableNumber(block.restSec);
    return normalized;
  }

  normalized.durationMin = toNullableNumber(block.durationMin);
  normalized.distanceM = toNullableNumber(block.distanceM);
  normalized.intensity = block.intensity || '';
  return normalized;
}

function getWorkoutTotals(session) {
  return {
    totalTonnageKg: session.blocks.reduce((sum, block) => sum + (block.tonnageKg || 0), 0)
  };
}

function workoutSessionTitle(session) {
  const names = unique(session.blocks.map((block) => block.title).filter(Boolean));
  if (!names.length) return session.category;
  return names.length === 1 ? names[0] : `${names[0]} + ещё ${names.length - 1}`;
}

function workoutSessionSubtitle(session) {
  const parts = [];
  if (session.durationMin) parts.push(`${session.durationMin} мин`);
  if (session.painBefore !== null) parts.push(`боль до ${session.painBefore}`);
  if (session.painAfter !== null) parts.push(`боль после ${session.painAfter}`);
  const leadBlocks = session.blocks.slice(0, 3).map((block) => blockSummary(block));
  if (leadBlocks.length) parts.push(leadBlocks.join(' · '));
  return parts.join(' · ') || 'Без подробностей';
}

function blockSummary(block) {
  if (block.type === 'strength') {
    const parts = [];
    if (block.sets !== null && block.reps !== null) parts.push(`${block.sets}×${block.reps}`);
    if (block.weightKg !== null) parts.push(`${block.weightKg} кг`);
    if (block.tonnageKg) parts.push(`тоннаж ${formatNumber(block.tonnageKg)} кг`);
    return parts.join(' · ') || 'Силовой блок';
  }

  if (block.type === 'interval') {
    const parts = [];
    if (block.repeats !== null) parts.push(`${block.repeats} повторов`);
    if (block.distanceM !== null) parts.push(`${block.distanceM} м`);
    if (block.durationSec !== null) parts.push(`${block.durationSec} сек`);
    if (block.restSec !== null) parts.push(`пауза ${block.restSec} сек`);
    return parts.join(' · ') || 'Интервальный блок';
  }

  const parts = [];
  if (block.durationMin !== null) parts.push(`${block.durationMin} мин`);
  if (block.distanceM !== null) parts.push(`${block.distanceM} м`);
  if (block.intensity) parts.push(block.intensity);
  return parts.join(' · ') || 'Свободный блок';
}

function blockMetricValue(block) {
  if (block.type === 'strength') return block.tonnageKg || block.weightKg || multiply(block.sets, block.reps) || 0;
  if (block.type === 'interval') return multiply(block.repeats, block.distanceM) || multiply(block.repeats, block.durationSec) || block.distanceM || block.durationSec || 0;
  return block.distanceM || block.durationMin || 0;
}

function blockTypeLabel(type) {
  return ({ strength: 'силовой', interval: 'интервал', distance: 'свободный' })[type] || type;
}

function fallbackBlockTitle(type) {
  return ({ strength: 'Упражнение', interval: 'Интервал', distance: 'Блок' })[type] || 'Блок';
}

function calcTonnage({ sets, reps, weightKg }) {
  if (![sets, reps, weightKg].every(Number.isFinite)) return null;
  return sets * reps * weightKg;
}

function parseSetsReps(value) {
  if (!value) return null;
  const match = String(value).match(/(\d+)\s*x\s*(\d+)/i);
  if (!match) return null;
  return { sets: Number(match[1]), reps: Number(match[2]) };
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

function localeSort(a, b) {
  return String(a).localeCompare(String(b), 'ru');
}

function toNullableNumber(value) {
  if (value === '' || value === undefined || value === null) return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function secondsToMinutes(value) {
  const number = toNullableNumber(value);
  if (number === null) return null;
  return Math.round((number / 60) * 10) / 10;
}

function multiply(a, b) {
  if (![a, b].every(Number.isFinite)) return null;
  return a * b;
}

function formatNumber(value) {
  return Number(value).toLocaleString('ru-RU', { maximumFractionDigits: 1 });
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
