# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第62部分

**原始页码**: 184 - 186
**段落数量**: 21
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 183-183 (2427 字符)
- **后文上下文页码**: 187-187 (1111 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Blocking: 在ERP/SAP数据合规语境下译为'冻结'，意指数据留存但限制访问。 2. Residence and retention periods: 译为'停留期和保留期'，是信息生命周期管理（ILM）的标准术语。 3. Controller: 依据GDPR标准译为'控制者'。 4. Data Subject: 依据GDPR标准译为'数据主体'。 5. Technical and organizational measures: 简称TOMs，GDPR标准术语，译为'技术和组织措施'。

---

considerations. Beyond adhering to general data protection laws, compliance with industry-specific regulations in various countries is also crucial. But how do these legislations impact artificial intelligence? Naturally, artificial intelligence within the context of ERP must abide by these legal and data protection guidelines. However, what specific aspects should be taken into account for artificial intelligence? In this section, we will extract the key technical requirements for incorporating artificial intelligence into ERP software from the aforementioned laws.

**【译文】** 考量。除了遵守通用数据保护法律外，遵守各国特定的行业法规也至关重要。但是这些法规如何影响人工智能？当然，ERP背景下的人工智能必须遵守这些法律和数据保护准则。然而，针对人工智能具体应该考虑哪些方面？在本节中，我们将从上述法律中提炼出将人工智能整合到ERP软件中的关键技术要求。

---

The concept of personal data is outlined in numerous regulations, standards, and guidelines, with most definitions being as comprehensive as possible to ensure maximum protection for individuals. The common thread among these definitions is that personal data refers to any information connected to an identified or identifiable natural person. One primary legal requirement is that processing personal data is prohibited unless a valid reason is provided, such as a contract, other legal grounds permitting the processing, or explicit consent from the data subject.

**【译文】** 许多法规、标准和指南中都概述了个人数据的概念，大多数定义的范围都尽可能广泛，以确保最大限度地保护个人。这些定义的共同点是，个人数据是指与已识别或可识别的自然人相关的任何信息。一个主要的法律要求是，除非提供正当理由，否则禁止处理个人数据，例如合同、允许处理的其他法律依据或数据主体的明确同意。

---

Basic data protection requirements are often categorized as technical and organizational measures, including authentication, authorization, communication security, secure system landscape and operation, read access logging, information retrieval, encryption and decryption of sensitive data, input control change logging, separation by purpose, and masking or anonymization. The implementation of these requirements is well established and not specific to artificial intelligence, so they will not be discussed further in this section.

**【译文】** 基本的数据保护要求通常被归类为“技术和组织措施”，包括认证、授权、通信安全、安全的系统架构和运行、读取访问日志记录、信息检索、敏感数据的加密和解密、输入控制变更日志记录、按目的分离以及屏蔽或匿名化。这些要求的实施已经非常成熟，并非人工智能所特有，因此本节将不再进一步讨论。

---

In the context of artificial intelligence, the following legal requirements must be taken into account:
• Deletion

**【译文】** 在人工智能的背景下，必须考虑以下法律要求：
• 删除

---

In some countries, personal data must be erased once the specified, explicit, and legitimate purpose of the processing has concluded, provided that no other retention periods are outlined in legislation, such as those for financial documents. In certain cases, personal data may also encompass referenced data. Consequently, the challenge for deletion lies in managing referenced data first, followed by data like business partner information. Artificial intelligence training and inference must be capable of handling the deletion of personal data.

**【译文】** 在某些国家/地区，一旦处理的特定、明确和合法的目的已经达成，且法律（例如财务文件法规）未规定其他保留期限，则必须擦除个人数据。在某些情况下，个人数据也可能包含被引用的数据。因此，删除的挑战在于首先管理被引用的数据，其次才是业务合作伙伴信息等数据。人工智能的训练和推理必须能够处理个人数据的删除。

---

• Blocking

**【译文】** • 冻结

---

Legal requirements in specific scenarios or countries may also necessitate blocking data, limiting further processing or usage when the specified, explicit, and legitimate purposes of the processing have concluded but the data remains in the database due to other legally defined retention periods. Artificial intelligence training and inference must not process blocked data.

**【译文】** 特定场景或国家的法律要求可能还需要冻结数据，即当处理的特定、明确和合法的目的已经达成，但由于其他法律规定的保留期限，数据仍需保留在数据库中时，限制其进一步处理或使用。人工智能的训练和推理不得处理已冻结的数据。

---

• Consent

**【译文】** • 同意

---

A legal basis is needed to process personal data. GDPR identifies six legal options for processing personal data, one of which is consent. Other legal grounds include contracts, legal obligation, protection of vital interest, public interest, and legitimate interest. If none of the other legal grounds apply, the individual’s consent for the intended processing of personal data is necessary. Artificial intelligence training must not process data without the required consent. This is only relevant for artificial intelligence scenarios that necessitate consent.

**【译文】** 处理个人数据需要法律依据。通用数据保护条例（GDPR）确定了处理个人数据的六种法律选项，其中之一是“同意”。其他法律依据包括合同、法律义务、保护切身利益、公共利益和合法利益。如果其他法律依据均不适用，则必须征得个人同意才能进行预期的个人数据处理。人工智能训练不得在未获得必要同意的情况下处理数据。这一点仅适用于必须要征得同意的人工智能场景。

---

• Automated decision-making

**【译文】** • 自动化决策

---

The controller must inform the data subject about the existence of automated decision-making and provide meaningful information about the logic involved, as well as the significance and the anticipated consequences of such processing for the data subject. An explanation of artificial intelligence for automated decision-making and its consequences is required.

**【译文】** 控制者必须告知数据主体是否存在自动化决策，并提供有关所涉及逻辑的有意义信息，以及此类处理对数据主体的重要性及预期后果。这要求对用于自动化决策的人工智能及其后果进行解释。

---

Moreover, it is essential to avoid bias and discrimination against individuals in artificial intelligence applications. The performance of these models should be consistent for all users, regardless of their group affiliation, based on as many factors as possible. Artificial intelligence developers must guarantee fairness at the individual level, ensuring that similar people receive similar results. To prevent biased outcomes, it is crucial to assess any discrepancies in accuracy across different groups.

**【译文】** 此外，必须避免人工智能应用中针对个人的偏见和歧视。这些模型的表现应对所有用户保持一致，无论其所属群体如何，并基于尽可能多的因素。人工智能开发者必须保证个体层面的公平性，确保相似的人获得相似的结果。为了防止结果产生偏差，评估不同群体在准确性方面的任何差异至关重要。

---

The use of sensitive personal information should be carefully considered and used only when absolutely necessary for the intended purpose. This processing must not lead to direct or indirect discrimination against any specific group of people. For the bias and discrimination, various frameworks are available in the market and therefore not further considered.

**【译文】** 应谨慎考虑使用敏感个人信息，并且仅在预期目的绝对必要时才使用。这种处理不得导致针对任何特定人群的直接或间接歧视。关于偏见和歧视，市场上有各种框架可用，因此不再进一步讨论。

---

10.2 Solution Proposal

**【译文】** 10.2 解决方案建议

---

In this section, we propose how to resolve the previous explained legal requirements. Addressing these requirements, which include deletion, blocking, and consent, relies on both embedded and side-by-side artificial intelligence variants. However, automated decision-making can be contemplated for both variants collectively and is discussed in a shared segment. We will explore the diverse solutions that aid in meeting legal requirements, as well as the implementation of these requirements in embedded and artificial intelligence systems.

**【译文】** 在本节中，我们将提出如何解决前述的法律要求。解决这些要求（包括删除、冻结和同意）依赖于嵌入式和并行式的人工智能变体。然而，自动化决策可以针对这两种变体统筹考虑，并将在一个共享部分中进行讨论。我们将探讨有助于满足法律要求的各种解决方案，以及这些要求在嵌入式和人工智能系统中的实施。

---

10.2.1 Blocking, Deleting, and Consent

**【译文】** 10.2.1 冻结、删除和同意

---

10.1
To utilize blocking effectively, residence and retention periods for specific objectives are established in Information Lifecycle Management. Various purposes necessitate different residence and retention periods. For instance, trading peppermint oil serves different purposes than trading cough syrup. The system identifies the data processing purposes by examining the following technical attributes:

**【译文】** 10.1
为了有效地利用冻结功能，需在“信息生命周期管理（ILM）”中为特定目标设定停留期和保留期。不同的目的需要不同的停留期和保留期。例如，薄荷油贸易与止咳糖浆贸易的目的不同。系统通过检查以下技术属性来识别数据处理目的：

---

• Line organizational attributes signify the data controller, such as the company code.

**【译文】** • 业务线组织属性：标识数据控制者，例如公司代码。

---

• Process organizational attributes aid in distinguishing between business processes. For example, by allocating specific order types, processes like the peppermint oil trade and the cough syrup trade can be differentiated.

**【译文】** • 流程组织属性：有助于区分业务流程。例如，通过分配特定的订单类型，可以区分薄荷油贸易和止咳糖浆贸易等流程。

---

When a document has fulfilled its intended purpose, the Information Lifecycle Management framework is used to archive and block the document within the system. To block central master data, such as business partners, customers, or vendors, an end-of-purpose check first ascertains if any applications, like sales and distribution or financials, continue to utilize the pertinent master data in accordance with its original purpose.

**【译文】** 当凭证完成了其预期目的后，信息生命周期管理框架用于在系统中归档和冻结该凭证。为了冻结中央主数据（例如业务合作伙伴、客户或供应商），“目的结束检查”首先确定是否有任何应用程序（例如销售与分销或财务）根据其原始目的继续使用相关主数据。

---

If not, the system designates the data as blocked, thereby preventing any further legally compliant processing. Consequently, transactional data is blocked through Information Lifecycle Management, while master data is blocked using a central blocking indicator. An authorization framework governs both

**【译文】** 如果没有，系统将该数据标记为已冻结，从而阻止任何进一步的合规处理。因此，交易数据通过信息生命周期管理进行冻结，而主数据则使用中央冻结标识进行冻结。一种授权框架同时管理这两种（冻结方式...）

---

