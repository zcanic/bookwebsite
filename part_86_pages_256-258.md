# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第86部分

**原始页码**: 256 - 258
**段落数量**: 9
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 255-255 (1267 字符)
- **后文上下文页码**: 259-259 (2268 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Transaction: 在ERP（特别是SAP）语境下，通常翻译为'事务'或'事务处理'，指的是系统中执行特定业务功能的界面或代码。
2. Drilldown: 翻译为'向下钻取'，是数据分析常用术语，指从汇总数据深入查看详细数据的操作。
3. Inference: 在AI语境下翻译为'推理'，指使用训练好的模型进行预测的过程。
4. Work program: 审计领域术语，翻译为'工作方案'或'工作底稿'，此处选用'工作方案'以体现流程性。

---

entities must be taken into account, which necessitates application-specific development and cannot be generically managed.

**【译文】** ……实体必须被纳入考量，这需要针对特定应用进行开发，而无法进行通用化管理。

---

1. Planning
The planning phase of the audit is the first step in the auditing process. During this phase, the overall strategies and focus areas for the organization are established, the audit plan for the upcoming audit period is created, and audit resources are organized for the planned audits. Auditable items, audits, and audit plans are generated in this phase.

**【译文】** 1. 规划
审计的规划阶段是审计过程的第一步。在此阶段，将确立组织的总体战略和重点领域，制定即将到来的审计周期的审计计划，并为计划中的审计组织资源。此阶段将生成可审计项目、审计任务和审计计划。

---

2. Preparation
During the preparation phase of the audit, the auditor creates and documents the audit work program that meets the audit engagement objectives. The auditor establishes the structure of the work program, outlines the detailed procedures for the audit, and gets approval from the audit manager before initiating the audit. The audit manager receives the work program, reviews it, and decides to approve or reject it. If an audit announcement letter is needed for the audit, the auditor can also prepare audit announcement letters in this phase. Once the announcement letter is approved and distributed, the auditor proceeds with the preparation of the work program.

**【译文】** 2. 准备
在审计的准备阶段，审计员创建并记录符合审计业务目标的审计工作方案。审计员确立工作方案的结构，概述详细的审计程序，并在启动审计前获得审计经理的批准。审计经理接收工作方案，对其进行审查，并决定批准或拒绝。如果审计需要发布审计公告函，审计员也可在此阶段准备。一旦公告函获批并分发，审计员将继续准备工作方案。

---

3. Execution
The implementation phase is the stage where the actual auditing activities occur. During this stage, auditors carry out interviews, collect data, document evidence, and formulate conclusions and recommendations. In the course of the execution phase, the inspector has the opportunity to examine the applications of artificial intelligence. To do this, the logs of the application are studied as they form the foundation for comprehending and recreating the business procedures into which the capabilities of artificial intelligence are incorporated. A generic transaction with a variety of filter criteria is offered to present the application logs. Moreover, the applications of artificial intelligence may also include user interface sections to show the application logs. To facilitate the drilldown analysis from the application logs to the specifics, the logs of inference and model are connected to the application logs.

**【译文】** 3. 执行
实施阶段是实际审计活动发生的阶段。在此阶段，审计员进行访谈、收集数据、记录证据并形成结论和建议。在执行过程中，检查人员有机会审查人工智能应用。为此，需要研究应用日志，因为它们是理解和重现融入了人工智能能力的业务流程的基础。系统提供了一个带有多种过滤条件的通用事务处理界面来展示应用日志。此外，人工智能应用还可能包含用于展示应用日志的用户界面部分。为了便于从应用日志向下钻取分析到细节，推理日志和模型日志已与应用日志相关联。

---

4. Disclosure
Disclosure is the concluding stage of the auditing. In this stage, auditing reports are generated, reviewed, and shared with the interested parties. Auditors assess the adequacy, effectiveness, and timelines of actions undertaken by the management on reported conclusions and recommendations. In reviewing the evaluation outcomes, the auditor decides whether the management has put the recommendations into practice or acknowledged the risks of not putting them into action.

**【译文】** 4. 披露
披露是审计的最后阶段。在此阶段，生成、审查并与相关方共享审计报告。审计员评估管理层针对报告的结论和建议所采取行动的充分性、有效性和及时性。在审查评估结果时，审计员将判定管理层是否已将建议付诸实践，或者是否已确认不执行建议所带来的风险。

---

Fig. 16.4 Integration of artificial intelligence logs in auditing process

**【译文】** 图 16.4 审计过程中人工智能日志的整合

---

16.3 Conclusion

**【译文】** 16.3 结论

---

Logging and auditing are processes used to track and monitor system activity. Logging involves recording system events, such as user logins, file access, and system errors, while auditing involves analyzing the logs to identify security threats and suspicious activity. Logging and auditing help organizations detect and respond to security incidents, as well as ensure compliance with security policies. Artificial intelligence training and inference processes must be traceable. For this, proper logging is necessary. These logs are also the basis of auditing of artificial intelligence, which is a legal obligation. In this section, we deduced the business requirements and proposed the necessary technical implementation for logging and legal auditing in the context of artificial intelligence.

**【译文】** 日志记录和审计是用于跟踪和监控系统活动的流程。日志记录涉及记录系统事件，如用户登录、文件访问和系统错误，而审计则涉及分析日志以识别安全威胁和可疑活动。日志记录和审计帮助组织检测和响应安全事件，并确保符合安全策略。人工智能的训练和推理过程必须是可追溯的。为此，适当的日志记录必不可少。这些日志也是人工智能审计的基础，这是一项法律义务。在本节中，我们推导了业务需求，并提出了在人工智能背景下进行日志记录和法律审计所需的技术实现方案。

---

For this, we identified the logging entities, the triggering actions, and the involved roles. Furthermore, we proposed integration concept into the artificial intelligence training and inference processes but also into the ERP’s audit management. This shall be a software solution designed to allow organizations manage their internal and external audit processes. It should provide a comprehensive set of tools to help organizations streamline their audit processes, reduce costs, and improve compliance. It must include features such as audit planning, risk assessment, audit execution, audit reporting, and audit tracking. It should also provide a centralized repository for audit documents and evidence, as well as an integrated workflow to ensure that all audit tasks are completed in a timely manner.

**【译文】** 为此，我们确定了日志实体、触发操作和相关角色。此外，我们不仅提出了与人工智能训练和推理过程整合的概念，还提出了与ERP审计管理整合的概念。这应是一个旨在允许组织管理其内部和外部审计流程的软件解决方案。它应提供一套全面的工具，帮助组织简化审计流程、降低成本并提高合规性。它必须包含审计规划、风险评估、审计执行、审计报告和审计跟踪等功能。它还应提供用于存储审计文档和证据的中央存储库，以及确保所有审计任务及时完成的集成工作流。

---

