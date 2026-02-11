# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第35部分

**原始页码**: 103 - 105
**段落数量**: 12
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 102-102 (3723 字符)
- **后文上下文页码**: 106-106 (3221 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Real Estate Management' 翻译为 '房地产管理'。 
2. 'Side by side' 在SAP架构语境下翻译为 '并行'。 
3. 'Commodity Management' 翻译为 '大宗商品管理'。 
4. 'Mark-to-market' 翻译为 '盯市' 或 '按市值计价'，此处采用 '盯市'。 
5. 文末最后一句根据后文上下文补充了完整含义。

---

cycle, such as investment and construction, sales and marketing, lease and space management, and maintenance and repair. It handles tasks ranging from portfolio analysis and investment tracking to lead qualification, lease posting, rent escalation, and maintenance and repair service orders. Real estate object management offers both architectural and usage views of master data.

**【译文】** 房地产管理（Real Estate Management）涵盖了房地产全生命周期的各个方面，例如投资与建设、销售与营销、租赁与空间管理，以及维护与维修。它处理的任务范围广泛，从投资组合分析和投资跟踪，到线索资格审查、租赁过账、租金调整以及维护维修服务订单。不动产对象管理提供了主数据的建筑视图和使用视图。

---

Enterprise Risk and Compliance helps manage risks, controls, and regulatory requirements in business operations. To minimize risk and ensure compliance, all incoming and outgoing payments are checked, with automatic alerts sent to responsible parties for faster response and reaction times.

**【译文】** 企业风险与合规（Enterprise Risk and Compliance）模块有助于管理业务运营中的风险、控制和监管要求。为了最大限度地降低风险并确保合规性，系统会检查所有的收付款，并向相关责任人发送自动警报，以便实现更快的响应和处理。

---

Commodity Management identifies and qualifies financial risks related to commodity price fluctuations in sales and procurement. It tracks suppliers, resources, and price developments, enabling companies to make informed procurement decisions or hedge risks with commodity derivatives. The module also monitors exchange rates for services provided in different countries and currencies, supporting material management contracts from commodity pricing to risk analytics and facilitating mark-to-market queries, stock logistics documents, and financial derivatives.

**【译文】** 大宗商品管理（Commodity Management）用于识别和评估销售与采购中与大宗商品价格波动相关的财务风险。它跟踪供应商、资源和价格走势，使企业能够做出明智的采购决策，或利用大宗商品衍生品对冲风险。该模块还监控在不同国家和货币下提供服务的汇率，支持从大宗商品定价到风险分析的物料管理合同，并支持盯市查询、库存物流单据和金融衍生品处理。

---

Subscription Billing and Revenue Management allows organizations to adopt flexible payment models, including subscriptions and usage-based billing. Key features include subscription business models with recurring and one-time charges, rating and billing of millions of usage transactions from multiple platforms, complex volume-based discounts and surcharges, and revenue sharing and partner settlement. Subscription order management enables customers to offer their business solutions as a mix of products and services.

**【译文】** 订阅计费与收入管理（Subscription Billing and Revenue Management）允许企业采用灵活的支付模式，包括订阅制和基于使用量的计费。其关键功能包括支持经常性费用和一次性费用的订阅业务模式，对来自多个平台的数百万笔使用交易进行计费和结算，复杂的基于量的折扣和附加费，以及收入分成和合作伙伴结算。订阅订单管理使客户能够将其业务解决方案作为产品和服务的组合来提供。

---

4.11 Conclusion

**【译文】** 4.11 结论

---

In this chapter, we suggested a reference architecture for ERP software. The reference consists of various application modules for implementing the reference business processes explained in the previous chapter. The reference architecture builds the technical foundation for embedding artificial intelligence into ERP solutions. The Idea to Market reference business process was realized with the application module Research and Development/Engineering. The reference business process Source to Pay was covered by the application module Procurement. The application modules Supply Chain and Manufacturing implemented the reference business process Plan to Fulfill. Lead to Cash was mapped to the application modules Sales and Service. Human Capital Management handled the Recruit to Retire reference business process. The application module Asset Management covered the Acquire to Decommission reference business process, while the Finance module managed the Finance business process. The reference business process Governance was implemented with various components of the underlying ERP technology platform and therefore was not discussed further.

**【译文】** 在本章中，我们提出了一种ERP软件的参考架构。该参考架构由各种应用模块组成，用于实现前一章中解释的参考业务流程，并为将人工智能嵌入ERP解决方案奠定了技术基础。“从创意到市场（Idea to Market）”这一参考业务流程通过“研发/工程”应用模块来实现。“从寻源到付款（Source to Pay）”参考业务流程由“采购”应用模块覆盖。“供应链”和“制造”应用模块实现了“从计划到履行（Plan to Fulfill）”参考业务流程。“从线索到现金（Lead to Cash）”流程映射到了“销售”和“服务”应用模块。“人力资本管理”模块处理了“从招聘到退休（Recruit to Retire）”参考业务流程。“资产管理”应用模块覆盖了“从获取到退役（Acquire to Decommission）”参考业务流程，而“财务”模块则管理“财务”业务流程。“治理”参考业务流程通过底层ERP技术平台的各个组件来实现，因此不再赘述。

---

5 ERP Reference Artificial Intelligence Technology

**【译文】** 第5章 ERP参考人工智能技术

---

In this chapter, we explain the artificial intelligence technologies that are used in ERP systems to implement corresponding business applications. We identified two types of technology provisioning in the context of ERP systems. There are artificial intelligence technologies that are embedded into the database system and application server of ERP systems. For scalability reasons, artificial intelligence infrastructure (e.g., GPU computing) is also provided side by side to the ERP platform. We will introduce both types of ERP technology so that a general understanding is provisioned. However, from our perspective, it is not valuable to consider this topic abstractly. Therefore, we will depict as a concrete example SAP S/4HANA as the well-known ERP product and reflect the contained artificial intelligence technologies. This is also helpful in understanding the case studies and implementation framework introduced in the last part of the elaboration. The goal is to describe what those technologies are intended to be used for and not to explain all features and functions in detail.

**【译文】** 在本章中，我们将解释ERP系统中用于实现相应业务应用的人工智能技术。在ERP系统的背景下，我们确定了两类技术供应方式：一类是嵌入到ERP系统的数据库系统和应用服务器中的人工智能技术；另一类是出于可扩展性原因，作为ERP平台并行设施提供的人工智能基础设施（如GPU计算）。我们将介绍这两类ERP技术，以便读者建立一个总体认知。然而，在我们看来，抽象地讨论这个话题并没有太大价值。因此，我们将以业界知名的ERP产品SAP S/4HANA为例，具体展示其中包含的人工智能技术。这也有助于理解本书最后一部分介绍的案例研究和实施框架。我们的目标是描述这些技术的预期用途，而不是详细解释所有特性和功能。

---

5.1 Introduction

**【译文】** 5.1 引言

---

Fig. 5.1 ERP reference artificial intelligence technology
are self-explanatory and will be discussed in Chap. 7 so that instead of describing them abstractly, we will depict the artificial intelligence technologies concretely for SAP S/4HANA as an exemplary ERP solution. This will be particularly helpful in understanding subsequent chapters where case studies based on SAP S/4HANA are explained, serving as proof points for the proposed approaches. Our aim is to give an overview of some of SAP’s most significant artificial intelligence technologies. While this document does not cover all the features and functionalities of these technologies, it does offer guidance on their usage and recommendations on which technology to use in specific situations, as some have overlapping capabilities. SAP provides a range of artificial intelligence technologies to its partners, clients, and internal stakeholders for their own projects. We will discuss SAP HANA, SAP Data Intelligence, SAP AI Core, and SAP Analytics Cloud and conclude with SAP AI Business Services and SAP AI Launchpad. Based on the ERP reference artificial intelligence technology shown in Fig. 5.1, we can classify SAP HANA as embedded technology of the ERP platform, while all the other listed technologies are provided side by side on the AI technology platform of SAP.

**【译文】** 图 5.1 ERP参考人工智能技术

[该图中的各个组件]不言自明，并将在第7章中进行讨论，因此我们不再抽象地描述它们，而是以SAP S/4HANA这一典型的ERP解决方案为例，具体描述其人工智能技术。这对于理解后续章节特别有帮助，在这些章节中，我们将解释基于SAP S/4HANA的案例研究，作为所提方法的佐证。我们的目的是概述SAP一些最重要的人工智能技术。虽然本文档不会涵盖这些技术的所有特性和功能，但它确实提供了使用指导，并针对特定情况推荐使用哪种技术，因为其中一些技术的功能存在重叠。SAP向其合作伙伴、客户和内部利益相关者提供了一系列人工智能技术，用于他们自己的项目。我们将讨论SAP HANA、SAP Data Intelligence、SAP AI Core和SAP Analytics Cloud，最后介绍SAP AI Business Services和SAP AI Launchpad。基于图5.1所示的ERP参考人工智能技术，我们可以将SAP HANA归类为ERP平台的嵌入式技术，而所有其他列出的技术则是作为SAP AI技术平台上的并行技术提供的。

---

SAP HANA’s key feature is its multipurpose database, which allows users to store, process, train, and serve all their data and artificial intelligence processes in memory and in real time. As all customer-initiated actions and operations are executed immediately within SAP HANA’s in-memory database, there is no need to transfer data to another system for processing. The specialized machine learning (ML) libraries [Automated Predictive Library (APL) and Predictive Analytics Library (PAL)] built into SAP HANA applications support a wide range of artificial intelligence use cases. For data scientists’ convenience, all training methods offer a native scripting interface (SQLScript), which can be used directly or wrapped in Python and R libraries.

**【译文】** SAP HANA的关键特性是其多用途数据库，它允许用户在内存中实时存储、处理、训练和运行所有数据及人工智能流程。由于所有由客户发起的动作和操作都在SAP HANA的内存数据库中立即执行，因此无需将数据传输到另一个系统进行处理。内置于SAP HANA应用中的专用机器学习（ML）库——自动化预测库（APL）和预测分析库（PAL）——支持广泛的人工智能用例。为了方便数据科学家，所有的训练方法都提供了原生脚本接口（SQLScript），可以直接使用，也可以封装在Python和R库中使用。

---

When it comes to complex orchestration situations, data categorization, and data quality procedures, SAP Data Intelligence excels in these areas. It can seamlessly integrate unstructured, streaming, or cloud application data in various formats scattered across the organization and write it to the desired endpoint. With connections to R, Python, APL, and PAL libraries, SAP Data Intelligence provides a unified graphical design interface for both data ingestion and transformation. SAP Data Intelligence is suggested for situations where artificial intelligence use cases involve

**【译文】** 当涉及复杂的编排场景、数据分类和数据质量流程时，SAP Data Intelligence在这些领域表现卓越。它可以无缝集成组织内分散的、各种格式的非结构化数据、流数据或云应用数据，并将其写入预期的端点。通过连接R、Python、APL和PAL库，SAP Data Intelligence为数据摄入和转换提供了统一的图形化设计界面。对于涉及需要[在SAP HANA中合并和管理的]多种异构数据源的人工智能用例，建议使用SAP Data Intelligence。

---

