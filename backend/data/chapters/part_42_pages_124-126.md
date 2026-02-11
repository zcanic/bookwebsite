# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第42部分

**原始页码**: 124 - 126
**段落数量**: 13
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 123-123 (3791 字符)
- **后文上下文页码**: 127-127 (3288 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Tenant' 翻译为'租户'，是云服务中的标准术语，指使用共享计算资源的一组用户。 2. 'Segregation of duties (SoD)' 翻译为'职责分离'，是企业内部控制的关键概念。 3. 'Lines of Business (LoB)' 翻译为'业务线'，指企业内部特定的业务部门或职能领域。

---

and processing to the cloud for artificial intelligence purposes, two factors are crucial: the associated risks and the benefits to be gained. It is necessary to strike the right balance between assigning rights and liabilities among the parties and diversifying risks through insurance. Furthermore, new strategies for protecting intellectual property rights in the digital realm are being developed, along with the corresponding obligations of providers.

**【译文】** （承接上文，当企业考虑将数据）和处理迁移到云端以用于人工智能目的时，有两个因素至关重要：相关风险和预期收益。必须在各方之间分配权利和责任以及通过保险分散风险之间取得适当的平衡。此外，数字领域的知识产权保护新策略以及供应商的相应义务也正在制定中。

---

6.1.2 Data Isolation
Data ownership refers to customer data that is solely possessed by the customer. This data must be distinct from other customers’ data, a concept known as data isolation. Techniques should be implemented to ensure data and network isolation for each tenant’s service. To lower the total cost of ownership (TCO), particularly in cloud computing, network resources and shared data should be minimized in terms of system deployments and databases. However, this consolidation of data and resources introduces new risks, such as sharing infrastructure with potentially untrustworthy tenants. To address these risks, cloud infrastructure providers or Software-as-a-Service (SaaS) solutions must offer robust data isolation guarantees. Regardless of the chosen solution, customers should retain exclusive ownership of their data. These requirements also apply to artificial intelligence, where the training data of different customers must be clearly separated.

**【译文】** 6.1.2 数据隔离
数据所有权指的是客户数据完全由客户拥有。该数据必须与其他客户的数据区分开来，这一概念称为数据隔离。应实施相关技术以确保每个租户服务的网络和数据隔离。为了降低总体拥有成本（TCO），特别是在云计算中，应在系统部署和数据库方面尽可能减少网络资源占用和共享数据。然而，这种数据和资源的整合带来了新的风险，例如与潜在不可信的租户共享基础设施。为了应对这些风险，云基础设施提供商或软件即服务（SaaS）解决方案必须提供可靠的数据隔离保证。无论选择何种解决方案，客户都应保留对其数据的独家所有权。这些要求同样适用于人工智能领域，不同客户的训练数据必须清晰地分隔开。

---

Data residency pertains to the physical or geographical location of an organization’s data or information. It is closely related to data sovereignty, which involves the legal or regulatory requirements imposed on data stored within a specific country or region. For instance, the Energy Technology Development and Demonstration Program (EUDP) mandates that cloud systems and services for European customers be managed by a team based in the EU. Additionally, full transparency regarding data center and storage locations must be provided upon request. Cloud computing, which allows businesses to offer artificial intelligence services over the Internet, can raise concerns about data residency. Cloud users often lack knowledge of their data’s physical location, as providers store data across multiple global data centers. Consequently, artificial intelligence service users must be aware of their cloud provider’s data center locations and the various data residency policies that apply to each site.

**【译文】** 数据驻留涉及组织数据或信息的物理或地理位置。它与数据主权密切相关，后者涉及对存储在特定国家或地区内的数据所施加的法律或监管要求。例如，能源技术开发和示范项目（EUDP）规定，面向欧洲客户的云系统和服务必须由位于欧盟的团队管理。此外，必须根据要求提供关于数据中心和存储位置的完全透明度。云计算允许企业通过互联网提供人工智能服务，这可能会引起对数据驻留的担忧。云用户通常不了解其数据的物理位置，因为提供商将数据存储在全球多个数据中心。因此，人工智能服务用户必须了解其云提供商的数据中心位置，以及适用于每个站点的各种数据驻留策略。

---

Tenant flexibility refers to reorganizations that result in the consolidation or division of IT systems, leading to the relocation, splitting, or merging of artificial intelligence service application data. Support for moving a tenant from one data center to another is also necessary. Subsidiaries or sub-companies are often the first to adopt cloud computing in a two-tier model. As a company expands, changes such as reorganizations, acquisitions, or mergers become inevitable. Moving legal business entities to different geographical areas requires flexibility in transferring data and artificial intelligence services, including deployed models for inference, between data centers.

**【译文】** 租户灵活性是指导致IT系统合并或拆分的重组，这将引起人工智能服务应用数据的迁移、拆分或合并。此外，还必须支持将租户从一个数据中心迁移到另一个数据中心。在双层模式中，子公司或分公司通常是最先采用云计算的。随着公司的扩张，重组、收购或兼并等变化变得不可避免。将法律经营实体迁移到不同的地理区域，需要在数据中心之间灵活地转移数据和人工智能服务，包括已部署的推理模型。

---

Segregation of duties is an internal control that ensures at least two individuals are responsible for separate parts of a task to prevent errors and fraud. Sensitive data must be managed according to user roles and responsibilities, necessitating distinct authorizations. Applications with excessive privileges may be exploited by attackers to gain unauthorized access to data and system resources. Adhering to minimal privilege rules not only provides defense in depth but also aids in data classification and access definition. No single individual should have the authority to execute two conflicting duties. This requirement becomes even more critical when certain administrative tasks are delegated to third parties, either through outsourcing or employing third-party resources. In the context of artificial intelligence applications, tasks such as adjusting model hyperparameters and consuming inference results must be performed by separate users with different privileges.

**【译文】** 职责分离（SoD）是一种内部控制，旨在确保至少有两个人负责一项任务的不同部分，以防止错误和欺诈。敏感数据必须根据用户角色和职责进行管理，这就需要通过不同的权限进行控制。权限过大的应用程序可能会被攻击者利用，从而未经授权访问数据和系统资源。遵守最小权限原则不仅提供了纵深防御，还有助于数据分类和访问定义。任何个人都不应有权执行两项相互冲突的职责。当某些管理任务通过外包或雇佣第三方资源委托给第三方时，这一要求变得更加关键。在人工智能应用的情境下，诸如调整模型超参数和使用推理结果等任务，必须由具有不同权限的不同用户来执行。

---

Decommissioning refers to the automated formal process of removing or retiring something from active service. A data return concept and a self-service scenario should be available. After a contract ends or a tenant moves, there must be an option to return and destroy the data, which is typically a legal requirement. Customers may request the export of their data in an appropriate format, such as .csv or another standard format. Application data for model training and batch inference are subject to this obligation and must be addressed for artificial intelligence applications.

**【译文】** 退役是指将某物从现役服务中移除或淘汰的自动化正式流程。应提供数据返还方案和自助服务场景。在合同结束或租户搬迁后，必须提供归还并销毁数据的选项，这通常是一项法律要求。客户可能会要求以适当的格式（如 .csv 或其他标准格式）导出其数据。用于模型训练和批量推理的应用数据也受此义务约束，必须在人工智能应用中加以解决。

---

6.1.3 Flexibility
Scoping involves the careful selection of necessary scenarios, business processes, and functionalities by customers within a controlled environment. ERP systems are very rich in functionality, which presents new challenges in terms of discovery and implementation. To tackle these challenges, sophisticated techniques are employed to help customers choose the right services. In a consumption-based business model, it is crucial to enable only the services that have been requested.

**【译文】** 6.1.3 灵活性
范围界定涉及客户在受控环境中仔细选择必要的场景、业务流程和功能。ERP 系统功能非常丰富，这在发现和实施方面带来了新的挑战。为了应对这些挑战，人们采用先进的技术来帮助客户选择合适的服务。在基于消费的商业模式中，关键在于仅启用已被请求的服务。

---

Customization encompasses configuration options, branding tools, and theme designers. Many organizations require support for similar processes, but despite these commonalities, there is a need to accommodate local variations and adapt to customer requirements. Solutions must be provided that allow for the individual configuration of intelligent applications while maintaining shared features. For instance, a financial business application that leverages artificial intelligence for automated reconciliations should support the training of multiple models based on different regional configurations.

**【译文】** 定制包括配置选项、品牌工具和主题设计器。许多组织都需要对类似流程的支持，但尽管存在这些共性，仍需适应本地差异并满足客户的特定要求。必须提供既允许对智能应用进行单独配置，又能保留共享特性的解决方案。例如，一个利用人工智能进行自动对账的财务业务应用，应支持基于不同区域配置来训练多个模型。

---

Personalization pertains to the ability to manage local settings and user preferences. As users are exposed to a wide array of applications, their expectations may increase. Personalization is just as important in business applications as it is in Web or mobile applications. The degree of explainability for artificial intelligence-based supplier rankings, for example, could be personalized by the user, with their preferred settings used as the default value the next time they access the intelligent business application.

**【译文】** 个性化涉及管理本地设置和用户偏好的能力。随着用户接触到各种各样的应用程序，他们的期望值可能会提高。个性化在业务应用中与在 Web 或移动应用中同样重要。例如，基于人工智能的供应商排名的可解释性程度可以由用户进行个性化设置，其偏好的设置将被用作下次访问该智能业务应用时的默认值。

---

UI adoption and branding involve adapting user interfaces or other assets provided by the ERP vendor as a standard offering. Branding connects applications with specific colors or layouts to facilitate user interaction. UI adoption and branding capabilities must also be available for intelligent business applications, with additional requirements such as specific coloring for prediction accuracy thresholds.

**【译文】** UI 适配和品牌化涉及调整 ERP 供应商作为标准产品提供的用户界面或其他资产。品牌化通过特定的颜色或布局将应用程序联系起来，以促进用户交互。智能业务应用也必须具备 UI 适配和品牌化能力，并包含额外的要求，例如针对预测准确率阈值的特定着色。

---

Best practice features should be accessible and meet customer needs from beginning to end. Pre-delivered content, business processes, and standard code lists should be provided, along with industry and country-specific best practices and legal compliance supported out-of-the-box. Intelligent business applications should adhere to standards and legal requirements by default. Best practices are valuable because customers want to minimize effort on standard Lines of Business (LoB) processes and concentrate on core competencies and differentiating tasks. Generic artificial intelligence services, like invoice extraction from PDF documents, exemplify best practice content. Configuration data must be kept separate from application and system data, but coding and content should utilize similar processes and infrastructures. Transitioning from initial activation support to a comprehensive product life cycle, including introduction, maintenance, extension, upgrade, and potential retirement, necessitates a reevaluation of fundamental configuration delivery principles. Ensuring a seamless and smooth business configuration experience for development, partner development, cloud operations, and customers is essential. Rapid and straightforward customer system setup is only achievable through high-quality content and extensive automation.

**【译文】** 最佳实践功能应易于访问，并从头到尾满足客户需求。应提供预交付的内容、业务流程和标准代码表，并开箱即用地支持行业和特定国家的最佳实践及法律合规性。智能业务应用应默认遵守标准和法律要求。最佳实践之所以有价值，是因为客户希望尽量减少在标准业务线（LoB）流程上的投入，而集中精力于核心竞争力和差异化任务。通用人工智能服务（如从 PDF 文档中提取发票）是最佳实践内容的典型示例。配置数据必须与应用数据和系统数据分开，但代码和内容应利用类似的流程和基础设施。从最初的激活支持过渡到包括引入、维护、扩展、升级和潜在退役在内的全面产品生命周期，需要重新评估基本的配置交付原则。确保开发、合作伙伴开发、云运营和客户拥有无缝且流畅的业务配置体验至关重要。只有通过高质量的内容和广泛的自动化，才能实现快速简单的客户系统设置。

---

6.1.4 Extensibility
End-to-end extensibility emphasizes the capacity to expand standard services and processes across all layers, from table extensions to UI field extensions, as well as the extensibility of related APIs. This enables vertical extensions of processes or services. Partners who extend core services may require an additional extension layer for their clients. Each extension should be autonomous and protected from upgrades and updates. For instance, in a provided artificial intelligence scenario, customers anticipate enhancing the data source for training and the corresponding data transformations.

**【译文】** 6.1.4 可扩展性
端到端可扩展性强调跨所有层扩展标准服务和流程的能力，从数据表扩展到 UI 字段扩展，以及相关 API 的可扩展性。这实现了流程或服务的纵向扩展。扩展核心服务的合作伙伴可能需要为其客户提供额外的扩展层。每个扩展都应是自主的，并在系统升级和更新时受到保护。例如，在提供的人工智能场景中，客户期望能够增强训练数据源以及相应的数据转换逻辑。

---

Industry verticalization involves augmenting core functionality with industry-specific solutions, addressing the unique needs of various sectors, from healthcare to retail. The demand for more customized solutions tailored to specific industries has grown, replacing one-size-fits-all software with more modular, verticalized approaches. Companies are now investing in multiple industry businesses, necessitating support for industry verticalization in artificial intelligence. A layered extensibility concept is needed, allowing an artificial intelligence application to be enhanced first by industry solutions, then by partners, and finally by customers, all without mutual interference.

**【译文】** 行业垂直化涉及用特定行业的解决方案增强核心功能，以满足从医疗保健到零售等各个领域的独特需求。针对特定行业定制解决方案的需求日益增长，正以更模块化、垂直化的方法取代通用的“一刀切”式软件。目前许多公司投资于多个行业的业务，这就需要在人工智能领域支持行业垂直化。我们需要一种分层的可扩展性概念，允许人工智能应用首先由行业解决方案增强，然后由合作伙伴增强，最后由客户增强，且各方互不干扰。

---

