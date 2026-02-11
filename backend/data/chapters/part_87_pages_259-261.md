# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第87部分

**原始页码**: 259 - 261
**段落数量**: 11
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 258-258 (1686 字符)
- **后文上下文页码**: 262-262 (2957 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Quality Systems: 翻译为'质量系统'，在ERP语境中通常指QAS（Quality Assurance System），用于测试和QA，区别于生产系统。
2. Feature toggle: 翻译为'功能开关'，是软件工程中常见的DevOps实践。
3. Business feature: 翻译为'业务特性'，特指ERP中可配置开启的业务功能模块。
4. Switch framework: 翻译为'开关框架'，SAP等ERP系统的特有术语。
5. Model validation cockpit: 翻译为'模型验证驾驶舱'，'Cockpit'在ERP软件（如SAP）中常指代综合管理仪表板。
6. 最后一个段落原文被截断，已根据后文上下文（...design applies, and all dependencies...）补全了翻译，确保语义完整。

---

17
Model Validation
In this chapter, we specify the business requirements and propose the solution concept for model validation. Statistical methods exist to validate artificial intelligence models regarding the accuracy of predictions. However, for ERP business applications, this mathematical approach alone is not enough. Additional validation from functional and business process points of view are necessary. Existing ERP techniques like A/B testing, feature toggle, business features, or switch framework must be analyzed in this context. We suggest a validation process that is appropriated for ERP software and considers the state transitions of artificial intelligence models. Finally, we propose a model validation cockpit as central environment for administration.

**【译文】** 第17章
模型验证
在本章中，我们将明确业务需求并提出模型验证的解决方案概念。虽然统计学方法可用于验证人工智能模型预测的准确性，但对于ERP业务应用而言，仅靠这种数学方法是不够的。我们还需要从功能和业务流程的角度进行额外的验证。必须在此背景下分析现有的ERP技术，如A/B测试、功能开关（Feature toggle）、业务特性（Business features）或开关框架（Switch framework）。我们建议采用一种适合ERP软件并考虑到人工智能模型状态转换的验证流程。最后，我们提议建立一个“模型验证驾驶舱”作为中央管理环境。

---

17.1
Problem Statement
Artificial intelligence has the ability to uncover hidden patterns and relationships by learning from the data provided by applications, rather than relying on pre-programmed rules. By incorporating artificial intelligence capabilities into ERP business processes, it becomes possible to identify overlooked opportunities, reveal concealed risks, and automate monotonous tasks or work that requires knowledge. When creating intelligent applications that are based on artificial intelligence algorithms, the artificial intelligence model usually undergoes evolution over time. After the model is trained with an initial data set, it needs to be retrained with new data that becomes available during its use. This new data reflects changes in the environment, such as deviations in customer behavior, which the artificial intelligence model captures due to its continuous retraining.

**【译文】** 17.1
问题陈述
人工智能有能力通过从应用程序提供的数据中学习，而非依赖预设规则，来发现隐藏的模式和关系。通过将人工智能能力整合到ERP业务流程中，我们可以识别被忽视的机会，揭示隐藏的风险，并自动化单调的任务或需要特定知识的工作。在构建基于人工智能算法的智能应用时，人工智能模型通常会随时间演进。模型在使用初始数据集训练后，需要利用使用过程中产生的新数据进行再训练。这些新数据反映了环境的变化（如客户行为的偏差），人工智能模型正是通过持续的再训练来捕捉这些变化。

---

The process of retraining is one of the differences from classical systems, as we have previously discussed. It’s a recurring process that leads to the creation of new versions of the artificial intelligence model. These new versions need to be validated for their predictive power and robustness before they can be put into use. However, in the context of ERP systems, this is a formidable task. This is because the traditional validation methods are not adequate for artificial intelligence. Typically, customers test business applications in quality systems and transport them to production systems after successful validation. Quality systems usually only contain test data, which is sufficient for testing functional correctness. But for validating artificial intelligence models, the synthetic data in quality systems is not sufficient. Therefore, training artificial intelligence models on this synthetic data would lead to inaccurate models. Hence, artificial intelligence models must always be trained in production systems where live data is available. This is the only way to ensure that the artificial intelligence algorithms learn from the correct data and identify the relevant patterns.

**【译文】** 如前所述，再训练过程是AI系统与传统系统的一大区别。这是一个反复进行的过程，会不断生成人工智能模型的新版本。这些新版本在投入使用前，必须验证其预测能力和稳健性。然而，在ERP系统的背景下，这是一项艰巨的任务，因为传统的验证方法不足以应对人工智能。通常情况下，客户在质量系统（Quality systems）中测试业务应用，验证成功后再将其传输到生产系统。质量系统通常只包含测试数据，这对于测试功能正确性是足够的。但对于验证人工智能模型而言，质量系统中的合成数据远远不够。因此，利用这些合成数据训练人工智能模型会导致模型不准确。鉴于此，人工智能模型必须始终在拥有实时数据的生产系统中进行训练。这是确保人工智能算法从正确数据中学习并识别相关模式的唯一途径。

---

Live data usually cannot be copied from production to quality systems due to GDPR compliance, so developers and consultants working in the quality system would then have access to live data, which is legally prohibited. Therefore, in a quality system, only the functional correctness of artificial intelligence applications can be tested, and the quality of the artificial intelligence model cannot be validated. This validation must occur in the production system, which is a significant difference from traditional applications and brings specific requirements to the validation procedure, such as the need for new roles like the data scientist. However, testing in production ERP systems is problematic because each action impacts business processes, change documents, and audit logs. This footprint cannot be reversed due to legal compliance reasons.

**【译文】** 出于通用数据保护条例（GDPR）的合规要求，实时数据通常不能从生产系统复制到质量系统，因为这将导致在质量系统工作的开发人员和顾问接触到实时数据，这在法律上是被禁止的。因此，在质量系统中，只能测试人工智能应用的功能正确性，而无法验证人工智能模型的质量。这种验证必须在生产系统中进行，这与传统应用有显著差异，并给验证程序带来了特定要求，例如需要引入像数据科学家这样的新角色。然而，在生产环境的ERP系统中进行测试存在问题，因为每一个操作都会影响业务流程、变更文档和审计日志。出于法律合规原因，这种留下的痕迹（Footprint）是无法逆转的。

---

Therefore, the crucial question is how to validate artificial intelligence models from a business process perspective in production ERP systems. The solution we propose is the primary focus of this chapter. Traditional validation concepts and tools are taken as granted, such as testing the functional correctness of artificial intelligence applications in quality systems or using statistical techniques to determine the quality of artificial intelligence models.

**【译文】** 因此，关键问题在于：如何在生产环境的ERP系统中，从业务流程的角度验证人工智能模型。我们提出的解决方案正是本章的核心内容。我们默认保留传统的验证概念和工具，例如在质量系统中测试人工智能应用的功能正确性，或使用统计技术来测定人工智能模型的质量。

---

17.2
Solution Proposal
In ERP systems, there exist certain technologies that might initially seem suitable for validating a newly trained model of artificial intelligence when another model is already in use. However, upon closer examination, these technologies prove to be insufficient.

**【译文】** 17.2
解决方案建议
在ERP系统中，存在某些技术起初看起来似乎适合在已有模型运行时验证新训练的人工智能模型。然而，经仔细审视，这些技术被证明是不够的。

---

•	 A/B testing
•	 A/B testing is a technique used to compare two versions of an application to determine which one performs better. Essentially, it’s an experiment where two or more variations of a Web page are randomly presented to users, and statistical analysis is employed to determine which version achieves better results for a specific conversion goal. In an A/B test, an application screen might be changed to create a second version of the same page. This alteration could be as minor as changing a single headline or button or as major as a complete page redesign. Half of the traffic shows the original version of the page (the control), while the other half shows the modified version (the variation). As visitors interact with either the control or variation, their engagement is measured, collected in an analytics dashboard, and analyzed through a statistical engine. This allows for the determination of whether the changes had a positive, negative, or neutral effect on visitor behavior.

**【译文】** •	 **A/B测试**
•	 A/B测试是一种用于比较应用程序的两个版本以确定哪个表现更好的技术。本质上，这是一个实验，将网页的两个或更多变体随机展示给用户，并采用统计分析来确定哪个版本能针对特定转化目标取得更好结果。在A/B测试中，可能会更改应用屏幕以创建同一页面的第二个版本。这种改动可能小到更改标题或按钮，也可能大到完全的页面重新设计。一半流量显示页面的原始版本（对照组），另一半显示修改后的版本（变体组）。当访客与对照组或变体组交互时，他们的参与度会被测量，收集在分析仪表板中，并通过统计引擎进行分析。这使得我们能够确定更改对访客行为产生的是积极、消极还是中性的影响。

---

•	 However, A/B testing is primarily focused on validating user interfaces and therefore cannot be directly applied to artificial intelligence models. Artificial intelligence models are deeply integrated within business processes, influencing process flow and decision-making. These impacts cannot be easily reversed in ERP solutions due to legal compliance reasons. For instance, bank transfers executed by an artificial intelligence model cannot simply be erased. Thus, in our view, having two applications with the same purpose but different behaviors due to differing artificial intelligence models is not acceptable for ERP solutions. Therefore, traditional A/B testing cannot be directly applied for the validation of artificial intelligence models.

**【译文】** •	 然而，A/B测试主要侧重于验证用户界面，因此不能直接应用于人工智能模型。人工智能模型深度集成在业务流程中，会影响流程走向和决策制定。出于法律合规原因，这些影响在ERP解决方案中不容易逆转。例如，由人工智能模型执行的银行转账不能简单地被抹去。因此，在我们看来，在ERP解决方案中拥有两个目的相同但因人工智能模型差异而行为不同的应用是不可接受的。所以，传统的A/B测试无法直接用于验证人工智能模型。

---

•	 Feature toggle
•	 Feature toggle is a method used to selectively activate or deactivate a feature. A feature refers to a business functionality at the level of a user story. Feature toggles are used to prevent the release of incomplete or substandard features to customers. These features are delivered in an inactive state, hidden from customer access by a runtime switch (feature toggle). The default status of the feature is off. In development and test systems, it can be activated per user and per client. In customer systems, the feature cannot be switched on. The feature is a temporary switch used to separate the technical upgrade of the system from the functional update. Once the feature is released, the feature toggles are removed.

**【译文】** •	 **功能开关（Feature toggle）**
•	 功能开关是一种用于选择性激活或停用某项功能的方法。这里的“功能”指的是用户故事层面的业务功能。功能开关用于防止向客户发布不完整或不达标的功能。这些功能以非激活状态交付，通过运行时开关（即功能开关）对客户隐藏。功能的默认状态是关闭。在开发和测试系统中，可以针对每个用户和每个客户端激活它。但在客户系统中，该功能无法开启。功能开关是一种临时开关，用于将系统的技术升级与功能更新分离开来。一旦功能正式发布，功能开关就会被移除。

---

•	 However, the focus of feature toggles is on continuous delivery, beta shipment to selected customers, and phased rollout of functionality. Therefore, from our perspective, it doesn’t align with the validation of artificial intelligence models. Moreover, feature toggles are temporary. After the final release of a feature to all customers, the feature toggle is removed, and the corresponding source code is cleaned up.

**【译文】** •	 然而，功能开关的重点在于持续交付、向选定客户交付测试版（Beta）以及功能的分阶段推出。因此，从我们的角度来看，它并不适用于人工智能模型的验证。此外，功能开关是临时的。在向所有客户最终发布功能后，功能开关会被移除，相应的源代码也会被清理。

---

•	 Business feature
•	 A business feature enhances an ERP core business functionality with an additional opt-in feature. When a customer selects their scope, which references one or more business features, the corresponding customizing entry is set in the central business feature customizing table. Business features are defined by the ERP vendor and are delivered to customers as table content. Having a central customizing table for all business features instead of multiple, heterogeneous implementations increases transparency into the available business features. From a development perspective, business features provide a quick and easy way to check if a customer has a certain functionality in scope. Typically, a business feature corresponds one to one to a business configuration content object, which represents the corresponding backend enablement. As with all business configuration content, the principle of incremental content

**【译文】** •	 **业务特性（Business feature）**
•	 业务特性通过额外的选用功能（Opt-in）增强了ERP核心业务功能。当客户选择其业务范围（引用一个或多个业务特性）时，相应的定制条目会在中央业务特性定制表中被设置。业务特性由ERP供应商定义，并作为表内容交付给客户。拥有一个管理所有业务特性的中央定制表，而不是多种异构的实现方式，增加了可用业务特性的透明度。从开发角度看，业务特性提供了一种快速简便的方法来检查客户范围内是否包含特定功能。通常，一个业务特性与一个业务配置内容对象一一对应，后者代表相应的后端功能启用。与所有业务配置内容一样，增量内容设计的原则同样适用，且业务特性之间的所有依赖关系都在业务配置内容层面进行管理。

---

