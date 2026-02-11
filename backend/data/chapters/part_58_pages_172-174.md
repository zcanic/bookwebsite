# Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk) - 第58部分

**原始页码**: 172 - 174
**段落数量**: 12
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 171-171 (2553 字符)
- **后文上下文页码**: 175-175 (3328 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

**术语说明**: 1. 'Consumer'统一翻译为'消费者'，指代接收数据的系统或应用。2. 'Core data model views'翻译为'核心数据模型视图'。3. 'Delta load'和'Initial load'分别翻译为'增量加载'和'初始加载'。4. 最后一句话参考了后文的'Feed and Query model'补全了语义。

---

Certain transformations may necessitate access to external data or be so consumer-­specific that they will not be implemented in the source system. In these cases, the data integration technology must provide the option to add transformations before delivering the data to the consumer. ERP software stores data in an internal format (e.g., internal code lists or currency-related amounts with two decimals). Some consumers may be able to consume data in the internal format (assum­ing that all relevant customizing settings are synchronized between the provider and consumer systems). However, most consumers are either unaware of the internal format or unable to perform the necessary conversions because they do not support the same conversion routines. Consequently, a consumer must be able to receive data in an externally understandable format. Additionally, it must be possible to map the key of the object instance during the extraction process so that sender and receiver instances with different key values/structures can be mapped to one another.

**【译文】** 某些转换可能需要访问外部数据，或者因为过于特定于消费者（接收方）而无法在源系统中实现。在这种情况下，数据集成技术必须提供在将数据交付给消费者之前添加转换的选项。ERP软件以内部格式（例如，内部代码表或保留两位小数的货币金额）存储数据。一些消费者可能能够使用内部格式的数据（假设所有相关的配置设置在提供者和消费者系统之间是同步的）。然而，大多数消费者要么不知道内部格式，要么因为不支持相同的转换程序而无法执行必要的转换。因此，消费者必须能够接收外部可理解格式的数据。此外，在抽取过程中必须能够映射对象实例的键值，以便具有不同键值或结构的发送方和接收方实例可以相互映射。

---

Modern ERP systems offer a comprehensive framework for data integration sce­narios. They rely on core data model views as the internal layer for accessing data, and the data integration model should be built upon them. Various tools can utilize this model, offering diverse integration capabilities and qualities. For artificial intel­ligence applications, a data extraction solution must possess the following features:

**【译文】** 现代ERP系统为数据集成场景提供了一个全面的框架。它们依赖核心数据模型视图作为访问数据的内部层，而数据集成模型应构建在此基础之上。各种工具可以利用此模型，提供多样化的集成能力和质量。对于人工智能应用，数据抽取解决方案必须具备以下特性：

---

• Consistency
Data integration consistency is essential at the view level. Typically, a core data model view is composed of multiple database tables. To ensure consistency, data extraction must be aware of the view’s associations with the underlying database tables and accurately replicate all changes from a single database transaction involving these tables (delta load). Additionally, a consistent method for the ini­tial load of core data model views should be available.

**【译文】** • 一致性
视图级别的数据集成一致性至关重要。通常，一个核心数据模型视图由多个数据库表组成。为了确保一致性，数据抽取必须感知视图与底层数据库表的关联，并准确复制涉及这些表的单个数据库事务中的所有更改（增量加载）。此外，应提供一种一致的核心数据模型视图初始加载方法。

---

• Read access
In certain contexts and for specific data sources, read-access logging may be necessary to guarantee auditing of each data access in the provider system. As a result, the data extraction solution must allow read-access logging for particular data sources.

**【译文】** • 读取访问
在某些情境下及针对特定数据源，为了保证对提供者系统中每次数据访问的审计，读取访问日志可能是必须的。因此，数据抽取解决方案必须允许对特定数据源进行读取访问日志记录。

---

• Data protection and privacy
Data in the source ERP system must comply with legal and product standards for data protection and privacy (data blocking, end-of-purpose deletions, reten­tion period handling). Even when extracted to another storage source, data must meet these requirements. The provider system must enable the consumer to be informed about data life cycle events through an information lifecycle manage­ment solution, and the consumer must consider these events and manage the data accordingly. ERP software offers interfaces to obtain information about informa­tion lifecycle management events. The data extraction technology must provide this information to relevant consumers. If an ERP system delivers a consumer, it must ensure proper data handling, or the customer can add the handling as desired.

**【译文】** • 数据保护与隐私
源ERP系统中的数据必须符合数据保护与隐私的法律和产品标准（如数据冻结、目的终止删除、保留期处理）。即使被抽取到另一个存储源，数据也必须满足这些要求。提供者系统必须能够通过信息生命周期管理解决方案通知消费者有关数据生命周期的事件，而消费者必须考虑这些事件并相应地管理数据。ERP软件提供了获取有关信息生命周期管理事件信息的接口。数据抽取技术必须将此信息提供给相关的消费者。如果ERP系统提供了一个消费者端，它必须确保恰当的数据处理，或者允许客户按需添加处理逻辑。

---

• Implicit selection
Since the smallest selectable entity for extraction by a consumer is a core data model view, this feature requires an option to define a set of views (1..N) for extraction. To simplify this selection, an option for implicitly selecting all core data model views related to a single business object should be available.

**【译文】** • 隐式选择
由于消费者可选择用于抽取的最小实体是核心数据模型视图，此功能需要一个选项来定义一组视图（1..N）进行抽取。为了简化此选择，应提供一个选项，用于隐式选择与单个业务对象相关的所有核心数据模型视图。

---

• Consumer-defined views
ERP data sources are generally not designed for specific consumer applications. They are defined as provider-driven core data model views and may not be tai­lored for a particular customer use case. Consequently, customers must be able to create their own data sources for replication (consumer-defined views). These data sources should have the same features and functions as defined ERP data sources. A customer may use all available whitelisted artifacts to build their data source, preferably based on stable core data model views. Customer- or consumer-­specific data sources may be required to replicate customer-specific data (custom business objects or fields) or to transform data to meet a specific consumer’s needs.

**【译文】** • 消费者定义视图
ERP数据源通常不是为特定的消费者应用程序设计的。它们被定义为提供者驱动的核心数据模型视图，可能并非为特定的客户用例量身定制。因此，客户必须能够创建自己的数据源进行复制（消费者定义视图）。这些数据源应具备与已定义的ERP数据源相同的特性和功能。客户可以使用所有可用的白名单构件来构建他们的数据源，最好是基于稳定的核心数据模型视图。可能需要客户或消费者特定的数据源来复制客户特定数据（自定义业务对象或字段）或转换数据以满足特定消费者的需求。

---

• Monitoring and analysis tools
The data integration solution must offer local tools for monitoring and error anal­ysis to identify and resolve data integration problems. Additionally, it must sup­port integration into ERP’s central tools for monitoring and error analysis, such as cross-system monitoring and error correction.

**【译文】** • 监控与分析工具
数据集成解决方案必须提供用于监控和错误分析的本地工具，以识别和解决数据集成问题。此外，它必须支持集成到ERP的中央监控和错误分析工具中，例如跨系统监控和错误修正。

---

• Stability contracts and independent upgrades
Communication partners in a data integration scenario must be capable of inde­pendent upgrades without requiring downtime on one side during the other’s upgrade. Therefore, data integration interfaces must adhere to specific stability contracts. Moreover, the integration technology must ensure that partners can be upgraded independently, including irregular field length extensions on the ERP system. The technology must provide a means to resume data integration at the point of disruption (e.g., network failure, consumer upgrades) without needing a complete data reload, ensuring that occasional disruptions do not affect overall data integration quality.

**【译文】** • 稳定性契约与独立升级
数据集成场景中的通信伙伴必须能够独立升级，而无需在一方升级期间要求另一方停机。因此，数据集成接口必须遵守特定的稳定性契约。此外，集成技术必须确保伙伴可以独立升级，包括ERP系统上不定期的字段长度扩展。该技术必须提供一种在中断点（例如，网络故障、消费者升级）恢复数据集成的方法，而无需完全重新加载数据，从而确保偶尔的中断不会影响整体数据集成质量。

---

• High data volume/data change support
The data integration technology should not impact the ERP system in a way that hinders normal, operational tasks. In particular, data integration should not necessitate planned downtime for the initial load to achieve consistency. The technology and protocols employed must support high data volumes and/or fre­quent data changes. The consumer should be able to receive data in defined pack­age sizes to avoid overload. The technology and protocols must also support scenarios with low bandwidth between communication partners. In accordance with the specific requirements of a given situation, it is essential to have the abil­ity to adjust the settings so that modifications in the data source can be reflected in the target system either almost instantaneously or within a designated time frame.

**【译文】** • 大数据量/数据变更支持
数据集成技术不应对ERP系统产生阻碍正常操作任务的影响。特别是，数据集成不应为了实现一致性而要求初始加载进行计划停机。所采用的技术和协议必须支持大数据量和/或频繁的数据变更。消费者应能够接收定义好包大小的数据，以避免过载。该技术和协议还必须支持通信伙伴之间带宽较低的场景。根据特定情况的具体要求，必须具备调整设置的能力，以便数据源中的修改可以几乎瞬间或在指定的时间范围内反映在目标系统中。

---

• On-premise and cloud support
The data integration solution should be capable of facilitating data integration between on-premise and cloud-based ERP systems, encompassing all possible combinations and interactions with external systems.

**【译文】** • 本地部署与云端支持
数据集成解决方案应能够促进本地部署和基于云的ERP系统之间的数据集成，涵盖所有可能的组合以及与外部系统的交互。

---

9.2 Solution Proposal
In contrast, Pull Data operates at consistent intervals, extracting pertinent infor­mation from the source system. A particular logic detects alterations in the source system, extracts the data, and transfers it to the target system. The pull model is typi­cally executed using a specific protocol, such as one for initial handshaking and package-wise data transmission. Consequently, the target system must also imple­ment this protocol, leading to tighter coupling and increased development efforts. Additionally, the source system must open a port to allow the target system to peri­odically retrieve data. This presents a security risk for ERP system setup, necessitat­ing extra protective measures. Moreover, the performance of transactional processes in ERP may be impacted if numerous target systems and a high volume of data sources are involved. The push model effectively decouples the source and target systems, but it primarily shifts the data transfer responsibility to the source system. The push and pull methods can also be combined, as seen in the Feed and Query

**【译文】** 9.2 解决方案建议
相比之下，“拉取数据”（Pull Data）模式按固定的时间间隔运行，从源系统中提取相关信息。特定的逻辑会检测源系统中的变更，提取数据，并将其传输到目标系统。拉取模型通常使用特定协议执行，例如用于初始握手和分包数据传输的协议。因此，目标系统也必须实现此协议，从而导致更紧密的耦合和开发工作量的增加。此外，源系统必须开放端口，允许目标系统定期检索数据。这给ERP系统的设置带来了安全风险，需要额外的保护措施。而且，如果涉及众多目标系统和大量数据源，ERP中事务处理流程的性能可能会受到影响。“推送模型”（Push model）有效地解耦了源系统和目标系统，但它主要将数据传输责任转移到了源系统。推送和拉取方法也可以结合使用，正如Feed和Query模型中所示。

---

