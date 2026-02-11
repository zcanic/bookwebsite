# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第59部分

**原始页码**: 175 - 177
**段落数量**: 26
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 174-174 (1172 字符)
- **后文上下文页码**: 178-178 (1224 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 第一段翻译省略了原文开头的'model.'，因为它是前页'Feed and Query model'句子的结尾词。'Full delta extraction'被翻译为'全量和增量提取'，因为在SAP/ERP语境中，通常指支持全量加载和增量更新的能力，或者指'完整的增量提取机制'，此处根据上下文意译以确保通顺。

---

In this approach, initial changes (such as employee ID, name, and email address) are pushed from the source to the destination application as notifications. If needed, an optional change feed may also be present, offering a full object representation. These minimal attributes are referred to as the feed in the diagram above.

**【译文】** 在这种方法中，初始变更（如员工ID、姓名和电子邮件地址）会作为通知从源推送到目标应用程序。如果需要，还可以包含一个可选的变更馈送（change feed），提供完整的对象表示。在上述图表中，这些最小属性被称为“馈送（feed）”。

---

The destination acquires additional data to update its local replica of the application data based on the notification. If necessary, a query can also be used, for instance, to continue business operations or display information to the end user in user interfaces. Although the preferred method is to obtain extra data from the application layer using APIs, data integration tools can also be utilized to implement the transfer of application data from an API to a local schema.

**【译文】** 目标系统根据通知获取额外数据，以更新其应用程序数据的本地副本。如有必要，也可以使用查询，例如用于继续业务操作或在用户界面中向最终用户显示信息。虽然首选方法是使用API从应用层获取额外数据，但也可以利用数据集成工具来实现将应用数据从API传输到本地模式（local schema）。

---

When data replication occurs, the initial data load can be accomplished by pulling data from the source system. To reduce data transfer following the initial load, only modified data should be transmitted. A suitable protocol mechanism (such as an OData delta token) enables this.

**【译文】** 当进行数据复制时，可以通过从源系统拉取数据来完成初始数据加载。为了减少初始加载后的数据传输，应仅传输修改后的数据。合适的协议机制（如 OData delta token）可以实现这一点。

---

The Brokered Pattern is facilitated for applications that necessitate advanced data transformation options not available as built-in functions within ERP data provisioning. Data consolidation, governance, and quality are also primary reasons for implementing the brokered pattern based on a central hub. The central hub typically supports both push and pull capabilities.

**【译文】** 代理模式（Brokered Pattern）适用于那些需要ERP数据供应内置功能无法提供的高级数据转换选项的应用程序。数据整合、治理和质量也是实施基于中央枢纽（central hub）的代理模式的主要原因。中央枢纽通常同时支持推送和拉取功能。

---

Data integration technologies in context of ERP systems can be categorized by organizational level and persistence handling. The organizational level takes into account whether technologies are data-centric or application-centric. The more application logic and code can or must be integrated into a given technology to create a solution, the more application-centric it becomes. Conversely, if data structures and data storage aspects dominate the data integration setup, the technology is considered data-centric.

**【译文】** ERP系统环境下的数据集成技术可以按组织层面和持久性处理进行分类。组织层面考虑的是技术是以数据为中心还是以应用为中心。为了创建一个解决方案，如果需要或必须将更多的应用逻辑和代码集成到特定技术中，它就越倾向于以应用为中心。相反，如果数据结构和数据存储方面在数据集成设置中占主导地位，则该技术被视为以数据为中心。

---

The following levels of data integration exist:

**【译文】** 存在以下层级的数据集成：

---

• Manual integration/common user interface: Users interact with all relevant information by accessing source systems or Web page interfaces directly. There is no unified view of the data.

**【译文】** • 手动集成/通用用户界面：用户通过直接访问源系统或网页界面与所有相关信息进行交互。没有统一的数据视图。

---

• Application-centric/orchestrated integration: Integration logic shifts from applications to a middleware or central hub layer. While the integration logic is not developed within the applications, they still need to contribute to data integration partially.

**【译文】** • 以应用为中心/编排集成：集成逻辑从应用程序转移到中间件或中央枢纽层。虽然集成逻辑不是在应用程序内部开发的，但它们仍然需要部分参与数据集成。

---

• Data-centric integration: This level of integration is achieved using data-oriented technologies, including message brokers like KAFKA, RabbitMQ, Solace, and others, as well as replication solutions.

**【译文】** • 以数据为中心集成：这一层级的集成是使用面向数据的技术实现的，包括像 KAFKA、RabbitMQ、Solace 等消息代理（message brokers），以及复制解决方案。

---

• Virtual integration/uniform data access: This method does not necessitate data replication from source systems. Instead, it establishes a set of views for providing and remotely accessing a unified view for the customer. Data is accessed remotely or virtually during runtime without being moved.

**【译文】** • 虚拟集成/统一数据访问：这种方法不需要从源系统复制数据。相反，它建立了一组视图，为客户提供并允许远程访问统一的视图。数据在运行时被远程或虚拟访问，而无需移动。

---

• Physical data integration/common data storage: A separate system stores a copy of the data from source systems, managing it independently from the original system. Technologies that follow the Extract-Transform-Load (ETL) paradigm are part of this level.

**【译文】** • 物理数据集成/通用数据存储：一个单独的系统存储来自源系统的数据副本，并独立于原始系统进行管理。遵循提取-转换-加载（ETL）范式的技术属于这一层级。

---

Data integration persistence can be divided into copying (movement, replication) and non-copying (federation) paradigms, with the following cases:

**【译文】** 数据集成持久性可分为复制（移动、复本）和非复制（联邦）范式，具体包括以下情况：

---

• Non-copying: No data copy is created. Queries are evaluated against live data, and only the query evaluation result is sent back to the originator.

**【译文】** • 非复制：不创建数据副本。针对实时数据评估查询，仅将查询评估结果发送回发起者。

---

• Transitory copy: Message brokers typically store data temporarily in the payload part of a message to ensure the desired quality of service. Replication technologies maintain changed data in shadow copies or stable devices.

**【译文】** • 瞬时副本：消息代理通常将数据临时存储在消息的有效载荷部分，以确保所需的服务质量。复制技术将变更的数据维护在影子副本或稳定设备中。

---

• Copying: Data is duplicated and stored in another logical structure, such as within the same database in data marts.

**【译文】** • 复制（Copying）：数据被复制并存储在另一个逻辑结构中，例如在同一数据库的数据集市（data marts）内。

---

• Moving: Unlike copying, moving involves deleting the original data in the source system after successfully completing the copy operation.

**【译文】** • 移动（Moving）：与复制不同，移动涉及在成功完成复制操作后删除源系统中的原始数据。

---

Consequently, the following data integration technology groups are identified: Application to Application, Orchestration, Stream Processing, Message Broker, Replication, Offline and Occasionally Connected, Virtualization, Extract-Transform-Load, Migrations, and Conversions.

**【译文】** 因此，可以识别出以下数据集成技术组：应用对应用（Application to Application）、编排（Orchestration）、流处理（Stream Processing）、消息代理（Message Broker）、复制（Replication）、离线和偶尔连接、虚拟化（Virtualization）、提取-转换-加载（ETL）、迁移（Migrations）和转换（Conversions）。

---

Let’s explore the technical procedures associated with integrating data using artificial intelligence methodologies.

**【译文】** 让我们探讨一下与利用人工智能方法集成数据相关的技术流程。

---

9.2.1 Data Extraction with Views

**【译文】** 9.2.1 使用视图进行数据提取

---

For data extraction, core data model views are used within the ERP system. This method offers the benefit of extracting data based on the same semantic layer as analytical and transactional applications, ensuring high quality and consistency.

**【译文】** 对于数据提取，ERP系统内部使用核心数据模型视图。这种方法的好处是可以基于与分析和交易应用程序相同的语义层来提取数据，从而确保高质量和一致性。

---

Additionally, the total cost of development (TCD) is lowered since existing core data model views can be repurposed. The initial data extraction steps using core data model views are as follows:

**【译文】** 此外，由于可以重新利用现有的核心数据模型视图，总体开发成本（TCD）得以降低。使用核心数据模型视图进行初始数据提取的步骤如下：

---

1. During the design phase, views are enabled as outbound data interfaces through the extraction annotation for full delta extraction.

**【译文】** 1. 在设计阶段，通过用于全量和增量提取的提取注解（extraction annotation），将视图启用为出站数据接口。

---

2. The metadata of these views is exposed and utilized as structures for data persistency in the target system.

**【译文】** 2. 这些视图的元数据被公开，并被用作目标系统中数据持久化的结构。

---

4. In the case of a delta procedure, data from a source as an operational data provider is automatically written to a delta queue using an update process or transferred to the delta queue via an extractor interface.

**【译文】** 4. 在增量程序的情况下，来自作为操作数据提供者（operational data provider）的源数据通过更新过程自动写入增量队列，或通过提取器接口传输到增量队列。

---

5. The target applications, known as operational data queue consumers, obtain the data from the delta queue and proceed with data processing.

**【译文】** 5. 被称为操作数据队列消费者（operational data queue consumers）的目标应用程序从增量队列中获取数据并进行数据处理。

---

6. Based on the required capabilities, the view operator is utilized for data pull scenarios, while the data integration operator is applied for data push scenarios.

**【译文】** 6. 根据所需的能力，视图操作符（view operator）用于数据拉取场景，而数据集成操作符则用于数据推送场景。

---

