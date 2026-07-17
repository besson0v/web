const submitButton = document.getElementById('submit-button');
const authForm = document.getElementById('auth-form');
const formMessage = document.getElementById('form-message');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const confirmPasswordInput = document.getElementById('confirm-password-input');
const policyInput = document.getElementById('policy-input');
const enterDashboardButton = document.getElementById('enter-dashboard-btn');
const dashboardLogoutButton = document.getElementById('dashboard-logout-btn');
const modeButtons = Array.from(document.querySelectorAll('.mode-toggle'));
const modeCards = Array.from(document.querySelectorAll('.mode-card'));
const modeLead = document.getElementById('mode-lead');
const modeList = document.getElementById('mode-list');
const modeFootnote = document.getElementById('mode-footnote');
const screenTargetButtons = Array.from(document.querySelectorAll('[data-screen-target]'));
const screenPanels = Array.from(document.querySelectorAll('.screen-panel'));
const creatorMenuItems = Array.from(document.querySelectorAll('.creator-menu-item'));
const creatorFlowSteps = Array.from(document.querySelectorAll('.creator-flow-step'));
const creatorFlowStatus = document.getElementById('creator-flow-status');
const workTableRows = Array.from(document.querySelectorAll('.work-table-clickable'));
const orderDetailBadge = document.getElementById('order-detail-badge');
const orderDetailTitle = document.getElementById('order-detail-title');
const orderDetailDescription = document.getElementById('order-detail-description');
const orderDetailBudget = document.getElementById('order-detail-budget');
const orderDetailBudgetNote = document.getElementById('order-detail-budget-note');
const orderDetailApplyDeadline = document.getElementById('order-detail-apply-deadline');
const orderDetailDeliveryDeadline = document.getElementById('order-detail-delivery-deadline');
const orderDetailFormat = document.getElementById('order-detail-format');
const orderDetailPlatform = document.getElementById('order-detail-platform');
const orderDetailBriefList = document.getElementById('order-detail-brief-list');
const businessScreenTargetButtons = Array.from(document.querySelectorAll('[data-business-screen-target]'));
const businessScreenPanels = Array.from(document.querySelectorAll('.business-screen-panel'));
const businessMenuItems = Array.from(document.querySelectorAll('.business-menu-item'));
const businessFlowSteps = Array.from(document.querySelectorAll('.business-flow-step'));
const businessFlowStatus = document.getElementById('business-flow-status');
const businessWorkTableRows = Array.from(document.querySelectorAll('[data-business-work-id]'));
const businessDetailBadge = document.getElementById('business-detail-badge');
const businessDetailTitle = document.getElementById('business-detail-title');
const businessDetailSubtitle = document.getElementById('business-detail-subtitle');
const businessDetailDescription = document.getElementById('business-detail-description');
const businessDetailBudget = document.getElementById('business-detail-budget');
const businessDetailBudgetNote = document.getElementById('business-detail-budget-note');
const businessDetailDeadlineApply = document.getElementById('business-detail-deadline-apply');
const businessDetailDeadlineDelivery = document.getElementById('business-detail-deadline-delivery');
const businessDetailFormat = document.getElementById('business-detail-format');
const businessDetailPlatform = document.getElementById('business-detail-platform');
const businessDetailBriefList = document.getElementById('business-detail-brief-list');
const creatorApplyButton = document.getElementById('creator-apply-btn');
const creatorApplicationChip = document.getElementById('creator-application-chip');
const creatorApplicationNote = document.getElementById('creator-application-note');
const creatorSubmitButton = document.getElementById('creator-submit-btn');
const creatorResubmitButton = document.getElementById('creator-resubmit-btn');
const creatorPublishButton = document.getElementById('creator-publish-btn');
const creatorWithdrawButton = document.getElementById('creator-withdraw-btn');
const creatorWithdrawChip = document.getElementById('creator-withdraw-chip');
const creatorWithdrawNote = document.getElementById('creator-withdraw-note');
const businessPublishCampaignButton = document.getElementById('business-publish-campaign-btn');
const businessCampaignChip = document.getElementById('business-campaign-chip');
const businessCampaignNote = document.getElementById('business-campaign-note');
const businessResponseChip = document.getElementById('business-response-chip');
const businessResponseNote = document.getElementById('business-response-note');
const businessAcceptCreatorButton = document.getElementById('business-accept-creator-btn');
const businessRejectCreatorButton = document.getElementById('business-reject-creator-btn');
const businessApproveVideoButton = document.getElementById('business-approve-video-btn');
const businessRequestChangesButton = document.getElementById('business-request-changes-btn');
const businessReviewNote = document.getElementById('business-review-note');
const businessSendEridButton = document.getElementById('business-send-erid-btn');
const businessConfirmPostButton = document.getElementById('business-confirm-post-btn');
const businessPublishNote = document.getElementById('business-publish-note');
const businessPayoutChip = document.getElementById('business-payout-chip');
const businessPayoutNote = document.getElementById('business-payout-note');
const creatorLiveSubtitle = document.getElementById('creator-live-subtitle');
const creatorLiveStage = document.getElementById('creator-live-stage');
const creatorLiveRowChip = document.getElementById('creator-live-row-chip');
const creatorLiveUpdated = document.getElementById('creator-live-updated');
const creatorLiveDeadline = document.getElementById('creator-live-deadline');
const creatorWalletBalance = document.getElementById('creator-wallet-balance');
const creatorWalletHold = document.getElementById('creator-wallet-hold');
const creatorWalletAvailable = document.getElementById('creator-wallet-available');
const businessLiveSubtitle = document.getElementById('business-live-subtitle');
const businessLiveCreators = document.getElementById('business-live-creators');
const businessLiveRowChip = document.getElementById('business-live-row-chip');
const businessLiveUpdated = document.getElementById('business-live-updated');
const adminFlowStatus = document.getElementById('admin-flow-status');
const adminQueueCount = document.getElementById('admin-queue-count');
const adminQueueNote = document.getElementById('admin-queue-note');
const adminMetricsChip = document.getElementById('admin-metrics-chip');
const adminMetricsStage = document.getElementById('admin-metrics-stage');
const adminMetricsNote = document.getElementById('admin-metrics-note');
const adminNextStep = document.getElementById('admin-next-step');
const adminApproveMetricsButton = document.getElementById('admin-approve-metrics-btn');
const adminPayoutChip = document.getElementById('admin-payout-chip');
const adminPayoutNote = document.getElementById('admin-payout-note');
const adminConfirmPayoutButton = document.getElementById('admin-confirm-payout-btn');

