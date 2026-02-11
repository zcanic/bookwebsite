# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第12部分

**原始页码**: 34 - 36
**段落数量**: 19
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 33-33 (1722 字符)
- **后文上下文页码**: 37-37 (1612 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Best of Breed' 翻译为 '最佳组合'，指企业从不同供应商处购买各个功能领域最优秀的软件，而非购买单一的集成套件。2. 'Monolithic' 翻译为 '单体式'，指传统的大型、高度耦合、一体化的ERP架构。3. 第一段和最后一段的翻译参考了提供的上下文以补全语义。

---

no standardized architecture definition available. This is due to the varying functional scope of the ERP products, different implementation strategies, and the fact that the product architecture is often a closely guarded secret of the ERP vendors.

**【译文】** 目前尚无标准化的架构定义。这是由于ERP产品的功能范围各异、实施策略不同，且产品架构往往是ERP供应商严格保守的秘密。

---

To overcome this gap, we proposed an ERP reference architecture (Chapter 4). However, to suggest such an ERP reference architecture, we had first to define ERP reference processes (Chapter 3), which specify the functionality of ERP systems. The reference processes describe the WHAT, while the reference architecture depicts the HOW.

**【译文】** 为了填补这一空白，我们提出了ERP参考架构（第4章）。然而，为了提出这样的ERP参考架构，我们要首先定义ERP参考流程（第3章），明确ERP系统的功能。参考流程描述了“做什么”（WHAT），而参考架构则描绘了“怎么做”（HOW）。

---

In defining the ERP reference processes, we investigated around 20 ERP products, which are listed in Table 1.2. We selected those ERP products according to IDC analysis (IDC, 2020) of the ERP vendors with the highest market share. We took into consideration key aspects such as the capabilities offered by the products and, if available, the technical realization approach provided by the vendor.

**【译文】** 在定义ERP参考流程时，我们调研了约20款ERP产品，如表1.2所示。我们根据IDC的分析报告（IDC, 2020），选择了市场份额最高的那些ERP供应商的产品。我们考量了关键方面，例如产品提供的功能，以及供应商提供的技术实现方法（如果有）。

---

In addition, we explored and abstracted the artificial intelligence technologies ERP products incorporating for implementation of corresponding use cases (Chapter 5). With the results 1 to 5 of Fig. 1.2, we had the necessary foundation to define the solution concept for embedding artificial intelligence into ERP software (Chapters. 7–19).

**【译文】** 此外，我们还探索并提炼了ERP产品为实现相应用例而整合的人工智能技术（第5章）。基于图1.2中的结果1至5，我们具备了必要的基础，可以定义将人工智能嵌入ERP软件的解决方案概念（第7-19章）。

---

We operationalized those concepts we operationalized with an implementation framework (Chapter 20) to simplify their consumption by developers. Thus, the framework applies the concepts as far as possible automatically while developers can focus on the implementation of the business logic. This reduces the total cost of development but also increases the quality of coding.

**【译文】** 我们通过一个实施框架（第20章）将这些概念落地，以简化开发人员的使用。因此，该框架尽可能自动地应用这些概念，使开发人员能够专注于业务逻辑的实现。这不仅降低了总体开发成本，还提高了代码质量。

---

While the framework concepts are generally valid, we introduce a concrete implementation as feasibility proof based on the ERP platform of SAP, especially as we utilize this technology also for the implementation of the case studies.

**【译文】** 虽然这些框架概念具有通用性，但我们基于SAP的ERP平台介绍了一个具体的实现作为可行性验证，特别是因为我们也利用该技术来实施案例研究。

---

The case studies prove the real-world feasibility of the proposed solution. Artificial intelligence use cases from the ERP domain sales and research (Chapter 21), sourcing and procurement (Chapter 22), inventory and supply chain (Chapter 23), and finance (Chapter 24) were realized successfully based on the suggested solution concept and implementation framework.

**【译文】** 案例研究证明了所提方案在现实世界中的可行性。基于建议的解决方案概念和实施框架，我们成功实现了销售与研究（第21章）、寻源与采购（第22章）、库存与供应链（第23章）以及财务（第24章）等ERP领域的AI用例。

---

Development of artificial intelligence applications in the context of ERP shall consider ethical aspects, which are discussed finally (Chapter 25). To recap, we explained how our results were deducted and validated so that the scientist community can retrace and verify them.

**【译文】** 在ERP背景下开发人工智能应用应考虑伦理方面，我们将在最后（第25章）对此进行讨论。综上所述，我们解释了我们的结果是如何推导和验证的，以便科学界能够追溯和核实。

---

Table 1.2 Analyzed ERP products selected from the IDC list (IDC, 2020)

**【译文】** 表 1.2 选自IDC列表的被分析ERP产品 (IDC, 2020)

---

We begin this part with a historical view of ERP systems. The first software solutions for enterprises had been best of breed products, which were developed for very specific use cases. The resulting gap of integration among those numerous solutions was closed with monolithic ERP systems later.

**【译文】** 在这一部分，我们首先从历史角度审视ERP系统。最早的企业软件解决方案是“最佳组合”（Best of Breed）产品，它们是针对非常具体的用例开发的。后来，单体式（Monolithic）ERP系统弥补了这些众多解决方案之间存在的集成鸿沟。

---

In turn, the high implementation and operations efforts of monolithic systems have been compensated nowadays with cloud-based ERP solutions where hardware is shared among multiple deployments.

**【译文】** 反过来，如今基于云的ERP解决方案通过在多个部署之间共享硬件，抵消了单体式系统高昂的实施和运维工作量。

---

However, intelligent ERP is the future direction. These products apply artificial intelligence technology to automatize business processes toward an autonomous solution. Although there is a long journey to go, the first use cases in this domain are very promising.

**【译文】** 然而，智能ERP才是未来的方向。这些产品应用人工智能技术来实现业务流程的自动化，朝着自主解决方案迈进。虽然路途漫漫，但该领域的首批用例已非常有前景。

---

Market analysists also foresee high potential and expect billions of dollar growth in this area. Consequently, researching in the new field of embedding artificial intelligence into ERP software is essential to resolve the underlying challenges and leverage the huge opportunities as we do with this elaboration.

**【译文】** 市场分析师也预见到了巨大的潜力，并预计该领域将有数十亿美元的增长。因此，研究将人工智能嵌入ERP软件这一新领域，对于解决潜在挑战并利用巨大的机遇至关重要，正如我们在本书中所做的那样。

---

We also briefly discuss the application of artificial intelligence in context of ERP systems in terms of increasing automation of business processes. In this context, we also provide an answer to the question, “What makes an ERP system intelligent?”

**【译文】** 我们还简要讨论了人工智能在ERP系统背景下的应用，即如何提高业务流程的自动化程度。在此背景下，我们也回答了“是什么让ERP系统变得智能？”这一问题。

---

For embedding artificial intelligence into ERP software, we must know the architecture of ERP systems to incorporate systematically artificial intelligence. However, the functionality and architecture of ERP solutions depend on the vendors and differ accordingly. Therefore, we first propose a reference process specification, which constitutes the functionality of ERP solutions.

**【译文】** 为了将人工智能嵌入ERP软件，我们必须了解ERP系统的架构，以便系统地整合人工智能。然而，ERP解决方案的功能和架构取决于供应商，并因此而异。因此，我们首先提出了参考流程规范，它构成了ERP解决方案的功能基础。

---

All enterprises cover the domains develop products and services, generate demand, fulfill demand, plan and manage, and have to digitalize the underlying business processes. We suggest business processes for those domains and derive from them a reference architecture for ERP software.

**【译文】** 所有企业都涵盖开发产品与服务、产生需求、满足需求以及计划与管理等领域，并且必须将底层的业务流程数字化。我们针对这些领域提出了业务流程建议，并从中推导出了ERP软件的参考架构。

---

The suggested reference processes we use to specify which part of a business process shall be enriched with artificial intelligence capability (the WHAT), while the proposed reference architecture we utilize to determine where and how to incorporate artificial intelligence technology (the HOW).

**【译文】** 我们使用建议的参考流程来明确业务流程的哪一部分应增强人工智能能力（WHAT），而利用提出的参考架构来确定在何处以及如何整合人工智能技术（HOW）。

---

Especially the concepts we later define are founded on those reference models and are therefore commonly valid. As a side benefit, the reference processes and refence architecture can be additionally reused for assessing ERP products.

**【译文】** 特别是我们在后文中定义的概念都是建立在这些参考模型之上的，因此具有普遍有效性。此外，参考流程和参考架构还有一个附带的好处，即可被重复用于评估ERP产品。

---

This part is based on our investigations in Sarferaz (2022, 2023).

**【译文】** 本部分基于我们在Sarferaz (2022, 2023)中的研究。

---

