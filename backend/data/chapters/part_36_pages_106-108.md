# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第36部分

**原始页码**: 106 - 108
**段落数量**: 14
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 105-105 (2781 字符)
- **后文上下文页码**: 109-109 (3309 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Calculation View' 翻译为 '计算视图'，'Flowgraphs' 翻译为 '流程图'，均为 SAP 官方标准中文术语。
2. 'Stories' 在 SAP Analytics Cloud 上下文中翻译为 '故事'。
3. 第一段为承接上一页被截断的句子，已根据前文上下文补全语义，使其通顺。

---

multiple diverse data sources that need to be merged and managed in SAP HANA, with an R Server, or directly in a Python environment. It also supports data orchestration to external artificial intelligence environments. When advanced hardware resources like GPUs or intricate orchestration of workflow steps are required, SAP AI Core is the recommended solution for managing and controlling training and serving workflows in a scalable AI runtime. It is designed for AI engineers with strong coding skills and a need for flexibility.

**【译文】** （接上文）……涉及多种不同数据源的情况，这些数据源需要在 SAP HANA、R Server 或直接在 Python 环境中进行合并与管理。它还支持向外部人工智能环境进行数据编排。当需要 GPU 等高级硬件资源或复杂的工作流步骤编排时，推荐使用 SAP AI Core，它是一个可扩展的 AI 运行时环境，用于管理和控制训练及服务工作流。它是专为具备较强编码能力且需要灵活性的 AI 工程师设计的。

---

SAP AI Core aims to operate scalable, cost-effective, and customizable artificial intelligence models while maintaining privacy and compliance. It ensures the high level of scalability for every artificial intelligence scenario through auto-scaling, scale-to-zero, multi-model serving, and a broad array of resource types, including GPU support. Focusing on life cycle management, SAP AI Core collects various metrics, primarily by integrating with the AI API for life cycle handling, which reduces the time to value for artificial intelligence applications designed for SAP systems.

**【译文】** SAP AI Core 旨在运行可扩展、具有成本效益且可定制的人工智能模型，同时保持隐私合规。通过自动伸缩、缩容到零（scale-to-zero）、多模型服务以及包括 GPU 支持在内的广泛资源类型，它确保了每种人工智能场景的高可扩展性。SAP AI Core 专注于生命周期管理，主要通过与 AI API 集成来处理生命周期并收集各种指标，从而缩短了针对 SAP 系统设计的人工智能应用的价值实现时间。

---

For analytical and business users, SAP Analytics Cloud offers built-in predictive capabilities with a simple user interface. Its prediction engine is constructed using the APL library from SAP HANA. Live datasets can be created on top of SAP HANA on-premises systems, and data can be collected from multiple source systems. Forecasts made using SAP Analytics Cloud’s predictive capabilities are typically consumed through SAP Analytics Cloud stories.

**【译文】** 对于分析人员和业务用户，SAP Analytics Cloud 通过简洁的用户界面提供了内置的预测功能。其预测引擎是基于 SAP HANA 的自动化预测库（APL）构建的。实时数据集可以在 SAP HANA 本地系统之上创建，并且可以从多个源系统收集数据。使用 SAP Analytics Cloud 预测功能生成的预测通常通过 SAP Analytics Cloud 故事（Stories）进行消费。

---

SAP AI Business Services provide strategic machine learning capabilities that enhance customer experiences by automating and optimizing business operations. These services and applications are available as reusable, generic offerings that can be immediately utilized. Most of these services use SAP AI Core as the underlying artificial intelligence environment. SAP AI Launchpad serves as a centralized tool for managing the life cycle of artificial intelligence models, deployments, and other operations-related information across all deployment scenarios and landscapes. It also allows users to manage supporting AI runtimes like SAP AI Core, SAP HANA, and SAP Data Intelligence. SAP AI Launchpad becomes the standardized user interface for managing and operating any artificial intelligence use cases provided by SAP or custom-developed, due to the centrally regulated AI API for life cycle management. Based on the AI API abstraction, third-party artificial intelligence offerings can also be utilized for implementing artificial intelligence applications.

**【译文】** SAP AI Business Services 提供了战略性的机器学习功能，通过自动化和优化业务运营来增强客户体验。这些服务和应用程序作为可重用的通用产品提供，可立即使用。大多数此类服务都使用 SAP AI Core 作为底层人工智能环境。SAP AI Launchpad 作为一个集中化工具，用于管理跨所有部署场景和环境的人工智能模型的生命周期、部署以及其他运维相关信息。它还允许用户管理支持性的 AI 运行时，如 SAP AI Core、SAP HANA 和 SAP Data Intelligence。由于采用集中管理的 AI API 进行生命周期管理，SAP AI Launchpad 成为了管理和操作任何由 SAP 提供或自定义开发的人工智能用例的标准化用户界面。基于 AI API 的抽象层，第三方人工智能产品也可用于实现人工智能应用。

---

In the next sections, the mentioned artificial intelligence technologies are explained using the five phases of data science process described in the last chapter.

**【译文】** 在接下来的章节中，我们将使用上一章描述的数据科学流程的五个阶段来解释上述人工智能技术。

---

5.2 Data Preparation
5.2.1 SAP HANA
To create artificial intelligence models based on relational data, SAP HANA offers a comprehensive suite of tools. There are four primary tools for data preparation:
1. Crafting standard SQL scripts and SAP HANA data modeling
2. Utilizing the internal functions of the Predictive Analysis Library (PAL)
3. Using the default features of the Automated Predictive Library (APL)
4. Leveraging the SAP HANA Machine Learning Python and R client

**【译文】** 5.2 数据准备
5.2.1 SAP HANA
为了创建基于关系型数据的人工智能模型，SAP HANA 提供了一套全面的工具套件。数据准备主要有四种工具：
1. 编写标准 SQL 脚本和 SAP HANA 数据建模
2. 利用预测分析库（PAL）的内部函数
3. 使用自动化预测库（APL）的默认功能
4. 利用 SAP HANA 机器学习 Python 和 R 客户端

---

SAP HANA’s multi-model database enables artificial intelligence scenarios to take advantage of its diverse features. Both Calculation View and Smart Data Integration Flowgraphs play a vital role in SAP HANA data modeling, offering the flexibility of pure SQL and SQL Script data manipulation. Calculation Views enable common analytical model operations on relational tables, such as joins, unions, selections, and complex calculations using SQL Script Table Functions. These views serve as transparent data structures, facilitating real-time access to live data from complex virtual data models without storing any data. In contrast, data integration Flowgraphs support SQL operation-based data flow modeling, including custom logic implementation through SQL script procedures.

**【译文】** SAP HANA 的多模型数据库使得人工智能场景能够利用其多样化的特性。计算视图（Calculation View）和智能数据集成流程图（Smart Data Integration Flowgraphs）在 SAP HANA 数据建模中起着至关重要的作用，提供了纯 SQL 和 SQL 脚本数据操作的灵活性。计算视图支持对关系表进行常见的分析模型操作，例如联接（joins）、联合（unions）、选择（selections），以及使用 SQL 脚本表函数进行复杂计算。这些视图充当透明的数据结构，有助于从复杂的虚拟数据模型实时访问实时数据，而无需存储任何数据。相比之下，数据集成流程图支持基于 SQL 操作的数据流建模，包括通过 SQL 脚本过程实现的自定义逻辑。

---

Although both Calculation Views and Flowgraphs are useful for general data preparation, they were not specifically designed for tasks like normalization, imputation, dimensionality reduction, or imbalance handling. SAP HANA’s AI libraries excel at addressing these specialized tasks. The Predictive Analysis Library (PAL) caters to data science experts, providing optimal performance and dedicated algorithm parameterization, while the Automated Predictive Library (APL) targets business analysts and developers with limited data science experience. APL’s focus on automation allows it to handle common data issues like skewness, missing values, or value level differences without user intervention. Conversely, PAL offers an extensive toolkit for tackling various data pre-processing challenges, with its reference guide detailing the available tools.

**【译文】** 虽然计算视图和流程图对一般的数据准备很有用，但它们并非专门为归一化、插补、降维或不平衡处理等任务而设计。SAP HANA 的 AI 库擅长解决这些专门的任务。预测分析库（PAL）面向数据科学专家，提供最佳性能和专门的算法参数化；而自动化预测库（APL）则面向数据科学经验有限的业务分析师和开发人员。APL 侧重于自动化，使其能够在无需用户干预的情况下处理常见的数据问题，如偏斜、缺失值或值级差异。相反，PAL 提供了一个广泛的工具包来应对各种数据预处理挑战，其参考指南详细介绍了可用工具。

---

The methods discussed so far require direct interaction with the SAP HANA database and the necessary expertise to utilize them. Recognizing the widespread use of R and Python in data science, SAP HANA provides native machine learning client libraries for these languages. The R and Python client packages allow data scientists to work in their preferred environment, similar to using any popular open-source library, while delegating all operations to a remote SAP HANA instance without data movement or the need for powerful data science workstations. This has two implications for data preparation. Firstly, all SAP HANA AI library functions are accessible via the Python and R clients. Secondly, the libraries offer common data manipulation capabilities akin to the DataFrame features of the respective languages. Although it may seem like working with a native DataFrame in R or Python, all operations are translated into SQL statements executed on the database, without necessarily transferring data to the client. Depending on the intended operationalization scenario, the relevant generated SQL statements can be captured and integrated into database SQL Script or data model artifacts.

**【译文】** 到目前为止讨论的方法需要直接与 SAP HANA 数据库交互，并具备使用它们所需的专业知识。鉴于 R 和 Python 在数据科学中的广泛使用，SAP HANA 为这些语言提供了原生机器学习客户端库。R 和 Python 客户端包允许数据科学家在他们首选的环境中工作，类似于使用任何流行的开源库，同时将所有操作委托给远程 SAP HANA 实例，无需移动数据或需要强大的数据科学工作站。这对数据准备有两层含义。首先，所有 SAP HANA AI 库函数都可以通过 Python 和 R 客户端访问。其次，这些库提供了类似于各自语言中 DataFrame 特性的通用数据操作能力。虽然看起来像是在 R 或 Python 中处理原生 DataFrame，但所有操作都会转换为在数据库上执行的 SQL 语句，而不必将数据传输到客户端。根据预期的操作化场景，可以捕获相关的生成 SQL 语句并将其集成到数据库 SQL 脚本或数据模型工件中。

---

In summary, using SAP HANA for artificial intelligence projects provides access to a powerful, enterprise-grade in-memory database with a wide array of tools and options for data preparation and manipulation. The specialized machine learning libraries offer additional features for artificial intelligence-specific planning tasks. For structured, tabular projects that require live data access and involve large data sets, consider incorporating embedded machine learning in SAP HANA.

**【译文】** 总之，使用 SAP HANA 进行人工智能项目可以获得一个强大的、企业级的内存数据库，其中包含用于数据准备和操作的各种工具和选项。专门的机器学习库为人工智能特定的规划任务提供了额外的功能。对于需要实时数据访问并涉及大型数据集的结构化、表格化项目，请考虑结合使用 SAP HANA 中的嵌入式机器学习。

---

5.2.2 SAP Data Intelligence
SAP Data Intelligence, the company’s cloud data management solution, addresses data cataloging, data quality, and various intricate orchestration scenarios. Artificial intelligence teams often face several challenges during the data preparation stage, such as:
• Identifying available information for use
• Assessing the reliability of the data
• Organizing and formatting data for model creation
• Adjusting data for feature creation or extraction during training

**【译文】** 5.2.2 SAP Data Intelligence
SAP Data Intelligence 是该公司的云数据管理解决方案，解决了数据编目、数据质量和各种复杂的编排场景。人工智能团队在数据准备阶段经常面临若干挑战，例如：
• 识别可用的信息以供使用
• 评估数据的可靠性
• 组织和格式化数据以用于模型创建
• 在训练期间调整数据以进行特征创建或提取

---

If all data is structured (tabular) and already exists within an SAP solution like SAP HANA or SAP Data Warehouse Cloud, the built-in features of SAP HANA (mentioned earlier) may suffice. However, teams often need information scattered across the organization in different locations. These situations may involve a mix of unstructured data (e.g., images, documents), streaming data (e.g., IoT data, weblogs), cloud application data, and traditional relational data, which could be stored in SAP HANA. SAP Data Intelligence proves useful in these cases, as it can integrate various data types and allow end users to model pipelines that channel this data to the desired endpoint for training data. While processing, SAP Data Intelligence can transform and clean up the data. Each pipeline is reusable, scalable, and features a graphical modeling interface with numerous operators for low-code pipelining. Additional capabilities that aid data preparation include defining data quality rules applicable to data sets, generating a historical profile of quality in each data set over time, and indexing all connected data sources for end users to search across data using a free-form search.

**【译文】** 如果所有数据都是结构化的（表格形式）并且已经存在于 SAP 解决方案（如 SAP HANA 或 SAP Data Warehouse Cloud）中，那么 SAP HANA 的内置功能（如前所述）可能就足够了。然而，团队经常需要信息分散在组织内不同位置的数据。这些情况可能涉及非结构化数据（例如图像、文档）、流数据（例如物联网数据、Web 日志）、云应用程序数据以及存储在 SAP HANA 中的传统关系数据的混合。SAP Data Intelligence 在这些情况下非常有用，因为它可以集成各种数据类型，并允许最终用户对管道进行建模，将这些数据引导至所需的端点作为训练数据。在处理过程中，SAP Data Intelligence 可以转换和清理数据。每个管道都是可重用的、可扩展的，并具有一个带有众多操作符的图形化建模界面，用于低代码管道构建。辅助数据准备的其他功能包括定义适用于数据集的数据质量规则，生成每个数据集随时间变化的质量历史概况，以及索引所有连接的数据源以便最终用户使用自由格式搜索跨数据进行搜索。

---

In summary, SAP Data Intelligence is recommended for moving, cleaning, and transforming data when the application data for a use case is not centrally located in SAP HANA or is unstructured in nature.

**【译文】** 总之，当用例的应用程序数据未集中位于 SAP HANA 中或本质上是非结构化数据时，建议使用 SAP Data Intelligence 来移动、清理和转换数据。

---

5.2.3 SAP AI Core
Argo Workflows, an open-source container-native workflow engine designed for orchestrating parallel tasks directly on Kubernetes, provides a comprehensive set of features through SAP AI Core. Argo can be likened to a machine that manages and nourishes a Kubernetes cluster. With SAP AI Core, it becomes effortless to define, schedule, and coordinate intricate workflows and applications on Kubernetes. SAP AI Core boasts numerous capabilities, including:
• Handling complex tasks with a combination of parallel and sequential steps and dependencies
• Managing Kubernetes cluster deployments for sophisticated, distributed applications

**【译文】** 5.2.3 SAP AI Core
Argo Workflows 是一个开源的容器原生工作流引擎，专为在 Kubernetes 上直接编排并行任务而设计，它通过 SAP AI Core 提供了一套全面的功能。Argo 可以被比作一台管理和滋养 Kubernetes 集群的机器。借助 SAP AI Core，在 Kubernetes 上定义、调度和协调复杂的工作流和应用程序变得毫不费力。SAP AI Core 拥有众多功能，包括：
• 处理包含并行和顺序步骤及依赖关系的复杂任务
• 管理复杂分布式应用程序的 Kubernetes 集群部署

---