const modeCopyMap = {
  creator: {
    lead: 'Пользователь попадает в кабинет и может сразу заполнить профиль креатора, откликаться на брифы и загружать контент.',
    items: [
      'заполнить профиль креатора',
      'видеть доступные кампании',
      'вести баланс и реквизиты'
    ],
    footnote: 'Переключение на режим бизнеса доступно в любой момент без нового логина.'
  },
  business: {
    lead: 'В режиме бизнеса тот же аккаунт открывает кабинет заказчика: создание брифов, работа с откликами и управление кампаниями.',
    items: [
      'создать профиль бизнеса или компанию',
      'запустить бриф и задать бюджет',
      'отсматривать отклики и вести кампании'
    ],
    footnote: 'Если пользователь захочет стать креатором позже — он просто переключится обратно, без второй регистрации.'
  }
};

const screenCopyMap = {
  dashboard: {
    title: 'Шаг 1. Лента заказов',
    text: 'Креатор ищет заказ, сохраняет интересные офферы и переходит в карточку конкретного брифа.'
  },
  order: {
    title: 'Шаг 2. Карточка заказа',
    text: 'Здесь видно ТЗ, дедлайны, требования, правила маркировки и следующий переход к отправке версии.'
  },
  upload: {
    title: 'Шаг 3. Отправка версии',
    text: 'Креатор загружает новую версию ролика, добавляет комментарий и отправляет её заказчику на проверку.'
  },
  revision: {
    title: 'Шаг 4. Правки',
    text: 'Если заказчик вернул комментарии, креатор видит сводку, таймкоды и отправляет исправленную версию в ту же ветку.'
  },
  publish: {
    title: 'Шаг 5. Статус публикации внутри заказа',
    text: 'Публикация не обязана быть отдельным экраном: у каждой версии и каждого заказа есть текущий статус — на проверке, есть замечания, принято, ждёт ERID, опубликовано.'
  },
  wallet: {
    title: 'Шаг 6. Начисления и выплаты',
    text: 'Кошелёк нужен уже после проверки статистики и начисления: публикация сама по себе не означает мгновенную выплату.'
  }
};

const workDetailsMap = {
  'beauty-serum': {
    badge: 'Активный заказ',
    title: 'Beauty serum launch · заказ #2048',
    description: 'Нативный UGC для запуска новой линейки сыворотки: 3 вертикальных ролика, 1 Stories pack, публикация в Instagram и Telegram.',
    budget: '18 000 ₽',
    budgetNote: '50% после приёмки · 50% после подтверждения публикации',
    applyDeadline: '6 июля',
    deliveryDeadline: '11 июля',
    format: '3 reels + 1 stories pack',
    platform: 'Instagram / Telegram',
    brief: [
      'описание бренда и продукта',
      'референсы, стоп-слова, требования к первым секундам',
      'список обязательных deliverables и дедлайны',
      'чек-лист перед отправкой: формат, качество, CTA, текст публикации'
    ]
  },
  'travel-cafe': {
    badge: 'Нужны правки',
    title: 'Travel cafe UGC · заказ #1984',
    description: 'Серия reels для кофейни в travel-эстетике. Сейчас заказ находится на этапе правок по первой версии.',
    budget: '14 000 ₽',
    budgetNote: 'Оплата после приёмки финального ролика и размещения',
    applyDeadline: '3 июля',
    deliveryDeadline: '9 июля',
    format: '2 reels',
    platform: 'Instagram',
    brief: [
      'мягкая lifestyle-подача без прямого оффера',
      'живые кадры интерьера и напитков',
      'обязательный отдельный caption для публикации',
      'учесть комментарии заказчика по hook и CTA'
    ]
  },
  'fitness-snack': {
    badge: 'Ждёт публикацию',
    title: 'Fitness snack promo · заказ #2016',
    description: 'Финальный ролик уже принят. Сейчас работа находится на этапе маркировки и подготовки к публикации.',
    budget: '9 000 ₽',
    budgetNote: 'Начисление после подтверждения публикации и проверки статистики',
    applyDeadline: '1 июля',
    deliveryDeadline: '12 июля',
    format: '1 short video',
    platform: 'Instagram / Telegram',
    brief: [
      'финальный ролик уже подтверждён',
      'нужно дождаться ERID и разместить пост по инструкции',
      'после публикации приложить ссылку в заказ',
      'дальше работа идёт на этап проверки статистики'
    ]
  },
  'brasa-bistro': {
    badge: 'Завершено',
    title: 'Restaurant opening UGC · заказ #1933',
    description: 'Публикация уже размещена и подтверждена. Заказ завершён и ожидает финальных метрик/начисления.',
    budget: '24 000 ₽',
    budgetNote: 'Пост опубликован, дальше только пост-кампейн этап',
    applyDeadline: '—',
    deliveryDeadline: 'Завершено',
    format: '2 reels + stories pack',
    platform: 'Instagram',
    brief: [
      'финальный пост вышел и подтверждён',
      'маркировка размещена по инструкции',
      'ссылка на публикацию сохранена в заказе',
      'следующий шаг — финальная проверка статистики и закрытие выплаты'
    ]
  }
};

const businessScreenCopyMap = {
  dashboard: {
    title: 'Шаг 1. Обзор кампаний',
    text: 'Заказчик видит все кампании, узкие места, новые отклики, ролики на проверке и публикации, которые ещё не закрыты по ERID.'
  },
  brief: {
    title: 'Шаг 2. Бриф кампании',
    text: 'Здесь лежит источник правды по задаче: формат, дедлайны, требования к ролику, caption и маркировке.'
  },
  responses: {
    title: 'Шаг 3. Отклики',
    text: 'Заказчик отбирает креаторов, сравнивает профили и переводит подходящих людей в работу.'
  },
  review: {
    title: 'Шаг 4. Проверка роликов',
    text: 'В этом этапе заказчик принимает версии, оставляет правки и двигает работу к публикации.'
  },
  publish: {
    title: 'Шаг 5. Публикации и ERID',
    text: 'После приёмки ролика заказчик передаёт ERID, проверяет ссылку на пост и только потом переводит работу к начислению.'
  },
  finance: {
    title: 'Шаг 6. Финансы и выплаты',
    text: 'Заказчик контролирует остаток бюджета, резервы по кампаниям и будущие выплаты креаторам.'
  }
};

