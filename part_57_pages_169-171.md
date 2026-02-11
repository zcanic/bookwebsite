# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第57部分

**原始页码**: 169 - 171
**段落数量**: 8
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 168-168 (1720 字符)
- **后文上下文页码**: 172-172 (3323 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Side-by-side' 翻译为 '侧对侧'，这是SAP等ERP厂商常用的术语，指在ERP核心系统之外并行运行的扩展应用模式。 2. 'Customizing-like data sources' 翻译为 '配置类数据源'，对应ERP中的 'Customizing' (配置/定制) 概念。 3. 'Delta handling' 翻译为 '增量处理'。 4. 'Key users' 翻译为 '关键用户'，指具备高级业务知识或权限的用户。

---

8.2.6 Monitoring
The AI life cycle management framework allows business administrators to constantly oversee the implementation of trained models and the progress of asynchronous training processes. This framework includes a functionality that persistently verifies the presence of a deployed trained model and alerts the business administrator if any issues arise. As discussed in the training segment, the process of data ingestion and running an artificial intelligence algorithm can be time-consuming and may be carried out asynchronously. Consequently, the framework consistently considers the training execution and informs the business administrator at consistent intervals. Additionally, the framework offers sophisticated monitoring of the decline in performance of deployed trained models and the usage of inference.

**【译文】** 8.2.6 监控
AI生命周期管理框架允许业务管理员持续监控已训练模型的实施情况以及异步训练过程的进度。该框架包含一项功能，可确保持续验证已部署训练模型的存在性，并在出现任何问题时向业务管理员发出警报。正如在训练部分所讨论的，数据摄入和运行人工智能算法的过程可能非常耗时，并且可能是异步执行的。因此，该框架会持续关注训练执行情况，并定期通知业务管理员。此外，该框架还提供了完善的监控功能，用于监测已部署训练模型的性能衰退以及推理的使用情况。

---

8.3 Conclusion
New artifacts and processes related to artificial intelligence are being introduced in this chapter. These must be taken into account from the perspective of life cycle management. For instance, it is necessary to train, deploy, activate, and monitor artificial intelligence models. Traditional life cycle management concepts and tools do not address those aspects. As a result, we deducted the business requirements and proposed implementation concepts for managing the life cycle of artificial intelligence. Particularly, we suggested a framework handling the entire life cycle and covering the aspects prerequisite checks, training, deployment, inferencing, and monitoring.

**【译文】** 8.3 结论
本章介绍了与人工智能相关的新工件和流程。必须从生命周期管理的角度来考虑这些内容。例如，必须对人工智能模型进行训练、部署、激活和监控。传统的生命周期管理概念和工具并未涵盖这些方面。因此，我们推导出了业务需求，并提出了管理人工智能生命周期的实施概念。特别是，我们建议建立一个处理整个生命周期的框架，涵盖先决条件检查、训练、部署、推理和监控等方面。

---

9 Data Integration
In this chapter, we specify the business requirements and propose the solution concept for data integration. For the side-by-side artificial intelligence approach, data integration is required because application data must be extracted from the ERP system into the AI technology platform for model training but also batch inference. While the data integration for model training is unidirectional, for batch inference, the results must be transferred back to the ERP system. Initial load but also delta handling and packing must be resolved for the data replication as ERP systems always process mass data.

**【译文】** 9 数据集成
在本章中，我们将明确数据集成的业务需求并提出解决方案概念。对于侧对侧（side-by-side）人工智能模式，数据集成是必需的，因为必须将应用数据从ERP系统提取到AI技术平台，用于模型训练以及批量推理。虽然用于模型训练的数据集成是单向的，但对于批量推理，结果必须回传至ERP系统。由于ERP系统总是处理海量数据，因此在数据复制过程中，必须解决初始加载以及增量处理和打包的问题。

---

9.1 Problem Statement
Application data may be organized in a well-defined relational schema, known as structured data, or it may be unstructured, such as files or emails. Both types of data will be considered for data integration, with the primary emphasis on extracting structured data, which is the main case for ERP data.

**【译文】** 9.1 问题陈述
应用数据可以组织在定义明确的关系模式中（称为结构化数据），也可以是非结构化的（如文件或电子邮件）。数据集成将考虑这两种类型的数据，但主要侧重于提取结构化数据，这也是ERP数据的主要情况。

---

The data integration solution should facilitate an initial load, which is the first step in transferring all records from the ERP system to the target system. Delta loads must also be supported. If a data source’s overall size (the number of rows multiplied by the width of a row) is small, the data consumer can monitor changes to the data source through a full reload of the source. However, this is only recommended for customizing-like data sources (e.g., code lists) that seldom change. For other sources that change frequently (e.g., transactional data), this approach is generally not viable. To replicate such data sources, delta handling is necessary, which accomplishes the initial load by replicating changes that occurred since the last data replication.

**【译文】** 数据集成解决方案应支持初始加载，这是将所有记录从ERP系统传输到目标系统的第一步。同时也必须支持增量加载。如果数据源的总体规模（行数乘以行宽）较小，数据消费者可以通过完全重新加载数据源来监控其变化。然而，这种方法仅建议用于很少发生变化的配置类数据源（例如代码列表）。对于其他频繁变化的数据源（例如交易数据），这种方法通常是不可行的。为了复制此类数据源，必须进行增量处理，即通过复制自上次数据复制以来发生的变化来维持数据同步。

---

Long-running data extraction tends to become unsynchronized, meaning that the data source contains different data than the replicated version, but the synchronization process does not show an error. Possible reasons for this include:
• Lost updates during the synchronization process
• Deletion on the receiver side
• Source objects falling out of scope if source object filters are used

**【译文】** 长期运行的数据提取往往会出现不同步的情况，即数据源中的数据与复制版本的数据不一致，但同步过程并未显示错误。造成这种情况的可能原因包括：
• 同步过程中丢失更新
• 接收端的数据被删除
• 如果使用了源对象过滤器，源对象脱离了范围

---

As a result, a resynchronization of the replicated data must be supported, either through a complete reload of the data or by comparing and resolving the differences between the source and receiver. The second approach is more complex, but a complete reload may not be feasible for large data volumes. Data replication typically increases the total cost of ownership (TCO) due to factors such as additional disk space requirements. For artificial intelligence scenarios where data replication can be avoided, a live connectivity/data streaming capability should be offered.

**【译文】** 因此，必须支持对复制数据进行重新同步，方法可以是完全重新加载数据，或者比较并解决源端与接收端之间的差异。第二种方法更为复杂，但对于大数据量而言，完全重新加载可能并不可行。由于额外的磁盘空间需求等因素，数据复制通常会增加总体拥有成本（TCO）。对于可以避免数据复制的人工智能场景，应提供实时连接/数据流功能。

---

ERP systems deliver data for extraction in a provider-driven manner, meaning that data sources are designed to ensure comprehensive coverage of ERP data with minimal redundancy. Specific consumer scenarios may necessitate data in a particular structure or with transformations (e.g., aggregations) already executed. Some of these transformations could be achieved by creating customer- or consumer-specific data sources. Tools should be available for key users to create their own data sources or enhance existing ones, including the ability to add simple transformations. Some of these transformations may also require access to additional data in the source system that is not replicated, in which case custom data sources are the only option.

**【译文】** ERP系统以提供者驱动的方式交付用于提取的数据，这意味着数据源的设计旨在确保以最小的冗余全面覆盖ERP数据。特定的消费者场景可能需要特定结构的数据，或者已经执行了转换（例如聚合）的数据。其中一些转换可以通过创建客户或消费者特定的数据源来实现。应该提供工具，让关键用户能够创建自己的数据源或增强现有数据源，包括添加简单转换的能力。其中一些转换可能还需要访问源系统中未被复制的额外数据，在这种情况下，自定义数据源是唯一的选择。

---

