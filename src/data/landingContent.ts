export interface PricingPack {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  credits: number;
  savings?: string;
  popular?: boolean;
  features: string[];
}

export interface ComparisonStep {
  step: string;
  title: string;
  description: string;
  frictionNote: string;
}

export interface SemBuddyStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  number: number;
  question: string;
  answer: string;
}

export const WITHOUT_SEMBUDDY_STEPS: ComparisonStep[] = [
  {
    step: '01',
    title: 'ChatGPT',
    description: 'Generate answers to your assignment questions.',
    frictionNote: 'Copy-pasting leaves messy markdown, asterisks, and inconsistent headings.',
  },
  {
    step: '02',
    title: 'QuillBot',
    description: 'Improve language and readability.',
    frictionNote: 'Paraphrasing paragraph by paragraph breaks flow and resets structure.',
  },
  {
    step: '03',
    title: 'Microsoft Word',
    description: 'Arrange answers and fix document formatting.',
    frictionNote: 'Fixing A4 page size, 1-inch margins, Times New Roman 12pt, and justification takes time.',
  },
  {
    step: '04',
    title: 'Canva',
    description: 'Create your assignment cover page.',
    frictionNote: 'Designing a cover page separately and matching course details is extra work.',
  },
  {
    step: '05',
    title: 'PDF Converter',
    description: 'Convert everything into a PDF for submission.',
    frictionNote: 'Merging cover page + answer pages often shifts margins or inflates file size.',
  },
];

export const WITH_SEMBUDDY_STEPS: SemBuddyStep[] = [
  {
    step: '01',
    title: 'Upload Your Questions',
    description: 'Upload your assignment questions.',
  },
  {
    step: '02',
    title: 'Add Your Details',
    description: 'Enter your student and course information.',
  },
  {
    step: '03',
    title: 'Preview Your Assignment',
    description: 'Review your answers and document format.',
  },
  {
    step: '04',
    title: 'Generate & Download',
    description: 'Get your formatted PDF and editable Word document.',
  },
];

export const CORE_BENEFITS = [
  {
    index: '01',
    tag: 'SAVE TIME',
    title: 'Stop Spending Hours on Assignments.',
    paragraphs: [
      'Upload your questions and get your formatted documents ready in approximately 2 minutes.',
    ],
    visualType: 'time' as const,
  },
  {
    index: '02',
    tag: 'ORIGINALITY',
    title: 'Originality-Focused Drafts & Checks.',
    paragraphs: [
      'Get structured drafts with similarity checks to spot passages that may need attention.',
    ],
    visualType: 'originality' as const,
  },
  {
    index: '03',
    tag: 'FORMATTING',
    title: 'Perfectly Formatted. No Manual Work.',
    paragraphs: [
      'Properly structured A4 pages, personalised cover pages and editable Word documents.',
    ],
    visualType: 'formatting' as const,
  },
  {
    index: '04',
    tag: 'CONVENIENCE',
    title: 'Everything in One Place.',
    paragraphs: [
      'Upload, preview, generate and download—without switching between five tools.',
    ],
    visualType: 'convenience' as const,
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 'STEP 01',
    title: 'UPLOAD YOUR QUESTIONS',
    paragraphs: [
      'Upload your assignment questions in PDF, DOCX or supported image formats.',
      'SemBuddy processes your questions and prepares structured answer drafts.',
    ],
  },
  {
    step: 'STEP 02',
    title: 'ADD YOUR DETAILS & PREVIEW',
    paragraphs: [
      'Enter your name, roll number, university, programme, semester and course details.',
      'Preview your assignment before purchasing.',
    ],
  },
  {
    step: 'STEP 03',
    title: 'GENERATE & DOWNLOAD',
    paragraphs: [
      'Choose your package and complete your payment.',
      'Generate your assignment and download your properly formatted PDF and editable Word document.',
    ],
  },
];

export const DOCUMENT_INCLUDES = [
  'Personalised assignment cover page',
  'Your name, roll number and course details',
  'Structured answer drafts',
  'A4 page layout',
  'Times New Roman, 12 pt',
  '1-inch page margins',
  'Justified text alignment',
  'Editable Word document',
  'PDF export',
];