const businessWorkDetailsMap = {
  'glowlab-launch': {
    badge: 'Активная кампания',
    title: 'Beauty serum launch · карточка кампании',
    subtitle: 'GlowLab Beauty · запуск новой линейки',
    description: 'Кампания на 3 reels и stories pack с нативной подачей. Основная цель — получить живые UGC-ролики под Instagram и Telegram.',
    budget: '120 000 ₽',
    budgetNote: 'включая резерв под выплаты и пост-кампейн этап',
    deadlineApply: '6 июля',
    deadlineDelivery: '11 июля',
    format: '3 reels + stories',
    platform: 'Instagram / Telegram',
    brief: [
      'позиционирование бренда и продукта',
      'референсы и tone of voice',
      'требования к первым секундам, CTA и caption',
      'маркировка: кто даёт ERID и когда его передают'
    ]
  },
  'brasa-opening': {
    badge: 'Идёт отбор',
    title: 'Restaurant opening UGC · карточка кампании',
    subtitle: 'Brasa Bistro · открытие нового ресторана',
    description: 'Кампания ещё в фазе отбора креаторов: основная задача — выбрать людей под HoReCa и быстро запустить контент в производство.',
    budget: '80 000 ₽',
    budgetNote: 'бюджет частично свободен, частично ждёт назначения исполнителей',
    deadlineApply: '8 июля',
    deadlineDelivery: '15 июля',
    format: '2 reels + stories pack',
    platform: 'Instagram',
    brief: [
      'живой lifestyle-контент без перфекционизма',
      'упор на атмосферу места и еду',
      'желателен local creator из Москвы',
      'caption и подача должны быть ближе к рекомендациям, чем к рекламе'
    ]
  },
  'fitbite-promo': {
    badge: 'Ждёт ERID',
    title: 'Fitness snack promo · карточка кампании',
    subtitle: 'FitBite · short video campaign',
    description: 'Ролики уже приняты, но одна из публикаций ещё не закрыта по маркировке. Сейчас задача — передать ERID и проверить размещение.',
    budget: '54 000 ₽',
    budgetNote: 'часть бюджета уже зарезервирована под начисления',
    deadlineApply: '—',
    deadlineDelivery: '12 июля',
    format: 'short video series',
    platform: 'Instagram / Telegram',
    brief: [
      'финальные ролики уже подтверждены',
      'ERID нужен до финального закрытия публикации',
      'после подтверждения работа идёт на этап начисления',
      'заказчик контролирует ссылки и корректность маркировки'
    ]
  }
};

let state = {
  mode: 'creator',
  authenticated: false,
  screen: 'dashboard',
  businessScreen: 'dashboard',
  workflow: {
    campaign: 'draft',
    application: 'idle',
    submission: 'idle',
    erid: 'waiting',
    publication: 'idle',
    metrics: 'locked',
    payout: 'locked'
  }
};

const chipVariants = ['pending', 'review', 'changes', 'approved', 'live'];

function setChipState(element, variant, text) {
  if (!element) {
    return;
  }

  chipVariants.forEach((item) => element.classList.remove(item));
  element.classList.add(variant);
  element.textContent = text;
}

