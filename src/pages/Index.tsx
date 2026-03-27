import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const IMG_HERO = "https://cdn.poehali.dev/projects/ed4352f8-9443-4b06-a835-501be13d6362/files/a43e3818-332a-4e21-904a-14a202e717d9.jpg";
const IMG_TYPES = "https://cdn.poehali.dev/projects/ed4352f8-9443-4b06-a835-501be13d6362/files/197b6246-82ea-4e1d-ba70-5cc8deb5332b.jpg";
const IMG_KNOWLEDGE = "https://cdn.poehali.dev/projects/ed4352f8-9443-4b06-a835-501be13d6362/files/930f230c-3302-4c37-b8d9-5f874ffa5ee8.jpg";

const quizQuestions = [
  {
    question: "Что такое информация?",
    options: [
      "Набор случайных символов",
      "Сведения об объектах и явлениях окружающего мира",
      "Только числовые данные",
      "Физический носитель данных",
    ],
    correct: 1,
    explanation: "Информация — это сведения об объектах, явлениях, событиях и процессах окружающего мира.",
  },
  {
    question: "Какое свойство информации означает её соответствие реальному положению дел?",
    options: ["Полнота", "Актуальность", "Достоверность", "Доступность"],
    correct: 2,
    explanation: "Достоверность означает, что информация соответствует объективной реальности.",
  },
  {
    question: "К какому виду относится информация, выраженная в числах?",
    options: ["Текстовая", "Числовая", "Графическая", "Звуковая"],
    correct: 1,
    explanation: "Числовая информация — данные, представленные в виде чисел.",
  },
  {
    question: "Какое свойство информации характеризует её независимость от создателя?",
    options: ["Полнота", "Ценность", "Объективность", "Актуальность"],
    correct: 2,
    explanation: "Объективная информация не зависит от мнения или суждения конкретного человека.",
  },
  {
    question: "Как называется информация, полученная с помощью органов чувств?",
    options: ["Машинная", "Визуальная", "Перцептивная", "Документальная"],
    correct: 2,
    explanation: "Перцептивная информация воспринимается человеком через органы чувств.",
  },
  {
    question: "Что означает свойство 'актуальность' информации?",
    options: [
      "Информация понятна всем",
      "Информация важна и своевременна",
      "Информация хранится долго",
      "Информация занимает мало места",
    ],
    correct: 1,
    explanation: "Актуальная информация важна и своевременна — соответствует текущему моменту.",
  },
  {
    question: "К какой форме представления относится музыка?",
    options: ["Текстовая", "Числовая", "Звуковая", "Графическая"],
    correct: 2,
    explanation: "Музыка и речь относятся к звуковой форме представления информации.",
  },
];

const infoTypes = [
  { title: "Текстовая", desc: "Слова, предложения, книги, статьи", color: "from-pink-200 to-rose-300", emoji: "📝" },
  { title: "Числовая", desc: "Цифры, математические данные, статистика", color: "from-fuchsia-200 to-pink-300", emoji: "🔢" },
  { title: "Графическая", desc: "Рисунки, схемы, фотографии, карты", color: "from-rose-200 to-pink-400", emoji: "🖼️" },
  { title: "Звуковая", desc: "Речь, музыка, звуковые сигналы", color: "from-pink-300 to-fuchsia-400", emoji: "🎵" },
  { title: "Видео", desc: "Фильмы, анимация, видеозаписи", color: "from-rose-300 to-pink-500", emoji: "🎬" },
  { title: "Машинная", desc: "Данные в цифровом формате для ЭВМ", color: "from-fuchsia-300 to-rose-400", emoji: "💻" },
];

const properties = [
  { icon: "CheckCircle", title: "Достоверность", desc: "Информация соответствует реальному положению дел и не содержит ошибок", color: "#ec4899" },
  { icon: "Clock", title: "Актуальность", desc: "Информация важна и своевременна, соответствует текущему моменту", color: "#be185d" },
  { icon: "Layers", title: "Полнота", desc: "Информация достаточна для понимания и принятия правильного решения", color: "#f472b6" },
  { icon: "Eye", title: "Понятность", desc: "Информация изложена на доступном для получателя языке", color: "#ec4899" },
  { icon: "Scale", title: "Объективность", desc: "Независимость от чьего-либо мнения или субъективной оценки", color: "#db2777" },
  { icon: "Gem", title: "Ценность", desc: "Полезность информации для решения поставленных задач", color: "#be185d" },
];

