# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第50部分

**原始页码**: 148 - 150
**段落数量**: 12
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 147-147 (1630 字符)
- **后文上下文页码**: 151-151 (3414 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. **Side-by-Side Artificial Intelligence** 翻译为 '并行式人工智能'，对应 ERP 领域中与 'Embedded'（嵌入式/内嵌式）相对的扩展模式。
2. **Landscape** 翻译为 '景观'（如系统景观 System Landscape），这是 SAP/ERP 领域的标准术语，指代整个 IT 系统的拓扑结构。
3. **Breakouts** 翻译为 '扩展逻辑'，指在标准流程之外执行自定义逻辑或复杂编排的能力。
4. **Lambda** 保留原文 'Lambda架构'，指大数据处理中同时处理批处理和流处理的架构模式。
5. **Data Lineage** 翻译为 '数据血缘'，指数据来源和流向的追踪。
6. **Orchestration** 翻译为 '编排'，指协调多个系统或服务的流程。

---

supervises the entire orchestration of the described steps. This framework aims to offer a unified interface for the implementation, operation, and consumption of artificial intelligence models, regardless of the underlying technology engines. The goal is to standardize the handling of artificial intelligence models and provide a simple, common interface that enables applications to interact with various supported artificial intelligence libraries without necessitating engine-specific code development. Consumer applications only interact with APIs and avoid direct engagement with low-level artificial intelligence libraries, which facilitates also changing the underlying technology.

**【译文】** [该框架]负责监督上述步骤的整个编排过程。此框架旨在为人工智能模型的实施、运行和使用提供统一的接口，无论底层使用何种技术引擎。其目标是标准化人工智能模型的处理方式，并提供一个简单、通用的接口，使应用程序能够与各种受支持的人工智能库进行交互，而无需编写特定于引擎的代码。消费端应用程序仅与API交互，避免直接调用底层人工智能库，这也便于更换底层技术。

---

The proposed framework supplies a repository for artificial intelligence models, containing information about model types (e.g., regression, classification, time series, and deep learning), model data sources, model training data, and model quality metrics to facilitate validation and model comparison. Additionally, the framework supports the life cycle management of associated artifacts in terms of transport within the system landscape, delivery, and upgrade mechanisms. It also shall offer configuration capabilities for model training based on customer data in their development landscape.

**【译文】** 拟议的框架提供了一个人工智能模型存储库，包含有关模型类型（例如回归、分类、时间序列和深度学习）、模型数据源、模型训练数据以及模型质量指标的信息，以促进验证和模型比较。此外，该框架支持相关工件的生命周期管理，包括在系统景观内的传输、交付和升级机制。它还应提供配置能力，以便在客户的开发景观中基于客户数据进行模型训练。

---

The proposed solution architecture offers numerous beneficial qualities. It is smoothly incorporated into the ERP programming model, which minimizes the need for developer training. This also promotes the utilization of existing ERP concepts (e.g., authorization, user interface integration), core data model components, and tools. Moreover, the architecture addresses the intricate demand for extensibility from the beginning by leveraging enhancement points from the ERP programming model.

**【译文】** 拟议的解决方案架构提供了许多有益的特性。它被平滑地集成到ERP编程模型中，从而最大限度地减少了对开发人员的培训需求。这也促进了对现有ERP概念（例如权限、用户界面集成）、核心数据模型组件和工具的利用。此外，该架构通过利用ERP编程模型中的增强点，从一开始就满足了复杂的扩展性需求。

---

Breakouts, such as the orchestration of multiple algorithms or data transformations, are inherently supported. Life cycle management and operations are facilitated by the foundational ERP tools and concepts. Legal compliance is inherently achieved since no application data is transferred outside the ERP system, and the already compliant data access mechanisms of the underlying ERP are used. The rich set of algorithms in the in-memory database system can be used right away. As the proposed solution is deployment-agnostic, it is compatible with public cloud, on-premise, and privately managed installations.

**【译文】** 系统本身支持各种扩展逻辑（Breakouts），例如多个算法的编排或数据转换。生命周期管理和运维工作由基础的ERP工具和概念提供支持。由于没有应用数据传输到ERP系统之外，并且使用了底层ERP已有的合规数据访问机制，因此天生就能实现法律合规性。内存数据库系统中丰富的算法集可以直接使用。由于拟议的解决方案与部署方式无关，因此它兼容公有云、本地部署和私有托管安装。

---

7.4 Side-by-Side Artificial Intelligence
While embedded artificial intelligence focuses on situations where the business and artificial intelligence logic reside within the ERP platform, we propose utilizing side-by-side artificial intelligence for the following types of artificial intelligence applications:

**【译文】** 7.4 并行式人工智能 (Side-by-Side Artificial Intelligence)
虽然嵌入式人工智能专注于业务和人工智能逻辑都驻留在ERP平台内的情况，但我们建议针对以下类型的人工智能应用使用并行式人工智能：

---

are scaled out to the AI technology platform, as shown in Fig. 7.2. AI technology platforms are provided by companies like Amazon, Google, Microsoft, SAP, and start-ups. This infrastructure also supplements the overall solution when specific algorithms are not available on the ERP platform, traditional methods (e.g., regression, classification) consume too many resources of the transactional system, or large volumes of external data (e.g., Facebook, Twitter) are needed for model training.

**【译文】** 如图7.2所示，[这些应用]被扩展到AI技术平台。AI技术平台由亚马逊、谷歌、微软、SAP和初创公司等企业提供。当ERP平台上没有特定算法、传统方法（如回归、分类）占用过多交易系统资源，或者模型训练需要大量外部数据（如Facebook、Twitter）时，这种基础设施也能补充整体解决方案。

---

In particular, ERP extension applications should leverage the AI technology platform’s capabilities because the application data and business processes are typically based on the AI technology platform. This approach adheres to the golden rule of bringing algorithms to the data. As side-by-side artificial intelligence scenarios rely on AI technology platforms, the question arises: How do we integrate this technology into ERP for model training and inference? We will address this question in the subsequent sections.

**【译文】** 特别是ERP扩展应用应利用AI技术平台的能力，因为应用数据和业务流程通常基于AI技术平台。这种方法遵循了将算法带到数据所在处的黄金法则。由于并行式人工智能场景依赖于AI技术平台，这就产生了一个问题：我们如何将这项技术集成到ERP中进行模型训练和推理？我们将在后续章节中解决这个问题。

---

The AI technology platform serves as a crucial element in the side-by-side artificial intelligence architecture. Typically designed for cloud environments, it can be deployed in any cloud, hybrid, or on-premise setting, addressing the complete end-to-end life cycle for deriving value from data. By combining artificial intelligence with information management, the platforms empower businesses to effectively implement artificial intelligence and data science in complex and real-world enterprise scenarios.

**【译文】** AI技术平台是并行式人工智能架构中的关键要素。它通常专为云环境设计，可以部署在任何云、混合或本地环境中，解决从数据中获取价值的完整端到端生命周期问题。通过将人工智能与信息管理相结合，这些平台使企业能够在复杂和真实的各种企业场景中有效地实施人工智能和数据科学。

---

The AI technology platform manages the process of helping customers discover, refine, govern, orchestrate, and scale their development efforts in extracting valuable insights from their data assets. This encompasses all data management use cases dealing with various types of data (structured, unstructured, streaming), integration approaches (batch, real time, near real time), and processing patterns (offline, online, lambda). The AI technology platform’s key capabilities include typically:

**【译文】** AI技术平台管理着帮助客户发现、提炼、治理、编排和扩展其开发工作的流程，以便从数据资产中提取有价值的见解。这涵盖了处理各种类型数据（结构化、非结构化、流式）、集成方法（批量、实时、近实时）和处理模式（离线、在线、Lambda架构）的所有数据管理用例。AI技术平台的关键能力通常包括：

---

• Data connectivity and orchestration: Utilize central connection management to connect to data wherever it is located on-premise or in the cloud and regardless of the data type, structured, unstructured, streaming, and integrate it with flexible data pipelines. Orchestrate data processing across highly distributed and heterogeneous landscapes, executing any ERP or non-ERP processing engines close to the data sources to minimize the amount of data to be moved or replicated.

**【译文】** • **数据连接与编排**：利用中央连接管理连接数据，无论数据位于本地还是云端，也无论数据类型是结构化、非结构化还是流式数据，并通过灵活的数据管道将其集成。在高度分布和异构的景观中编排数据处理，在靠近数据源的地方执行任何ERP或非ERP处理引擎，以最大限度地减少需要移动或复制的数据量。

---

• Data governance and cataloging: Access an advanced metadata management system/catalog, enabling data lineage, data quality, profiling, data discovery, and searching of datasets to ensure auditability and governance. This provides IT team members with the flexibility and control they need to ensure trusted and accurate data is easily discoverable by the teams that need it, all integrated within a single solution.

**【译文】** • **数据治理与目录**：访问先进的元数据管理系统/目录，支持数据血缘、数据质量、画像、数据发现和数据集搜索，以确保可审计性和治理。这为IT团队成员提供了所需的灵活性和控制力，确保需要数据的团队能够轻松发现可信且准确的数据，且所有功能都集成在一个解决方案中。

---

• End-to-end life cycle management of artificial intelligence models: Streamline data science and artificial intelligence projects, from modeling and development to operations, across all enterprise data assets to manage the end-to-end life cycle; support data discovery, access and preparation, and experimentation in Jupyter Notebook; leverage a library of pretrained models for the most common functional services; and support deployment, (re)training, serving, and monitoring of all models; and access ready-to-use, adaptable business content in terms of

**【译文】** • **人工智能模型的端到端生命周期管理**：简化数据科学和人工智能项目，从建模、开发到运维，跨越所有企业数据资产以管理端到端生命周期；支持数据发现、访问和准备，以及在Jupyter Notebook中进行实验；利用包含最常用功能服务的预训练模型库；支持所有模型的部署、（重新）训练、服务和监控；并访问即用型、可调整的业务内容，包括...

---