function renderWorkflow() {
  const { campaign, application, submission, erid, publication, metrics, payout } = state.workflow;

  if (businessCampaignChip) {
    if (campaign === 'draft') {
      setChipState(businessCampaignChip, 'pending', 'Черновик кампании');
      businessCampaignNote.textContent = 'Сейчас бриф собран как карточка. Следующий реальный переход — опубликовать кампанию и открыть отклики.';
      businessPublishCampaignButton.disabled = false;
    } else {
      setChipState(businessCampaignChip, 'approved', 'Кампания опубликована');
      businessCampaignNote.textContent = 'Кампания открыта для откликов. Теперь заказчик ждёт входящие заявки и может переводить подходящих креаторов в работу.';
      businessPublishCampaignButton.disabled = true;
    }
  }

  if (creatorApplicationChip) {
    if (application === 'idle') {
      setChipState(creatorApplicationChip, 'pending', 'Не откликался');
      creatorApplicationNote.textContent = 'Сначала креатор отправляет заявку на кампанию. Пока заказчик не примет отклик, отправка ролика остаётся закрытой.';
      creatorApplyButton.disabled = campaign !== 'published';
      creatorApplyButton.textContent = campaign === 'published' ? 'Откликнуться на кампанию' : 'Ждём публикацию кампании';
    } else if (application === 'applied') {
      setChipState(creatorApplicationChip, 'review', 'Отклик отправлен');
      creatorApplicationNote.textContent = 'Заявка улетела заказчику. Следующий шаг — решение по отклику: принять в работу или отклонить.';
      creatorApplyButton.disabled = true;
      creatorApplyButton.textContent = 'Отклик отправлен';
    } else if (application === 'accepted') {
      setChipState(creatorApplicationChip, 'approved', 'Креатор принят');
      creatorApplicationNote.textContent = 'Отклик подтверждён. Теперь креатор может отправлять первую версию ролика на проверку.';
      creatorApplyButton.disabled = true;
      creatorApplyButton.textContent = 'Принят в работу';
    } else {
      setChipState(creatorApplicationChip, 'changes', 'Отклик отклонён');
      creatorApplicationNote.textContent = 'Заказчик отклонил заявку. В реальном продукте здесь должен быть понятный reason и возможность подать новый отклик в другую кампанию.';
      creatorApplyButton.disabled = true;
      creatorApplyButton.textContent = 'Отклик отклонён';
    }
  }

  if (businessResponseChip) {
    if (application === 'idle') {
      setChipState(businessResponseChip, 'pending', 'Ждём отклик');
      businessResponseNote.textContent = 'Когда креатор отправит заявку, здесь появится действие заказчика: принять в работу или отклонить.';
    } else if (application === 'applied') {
      setChipState(businessResponseChip, 'review', 'На рассмотрении');
      businessResponseNote.textContent = 'Отклик получен. Теперь заказчик принимает решение и двигает креатора либо в работу, либо в отказ.';
    } else if (application === 'accepted') {
      setChipState(businessResponseChip, 'approved', 'Принят в работу');
      businessResponseNote.textContent = 'Креатор переведён в работу. Следующий экран — загрузка и проверка первой версии ролика.';
    } else {
      setChipState(businessResponseChip, 'changes', 'Отклонён');
      businessResponseNote.textContent = 'Отклик отклонён. Добавьте комментарий, чтобы креатор понимал причину решения.';
    }
  }

  if (businessAcceptCreatorButton) {
    businessAcceptCreatorButton.disabled = application !== 'applied';
    businessRejectCreatorButton.disabled = application !== 'applied';
  }

  if (creatorSubmitButton) {
    creatorSubmitButton.disabled = application !== 'accepted';
  }

  if (creatorResubmitButton) {
    creatorResubmitButton.disabled = submission !== 'revision_requested';
  }

  if (businessReviewNote) {
    if (submission === 'idle') {
      businessReviewNote.textContent = 'Сначала нужен принятый отклик и первая отправка ролика. После этого заказчик сможет вернуть правки или принять версию.';
    } else if (submission === 'submitted') {
      businessReviewNote.textContent = 'Первая версия уже на проверке. Можно вернуть понятные правки или сразу принять ролик.';
    } else if (submission === 'revision_requested') {
      businessReviewNote.textContent = 'Правки отправлены креатору. Пока новая версия не загружена, повторная приёмка должна быть заблокирована.';
    } else if (submission === 'resubmitted') {
      businessReviewNote.textContent = 'Исправленная версия вернулась на проверку. Теперь заказчик может либо принять ролик, либо снова вернуть замечания.';
    } else {
      businessReviewNote.textContent = 'Ролик принят. Следующий этап — маркировка, ERID и подтверждение публикации.';
    }
  }

  if (businessApproveVideoButton) {
    businessApproveVideoButton.disabled = !['submitted', 'resubmitted'].includes(submission);
    businessRequestChangesButton.disabled = !['submitted', 'resubmitted'].includes(submission);
  }

  if (businessPublishNote) {
    if (submission !== 'approved') {
      businessPublishNote.textContent = 'Этот этап откроется после приёмки ролика. До этого ERID и подтверждение публикации не должны двигать заказ дальше.';
    } else if (erid !== 'sent') {
      businessPublishNote.textContent = 'Ролик принят. Теперь заказчик передаёт ERID и инструкцию к размещению.';
    } else if (publication !== 'confirmed') {
      businessPublishNote.textContent = 'ERID передан. Осталось получить ссылку на пост и подтвердить публикацию.';
    } else {
      businessPublishNote.textContent = 'Публикация подтверждена. Заказ можно отправлять в пост-кампейн проверку и начисление.';
    }
  }

  if (businessSendEridButton) {
    businessSendEridButton.disabled = submission !== 'approved' || erid === 'sent';
    businessConfirmPostButton.disabled = erid !== 'sent' || publication === 'confirmed';
  }

  if (creatorPublishButton) {
    creatorPublishButton.disabled = erid !== 'sent' || publication === 'confirmed';
  }

  if (creatorWithdrawChip) {
    if (publication === 'confirmed' && metrics === 'pending') {
      setChipState(creatorWithdrawChip, 'review', 'Ждём начисление');
      creatorWithdrawNote.textContent = 'Публикация уже подтверждена, но деньги ещё не на балансе: результат проходит проверку перед начислением.';
    } else if (payout === 'locked') {
      setChipState(creatorWithdrawChip, 'pending', 'Пока нечего выводить');
      creatorWithdrawNote.textContent = 'После подтверждения публикации заказ переходит к проверке результата, затем — к начислению и выводу средств.';
    } else if (payout === 'accrued') {
      setChipState(creatorWithdrawChip, 'approved', 'Начисление готово');
      creatorWithdrawNote.textContent = 'Начисление поступило на баланс. Теперь можно отправить заявку на вывод.';
    } else if (payout === 'withdraw_requested') {
      setChipState(creatorWithdrawChip, 'review', 'Заявка на вывод создана');
      creatorWithdrawNote.textContent = 'Заявка ушла в обработку. Дальше остаются статусы проверки реквизитов и фактической выплаты.';
    } else {
      setChipState(creatorWithdrawChip, 'live', 'Выплата завершена');
      creatorWithdrawNote.textContent = 'Заявка закрыта, выплата проведена. Денежный контур по этой работе полностью замкнут.';
    }
  }

  if (creatorWithdrawButton) {
    creatorWithdrawButton.disabled = payout !== 'accrued';
  }

  if (businessPayoutChip) {
    if (publication === 'confirmed' && metrics === 'pending') {
      setChipState(businessPayoutChip, 'review', 'Идёт проверка');
      businessPayoutNote.textContent = 'Публикация подтверждена, но деньги ещё в резерве. После проверки результата сумма перейдёт в начисление.';
    } else if (payout === 'locked') {
      setChipState(businessPayoutChip, 'pending', 'Начисление ещё не открыто');
      businessPayoutNote.textContent = 'Пока публикация не подтверждена, деньги остаются в резерве. После подтверждения начнётся проверка результата и начисление.';
    } else if (payout === 'accrued') {
      setChipState(businessPayoutChip, 'approved', 'Готово к выплате');
      businessPayoutNote.textContent = 'Публикация подтверждена, значит деньги можно переводить из резерва в начисление креатора.';
    } else if (payout === 'withdraw_requested') {
      setChipState(businessPayoutChip, 'review', 'Вывод запрошен');
      businessPayoutNote.textContent = 'Креатор уже запросил вывод. Статус выплаты обновится после обработки заявки.';
    } else {
      setChipState(businessPayoutChip, 'live', 'Выплата проведена');
      businessPayoutNote.textContent = 'Деньги ушли креатору, по этой работе резерв и обязательства закрыты.';
    }
  }

  if (adminFlowStatus) {
    if (publication !== 'confirmed') {
      adminFlowStatus.innerHTML = '<strong>Шаг 1. Очередь админа</strong><p>Пока публикация не подтверждена, админский контур не должен стартовать: у оператора ещё нет основания для сверки статистики и начисления.</p>';
    } else if (metrics === 'pending') {
      adminFlowStatus.innerHTML = '<strong>Шаг 2. Ручная сверка метрик</strong><p>Пост подтверждён. Теперь админ вручную сверяет просмотры, ER, ссылку на публикацию и корректность маркировки, прежде чем открыть начисление.</p>';
    } else if (payout === 'accrued') {
      adminFlowStatus.innerHTML = '<strong>Шаг 3. Начисление открыто</strong><p>Метрики подтверждены, деньги уже попали на баланс креатора. Следующий переход — дождаться заявки на вывод и закрыть фактическую выплату.</p>';
    } else if (payout === 'withdraw_requested') {
      adminFlowStatus.innerHTML = '<strong>Шаг 4. Заявка на выплату</strong><p>Креатор уже запросил вывод. Админу остаётся проверить реквизиты и провести выплату в платёжное окно.</p>';
    } else {
      adminFlowStatus.innerHTML = '<strong>Шаг 4. Выплата завершена</strong><p>Операционный контур закрыт: публикация сверена, начисление проведено, выплата подтверждена.</p>';
    }
  }

  if (adminQueueCount) {
    if (publication !== 'confirmed') {
      adminQueueCount.textContent = 'Очередь пока пустая';
      adminQueueNote.textContent = 'Работа попадёт в админский реестр только после подтверждения публикации.';
    } else if (metrics === 'pending') {
      adminQueueCount.textContent = '1 публикация ждёт сверку';
      adminQueueNote.textContent = 'Есть подтверждённый пост. Нужно вручную проверить статистику и корректность маркировки.';
    } else if (payout === 'accrued') {
      adminQueueCount.textContent = 'Начисление уже открыто';
      adminQueueNote.textContent = 'Публикация сверена и деньги начислены. Дальше ждём заявку креатора на вывод.';
    } else if (payout === 'withdraw_requested') {
      adminQueueCount.textContent = '1 заявка ждёт выплату';
      adminQueueNote.textContent = 'Креатор уже запросил вывод. Осталось провести фактическую выплату.';
    } else {
      adminQueueCount.textContent = 'Очередь закрыта';
      adminQueueNote.textContent = 'По этой работе операционный цикл полностью завершён.';
    }
  }

  if (adminMetricsChip) {
    if (publication !== 'confirmed') {
      setChipState(adminMetricsChip, 'pending', 'Не готово к сверке');
      adminMetricsStage.textContent = 'Ждём публикацию';
      adminNextStep.textContent = 'Сначала подтвердить публикацию';
      adminMetricsNote.textContent = 'Сначала бизнес и креатор должны закрыть контур ERID и подтверждения поста. До этого админ не должен видеть работу как готовую к начислению.';
    } else if (metrics === 'pending') {
      setChipState(adminMetricsChip, 'review', 'Ждёт сверку');
      adminMetricsStage.textContent = 'Ожидает ручную проверку';
      adminNextStep.textContent = 'Сверить статистику и начислить';
      adminMetricsNote.textContent = 'Как только публикация подтверждена, админ сверяет просмотры и корректность маркировки. Только после этого деньги попадают на баланс креатора.';
    } else {
      setChipState(adminMetricsChip, 'approved', 'Начисление открыто');
      adminMetricsStage.textContent = 'Метрики подтверждены';
      adminNextStep.textContent = payout === 'paid' ? 'Работа закрыта' : 'Ждём заявку на вывод';
      adminMetricsNote.textContent = 'Метрики подтверждены, сумма перенесена на баланс креатора. Теперь денежный контур зависит только от заявки на вывод и её фактической оплаты.';
    }
  }

  if (adminApproveMetricsButton) {
    adminApproveMetricsButton.disabled = publication !== 'confirmed' || metrics !== 'pending';
  }

  if (adminPayoutChip) {
    if (payout === 'locked' || payout === 'accrued') {
      adminPayoutChip.textContent = payout === 'accrued' ? 'Начислено, ждём заявку на вывод' : 'Заявка ещё не создана';
    } else if (payout === 'withdraw_requested') {
      adminPayoutChip.textContent = 'Заявка создана, ждёт выплату';
    } else {
      adminPayoutChip.textContent = 'Выплата проведена';
    }
  }

  if (adminPayoutNote) {
    if (payout === 'locked') {
      adminPayoutNote.textContent = 'После начисления креатор может подать заявку на вывод. Админ подтверждает выплату только когда заявка реально создана.';
    } else if (payout === 'accrued') {
      adminPayoutNote.textContent = 'Начисление уже на балансе креатора. Теперь админ ждёт, когда креатор отправит заявку на вывод.';
    } else if (payout === 'withdraw_requested') {
      adminPayoutNote.textContent = 'Заявка на вывод создана. Осталось подтвердить фактическую выплату и закрыть операционный цикл.';
    } else {
      adminPayoutNote.textContent = 'Выплата подтверждена. Работа полностью закрыта и больше не висит ни в резерве, ни в очереди админа.';
    }
  }

  if (adminConfirmPayoutButton) {
    adminConfirmPayoutButton.disabled = payout !== 'withdraw_requested';
  }

  renderLiveSummary();
}