export const PRICING_PACKS: PricingPack[] = [
  {
    id: 'single',
    name: 'SINGLE ASSIGNMENT',
    price: '₹349',
    numericPrice: 349,
    credits: 1,
    features: [
      '1 Assignment Credit',
      'PDF + Editable DOCX',
      'Compliance Scorecard',
      'Private Cloud Backup',
    ],
  },
  {
    id: 'three',
    name: '3-ASSIGNMENT PACK',
    price: '₹899',
    numericPrice: 899,
    credits: 3,
    savings: 'Save ₹148',
    features: [
      '3 Assignment Credits',
      'PDF + Editable DOCX',
      'Compliance Scorecard',
      'Private Cloud Backup',
    ],
  },
  {
    id: 'five',
    name: '5-ASSIGNMENT SEMESTER BUNDLE',
    price: '₹1,499',
    numericPrice: 1499,
    credits: 5,
    savings: 'Save ₹246',
    popular: true,
    features: [
      '5 Assignment Credits',
      'PDF + Editable DOCX',
      'Compliance Scorecard',
      'Private Cloud Backup',
    ],
  },
  {
    id: 'ten',
    name: '10-ASSIGNMENT MEGA PACK',
    price: '₹2,799',
    numericPrice: 2799,
    credits: 10,
    savings: 'Save ₹691',
    features: [
      '10 Assignment Credits',
      'PDF + Editable DOCX',
      'Compliance Scorecard',
      'Private Cloud Backup',
    ],
  },
];

export const PURCHASE_WORKS_STEPS = [
  {
    number: '01',
    title: 'UPLOAD & PREVIEW',
    description: 'Upload your questions, add your details and preview your assignment for free.',
  },
  {
    number: '02',
    title: 'CHOOSE YOUR PACK',
    description: 'Purchase the number of assignment credits you need.',
  },
  {
    number: '03',
    title: 'GENERATE & DOWNLOAD',
    description: 'Use one credit per completed subject assignment and download your documents.',
  },
];

export const TRUST_PRIVACY_ITEMS = [
  {
    title: 'YOUR WORK, YOUR DOCUMENTS.',
    description: 'Your assignment drafts are personalised based on the questions and details you provide.',
  },
  {
    title: 'FORMATTING, TAKEN CARE OF.',
    description: 'Consistent A4 layout, proper margins, fonts and alignment.',
  },
  {
    title: 'YOUR INFORMATION STAYS PRIVATE.',
    description: 'Your uploaded questions and personal details are handled securely and are not made available to other students.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    number: 1,
    question: '1. How does SemBuddy work?',
    answer:
      'Upload your assignment questions, enter your student details and preview your assignment. Once you purchase a package, generate and download your formatted PDF and editable Word document.',
  },
  {
    number: 2,
    question: '2. Will my assignment be the same as another student’s?',
    answer:
      'SemBuddy prepares answer drafts based on the questions and details you provide. We aim to avoid recycling identical drafts. However, similar questions and common academic concepts can naturally result in overlapping content.',
  },
  {
    number: 3,
    question: '3. Does SemBuddy check originality?',
    answer:
      'SemBuddy focuses on originality when preparing answer drafts and offers similarity-related checks through its available compliance features. Similarity results can vary depending on the content and checking system.',
  },
  {
    number: 4,
    question: '4. Will my assignment pass Turnitin?',
    answer:
      'No tool can guarantee a particular Turnitin result. Our published Turnitin results are from a sample assignment and should not be considered a guarantee for every assignment.',
  },
  {
    number: 5,
    question: '5. Does SemBuddy follow university formatting requirements?',
    answer:
      'SemBuddy uses standard academic formatting, including A4 pages, 1-inch margins, Times New Roman, 12 pt and justified alignment. Always check your university’s specific submission guidelines.',
  },
  {
    number: 6,
    question: '6. Can I edit my assignment after downloading it?',
    answer:
      'Yes. You receive an editable DOCX document that you can open and modify using Microsoft Word or compatible document editors.',
  },
  {
    number: 7,
    question: '7. What formats can I download?',
    answer: 'You can download your assignment in PDF and editable DOCX formats.',
  },
  {
    number: 8,
    question: '8. How do assignment credits work?',
    answer:
      'One credit is used for each completed subject assignment. You can choose from packages containing 1, 3, 5 or 10 credits.',
  },
  {
    number: 9,
    question: '9. Do I need to pay before previewing my assignment?',
    answer:
      'No. You can upload your questions, enter your details and preview your assignment before purchasing a package.',
  },
  {
    number: 10,
    question: '10. Are my uploaded questions and personal details private?',
    answer:
      'Your uploaded questions and personal information are handled according to our privacy practices. They are not made available to other students.',
  },
];
