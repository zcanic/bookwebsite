# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第45部分

**原始页码**: 133 - 135
**段落数量**: 12
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 132-132 (3408 字符)
- **后文上下文页码**: 136-136 (2725 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Time to value' 译为 '价值实现时间'，是商业管理常用语，指从投资到产生价值的时间。2. 'Artifacts' 在软件工程和数据语境下译为 '工件'。 3. 'Compatibility matching' 译为 '兼容性匹配'，指组件间的适配。 4. 'Solution proposal' 译为 '解决方案提案'，强调系统主动提出的解决建议。

---

The no IT costs model involves paying only for services rather than hardware, software, power, and support to keep these items secure, stable, and functioning properly. There are no additional costs for setting up, maintaining, or upgrading standard stacks (SaaS), underlying platforms (PaaS), or infrastructure (IaaS). Upgrades are included in the monthly fees, eliminating the need for administrative work and IT expertise. Cloud computing removes the need for on-premises servers, allowing customers to avoid large upfront investments in hardware and software required to run their networks. In artificial intelligence-enabled ERP environments, these costs, along with network maintenance expenses, are included in a flat monthly fee. When servers, network backbones, and artificial intelligence services need upgrading, the ERP provider is responsible for doing so at no extra cost to the customer.

**【译文】** “无 IT 成本模式”意味着企业只需为服务付费，而无需为硬件、软件、电力以及保障这些设施安全、稳定和正常运行的支持服务买单。对于标准堆栈（SaaS）、底层平台（PaaS）或基础设施（IaaS），企业无需支付额外的设置、维护或升级费用。升级服务已包含在月费中，从而免除了繁琐的管理工作和对内部 IT 专长的依赖。云计算消除了对本地服务器的需求，使客户能够避免在运行网络所需的软硬件上投入巨额前期资金。在支持人工智能的 ERP 环境中，这些成本连同网络维护费用都包含在统一的月费中。当服务器、网络骨干网和人工智能服务需要升级时，ERP 供应商将负责执行，且不会向客户收取额外费用。

---

In many organizations, lines of business (LoB) lead discussions about fast time to value from artificial intelligence services in the cloud. Traditional IT departments can be quickly outpaced by buy-and-go cloud artificial intelligence services, as maintenance, patching, and upgrading are all managed by the ERP provider. Companies want to quickly establish their artificial intelligence computing arrangements with out-of-the-box services. This necessitates rapid availability, timely provisioning of productive systems, quick go-live, pre-delivered content, best practice processes, guided configuration, seamless data integration, user-friendly interfaces, minimal training effort, legacy system conversion/migration, and online tutorials.

**【译文】** 在许多组织中，业务部门（LoB）主导着关于如何从云端人工智能服务中快速实现价值（Time to Value）的讨论。传统的 IT 部门可能会迅速被“即买即用”的云端人工智能服务所超越，因为后者的维护、补丁更新和升级全权由 ERP 供应商管理。企业希望利用开箱即用的服务快速建立其人工智能计算环境。这就要求服务具备以下特性：快速可用性、生产系统的及时配置、快速上线、预交付的内容、最佳实践流程、引导式配置、无缝的数据集成、用户友好的界面、最低的培训成本、遗留系统的转换/迁移以及在线教程。

---

Partner models necessitate new original equipment manufacturer (OEM) or value-added reseller (VAR) license agreements for artificial intelligence services, including partner usage rights, compliance obligations, and service level agreements (SLAs). Typically, OEMs assemble components from other vendors to create a new product sold under their own brand. VARs purchase products from manufacturers, add value in some way (e.g., by adding a new service), and resell the product under their own brand. A VAR agreement outlines the legal contract for this process. ERP providers gain firsthand information about customer purchases, active application usage, user types, and usage duration. Access to customer data helps maximize up-sells and cross-sells through loyalty programs. These programs enable ERP providers to discover desired artificial intelligence capabilities and encourage customer retention (renewal). In addition to customer retention programs, internal user engagement programs should also be offered.

**【译文】** 合作伙伴模式需要针对人工智能服务签订新的原始设备制造商（OEM）或增值经销商（VAR）许可协议，其中包括合作伙伴的使用权、合规义务和服务等级协议（SLA）。通常，OEM 会组装来自其他供应商的组件，打造出以自己品牌销售的新产品；而 VAR 则从制造商处购买产品，通过某种方式增加价值（例如添加一项新服务），然后以自己的品牌转售。VAR 协议即为这一过程的法律合同。通过这种模式，ERP 供应商可以获得关于客户购买、活跃应用使用情况、用户类型和使用时长的第一手信息。访问客户数据有助于通过忠诚度计划最大化追加销售（Up-sells）和交叉销售（Cross-sells）。这些计划使 ERP 供应商能够发掘客户渴望的人工智能能力，并促进客户留存（续约）。除了客户留存计划外，还应提供内部用户参与度计划。

---

6.2 AI Patterns of ERP
Let’s start with the problem statement: In order to establish a solution architecture, it is essential to comprehend the technical capabilities needed for executing various artificial intelligence scenarios. Importantly, we aim to avoid separate architectural approaches for each artificial intelligence use case, as this would significantly increase development and operational efforts within the context of ERP systems. To overcome this issue, we first examined a multitude of artificial intelligence use cases and grouped them based on their similarities. As a result, we identified several artificial intelligence application patterns, which are detailed in this section.

**【译文】** 6.2 ERP 的 AI 模式
让我们先从问题陈述开始：为了建立解决方案架构，必须理解执行各种人工智能场景所需的技术能力。重要的是，我们的目标是避免为每一个人工智能用例采用独立的架构方法，因为在 ERP 系统的背景下，这将显著增加开发和运维的工作量。为解决这一问题，我们首先研究了大量的人工智能用例，并根据它们的相似性进行了分组。由此，我们识别出了几种人工智能应用模式，本节将对此进行详细阐述。

---

Our strategic objective is to offer a consistent concept and framework for each pattern’s implementation. Consequently, these artificial intelligence application patterns can serve as reusable components for development teams, expediting the execution of artificial intelligence use cases while also standardizing and streamlining operational aspects. The later proposed solution architecture will facilitate all those application patterns. Abstracting from numerous analyzed use cases to artificial intelligence application patterns of ERP systems is an added value of this elaboration.

**【译文】** 我们的战略目标是为每种模式的实施提供一致的概念和框架。因此，这些人工智能应用模式可以作为开发团队的可重用组件，在加速人工智能用例落地的同时，实现运维方面的标准化和精简。稍后提出的解决方案架构将支持所有这些应用模式。从大量分析过的用例中提炼出 ERP 系统的人工智能应用模式，是本论述的一个附加价值。

---

6.2.1 Matching
Matching involves establishing relationships and identifying similarities and discrepancies within a dataset. For instance, as a master data expert, our goal might be to minimize duplicate entries during consolidation. Manual matching can be quite labor-intensive, but intelligent systems applying artificial intelligence techniques can greatly expedite the process. These systems can offer one or more strategies, along with their quality, for linking similar items. Users only need to accept or reject the recommendations or modify them as needed. Matching is necessary when at least two artifacts share a certain level of similarity. The matching process adheres to a set of rules that can be dynamically adapted, or learnt, by the system. These learned rules may evolve over time due to user input or other factors.

**【译文】** 6.2.1 匹配
“匹配”涉及在数据集中建立关系并识别相似性和差异性。例如，作为主数据专家，我们的目标可能是在整合过程中尽量减少重复条目。人工匹配往往非常耗时耗力，但应用人工智能技术的智能系统可以极大地加快这一过程。这些系统可以提供一种或多种关联相似项目的策略，并给出相应的质量评估。用户只需接受、拒绝推荐或根据需要进行修改。当至少两个工件（Artifacts）具有一定程度的相似性时，就需要进行匹配。匹配过程遵循一套规则，系统可以动态调整或“学习”这些规则。随着时间的推移，这些习得的规则可能会根据用户输入或其他因素而演变。

---

Matching can be applied to various content types, such as:
• Text (e.g., search and replace) or images (e.g., identifying all dogs in a collection of photos)
• Audio (e.g., natural language processing, where an audio stream corresponds to a query)
• Video (e.g., determining which company logos appear and their frequency during a soccer match)
• Complex business objects (e.g., matching invoices to goods receipts or identifying a customer’s duplicate)

**【译文】** 匹配可应用于各种内容类型，例如：
• 文本（如查找和替换）或图像（如在一组照片中识别所有的狗）
• 音频（如自然语言处理，其中音频流对应一个查询）
• 视频（如确定足球比赛期间出现了哪些公司徽标及其频率）
• 复杂的业务对象（如将发票与收货单进行匹配，或识别重复的客户信息）

---

The content being matched greatly influences the output type and its presentation. One aspect of matching is the quality of a match, which means that objects can either fully or partially match. A full match occurs when all specified parameters are satisfied, while a partial match only meets some of the required parameters. The more parameters that match, the higher the match quality. The following matching types have been recognized so far:
• Relationship matching
Establishes logical connections between objects of different types, such as associating multiple invoices with a single payment

**【译文】** 被匹配的内容在很大程度上影响着输出类型及其呈现方式。匹配的一个重要方面是匹配质量，这意味着对象之间可以是完全匹配或部分匹配。完全匹配是指满足所有指定参数，而部分匹配仅满足部分要求参数。匹配的参数越多，匹配质量越高。目前已识别出以下几种匹配类型：
• 关系匹配
在不同类型的对象之间建立逻辑连接，例如将多张发票关联到单笔付款上。

---

• Compatibility matching
Pairs objects of different types with shared properties to create a cohesive system, like assembling a high-/medium-/low-end computer (A computer is composed of various components like a motherboard, CPU, memory, and display, which must be compatible, and the CPU, for example, only fits into motherboards with a specific socket.)
• Similarity matching
Combines similar objects of the same type into one, like merging multiple similar business partners because they are the same type of object.
To develop matching patterns, frequently used algorithms include multiclass classification algorithms like XGBoost/multilayer perceptron, clustering algorithms like K-means, and nonparametric methods like the k-nearest neighbors’ algorithm.

**【译文】** • 兼容性匹配
将具有共享属性的不同类型对象配对，以创建一个内聚的系统，例如组装一台高/中/低端计算机（计算机由主板、CPU、内存和显示器等各种组件组成，这些组件必须兼容，例如 CPU 只能安装在具有特定插槽的主板上）。
• 相似性匹配
将同一类型的相似对象合并为一个，例如合并多个相似的业务合作伙伴，因为它们属于同一类型的对象。
为了开发匹配模式，常用的算法包括 XGBoost/多层感知机等多类分类算法、K-均值（K-means）等聚类算法，以及 K-近邻算法（k-nearest neighbors）等非参数方法。

---

6.2.2 Recommendation
Recommendation suggests datasets or actions based on the current situation. For instance, when working as a material requirements planner, we may need to find potential solutions for addressing a material shortage problem. Intelligent systems can aid users by recommending relevant content or by proposing an action or input that the user might prefer. In this context, we refer to a recommendation pattern and its influence on the user interface. We can distinguish between three kinds of recommendations:

**【译文】** 6.2.2 推荐
“推荐”是根据当前情况建议数据集或行动。例如，作为物料需求计划员，我们可能需要寻找解决物料短缺问题的潜在方案。智能系统可以通过推荐相关内容，或提出用户可能偏好的行动或输入来辅助用户。在此背景下，我们指的是推荐模式及其对用户界面的影响。我们可以区分三种类型的推荐：

---

1. Content recommendation
The system narrows down content that might be of interest to the user, based on their behavior or the content’s attributes. Common content recommender systems include Amazon and Netflix.
2. Input assistance
The system helps the user by inputting data or filtering it. Typical examples include search phrase suggestions, suitable form templates, or a collection of suggested default values for specific fields, based on the user’s input and interaction history.

**【译文】** 1. 内容推荐
系统根据用户行为或内容属性，筛选出用户可能感兴趣的内容。常见的内容推荐系统包括亚马逊（Amazon）和奈飞（Netflix）。
2. 输入辅助
系统通过输入数据或过滤数据来帮助用户。典型的例子包括搜索词建议、合适的表单模板，或根据用户的输入和交互历史为特定字段提供的一组建议默认值。

---

3. Solution proposal
The system assists users in tackling complex problems by recommending particular actions or proposed solutions. In some cases, this may be combined with a simulation of the potential outcome. Solution proposals usually involve various decision-support systems. Example use cases encompass payment and invoice matching, as well as material shortage situations.
To implement recommendation patterns, we must possess historical data about actions taken and inputs given during business processes. For the solution proposal recommendation type, logging business processes is essential; for content

**【译文】** 3. 解决方案提案
系统通过推荐特定行动或建议方案，协助用户处理复杂问题。在某些情况下，这可能结合了对潜在结果的模拟。解决方案提案通常涉及各种决策支持系统。典型的应用案例包括付款与发票的匹配，以及物料短缺情况的处理。
要实施推荐模式，我们必须掌握业务流程中已采取行动和输入信息的历史数据。对于解决方案提案类型的推荐，记录业务流程至关重要；而对于内容[推荐，所需历史数据可能来自应用数据]。（注：原文在此处截断，译文结合上下文补全了语意逻辑）

---

