# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第29部分

**原始页码**: 85 - 87
**段落数量**: 13
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 84-84 (99 字符)
- **后文上下文页码**: 88-88 (1853 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Idea to Market/Source to Pay/Plan to Fulfill/Lead to Cash/Recruit to Retire/Acquire to Decommission 均采用SAP和业界通用的标准中文译法。2. Project Logistics Control 译为'项目物流控制'，指代项目执行中的后勤和实物流程管理。 3. Discrete manufacturing 译为'离散制造'。

---

modules on the application server offer reusable functionality to implement the reference business processes discussed in the last chapter. There is no one-to-one correspondence between application modules and core/supporting processes; usually, features from multiple software modules are needed to execute a single core/supporting process. R&D/Engineering is responsible for a significant portion of the core process Idea to Market, while Procurement, Supply Chain, and Manufacturing handle the core processes Source to Pay and Plan to Fulfill. The core process Lead to Cash is primarily managed by Sales and Services, while Recruit to Retire is overseen by Human Capital Management software modules. Asset Management primarily handles Acquire to Decommission reference process, and the supporting process Finance is mainly managed by the Finance component. Governance applies various technical features of the ERP platform, such as identity and access management, information lifecycle management, or risk management. Industry Solutions are built on top of the core modules, enhancing core functionality with industry-specific features for various verticals like retail, banking, insurance, automotive, or the public sector. ERP software must ensure numerous product qualities, such as facilitating compliance, delivering high performance, and supporting extensibility. These non-functional requirements must be addressed uniformly across all ERP application modules using the concepts and frameworks shown on the right side of Fig. 4.1. To embed artificial intelligence into the abovementioned ERP application modules, it is essential to understand their structure. Therefore, in the following sections, we will suggest reference solution architectures for each of them. The core application modules in Fig. 4.1 can be distributed across multiple application servers and combined with various deployment types (e.g., on-premises, public cloud, private managed).

**【译文】** 应用服务器上的模块提供了可重用的功能，以实现上一章讨论的参考业务流程。应用模块与核心/支持流程之间不存在一对一的对应关系；通常，执行单个核心/支持流程需要来自多个软件模块的功能。研发/工程（R&D/Engineering）负责核心流程“从创意到市场”的很大一部分，而采购、供应链和制造处理核心流程“从寻源到付款”和“从计划到履行”。核心流程“从线索到现金”主要由销售和服务管理，而“从招聘到退休”则由人力资本管理软件模块监督。资产管理主要处理“从获取到退役”参考流程，支持流程“财务”主要由财务组件管理。治理应用了ERP平台的各种技术特性，如身份和访问管理、信息生命周期管理或风险管理。行业解决方案构建在核心模块之上，通过针对零售、银行、保险、汽车或公共部门等各种垂直行业的特定功能来增强核心功能。ERP软件必须确保众多的产品质量，如促进合规性、提供高性能和支持可扩展性。必须使用图4.1右侧所示的概念和框架，在所有ERP应用模块中统一解决这些非功能性需求。为了将人工智能嵌入到上述ERP应用模块中，理解它们的结构至关重要。因此，在接下来的章节中，我们将为每个模块建议参考解决方案架构。图4.1中的核心应用模块可以分布在多个应用服务器上，并结合各种部署类型（例如，本地部署、公有云、私有托管云）。

---

4.2 Research and Development/Engineering

**【译文】** 4.2 研发/工程

---

Core Portfolio and Project Management is split into two components: Project Financials Control and Project Logistics Control. Project Financials Control is responsible for planning and monitoring expenses and budgets, enabling cost tracking that is closely integrated with essential business operations. This cost and budget tracking helps prevent additional expenses and safeguard the project. Project Logistics Control allows for the creation of project structures composed of work breakdown structures and network structures, planning and scheduling project activities, managing procurement processes in conjunction with core business processes, and offering insights into all logistics-related execution aspects of a project.

**【译文】** 核心组合与项目管理分为两个组件：项目财务控制和项目物流控制。项目财务控制负责规划和监控费用与预算，实现与核心业务运营紧密集成的成本跟踪。这种成本和预算跟踪有助于防止额外开支并保障项目安全。项目物流控制允许创建由工作分解结构（WBS）和网络结构组成的项目结构，规划和调度项目活动，结合核心业务流程管理采购过程，并提供对项目所有物流相关执行方面的洞察。

---

Product Engineering is divided into two the components: Product Development Foundation and Variant Configuration. The Product Development Foundation supplies a product platform that serves as the foundation for the entire development process. It promotes product design, initiates master data and product structures, and integrates change and configuration management. The Product Development Foundation also encompasses the bill of materials (BOM), which is a list of all necessary materials and their corresponding quantities for a given process.

**【译文】** 产品工程分为两个组件：产品开发基础和变体配置。产品开发基础提供了一个作为整个开发过程基础的产品平台。它促进产品设计，初始化主数据和产品结构，并集成变更和配置管理。产品开发基础还包含物料清单（BOM），即给定流程所需的所有材料及其相应数量的清单。

---

Variant Configuration enables customers to design their own product models, with users defining the product’s rules and designs themselves. Simultaneously, an appropriate work plan and bill of materials for production are generated. The component shall also provide additional features, such as price calculation.

**【译文】** 变体配置使客户能够设计自己的产品模型，由用户自己定义产品的规则和设计。同时，系统会生成相应的生产作业计划和物料清单。该组件还应提供额外的功能，如价格计算。

---

Product Compliance encompasses three distinct sub-components: Marketability and Chemical Compliance, Dangerous Goods Management, and Safety Data Sheet Management and Hazard Label Data. The first sub-component, Marketability and Chemical Compliance, aids in managing material and ingredient information while adhering to legal and customer requirements. It gathers compliance data from suppliers and customers, making this information publicly accessible. Moreover, the component automatically monitors regulated substance volumes and evaluates products and materials against various compliance requirements, such as mandatory registrations and allowed quantities.

**【译文】** 产品合规包含三个不同的子组件：适销性与化学品合规、危险品管理，以及安全数据表管理与危险标签数据。第一个子组件，适销性与化学品合规，有助于在遵守法律和客户要求的同时管理材料和成分信息。它从供应商和客户处收集合规数据，并使这些信息可公开访问。此外，该组件自动监控受管制物质的数量，并根据各种合规要求（如强制注册和允许数量）评估产品和材料。

---

Dangerous Goods Management centralizes dangerous goods information for all products, regions, and transportation modes. It automates the classification of dangerous goods and utilizes built-in regulatory content. The component shall ensure that all shipments comply with dangerous goods regulations by conducting integrated checks, providing appropriate packaging, determining accurate transportation methods and routes, and automating the generation and distribution of dangerous goods documents.

**【译文】** 危险品管理集中管理所有产品、地区和运输模式的危险品信息。它利用内置的监管内容自动进行危险品分类。该组件应通过执行集成检查、提供适当的包装、确定准确的运输方式和路线，以及自动化生成和分发危险品文件，确保所有货物运输符合危险品法规。

---

The purpose of Safety Data Sheet Management and Hazard Label Data is to centrally manage substance and regulatory information, streamline component and product classification, and automate the creation of safety data sheets and labels. It applies regulatory content to minimize effort and maintain ongoing compliance while automating label printing and safety data sheet distribution as part of logistics processes.

**【译文】** 安全数据表管理与危险标签数据的目的是集中管理物质和监管信息，简化组件和产品分类，并自动创建安全数据表和标签。它应用监管内容以最大限度地减少工作量并保持持续合规，同时作为物流流程的一部分自动进行标签打印和安全数据表分发。

---

Product Life Cycle Management comprises Integrated Recipe Development, Integrated Product Development, Handover to Manufacturing, and Advanced Variant Configuration. Integrated Recipe Development is a component for describing product manufacturing or process execution. Recipes contain information about products, process components, required resources, and the steps to be executed. Recipe types are also included in the development process.

**【译文】** 产品生命周期管理（PLM）包括集成配方开发、集成产品开发、移交制造和高级变体配置。集成配方开发是用于描述产品制造或过程执行的组件。配方包含有关产品、过程组件、所需资源以及要执行的步骤的信息。配方类型也包含在开发过程中。

---

Integrated Product Development is designed for discrete manufacturing and accelerates design by incorporating product life cycle management into a unified, real-time environment. The component manages complex product structures, including hardware and software compatibility, and enables the creation of individualized products by defining and reusing variant product structures across the supply chain. It encompasses embedded systems development, visual instance planning, visual asset planning, 3D visual enterprise manufacturing planning, access control management, and engineering change and record management.

**【译文】** 集成产品开发专为离散制造设计，通过将产品生命周期管理纳入统一的实时环境来加速设计。该组件管理复杂的产品结构，包括硬件和软件的兼容性，并通过在整个供应链中定义和重用变体产品结构来支持个性化产品的创建。它涵盖嵌入式系统开发、可视化实例规划、可视化资产规划、3D可视化企业制造规划、访问控制管理以及工程变更和记录管理。

---

Advanced Variant Configuration streamlines information exchange within the company and up to customer delivery. It shall use a comprehensive simulation environment for variant configuration models and offers user-friendly classification capabilities. The integrated advanced variant configurator should support multi-level variant configuration models.

**【译文】** 高级变体配置简化了公司内部直至客户交付的信息交换。它应为变体配置模型使用全面的仿真环境，并提供用户友好的分类功能。集成的高级变体配置器应支持多级变体配置模型。

---

Extended Portfolio and Project Management enhances efficiency and automation, providing insights into product and project performance in terms of cost, time, scope, resources, and quality. It combines Portfolio Management, Project Management, Project Connection, and Commercial Project Management. For instance, Project Connection shall automate and streamline the bidirectional exchange of project information with external scheduling tools, orchestrating the exchange through business rules that define the sequence of creating and modifying project elements. Commercial Project Management covers end-to-end processes, including selling, planning, executing, monitoring, and controlling projects.

**【译文】** 扩展组合与项目管理提高了效率和自动化程度，并在成本、时间、范围、资源和质量方面提供有关产品和项目绩效的洞察。它结合了组合管理、项目管理、项目连接和商务项目管理。例如，项目连接应自动执行并简化与外部调度工具的双向项目信息交换，通过定义创建和修改项目元素顺序的业务规则来编排这种交换。商务项目管理涵盖了端到端的流程，包括销售、规划、执行、监控和控制项目。

---

4.3 Procurement

**【译文】** 4.3 采购

---