const characteristics = [
  { num: "01", title: "Форма представления", text: "Символьная, числовая, графическая, звуковая — способ кодирования информации для восприятия." },
  { num: "02", title: "Носитель", text: "Бумага, магнитные диски, оптические диски, флэш-память, нейронные связи мозга." },
  { num: "03", title: "Объём", text: "Количество данных, измеряется в байтах, килобайтах, мегабайтах, гигабайтах." },
  { num: "04", title: "Язык кодирования", text: "Естественный язык, математические символы, машинные коды, нотная запись." },
  { num: "05", title: "Время существования", text: "Оперативная (краткосрочная) и постоянная (долгосрочная) информация." },
  { num: "06", title: "Степень секретности", text: "Открытая, конфиденциальная, секретная и совершенно секретная." },
];

const examples = [
  { area: "🏥 Медицина", items: ["Диагнозы и результаты анализов", "Инструкции к лекарствам", "Медицинская история пациента"] },
  { area: "📚 Образование", items: ["Учебники и конспекты", "Расписание занятий", "Оценки и сертификаты"] },
  { area: "💼 Бизнес", items: ["Финансовые отчёты", "Маркетинговые данные", "Договоры и документация"] },
  { area: "🌍 Наука", items: ["Результаты экспериментов", "Научные статьи", "Базы данных и исследования"] },
  { area: "📡 СМИ", items: ["Новости и репортажи", "Прогнозы погоды", "Реклама и объявления"] },
  { area: "🏛️ Государство", items: ["Законы и постановления", "Статистика населения", "Судебные решения"] },
];

const applications = [
  { icon: "Globe", title: "Интернет", desc: "Глобальная сеть для хранения и передачи миллиардов единиц информации ежесекундно.", gradient: "from-pink-400 to-rose-500" },
  { icon: "BrainCircuit", title: "Искусственный интеллект", desc: "Обработка огромных массивов данных для обучения нейронных сетей и создания умных систем.", gradient: "from-fuchsia-400 to-pink-500" },
  { icon: "Building2", title: "Управление", desc: "Принятие государственных и бизнес-решений на основе аналитической информации.", gradient: "from-rose-400 to-fuchsia-500" },
  { icon: "HeartPulse", title: "Здравоохранение", desc: "Электронные медицинские записи, диагностика, телемедицина и фармацевтика.", gradient: "from-pink-300 to-rose-400" },
  { icon: "GraduationCap", title: "Образование", desc: "Онлайн-обучение, цифровые библиотеки, дистанционные курсы и e-learning.", gradient: "from-fuchsia-300 to-pink-400" },
  { icon: "ShoppingCart", title: "Торговля", desc: "Электронная коммерция, товарные базы, аналитика продаж и логистика.", gradient: "from-rose-300 to-fuchsia-400" },
];

const navItems = [
  { id: "definition", label: "Определение" },
  { id: "types", label: "Виды" },
  { id: "properties", label: "Свойства" },
  { id: "characteristics", label: "Характеристики" },
  { id: "examples", label: "Примеры" },
  { id: "application", label: "Применение" },
  { id: "quiz", label: "Тест" },
];

function SectionHeader({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 pink-gradient rounded-2xl text-white mb-4 shadow-lg shadow-pink-300/40">
        <Icon name={icon} size={28} />
      </div>
      <h2 className="font-display text-5xl md:text-6xl font-bold text-gradient mb-3">
        {title}
      </h2>
      <p className="text-pink-500 text-lg">{subtitle}</p>
      <hr className="section-divider max-w-xs mx-auto mt-4" />
    </div>
  );
}

