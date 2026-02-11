# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第60部分

**原始页码**: 178 - 180
**段落数量**: 12
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 177-177 (1445 字符)
- **后文上下文页码**: 181-181 (2356 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. **Side-by-side artificial intelligence**: 译为'并行人工智能'，指AI应用在外部平台（如BTP）运行，与ERP系统通过接口交互的架构模式，区别于嵌入式AI。 2. **Operators**: 在数据流水线和AI上下文中统一译为'算子'。 3. **Change Data Capture (CDC)**: 译为'变更数据捕获'，这是数据库领域的标准术语。 4. **Key user tools**: 译为'关键用户工具'，SAP生态中的标准术语。

---

There are two methods for managing delta changes: one that relies on timestamps and another that utilizes change data capture (CDC). When dealing with core data model views that include time-related attributes, the timestamp-based technique can be used, allowing the engine to compute deltas using this information. However, for core data model views that lack timestamp attributes, change data capture is the most suitable option.

**【译文】** 管理增量变更主要有两种方法：一种依赖于时间戳，另一种利用变更数据捕获（CDC）。在处理包含时间属性的核心数据模型视图时，可以使用基于时间戳的技术，允许引擎利用这些信息来计算增量。然而，对于缺乏时间戳属性的核心数据模型视图，变更数据捕获是最合适的选择。

---

This method hinges on triggers associated with the database tables involved in a view. By analyzing the modifications made to the table, the subsequent alterations in the relevant data extraction views can be determined and saved in the operational data queue for any extraction consumer. While this approach does not require a specific field like a timestamp to calculate the delta, there are certain restrictions concerning the view structure. To determine the altered view rows from the modified table entries, the view must include the key fields of the underlying tables. Furthermore, any component that needs functionality based on database triggers can consume the change data capture.

**【译文】** 这种方法依赖于与视图所涉及的数据库表相关联的触发器。通过分析对表所做的修改，可以确定相关数据抽取视图中的后续变更，并将其保存在操作数据队列中，供任何抽取消费者使用。虽然这种方法不需要像时间戳这样的特定字段来计算增量，但对视图结构有一定的限制。为了从修改后的表条目中确定变更的视图行，该视图必须包含底层表的关键字段。此外，任何需要基于数据库触发器功能的组件都可以使用变更数据捕获技术。

---

9.2.2 Pipelines and Operators

**【译文】** 9.2.2 流水线与算子

---

runtime component enables pipeline execution within a containerized environment, typically running on Kubernetes. Pipelines are composed of process steps known as operators, which serve as vertices in a graph. Operators function as reactive components, responding solely to environmental events in the form of messages received through their input ports. They can also interact with the environment via their output ports. Importantly, operators remain oblivious to the graph they are part of and the origins and destinations of their connections.

**【译文】** 运行时组件支持在容器化环境（通常运行在 Kubernetes 上）中执行流水线。流水线由被称为算子（Operators）的处理步骤组成，这些算子充当图结构中的顶点。算子作为响应式组件发挥作用，仅响应通过其输入端口接收到的消息形式的环境事件。它们还可以通过输出端口与环境进行交互。重要的是，算子并不感知它们所属的图，也不了解其连接的来源和目的地。

---

To function, operators necessitate specific runtime environments. For instance, an operator executing JavaScript code would require an environment equipped with a JavaScript engine. The AI technology platform supplies predefined environments for operators, which are accessible to users through a library. When executing a graph, the tool converts each operator into processes and searches the library for a suitable environment to instantiate for the operator’s execution. Frequently, there are pre-established operators available for connecting ERP systems and converting structured or unstructured application data within the AI technology platform.

**【译文】** 为了发挥作用，算子需要特定的运行时环境。例如，执行 JavaScript 代码的算子需要一个配备 JavaScript 引擎的环境。AI 技术平台为算子提供了预定义的环境，用户可以通过库来访问这些环境。在执行图时，工具会将每个算子转换为进程，并在库中搜索合适的环境来实例化以供算子执行。通常，平台会提供预先建立的算子，用于连接 ERP 系统并在 AI 技术平台内转换结构化或非结构化应用数据。

---

9.2.3 Output Management

**【译文】** 9.2.3 输出管理

---

This reusable element relies on user interface control and allows attachments to be connected to business objects through document management or generic object services. The attachment service offers fundamental capabilities such as uploading, downloading, renaming, and removing an attachment within the primary application. It also embraces the notion of drafts for adding a new attachment, modifying the attachment’s name, and eliminating an attachment, with changes being saved only when the user executes a deliberate save action.

**【译文】** 这个可复用元素依赖于用户界面控件，并允许通过文档管理或通用对象服务将附件连接到业务对象。附件服务提供了在主应用程序中上传、下载、重命名和删除附件等基础功能。它还引入了草稿的概念，用于处理添加新附件、修改附件名称和删除附件等操作，只有当用户执行明确的保存操作时，更改才会被正式保存。

---

The creation of attachments necessitates a consuming application object. In the realm of artificial intelligence, this versatile component facilitates the training pipeline’s access to unstructured data generated by output management and attachment services.

**【译文】** 创建附件需要一个消费该附件的应用对象。在人工智能领域，这一通用组件有助于训练流水线访问由输出管理和附件服务生成的非结构化数据。

---

9.3 Conclusion

**【译文】** 9.3 结论

---

For side-by-side artificial intelligence, data integration is required because application data must be extracted from ERP system into AI technology platform for model training and batch inference. In this section, we deducted the business requirements and proposed implementation concepts for data integration regarding artificial intelligence.

**【译文】** 对于并行（Side-by-Side）人工智能模式，数据集成是必不可少的，因为必须将应用数据从 ERP 系统抽取到 AI 技术平台，以便进行模型训练和批量推理。在本节中，我们推导了关于人工智能数据集成的业务需求，并提出了相应的实施概念。

---

The solution architecture for data integration that we suggest is based on core data model views that represent the semantic data model of the ERP system and is defined on top of the application tables. The core data model views also include domain-specific metadata, which are used for data extraction. This method has the advantage of providing high-quality and consistent data because the extracted data is based on the same semantic layer as analytical and transactional applications.

**【译文】** 我们建议的数据集成解决方案架构基于核心数据模型视图，这些视图代表了 ERP 系统的语义数据模型，并定义在应用表之上。核心数据模型视图还包含用于数据抽取的领域特定元数据。这种方法的优势在于能够提供高质量且一致的数据，因为抽取的数据基于与分析和事务应用程序相同的语义层。

---

We proposed two solutions for handling deltas, namely, timestamp and change data capture based. To extract unstructured data from the ERP system, we suggested to use output management and attachment services. Customers can define structured and unstructured sources for data extraction using key user tools.

**【译文】** 我们提出了两种处理增量的解决方案，即基于时间戳的方法和基于变更数据捕获（CDC）的方法。为了从 ERP 系统中抽取非结构化数据，我们建议使用输出管理和附件服务。客户可以使用关键用户工具（Key User Tools）定义用于数据抽取的结构化和非结构化数据源。

---

