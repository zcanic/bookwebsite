# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第52部分

**原始页码**: 154 - 156
**段落数量**: 10
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 153-153 (2586 字符)
- **后文上下文页码**: 157-157 (2141 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Side-by-side artificial intelligence: 翻译为'并行（Side-by-side）人工智能'，指与ERP核心系统并行运行的AI服务模式。 2. Enhancement spots: SAP术语，翻译为'增强点'。 3. Transportation: 在ERP/SAP上下文中指配置或代码的迁移/传输，翻译为'传输'。 4. Customizing frameworks: 在ERP中'Customizing'指配置而非开发，翻译为'配置框架'。

---

which has a standardized signature. This component manages the artificial intelligence models’ life cycle and offers capabilities like scheduling training jobs and monitoring. The REST services’ signature for model consumption is scenario-specific (e.g., forecasting sales order revenue or predicting debt default risk) and is managed by the consumption logic coding class, as illustrated in Fig. 7.5. This class essentially encapsulates the REST service into an ERP API, allowing artificial intelligence applications to integrate inference results into business processes and user interfaces. Optionally, inference results can be cached for scenarios requiring performance optimization. The consumption logic coding class is registered to an intelligent scenario within the ERP framework. To maintain a consistent programming model across all artificial intelligence use cases, the class is standardized by implementing interfaces.

**【译文】** 它具有标准化的签名。该组件管理人工智能模型的生命周期，并提供调度训练任务和监控等功能。用于模型消费的REST服务签名是特定于场景的（例如，预测销售订单收入或预测债务违约风险），并由消费逻辑编码类进行管理，如图7.5所示。该类本质上将REST服务封装到ERP API中，允许人工智能应用将推理结果集成到业务流程和用户界面中。对于需要性能优化的场景，可以选择缓存推理结果。消费逻辑编码类通过智能场景注册到ERP框架中。为了在所有人工智能用例中保持一致的编程模型，该类通过实现接口进行了标准化。

---

Side-by-side artificial intelligence scenarios must register the consumption logic class in the AI life cycle management framework through an intelligent scenario. During development, changes to the intelligent scenario are anticipated, so the artifact is initially saved as a draft. The draft status governs the transportation of the scenario registration content within the AI life cycle management framework.

**【译文】** 并行（Side-by-side）人工智能场景必须通过智能场景将消费逻辑类注册到AI生命周期管理框架中。在开发过程中，预期会对智能场景进行更改，因此该工件最初保存为草稿。草稿状态控制着场景注册内容在AI生命周期管理框架内的传输。

---

ERP customers often struggle to comprehend the technical and business prerequisites needed to train and consume artificial intelligence scenarios. For instance, an adequate data volume is necessary for training artificial intelligence algorithms, and underlying business processes must be activated and configured to provide a meaningful foundation for the training process. As the number of artificial intelligence scenarios grows, manual evaluation by ERP customers becomes unfeasible due to high total cost of ownership (TCO) and significant complexity. Consequently, an automatic prerequisite check capability is needed to validate whether the necessary prerequisites for training and consumption are met for each artificial intelligence scenario.

**【译文】** ERP客户通常难以理解训练和消费人工智能场景所需的技术和业务先决条件。例如，训练人工智能算法需要充足的数据量，并且必须激活和配置底层业务流程，以便为训练过程提供有意义的基础。随着人工智能场景数量的增加，由于高昂的总体拥有成本（TCO）和巨大的复杂性，由ERP客户进行人工评估变得不可行。因此，需要一种自动化的先决条件检查能力，以验证每个人工智能场景是否满足训练和消费所需的必要先决条件。

---

Intelligent scenarios facilitate these prerequisite checks by implementing a consistent interface. This allows for the assessment of the artificial intelligence use case’s readiness and consistency, such as determining if sufficient data is available for model training. The AI life cycle management framework performs these checks to evaluate whether the prerequisites for model training are met.

**【译文】** 智能场景通过实现一致的接口来促进这些先决条件检查。这允许对人工智能用例的就绪状态和一致性进行评估，例如确定是否有足够的数据可用于模型训练。AI生命周期管理框架执行这些检查，以评估是否满足模型训练的先决条件。

---

To enable customer extension of the coded classes, enhancement spots should be incorporated, allowing customers to augment the consumption logic or add specific transformations, for example.

**【译文】** 为了使客户能够扩展编码类，应包含增强点（Enhancement Spots），例如，允许客户增强消费逻辑或添加特定的转换。

---

7.5 Conclusion
In this chapter, we explained the solution architecture for embedding artificial intelligence into ERP software and the underlying guiding principles. We identified two different technical patterns with which all artificial intelligence use cases in ERP systems can be implemented.

**【译文】** 7.5 结论
在本章中，我们解释了将人工智能嵌入ERP软件的解决方案架构及其潜在的指导原则。我们确定了两种不同的技术模式，通过这两种模式可以实现ERP系统中的所有人工智能用例。

---

The embedded artificial intelligence pattern makes use of the available capabilities of the ERP platform. Thus, artificial intelligence applications can be developed with low costs and high efficiency, as application data must not be replicated outside of the ERP database system for model training.

**【译文】** 嵌入式人工智能模式利用了ERP平台的现有能力。因此，可以以低成本和高效率开发人工智能应用，因为不需要将应用数据复制到ERP数据库系统之外进行模型训练。

---

However, advanced scenario with sophisticated algorithms and huge hardware requirements are scaled out to a sidecar AI technology platform referred to as side-by-side artificial intelligence. The main reason for this is to avoid the response time of transactional business processes to suffer from performance intensive training and inference jobs.

**【译文】** 然而，具有复杂算法和巨大硬件需求的高级场景会被扩展到一个作为侧车（sidecar）运行的AI技术平台，这被称为并行（Side-by-side）人工智能。这样做的主要原因是避免交易性业务流程的响应时间受到性能密集型训练和推理任务的影响。

---

AI technology platforms provide a scalable infrastructure supporting the state-of-the-art artificial intelligence libraries and hardware. Thus, the proposed solution architecture scales with the requirements of the use cases. Simple scenarios are implemented with embedded, while complex ones are developed with side-by-side artificial intelligence approach.

**【译文】** AI技术平台提供了可扩展的基础设施，支持最先进的人工智能库和硬件。因此，所提出的解决方案架构能够随着用例的需求进行扩展。简单场景采用嵌入式方式实现，而复杂场景则采用并行人工智能方法开发。

---

The anticipated solution architecture is seamless integrated into the ERP programming model. Conversely, it reuses existing ERP concepts (e.g., authorization, user interface integration), core data model content (e.g., views for sales order or supplier), and tools (e.g., development environment or customizing frameworks). Furthermore, it works for public cloud, on-premise, and private managed deployment. Consequently, the solution architecture is simple but powerful.

**【译文】** 预期的解决方案架构无缝集成到ERP编程模型中。同时，它重用了现有的ERP概念（如授权、用户界面集成）、核心数据模型内容（如销售订单或供应商的视图）以及工具（如开发环境或配置框架）。此外，它适用于公有云、本地部署（On-premise）和私有托管部署。因此，该解决方案架构既简单又强大。

---

