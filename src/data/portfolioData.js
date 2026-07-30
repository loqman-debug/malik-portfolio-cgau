export const personalInfo = {
  name: "مالك محمد عبدالعزيز الهتاري",
  englishName: "Malik Mohammed Abdulaziz Al-Hitari",
  title: "Full-Stack Software Developer",
  secondaryTitle: "Web & Mobile Application Developer",
  bio: "أنا مطور برمجيات متكامل شغوف بتطوير تطبيقات الويب والهواتف الذكية. أمتلك خبرة عملية في بناء الواجهات الأمامية والأنظمة الخلفية وربطها بواجهات برمجة التطبيقات وقواعد البيانات. أعمل باستخدام تقنيات مثل React وLaravel وFlutter وPHP وMySQL وOracle، وأسعى إلى بناء حلول برمجية عملية وآمنة وقابلة للتوسع، مع الاهتمام بجودة الكود والأداء وتجربة المستخدم.",
  heroSubtitle: "أطور تطبيقات ويب وموبايل متكاملة تجمع بين الأداء، الأمان، وسهولة الاستخدام.",
  avatar: "/images/malik.jpg",
  email: "alhtaremalik2@gmail.com",
  phone: "+967 777 187 953",
  location: "صنعاء، اليمن",
  liveSite: "alhitari.thsite.top/malik.html",
  github: "https://github.com/alhitari",
  linkedin: "https://linkedin.com/in/malik-alhitari",
  specializations: [
    "Full-Stack Development",
    "Web Applications",
    "Mobile Applications",
    "API Development",
    "Database Design"
  ]
};

export const aboutStats = [
  { label: "المشاريع المنفذة", value: "+8 مشاريع", desc: "تطبيقات ويب وموبايل وأنظمة محاسبية" },
  { label: "مجالات التطوير", value: "Full-Stack", desc: "تطوير شامل للواجهات والأنظمة الخلفية" },
  { label: "الأنظمة وقواعد البيانات", value: "MySQL & Oracle", desc: "تصميم ومعالجة قواعد بيانات معقدة" },
  { label: "التقنيات المستخدمة", value: "+10 تقنيات", desc: "React, Laravel, Flutter, PHP, Dart" }
];

export const skillCategories = [
  {
    id: "web",
    title: "تطوير الويب",
    icon: "Globe",
    skills: [
      { name: "HTML5", level: "متقدمة" },
      { name: "CSS3", level: "متقدمة" },
      { name: "JavaScript", level: "متقدمة" },
      { name: "React", level: "عملية" },
      { name: "PHP", level: "متقدمة" },
      { name: "Laravel", level: "عملية" }
    ]
  },
  {
    id: "mobile",
    title: "تطوير تطبيقات الموبايل",
    icon: "Smartphone",
    skills: [
      { name: "Flutter", level: "متقدمة" },
      { name: "Dart", level: "متقدمة" }
    ]
  },
  {
    id: "engineering",
    title: "تطوير الأنظمة وهندسة البرمجيات",
    icon: "Code2",
    skills: [
      { name: "C#", level: "عملية" },
      { name: "C++", level: "عملية" },
      { name: "Object-Oriented Programming (OOP)", level: "متقدمة" },
      { name: "SOLID Principles", level: "عملية" },
      { name: "Clean Code", level: "متقدمة" }
    ]
  },
  {
    id: "backend",
    title: "تطوير الأنظمة الخلفية",
    icon: "Server",
    skills: [
      { name: "Laravel Framework", level: "عملية" },
      { name: "RESTful APIs", level: "متقدمة" },
      { name: "JSON Integration", level: "متقدمة" }
    ]
  },
  {
    id: "database",
    title: "قواعد البيانات والتحسين",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "متقدمة" },
      { name: "Oracle Database", level: "عملية" },
      { name: "Database Design", level: "متقدمة" },
      { name: "SQL Query Optimization", level: "عملية" }
    ]
  },
  {
    id: "tools",
    title: "أدوات التطوير والإدارة",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "متقدمة" },
      { name: "GitHub", level: "متقدمة" },
      { name: "Windows Environment", level: "متقدمة" },
      { name: "Linux Basics", level: "أساسية" }
    ]
  }
];

