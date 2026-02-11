# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第41部分

**原始页码**: 121 - 123
**段落数量**: 9
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 120-120 (707 字符)
- **后文上下文页码**: 124-124 (3243 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Enterprise-ready' 译为 '符合企业级标准'，强调软件在合规性、稳定性等方面的成熟度。
2. 'In-memory databases' 译为 '内存数据库'。
3. 'Localization' 在ERP语境下译为 '本地化版本'，指适应特定国家法律/语言的软件版本。
4. 'Serving runtime' 译为 '服务运行时'，指AI模型部署后提供推理服务的运行环境。

---

Chapter 6 Business Requirements and Application Patterns
In this chapter, we determine the challenges of applying artificial intelligence in the context of ERP systems. Identifying and solving those challenges is the added value resulting from this elaboration. Artificial intelligence must be deeply integrated into business processes and user interfaces of the underlying ERP systems in order to gain benefit for users. Typical ERP users are business experts with nearly no knowledge about data science or statistical techniques. ERP software must be enterprise-ready, for example, legally compliant, extensible, or configurable. However, this requirement has not yet been resolved for artificial intelligence and is worked out in this composition. In the course of our investigations regarding implementation projects, we determined various artificial intelligence patterns in the context of ERP software. Identifying the relevant ERP application patterns for artificial intelligence is also a new finding and vital for driving the appropriate solution architecture.

**【译文】** 第6章 业务需求与应用模式
在本章中，我们将探讨在企业资源规划（ERP）系统中应用人工智能所面临的挑战。识别并解决这些挑战正是本书的核心价值所在。为了让用户真正获益，人工智能必须深度集成到ERP系统的业务流程和用户界面中。典型的ERP用户是业务专家，几乎不具备数据科学或统计技术的知识。ERP软件必须符合企业级标准，例如具备法律合规性、可扩展性或可配置性。然而，对于人工智能而言，这一要求尚未完全得到解决，这也是本书致力于解决的问题。在我们对实施项目的调研过程中，我们确定了ERP软件背景下的多种人工智能模式。识别适用于人工智能的相关ERP应用模式也是一项新发现，对于驱动合适的解决方案架构至关重要。

---

6.1 AI Business Requirements of ERP
Enhanced computational capabilities, advanced algorithms, and the accessibility of vast data sets are driving the adoption of machine learning to incorporate intelligence into back-office operations and deliver intelligent ERP systems. ERP systems underlying in-memory databases accelerate processing, combine analytical and transactional data, and foster innovation through the integration of artificial intelligence features. As a result, artificial intelligence can be seamlessly incorporated into ERP systems, allowing organizations to streamline business operations, enhance employee satisfaction, and improve customer service. Conversational AI offers a natural language interface for ERP solutions, transforming user interactions with the system by enabling hands-free applications based on speech.

**【译文】** 6.1 ERP的AI业务需求
增强的计算能力、先进的算法以及海量数据集的可访问性，正推动着机器学习的采用，旨在将智能融入后台运营并交付智能ERP系统。基于内存数据库的ERP系统加速了处理速度，融合了分析数据与交易数据，并通过集成人工智能特性促进了创新。因此，人工智能可以无缝地融入ERP系统，帮助组织精简业务运营，提升员工满意度并改善客户服务。对话式AI为ERP解决方案提供了自然语言接口，通过支持基于语音的免提应用，彻底改变了用户与系统的交互方式。

---

However, embedding artificial intelligence capabilities into ERP solutions is a complex endeavor due to the intricate nature of these systems. For example, SAP S/4HANA consists of 143,000 tables and over 250 million lines of code, supporting thousands of business processes across 25 industry sectors and 64 localizations. When we began our research, we believed that identifying the optimal artificial intelligence algorithm was the primary challenge. Over time, we realized that in the context of ERP software, this is not the only issue. Two main problem areas must be resolved:
1. How can we systematically incorporate artificial intelligence into business processes for easy consumption?
2. How can we ensure artificial intelligence is enterprise-ready?

**【译文】** 然而，由于ERP系统本质的复杂性，将人工智能能力嵌入其中是一项艰巨的任务。以SAP S/4HANA为例，它包含143,000个数据表和超过2.5亿行代码，支持跨越25个行业和64个本地化版本的数千个业务流程。当我们开始研究时，曾认为找到最佳的人工智能算法是主要挑战。随着时间的推移，我们意识到在ERP软件的背景下，这并非唯一的问题。必须解决两个主要问题领域：
1. 我们如何将人工智能系统地融入业务流程，以便于用户使用？
2. 我们如何确保人工智能符合企业级标准？

---

6.1.1 Safety
Legal compliance, such as adherence to governance legislation, security standards, breach prevention, data security, and privacy, is essential for ERP software. Clients should have access to audited reports, certifications, and attestations. Global standards from organizations like ISO or the Cloud Security Alliance apply to nearly all ERP customers. Additionally, there are region or nation-specific regulations and standards, as well as industry-specific rules. The cost benefits for cloud service providers stem from their ability to scale multiple clients across shared resources. However, compliance can be challenging, as regulations often necessitate encryption, auditing, and data separation, which increase hardware requirements and restrict resource sharing.

**【译文】** 6.1.1 安全性
法律合规性，如遵守治理法规、安全标准、违规预防、数据安全和隐私保护，对于ERP软件至关重要。客户应能够获取审计报告、认证和证明。来自ISO（国际标准化组织）或云安全联盟（Cloud Security Alliance）等组织的全球标准适用于几乎所有ERP客户。此外，还有针对特定地区或国家的法规与标准，以及特定行业的规则。云服务提供商的成本优势源于其能够在共享资源上扩展服务多个客户的能力。然而，合规性可能是一个挑战，因为法规通常要求加密、审计和数据隔离，这不仅增加了硬件需求，还限制了资源共享。

---

Cloud compliance demands a collaborative partnership between the customer, who owns the data and bears the legal responsibilities for data handling, and the cloud vendor, who processes the data and must also comply with regulations. An example for implication of legal compliance on artificial intelligence implementation is that training and inference processes must consider the General Data Protection Regulation (GDPR) and must exclude application data without available consent. Another example is that reasoning behind inference results must be explained to end users and recorded for legal auditing.

**【译文】** 云合规性要求客户与云供应商之间建立协作伙伴关系：客户拥有数据并承担数据处理的法律责任，而云供应商负责处理数据且同样必须遵守法规。法律合规性对人工智能实施的一个影响示例是，训练和推理过程必须考虑通用数据保护条例（GDPR），并且必须排除未获得授权的应用数据。另一个例子是，推理结果背后的逻辑必须能够向最终用户解释，并被记录下来以供法律审计。

---

Web servers inherently create a connection between the network and the outside world. The level of Web security depends on server maintenance, Web application updates, and Web site coding. Therefore, cutting-edge Web security standards must be implemented for ERP applications, such as protection against XSS, CSRF, SQL injection, URL manipulation, fake requests and forms, cookie visibility and theft, session hijacking, remote system execution, file-upload abuse, denial of service, phishing, and malware. Regular security patching is also necessary. In the context of artificial intelligence, uploaded files containing training data must be scanned for vulnerabilities before processing.

**【译文】** Web服务器本质上建立了网络与外部世界之间的连接。Web安全的水平取决于服务器维护、Web应用程序更新以及网站代码编写。因此，ERP应用程序必须实施前沿的Web安全标准，例如防止XSS（跨站脚本攻击）、CSRF（跨站请求伪造）、SQL注入、URL篡改、伪造请求和表单、Cookie可见性与窃取、会话劫持、远程系统执行、文件上传滥用、拒绝服务（DoS）、网络钓鱼和恶意软件。定期的安全补丁更新也是必要的。在人工智能的背景下，包含训练数据的上传文件在处理前必须进行漏洞扫描。

---

Every component must guarantee the ability to perform online backups for all business application data, meaning that backups can be done without shutting down the component. To reduce the likelihood of data loss, it is essential for customers to regularly back up their business data. In the context of artificial intelligence, for example, trained models stored in the ERP database should be backed up frequently. Disaster recovery refers to the capacity to retrieve data following a loss. Recovery from backups should be feasible across distributed landscapes and data centers, which entails special handling of replicated data on the application side, such as maintaining data consistency.

**【译文】** 每个组件都必须保证能够对所有业务应用数据执行在线备份，这意味着可以在不关闭组件的情况下完成备份。为了降低数据丢失的可能性，客户必须定期备份其业务数据。例如，在人工智能背景下，存储在ERP数据库中的已训练模型应频繁备份。灾难恢复是指在数据丢失后找回数据的能力。跨分布式环境和数据中心的备份恢复应当是可行的，这需要在应用端对复制数据进行特殊处理，例如维护数据一致性。

---

The backup and restore process should not result in unavailability during data recovery. If a component within a scenario crashes, it should be possible to restore the entire scenario to a consistent state. This necessitates that the scenario backup concept includes information about data dependencies between components and the steps required to achieve a consistent state for the entire scenario. For instance, during recovery procedures, trained models must be reloaded in real time into the serving runtime. Both the consumer and provider should identify and transparently manage security and data protection risks for all services, ensuring a secure service life cycle that safeguards customers and avoids liability risks. They should also agree on and implement a joint organizational interface, including service level agreements (SLAs), to discuss and resolve potential or actual information security incidents.

**【译文】** 备份和恢复过程不应导致数据恢复期间的服务不可用。如果场景中的某个组件崩溃，应能够将整个场景恢复到一致的状态。这就要求场景备份概念必须包含组件间数据依赖关系的信息，以及实现整个场景一致性所需的步骤。例如，在恢复过程中，已训练的模型必须被实时重新加载到服务运行时中。消费者和供应商都应识别并透明地管理所有服务的安全和数据保护风险，确保安全的服务生命周期，从而保护客户并避免责任风险。双方还应商定并实施联合组织接口，包括服务级别协议（SLA），以讨论和解决潜在或实际的信息安全事件。

---

Provider liability remains a critical aspect in the continued integration of artificial intelligence into all business areas. When a company considers moving its data

**【译文】** 在人工智能持续融入所有业务领域的过程中，供应商责任仍然是一个关键方面。当一家公司考虑将其数据和处理过程迁移到云端用于人工智能目的时，有两个因素至关重要：相关的风险和预期的收益。（注：根据后文补全了本句语义）

---

