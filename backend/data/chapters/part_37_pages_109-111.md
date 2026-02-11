# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第37部分

**原始页码**: 109 - 111
**段落数量**: 14
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 108-108 (2614 字符)
- **后文上下文页码**: 112-112 (3155 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Hyperscaler: 译为'超大规模云平台'或'超大规模云厂商'，指AWS、Azure等大型云服务商。 2. Pod: 保留英文，Kubernetes中的基本执行单元。 3. Citizen data scientists: 译为'公民数据科学家'，指非专业出身但能使用工具进行分析的业务人员。 4. Stories: 译为'故事'，SAP Analytics Cloud中的术语，指可视化报表或仪表板。 5. Planning-enabled models: 译为'启用规划功能的模型'或'规划模型'。 6. APL/PAL: 保留缩写，分别为Automated Predictive Library和Predictive Analysis Library。

---

•	 Establishing policies for time-based workflow execution

**【译文】** •	 建立基于时间的建立工作流执行策略

---

In SAP AI Core, each task is executed in a pod, simplifying the process of performing multiple tasks simultaneously. The generic workflow engine offers a high degree of flexibility for implementing most data preparation and integration pipelines. Various Argo Software Development Kits (SDKs) are available, enabling the programmatic definition of SAP AI Core compliant workflows, such as those in Python. SAP AI Core is specifically tailored for the AI Engineer persona, who possesses extensive coding skills and requires the highest level of flexibility. This persona also necessitates enterprise-grade security and governance for SAP AI Core. We have full control over the hyperscaler on which SAP AI Core will be installed, and we can connect to any hyperscaler object storage (AWS, Alibaba Cloud, Azure, GCP) as well as SAP HANA Data Lake files. It is ensured that raw and processed data does not leave specific geographic regions or even particular hyperscalers, especially when adhering to stringent security standards. Utilizing SAP HANA and SAP Data Intelligence in an enterprise setting and transferring application data to an object store accessible by SAP AI Core is a logical choice, as these solutions offer a wide array of data preparation and management options with a user interface. However, SAP AI Core is the optimal choice if the artificial intelligence solution must be deployed in a scalable, programmatic, and flexible manner, operating autonomously without relying on centrally managed or governed data.

**【译文】** 在 SAP AI Core 中，每个任务都在一个 Pod 中执行，这简化了同时执行多个任务的流程。其通用工作流引擎为实施大多数数据准备和集成流水线提供了高度的灵活性。系统提供了多种 Argo 软件开发工具包（SDK），支持通过编程定义符合 SAP AI Core 标准的工作流（例如使用 Python）。SAP AI Core 专为 AI 工程师这一角色量身定制，他们通常拥有丰富的编码技能，并需要最高级别的灵活性。该角色还需要 SAP AI Core 提供企业级的安全性和治理能力。我们可以完全控制安装 SAP AI Core 的底层超大规模云平台（Hyperscaler），并连接到任何超大规模云厂商的对象存储（AWS、阿里云、Azure、GCP）以及 SAP HANA 数据湖文件。这确保了原始数据和处理后的数据不会离开特定的地理区域，甚至特定的云厂商，特别是在需要遵守严格的安全标准时。在企业环境中利用 SAP HANA 和 SAP Data Intelligence，并将应用数据传输到 SAP AI Core 可访问的对象存储中，是一个合乎逻辑的选择，因为这些解决方案通过用户界面提供了广泛的数据准备和管理选项。然而，如果人工智能解决方案必须以可扩展、可编程且灵活的方式部署，并且需要自主运行而不依赖于集中管理或治理的数据，那么 SAP AI Core 是最佳选择。

---

In summary, use SAP HANA or SAP Data Intelligence for central data management solutions. These tools can load data into a persistent store for SAP AI Core to access. If the objective is a stand-alone artificial intelligence solution with intricate tasks, dependencies, and GPU support, the data preparation features of SAP AI Core present an advantageous alternative.

**【译文】** 总之，建议使用 SAP HANA 或 SAP Data Intelligence 作为中央数据管理解决方案。这些工具可以将数据加载到持久化存储中，供 SAP AI Core 访问。如果目标是构建一个包含复杂任务、依赖关系且支持 GPU 的独立人工智能解决方案，那么 SAP AI Core 的数据准备功能是一个有利的替代方案。

---

5.2.4	 SAP Analytics Cloud

**【译文】** 5.2.4	 SAP Analytics Cloud

---

In SAP Analytics Cloud, predictive scenarios are supported by two types of data models: datasets and planning-enabled models. Datasets can contain information from various sources and can be obtained from different source systems. In this case, the source data is replicated in SAP Analytics Cloud. SAP HANA on-premises systems can facilitate the creation of live datasets, which are equivalent to SQL views and SAP HANA table data. Here, the source data is not replicated in SAP Analytics Cloud but remains entirely in SAP HANA. Classification, regression, and time series forecasting models can utilize datasets as their data sources, whether they are replicated or real-time data. The end-to-end data flow when using datasets involves gathering data from source systems, building predictive scenarios with datasets, and providing predictions as datasets for use in stories. SAP Analytics Cloud features two categories of models: planning models for planning purposes and analytic models primarily used for reporting purposes. Both account-based and measure-based structures can be employed to create models. Time series forecasting models can be derived from planning-enabled models, which can receive data from various sources.

**【译文】** 在 SAP Analytics Cloud 中，预测场景由两种类型的数据模型支持：数据集（Datasets）和启用规划功能的模型（Planning-enabled models）。数据集可以包含来自各种来源的信息，并可从不同的源系统中获取。在这种情况下，源数据会被复制到 SAP Analytics Cloud 中。SAP HANA 本地系统支持创建实时数据集，这相当于 SQL 视图和 SAP HANA 表数据。此时，源数据不会复制到 SAP Analytics Cloud 中，而是完全保留在 SAP HANA 中。分类、回归和时间序列预测模型可以使用数据集作为数据源，无论是复制数据还是实时数据。使用数据集时的端到端数据流包括：从源系统收集数据，使用数据集构建预测场景，并将预测结果作为数据集提供给故事（Stories）使用。SAP Analytics Cloud 包含两类模型：用于规划目的的规划模型，以及主要用于报告目的的分析模型。可以使用基于账户（Account-based）和基于度量（Measure-based）的结构来创建模型。时间序列预测模型可以从启用规划功能的模型中派生，这些模型可以接收来自各种来源的数据。

---

The end-to-end data flow when using planning models includes integrating source system data, delivering predictive forecasts, building predictive scenarios, consuming predictive forecasts in stories, and exporting predictive forecasts to source systems if needed. In the context of different data models (datasets and planning models) and stories, SAP Analytics Cloud provides light-weight data preparation and blending. These capabilities can support simple time series forecasting models but may not be advanced enough to handle the data preparation requirements for classification and regression models. In such cases, SAP Analytics Cloud may need to be used alongside another platform, like SAP Data Intelligence, to manage complex tasks related to feature generation and selecting appropriate observations for input and target variables. SAP Analytics Cloud’s focus on citizen data scientists and business users ensures that algorithm hyper-parameterization and data prerequisites are automatically managed in predictive scenarios, making it inaccessible to end users. This approach allows end users to focus on gathering data and conducting data experiments to enhance predictive models.

**【译文】** 使用规划模型时的端到端数据流包括：集成源系统数据、提供预测性预报、构建预测场景、在故事中使用预测性预报，以及在需要时将预测性预报导出到源系统。在不同数据模型（数据集和规划模型）和故事的背景下，SAP Analytics Cloud 提供了轻量级的数据准备和混合功能。这些功能可以支持简单的时间序列预测模型，但对于处理分类和回归模型的数据准备需求来说，可能不够先进。在这种情况下，SAP Analytics Cloud 可能需要与另一个平台（如 SAP Data Intelligence）配合使用，以管理与特征生成以及为输入和目标变量选择适当观测值相关的复杂任务。SAP Analytics Cloud 专注于公民数据科学家和业务用户，确保算法超参数化和数据先决条件在预测场景中自动管理，终端用户无需接触这些细节。这种方法使终端用户能够专注于收集数据和进行数据实验，以增强预测模型。

---

In summary, SAP Analytics Cloud’s data preparation capabilities are specifically designed to generate datasets and planning-enabled models for use in predictive scenarios. The measure-based planning model serves as the reference data model for SAP Analytics Cloud.

**【译文】** 总之，SAP Analytics Cloud 的数据准备功能专门设计用于生成数据集和启用规划功能的模型，以用于预测场景。基于度量的规划模型是 SAP Analytics Cloud 的参考数据模型。

---

5.3	 Modeling

**【译文】** 5.3	 建模

---

5.3.1	 SAP HANA

**【译文】** 5.3.1	 SAP HANA

---

The APL and PAL libraries within SAP HANA are designed to work with training inputs in a relational format, as they are database-embedded AI engines. These libraries can handle various data structures, such as Calculation Views, SQL Views, Table Functions, persisted tables, federated remote data sources from other SAP HANA databases, or even third-party data sources. SQLScript serves as the native scripting interface for preprocessing, and to facilitate usage by data scientists, all methods have been wrapped in Python and R libraries. Consequently, these methods can be called from any Python or R environment and executed remotely in the SAP HANA dataset instance without requiring data transfer. Both PAL and APL support a wide range of common artificial intelligence scenarios, offering assistance for link prediction, recommender systems, cluster analysis, regression, time series forecasting, and association analysis. Additionally, PAL provides specific algorithms for outlier detection use cases. As the more advanced library, PAL includes a unified interface for classification and regression scenarios, enabling easy implementation of various algorithms using the same procedure interface without needing modifications at the application integration level. The algorithms also support automated hyperparameter search and model evaluation during training, as well as a dedicated comparison feature to automatically compare different algorithms for an expanding range of algorithms.

**【译文】** SAP HANA 中的 APL（自动预测库）和 PAL（预测分析库）旨在处理关系格式的训练输入，因为它们是数据库嵌入式 AI 引擎。这些库可以处理各种数据结构，如计算视图（Calculation Views）、SQL 视图、表函数（Table Functions）、持久化表、来自其他 SAP HANA 数据库的联合远程数据源，甚至第三方数据源。SQLScript 作为预处理的原生脚本接口，为了方便数据科学家使用，所有方法都已封装在 Python 和 R 库中。因此，可以从任何 Python 或 R 环境调用这些方法，并在 SAP HANA 数据集实例中远程执行，而无需传输数据。PAL 和 APL 都支持广泛的常见人工智能场景，为链路预测、推荐系统、聚类分析、回归、时间序列预测和关联分析提供支持。此外，PAL 还为异常检测用例提供了特定的算法。作为更高级的库，PAL 包含用于分类和回归场景的统一接口，无需在应用集成层面进行修改，即可使用相同的过程接口轻松实现各种算法。这些算法还支持训练期间的自动超参数搜索和模型评估，以及专门的比较功能，可自动比较不断扩展的算法范围内的不同算法。

---

Recently, PAL in SAP HANA Cloud introduced algorithm pipelining and an AutoML engine for classification, regression, and time series forecasting scenarios, aiding data scientists in developing the best possible machine learning models. APL, on the other hand, focuses on automating workflows. When artificial intelligence models need to be segmented by specific sub-groups in the data (e.g., regions, locations, or times), PAL leverages SAP HANA’s parallelization capabilities to enable automatic parallel training of the required models, delivering optimal performance while creating thousands of models simultaneously. SAP Integrated Business Planning is an example of an SAP application that utilizes this feature. Moreover, the Python machine learning client supports the creation of function pipelines, allowing for the stacking of multiple artificial intelligence method calls into complex scenarios. SAP HANA provides workload management capabilities to regulate system resources allocated to artificial intelligence training workloads, while algorithm libraries offer multi-threading options to accelerate training processes. SAP HANA Cloud also presents new scalability and elasticity options to efficiently scale system resources for artificial intelligence workloads in both pure cloud and hybrid on-premises/cloud scenarios.

**【译文】** 最近，SAP HANA Cloud 中的 PAL 引入了算法流水线和用于分类、回归及时间序列预测场景的 AutoML 引擎，帮助数据科学家开发尽可能好的机器学习模型。另一方面，APL 专注于工作流自动化。当人工智能模型需要按数据中的特定子组（例如区域、位置或时间）进行细分时，PAL 利用 SAP HANA 的并行化能力，实现所需模型的自动并行训练，在同时创建数千个模型的同时提供最佳性能。SAP 集成业务规划（SAP IBP）就是利用此功能的 SAP 应用程序示例。此外，Python 机器学习客户端支持创建函数流水线，允许将多个人工智能方法调用堆叠成复杂的场景。SAP HANA 提供工作负载管理功能，以调节分配给人工智能训练工作负载的系统资源，而算法库则提供多线程选项以加速训练过程。SAP HANA Cloud 还提供了新的可扩展性和弹性选项，以便在纯云和混合本地/云场景中有效地扩展人工智能工作负载的系统资源。

---

In summary, any artificial intelligence initiative based on structured, tabular data can take advantage of the comprehensive toolkit offered by SAP HANA’s embedded machine learning. The two specialized libraries, APL and PAL, provide a simple yet effective entry point into the artificial intelligence domain for various target audiences. Python or R interfaces are the preferred means of interacting with these libraries to facilitate adoption and integration.

**【译文】** 总之，任何基于结构化表格数据的人工智能计划都可以利用 SAP HANA 嵌入式机器学习提供的综合工具包。APL 和 PAL 这两个专门的库为各种目标受众进入人工智能领域提供了一个简单而有效的切入点。Python 或 R 接口是与这些库交互的首选方式，以促进采用和集成。

---

5.3.2	 SAP Data Intelligence

**【译文】** 5.3.2	 SAP Data Intelligence

---

The SAP HANA APL and PAL engines, as mentioned earlier, are supported by SAP Data Intelligence as part of its modeling engine, which also offers the ability to script in R and Python. To provide Python users with a user-friendly Integrated Development Environment (IDE) for model development and training, the solution incorporates a JupyterLab notebook. The ML Scenario Manager offers a single location within the solution to monitor all artifacts related to a specific use case, including pipelines, data sets, notebooks, and training runs. Furthermore, the pipeline modeling user interface contains native operators for SAP HANA ML, R, and Python. SAP HANA ML users can access a low-code interface that enables them to utilize any of the APL and PAL engines’ functions without needing to write SQL scripts. It is also possible to integrate open-source R, Python, ABAP, Node.js, and C# programming languages with SAP HANA ML in a single pipeline. This allows for more comprehensive training, which can now include creating end-to-end pipelines necessary for taking data from its original source, training a model (or using an existing model as part of a pipeline), and connecting the results to the locations where the scored data needs to be sent. It is essential to note that model training occurs on the standard SAP Data Intelligence node, which does not utilize GPUs. For situations requiring GPU support, such as deep learning scenarios that need to be completed quickly, SAP AI Core is recommended. If the GPU train/serve

**【译文】** 如前所述，SAP Data Intelligence 作为其建模引擎的一部分，支持 SAP HANA 的 APL 和 PAL 引擎，同时也提供 R 和 Python 的脚本编写能力。为了给 Python 用户提供一个用于模型开发和训练的用户友好型集成开发环境（IDE），该解决方案内置了 JupyterLab 笔记本。机器学习场景管理器（ML Scenario Manager）在解决方案中提供了一个单一位置，用于监控与特定用例相关的所有工件，包括流水线、数据集、笔记本和训练运行。此外，流水线建模用户界面包含用于 SAP HANA ML、R 和 Python 的原生算子。SAP HANA ML 用户可以访问一个低代码接口，使他们能够使用 APL 和 PAL 引擎的任何功能，而无需编写 SQL 脚本。也可以在单个流水线中将开源 R、Python、ABAP、Node.js 和 C# 编程语言与 SAP HANA ML 集成。这允许进行更全面的训练，现在可以包括创建端到端流水线，这些流水线对于从原始源获取数据、训练模型（或作为流水线的一部分使用现有模型）以及将结果连接到评分数据需要发送的位置至关重要。必须注意的是，模型训练发生在标准的 SAP Data Intelligence 节点上，该节点不使用 GPU。对于需要 GPU 支持的情况，例如需要快速完成的深度学习场景，建议使用 SAP AI Core。如果 GPU 训练/服务环境具备必要的 API 端点，SAP Data Intelligence 仍然可用于将数据通过流水线传输到外部训练或服务环境（如 SAP AI Core），并将评分后的数据引导至最终目的地。

---