function renderLiveSummary() {
  const { campaign, application, submission, erid, publication, metrics, payout } = state.workflow;

  if (creatorLiveSubtitle) {
    if (application === 'idle') {
      creatorLiveSubtitle.textContent = 'Campaign preview · Instagram + Telegram';
      creatorLiveStage.textContent = 'Ждёт отклик';
      setChipState(creatorLiveRowChip, 'pending', 'Новый бриф');
      creatorLiveUpdated.textContent = 'сейчас';
      creatorLiveDeadline.textContent = 'Отклики до 6 июля';
      orderDetailBadge.textContent = 'Новый бриф';
      orderDetailDescription.textContent = 'Креатор ещё не вошёл в работу: сначала нужно отправить отклик и дождаться решения заказчика.';
    } else if (application === 'applied') {
      creatorLiveSubtitle.textContent = 'Application sent · Instagram + Telegram';
      creatorLiveStage.textContent = 'Ожидает решение заказчика';
      setChipState(creatorLiveRowChip, 'review', 'На рассмотрении');
      creatorLiveUpdated.textContent = 'только что';
      creatorLiveDeadline.textContent = 'Ждём решение';
      orderDetailBadge.textContent = 'Отклик отправлен';
      orderDetailDescription.textContent = 'Заявка отправлена. Пока заказчик не подтвердит отклик, загрузка ролика остаётся недоступной.';
    } else if (application === 'accepted' && submission === 'idle') {
      creatorLiveSubtitle.textContent = 'Accepted creator · Ready for first draft';
      creatorLiveStage.textContent = 'Готов к первой отправке';
      setChipState(creatorLiveRowChip, 'approved', 'Можно загружать');
      creatorLiveUpdated.textContent = 'только что';
      creatorLiveDeadline.textContent = 'Сдача до 11 июля';
      orderDetailBadge.textContent = 'Принят в работу';
      orderDetailDescription.textContent = 'Креатор выбран по кампании и может отправить первую версию ролика на проверку.';
    } else if (submission === 'submitted') {
      creatorLiveSubtitle.textContent = 'Draft v1 · Sent for review';
      creatorLiveStage.textContent = 'Согласование версии';
      setChipState(creatorLiveRowChip, 'review', 'На проверке');
      creatorLiveUpdated.textContent = 'только что';
      creatorLiveDeadline.textContent = 'Ждём фидбек';
      orderDetailBadge.textContent = 'На проверке';
      orderDetailDescription.textContent = 'Первая версия ролика отправлена заказчику. Следующий шаг — правки или приёмка.';
    } else if (submission === 'revision_requested') {
      creatorLiveSubtitle.textContent = 'Draft v1 · Revision requested';
      creatorLiveStage.textContent = 'Правки от заказчика';
      setChipState(creatorLiveRowChip, 'changes', 'Есть замечания');
      creatorLiveUpdated.textContent = 'только что';
      creatorLiveDeadline.textContent = 'Нужно пересобрать';
      orderDetailBadge.textContent = 'Нужны правки';
      orderDetailDescription.textContent = 'Заказчик вернул комментарии. Креатор должен доработать ролик и отправить новую версию в ту же ветку.';
    } else if (submission === 'resubmitted') {
      creatorLiveSubtitle.textContent = 'Draft v2 · Resubmitted';
      creatorLiveStage.textContent = 'Повторная проверка';
      setChipState(creatorLiveRowChip, 'review', 'Снова на проверке');
      creatorLiveUpdated.textContent = 'только что';
      creatorLiveDeadline.textContent = 'Ждём повторное решение';
      orderDetailBadge.textContent = 'Повторная проверка';
      orderDetailDescription.textContent = 'Исправленная версия отправлена повторно. Теперь заказчик либо принимает ролик, либо снова возвращает замечания.';
    } else if (submission === 'approved' && erid !== 'sent') {
      creatorLiveSubtitle.textContent = 'Final v1 · Approved';
      creatorLiveStage.textContent = 'Ожидает ERID';
      setChipState(creatorLiveRowChip, 'pending', 'Ждёт ERID');
      creatorLiveUpdated.textContent = 'только что';
      creatorLiveDeadline.textContent = 'Маркировка обязательна';
      orderDetailBadge.textContent = 'Ролик принят';
      orderDetailDescription.textContent = 'Контент утверждён. До публикации нужен ERID и инструкция к размещению.';
    } else if (erid === 'sent' && publication !== 'confirmed') {
      creatorLiveSubtitle.textContent = 'Final v1 · ERID received';
      creatorLiveStage.textContent = 'Готов к публикации';
      setChipState(creatorLiveRowChip, 'approved', 'Можно публиковать');
      creatorLiveUpdated.textContent = 'только что';
      creatorLiveDeadline.textContent = 'Нужна ссылка на пост';
      orderDetailBadge.textContent = 'ERID получен';
      orderDetailDescription.textContent = 'Маркировка передана. Осталось опубликовать пост и подтвердить ссылку внутри заказа.';
    } else if (publication === 'confirmed') {
      creatorLiveSubtitle.textContent = 'Published post · Awaiting payout';
      creatorLiveStage.textContent = 'Публикация подтверждена';
      setChipState(
        creatorLiveRowChip,
        payout === 'paid' ? 'live' : payout === 'withdraw_requested' ? 'review' : payout === 'accrued' ? 'approved' : 'review',
        payout === 'paid' ? 'Выплачено' : payout === 'withdraw_requested' ? 'Вывод запрошен' : payout === 'accrued' ? 'Начислено' : 'Ждём начисление'
      );
      creatorLiveUpdated.textContent = 'только что';
      creatorLiveDeadline.textContent = payout === 'paid' ? 'Работа полностью закрыта' : payout === 'withdraw_requested' ? 'Заявка на вывод создана' : payout === 'accrued' ? 'Можно запросить вывод' : 'Идёт проверка';
      orderDetailBadge.textContent = payout === 'paid' ? 'Выплачено' : payout === 'withdraw_requested' ? 'Вывод создан' : payout === 'accrued' ? 'Начислено' : 'Опубликовано';
      orderDetailDescription.textContent = payout === 'withdraw_requested'
        ? 'Публикация подтверждена, начисление прошло, креатор уже отправил заявку на вывод.'
        : payout === 'paid'
          ? 'Публикация подтверждена, статистика сверена, начисление и выплата уже закрыты.'
          : payout === 'accrued'
            ? 'Публикация подтверждена и результат проверен. Деньги поступили на баланс креатора.'
            : 'Публикация подтверждена. Дальше заказ проходит проверку результата и начисление.';
    }
  }

  if (businessLiveSubtitle) {
    if (campaign === 'draft') {
      businessLiveSubtitle.textContent = 'Черновик кампании · 3 reels + stories';
      businessLiveCreators.textContent = 'Отклики ещё не открыты';
      setChipState(businessLiveRowChip, 'pending', 'Черновик');
      businessLiveUpdated.textContent = 'сейчас';
      businessDetailBadge.textContent = 'Черновик кампании';
    } else if (application === 'idle') {
      businessLiveSubtitle.textContent = 'Кампания опубликована · 3 reels + stories';
      businessLiveCreators.textContent = 'Ждём первые отклики';
      setChipState(businessLiveRowChip, 'review', 'Идёт набор');
      businessLiveUpdated.textContent = 'только что';
      businessDetailBadge.textContent = 'Идёт набор';
    } else if (application === 'applied') {
      businessLiveSubtitle.textContent = 'Появился новый отклик';
      businessLiveCreators.textContent = '1 кандидат ждёт решения';
      setChipState(businessLiveRowChip, 'review', 'Есть отклик');
      businessLiveUpdated.textContent = 'только что';
      businessDetailBadge.textContent = 'Новый отклик';
    } else if (application === 'accepted' && submission === 'idle') {
      businessLiveSubtitle.textContent = 'Креатор принят · ждём первый draft';
      businessLiveCreators.textContent = '1 креатор в работе';
      setChipState(businessLiveRowChip, 'approved', 'В производстве');
      businessLiveUpdated.textContent = 'только что';
      businessDetailBadge.textContent = 'Креатор в работе';
    } else if (submission === 'submitted') {
      businessLiveSubtitle.textContent = 'Draft на проверке';
      businessLiveCreators.textContent = '1 ролик ждёт решения';
      setChipState(businessLiveRowChip, 'review', 'На проверке');
      businessLiveUpdated.textContent = 'только что';
      businessDetailBadge.textContent = 'На проверке';
    } else if (submission === 'revision_requested') {
      businessLiveSubtitle.textContent = 'Отправлены правки';
      businessLiveCreators.textContent = 'Ждём новую версию';
      setChipState(businessLiveRowChip, 'changes', 'Нужны правки');
      businessLiveUpdated.textContent = 'только что';
      businessDetailBadge.textContent = 'Нужны правки';
    } else if (submission === 'resubmitted') {
      businessLiveSubtitle.textContent = 'Исправленный draft на проверке';
      businessLiveCreators.textContent = '1 повторная версия';
      setChipState(businessLiveRowChip, 'review', 'Повторная проверка');
      businessLiveUpdated.textContent = 'только что';
      businessDetailBadge.textContent = 'Повторная проверка';
    } else if (submission === 'approved' && erid !== 'sent') {
      businessLiveSubtitle.textContent = 'Ролик принят · нужен ERID';
      businessLiveCreators.textContent = 'Контент готов к маркировке';
      setChipState(businessLiveRowChip, 'pending', 'Ждёт ERID');
      businessLiveUpdated.textContent = 'только что';
      businessDetailBadge.textContent = 'Ждёт ERID';
    } else if (erid === 'sent' && publication !== 'confirmed') {
      businessLiveSubtitle.textContent = 'ERID передан · ждём ссылку на пост';
      businessLiveCreators.textContent = 'Осталось подтвердить размещение';
      setChipState(businessLiveRowChip, 'approved', 'Публикация в процессе');
      businessLiveUpdated.textContent = 'только что';
      businessDetailBadge.textContent = 'Ждём публикацию';
    } else if (publication === 'confirmed') {
      businessLiveSubtitle.textContent = 'Публикация подтверждена';
      businessLiveCreators.textContent = payout === 'paid' ? 'Работа закрыта' : payout === 'withdraw_requested' ? 'Вывод уже запрошен' : payout === 'accrued' ? 'Начисление на балансе креатора' : 'Идёт проверка';
      setChipState(businessLiveRowChip, payout === 'paid' ? 'live' : payout === 'withdraw_requested' ? 'review' : payout === 'accrued' ? 'approved' : 'review', payout === 'paid' ? 'Выплачено' : payout === 'withdraw_requested' ? 'Вывод запрошен' : payout === 'accrued' ? 'Начислено' : 'Сверка метрик');
      businessLiveUpdated.textContent = 'только что';
      businessDetailBadge.textContent = payout === 'paid' ? 'Выплачено' : payout === 'withdraw_requested' ? 'Вывод запрошен' : payout === 'accrued' ? 'Готово к выплате' : 'Идёт сверка';
    }
  }

  if (creatorWalletBalance) {
    if (payout === 'locked') {
      creatorWalletBalance.textContent = '31 380 ₽';
      creatorWalletHold.textContent = publication === 'confirmed' ? '0 ₽' : '6 500 ₽';
      creatorWalletAvailable.textContent = '12 480 ₽';
    } else if (payout === 'accrued') {
      creatorWalletBalance.textContent = '40 380 ₽';
      creatorWalletHold.textContent = '0 ₽';
      creatorWalletAvailable.textContent = '21 480 ₽';
    } else if (payout === 'withdraw_requested') {
      creatorWalletBalance.textContent = '40 380 ₽';
      creatorWalletHold.textContent = '0 ₽';
      creatorWalletAvailable.textContent = '9 000 ₽';
    } else {
      creatorWalletBalance.textContent = '40 380 ₽';
      creatorWalletHold.textContent = '0 ₽';
      creatorWalletAvailable.textContent = '12 480 ₽';
    }
  }
}

