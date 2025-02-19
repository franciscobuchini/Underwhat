//FAQ.jsx
import { useTranslation } from 'react-i18next';
import SizesTable from '../components/SizesTable';

const FAQ = () => {
  const { t } = useTranslation("global");
  
  const faqItems = [
    {
      id: "faq-01",
      questionKey: "sizes",
      answerComponent: <SizesTable />,
      icon: "tabler--ruler-measure-2"
    },
    {
      id: "faq-02",
      questionKey: "taxes",
      answerKey: "taxes",
      icon: "tabler--receipt-tax"
    },
    {
      id: "faq-03",
      questionKey: "shipping",
      answerKey: "shipping",
      icon: "tabler--plane-tilt"
    },
    {
      id: "faq-04",
      questionKey: "custom",
      answerKey: "custom",
      icon: "tabler--shirt-sport"
    },
    {
      id: "faq-05",
      questionKey: "returns",
      answerKey: "returns",
      icon: "tabler--truck-return"
    },
    {
      id: "faq-06",
      questionKey: "origin",
      answerKey: "origin",
      icon: "tabler--world-pin"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-8 text-gray-600 flex items-center gap-4">
        <span className="icon-[tabler--zoom-question]"></span>
        {t("faq.title")}
      </h1>
      
      <div className="accordion divide-neutral/20 divide-y">
        {faqItems.map((item) => (
          <div key={item.id} className="accordion-item" id={item.id}>
            <button 
              className="accordion-toggle inline-flex items-center justify-between text-start w-full"
              aria-controls={`${item.id}-collapse`} 
              aria-expanded="false"
            >
              <span className="inline-flex items-center gap-x-4 text-gray-600">
                <span className={`icon-[${item.icon}] size-6`}></span>
                {t(`faq.questions.${item.questionKey}`)}
              </span>
              <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
            </button>

            <div 
              id={`${item.id}-collapse`} 
              className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby={item.id}
              role="region"
            >
              {item.answerComponent || (
                <div className="px-5 pb-4">
                  <p className="font-normal text-gray-400">
                    {t(`faq.answers.${item.answerKey}`)}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;