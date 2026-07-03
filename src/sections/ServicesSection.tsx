import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Machine Learning & Deep Learning',
    description:
      'Classical ML pipelines and deep learning architectures (ANN, CNN, RNN/LSTM) for classification, detection, and pattern recognition tasks, built end-to-end in PyTorch.',
  },
  {
    number: '02',
    name: 'Natural Language Processing',
    description:
      'Text classification, embeddings, and language understanding pipelines spanning classical techniques (TF-IDF, Word2Vec, GloVe) through modern transformer-based approaches.',
  },
  {
    number: '03',
    name: 'LLM Fine-Tuning',
    description:
      'Fine-tuning transformer and language models (BERT, RoBERTa, and beyond) for domain-specific tasks, including LoRA/QLoRA and embedding fine-tuning for improved retrieval.',
  },
  {
    number: '04',
    name: 'Retrieval-Augmented Generation (RAG)',
    description:
      'Designing and deploying RAG chatbots and document Q&A systems with grounded, cited answers -- built with LangChain, vector databases, and production deployment pipelines.',
  },
  {
    number: '05',
    name: 'Full-Stack AI Deployment',
    description:
      'Shipping complete AI products, not just models -- FastAPI backends, Docker containers, cloud deployment (AWS, Hugging Face Spaces), and clean web interfaces.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="bg-parchment rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-charcoal font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            y={20}
            className="flex items-start gap-4 sm:gap-8 py-8 sm:py-10 md:py-12"
            style={{ borderBottom: '1px solid rgba(43, 38, 32, 0.15)' }}
          >
            <span
              className="text-charcoal font-black leading-none flex-shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.number}
            </span>
            <div className="flex flex-col gap-3 pt-2 sm:pt-4">
              <h3
                className="text-charcoal font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="text-charcoal font-light leading-relaxed max-w-2xl"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.65 }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
