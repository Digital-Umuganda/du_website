"use client";

import Link from "next/link";
import { useState } from "react";

// Icons
import { ChevronUp, ChevronDown, ExternalLink } from "lucide-react";

// Components
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

type Publication = {
  link: string;
  place: string;
  title: string;
  abstract: string;
};

const PublicationCard = ({
  pub,
  index,
  type = "publication",
}: {
  index: number;
  pub: Publication;
  type?: "publication" | "mention";
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongAbstract = pub.abstract && pub.abstract.length > 200;

  return (
    <div className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 transition-all duration-300 flex flex-col gap-4 overflow-hidden">
      {/* Decorative accent line */}
      <div
        className={`absolute top-0 left-0 w-1.5 h-full transition-colors duration-300 ${type === "publication" ? "bg-green/10 group-hover:bg-green" : "bg-dark_blue/10 group-hover:bg-dark_blue"}`}
      />

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 w-full">
        <div className="flex flex-col gap-3 flex-grow max-w-4xl">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-gray-400 text-sm font-medium">
              {index + 1}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 py-1.5 rounded-full font-semibold ${type === "publication" ? "bg-green/10 text-green" : "bg-dark_blue/10 text-dark_blue"}`}
            >
              {pub.place}
            </span>
          </div>

          <Link
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl font-bold text-dark_blue hover:text-green transition-colors leading-snug"
          >
            {pub.title}
          </Link>
        </div>

        <Link
          href={pub.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 text-gray-400 hover:bg-green hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-md"
          title="Visit Source"
        >
          <ExternalLink className="w-5 h-5" />
        </Link>
      </div>

      {pub.abstract && (
        <div className="mt-2 text-gray-600 border-t border-gray-100 pt-5">
          <div className="relative">
            <div
              className={`text-sm md:text-base leading-relaxed ${!isExpanded && isLongAbstract ? "line-clamp-3" : ""}`}
              dangerouslySetInnerHTML={{ __html: pub.abstract }}
            />
            {!isExpanded && isLongAbstract && (
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </div>

          {isLongAbstract ? (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-green hover:text-dark_blue transition-colors group/btn w-fit"
            >
              {isExpanded ? (
                <>
                  Show Less{" "}
                  <ChevronUp className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  Read Abstract{" "}
                  <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          ) : (
            <div className="mt-4" />
          )}

          {/* Mobile External Link button */}
          <div className="mt-6 md:hidden">
            <Link
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full text-sm font-semibold text-dark_blue bg-gray-50 px-4 py-3 rounded-xl hover:bg-green hover:text-white transition-colors"
            >
              Visit Source <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const PublicationsPage = () => {
  const publications = [
    {
      place: "Nature health 2026",
      link: "https://www.nature.com/articles/s44360-025-00038-1",
      title:
        "Large language models for frontline healthcare support in low-resource settings",
      abstract:
        "Large language models (LLMs) have demonstrated strong performance in medical contexts; however, existing benchmarks often fail to reflect the real-world complexity of low-resource health systems accurately. Here we develop a dataset of 5,609 clinical questions contributed by 101 community health workers across 4 Rwandan districts and compared responses generated by 5 LLMs (Gemini-2, GPT-4o, o3-mini, Deepseek R1 and Meditron-70B) with those from local clinicians. A subset of 524 question–answer pairs was evaluated using a rubric of 11 expert-rated metrics, scored on a 5-point Likert scale. Gemini-2 and GPT-4o were the best performers (achieving mean scores of 4.49 and 4.48 out of 5, respectively, across all 11 metrics). All LLMs significantly outperformed local clinicians (P < 0.001) across all metrics, with Gemini-2, for example, surpassing local general practitioners by an average of 0.83 points on every metric (range 0.38–1.10). Although performance degraded slightly when LLMs communicated in Kinyarwanda, the LLMs remained superior to clinicians and were over 500 times cheaper per response. These findings support the potential of LLMs to strengthen frontline care quality in low-resource, multilingual health systems.",
    },
    {
      place: "Arxiv 2026",
      link: "https://arxiv.org/abs/2602.02734",
      title: "Waxal : A large scale multilingual African language dataset",
      abstract:
        "The advancement of speech technology has predominantly favored high-resource languages, creating a significant digital divide for speakers of most Sub-Saharan African languages. To address this gap, we introduce WAXAL, a large-scale, openly accessible speech dataset for 21 languages representing over 100 million speakers. The collection consists of two main components: an Automated Speech Recognition (ASR) dataset containing approximately 1,250 hours of transcribed, natural speech from a diverse range of speakers, and a Text-to-Speech (TTS) dataset with over 180 hours of high-quality, single-speaker recordings reading phonetically balanced scripts. This paper details our methodology for data collection, annotation, and quality control, which involved partnerships with four African academic and community organizations. We provide a detailed statistical overview of the dataset and discuss its potential limitations and ethical considerations. The WAXAL datasets are released at this <a href='https://huggingface.co/datasets/google/WaxalNLP' target='_blank' class=\"text-green underline\">URL</a> under the permissive CC-BY-4.0 license to catalyze research, enable the development of inclusive technologies, and serve as a vital resource for the digital preservation of these languages",
    },
    {
      place: "MedArxiv 2025",
      link: "https://www.medrxiv.org/content/10.1101/2025.10.27.25338910v1",
      title:
        "Human Evaluators vs. LLM-as-a-Judge: Toward Scalable, Real-Time Evaluation of GenAI in Global Health",
      abstract: "",
    },
    {
      place: "Arxiv 2025",
      link: "https://arxiv.org/abs/2510.24081",
      title:
        "Global PIQA: Evaluating Physical Commonsense Reasoning Across 100+ Languages and Cultures",
      abstract:
        "To date, there exist almost no culturally-specific evaluation benchmarks for large language models (LLMs) that cover a large number of languages and cultures. In this paper, we present Global PIQA, a participatory commonsense reasoning benchmark for over 100 languages, constructed by hand by 335 researchers from 65 countries around the world. The 116 language varieties in Global PIQA cover five continents, 14 language families, and 23 writing systems. In the non-parallel split of Global PIQA, over 50% of examples reference local foods, customs, traditions, or other culturally-specific elements. We find that state-of-the-art LLMs perform well on Global PIQA in aggregate, but they exhibit weaker performance in lower-resource languages (up to a 37% accuracy gap, despite random chance at 50%). Open models generally perform worse than proprietary models. Global PIQA highlights that in many languages and cultures, everyday knowledge remains an area for improvement, alongside more widely-discussed capabilities such as complex reasoning and expert knowledge. Beyond its uses for LLM evaluation, we hope that Global PIQA provides a glimpse into the wide diversity of cultures in which human language is embedded.",
    },
    {
      place:
        "Workshop on Large Language Models and Generative AI for Health at AAAI 2025",
      link: "https://openreview.net/forum?id=VGxhF4xlWx",
      title:
        "Mbaza RBC: Deploying and evaluating an LLM-powered Chatbot for Community Health Workers in Rwanda",
      abstract:
        "The emergence of Large Language Models (LLMs) offers an opportunity to support health systems, particularly in low and middle income countries such as Rwanda where there exists limited health infrastructure. By providing information and support to front-line workers, especially community health workers (CHWs), LLMs offer to improve the quality of care by providing quick access to medical guidelines, supporting clinical decision-making, and facilitating health education in local languages. This work deploy and evaluates the performance of Large Language Model (LLM)-based chatbots to assist Community Health Workers (CHWs) in Rwanda, focusing on usability, interaction modalities, and local language processing. A total of 3,000 questions generated by Front-line workers using text and voice input methods were analyzed to determine preferences and error rates. Results indicate a strong preference for text-based queries (66%), though voice queries showed high satisfaction (97.5%) with minor transcription errors (2.47%). The most common focus areas for CHW queries were Maternal and Newborn Health, Integrated Community Case Management, and Nutrition. These findings suggest that, while voice interactions hold some potential, improvements in speech-to-text models are needed for optimal functionality in low-resource settings.",
    },
    {
      place: "AfriNLP 2023",
      link: "https://openreview.net/forum?id=1gLgrqWnHF",
      title:
        "Kinyarwanda TTS: Using a multi-speaker dataset to build a Kinyarwanda TTS model",
      abstract:
        "The field of text-to-speech (TTS) technology has been rapidly advancing in recent years, and has become an increasingly important aspect of our lives. This presents an opportunity for Africa, especially in facilitating access to information to many vulnerable  socio-economic groups. However, the lack of availability of high-quality datasets is a major hindrance. In this work, we create a dataset based on recordings of the Bible. Using an existing Kinyarwanda speech-to-text model we were able to segment and align the speech and the text, and then created a multi-speaker Kinyarwanda  TTS model.",
    },
    {
      place: "AfriNLP 2023",
      link: "https://openreview.net/forum?id=tuUHjowTKpC",
      title:
        "Multilingual automatic speech recognition for Kinyarwanda, Swahili, and Luganda: advancing ASR in select East African languages",
      abstract:
        "This paper presents a multilingual Automatic Speech Recognition (ASR) model for three East African languages—Kinyarwanda, Swahili, and Luganda. The Common Voice project's African languages datasets were used to produce a curated code-switched dataset of 3,900 hours on which the ASR model was trained. The work included validating the Kinyarwanda dataset and developing a model that achieves a 17.57 Word Error Rate (WER) on the language. Across all three languages, the Kinyarwanda model was finetuned and achieved a WER of 21.91 on the three curated datasets, with a WER of 25.48 for Kinyarwanda, 17.22 for Swahili, and 21.95 for Luganda. The paper emphasizes the necessity of considering the African environment when developing effective ASR systems and the significance of supporting many languages when developing ASR for languages with limited resources.",
    },
    {
      place: "International Conference on Machine Learning Technologies 2023",
      link: "https://dl.acm.org/doi/abs/10.1145/3589883.3589887",
      title:
        "Developing an IoT-based conversational AI recommender assistant for vital sign predicted anomalies",
      abstract:
        "In most real-time scenarios such as emergency first response or a patient self-monitoring using a wearable device, likely, accessing a healthcare physician for assessing potential vital sign anomalies and providing a recommendation will be impossible; thus potentially putting the patient at risk. Leveraging the latest advances in Natural Language Processing (NLP), this paper presents a research-driven design and development of a cloud-based conversational AI platform trained to predict vital signs anomalies and provides recommendations from a dataset created by physicians. To reinforce the learning of the virtual assistant, the Conversation Driven Development (CDD) methodology has been adopted to involve end users in the testing process in the early phase. The proposed platform will help to manage the consequences of low physician-patient ratios, especially in developing countries.",
    },
  ];

  const mentions = [
    {
      place: "Advancing Responsible AI in Public Sector Application: 2025",
      link: "https://www.taylorfrancis.com/chapters/oa-edit/10.1201/9781003663577-14/artificial-intelligence-government-challenges-lea-gimpel-keegan-mcbride",
      title:
        "Artificial Intelligence, Government, and Challenges: Initial Insights from Rwanda's Mbaza AI-Chatbot Project",
      abstract:
        "In most real-time scenarios such as emergency first response or a patient self-monitoring using a wearable device, likely, accessing a healthcare physician for assessing potential vital sign anomalies and providing a recommendation will be impossible; thus potentially putting the patient at risk. Leveraging the latest advances in Natural Language Processing (NLP), this paper presents a research-driven design and development of a cloud-based conversational AI platform trained to predict vital signs anomalies and provides recommendations from a dataset created by physicians. To reinforce the learning of the virtual assistant, the Conversation Driven Development (CDD) methodology has been adopted to involve end users in the testing process in the early phase. The proposed platform will help to manage the consequences of low physician-patient ratios, especially in developing countries.",
    },
    {
      place: "Arxiv 2025",
      link: "https://arxiv.org/abs/2511.09690v1",
      title:
        "Omnilingual ASR: Open-Source Multilingual Speech Recognition for 1600+ Languages ",
      abstract:
        "Automatic speech recognition (ASR) has advanced in high-resource languages, but most of the world's 7,000+ languages remain unsupported, leaving thousands of long-tail languages behind. Expanding ASR coverage has been costly and limited by architectures that restrict language support, making extension inaccessible to most--all while entangled with ethical concerns when pursued without community collaboration. To transcend these limitations, we introduce Omnilingual ASR, the first large-scale ASR system designed for extensibility. Omnilingual ASR enables communities to introduce unserved languages with only a handful of data samples. It scales self-supervised pre-training to 7B parameters to learn robust speech representations and introduces an encoder-decoder architecture designed for zero-shot generalization, leveraging a LLM-inspired decoder. This capability is grounded in a massive and diverse training corpus; by combining breadth of coverage with linguistic variety, the model learns representations robust enough to adapt to unseen languages. Incorporating public resources with community-sourced recordings gathered through compensated local partnerships, Omnilingual ASR expands coverage to over 1,600 languages, the largest such effort to date--including over 500 never before served by ASR. Automatic evaluations show substantial gains over prior systems, especially in low-resource conditions, and strong generalization. We release Omnilingual ASR as a family of models, from 300M variants for low-power devices to 7B for maximum accuracy. We reflect on the ethical considerations shaping this design and conclude by discussing its societal impact. In particular, we highlight how open-sourcing models and tools can lower barriers for researchers and communities, inviting new forms of participation. Open-source artifacts are available at this <a href='https://github.com/facebookresearch/omnilingual-asr' target='_blank' class=\"text-green underline\">URL</a>.",
    },
  ];

  return (
    <main className="w-full h-auto flex flex-col items-center">
      <div className="w-full min-h-[250px] md:h-[300px] flex flex-col items-center justify-between bg-gradient-to-b from-white to-[#f4f4f4] py-4 md:py-0">
        <Nav />
        <div className="flex flex-col gap-3 md:gap-4 pb-6 md:pb-10 items-center px-4">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark_blue text-center">
            Publications
          </p>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link href={"/"}>Digital Umuganda</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <p className="text-green">Publications</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Publications Section */}
      <div className="w-full max-w-5xl px-4 sm:px-6 py-12 md:py-16">
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark_blue">
            Our Publications
          </h2>
        </div>
        <div className="space-y-6 md:space-y-8">
          {publications.map((pub, index) => (
            <PublicationCard
              key={index}
              pub={pub}
              index={index}
              type="publication"
            />
          ))}
        </div>
      </div>

      {/* Mentions Section */}
      <div className="w-full max-w-5xl px-4 sm:px-6 pb-16 md:pb-24">
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark_blue">
            Publications mentioning our work
          </h2>
        </div>
        <div className="space-y-6 md:space-y-8">
          {mentions.map((mention, index) => (
            <PublicationCard
              key={index}
              pub={mention}
              index={index}
              type="mention"
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PublicationsPage;