export const projects = [
  {
    id: "why-tech-water-delivery",
    title: "مشروع وايتك لتوصيل المياه",
    category: "Mobile Application + Admin Dashboard",
    categoryKey: "mobile",
    shortDescription: "نظام برمجي متكامل لتوصيل المياه النقية يربط بين المستخدمين عبر تطبيق موبايل ولوحة تحكم شاملة لإدارة الطلبات وعمليات التوصيل.",
    fullDescription: "نظام رقمي حديث ومبسط يحل مشكلة طلب ومتابعة شحنات المياه النظيفة للمنازل والمنشآت. يتكون المشروع من تطبيق موبايل سريع الاستجابة مبني بـ Flutter يتيح للمستخدم اختيار الكمية وتحديد موقع التوصيل ومتابعة حالة الطلب فورياً، ولوحة تحكم خلفية مرنة مبنية بـ Laravel لإدارة الأسطول، السائقين، والطلبات.",
    problem: "صعوبة تنسيق طلبات صهاريج وشحنات المياه للمستهلكين وتأخر التوصيل بسبب عدم وجود نظام رقمي يربط بين طالب الخدمة ومقدمها ويوفر التتبع المباشر.",
    solution: "تطوير منصة رقمية مزدوجة تضم تطبيق جوال سهل للمستخدمين يتيح الطلب بنقرة واحدة، ولوحة تحكم مركزية للإدارة لمتابعة تنفيذ الطلبات وتوجيه السائقين بكفاءة عالية.",
    keyFeatures: [
      "طلب المياه وتحديد الكمية والأنواع بمرونة عالية.",
      "تحديد موقع التوصيل على الخريطة بنقرة واحدة.",
      "إشعارات فورية بحالة الطلب (قيد الموافقة، جاري التوصيل، تم التسليم).",
      "لوحة تحكم إدارية شاملة لمتابعة عمليات التوصيل اليومية والتقارير المالية.",
      "إدارة حسابات السائقين والزبائن والتغطية الجغرافية."
    ],
    techStack: ["Flutter", "Laravel", "MySQL", "RESTful APIs"],
    techDetails: "تم بناء واجهة الجوال باستخدام Flutter وDart لضمان أداء سلس وتصميم جذاب. وتم تطوير النظام الخلفي باستخدام Laravel وMySQL لبناء واجهات برمجة تطبيقات RESTful قوية وآمنة تدعم معالجة الطلبات المتزامنة.",
    challenges: [
      "مزامنة حالة الطلب بين لوحة التحكم الإدارية وتطبيق الجوال في الوقت الفعلي.",
      "تصميم قاعدة بيانات مرنة تستوعب توسع الخدمة وتعدد المناطق الجغرافية."
    ],
    outcomes: [
      "تسريع عملية طلب وسكب المياه بنسبة تزيد عن 60%.",
      "تحسين كفاءة إدارة أسطول التوصيل وزيادة رضا العملاء."
    ],
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4e?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
    ],
    liveUrl: "https://alhitari.thsite.top/malik.html",
    githubUrl: "https://github.com/alhitari"
  },
  {
    id: "integrated-ecommerce-store",
    title: "متجر إلكتروني متكامل",
    category: "E-Commerce",
    categoryKey: "ecommerce",
    shortDescription: "منصة تجارة إلكترونية متكاملة تعمل على الموبايل والويب مع لوحة تحكم إدارية لإدارة المنتجات والطلبات وحسابات العملاء.",
    fullDescription: "متجر إلكتروني شامل يمنح تجار التجزئة حلاً متكاملاً لعرض منتجاتهم واستقبال الطلبات عبر تطبيق جوال مريح، مع نظام خلفي قوي يدعم إدارة المخزون، السلال الشرائية، والتأكيد الآلي للطلبات.",
    problem: "ارتفاع تكاليف الحلول الجاهزة وعدم قدرتها على التكيف مع متطلبات السوق المحلي ومرونة وسائل الدفع والشحن.",
    solution: "بناء تطبيق موبايل بـ Flutter يمنح المستهلك تجربة تسوق سريعة وممتعة، مرتبط بسيرفر PHP وقاعدة بيانات MySQL مستقرة وعالية الأداء.",
    keyFeatures: [
      "استعراض المنتجات وتصنيفها حسب الأقسام والفئات.",
      "سلة تسوق ذكية ونظام مفضلة سريع.",
      "بحث فوري مع تصفية المزايا والأسعار.",
      "لوحة تحكم لإضافة وتعديل المنتجات ومتابعة المخزون والطلبات.",
      "دعم وضعية التصفح ليل/نهر وتجربة مستخدم فاخرة."
    ],
    techStack: ["Flutter", "PHP", "MySQL", "JSON Integration"],
    techDetails: "تفاعل وثيق بين تطبيق Flutter والـ PHP Backend عبر واجهات RESTful APIs مبسطة وسريعة تعتمد صيغة JSON، مع تحسين استعلامات SQL لتسريع عرض قائمة المنتجات.",
    challenges: [
      "إدارة حالة التطبيق (State Management) عند إضافة وتعديل عناصر سلة التسوق.",
      "ضمان سرعة تحميل صور المنتجات بدون استهلاك بيانات الموبايل."
    ],
    outcomes: [
      "تقديم تجربة شراء بدون تعقيد.",
      "تسهيل التحكم الكلي بالمتجر والمبيعات للمشرفين."
    ],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556742049-0a674d898522?auto=format&fit=crop&w=1000&q=80"
    ],
    liveUrl: "https://alhitari.thsite.top/malik.html",
    githubUrl: "https://github.com/alhitari"
  },
  {
    id: "web-ecommerce-laravel",
    title: "متجر ويب إلكتروني",
    category: "Web Application",
    categoryKey: "web",
    shortDescription: "بناء متجر إلكتروني سريع وآمن يعتمد على إطار عمل Laravel مع لوحة تحكم مخصصة لإدارة المنتجات والطلبات.",
    fullDescription: "موقع تجاري إلكتروني حديث متوافق تماماً مع محركات البحث وتجربة المستخدم، يوفر مسار شراء سلس من التصفح وحتى التأكيد، مع نظام أمان متقدم لحماية بيانات العملاء ومعاملاتهم.",
    problem: "بطء المتطلبات وتراجع أمان المواقع التجارية التقليدية، مما يؤدي لضياع الفرص البيعية.",
    solution: "استخدام إطار العمل Laravel لبناء موقع ويب متكامل، يجمع بين الأمان العالي، سرعة المعالجة، والسهولة الشديدة في إدارة المنتجات والطلبات.",
    keyFeatures: [
      "واجهة مستخدم عصرية وسريعة الاستجابة لجميع الشاشات.",
      "نظام حماية متكامل ضد هجمات CSRF وSQL Injection.",
      "إدارة مرنة للمخزون، الأسعار، العروض والخصومات.",
      "سجل كامل لطلبات العملاء وحالات الدفع والتوصيل."
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap / Modern CSS"],
    techDetails: "تم التطوير باستخدام Laravel Blade مع هندسة MVC النظيفة، واستخدام Eloquent ORM للاستعلام الآمن والسريع من قاعدة بيانات MySQL.",
    challenges: [
      "تحسين سرعة الاستجابة وتصميم الجداول بقاعدة البيانات لنقل البيانات بأعلى كفاءة."
    ],
    outcomes: [
      "رفع معدل تحويل الزوار إلى عملاء بفضل سرعة الموقع وسلاسة تجربة الشراء."
    ],
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1000&q=80"
    ],
    liveUrl: "https://alhitari.thsite.top/malik.html",
    githubUrl: "https://github.com/alhitari"
  },
  {
    id: "coffee-shop-ordering-app",
    title: "تطبيق كافيه لطلب القهوة",
    category: "Web Application",
    categoryKey: "web",
    shortDescription: "تطبيق ويب تفاعلي يتيح لرواد الكافيه عرض القائمة واستقبال الطلبات وإدارتها بسلاسة وسرعة.",
    fullDescription: "منصة رقمية مخصصة للكافيهات والمقاهي العصرية توفر قائمة طعام ومرشوبات تفاعلية بالصور والأسعار، وتسمح بالطلب المباشر من الطاولة أو الطلب المسبق مع نظام إدارة إشعار المحضرين بالطلبات الجديدة.",
    problem: "بطء عملية تقديم الطلبات يدويًا في أوقات الذروة وحدوث أخطاء في تدوين المشروبات المخصصة.",
    solution: "تطوير تطبيق ويب خفيف بـ PHP وMySQL يتيح للزبون تصفح القائمة وإرسال الطلب فورياً لغرفة التحضير.",
    keyFeatures: [
      "عرض منسق للمشروبات والحلويات مع خيارات تخصيص السكر والحجم.",
      "تحديث حالة الطلب فورياً (قيد التحضير، جاهز للتسليم).",
      "لوحة إدارة بسيطة لعمال الكافيه لاستقبال الطلبات وتنظيم الأولوية.",
      "إحصائيات حول أكثر المشروبات مبيعاً والأوقات الأكثر إقبالاً."
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "CSS3"],
    techDetails: "نظام خفيف وسريع يعتمد على PHP وJavaScript لنقل الطلبات وتنسيقها بدون الحاجة لتحميل صفحات جديدة، مما يضمن أداءً فائقاً على الموبايل والتابلت.",
    challenges: [
      "جعل واجهة المستخدم خفيفة جداً حتى تعمل بسرعة عالية على شبكات الجوال البطيئة."
    ],
    outcomes: [
      "تقليل زمن الانتظار للزبائن وتحسين دقة تنظيم الطلبات في الكافيه."
    ],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
    ],
    liveUrl: "https://alhitari.thsite.top/malik.html",
    githubUrl: "https://github.com/alhitari"
  },
  {
    id: "inventory-audit-app",
    title: "تطبيق الجرد المخزني",
    category: "Business Application",
    categoryKey: "systems",
    shortDescription: "تطبيق موبايل احترافي لتسهيل عمليات جرد المستودعات والمخازن وتحديث بيانات البضائع بدقة وسرعة.",
    fullDescription: "تطبيق عملي موجه للشركات والمستودعات لتقليل الأخطاء البشرية أثناء عمليات الجرد الدورية. يوفر التطبيق إمكانية قراءة رموز الباركود، مطابقة الكميات الفعلية بالمسجلة، وتوليد تقارير الفروقات.",
    problem: "استغراق عمليات الجرد اليدوية أوقاتاً طويلة وكثرة الأخطاء أثناء نقل البيانات من الورق للأنظمة المحاسبية.",
    solution: "تطوير تطبيق Flutter مخصص للجوال والأجهزة اللوحية يتيح للجاردين إدخال وتعديل الكميات مباشرة مع التحقق اللحظي.",
    keyFeatures: [
      "مسح سريع وقراءة الباركود للمنتجات عبر كاميرا الجوال.",
      "تسجيل الكميات الفعلية وتنبيه المستخدم في حال وجود فارق كبير.",
      "تحديث حالة المستودع وتصدير بيانات الجرد بصيغ مختلفة.",
      "عمل التطبيق بدون الحاجة الدائمة لاتصال الإنترنت (Offline First Support)."
    ],
    techStack: ["Flutter", "Dart", "SQLite / JSON"],
    techDetails: "تم بناء واجهة العمل بمفهوم الأداء السريع وسهولة الاستخدام داخل مستودعات البضائع، مع تخزين مؤقت للبيانات لضمان استمرارية الجرد في حال انقطاع الشبكة.",
    challenges: [
      "التعامل مع آلاف الأكواد والمنتجات المخزنة مع حماية البيانات من الفقدان."
    ],
    outcomes: [
      "اختصار وقت الجرد المخزني من أيام إلى ساعات قليلة مع القضاء شبه التام على الأخطاء."
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
    ],
    liveUrl: "https://alhitari.thsite.top/malik.html",
    githubUrl: "https://github.com/alhitari"
  },
  {
    id: "phone-shop-accounting-system",
    title: "نظام محاسبي لمحلات الهواتف",
    category: "Accounting System",
    categoryKey: "systems",
    shortDescription: "نظام متكامل لإدارة المبيعات والمشتريات والمخزون وحسابات العملاء والموردين مخصص لمحلات الهواتف والملحقات.",
    fullDescription: "نظام محاسبي وإداري رصين مبني لمساعدة أصحاب تجارة الهواتف الذكية ومستلزماتها على متابعة حركة المبيعات، تسجيل الأرقام التسلسلية (IMEI) للهواتف المباعة، وحساب الأرباح والديون بدقة عالية.",
    problem: "تعقد حسابات محلات الهواتف بسبب الحاجة لتتبع السيريال لكل جهاز وإدارة ضمانات الصيانة والملحقات المتعددة.",
    solution: "تصميم وتنفيذ نظام محاسبي رصين يعتمد على بيئة Oracle وقواعد البيانات القوية لضبط عمليات البيع والشراء والتقارير المالية.",
    keyFeatures: [
      "إدارة المبيعات والمشتريات وتسجيل سيريالات الهواتف (IMEI).",
      "متابعة حسابات الموردين والعملاء والديون والآجل.",
      "طباعة الفواتير وتوليد تقارير الأرباح اليومية والشهرية.",
      "نظام تنبيهات حول البضائع المقتربة من النفاد والقطع الأكثر طلباً."
    ],
    techStack: ["Oracle Database", "Database Design", "SQL Query Optimization"],
    techDetails: "تم التركيز على هندسة قواعد البيانات المحاسبية المتكاملة مع تطبيق قواعد SOLID والـ Stored Procedures لضمان أقصى درجات الدقة والسرعة في المعاملات المالية.",
    challenges: [
      "بناء نموذج بيانات معقد يربط السيريال رقم الهاتف مع الفاتورة والمورد والعميل بدون تكرار."
    ],
    outcomes: [
      "دقة حسابية متناهية وضبط شامل لمبيعات الهواتف والقطع ذات الأرقام التسلسلية."
    ],
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1000&q=80"
    ],
    liveUrl: "https://alhitari.thsite.top/malik.html",
    githubUrl: "https://github.com/alhitari"
  },
  {
    id: "custom-financial-platform",
    title: "منصة محاسبية خاصة",
    category: "Financial Application",
    categoryKey: "financial",
    shortDescription: "تطوير واجهات تطبيق موبايل محاسبي ترتبط بسيرفرات مركزية لعرض البيانات المالية والتقارير التنفيذية.",
    fullDescription: "تطبيق هاتف ذكي مخصص للإدارة وأصحاب القرار لعرض ومتابعة الحسابات، الأرباح، والخزينة المالية من أي مكان عبر ربط مشفر ببيانات خوادم الشركة.",
    problem: "حاجة المدراء والمستثمرين للوصول إلى مؤشرات الأداء المالي والمبيعات دون الحاجة للتواجد داخل مقر العمل.",
    solution: "بناء تطبيق موبايل بـ Flutter يتميز بالأمان الفائق وسرعة جلب البيانات المالية وتحويلها إلى رسوم بيانية وتوضيحية متقدمة.",
    keyFeatures: [
      "عرض ملخص الرصيد، الإيرادات، والمهام المالية اليومية.",
      "رسوم بيانية توضح حركة المبيعات والمصروفات خلال الفترات المختلفة.",
      "تنبيهات فورية عند إجراء أي معاملات مالية ضخمة.",
      "مستويات تشفير وتأمين عالية لمنع الوصول غير المصرح به."
    ],
    techStack: ["Flutter", "RESTful APIs", "JSON Integration", "Charts Framework"],
    techDetails: "واجهات مستخدم نظيفة مبنية بـ Flutter ومحسنة لعرض التقارير والجداول المزدحمة بالبيانات بأسلوب بصري مريح ومفهوم.",
    challenges: [
      "حماية البيانات المالية الحساسة أثناء نقلها عبر واجهات برمجة التطبيقات."
    ],
    outcomes: [
      "تمكين الإدارة من اتخاذ قرارات مالية سريعة بناءً على بيانات فورية دقيقة."
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80"
    ],
    liveUrl: "https://alhitari.thsite.top/malik.html",
    githubUrl: "https://github.com/alhitari"
  },
  {
    id: "library-platform-app",
    title: "تطبيق منصة مكتبية",
    category: "Mobile Application",
    categoryKey: "mobile",
    shortDescription: "تطبيق جوال تفاعلي لتسهيل استعارة وتصفح الكتب والخدمات المكتبية وإدارة حسابات القراء.",
    fullDescription: "منصة رقمية موجهة للمكتبات والمراكز الثقافية لتسهيل وصول القرّاء والطلاب إلى الفهارس الكتبية، حجز الكتب للاستعارة، ومتابعة الفعاليات والمراجع العلمية.",
    problem: "صعوبة البحث التقليدي في رفوف المكتبات الكبيرة وضياع الوقت في الاستعلام عن توفر الكتب.",
    solution: "تطبيق جوال مميز يتيح للبحث الذكي في قاعدة بيانات المكتبة وتصفح المحتويات وحجز النسخ فورياً.",
    keyFeatures: [
      "محرك بحث متقدم عن الكتب حسب العنوان، المؤلف، أو الرقم المعياري.",
      "نظام حجز واستعارة إلكتروني يدير مواعيد الإرجاع.",
      "تنبيهات بموعد إرجاع الكتب والتأخيرات.",
      "قسم مخصص للمراجعات والتقييمات بين القراء."
    ],
    techStack: ["Flutter", "Dart", "REST APIs"],
    techDetails: "تم تطبيق مبادئ Clean Architecture في Flutter لتسهيل إضافة خصائص جديدة مستقبلاً والتعامل مع استجابات السيرفر بسلاسة.",
    challenges: [
      "تصميم واجهات قراءة واستعراض مريحة للعين وتدعم الخطوط العربية البصرية الجميلة."
    ],
    outcomes: [
      "زيادة إقبال القراء وتسهيل عمل أمناء المكتبات في متابعة الإعارات."
    ],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1000&q=80"
    ],
    liveUrl: "https://alhitari.thsite.top/malik.html",
    githubUrl: "https://github.com/alhitari"
  },
  {
    id: "religious-educational-app",
    title: "تطبيق الثقافة الدينية",
    category: "Educational Application",
    categoryKey: "mobile",
    shortDescription: "تطبيق تعليمي وتثقيفي تفاعلي يوفر محتوى ديني وثقافي منظم بواجهات مريحة وسريعة بدون إعلانات مزعجة.",
    fullDescription: "تطبيق جوال يهدف لإثراء المعرفة الثقافية والدينية عبر دروس، أسئلة تفاعلية، ومكتبة قراءات منظمة، مصمم بعناية ليناسب جميع الفئات العمرية.",
    problem: "تشتت المحتوى التثقيفي على الشبكة وعرضه في تطبيقات غير مريحة بصرياً أو مليئة بالإعلانات المشتتة.",
    solution: "تطوير تطبيق Flutter سلس وأنيق يعرض المحتوى بأسلوب هادئ وجذاب مع إمكانية القراءة بدون اتصال بالإنترنت.",
    keyFeatures: [
      "تصنيفات موضوعية للمفاهيم والدروس الثقافية.",
      "اختبارات تفاعلية لقياس واستذكار المعرفة.",
      "إمكانية حفظ العلامات المرجعية والمفضلات.",
      "دعم التشغيل الأوفلاين والوضع الداكن لراحة العين أثناء القراءة."
    ],
    techStack: ["Flutter", "Dart", "Local Storage"],
    techDetails: "تطوير الواجهة بأسلوب عصري يراعي المساحات البيضاء وتنسيق الخطوط العربية الهادئة، مع استخدام التخزين المحلي لاستعراض المحتوى فورياً.",
    challenges: [
      "تنظيم الكم الكبير من النصوص والملفات الصوتية الخفيفة وتأمين استجابة سريعة جداً."
    ],
    outcomes: [
      "توفير بيئة تعلم مريحة وآمنة نالت إعجاب واستخدام المئات من المستخدمين."
    ],
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1000&q=80"
    ],
    liveUrl: "https://alhitari.thsite.top/malik.html",
    githubUrl: "https://github.com/alhitari"
  }
];

