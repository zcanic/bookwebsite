# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第61部分

**原始页码**: 181 - 183
**段落数量**: 11
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 180-180 (1214 字符)
- **后文上下文页码**: 184-184 (3414 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Natural person' 翻译为'自然人'（法律术语）。2. 'Data subject' 翻译为'数据主体'。3. 'Training job' 翻译为'训练任务'，指AI模型的训练过程。4. 最后一句话参考了后文上下文补全了含义。

---

10
Data Protection and Data Privacy
In this chapter, we specify the business requirements and propose the solution concept for data protection and data privacy. ERP systems must fulfill legal requirements. Thus, processing of artificial intelligence must be compliant with data protection and data privacy legislations. For example, the training job must only consider personal data for which consent is given. Compliance must be ensured for all aspects of General Data Protection Regulation (GDPR). Authorization concept must ensure that only permitted user apply inference calls and consume the results.

**【译文】** 第10章
数据保护与数据隐私
在本章中，我们将明确业务需求并提出数据保护和数据隐私的解决方案概念。企业资源规划（ERP）系统必须满足法律要求。因此，人工智能的处理过程必须符合数据保护和数据隐私的法律法规。例如，训练任务必须仅使用已获得同意的个人数据。必须确保符合《通用数据保护条例》（GDPR）的所有方面。授权概念必须确保留只有经许可的用户才能调用推理功能并使用其结果。

---

10.1 Problem Statement
Over the years, the subjects of data-sharing standards and personal data protection have evolved, driven by the growth of information technology. The first legislation addressing these issues have been introduced in 1970 in the German federal state of Hessen. This law aimed to regulate data sharing within Germany but did not cover international data transfers. Consequently, data was processed and stored in other locations and jurisdictions with less stringent regulations. Regulators had to address this problem and implement restrictions on international data transfers. The ultimate goal was to harmonize effective data protection across jurisdictions, allowing for the removal of transfer restrictions across national borders.

**【译文】** 10.1 问题陈述
多年来，随着信息技术的发展，数据共享标准和个人数据保护的主题也在不断演变。针对这些问题的首部立法于1970年在德国黑森州出台。该法律旨在规范德国境内的数据共享，但未涵盖国际数据传输。因此，数据会在法规较宽松的其他地点和司法管辖区进行处理和存储。监管机构必须解决这一问题，并对国际数据传输实施限制。最终目标是在各司法管辖区协调有效的数据保护，从而消除跨国界的传输限制。

---

The initial two data protection frameworks were the Organization for Economic Co-operation and Development Privacy Guidelines (OECD) in 1980 and the Council of Europe Convention for the protection of individuals concerning the automatic processing of personal data in 1981, also known as Convention 108. These regulations permitted data transfers to other participating states and even prohibited some transfer restrictions for privacy reasons between participating states. A more recent approach to regulating data sharing and data protection was introduced by the European Union’s Data Protection Directive in 1995, which led to the introduction of its successor in 2016: The General Data Protection Regulation took effect on May 25, 2018.

**【译文】** 最初的两个数据保护框架是1980年的《经济合作与发展组织隐私指南》（OECD）和1981年的欧洲委员会《关于个人数据自动处理的个人保护公约》（即第108号公约）。这些法规允许向其他参与国传输数据，甚至出于隐私原因禁止在参与国之间设置某些传输限制。欧盟于1995年发布的《数据保护指令》引入了一种规范数据共享和数据保护的较新方法，这促成了其继任者于2016年的问世：2018年5月25日生效的《通用数据保护条例》。

---

Data protection and privacy have been significant concerns for decades and have grown in importance in recent years. Regulations like the General Data Protection Regulation (GDPR) and Organization for Economic Co-operation and Development Privacy Guidelines (OECD) significantly impact how personal data is managed and stored. ERP vendors must help their customers comply with all requirements using their products. Two aspects must be considered when working with personal data: data protection and data privacy.

**【译文】** 几十年来，数据保护和隐私一直是人们关注的重点，近年来其重要性与日俱增。诸如《通用数据保护条例》（GDPR）和《经济合作与发展组织隐私指南》（OECD）等法规深刻影响着个人数据的管理和存储方式。ERP供应商必须帮助其客户利用其产品满足所有合规要求。在处理个人数据时，必须考虑两个方面：数据保护和数据隐私。

---

Data protection involves safeguarding information against unauthorized access through computing environments. For instance, it is crucial to ensure that unauthorized users cannot read or edit data. In the worst-case scenario, data could be lost, deleted, or misused, leading to further consequences. The information security officer is responsible for ensuring that all requirements in this area are met. Data privacy focuses on protecting individuals concerning the processing of personal data. Ignoring this issue could result in the violation of personal rights, leading to substantial monetary penalties. The data privacy officer is responsible for ensuring that all requirements in this area are met. To meet data protection and privacy requirements, technical and organizational measures (TOMs) must be implemented. These measures ensure a level of security appropriate to the risks described.

**【译文】** 数据保护涉及通过计算环境防止未经授权的信息访问。例如，确保未经授权的用户无法读取或编辑数据至关重要。在最坏的情况下，数据可能会丢失、被删除或被滥用，从而导致进一步的后果。信息安全官负责确保满足该领域的所有要求。数据隐私侧重于保护个人有关其个人数据处理的权益。忽视这一问题可能会导致侵犯个人权利，从而引致巨额罚款。数据隐私官负责确保满足该领域的所有要求。为了满足数据保护和隐私要求，必须实施技术和组织措施（TOMs）。这些措施确保了与所述风险相适应的安全水平。

---

10.1.1 General Data Protection Regulation
As previously noted, the European Union introduced the General Data Protection Regulation (GDPR 2023) in 2016 as a follow-up to the initial attempt made by the European Union’s Data Protection Directive in 1995. The GDPR became effective on May 25, 2018. While there were no significant technical alterations compared to the 1995 approach, the GDPR raised penalties to as much as 4% of a company’s annual revenue, prompting many businesses to pay closer attention to compliance with the regulations. As of April 2020, the largest fine imposed was nearly 205 million euros. The GDPR mandates that any transfer to a country outside the European Union must be carried out in accordance with a transfer justification, which must be approved beforehand by the European Commission.

**【译文】** 10.1.1 通用数据保护条例
如前所述，欧盟于2016年推出了《通用数据保护条例》（GDPR 2023），作为对欧盟1995年《数据保护指令》这一初步尝试的后续跟进。GDPR于2018年5月25日正式生效。虽然与1995年的方法相比没有重大的技术变更，但GDPR将罚款提高到了公司年收入的4%，这促使许多企业更加关注法规的合规性。截至2020年4月，最大一笔罚款接近2.05亿欧元。GDPR规定，向欧盟以外国家的任何数据传输必须依据传输理由进行，且该理由必须预先获得欧盟委员会的批准。

---

The GDPR establishes various definitions and principles. Personal data is defined as information related to an identified or identifiable natural person (the data subject) who can be identified either directly or indirectly, particularly by reference to an identifier or one or more factors specific to the individual’s physical, physiological, genetic, mental, economic, cultural, or social identity. Consequently, personal data encompasses all information that directly identifies a person or can lead to their indirect identification. Direct identifiers include names, postal addresses, phone numbers, and email addresses, while indirect identifiers include bank account numbers, IP addresses, MAC addresses, membership numbers, and license plate numbers. To enhance data privacy standards, the GDPR outlines several principles for processing data in accordance with its requirements, such as lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity, and confidentiality.

**【译文】** GDPR确立了各种定义和原则。个人数据被定义为与已识别或可识别的自然人（数据主体）相关的信息，该自然人可以直接或间接被识别，特别是通过引用标识符或特定于该个人物理、生理、遗传、心理、经济、文化或社会身份的一个或多个因素。因此，个人数据涵盖了所有直接识别个人或可导致其被间接识别的信息。直接标识符包括姓名、邮政地址、电话号码和电子邮件地址，而间接标识符包括银行账号、IP地址、MAC地址、会员编号和车牌号。为了提高数据隐私标准，GDPR概述了若干符合其要求的数据处理原则，如合法性、公平性、透明度、目的限制、数据最小化、准确性、存储限制、完整性和保密性。

---

As a result, processing personal data is prohibited unless there is a valid and justifiable reason. The purpose of data processing must be documented at every stage, applying to entire sets of personal data and business partner records as well as individual data pieces. Justifiable reasons for processing personal data include:
• The data subject’s consent
• The necessity for contract processing
• The need to fulfill legal obligations
• The requirement in the public interest
• The need to protect a vital interest
• The basis on a legitimate interest

**【译文】** 因此，除非存在有效且正当的理由，否则禁止处理个人数据。数据处理的目的必须在每个阶段都进行记录，这适用于整套个人数据和业务合作伙伴记录以及单个数据片段。处理个人数据的正当理由包括：
• 数据主体的同意
• 合同处理的必要性
• 履行法律义务的需要
• 公共利益的要求
• 保护切身利益的需要
• 基于合法利益

---

Consent is characterized as a freely given, specific, informed, and unambiguous indication of the data subject’s desires, signifying their agreement to the processing of their personal data through a statement or clear affirmative action. Data processing is necessary for contract performance when it is essential or intended for entering into a contract. Examples of legal obligations include tax reporting, income tax reporting, or social insurance reporting in ERP software. Public interest exists when processing is necessary for performing a task in the public interest or exercising official authority, and it should be based on Union or Member State law. Vital interest refers to situations where data processing is crucial for the life of the data subject or another natural person. Legitimate interests pertain to the fundamental rights and freedoms of the data subject.

**【译文】** 同意被定义为数据主体自愿给予、具体、知情且明确的意愿表示，通过声明或明确的肯定行动表示其同意处理其个人数据。当数据处理对于订立合同至关重要或旨在订立合同时，它是履行合同所必需的。法律义务的例子包括ERP软件中的税务申报、所得税申报或社会保险申报。当处理是执行公共利益任务或行使官方权力所必需，且基于联盟或成员国法律时，即存在公共利益。切身利益是指数据处理对于数据主体或其他自然人的生命至关重要的情况。合法利益涉及数据主体的基本权利和自由。

---

10.1.2 California Consumer Privacy Act
The California Consumer Privacy Act (CCPA 2023) is a legislation akin to the European Union’s General Data Protection Regulation (GDPR), enacted by the California Department of Justice in 2018. This law empowers individuals with greater authority over their personal data collected by companies. It establishes privacy protections for consumers in California, encompassing rights such as:
• Understanding the nature of personal data collected by businesses, as well as its usage and distribution
• Requesting the deletion of collected personal information, subject to certain limitations
• Choosing to prohibit the sale of their personal data
• Ensuring fair treatment (non-discrimination) when exercising their CCPA rights

**【译文】** 10.1.2 加州消费者隐私法案
《加州消费者隐私法案》（CCPA 2023）是一项类似于欧盟《通用数据保护条例》（GDPR）的立法，由加州司法部于2018年颁布。该法律赋予个人对公司收集的其个人数据更大的控制权。它为加州的消费者建立了隐私保护，包括以下权利：
• 了解企业收集的个人数据性质及其用途和分发情况
• 请求删除已收集的个人信息（受特定限制约束）
• 选择禁止出售其个人数据
• 在行使CCPA权利时确保受到公平对待（不被歧视）

---

10.1.3 Requirements for Artificial Intelligence
The General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA) encompass a multitude of legal obligations and privacy

**【译文】** 10.1.3 人工智能的要求
《通用数据保护条例》（GDPR）和《加州消费者隐私法案》（CCPA）包含了大量的法律义务和隐私考量因素。

---