export default function Index() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", ...navItems.map(n => n.id)];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelectedAnswer(idx);
    setAnswered(true);
    setShowExplanation(true);
    if (idx === quizQuestions[currentQuestion].correct) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 >= quizQuestions.length) {
      setQuizFinished(true);
    } else {
      setCurrentQuestion(q => q + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setShowExplanation(false);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setScore(0);
    setQuizFinished(false);
    setShowExplanation(false);
    setQuizStarted(true);
  };

  const getScoreMessage = () => {
    const pct = score / quizQuestions.length;
    if (pct === 1) return { msg: "Превосходно! Вы настоящий эксперт!", emoji: "🏆" };
    if (pct >= 0.7) return { msg: "Отлично! Тема усвоена хорошо.", emoji: "🌟" };
    if (pct >= 0.5) return { msg: "Неплохо! Есть что повторить.", emoji: "📖" };
    return { msg: "Стоит ещё раз изучить материал.", emoji: "💪" };
  };

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-pink-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="font-display text-xl font-bold text-gradient">
            ✦ Информация
          </button>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeSection === item.id ? "bg-pink-500 text-white" : "text-pink-700 hover:bg-pink-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button className="md:hidden p-2 rounded-xl text-pink-600 hover:bg-pink-100 transition" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-2 border-t border-pink-100 mt-2">
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-left px-4 py-2 rounded-xl text-pink-700 hover:bg-pink-100 font-medium transition">
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-fuchsia-100" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-pink-300 rounded-full opacity-20 blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-fuchsia-300 rounded-full opacity-15 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-rose-400 rounded-full opacity-10 blur-2xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-pink-200">
              <Icon name="Sparkles" size={16} />
              Образовательный ресурс
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold leading-tight mb-6 text-gradient">
              Информация
            </h1>
            <p className="text-lg text-pink-800 leading-relaxed mb-4 max-w-lg">
              Полное исследование феномена информации — от фундаментального определения до применения в современном мире.
            </p>
            <p className="text-base text-pink-600 mb-8">
              Узнайте всё о видах, свойствах и характеристиках. Проверьте знания в интерактивном тесте.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("definition")}
                className="pink-gradient text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-300/50 transition-all hover:-translate-y-0.5 pulse-pink"
              >
                Начать изучение
              </button>
              <button
                onClick={() => scrollTo("quiz")}
                className="border-2 border-pink-400 text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-all hover:-translate-y-0.5"
              >
                Пройти тест
              </button>
            </div>
            <div className="mt-12 flex items-center gap-8">
              {[["7", "разделов"], ["7", "вопросов"], ["∞", "знаний"]].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="font-display text-3xl font-bold text-pink-600">{n}</div>
                  <div className="text-xs text-pink-400 mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 pink-gradient rounded-3xl blur-2xl opacity-30 scale-95" />
              <img src={IMG_HERO} alt="Информация" className="relative rounded-3xl shadow-2xl shadow-pink-300/40 w-full object-cover" style={{ aspectRatio: "1/1" }} />
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 pink-gradient rounded-xl flex items-center justify-center text-white">
                    <Icon name="Zap" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-pink-800 text-sm">Информация — основа</div>
                    <div className="text-xs text-pink-500">всего современного мира</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => scrollTo("definition")} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-pink-400 animate-bounce">
          <Icon name="ChevronDown" size={28} />
        </button>
      </section>

      {/* DEFINITION */}
      <section id="definition" className="py-24 bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader icon="BookOpen" title="Определение" subtitle="Что такое информация?" />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="space-y-6">
              {[
                { emoji: "📖", title: "Общее определение", text: "Информация — это сведения об объектах, явлениях, событиях и процессах окружающего мира, которые уменьшают степень неопределённости и неполноты знаний." },
                { emoji: "🔬", title: "В информатике", text: "В компьютерных науках информация — это данные, которые имеют смысл для получателя и могут быть использованы для принятия решений. Измеряется в битах и байтах." },
                { emoji: "🧠", title: "В философии", text: "Философы рассматривают информацию как фундаментальное свойство материи — отражение разнообразия мира. Клод Шеннон дал математическое определение через теорию вероятностей." },
              ].map((card, i) => (
                <div key={i} className="glass-card rounded-3xl p-8 hover-lift border border-pink-100">
                  <div className="text-5xl mb-4">{card.emoji}</div>
                  <h3 className="font-display text-2xl font-bold text-pink-800 mb-3">{card.title}</h3>
                  <p className="text-pink-700 leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <img src={IMG_KNOWLEDGE} alt="Знания" className="rounded-3xl shadow-2xl shadow-pink-200/50 w-full object-cover hover-lift" style={{ aspectRatio: "1/1" }} />
              <div className="glass-card rounded-2xl p-6 border border-pink-200">
                <blockquote className="font-display text-xl italic text-pink-700 text-center leading-relaxed">
                  «Информация — это не то, что передаётся, а то, что остаётся после передачи.»
                </blockquote>
                <p className="text-center text-pink-400 text-sm mt-2">— Норберт Винер</p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "Database", text: "Данные", desc: "Сырой материал" },
              { icon: "Filter", text: "Обработка", desc: "Структурирование" },
              { icon: "Lightbulb", text: "Информация", desc: "Осмысленные данные" },
              { icon: "GraduationCap", text: "Знания", desc: "Применённая информация" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-gradient-to-b from-pink-50 to-rose-50 border border-pink-100 hover-lift">
                <div className="w-12 h-12 pink-gradient rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                  <Icon name={item.icon} size={22} />
                </div>
                <div className="font-semibold text-pink-800 mb-1">{item.text}</div>
                <div className="text-xs text-pink-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section id="types" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader icon="Layers" title="Виды информации" subtitle="Классификация по форме представления" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {infoTypes.map((type, i) => (
              <div key={i} className="group glass-card rounded-3xl p-7 hover-lift cursor-default border border-pink-100 hover:border-pink-300 transition-all">
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform shadow-md`}>
                  {type.emoji}
                </div>
                <h3 className="font-display text-2xl font-bold text-pink-800 mb-2">{type.title}</h3>
                <p className="text-pink-600 text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 glass-card rounded-3xl p-8 border border-pink-200">
            <h3 className="font-display text-3xl font-bold text-pink-800 mb-6 text-center">Классификация по другим признакам</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "По сфере применения", items: ["Научная", "Техническая", "Экономическая", "Социальная", "Политическая", "Правовая"] },
                { title: "По способу передачи", items: ["Устная", "Письменная", "Электронная", "Визуальная", "Тактильная", "Обонятельная"] },
                { title: "По степени обработки", items: ["Первичная", "Вторичная", "Промежуточная", "Итоговая", "Сводная", "Аналитическая"] },
              ].map((group, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-pink-700 mb-4 pb-2 border-b border-pink-200">{group.title}</h4>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-pink-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <img src={IMG_TYPES} alt="Виды информации" className="rounded-3xl shadow-2xl shadow-pink-200/40 w-full object-cover hover-lift" style={{ maxHeight: 320, objectFit: "cover", objectPosition: "center" }} />
          </div>
        </div>
      </section>

      {/* PROPERTIES */}
      <section id="properties" className="py-24 bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader icon="Star" title="Свойства информации" subtitle="Ключевые качественные характеристики" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {properties.map((prop, i) => (
              <div key={i} className="group relative glass-card rounded-3xl p-7 hover-lift border border-pink-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity -translate-y-1/2 translate-x-1/2" style={{ background: prop.color }} />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5 shadow-md" style={{ background: `linear-gradient(135deg, ${prop.color}, ${prop.color}99)` }}>
                  <Icon name={prop.icon} size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold text-pink-800 mb-3">{prop.title}</h3>
                <p className="text-pink-600 text-sm leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 rounded-3xl" style={{ background: "linear-gradient(135deg, #fce7f3, #fbcfe8, #fce7f3)" }}>
            <h3 className="font-display text-3xl font-bold text-pink-800 mb-6 text-center">Почему свойства важны?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "Target", title: "Принятие решений", text: "Только достоверная и актуальная информация позволяет принимать правильные решения в бизнесе, науке и жизни." },
                { icon: "Shield", title: "Защита от манипуляций", text: "Понимание свойств помогает распознавать фейки, пропаганду и недобросовестную рекламу." },
                { icon: "TrendingUp", title: "Эффективность", text: "Полная и понятная информация повышает производительность и качество любой деятельности." },
                { icon: "Users", title: "Коммуникация", text: "Качественная информация обеспечивает взаимопонимание между людьми, организациями и системами." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 glass-card rounded-2xl p-5">
                  <div className="w-10 h-10 pink-gradient rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Icon name={item.icon} size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-pink-800 mb-1">{item.title}</div>
                    <div className="text-sm text-pink-600 leading-relaxed">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHARACTERISTICS */}
      <section id="characteristics" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader icon="BarChart2" title="Характеристики" subtitle="Параметры, описывающие информацию" />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {characteristics.map((c, i) => (
              <div key={i} className="group glass-card rounded-3xl p-7 hover-lift border border-pink-100 flex items-start gap-5">
                <div className="font-display text-5xl font-bold text-gradient opacity-70 flex-shrink-0 leading-none">{c.num}</div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-pink-800 mb-2 group-hover:text-pink-600 transition-colors">{c.title}</h3>
                  <p className="text-pink-600 text-sm leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 glass-card rounded-3xl overflow-hidden border border-pink-200">
            <div className="pink-gradient p-6">
              <h3 className="font-display text-3xl font-bold text-white text-center">Единицы измерения информации</h3>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { unit: "Бит", value: "0 или 1", desc: "Минимальная единица" },
                  { unit: "Байт", value: "8 бит", desc: "Символ текста" },
                  { unit: "Килобайт", value: "1 024 Б", desc: "Короткий текст" },
                  { unit: "Мегабайт", value: "1 024 КБ", desc: "Фотография" },
                  { unit: "Гигабайт", value: "1 024 МБ", desc: "Фильм HD" },
                  { unit: "Терабайт", value: "1 024 ГБ", desc: "Библиотека" },
                  { unit: "Петабайт", value: "1 024 ТБ", desc: "Датацентр" },
                  { unit: "Экзабайт", value: "1 024 ПБ", desc: "Весь интернет" },
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 rounded-2xl bg-pink-50 hover:bg-pink-100 transition border border-pink-100">
                    <div className="font-display text-lg font-bold text-pink-700">{item.unit}</div>
                    <div className="text-pink-500 font-mono text-sm mt-1">{item.value}</div>
                    <div className="text-pink-400 text-xs mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section id="examples" className="py-24 bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader icon="FolderOpen" title="Примеры" subtitle="Информация в различных сферах жизни" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {examples.map((ex, i) => (
              <div key={i} className="glass-card rounded-3xl p-7 hover-lift border border-pink-100 group">
                <div className="text-4xl mb-4">{ex.area.split(" ")[0]}</div>
                <h3 className="font-display text-2xl font-bold text-pink-800 mb-4 group-hover:text-pink-600 transition-colors">{ex.area.split(" ").slice(1).join(" ")}</h3>
                <ul className="space-y-2">
                  {ex.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-pink-600 text-sm">
                      <Icon name="ChevronRight" size={14} className="text-pink-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-3xl p-8 border border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50">
            <h3 className="font-display text-3xl font-bold text-pink-800 mb-6 text-center">Интересные факты об информации</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "Zap", text: "Каждую минуту в интернете создаётся более 500 часов видеоконтента на YouTube." },
                { icon: "Globe", text: "Объём информации в интернете удваивается каждые 2 года — это называется «информационный взрыв»." },
                { icon: "Brain", text: "Человеческий мозг хранит около 2,5 петабайт информации — это 3 миллиона часов видео." },
                { icon: "MessageSquare", text: "В мире ежедневно отправляется более 300 миллиардов электронных писем." },
              ].map((fact, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/60 rounded-2xl p-5 border border-pink-100">
                  <div className="w-10 h-10 pink-gradient rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Icon name={fact.icon} size={18} />
                  </div>
                  <p className="text-pink-700 text-sm leading-relaxed">{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section id="application" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader icon="Rocket" title="Применение" subtitle="Информация в современном мире" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {applications.map((app, i) => (
              <div key={i} className="group glass-card rounded-3xl p-7 hover-lift border border-pink-100 overflow-hidden relative">
                <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${app.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className={`w-16 h-16 bg-gradient-to-br ${app.gradient} rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg`}>
                  <Icon name={app.icon} size={28} />
                </div>
                <h3 className="font-display text-2xl font-bold text-pink-800 mb-3">{app.title}</h3>
                <p className="text-pink-600 text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 glass-card rounded-3xl p-10 text-center border border-pink-200" style={{ background: "linear-gradient(135deg, #fce7f3 0%, #fdf2f8 50%, #fce7f3 100%)" }}>
            <div className="text-6xl mb-4">🌐</div>
            <h3 className="font-display text-4xl font-bold text-pink-800 mb-4">Информационное общество</h3>
            <p className="text-pink-700 leading-relaxed max-w-2xl mx-auto mb-6">
              Мы живём в информационном обществе, где главным ресурсом является информация. Её производство, хранение, передача и обработка составляют основу современной экономики и культуры.
            </p>
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
              {[["90%", "данных созданы за последние 2 года"], ["2,5 ЭБ", "создаётся каждый день"], ["5 млрд", "пользователей интернета"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-bold text-pink-600">{n}</div>
                  <div className="text-xs text-pink-400 mt-1 leading-tight">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUIZ */}
      <section id="quiz" className="py-24 bg-white/60 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader icon="ClipboardCheck" title="Интерактивный тест" subtitle="Проверьте свои знания об информации" />
          <div className="mt-12">
            {!quizStarted && !quizFinished && (
              <div className="glass-card rounded-3xl p-10 text-center border border-pink-200 animate-fade-in">
                <div className="text-8xl mb-6">🎯</div>
                <h3 className="font-display text-4xl font-bold text-pink-800 mb-4">Готовы к проверке?</h3>
                <p className="text-pink-600 mb-2">7 вопросов по теме «Информация»</p>
                <p className="text-pink-500 text-sm mb-8">Каждый вопрос имеет один правильный ответ. После ответа вы узнаете объяснение.</p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {[["7", "вопросов"], ["1 балл", "за ответ"], ["~3 мин", "на прохождение"]].map(([n, l]) => (
                    <div key={l} className="bg-pink-50 border border-pink-200 rounded-2xl px-6 py-4 text-center">
                      <div className="font-display text-2xl font-bold text-pink-600">{n}</div>
                      <div className="text-xs text-pink-400">{l}</div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setQuizStarted(true)}
                  className="pink-gradient text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-pink-300/50 transition-all hover:-translate-y-1 pulse-pink"
                >
                  Начать тест
                </button>
              </div>
            )}

            {quizStarted && !quizFinished && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-pink-600 font-medium">Вопрос {currentQuestion + 1} из {quizQuestions.length}</span>
                  <span className="text-pink-600 font-medium">Очки: <strong className="text-pink-700">{score}</strong></span>
                </div>
                <div className="w-full bg-pink-100 rounded-full h-2 mb-8">
                  <div className="pink-gradient h-2 rounded-full transition-all duration-500" style={{ width: `${(currentQuestion / quizQuestions.length) * 100}%` }} />
                </div>
                <div className="glass-card rounded-3xl p-8 border border-pink-200">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-pink-800 mb-8 leading-tight">
                    {quizQuestions[currentQuestion].question}
                  </h3>
                  <div className="space-y-3">
                    {quizQuestions[currentQuestion].options.map((opt, i) => {
                      let cls = "quiz-option border-2 border-pink-100 bg-white/50 rounded-2xl p-4 text-left w-full flex items-center gap-4 font-medium text-pink-700";
                      if (answered) {
                        if (i === quizQuestions[currentQuestion].correct) cls += " correct";
                        else if (i === selectedAnswer && i !== quizQuestions[currentQuestion].correct) cls += " wrong";
                      }
                      return (
                        <button key={i} className={cls} onClick={() => handleAnswer(i)}>
                          <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {answered && i === quizQuestions[currentQuestion].correct ? "✓" :
                             answered && i === selectedAnswer ? "✗" :
                             String.fromCharCode(65 + i)}
                          </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {showExplanation && (
                    <div className="mt-6 p-5 rounded-2xl bg-pink-50 border border-pink-200 animate-fade-in">
                      <div className="flex items-start gap-3">
                        <Icon name="Info" size={20} className="text-pink-500 mt-0.5 flex-shrink-0" />
                        <p className="text-pink-700 text-sm leading-relaxed">
                          <strong>Пояснение:</strong> {quizQuestions[currentQuestion].explanation}
                        </p>
                      </div>
                    </div>
                  )}
                  {answered && (
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={nextQuestion}
                        className="pink-gradient text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-center gap-2"
                      >
                        {currentQuestion + 1 >= quizQuestions.length ? "Завершить тест" : "Следующий вопрос"}
                        <Icon name="ArrowRight" size={18} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {quizFinished && (
              <div className="glass-card rounded-3xl p-10 text-center border border-pink-200 animate-fade-in">
                <div className="text-8xl mb-4">{getScoreMessage().emoji}</div>
                <h3 className="font-display text-5xl font-bold text-gradient mb-2">{score} / {quizQuestions.length}</h3>
                <p className="text-xl text-pink-700 font-medium mb-2">{getScoreMessage().msg}</p>
                <p className="text-pink-500 mb-8">Правильных ответов: {score} из {quizQuestions.length}</p>
                <div className="w-full bg-pink-100 rounded-full h-4 mb-8 overflow-hidden">
                  <div className="pink-gradient h-4 rounded-full transition-all duration-1000" style={{ width: `${(score / quizQuestions.length) * 100}%` }} />
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <button onClick={restartQuiz} className="pink-gradient text-white px-10 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5">
                    Пройти снова
                  </button>
                  <button onClick={() => scrollTo("definition")} className="border-2 border-pink-400 text-pink-600 px-10 py-3 rounded-full font-semibold hover:bg-pink-50 transition-all">
                    Повторить материал
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-pink-200 bg-white/40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="font-display text-3xl font-bold text-gradient mb-2">✦ Информация</div>
          <p className="text-pink-500 text-sm mb-6">Образовательный ресурс по теории информации</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-pink-500 hover:text-pink-700 text-sm transition nav-link">
                {item.label}
              </button>
            ))}
          </div>
          <div className="text-pink-300 text-xs">© 2026 Информация — все права защищены</div>
        </div>
      </footer>
    </div>
  );
}