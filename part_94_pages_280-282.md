# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第94部分

**原始页码**: 280 - 282
**段落数量**: 8
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 279-279 (941 字符)
- **后文上下文页码**: 283-283 (3201 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Foundation models 译为'基础模型'，指可作为其他应用基础的通用预训练模型。 2. Large language models (LLMs) 译为'大型语言模型'。 3. Generative AI 译为'生成式AI'。 4. Prompt 译为'提示词'或'上下文'。 5. Fine-tuning 译为'微调'。

---

value of artificial intelligence exploited effectively. In this section, we deducted the business requirements and proposed the necessary technical implementation for designing user interfaces for intelligent systems. The goal here was to optimally guide the user and focus the attention on the highest priority tasks by notifications. In addition, a wide range of other artificial intelligence design patterns facilitate the user’s workflow, for example, explanations, matching, rankings, and recommendations but also predictions and forecasts.

**【译文】** （承接上文）……才能有效发挥人工智能的即时价值。在本节中，我们推导了业务需求，并提出了设计智能系统用户界面所需的技术实现方案。这里的目标是通过通知来优化引导用户，并将注意力集中在最高优先级的任务上。此外，各种其他人工智能设计模式也能促进用户的工作流程，例如解释、匹配、排名和推荐，以及预测和预报。

---

19 Embedding Generative AI
In this chapter, we specify the business requirements and propose the solution concept for embedding Generative AI into ERP software. Generative AI has the potential to radically change the way we apply artificial intelligence in various industries and fields. By levering the strength of these sophisticated models, users without technical backgrounds can address their business challenges just by expressing them in everyday language. This creates a vast range of opportunities for both companies and individuals. In the context of ERP systems, the key questions are: What is the added value of Generative AI, what are the technical requirements, and how to embed this technology into business applications? Providing answers for those questions is the objective of this chapter.

**【译文】** 第19章 嵌入生成式AI
在本章中，我们将明确业务需求，并提出将生成式AI嵌入ERP软件的解决方案概念。生成式AI具有彻底改变我们在各行各业应用人工智能方式的潜力。通过利用这些复杂模型的优势，非技术背景的用户仅需用日常语言表达，即可解决业务挑战。这为企业和个人创造了巨大的机遇。在ERP系统的背景下，关键问题在于：生成式AI的附加价值是什么？技术要求有哪些？以及如何将该技术嵌入到业务应用程序中？回答这些问题是本章的目标。

---

19.1 Problem Statement
Foundation models, large language models, and generative AI are related concepts in the field of artificial intelligence, particularly in the subfield of natural language processing and machine learning. Here’s a brief explanation of each term and how they depend on each other:

**【译文】** 19.1 问题陈述
基础模型、大型语言模型和生成式AI是人工智能领域，特别是自然语言处理和机器学习子领域中的相关概念。以下是对每个术语的简要解释以及它们之间的相互依赖关系：

---

1. Foundation models: These are pre-trained machine learning models that serve as a starting point or base for more specialized models or applications. These models are usually trained on massive amounts of data and can capture general features and representations of the data. By fine-tuning these models on smaller, task-specific datasets, researchers can create models that perform well on a wide range of tasks. Examples of foundation models include OpenAI’s GPT-3, BERT, and CLIP.

**【译文】** 1. 基础模型（Foundation models）：这些是预训练的机器学习模型，作为更专业化模型或应用程序的起点或基础。这些模型通常在海量数据上进行训练，能够捕捉数据的一般特征和表示。通过在较小的特定任务数据集上对这些模型进行微调（fine-tuning），研究人员可以创建在广泛任务上表现出色的模型。基础模型的示例包括OpenAI的GPT-3、BERT和CLIP。

---

2. Large language models (LLMs): These are a type of foundation model specifically designed to handle natural language processing tasks. LLMs are trained on vast amounts of text data, enabling them to generate coherent and contextually relevant responses, perform translation, answer questions, and more. The term large refers to the size of the model, typically measured by the number of parameters. Larger models have more capacity to learn complex patterns and representations, leading to better performance on a variety of tasks. GPT-3, with its 175 billion parameters, is an example of an LLM.

**【译文】** 2. 大型语言模型（LLMs）：这是一种专门设计用于处理自然语言处理任务的基础模型。LLM在海量文本数据上进行训练，使其能够生成连贯且上下文相关的响应、执行翻译、回答问题等。“大型”一词指的是模型的规模，通常以参数数量来衡量。更大的模型拥有更强的能力来学习复杂的模式和表示，从而在各种任务上表现更佳。拥有1750亿参数的GPT-3就是LLM的一个例子。

---

3. Generative AI: This term refers to the broader class of AI models that can generate new data samples based on the patterns and structures learned during training. These models can create text, images, music, or any other type of data by sampling from a learned probability distribution. LLMs are a type of generative AI, as they can generate text based on a given context or prompt.

**【译文】** 3. 生成式AI（Generative AI）：该术语指的是一类更广泛的AI模型，它们可以根据训练期间学到的模式和结构生成新的数据样本。这些模型可以通过从学习到的概率分布中采样来创建文本、图像、音乐或任何其他类型的数据。LLM是生成式AI的一种，因为它们可以根据给定的上下文或提示词（prompt）生成文本。

---

Thus, foundation models are a general concept in machine learning, and large language models are a specific type of foundation model designed for natural language processing tasks. Both foundation models and large language models can be considered part of the broader category of generative AI, as they can generate new data samples based on learned patterns. These concepts depend on each other in the sense that large language models are a subclass of foundation models, and both of these model types can be seen as instances of generative AI. The development of more advanced foundation models and LLMs contributes to the progress in generative AI and its potential applications. As already mentioned, Generative AI refers to a type of artificial intelligence that focuses on creating new content, data, or patterns based on existing examples. These AI models are designed to generate output that resembles human-created content, such as text, images, music, or even videos. They learn from existing data and are capable of producing novel content by understanding and mimicking the underlying structure and patterns in the data. One of the most popular techniques used in generative AI is generative adversarial networks (GANs), which consist of two neural networks, a generator and a discriminator, competing against each other. The generator creates fake data, while the discriminator tries to distinguish between real and fake data. This process helps the generator improve its output, making it increasingly difficult for the discriminator to differentiate between the two. Another popular approach is variational autoencoders (VAEs), which are unsupervised learning models that learn to compress data and then reconstruct it. VAEs can generate new data by sampling from the learned compressed representation. Generative AI has numerous applications, such as creating realistic images, generating text, composing music, designing new molecules for drug discovery, and more.

**【译文】** 因此，基础模型是机器学习中的一个通用概念，而大型语言模型是专为自然语言处理任务设计的一种特定类型的基础模型。基础模型和大型语言模型都可以被视为更广泛的生成式AI类别的一部分，因为它们都能根据学到的模式生成新的数据样本。这些概念相互依存：大型语言模型是基础模型的一个子类，而这两类模型都可以看作是生成式AI的实例。更先进的基础模型和LLM的发展促进了生成式AI及其潜在应用的进步。如前所述，生成式AI是指一种侧重于根据现有示例创建新内容、数据或模式的人工智能。这些AI模型旨在生成类似于人类创作的内容，如文本、图像、音乐甚至视频。它们从现有数据中学习，并能够通过理解和模仿数据中的底层结构和模式来产出新颖的内容。生成式AI中最常用的技术之一是生成对抗网络（GANs），它由两个神经网络组成：一个生成器和一个判别器，两者相互竞争。生成器创建假数据，而判别器试图区分真假数据。这一过程有助于生成器改进其输出，使判别器越来越难以区分两者。另一种流行的方法是变分自编码器（VAEs），这是一种无监督学习模型，学习压缩数据然后重建它。VAE可以通过从学习到的压缩表示中采样来生成新数据。生成式AI拥有众多应用，例如创建逼真的图像、生成文本、创作音乐、为药物发现设计新分子等。

---

Within the realm of ERP software, the primary inquiries revolve around the additional benefits brought by Generative AI, the necessary technical specifications, and the methods to incorporate this technology into business applications. Those aspects we discuss in this section. However, as the Generative AI is a brand-new research topic, those might be not final answers. Generative AI has the potential to radically change the way we apply artificial intelligence in various industries and fields. By leveraging the capabilities of these advanced models, non-technical users can now solve their business tasks simply by describing them in natural language. This opens up a wide possibility for businesses and individuals alike, empowering them to

**【译文】** 在ERP软件领域，主要的探究围绕着生成式AI带来的额外收益、必要的技术规范以及将该技术整合到业务应用中的方法。我们在本节中讨论这些方面。然而，由于生成式AI是一个全新的研究课题，目前的结论可能并非最终答案。生成式AI有潜力从根本上改变我们在各行各业应用人工智能的方式。通过利用这些先进模型的能力，非技术用户现在仅需用自然语言描述即可解决其业务任务。这为企业和个人开启了广阔的可能性，赋予他们无需深厚技术专业知识即可利用人工智能的能力。

---

