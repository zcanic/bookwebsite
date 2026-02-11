# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第71部分

**原始页码**: 211 - 213
**段落数量**: 5
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 210-210 (2638 字符)
- **后文上下文页码**: 214-214 (1249 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. Consumption API 译为 '消费 API'，指被其他应用或系统调用以获取服务的 API。 2. Side-by-side mode 译为 '并行模式'，是 SAP 生态中常见的术语，指在 ERP 核心系统之外（如云平台）运行扩展应用。 3. Intelligent Scenario Lifecycle Management 保留英文全称并附中文，因为它是特定的框架名称。 4. 最后一个段落的译文已结合后文上下文 'extensibility' 补全了句意。

---

• Service Library

**【译文】** • 服务库

---

Extension points should differentiate between the definition and individual implementations. The ERP vendor typically creates the definition of an extension point, and along with its calling points in coding, it constitutes an explicit enhancement option in such programs. The definition of an enhancement point includes an interface, a set of selection filters, and some settings that influence runtime behavior later. An extension point interface constitutes the entire interface or part of the interface of an object plug-in. The term extension point implementation refers to an enhancement implementation element, consisting of an extension point implementation class that implements the extension point interface and a condition imposed on the filters specified in the extension point definition. These can be utilized to select the extension point implementation. The calling points of an extension are determined through corresponding methods, which form the enhancement calls.

**【译文】** 扩展点应区分定义和单独的实现。ERP 供应商通常负责创建扩展点的定义，该定义与其在代码中的调用点一起，构成了此类程序中明确的增强选项。增强点的定义包括一个接口、一组选择过滤器，以及一些影响后续运行时行为的设置。扩展点接口构成了对象插件的全部或部分接口。“扩展点实现”一词指的是一种增强实现元素，它由一个实现了扩展点接口的扩展点实现类，以及对扩展点定义中指定的过滤器施加的条件组成。这些条件可用于选择具体的扩展点实现。扩展的调用点是通过相应的方法确定的，这些方法构成了增强调用。

---

• AI Technology Platform

**【译文】** • AI 技术平台

---

12.2.3 Consumption API Extensibility

**【译文】** 12.2.3 消费 API 的可扩展性

---

The artificial intelligence application utilizes a consumption API for integration into business operations and user interfaces. The consumption can be either local or remote, depending on whether the use case is implemented in an embedded or side-by-side mode. To train the models for artificial intelligence, a training API is available, which can also be local or remote based on the implementation approach. The Intelligent Scenario Lifecycle Management framework oversees the orchestration of these training APIs and is responsible for managing the life cycle of the artificial intelligence models (refer to the life cycle management chapter). For embedded artificial intelligence, training data can be accessed locally via the ERP platform. However, this is not feasible for side-by-side artificial intelligence. As a result, an API for transferring application data from the ERP to the artificial intelligence technology platform must be supplied. Various tools are available for implementing these APIs, depending on the underlying technology. It is crucial from an extensibility standpoint that all mentioned APIs are enhanced for compatibility, ensuring that the API consumer does not break after extensibility. This is particularly important for consumption APIs integrated into artificial intelligence applications and business processes. Consequently, both local and remote consumption APIs should only be extended with optional fields, and existing fields in the signature should remain unchanged, not deleted, or renamed or have their data types replaced. To guarantee stability and compatibility, governance measures and automatic checks are necessary. Since the Intelligent Scenario Lifecycle Management framework orchestrates the training APIs, there is more flexibility regarding

**【译文】** 人工智能应用利用消费 API 集成到业务运营和用户界面中。根据用例是采用嵌入式模式还是并行模式实现，这种消费可以是本地的，也可以是远程的。为了训练人工智能模型，系统提供了训练 API，根据实现方法的不同，它也可以是本地或远程的。智能场景生命周期管理（Intelligent Scenario Lifecycle Management）框架负责监督这些训练 API 的编排，并负责管理人工智能模型的生命周期（请参阅生命周期管理章节）。对于嵌入式人工智能，可以通过 ERP 平台本地访问训练数据。然而，这对于并行模式的人工智能来说是不可行的。因此，必须提供一个 API，用于将应用数据从 ERP 传输到人工智能技术平台。根据底层技术的不同，有多种工具可用于实现这些 API。从可扩展性的角度来看，至关重要的是，所有提到的 API 都要进行兼容性增强，以确保 API 消费者在扩展后不会中断。这对于集成到人工智能应用和业务流程中的消费 API 尤为重要。因此，无论是本地还是远程消费 API，都只能通过可选字段进行扩展，签名中的现有字段应保持不变，不得删除、重命名或替换其数据类型。为了保证稳定性和兼容性，治理措施和自动检查是必要的。由于智能场景生命周期管理框架负责编排训练 API，因此在可扩展性方面有更大的灵活性。

---

