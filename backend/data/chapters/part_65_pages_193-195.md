# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第65部分

**原始页码**: 193 - 195
**段落数量**: 25
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 192-192 (882 字符)
- **后文上下文页码**: 196-196 (2197 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Change documents' 翻译为 SAP/ERP 领域通用的 '变更凭证'。 2. 'Information Lifecycle Management' 译为 '信息生命周期管理'。 3. 'Read Access Logging' 译为 '读取访问日志'。 4. 'Side-by-side' 译为 '并行式' 以对应 'Embedded' (嵌入式)。

---

system. Consequently, Information Lifecycle Management possesses all pertinent information about deleted or blocked records and makes this information available through an extraction API to the AI technology platform. A GDPR workbench that aligns with these requirements is necessary, which obtains deletion and blocking data from the extraction API and subsequently deletes or blocks the impacted records on the AI technology platform.

**【译文】** ……系统。因此，信息生命周期管理（Information Lifecycle Management, ILM）拥有关于已删除或已冻结记录的所有相关信息，并通过提取 API 将此信息提供给 AI 技术平台。必须建立一个符合这些要求的 GDPR 工作台，它从提取 API 获取删除和冻结数据，随后在 AI 技术平台上删除或冻结受影响的记录。

---

blocking and deletion events. As illustrated previously in section of Fig. 10.6, the trained models are exposed via APIs for consumption by artificial intelligence applications. There is no specific aspect related to artificial intelligence when it comes to utilizing APIs for consumption, thus traditional approaches for ensuring legal compliance can be used.

**【译文】** ……冻结和删除事件。正如之前图 10.6 的部分所示，经过训练的模型通过 API 暴露出来，供人工智能应用程序使用。在使用 API 进行消费时，并没有涉及人工智能的特殊方面，因此可以使用传统的法律合规方法。

---

The necessity for obtaining consent in the legal context does not pertain to every artificial intelligence application; for instance, in cases where the training data does not include any personal details, this requirement becomes inapplicable. However, if consent handling is requested, section in Fig. 10.6 shows that the training dataset must be restricted only to the records for which consent is given.

**【译文】** 在法律背景下获取同意（consent）的必要性并非适用于所有人工智能应用；例如，如果训练数据不包含任何个人详细信息，则不适用此要求。但是，如果要求进行同意处理（consent handling），图 10.6 中的部分显示，训练数据集必须仅限于已获得同意的记录。

---

In this context, several inquiries emerge: What methods can we use to create a linkage between consent records and the data used in applications? How can we accurately align the intended purpose of consent? To address these issues, we repurpose the concept previously demonstrated for embedded artificial intelligence in Figs. 10.4 and 10.5.

**【译文】** 在这种情况下，会出现几个问题：我们可以使用什么方法在同意记录和应用程序中使用的数据之间建立链接？我们要如何准确地对齐同意的预期目的？为了解决这些问题，我们重新利用了之前在图 10.4 和 10.5 中针对嵌入式人工智能（embedded artificial intelligence）所演示的概念。

---

10.2.4 Additional Frameworks
The GDPR outlines a series of rights that can be exercised by the individual (data subject). These rights include the following:

**【译文】** 10.2.4 附加框架
通用数据保护条例（GDPR）概述了个人（数据主体）可以行使的一系列权利。这些权利包括：

---

Before processing begins, the data subject must be informed about the type of data being processed and stored, the purpose of the processing, and the duration of storage. Data protection has long been a crucial aspect of ERP product design, and as mentioned earlier, there are various features in ERP systems that help customers comply with legislation.

**【译文】** 在处理开始之前，必须告知数据主体正在处理和存储的数据类型、处理目的以及存储时长。长期以来，数据保护一直是 ERP 产品设计的一个关键方面，正如前文所述，ERP 系统中有各种功能可帮助客户遵守法律法规。

---

These features provide a centralized solution to data privacy challenges, reducing the effort required for all ERP applications. The right to prior information is addressed by the Information Retrieval Framework in ERP systems.

**【译文】** 这些功能为数据隐私挑战提供了集中式解决方案，减少了所有 ERP 应用程序所需的工作量。ERP 系统中的信息检索框架（Information Retrieval Framework）解决了事前知情权的问题。

---

Additionally, the GDPR mandates that data subjects have the right to request information about the data being processed, which is also covered by the Information Retrieval Framework. Furthermore, data subjects have the right to request the deletion of personal data.

**【译文】** 此外，GDPR 规定数据主体有权请求获取有关正在处理的数据的信息，这也由信息检索框架涵盖。此外，数据主体还有权请求删除个人数据。

---

Data must be deleted once all retention periods have passed or blocked when the primary purpose has expired, and the residence time has elapsed. The life cycle of personal data in ERP systems must address this issue.

**【译文】** 一旦所有保留期（retention periods）结束，必须删除数据；或者当主要目的失效且驻留时间（residence time）已过时，必须冻结数据。ERP 系统中的个人数据生命周期必须解决这一问题。

---

Personal data must also be accurate, up to date, and corrected (at the latest upon request). This must be ensured within the applications. Data subjects have the right to restrict processing in certain cases, and automated decisions may be subject to manual intervention, which must also be ensured within the applications.

**【译文】** 个人数据还必须准确、即时并在必要时进行更正（最迟在收到请求时）。这必须在应用程序内部得到保证。在某些情况下，数据主体有权限制处理，且自动化决策可能需要接受人工干预，这也必须在应用程序中得到保证。

---

Finally, data subjects have the right to request their stored personal data in a structured, commonly used, and machine-readable format. This process is supported by the Information Retrieval Framework.

**【译文】** 最后，数据主体有权要求以结构化、通用且机器可读的格式获取其存储的个人数据。此过程由信息检索框架提供支持。

---

Read Access Logging is a framework that logs all read operations when personal data is accessed. It helps clarify situations in case of abuse and ensures that actors who may have access to data in the system but were not supposed to access it can be held accountable for potential consequences.

**【译文】** 读取访问日志（Read Access Logging）是一个在访问个人数据时记录所有读取操作的框架。它有助于在发生滥用时厘清情况，并确保那些可能拥有系统数据访问权限但不应访问该数据的人员对潜在后果负责。

---

Read Access Logging is often necessary to comply with legal regulations or public standards, such as data protection and privacy, in industries like banking or healthcare.

**【译文】** 在银行或医疗保健等行业，通常需要读取访问日志来遵守法律法规或公共标准，例如数据保护和隐私规定。

---

Data protection and privacy involve safeguarding and limiting access to personal information. Some countries’ data protection and privacy laws even require reporting access to specific personal data.

**【译文】** 数据保护和隐私涉及保护个人信息并限制对其的访问。一些国家的数据保护和隐私法律甚至要求报告对特定个人数据的访问情况。

---

Companies and government agencies may also want to monitor access to classified or sensitive data for their own reasons. Without a trace or log of data access, it is challenging to identify the person responsible for any data leaks. Read Access Logging provides this information.

**【译文】** 公司和政府机构也可能出于自身原因希望监控对机密或敏感数据的访问。如果没有数据访问的痕迹或日志，就很难确定谁应对数据泄露负责。读取访问日志提供了这些信息。

---

The framework is based on a logging purpose that is defined according to an organization’s needs (e.g., data protection and privacy) and assigned as an attribute to each log entry, allowing log data to be classified and organized based on the logging purpose.

**【译文】** 该框架基于根据组织需求（例如数据保护和隐私）定义的“日志记录目的”（logging purpose），并将其作为属性分配给每个日志条目，从而允许根据日志记录目的对日志数据进行分类和组织。

---

Archiving rules or reporting can be created based on logging purposes. Thus, the Read Access Logging framework can be used to comply with legal or other regulations, detect fraud or data theft, conduct audits, or for any other internal purpose.

**【译文】** 可以根据日志记录目的创建归档规则或报告。因此，读取访问日志框架可用于遵守法律或其他法规，检测欺诈或数据盗窃，进行审计或用于任何其他内部目的。

---

Change documents are used to track all attribute changes to objects with this feature enabled. Parameters such as date, time, old value, new value, initiator, and more are logged.

**【译文】** 变更凭证（Change documents）用于跟踪启用了此功能的对象的所有属性更改。日期、时间、旧值、新值、发起人等参数都会被记录下来。

---

The framework offers various applications that can be used to view changes made to different objects. Many business objects are frequently changed, and it is often useful or necessary to trace these changes.

**【译文】** 该框架提供了各种应用程序，可用于查看对不同对象所做的更改。许多业务对象经常被更改，跟踪这些更改通常很有用或很有必要。

---

If changes are logged, customers can always determine what was changed, when it was changed, and how it was changed, which can help in error analysis. Change documents are used to support auditing in financial accounting, for example.

**【译文】** 如果记录了更改，客户始终可以确定更改了什么、何时更改以及如何更改，这有助于错误分析。例如，变更凭证可用于支持财务会计中的审计。

---

A change document records modifications to a business object, created independently of any changes to the database.

**【译文】** 变更凭证记录了对业务对象的修改，这种记录是独立于数据库的任何更改而创建的。

---

10.3 Conclusion
Processing of artificial intelligence must be compliant with data protection and privacy legislations. For example, the training job should only consider personal data for which consent is given.

**【译文】** 10.3 结论
人工智能的处理必须符合数据保护和隐私法律法规。例如，训练任务应仅考虑已获得同意的个人数据。

---

In this section, we determined the business requirements and the necessary technical implementation for general data protection regulation in the context of artificial intelligence. We transferred the legal regulations into technical requirements of blocking, deletion, consent, and automated decision-making.

**【译文】** 在本节中，我们在人工智能的背景下确定了通用数据保护条例（GDPR）的业务需求和必要的技术实现。我们将法律法规转化为冻结、删除、同意和自动化决策的技术需求。

---

Thus, we built the foundation to implement those legal requirements in ERP software for embedding artificial intelligence. We proposed specific solutions for embedded and side-by-side artificial intelligence.

**【译文】** 因此，我们为在 ERP 软件中实施这些法律要求以嵌入人工智能奠定了基础。我们针对嵌入式（embedded）和并行式（side-by-side）人工智能提出了具体的解决方案。

---

In this chapter, we concluded with additional frameworks that are typically available in ERP systems to resolve legal requirements and are also reused in the context of artificial intelligence.

**【译文】** 在本章的最后，我们总结了 ERP 系统中通常可用的附加框架，这些框架用于解决法律要求，并在人工智能的背景下被复用。

---

