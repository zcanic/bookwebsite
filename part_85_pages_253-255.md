# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第85部分

**原始页码**: 253 - 255
**段落数量**: 10
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 252-252 (399 字符)
- **后文上下文页码**: 256-256 (2691 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Practice certificate' 译为 '执业证书'。2. 'Global/Local explanation' 译为 '全局/局部解释'，是可解释性AI（XAI）领域的标准术语。3. 最后一句话在原文中被截断，根据提供的后文上下文（page 256），完整的概念是 'the concluded and final action entities'（已完结和最终的行动实体），此处按原文结构译出前半部分。

---

An auditor is an individual who carries out an audit. To serve as an external auditor for a company, one typically needs a practice certificate from a regulatory authority. This auditor is granted access to all the logging entities that are specific to artificial intelligence, as mentioned earlier. However, this access is controlled through authorization checks; for instance, only data relevant to the audit period can be viewed in read mode. A snapshot of the data used for training could be saved with additional metadata, such as a timestamp or the artificial intelligence scenario, for logging purposes. Given that the data volume of these snapshots could rapidly increase, it’s important to strike a balance between disk space and the total cost of ownership (TCO), keeping logging requirements in mind. It is suggested that the logging of training data be made configurable, allowing customers to choose based on their needs whether no snapshot, only the most recent snapshot, or snapshots for a specified duration will be captured. Logging should be enabled by default for models that contain sensitive data. Sensitive personal data should be used wisely, only if it’s absolutely necessary to achieve the processing objective. Such processing should not result in discrimination against a group of people, either directly or indirectly.

**【译文】** 审计员是指执行审计工作的个人。要成为企业的外部审计员，通常需要获得监管机构颁发的执业证书。如前所述，审计员被授予访问所有特定于人工智能的日志实体的权限。然而，这种访问受到权限检查的控制；例如，只能以只读模式查看与审计期间相关的数据。为了记录日志，用于训练的数据快照可以与额外元数据（如时间戳或人工智能场景）一起保存。鉴于这些快照的数据量可能迅速增加，在考虑日志记录需求时，平衡磁盘空间与总体拥有成本（TCO）非常重要。建议将训练数据的日志记录设为可配置项，允许客户根据需求选择是不抓取快照、仅抓取最新快照，还是抓取指定时间段的快照。对于包含敏感数据的模型，应默认启用日志记录。敏感个人数据应谨慎使用，仅在为实现处理目标绝对必要时才使用。此类处理不得直接或间接地导致对某一人群的歧视。

---

An end user is an individual who uses the artificial intelligence application to execute a business task, not for administrative or developer tasks; end users could be buyers, salespeople, or product planners. End users only need access to the logging data necessary for understanding, tracking, and reproducing the business processes.

**【译文】** 最终用户是指使用人工智能应用程序来执行业务任务，而非管理或开发任务的个人；最终用户可能是采购员、销售人员或产品规划人员。最终用户只需要访问理解、追踪和复现业务流程所需的日志数据。

---

A developer is an individual who codes the artificial intelligence application to address business issues. Like support staff, developers are involved in situations of failure. These individuals need access to all logs as they are usually relevant for problem resolution. However, access to the log data should be safeguarded with authorizations. As key users schedule and carry out training jobs, access to the logging data for this purpose should be granted. Once again, access must be limited based on authorizations.

**【译文】** 开发人员是指编写人工智能应用程序代码以解决业务问题的个人。与支持人员一样，开发人员也会介入故障处理。这些人需要访问所有日志，因为这些日志通常与解决问题相关。然而，对日志数据的访问应通过权限进行保护。由于关键用户会安排并执行训练任务，因此应授予其访问相关日志数据的权限。同样，必须根据权限限制访问。

---

16.2
• The model’s algorithms and parameters
• A global explanation
• The training data

**【译文】** 16.2
• 模型的算法和参数
• 全局解释（Global explanation）
• 训练数据

---

It’s important to note that the storage of training data snapshots is dependent on the configurations set by the customers. The infrastructure for inference can generally gather the following log information:
• The request
• The response
• A local explanation

**【译文】** 值得注意的是，训练数据快照的存储取决于客户设置的配置。推理基础设施通常可以收集以下日志信息：
• 请求（Request）
• 响应（Response）
• 局部解释（Local explanation）

---

16.2 Solution Proposal
Fig. 16.2 Artificial intelligence logs provisioning and consumption
• The reason for the action

**【译文】** **16.2 解决方案建议**

图 16.2 人工智能日志的供应与使用
• 行动的理由

---

There’s no need to store the response as it can be recalculated using the artificial intelligence model and the request data, both of which are already logged. Logging by the artificial intelligence application is crucial for recording the business process. This is specific to each scenario and must be considered by all artificial intelligence applications. In this context, the final action should be logged, and at the very least, references to the inference logs (e.g., local explanation) and model logs (e.g., global explanation) should be provided. Both implicit and explicit feedbacks are addressed with a proficient management solution. For system, security, and artificial intelligence logs, integration with the retention management of the ERP system is necessary. This allows for the periodic deletion or archiving of logs from the system, reducing the memory footprint and ensuring compliance with legal regulations.

**【译文】** 无需存储响应结果，因为它可以利用人工智能模型和请求数据（两者均已记录）重新计算得出。人工智能应用程序的日志记录对于记录业务流程至关重要。这是针对每个场景特定的，所有人工智能应用程序都必须考虑这一点。在这种背景下，应记录最终采取的行动，并且至少应提供推理日志（例如，局部解释）和模型日志（例如，全局解释）的引用。高效的管理解决方案可以处理隐式和显式反馈。对于系统日志、安全日志和人工智能日志，必须与ERP系统的保留管理功能集成。这允许定期从系统中删除或归档日志，从而减少存储空间占用并确保符合法律法规。

---

Typically, the ERP’s audit management consumes the artificial intelligence logs. This is a comprehensive audit management solution. The audit department can utilize it to create audit plans, prepare for audits, analyze relevant information, document results, form an audit opinion, communicate results, and track progress. From our viewpoint, key features of such an audit management should include:
• Complete coverage of the audit process
• A single source for audits
• Integration with third-party systems like fraud or risk management

**【译文】** 通常，ERP的审计管理模块会使用这些人工智能日志。这是一个全面的审计管理解决方案。审计部门可以利用它来制定审计计划、准备审计、分析相关信息、记录结果、形成审计意见、沟通结果并跟踪进度。从我们的角度来看，此类审计管理的关键特性应包括：
• 全面覆盖审计流程
• 审计的单一来源
• 与欺诈或风险管理等第三方系统集成

---

Fig. 16.3 Artificial intelligence logs solution details
• Document management integration
• Support for global monitoring
• Support for multiple devices
• Search functionality and an intuitive user interface

**【译文】** 图 16.3 人工智能日志解决方案详情
• 文档管理集成
• 支持全局监控
• 支持多种设备
• 搜索功能和直观的用户界面

---

16.3
The process of training involves utilizing application data to train the chosen artificial intelligence algorithm and to save the trained model for use. Throughout this training process, global explanations are calculated by offering accuracy metrics based on a specific method of explanation. This forms the groundwork for recording the model algorithm/parameter, global explanation, and training data entities. The trained model is made accessible to the artificial intelligence applications via an inference application programming interface (API). The inference request is used to compute a local explanation based on a chosen method of explanation. Both local and global explanations are supplied to the artificial intelligence application as part of the response structure and can be shown in the user interface. This forms the basis for recording the request, response, local explanation, and reason for action entities. Within the application log, the concluded and final action

**【译文】** **16.3**
训练过程包括利用应用数据来训练选定的人工智能算法，并保存训练好的模型以供使用。在整个训练过程中，通过基于特定解释方法提供的准确性指标来计算全局解释。这构成了记录模型算法/参数、全局解释和训练数据实体的基础。训练好的模型通过推理应用程序编程接口（API）供人工智能应用程序使用。推理请求用于基于选定的解释方法计算局部解释。局部和全局解释作为响应结构的一部分提供给人工智能应用程序，并可在用户界面中显示。这构成了记录请求、响应、局部解释和行动理由实体的基础。在应用程序日志中，已完结和最终的行动

---