function renderModePreview() {
  modeButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.mode === state.mode);
  });

  modeCards.forEach((card) => {
    card.classList.toggle('active', card.dataset.mode === state.mode);
  });

  const content = modeCopyMap[state.mode];
  modeLead.textContent = content.lead;
  modeFootnote.textContent = content.footnote;
  modeList.innerHTML = content.items.map((item) => `<li>${item}</li>`).join('');
}

function renderAppMode() {
  document.body.classList.toggle('dashboard-mode', state.authenticated);
  document.body.classList.toggle('app-mode-creator', state.authenticated && state.mode === 'creator');
  document.body.classList.toggle('app-mode-business', state.authenticated && state.mode === 'business');
}

function enterDashboard() {
  state.authenticated = true;
  renderAppMode();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function leaveDashboard() {
  state.authenticated = false;
  renderAppMode();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCreatorScreen() {
  screenPanels.forEach((panel) => {
    panel.classList.toggle('active', panel.dataset.screen === state.screen);
  });

  creatorMenuItems.forEach((item) => {
    item.classList.toggle('active', item.dataset.screenTarget === state.screen);
  });

  creatorFlowSteps.forEach((item) => {
    item.classList.toggle('active', item.dataset.screenTarget === state.screen);
  });

  const content = screenCopyMap[state.screen];
  if (creatorFlowStatus && content) {
    creatorFlowStatus.innerHTML = `<strong>${content.title}</strong><p>${content.text}</p>`;
  }
}

function renderBusinessScreen() {
  businessScreenPanels.forEach((panel) => {
    panel.classList.toggle('active', panel.dataset.businessScreen === state.businessScreen);
  });

  businessMenuItems.forEach((item) => {
    item.classList.toggle('active', item.dataset.businessScreenTarget === state.businessScreen);
  });

  businessFlowSteps.forEach((item) => {
    item.classList.toggle('active', item.dataset.businessScreenTarget === state.businessScreen);
  });

  const content = businessScreenCopyMap[state.businessScreen];
  if (businessFlowStatus && content) {
    businessFlowStatus.innerHTML = `<strong>${content.title}</strong><p>${content.text}</p>`;
  }
}

function syncWorkDetail(workId) {
  const detail = workDetailsMap[workId];

  if (!detail) {
    return;
  }

  orderDetailBadge.textContent = detail.badge;
  orderDetailTitle.textContent = detail.title;
  orderDetailDescription.textContent = detail.description;
  orderDetailBudget.textContent = detail.budget;
  orderDetailBudgetNote.textContent = detail.budgetNote;
  orderDetailApplyDeadline.textContent = detail.applyDeadline;
  orderDetailDeliveryDeadline.textContent = detail.deliveryDeadline;
  orderDetailFormat.textContent = detail.format;
  orderDetailPlatform.textContent = detail.platform;
  orderDetailBriefList.innerHTML = detail.brief.map((item) => `<li>${item}</li>`).join('');
}

function syncBusinessWorkDetail(workId) {
  const detail = businessWorkDetailsMap[workId];

  if (!detail) {
    return;
  }

  businessDetailBadge.textContent = detail.badge;
  businessDetailTitle.textContent = detail.title;
  businessDetailSubtitle.textContent = detail.subtitle;
  businessDetailDescription.textContent = detail.description;
  businessDetailBudget.textContent = detail.budget;
  businessDetailBudgetNote.textContent = detail.budgetNote;
  businessDetailDeadlineApply.textContent = detail.deadlineApply;
  businessDetailDeadlineDelivery.textContent = detail.deadlineDelivery;
  businessDetailFormat.textContent = detail.format;
  businessDetailPlatform.textContent = detail.platform;
  businessDetailBriefList.innerHTML = detail.brief.map((item) => `<li>${item}</li>`).join('');
}

function setFieldValidity(input, isValid) {
  input.classList.toggle('invalid', !isValid);
}

function resetValidation() {
  [nameInput, emailInput, passwordInput, confirmPasswordInput].forEach((input) => {
    input.classList.remove('invalid');
  });

  formMessage.textContent = '';
  formMessage.classList.remove('error', 'success');
}

function showMessage(type, text) {
  formMessage.textContent = text;
  formMessage.classList.remove('error', 'success');
  formMessage.classList.add(type);
}

function validateForm() {
  resetValidation();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  let valid = true;

  if (name.length < 2) {
    setFieldValidity(nameInput, false);
    valid = false;
  }

  if (!email || !emailInput.checkValidity()) {
    setFieldValidity(emailInput, false);
    valid = false;
  }

  if (password.length < 8) {
    setFieldValidity(passwordInput, false);
    valid = false;
  }

  if (confirmPassword !== password || !confirmPassword) {
    setFieldValidity(confirmPasswordInput, false);
    valid = false;
  }

  if (!policyInput.checked) {
    valid = false;
  }

  if (!valid) {
    showMessage('error', 'Проверьте форму: имя, корректная почта, пароль от 8 символов и одинаковый повтор пароля.');
    return false;
  }

  showMessage('success', `Аккаунт создан без привязки к роли. После входа можно начать как ${state.mode === 'creator' ? 'креатор' : 'бизнес'} и потом переключаться между режимами.`);
  return true;
}

function syncMode(mode) {
  state.mode = mode;
  renderModePreview();
  renderAppMode();

  if (formMessage.classList.contains('success')) {
    showMessage('success', `Аккаунт создан без привязки к роли. После входа можно начать как ${state.mode === 'creator' ? 'креатор' : 'бизнес'} и потом переключаться между режимами.`);
  }
}

function syncScreen(screen) {
  state.screen = screen;
  renderCreatorScreen();
}

function syncBusinessScreen(screen) {
  state.businessScreen = screen;
  renderBusinessScreen();
}

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    syncMode(button.dataset.mode);
  });
});

