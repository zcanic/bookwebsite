# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第19部分

**原始页码**: 55 - 57
**段落数量**: 7
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 54-54 (2310 字符)
- **后文上下文页码**: 58-58 (76 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Idea to Market: 译为“从创意到市场”，涵盖产品构思到推向市场的全过程。
2. Source to Pay: 译为“从寻源到付款”，采购领域的标准端到端流程。
3. Plan to Fulfill: 译为“从计划到履行”，供应链领域的术语。
4. Lead to Cash: 译为“从线索到现金”，销售领域的标准术语。
5. Recruit to Retire: 译为“从招聘到退休”，人力资源（HR）领域的标准术语。
6. Acquire to Decommission: 译为“从获取到退役”，资产管理领域的术语。
7. Portfolio Management: 译为“组合管理”，指对产品或项目组合的战略管理。
8. Ideation Management: 译为“构思管理”，指系统化收集和管理创意的过程。

---

of ERP software and, consequently, the significant challenge of integrating artificial intelligence into them. The explained business processes (the What) lay the groundwork for the reference ERP architecture (the How) that we will introduce in the next chapter. The reference ERP architecture forms the foundation for the technical solution concerning the incorporation of artificial intelligence into ERP software.

**【译文】** 关键业务流程的描述强调了企业资源规划（ERP）软件的复杂性，进而也凸显了将人工智能整合到其中的巨大挑战。所阐述的业务流程（即“做什么”）为我们在下一章介绍的参考 ERP 架构（即“怎么做”）奠定了基础。该参考 ERP 架构构成了将人工智能融入 ERP 软件的技术解决方案的基石。

---

Fig. 3.1 Enterprise domains
3 ERP Reference Processes
Fig. 3.2 Reference business processes
3.1 Introduction

**【译文】** 图 3.1 企业领域
3 ERP 参考流程
图 3.2 参考业务流程
3.1 引言

---

ideation, requirement analysis, and design of products and services. This output is then utilized in the Source to Pay process, which involves contracting suppliers, procuring necessary materials and services, and paying the corresponding invoices. The Plan to Fulfill process encompasses the receipt and inspection of goods, as well as the manufacturing of products or provisioning of services. Marketing activities that generate leads and convert opportunities into quotes and orders are facilitated by the Lead to Cash process. In addition to these core processes, supplementary processes are required to support an enterprise. Recruit to Retire manages the entire employee life cycle, from recruitment and onboarding to development, rewards, and retirement. Acquire to Decommission handles the planning, acquisition, onboarding, operation, and offboarding of assets such as manufacturing machines. Companies must also manage risks and compliance, identity and access, cybersecurity and data privacy, IT infrastructure, and trade and tax regulations, which are ensured by the supporting Governance process. The Finance process covers invoice to pay and cash management, as well as treasury and real estate management.

**【译文】** [从创意到市场流程包括]产品和服务的构思、需求分析和设计。这一输出随后被用于“从寻源到付款”流程，该流程涉及签约供应商、采购必要的材料和服务以及支付相应发票。“从计划到履行”流程涵盖货物接收和检验，以及产品制造或服务提供。产生线索并将机会转化为报价和订单的营销活动则由“从线索到现金”流程推动。除了这些核心流程外，还需要辅助流程来支持企业运营。“从招聘到退休”管理员工的整个生命周期，从招聘和入职到发展、奖励和退休。“从获取到退役”处理制造机器等资产的规划、获取、入库、运营和清理。企业还必须管理风险与合规、身份与访问、网络安全与数据隐私、IT 基础设施以及贸易和税务法规，这些由支持性的“治理”流程来确保。“财务”流程涵盖发票到付款和现金管理，以及资金和房地产管理。

---

Those business processes are described briefly in the next sections.

**【译文】** 接下来的章节将简要描述这些业务流程。

---

3.2 Idea to Market
3.3
The Plan to Optimize Products/Services encompasses in general the Product and Service Portfolio Management. The portfolio management is responsible for the following tasks:
1. Assemble and delineate portfolio components
2. Define and assess portfolio components
3. Compare and make decisions on portfolio components
4. Monitor portfolio components

**【译文】** 3.2 从创意到市场
3.3
“优化产品/服务计划”通常涵盖“产品和服务组合管理”。组合管理负责以下任务：
1. 汇总并界定组合组件
2. 定义并评估组合组件
3. 比较并对组合组件做出决策
4. 监控组合组件

---

These tasks are executed using a variety of metrics for comparison. The actual implementation of each component occurs later in project management. In summary, the Product and Service Portfolio Management is responsible for overseeing product and service strategies, managing the product and service portfolio, and planning and tracking portfolio investments.

**【译文】** 这些任务使用各种指标进行比较来执行。每个组件的实际实施发生在随后的项目管理中。总之，产品和服务组合管理负责监督产品和服务战略，管理产品和服务组合，以及规划和跟踪组合投资。

---

The Process from Idea to Requirement comprises Ideation Management and Product and Service Design Management. The primary focus of ideation management is to systematically capture new ideas for products/services or their variations, as well as to systematically document new ideas for enhancing or modifying existing products/services. Ideation management involves not only recording ideas but also evaluating their feasibility. Several evaluation criteria, such as cost and competitive analysis, are necessary for this assessment. It is crucial to conduct exploratory research before defining new concepts. Subsequently, new ideas and requirements are analyzed. Upon completing ideation management, the Product and Services Design Management phase begins, which

**【译文】** “从创意到需求”的流程包括“构思管理”和“产品和服务设计管理”。构思管理的主要重点是系统地捕捉产品/服务或其变体的新创意，以及系统地记录增强或修改现有产品/服务的新想法。构思管理不仅涉及记录创意，还涉及评估其可行性。这种评估需要成本和竞争分析等若干评估标准。在定义新概念之前进行探索性研究至关重要。随后，对新创意和需求进行分析。构思管理完成后，产品和服务设计管理阶段便随之开始，该阶段……

---