export const experienceData = [
  {
    role: "Software Developer",
    company: "TopApps للبرمجيات",
    period: "أكتوبر 2024 – مارس 2026",
    location: "صنعاء، اليمن",
    description: "تطوير تطبيقات ومواقع إلكترونية مخصصة للعملاء والمؤسسات مع التركيز على الكود النظيف والجودة والربط المتكامل.",
    responsibilities: [
      "تصميم وتطوير تطبيقات ومواقع إلكترونية مخصصة وفقاً لمتطلبات العملاء.",
      "بناء الواجهات الأمامية والأنظمة الخلفية وتكامل واجهات APIs.",
      "كتابة كود نظيف، منظم، وقابل للصيانة واتباع الممارسات البرمجية القياسية.",
      "تطوير وتحسين الأنظمة الحالية لرفع كفاءتها وأداء قواعد البيانات.",
      "اختبار البرمجيات وتشخيص الأخطاء وحلها بسرعة كفاءة عالية.",
      "التعاون المباشر مع فريق التطوير والإدارة لتحويل المتطلبات إلى حلول منجزة.",
      "تحسين أداء الأنظمة وتجربة المستخدم (UX/UI) باستمرار."
    ]
  }
];

export const educationData = [
  {
    degree: "بكالوريوس تقنية معلومات (IT)",
    institution: "جامعة آزال للتنمية البشرية",
    period: "2023 – 2026",
    status: "مستمر / خريج متوقع",
    details: "دراسة متعمقة في علوم الحاسوب، تطوير البرمجيات، قواعد البيانات، شبكات المعلومات، وهندسة الأنظمة."
  },
  {
    degree: "دبلوم برمجة وصيانة الجوالات",
    institution: "أكاديمية احتراف",
    period: "2023",
    status: "مكتمل",
    details: "تدريب عملي مكثف على برمجة تطبيقات الهواتف وتصحيح الأعطال وحلول الأنظمة الذكية."
  }
];

