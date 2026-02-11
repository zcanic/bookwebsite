# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第48部分

**原始页码**: 142 - 144
**段落数量**: 6
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 141-141 (3533 字符)
- **后文上下文页码**: 145-145 (82 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Side-by-side artificial intelligence 译为“并行人工智能”，指AI模型运行在独立平台上，与核心ERP系统并行工作的架构模式。2. Built-in artificial intelligence 译为“内置人工智能”。3. Business vernacular 译为“业务语言”，指用户熟悉的商业术语。

---

7.2 Solution Architecture
In this chapter, we focus on the solution architecture and conceptual foundations regarding embedding artificial intelligence into ERP software. The proposed approach basically resolves the required ERP qualities for artificial intelligence and the deducted artificial intelligence application patterns, which both were explained in Chap. 6. To have a general valid solution, the architecture is founded on the ERP reference processes from Chap. 3, ERP reference architecture from Chap. 4, and the ERP reference artificial intelligence technology from Chap. 5. A lot of the ERP qualities (e.g., commercialization, backup, recovery) are resolved by the existing concepts and infrastructure of ERP systems. This elaboration focuses only on the concepts and techniques that we newly invented for artificial intelligence. Thus, the focus is on those challenges that are artificial intelligence specific and require new concepts and implementation framework. Challenges that can be resolved with existing concepts and technology we take as granted and won’t explain them further.

**【译文】** 7.2 解决方案架构
本章我们将重点讨论将人工智能嵌入ERP软件的解决方案架构和概念基础。所提出的方法主要解决了第6章中阐述的人工智能所需的ERP质量特性以及推导出的人工智能应用模式。为了获得通用的解决方案，该架构建立在第3章的ERP参考流程、第4章的ERP参考架构以及第5章的ERP参考人工智能技术基础之上。许多ERP质量特性（例如商业化、备份、恢复）已通过ERP系统的现有概念和基础设施得到解决。因此，本文仅重点阐述我们为人工智能新提出的概念和技术。换言之，我们将聚焦于那些人工智能特有的、需要新概念和实施框架的挑战。对于可以通过现有概念和技术解决的挑战，我们将其视为既定基础，不再赘述。

---

Enhanced computational capabilities, more advanced algorithms, and the accessibility of vast amounts of data are enabling the incorporation of artificial intelligence features in ERP software. Moreover, the in-memory database systems that underpin modern ERP products accelerate processing, combine analytical and transactional data, and foster innovation through integrated artificial intelligence libraries. AI technology platforms allow for the addition of new capabilities to ERP solutions, spanning the entire range from simply utilizing intelligent services to training and deploying custom artificial intelligence models.

**【译文】** 增强的计算能力、更先进的算法以及海量数据的可访问性，使得在ERP软件中整合人工智能功能成为可能。此外，支撑现代ERP产品的内存数据库系统不仅加速了处理过程，结合了分析数据和事务数据，还通过集成的人工智能库促进了创新。AI技术平台允许向ERP解决方案添加新功能，涵盖了从简单使用智能服务到训练和部署自定义人工智能模型的全过程。

---

More complex tasks, such as image recognition, sentiment analysis, and natural language processing, necessitate deep learning algorithms based on neural networks. These algorithms typically require large volumes of data and extensive GPU processing for model training. To minimize the impact on the transactional ERP system and prevent performance degradation for business processes, we recommend offloading such scenarios to AI technology platforms. This architectural pattern we refer to is side-by-side artificial intelligence. In most cases, the data needed for these scenarios—such as images, audio, text documents, historical data, and application logs—are stored not in ERP systems but in business data lakes. Generally, the utilization of a trained model relies on remote interfaces integrated into business processes and user interfaces. However, for large-scale processing, these interfaces must either support bulk operations or offer local deployment of inference models.

**【译文】** 更复杂的任务，如图像识别、情感分析和自然语言处理，往往需要基于神经网络的深度学习算法。这些算法通常需要大量数据和高强度的GPU处理来进行模型训练。为了最大限度地减少对事务性ERP系统的影响并防止业务流程性能下降，我们建议将此类场景卸载到AI技术平台。这种架构模式我们称之为“并行人工智能”（Side-by-Side Artificial Intelligence）。在大多数情况下，这些场景所需的数据——如图像、音频、文本文档、历史数据和应用程序日志——并非存储在ERP系统中，而是存储在业务数据湖中。通常，训练好的模型的使用依赖于集成到业务流程和用户界面中的远程接口。然而，对于大规模处理，这些接口必须支持批量操作或提供推理模型的本地部署。

---

Our objective is to deliver inference results to the right person, in the right place, and at the right time (built-in artificial intelligence). Ideally, users should not even have to be aware of whether a feature relies on artificial intelligence. ERP users are usually business professionals with limited understanding of data science and statistical techniques. As a result, concealing these mathematical elements and converting the inference findings into the business vernacular of the ERP user is crucial for the effective utilization and adoption of artificial intelligence-based business applications. In the past, customers have implemented artificial intelligence scenarios, such as in the insurance sector. However, these models were controlled by obscure infrastructure that could only be accessed by a select few data science specialists. As a result, the outcomes were seldom used, adoption rates were low, and the potential of artificial intelligence remained untapped. Consequently, designing intelligent systems with ease of consumption in mind is essential. Specifically, artificial intelligence requires additional visualization features on the user interface, like illustrating confidence intervals or forecasting graphs. Therefore, incorporating artificial intelligence capabilities into user interfaces necessitates the inclusion of additional UI components.

**【译文】** 我们的目标是在正确的时间、正确的地点将推理结果传递给正确的人（即“内置人工智能”）。理想情况下，用户甚至不应该意识到某个功能是否依赖于人工智能。ERP用户通常是业务专业人士，对数据科学和统计技术的了解有限。因此，隐藏底层的数学原理，并将推理结果转化为ERP用户熟悉的业务语言，对于基于人工智能的业务应用的有效利用和采用至关重要。过去，客户曾实施过人工智能场景（例如在保险行业），但这些模型往往由晦涩难懂的基础设施控制，只有极少数数据科学专家才能访问。结果，这些成果很少被使用，采用率很低，人工智能的潜力未能得到开发。因此，设计智能系统时必须考虑到“易用性”。具体而言，人工智能需要在用户界面上增加额外的可视化功能，例如展示置信区间或预测图表。因此，将人工智能能力整合到用户界面中，必然需要包含额外的UI组件。

---

In the subsequent sections, we will delve deeper into embedded and side-by-side artificial intelligence architecture. The emphasis here is on the development architecture, as the data science tasks have already been discussed in earlier sections.

**【译文】** 在接下来的章节中，我们将深入探讨“嵌入式”和“并行”人工智能架构。这里的重点是开发架构，因为数据科学任务已在前面的章节中讨论过。

---

7.3 Embedded Artificial Intelligence
1. Leveraging the artificial intelligence runtime and libraries offered by the database system
2. Using views as a component of the core data model to access training data and consume inference outcomes.

**【译文】** 7.3 嵌入式人工智能
1. 利用数据库系统提供的人工智能运行时和库
2. 使用视图作为核心数据模型的组件，以访问训练数据并使用推理结果。

---

