# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第46部分

**原始页码**: 136 - 138
**段落数量**: 13
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 135-135 (2482 字符)
- **后文上下文页码**: 139-139 (2040 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Ranking vs Rating: 译文中严格区分了'排名'(Ranking)和'评分'(Rating)，前者侧重于比较和排序，后者侧重于打分。
2. Categorization vs Classification: Categorization作为宏观的'归类'模式，包含了Classification(分类)和Clustering(聚类)两种具体技术手段。
3. TCD/TCO: 保留了业界通用的缩写，分别译为总开发成本和总拥有成本。

---

recommendation, the required historical data might be obtained from application data. For the input assistance recommendation type, additional texts or descriptions may be necessary. Commonly used algorithms for recommendation patterns include social analysis, multiclass classification algorithms like XGBoost or multilayer perceptron, text analysis or mining, and recurrent neural networks (RNNs).

**【译文】** （接上文内容推荐）……所需的历史数据可以从应用数据中获取。对于输入辅助型推荐，可能需要额外的文本或描述信息。实现推荐模式的常用算法包括社交分析、XGBoost或多层感知机（Multilayer Perceptron）等多类分类算法、文本分析或挖掘，以及循环神经网络（RNN）。

---

6.2.3 Ranking
Ranking serves to differentiate between more relevant and less relevant datasets of the same kind, depending on the current context. For instance, when purchasing, we want to identify the top suppliers for a specific product within the context of a par­ticular purchasing request. By presenting the best choices first, ranking simplifies intricate decisions for business users. Items within a group are ranked by comparing criteria pertinent to the user’s business context, such as quantity, priority, or score. In a ranked table or list, the results are always sorted to display the highest-ranked items at the top. We distinguish between two types of ranking:

**【译文】** 6.2.3 排名 (Ranking)

排名的作用是根据当前上下文，区分同类数据集中相关度较高和较低的数据。例如，在采购时，我们希望在特定采购需求的背景下，识别出某产品的顶级供应商。通过优先展示最佳选项，排名能够简化业务用户复杂的决策过程。组内的项目会根据与用户业务场景相关的标准（如数量、优先级或得分）进行比较和排名。在排名列表或表格中，结果总是经过排序的，以便将排名最高的项目显示在顶部。我们将排名分为两类：

---

1. Ranking by inherent value
This type of ranking relies on a value already present in the existing dataset, like the price. Users typically know and understand this value, so no further explana­tion is needed.

**【译文】** 1. 按固有价值排名
这种排名依赖于现有数据集中已存在的数值，例如价格。用户通常了解并理解该数值，因此无需进一步解释。

---

2. Ranking by score
This ranking method is based on a computed grade, mark, or score. Users may need to comprehend the calculation behind the score, particularly if artificial intelligence techniques are employed.

**【译文】** 2. 按得分排名
这种排名方法基于计算出的等级、分数或得分。用户可能需要理解得分背后的计算逻辑，特别是当使用了人工智能技术时。

---

While we can rank a list of items according to their rating, it is important to note that ranking and rating are distinct concepts. A rating positions a single item on a pre-established scale, such as rating a service provider on a scale of 1 (very bad) to 5 (very good). Ranking, on the other hand, always involves comparing a common value across a group of items. In the user interface, rankings are typically displayed for a list or group. To develop relevance and ranking patterns, popular algorithms include classification algorithms like XGBoost, clustering algorithms like K-means or the Gaussian mixture model, and nonparametric methods like the k-nearest neighbors’ algorithm.

**【译文】** 虽然我们可以根据评分（Rating）对项目列表进行排名，但必须注意排名（Ranking）和评分是两个截然不同的概念。评分是将单个项目定位在预设的标度上，例如将服务提供商评为1分（非常差）到5分（非常好）。而排名则总是涉及对一组项目中的共同值进行比较。在用户界面中，排名通常用于展示列表或群组。为了开发相关性和排名模式，常用的算法包括XGBoost等分类算法、K-means（K均值）或高斯混合模型（Gaussian Mixture Model）等聚类算法，以及K近邻（KNN）算法等非参数方法。

---

6.2.4 Prediction
Predictive models utilize historical data to anticipate future trends and outcomes by identifying patterns and considering all relevant information. For instance, as a mas­ter data manager, we may want to determine the number of change requests a team will need to handle in the upcoming quarter to optimize workload distribution. Intelligent systems employing predictive models substantially lower the expenses associated with forecasting business results, environmental influences, competitive insights, and market conditions.

**【译文】** 6.2.4 预测 (Prediction)

预测模型通过识别模式并综合考虑所有相关信息，利用历史数据来预见未来的趋势和结果。例如，作为主数据管理者，我们可能希望确定团队在下一季度需要处理的变更请求数量，以优化工作负载分配。采用预测模型的智能系统能够显著降低预测业务结果、环境影响、竞争情报和市场条件所需的成本。

---

There are two primary categories of predictive mod­els: parametric and nonparametric. A third class, semiparametric models, can be formed by merging features from both categories. Generally, parametric models involve specific assumptions regarding one or more population parameters that define the underlying distribution. In contrast, nonparametric models usually have fewer assumptions about structure and distribution but often include strong assump­tions about independencies. Various algorithms for predictive models encompass ordinary least squares, generalized linear models (GLM), logistic regression, ran­dom forests, decision trees, neural networks, and multivariate adaptive regression splines (MARS). Each algorithm serves a specific purpose, addresses a particular question, or is suited for a certain type of dataset.

**【译文】** 预测模型主要分为两类：参数模型和非参数模型。结合这两类特征还可以形成第三类——半参数模型。通常，参数模型涉及对一个或多个定义潜在分布的总体参数的特定假设。相比之下，非参数模型通常对结构和分布的假设较少，但往往包含关于独立性的强假设。用于预测模型的各类算法包括普通最小二乘法、广义线性模型（GLM）、逻辑回归、随机森林、决策树、神经网络以及多元自适应回归样条（MARS）。每种算法都有其特定用途，用于解决特定问题或适用于特定类型的数据集。

---

6.2.5 Categorization
Categorization involves allocating datasets to pre-established groups or classes. For instance, as a customer service representative, we might want to sort incoming requests by priority (high, medium, or low) based on their content to enhance cus­tomer support. Additionally, categorization can identify new groupings (clusters) within datasets, such as organizing customers into segments for tailored product offerings, targeted advertising, or fraud detection. Categorization is a complicated task where intelligent systems can boost automation levels by applying artificial intelligence techniques for classification and clustering.

**【译文】** 6.2.5 归类 (Categorization)

归类涉及将数据集分配到预先建立的组或类别中。例如，作为客户服务代表，我们可能希望根据内容将收到的请求按优先级（高、中、低）进行分类，以提升客户支持服务。此外，归类还可以识别数据集中的新分组（聚类），例如将客户分群以提供定制化产品、定向广告或进行欺诈检测。归类是一项复杂的任务，智能系统可以通过应用分类（Classification）和聚类（Clustering）等人工智能技术来提高自动化水平。

---

These methods are utilized to categorize objects into one or more classes and clusters according to their char­acteristics. Classification and clustering share similarities, but there is a subtle dis­tinction. In classification, predefined labels are assigned to each input instance based on its attributes, while clustering lacks these labels. Since classification uti­lizes labels, it necessitates training and testing datasets for model validation, which is not required for clustering. Typically, classification is more intricate than cluster­ing due to its multiple levels, while clustering only involves grouping. To create categorization patterns, frequently used algorithms encompass classification tech­niques like XGBoost, neural networks such as CNN/RNN/GAN, dimensionality reduction algorithms like principal component analysis, and clustering algorithms like K-means and the Gaussian mixture model.

**【译文】** 这些方法用于根据特征将对象归入一个或多个类别和簇群中。分类和聚类有相似之处，但也存在细微差别。在分类中，系统根据属性为每个输入实例分配预定义的标签，而聚类则没有这些标签。由于分类使用标签，它需要训练和测试数据集来进行模型验证，而聚类则不需要。通常，由于分类涉及多个层级，它比聚类更为复杂，而聚类仅涉及分组。为了创建归类模式，常用的算法包括XGBoost等分类技术、CNN/RNN/GAN等神经网络、主成分分析（PCA）等降维算法，以及K-means和高斯混合模型等聚类算法。

---

6.2.6 Conversational AI
Conversational AI facilitates interaction with systems through natural language dia­logue, promoting a hands-free approach. For instance, imagine generating a pur­chase order by conversing with a digital assistant. This ability to engage in discussions with a virtual aide to carry out business operations is a crucial aspect of the user experience in intelligent applications. Conversational AI can comprehend common natural language patterns, allowing it to search for business entities using different parameters, locate specific entities by name or ID, obtain an attribute’s value for a particular entity, and establish basic new entities, including line items.

**【译文】** 6.2.6 对话式AI (Conversational AI)

对话式AI通过自然语言对话促进与系统的交互，推动了“解放双手”的操作方式。例如，想象一下通过与数字助手交谈来生成采购订单。这种与虚拟助手对话以执行业务操作的能力，是智能应用用户体验的关键方面。对话式AI能够理解通用的自然语言模式，使其能够使用不同参数搜索业务实体、按名称或ID定位特定实体、获取特定实体的属性值，以及建立基本的新实体（包括行项目）。

---

This technology provides a more human-like user experience for applications, enabling tasks to be completed within the context of business data. As a result, natu­ral language interactions with applications are supported, and the creation of busi­ness objects with information derived from conversational contexts is guaranteed. Conversational AI also allows for the sharing of notes, screenshots, and business objects with other users during a conversation. This technology enables the synthe­sis of business transactions from multiple SAP applications at a single interaction point. Additionally, custom skills for utilizing a digital assistant can be developed and implemented across various applications and channels.

**【译文】** 这项技术为应用程序提供了更人性化的用户体验，使用户能够在业务数据上下文中完成任务。因此，它不仅支持与应用程序的自然语言交互，还确保了能够利用对话上下文中的信息创建业务对象。对话式AI还允许用户在对话过程中与他人分享笔记、截图和业务对象。该技术能够在单一交互点综合处理来自多个SAP应用程序的业务事务。此外，还可以开发定制的数字助手技能，并在各种应用程序和渠道中实施。

---

6.3 Conclusion
In this chapter, we discussed the complexities of embedding artificial intelligence into ERP systems. Identifying the ideal algorithm and model is often the primary objective in artificial intelligence projects. However, when dealing with ERP sys­tems, it is crucial to ensure various product qualities for artificial intelligence appli­cations. We outlined the ERP product qualities, such as safety, data isolation, flexibility, extensibility, innovation, performance, operations, and commercializa­tion, and illustrated their impact on artificial intelligence applications.

**【译文】** 6.3 结论

在本章中，我们讨论了将人工智能嵌入ERP系统的复杂性。在人工智能项目中，确定理想的算法和模型往往是首要目标。然而，在处理ERP系统时，确保人工智能应用具备各种产品质量属性至关重要。我们概述了ERP的产品质量属性，如安全性、数据隔离、灵活性、可扩展性、创新性、性能、运维和商业化，并阐述了它们对人工智能应用的影响。

---

Typically, 20% of the development effort in artificial intelligence-based ERP projects is allo­cated to data science, while the remaining 80% focuses on implementing the afore­mentioned qualities. The value derived from this elaboration includes identifying the significant differences between traditional and ERP-based artificial intelligence applications, determining the associated requirements, resolving them conceptually, and proposing technical implementations. In the context of ERP, it is essential to establish a consistent solution architecture and programming model for artificial intelligence applications. Thus, the development and operations of all artificial intelligence applications are harmonized, resulting in reduced Total Cost of Development (TCD) and Total Cost of Ownership (TCO). To accomplish this objec­tive and prevent heterogeneous solutions for each use case, we derived application patterns for artificial intelligence by abstracting from numerous existing scenarios. These application patterns for artificial intelligence serve as the basis for the solu­tion architecture, which will be discussed in the following chapter. Identifying those application patterns for ERP systems and deduce corresponding requirements is also an added value of this written composition.

**【译文】** 通常，在基于人工智能的ERP项目中，20%的开发工作用于数据科学，而剩余80%则专注于实现上述质量属性。这种详细阐述的价值在于：识别传统人工智能应用与基于ERP的人工智能应用之间的显著差异，确定相关需求，在概念上解决这些问题，并提出技术实现方案。在ERP语境下，为人工智能应用建立一致的解决方案架构和编程模型至关重要。这样，所有人工智能应用的开发和运维得以协调统一，从而降低总开发成本（TCD）和总拥有成本（TCO）。为了实现这一目标并防止每个用例出现异构解决方案，我们通过从大量现有场景中抽象提炼，推导出了人工智能的应用模式。这些人工智能应用模式将作为解决方案架构的基础，我们将在下一章对此进行讨论。识别ERP系统的这些应用模式并推导出相应需求，也是本书的一大附加价值。

---