export const softSkillsData = [
  { title: "حل المشكلات والتحليل المنطقي", icon: "Brain", desc: "القدرة على تفكيك المشكلات التقنية التنافسية وإيجاد حلول جذرية وعملية." },
  { title: "التواصل الفعال", icon: "MessageSquare", desc: "نقل الأفكار البرمجية والمتطلبات بوضوح بين أفراد الفريق والعملاء." },
  { title: "التعلم الذاتي المستمر", icon: "Sparkles", desc: "متابعة التطورات السريعة في أطر العمل ومواكبة أفضل الممارسات عالمياً." },
  { title: "العمل الجماعي", icon: "Users", desc: "الاندماج التام ضمن فرق البرمجة المتعددة التخصصات والمساهمة الفعالة." },
  { title: "إدارة الوقت والأولويات", icon: "Clock", desc: "الالتزام بالمواعيد النهائية وتسليم المشاريع بكفاءة وجودة عالية." },
  { title: "شرح المفاهيم التقنية", icon: "Lightbulb", desc: "تبسيط التفاصيل البرمجية المعقدة لغير المتخصصين وأصحاب القرار." }
];

export const languagesData = [
  { name: "العربية", level: "اللغة الأم", proficiency: "ممتاز / Native" },
  { name: "الإنجليزية", level: "جيد جداً", proficiency: "جيد / Technical Reading & Writing" }
];