modeCards.forEach((card) => {
  card.addEventListener('click', () => {
    syncMode(card.dataset.mode);
  });
});

screenTargetButtons.forEach((button) => {
  button.addEventListener('click', () => {
    syncScreen(button.dataset.screenTarget);
  });
});

businessScreenTargetButtons.forEach((button) => {
  button.addEventListener('click', () => {
    syncBusinessScreen(button.dataset.businessScreenTarget);
  });
});

workTableRows.forEach((row) => {
  row.addEventListener('click', () => {
    syncWorkDetail(row.dataset.workId);
    syncScreen(row.dataset.screenTarget || 'order');
  });
});

businessWorkTableRows.forEach((row) => {
  row.addEventListener('click', () => {
    syncBusinessWorkDetail(row.dataset.businessWorkId);
    syncBusinessScreen(row.dataset.businessScreenTarget || 'brief');
  });
});

authForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateForm()) {
    enterDashboardButton.hidden = false;
    submitButton.hidden = true;
  }
});

enterDashboardButton?.addEventListener('click', enterDashboard);
dashboardLogoutButton?.addEventListener('click', leaveDashboard);

[nameInput, emailInput, passwordInput, confirmPasswordInput, policyInput].forEach((input) => {
  input.addEventListener('input', () => {
    if (formMessage.textContent) {
      resetValidation();
    }
  });
});

submitButton.textContent = 'Создать аккаунт';
renderModePreview();
renderAppMode();
renderCreatorScreen();
renderBusinessScreen();
renderWorkflow();

creatorApplyButton?.addEventListener('click', () => {
  state.workflow.application = 'applied';
  syncBusinessScreen('responses');
  renderWorkflow();
});

businessPublishCampaignButton?.addEventListener('click', () => {
  state.workflow.campaign = 'published';
  syncBusinessScreen('responses');
  renderWorkflow();
});

businessAcceptCreatorButton?.addEventListener('click', () => {
  state.workflow.application = 'accepted';
  syncScreen('upload');
  syncBusinessScreen('review');
  renderWorkflow();
});

businessRejectCreatorButton?.addEventListener('click', () => {
  state.workflow.application = 'rejected';
  renderWorkflow();
});

creatorSubmitButton?.addEventListener('click', () => {
  if (state.workflow.application !== 'accepted') {
    return;
  }

  state.workflow.submission = 'submitted';
  syncBusinessScreen('review');
  renderWorkflow();
});

businessRequestChangesButton?.addEventListener('click', () => {
  state.workflow.submission = 'revision_requested';
  syncScreen('revision');
  renderWorkflow();
});

creatorResubmitButton?.addEventListener('click', () => {
  if (state.workflow.submission !== 'revision_requested') {
    return;
  }

  state.workflow.submission = 'resubmitted';
  syncBusinessScreen('review');
  renderWorkflow();
});

businessApproveVideoButton?.addEventListener('click', () => {
  if (!['submitted', 'resubmitted'].includes(state.workflow.submission)) {
    return;
  }

  state.workflow.submission = 'approved';
  syncScreen('publish');
  syncBusinessScreen('publish');
  renderWorkflow();
});

businessSendEridButton?.addEventListener('click', () => {
  if (state.workflow.submission !== 'approved') {
    return;
  }

  state.workflow.erid = 'sent';
  renderWorkflow();
});

creatorPublishButton?.addEventListener('click', () => {
  if (state.workflow.erid !== 'sent') {
    return;
  }

  state.workflow.publication = 'confirmed';
  state.workflow.metrics = 'pending';
  state.workflow.payout = 'locked';
  syncScreen('wallet');
  syncBusinessScreen('finance');
  renderWorkflow();
});

businessConfirmPostButton?.addEventListener('click', () => {
  if (state.workflow.erid !== 'sent') {
    return;
  }

  state.workflow.publication = 'confirmed';
  state.workflow.metrics = 'pending';
  state.workflow.payout = 'locked';
  syncScreen('wallet');
  syncBusinessScreen('finance');
  renderWorkflow();
});

adminApproveMetricsButton?.addEventListener('click', () => {
  if (state.workflow.publication !== 'confirmed' || state.workflow.metrics !== 'pending') {
    return;
  }

  state.workflow.metrics = 'verified';
  state.workflow.payout = 'accrued';
  renderWorkflow();
});

creatorWithdrawButton?.addEventListener('click', () => {
  if (state.workflow.payout !== 'accrued') {
    return;
  }

  state.workflow.payout = 'withdraw_requested';
  renderWorkflow();
});

adminConfirmPayoutButton?.addEventListener('click', () => {
  if (state.workflow.payout !== 'withdraw_requested') {
    return;
  }

  state.workflow.payout = 'paid';
  renderWorkflow();
});
